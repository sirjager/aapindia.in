/* eslint-disable quotes */
import { getPostsCount } from "@/db/getPosts";
import { getTopics } from "@/db/posts";
import type { APIRoute } from "astro";

export const getStaticPaths = async () => {
  const topics = await getTopics();
  const params = topics?.map((topic) => {
    return { params: { topic: topic.slug } };
  });
  return params;
};

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
  const { topic } = req.params;
  if (!topic) return new Response(null, { status: 404 });

  const sets: string[] = [];
  sets.push('<xml version="1.0" encoding="UTF-8">');
  sets.push('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">');

  const limit = 1000;
  const total = (await getPostsCount({ limit, filters: { topic: { _eq: topic } } })) || 0;
  const pages = Math.ceil(total / limit);

  for (let i = 1; i <= pages; i++) {
    const loc = `${baseURL}/blog/${topic}/page-${i}.xml`;
    sets.push(urlSet({ loc }));
  }

  sets.push("</urlset>");
  sets.push("</xml>");
  const sitemapData = sets.join("\n");
  const headers = { "Content-Type": "text/xml; charset=UTF-8" };
  return new Response(sitemapData, { status: 200, headers });
};
