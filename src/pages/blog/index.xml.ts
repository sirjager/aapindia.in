/* eslint-disable quotes */
import { getTopics } from "@/db/posts";
import type { APIRoute } from "astro";

export const GET: APIRoute = async (req) => {
  const baseURL = req.url.origin;
  const sets: string[] = [];
  sets.push(`<?xml version="1.0" encoding="UTF-8"?>`)
  sets.push('<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">');

  const topics = (await getTopics()) || [];

  topics.forEach((topic) => {
  const lastmod = new Date().toISOString();
    const loc = `${baseURL}/blog/${topic.slug}.xml`
    const string = `<sitemap><loc>${loc}</loc><lastmod>${lastmod}</lastmod></sitemap>`;
    sets.push(string);
  });

  sets.push("</sitemapindex>");
  const sitemapData = sets.join("\n");
  const headers = {
    "Content-Type": "text/xml; charset=UTF-8",
    "Cache-Control": "no-cache, no-store, must-revalidate, max-age=0",
  };
  return new Response(sitemapData, { status: 200, headers });
};
