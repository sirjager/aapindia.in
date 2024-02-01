import type { GetSitemapPagesQuery, GetSitemapPostsQuery, GetSitemapsQuery } from "@/db/graphql";
import type { Pages_Filter, Posts_Filter, Sitemaps_Filter } from "@/db/graphql";
import { GetSitemapPagesDocument, GetSitemapPostsDocument } from "@/db/graphql";
import { client, GetSitemapsDocument } from "@/db/graphql";
import type { CombinedError } from "@urql/core";
import { parseToNumber } from "@/lib/utils";
import directus from "./directus";

interface getSitemapsOpts {
  page?: number | null;
  limit?: number | null;
  sort?: string[] | null;
  offset?: number | null;
  search?: string | null;
  filters: Sitemaps_Filter;
}

export type Sitemap = GetSitemapsQuery["sitemaps"][0];

export interface GetSitemapsResult {
  sitemaps: Sitemap[];
  stale?: boolean;
  error?: CombinedError | undefined;
  number: number;
}

export async function getSitemaps(opts?: getSitemapsOpts): Promise<GetSitemapsResult | undefined> {
  const res = await client
    .query(GetSitemapsDocument, {
      ...opts,
      page: opts?.page ?? null,
      sort: opts?.sort ?? ["sort", "-date_updated", "-date_created"],
      limit: opts?.limit ?? -1,
      filter: {
        ...opts?.filters,
        status: opts?.filters.status ?? { _eq: "published" },
      },
    })
    .toPromise();
  if (!res.data) return undefined;
  const sitemaps: Sitemap[] = res.data.sitemaps;
  const result: GetSitemapsResult = {
    sitemaps,
    stale: res.stale,
    error: res.error,
    number: opts?.page || 1,
  };

  return result;
}

// ===========================================================================================================

export interface GetSitemapResult {
  sitemap: Sitemap;
  stale?: boolean | undefined;
  error?: CombinedError | undefined;
  number: number;
}

export async function getSitemap(opts?: getSitemapsOpts): Promise<GetSitemapResult | undefined> {
  const res = await getSitemaps(opts);
  if (!res) return undefined;
  if (res.sitemaps.length !== 1) return undefined;
  const page = res.sitemaps[0];
  const result: GetSitemapResult = {
    sitemap: page,
    error: res.error,
    stale: res.stale,
    number: opts?.page || 1,
  };
  return result;
}

// ===========================================================================================================

export interface getSitemapPostsOpts {
  limit?: number | null;
  page?: number | null;
  sort?: string[] | null;
  filters?: Posts_Filter;
}

export type SitemapPost = GetSitemapPostsQuery["posts"][0];

export interface GetSitemapPostsResult {
  posts: SitemapPost[];
  error?: CombinedError | undefined;
  stale?: boolean | null;
}

export async function getSitemapPosts(
  opts?: getSitemapPostsOpts
): Promise<GetSitemapPostsResult | undefined> {
  const res = await client.query(GetSitemapPostsDocument, {
    ...opts,
    sort: opts?.sort ?? ["-date_published", "-date_created"],
    limit: opts?.limit ?? -1,
    filter: {
      ...opts?.filters,
      status: opts?.filters?.status ?? { _eq: "published" },
    },
  });
  if (!res.data) return undefined;
  const posts: SitemapPost[] = res.data.posts;
  const { stale, error } = res;
  const result: GetSitemapPostsResult = { posts, stale, error };
  return result;
}

export async function getSitemapPostsCount(opts?: getSitemapPostsOpts) {
  let path = "/items/posts?aggregate[count]=*";
  const filters: getSitemapPostsOpts["filters"] = {
    ...opts?.filters,
    status: opts?.filters?.status ?? { _eq: "published" },
  };
  path = `${path}&filter=${JSON.stringify(filters)}`;
  const res = await directus(path);
  if (res && res.status === 200) {
    const { data } = await res.json();
    if (data && data.length === 1) return parseToNumber(data[0].count);
  }
}

// ===========================================================================================================

interface getSitemapPagesOpts {
  page?: number | null;
  limit?: number | null;
  sort?: string[] | null;
  offset?: number | null;
  search?: string | null;
  filters: Pages_Filter;
}

export type SitemapPage = GetSitemapPagesQuery["pages"][0];

export interface GetSitemapPagesResult {
  pages: SitemapPage[];
  stale?: boolean;
  error?: CombinedError | undefined;
  path: string;
  number: number;
}

export async function getPages(
  opts?: getSitemapPagesOpts
): Promise<GetSitemapPagesResult | undefined> {
  const res = await client
    .query(GetSitemapPagesDocument, {
      ...opts,
      page: opts?.page ?? null,
      sort: opts?.sort ?? ["-date_created", "-date_updated"],
      limit: opts?.limit ?? -1,
      filter: {
        ...opts?.filters,
        status: opts?.filters.status ?? { _eq: "published" },
      },
    })
    .toPromise();
  if (!res.data) return undefined;
  const pages: SitemapPage[] = res.data.pages;
  const result: GetSitemapPagesResult = {
    pages,
    stale: res.stale,
    error: res.error,
    number: opts?.page || 1,
    path: opts?.filters.path?._eq || "",
  };
  return result;
}

export async function getSitemapPagesCount(opts?: getSitemapPagesOpts) {
  let path = "/items/pages?aggregate[count]=*";
  const filters: getSitemapPagesOpts["filters"] = {
    ...opts?.filters,
    status: opts?.filters.status ?? { _eq: "published" },
  };
  path = `${path}&filter=${JSON.stringify(filters)}`;
  const res = await directus(path);
  if (res && res.status === 200) {
    const { data } = await res.json();
    if (data && data.length === 1) return parseToNumber(data[0].count);
  }
}
