export interface FetchDirectusOpts {
  headers?: Record<string, string>;
  cache?: RequestCache;
}

export default async function directus(p: string, o?: FetchDirectusOpts) {
  const url = `${import.meta.env.API_URL}${p}`;
  try {
    const headers: FetchDirectusOpts["headers"] = {
      ...o?.headers,
      "Content-Type": "application/json",
      Authorization: `Bearer ${import.meta.env.API_TOKEN}`,
    };
    const res = await fetch(url, { ...o, headers, method: "GET" });
    return res;
  } catch (_) {
    //
  }
}
