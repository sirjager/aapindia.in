import type { GetPagesQuery, Pages_Filter } from "@/db/graphql";
import { client, GetPagesDocument } from "@/db/graphql";
import { pageResolver } from "./resolver";

interface getPagesOpts {
  page?: number | null;
  limit?: number | null;
  sort?: string[] | null;
  offset?: number | null;
  search?: string | null;
  filters?: Pages_Filter;
}

export type Page = GetPagesQuery["pages"][0];

export interface PagesResult {
  pages: Page[];
  stale: boolean;
  path: string;
  number: number;
}

export async function getPages(opts?: getPagesOpts) {
  const res = await client
    .query(GetPagesDocument, {
      ...opts,
      page: opts?.page ?? null,
      sort: opts?.sort ?? ["-date_created", "-date_updated"],
      limit: opts?.limit ?? -1,
      filter: {
        ...opts?.filters,
        status: opts?.filters?.status ?? { _eq: "published" },
      },
    })
    .toPromise();

  if (res.error) console.log({ ...res.error, method: "getPages" });
  if (res.error) return undefined;
  if (!res.data) return undefined;

  const result: PagesResult = {
    stale: res.stale,
    number: opts?.page || 1,
    pages: res.data.pages,
    path: opts?.filters?.path?._eq || "",
  };
  return result;
}


interface getPagesOpts {
  page?: number | null;
  limit?: number | null;
  sort?: string[] | null;
  offset?: number | null;
  search?: string | null;
  filters?: Pages_Filter;
}

export interface PageResult {
  page: Page;
  stale: boolean;
  path: string;
  number: number;
}

export async function getPage(opts?: getPagesOpts) {
  const data = await getPages(opts);
  if (!data) return undefined;
  if (data.pages.length !== 1) return undefined;
  const result: PageResult = {
    page: data.pages[0],
    stale: data.stale,
    path: data.path,
    number: data.number,
  };
  return pageResolver(result)
}
