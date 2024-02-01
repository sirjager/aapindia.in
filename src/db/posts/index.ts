import type { GetPostsQuery, ImageFieldsFragment, Posts_Filter } from "@/db/graphql";
import { client, GetPostsDocument } from "@/db/graphql";
import directus from "@/db/directus";
import type { CombinedError } from "@urql/core";

function parseToNumber(value: any): number | undefined {
  const num = Number(value);
  return isNaN(num) ? undefined : num;
}

export function postUrl(post: Post) {
  let href = "/blog";
  if (post.topic && post.topic.length > 0) href += "/" + post.topic;
  href += "/" + post.slug;
  return href;
}

export interface Topic {
  name: string;
  slug: string;
}

export async function getTopics() {
  const url = "/items/autocomplete?fields=topics";
  const res = await directus(url);
  if (res && res.status === 200) {
    const { data } = await res.json();
    if (data && data.topics && data.topics) {
      const topics: Topic[] = data?.topics || [];
      return topics;
    }
  }
}

export interface getPostsOpts {
  content?: boolean;
  limit?: number | null;
  page?: number | null;
  sort?: string[] | null;
  filters?: Posts_Filter;
}

export type Post = GetPostsQuery["posts"][0];

export interface PostsResult {
  posts: Post[];
  error?: CombinedError | undefined;
  stale?: boolean | null;
}

export default async function getPosts(opts?: getPostsOpts): Promise<PostsResult | undefined> {
  const res = await client.query(GetPostsDocument, {
    ...opts,
    sort: opts?.sort ?? ["-date_published", "-date_created"],
    limit: opts?.limit ?? -1,
    filter: {
      ...opts?.filters,
      status: opts?.filters?.status ?? { _eq: "published" },
    },
  });
  if (!res.data) return undefined;
  const posts: Post[] = res.data.posts;
  const { stale, error } = res;
  const result: PostsResult = { posts, stale, error };
  return result;
}

export interface PostResult {
  post: Post;
  error?: CombinedError | undefined;
  stale?: boolean | undefined | null;
}

export async function getPost(opts?: getPostsOpts): Promise<PostResult | undefined> {
  const res = await getPosts(opts);
  if (res?.posts.length !== 1) return undefined;
  const { error, stale } = res;
  const post = res.posts[0];
  const result: PostResult = { post, error, stale };
  return result;
}

export async function getPostsCount(opts?: getPostsOpts) {
  let path = "/items/posts?aggregate[count]=*";
  const filters: getPostsOpts["filters"] = {
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

export interface Picture extends ImageFieldsFragment {
  resolved: string;
}
export function getImage(pic?: ImageFieldsFragment | null, post?: Post): Picture {
  const picture: Picture = {
    ...pic,
    id: "0",
    __typename: "images",
    resolved: `https://picsum.photos/seed/${post?.id}/640/360`,
  };

  if (pic?.source?.startsWith("https://drive.google.com/file/d/")) {
    const ids = pic.source.replaceAll("https://drive.google.com/file/d/", "");
    const imageID = ids.split("/")[0];
    if (imageID) {
      picture.resolved = `https://drive.google.com/uc?export=view&id=${imageID}`;
      return picture;
    }
  }

  return picture;
}
