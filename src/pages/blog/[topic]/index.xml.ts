/* eslint-disable quotes */
import { getPostsCount } from "@/db/posts";
import { getTopics } from "@/db/posts";
import type { APIRoute } from "astro";

export const getStaticPaths = async () => {
  const topics = await getTopics();
  const params = topics?.map((topic) => {
    return { params: { topic: topic.slug } };
  });
  return params;
};

export const GET: APIRoute = async (req) => {
  const baseURL = req.url.origin;
  const { topic } = req.params;
  if (!topic) return new Response(null, { status: 404 });

  const sets: string[] = [];
  sets.push(`<?xml version="1.0" encoding="UTF-8"?>`);
  sets.push('<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">');

  const limit = 1000;
  const total = (await getPostsCount({ limit, filters: { topic: { _eq: topic } } })) || 0;
  const pages = Math.ceil(total / limit);

  for (let i = 1; i <= pages; i++) {
    const loc = `${baseURL}/blog/${topic}/page-${i}.xml`;
    const lastmod = new Date().toISOString();
    const string = `<sitemap><loc>${loc}</loc><lastmod>${lastmod}</lastmod></sitemap>`;
    sets.push(string);
  }

  sets.push("</sitemapindex>");
  const sitemapData = sets.join("\n");
  const headers = {
    "Content-Type": "text/xml; charset=UTF-8",
    "Cache-Control": "no-cache, no-store, must-revalidate, max-age=0",
  };
  return new Response(sitemapData, { status: 200, headers });
};
