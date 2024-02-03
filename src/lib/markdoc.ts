/* eslint-disable no-unused-vars */
import { slug as slugify } from "github-slugger";
import * as cheerio from "cheerio";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import Markdoc from "@markdoc/markdoc";
import readingTime from "reading-time";
import type { SiteInfo } from "@/db/globals";

export interface Heading {
  id: string;
  level: number;
  text: string;
}
export interface ReadTime {
  text: string;
  minutes: number;
  time: number;
  words: number;
}

// @ts-ignore eslint-disable-next-line @typescript-eslint/no-unused-vars
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const markdocConfigs = (info?: SiteInfo) => {
  let configs = {};
  if (info) {
    configs = {
      ...configs,
      variables: {
        site: {
          name: info.name,
          tagline: info.tagline,
          description: info.description,
        },
      },
    };
  }
  return configs;
};

const markdoc = (md?: string | null, editor?: string | null, site?: SiteInfo) => {
  let _html = md || "";
  if (editor === "markdown") {
    const ast = Markdoc.parse(md || "");
    const configs = markdocConfigs(site);
    const content = Markdoc.transform(ast, configs);
    _html = Markdoc.renderers.html(content);
  }
  const data = parseHtml(_html);
  const readtime: ReadTime = readingTime(_html);
  return { ...data, readtime };
};

export function parseHtml(htmlString: string) {
  const $ = cheerio.load(htmlString);

  // INFO: Targeting all headings for table of content
  const allHeadings = $("h1, h2, h3, h4, h5, h6");
  const headings: Heading[] = [];
  allHeadings.each((_index, h: any) => {
    try {
      const text = $(h).text();
      const id = slugify(text);
      if (h.tagName) {
        const level = Number(h.tagName.replace("h", ""));
        const heading = { id, level, text };
        headings.push(heading);

        // INFO: adding id to heading tag
        $(h).attr("id", id);
        $(h).addClass(cn("prose"));
      }
    } catch (_) {
      //
    }
  });

  const html = $.html();

  return { html, headings };
}

export default markdoc;
