/* eslint-disable quotes */
import { getPostsCount } from "@/db/posts";
import { getSitemapPosts } from "@/db/getSitemaps";
import { getTopics } from "@/db/posts";
import { parseToNumber } from "@/lib/utils";
import type { APIRoute } from "astro";
import { SITEMAP_SIZE } from "@/lib/constants";

export const getStaticPaths = async () => {
  const topics = (await getTopics()) || [];
  const params: { params: { topic: string; slug: string } }[] = [];
  for (let i = 0; i < topics.length; i++) {
    const topic = topics[i];
    const limit = SITEMAP_SIZE;
    const total = await getPostsCount({ limit, filters: { topic: { _eq: topic.slug } } });
    if(!total) continue;
    const pages = Math.ceil(total / limit);
    for (let j = 1; j <= pages; j++) {
      params.push({ params: { topic: topic.slug, slug: `sitemap-${j}` } });
    }
  }
  return params;
};

export const GET: APIRoute = async (req) => {
  const baseURL = req.url.origin;
  const { topic, slug } = req.params;
  if (!topic || !slug) return new Response(null, { status: 404 });

  const sets: string[] = [];
  sets.push(`<?xml version="1.0" encoding="UTF-8"?>`);
  sets.push(`<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`);

  const pageNumber = slug.split("-")[1];
  const page = parseToNumber(pageNumber);
  if (!page) return new Response(null, { status: 404 });

  const limit = SITEMAP_SIZE;
  const posts = await getSitemapPosts({ page, limit, filters: { topic: { _eq: topic } } });
  if (posts) {
    for (let i = 0; i < posts.posts.length; i++) {
      const post = posts.posts[i];
      const lastmod = post.date_updated ?? new Date().toISOString();
      const loc = `${baseURL}/blog/${topic}/${post.slug}`;
      const _post = `<url><loc>${loc}</loc><lastmod>${lastmod}</lastmod></url>`;
      sets.push(_post);
    }
  }

  sets.push("</urlset>");
  const sitemapData = sets.join("\n");
  const headers = {
    "Content-Type": "text/xml; charset=UTF-8",
    "Cache-Control": "no-cache, no-store, must-revalidate, max-age=0",
  };
  return new Response(sitemapData, { status: 200, headers });
};
