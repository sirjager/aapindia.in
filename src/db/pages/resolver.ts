import type { PageResult, Page } from ".";
import getPosts, { type Post, getPostsCount } from "@/db/posts";
import { type Paginated, paginate } from "@/lib/pagination";

export interface BlockPosts {
  total: number;
  posts: Post[];
  active: number;
  pagination: Paginated;
}

export const pageResolver = async (pr: PageResult) => {
  const pageBlocks = pr.page.blocks || [];
  const page: Page = pr.page;
  const blocks: Page["blocks"] = [];
  for (let i = 0; i < pageBlocks.length; i++) {
    const ob = pageBlocks[i];
    let block: any = ob;
    if (ob?.item?.__typename === "block_posts") {
      const topic = ob.item.topic;
      if (topic) {
        const total = await getPostsCount({ filters: { topic: { _eq: topic } } });
        const limit = ob.item.perpage || 10;
        const active = pr.number;
        const path = page.path;
        const _posts = await getPosts({ page: active, limit, filters: { topic: { _eq: topic } } });
        const pagination = paginate({ limit, path, total: total ?? 0, active });
        const posts: BlockPosts = {
          total: total || 0,
          pagination: pagination,
          posts: _posts?.posts || [],
          active: pr.number || 1,
        };
        block = { ...ob, item: { ...ob.item, posts } };
        block = { ...ob, item: { ...ob.item, posts } };
      }
    }
    blocks.push(block);
  }
  page.blocks = blocks;
  const result: PageResult = { ...pr, page: page };
  return result;
};
