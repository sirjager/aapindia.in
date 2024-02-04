/* eslint-disable quotes */
import { getSitemapPosts } from "@/db/getSitemaps";
import { getTopics } from "@/db/posts";
import { SITEMAP_SIZE } from "@/lib/constants";
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
  sets.push('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">');

  const limit = SITEMAP_SIZE;
  const posts = await getSitemapPosts({ limit, filters: { topic: { _eq: topic } } });
  if (!posts) return new Response(null, { status: 404 });
  for (let i = 0; i < posts.posts.length; i++) {
    const post = posts.posts[i];
    const loc = `${baseURL}/blog/${post.topic}/${post.slug}`;
    const lastmod = post.date_updated ?? new Date().toISOString();
    const changefreq = "weekly";
    const priority = 0.7;
    const string = `
      <url>
        <loc>${loc}</loc>
        <lastmod>${lastmod}</lastmod>
        <changefreq>${changefreq}</changefreq>
        <priority>${priority}</priority>
      </url>`;
    sets.push(string);
  }

  sets.push("</urlset>");
  const sitemapData = sets.join("\n");
  const headers = {
    "Content-Type": "text/xml; charset=UTF-8",
    "Cache-Control": "no-cache, no-store, must-revalidate, max-age=0",
  };
  return new Response(sitemapData, { status: 200, headers });
};
