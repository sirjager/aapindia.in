import type { APIRoute } from "astro";

const urlSet = ({ loc }: { loc: string }) => {
  const lastmod = new Date().toISOString();
  const freq = "weekly";
  const priority = 0.7;
  return `<sitemap>
          <loc>${loc}</loc>
          <lastmod>${lastmod}</lastmod>
          <changefreq>${freq}</changefreq>
          <priority>${priority}</priority>
        </sitemap>`;
};

export const GET: APIRoute = async (req) => {
  const baseURL = req.url.origin;
  const sets: string[] = [];
  // eslint-disable-next-line quotes
  sets.push(`<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`);
  sets.push(urlSet({ loc: baseURL }));
  sets.push(urlSet({ loc: `${baseURL}/blog.xml` }));
  sets.push("</sitemapindex>");
  const sitemapData = sets.join("\n");
  const headers = { "Content-Type": "text/xml; charset=UTF-8" };
  return new Response(sitemapData, { status: 200, headers });
};
