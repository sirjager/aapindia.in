/* eslint-disable quotes */
import { getPostsCount, getTopics } from "@/db/posts";
import { SITEMAP_SIZE } from "@/lib/constants";
import type { APIRoute } from "astro";

export const GET: APIRoute = async (req) => {
  const baseURL = req.url.origin;
  const sets: string[] = [];
  sets.push(`<?xml version="1.0" encoding="UTF-8"?>`);
  sets.push('<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">');


  // TODO: Add Sitemaps here
  const topics = (await getTopics()) || [];
  for (let i = 0; i < topics.length; i++) {
    const topic = topics[i];
    const limit = SITEMAP_SIZE;
    const total = await getPostsCount({ limit, filters: { topic: { _eq: topic.slug } } });
    if (!total) continue;
    const pages = Math.ceil(total / limit);
    if (pages < 1) continue;
    if (pages < 2) {
      const loc = `${baseURL}/blog/${topic.slug}.xml`;
      const lastmod = new Date().toISOString();
      const _sitemap = `<sitemap><loc>${loc}</loc><lastmod>${lastmod}</lastmod></sitemap>`;
      sets.push(_sitemap);
    } else {
      for (let j = 1; j <= pages; j++) {
        const loc = `${baseURL}/blog/${topic.slug}/sitemap-${j}.xml`;
        const lastmod = new Date().toISOString();
        const _sitemap = `<sitemap><loc>${loc}</loc><lastmod>${lastmod}</lastmod></sitemap>`;
        sets.push(_sitemap);
      }
    }
  }

  // TODO: Add Sitemaps above this
  sets.push("</sitemapindex>");
  const sitemapData = sets.join("\n");
  const headers = {
    "Content-Type": "text/xml; charset=UTF-8",
    "Cache-Control": "no-cache, no-store, must-revalidate, max-age=0",
  };
  return new Response(sitemapData, { status: 200, headers });
};
