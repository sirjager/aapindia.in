/* eslint-disable quotes */
import { getTopics } from "@/db/posts";
import type { APIRoute } from "astro";

const urlSet = ({ loc }: { loc: string }) => {
  const lastmod = new Date().toISOString();
  const freq = "weekly";
  const priority = 0.7;
  return `<url>
          <loc>${loc}</loc>
          <lastmod>${lastmod}</lastmod>
          <changefreq>${freq}</changefreq>
          <priority>${priority}</priority>
        </url>`;
};

export const GET: APIRoute = async (req) => {
  const baseURL = req.url.origin;
  const sets: string[] = [];
  sets.push('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">');

  const topics = (await getTopics()) || [];

  topics.forEach((topic) => {
    sets.push(urlSet({ loc: `${baseURL}/blog/${topic.slug}.xml` }));
  });

  sets.push("</urlset>");
  const sitemapData = sets.join("\n");
  const headers = { "Content-Type": "text/xml; charset=UTF-8" };
  return new Response(sitemapData, { status: 200, headers });
};
