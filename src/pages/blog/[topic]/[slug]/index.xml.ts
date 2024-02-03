/* eslint-disable quotes */
import { getPostsCount } from "@/db/posts";
import { getSitemapPosts } from "@/db/getSitemaps";
import { getTopics } from "@/db/posts";
import { parseToNumber } from "@/lib/utils";
import type { APIRoute } from "astro";

export const getStaticPaths = async () => {
  const topics = (await getTopics()) || [];
  const params: { params: { topic: string; slug: string } }[] = [];
  for (let i = 0; i < topics.length; i++) {
    const topic = topics[i];
    const limit = 1000;
    const total = (await getPostsCount({ filters: { topic: { _eq: topic.slug } } })) || 0;
    const pages = Math.ceil(total / limit);
    for (let j = 1; j <= pages; j++) {
      params.push({ params: { topic: topic.slug, slug: `page-${j}` } });
    }
  }
  return params;
};

export const GET: APIRoute = async (req) => {
  const baseURL = req.url.origin;
  const { topic, slug } = req.params;
  if (!topic || !slug) return new Response(null, { status: 404 });

  const sets: string[] = [];
  sets.push('<xml version="1.0" encoding="UTF-8">');
  sets.push('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">');

  const limit = 1000;
  const page = parseToNumber(slug.replace("page-", "")) || 1;
  const posts = await getSitemapPosts({ page, limit, filters: { topic: { _eq: topic } } });

  if (posts) {
    for (let i = 0; i < posts.posts.length; i++) {
      const post = posts.posts[i];
      const lastmod = post.date_updated ?? new Date().toISOString();
      const string = `
        <url>
          <loc>${baseURL}/blog/${topic}/${post.slug}</loc>
          <lastmod>${lastmod}</lastmod>
          <changefreq>weekly</changefreq>
          <priority>0.7</priority>
        </url>`;
      sets.push(string);
    }
  }

  sets.push("</urlset>");
  sets.push("</xml>");
  const sitemapData = sets.join("\n");
  const headers = { "Content-Type": "text/xml; charset=UTF-8" };
  return new Response(sitemapData, { status: 200, headers });
};
