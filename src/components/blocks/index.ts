import type { GetPagesQuery } from "@/db/graphql";

export type BlockType = GetPagesQuery["pages"][number]["blocks"];

export function getBlock(blocks: BlockType) {
  if (!blocks || blocks.length !== 1) return null;
  const block = blocks[0];
  if (!block) return null;
  if (!block.item) return null;
  return block.item;
}
