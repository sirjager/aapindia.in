import type { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = {
  [_ in K]?: never;
};
export type Incremental<T> =
  | T
  | { [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  Date: { input: any; output: any };
  GraphQLBigInt: { input: any; output: any };
  GraphQLStringOrFloat: { input: any; output: any };
  Hash: { input: any; output: any };
  JSON: { input: any; output: any };
};

export enum EventEnum {
  Create = "create",
  Delete = "delete",
  Update = "update",
}

export type Query = {
  __typename?: "Query";
  autocomplete?: Maybe<Autocomplete>;
  autocomplete_by_version?: Maybe<Version_Autocomplete>;
  block_button: Array<Block_Button>;
  block_button_aggregated: Array<Block_Button_Aggregated>;
  block_button_by_id?: Maybe<Block_Button>;
  block_button_by_version?: Maybe<Version_Block_Button>;
  block_card: Array<Block_Card>;
  block_card_aggregated: Array<Block_Card_Aggregated>;
  block_card_by_id?: Maybe<Block_Card>;
  block_card_by_version?: Maybe<Version_Block_Card>;
  block_content: Array<Block_Content>;
  block_content_aggregated: Array<Block_Content_Aggregated>;
  block_content_by_id?: Maybe<Block_Content>;
  block_content_by_version?: Maybe<Version_Block_Content>;
  block_faq: Array<Block_Faq>;
  block_faq_aggregated: Array<Block_Faq_Aggregated>;
  block_faq_by_id?: Maybe<Block_Faq>;
  block_faq_by_version?: Maybe<Version_Block_Faq>;
  block_faq_faqs: Array<Block_Faq_Faqs>;
  block_faq_faqs_aggregated: Array<Block_Faq_Faqs_Aggregated>;
  block_faq_faqs_by_id?: Maybe<Block_Faq_Faqs>;
  block_faq_faqs_by_version?: Maybe<Version_Block_Faq_Faqs>;
  block_gallery: Array<Block_Gallery>;
  block_gallery_aggregated: Array<Block_Gallery_Aggregated>;
  block_gallery_by_id?: Maybe<Block_Gallery>;
  block_gallery_by_version?: Maybe<Version_Block_Gallery>;
  block_gallery_images: Array<Block_Gallery_Images>;
  block_gallery_images_aggregated: Array<Block_Gallery_Images_Aggregated>;
  block_gallery_images_by_id?: Maybe<Block_Gallery_Images>;
  block_gallery_images_by_version?: Maybe<Version_Block_Gallery_Images>;
  block_hero: Array<Block_Hero>;
  block_hero_aggregated: Array<Block_Hero_Aggregated>;
  block_hero_block_button: Array<Block_Hero_Block_Button>;
  block_hero_block_button_aggregated: Array<Block_Hero_Block_Button_Aggregated>;
  block_hero_block_button_by_id?: Maybe<Block_Hero_Block_Button>;
  block_hero_block_button_by_version?: Maybe<Version_Block_Hero_Block_Button>;
  block_hero_by_id?: Maybe<Block_Hero>;
  block_hero_by_version?: Maybe<Version_Block_Hero>;
  block_hero_images: Array<Block_Hero_Images>;
  block_hero_images_aggregated: Array<Block_Hero_Images_Aggregated>;
  block_hero_images_by_id?: Maybe<Block_Hero_Images>;
  block_hero_images_by_version?: Maybe<Version_Block_Hero_Images>;
  block_image: Array<Block_Image>;
  block_image_aggregated: Array<Block_Image_Aggregated>;
  block_image_by_id?: Maybe<Block_Image>;
  block_image_by_version?: Maybe<Version_Block_Image>;
  block_posts: Array<Block_Posts>;
  block_posts_aggregated: Array<Block_Posts_Aggregated>;
  block_posts_by_id?: Maybe<Block_Posts>;
  block_posts_by_version?: Maybe<Version_Block_Posts>;
  block_quote: Array<Block_Quote>;
  block_quote_aggregated: Array<Block_Quote_Aggregated>;
  block_quote_by_id?: Maybe<Block_Quote>;
  block_quote_by_version?: Maybe<Version_Block_Quote>;
  block_video: Array<Block_Video>;
  block_video_aggregated: Array<Block_Video_Aggregated>;
  block_video_by_id?: Maybe<Block_Video>;
  block_video_by_version?: Maybe<Version_Block_Video>;
  categories: Array<Categories>;
  categories_aggregated: Array<Categories_Aggregated>;
  categories_by_id?: Maybe<Categories>;
  categories_by_version?: Maybe<Version_Categories>;
  faqs: Array<Faqs>;
  faqs_aggregated: Array<Faqs_Aggregated>;
  faqs_by_id?: Maybe<Faqs>;
  faqs_by_version?: Maybe<Version_Faqs>;
  forms: Array<Forms>;
  forms_aggregated: Array<Forms_Aggregated>;
  forms_by_id?: Maybe<Forms>;
  forms_by_version?: Maybe<Version_Forms>;
  globals?: Maybe<Globals>;
  globals_by_version?: Maybe<Version_Globals>;
  images: Array<Images>;
  images_aggregated: Array<Images_Aggregated>;
  images_by_id?: Maybe<Images>;
  images_by_version?: Maybe<Version_Images>;
  pages: Array<Pages>;
  pages_aggregated: Array<Pages_Aggregated>;
  pages_blocks: Array<Pages_Blocks>;
  pages_blocks_aggregated: Array<Pages_Blocks_Aggregated>;
  pages_blocks_by_id?: Maybe<Pages_Blocks>;
  pages_blocks_by_version?: Maybe<Version_Pages_Blocks>;
  pages_by_id?: Maybe<Pages>;
  pages_by_version?: Maybe<Version_Pages>;
  posts: Array<Posts>;
  posts_aggregated: Array<Posts_Aggregated>;
  posts_blocks: Array<Posts_Blocks>;
  posts_blocks_aggregated: Array<Posts_Blocks_Aggregated>;
  posts_blocks_by_id?: Maybe<Posts_Blocks>;
  posts_blocks_by_version?: Maybe<Version_Posts_Blocks>;
  posts_by_id?: Maybe<Posts>;
  posts_by_version?: Maybe<Version_Posts>;
  posts_categories: Array<Posts_Categories>;
  posts_categories_aggregated: Array<Posts_Categories_Aggregated>;
  posts_categories_by_id?: Maybe<Posts_Categories>;
  posts_categories_by_version?: Maybe<Version_Posts_Categories>;
  posts_tags: Array<Posts_Tags>;
  posts_tags_aggregated: Array<Posts_Tags_Aggregated>;
  posts_tags_by_id?: Maybe<Posts_Tags>;
  posts_tags_by_version?: Maybe<Version_Posts_Tags>;
  redirects: Array<Redirects>;
  redirects_aggregated: Array<Redirects_Aggregated>;
  redirects_by_id?: Maybe<Redirects>;
  redirects_by_version?: Maybe<Version_Redirects>;
  seo: Array<Seo>;
  seo_aggregated: Array<Seo_Aggregated>;
  seo_by_id?: Maybe<Seo>;
  seo_by_version?: Maybe<Version_Seo>;
  sitemaps: Array<Sitemaps>;
  sitemaps_aggregated: Array<Sitemaps_Aggregated>;
  sitemaps_by_id?: Maybe<Sitemaps>;
  sitemaps_by_version?: Maybe<Version_Sitemaps>;
  sitemaps_excluded: Array<Sitemaps_Excluded>;
  sitemaps_excluded_aggregated: Array<Sitemaps_Excluded_Aggregated>;
  sitemaps_excluded_by_id?: Maybe<Sitemaps_Excluded>;
  sitemaps_excluded_by_version?: Maybe<Version_Sitemaps_Excluded>;
  sitemaps_included: Array<Sitemaps_Included>;
  sitemaps_included_aggregated: Array<Sitemaps_Included_Aggregated>;
  sitemaps_included_by_id?: Maybe<Sitemaps_Included>;
  sitemaps_included_by_version?: Maybe<Version_Sitemaps_Included>;
  tags: Array<Tags>;
  tags_aggregated: Array<Tags_Aggregated>;
  tags_by_id?: Maybe<Tags>;
  tags_by_version?: Maybe<Version_Tags>;
};

export type QueryAutocomplete_By_VersionArgs = {
  version: Scalars["String"]["input"];
};

export type QueryBlock_ButtonArgs = {
  filter?: InputMaybe<Block_Button_Filter>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type QueryBlock_Button_AggregatedArgs = {
  filter?: InputMaybe<Block_Button_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type QueryBlock_Button_By_IdArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryBlock_Button_By_VersionArgs = {
  id: Scalars["ID"]["input"];
  version: Scalars["String"]["input"];
};

export type QueryBlock_CardArgs = {
  filter?: InputMaybe<Block_Card_Filter>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type QueryBlock_Card_AggregatedArgs = {
  filter?: InputMaybe<Block_Card_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type QueryBlock_Card_By_IdArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryBlock_Card_By_VersionArgs = {
  id: Scalars["ID"]["input"];
  version: Scalars["String"]["input"];
};

export type QueryBlock_ContentArgs = {
  filter?: InputMaybe<Block_Content_Filter>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type QueryBlock_Content_AggregatedArgs = {
  filter?: InputMaybe<Block_Content_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type QueryBlock_Content_By_IdArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryBlock_Content_By_VersionArgs = {
  id: Scalars["ID"]["input"];
  version: Scalars["String"]["input"];
};

export type QueryBlock_FaqArgs = {
  filter?: InputMaybe<Block_Faq_Filter>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type QueryBlock_Faq_AggregatedArgs = {
  filter?: InputMaybe<Block_Faq_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type QueryBlock_Faq_By_IdArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryBlock_Faq_By_VersionArgs = {
  id: Scalars["ID"]["input"];
  version: Scalars["String"]["input"];
};

export type QueryBlock_Faq_FaqsArgs = {
  filter?: InputMaybe<Block_Faq_Faqs_Filter>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type QueryBlock_Faq_Faqs_AggregatedArgs = {
  filter?: InputMaybe<Block_Faq_Faqs_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type QueryBlock_Faq_Faqs_By_IdArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryBlock_Faq_Faqs_By_VersionArgs = {
  id: Scalars["ID"]["input"];
  version: Scalars["String"]["input"];
};

export type QueryBlock_GalleryArgs = {
  filter?: InputMaybe<Block_Gallery_Filter>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type QueryBlock_Gallery_AggregatedArgs = {
  filter?: InputMaybe<Block_Gallery_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type QueryBlock_Gallery_By_IdArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryBlock_Gallery_By_VersionArgs = {
  id: Scalars["ID"]["input"];
  version: Scalars["String"]["input"];
};

export type QueryBlock_Gallery_ImagesArgs = {
  filter?: InputMaybe<Block_Gallery_Images_Filter>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type QueryBlock_Gallery_Images_AggregatedArgs = {
  filter?: InputMaybe<Block_Gallery_Images_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type QueryBlock_Gallery_Images_By_IdArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryBlock_Gallery_Images_By_VersionArgs = {
  id: Scalars["ID"]["input"];
  version: Scalars["String"]["input"];
};

export type QueryBlock_HeroArgs = {
  filter?: InputMaybe<Block_Hero_Filter>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type QueryBlock_Hero_AggregatedArgs = {
  filter?: InputMaybe<Block_Hero_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type QueryBlock_Hero_Block_ButtonArgs = {
  filter?: InputMaybe<Block_Hero_Block_Button_Filter>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type QueryBlock_Hero_Block_Button_AggregatedArgs = {
  filter?: InputMaybe<Block_Hero_Block_Button_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type QueryBlock_Hero_Block_Button_By_IdArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryBlock_Hero_Block_Button_By_VersionArgs = {
  id: Scalars["ID"]["input"];
  version: Scalars["String"]["input"];
};

export type QueryBlock_Hero_By_IdArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryBlock_Hero_By_VersionArgs = {
  id: Scalars["ID"]["input"];
  version: Scalars["String"]["input"];
};

export type QueryBlock_Hero_ImagesArgs = {
  filter?: InputMaybe<Block_Hero_Images_Filter>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type QueryBlock_Hero_Images_AggregatedArgs = {
  filter?: InputMaybe<Block_Hero_Images_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type QueryBlock_Hero_Images_By_IdArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryBlock_Hero_Images_By_VersionArgs = {
  id: Scalars["ID"]["input"];
  version: Scalars["String"]["input"];
};

export type QueryBlock_ImageArgs = {
  filter?: InputMaybe<Block_Image_Filter>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type QueryBlock_Image_AggregatedArgs = {
  filter?: InputMaybe<Block_Image_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type QueryBlock_Image_By_IdArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryBlock_Image_By_VersionArgs = {
  id: Scalars["ID"]["input"];
  version: Scalars["String"]["input"];
};

export type QueryBlock_PostsArgs = {
  filter?: InputMaybe<Block_Posts_Filter>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type QueryBlock_Posts_AggregatedArgs = {
  filter?: InputMaybe<Block_Posts_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type QueryBlock_Posts_By_IdArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryBlock_Posts_By_VersionArgs = {
  id: Scalars["ID"]["input"];
  version: Scalars["String"]["input"];
};

export type QueryBlock_QuoteArgs = {
  filter?: InputMaybe<Block_Quote_Filter>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type QueryBlock_Quote_AggregatedArgs = {
  filter?: InputMaybe<Block_Quote_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type QueryBlock_Quote_By_IdArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryBlock_Quote_By_VersionArgs = {
  id: Scalars["ID"]["input"];
  version: Scalars["String"]["input"];
};

export type QueryBlock_VideoArgs = {
  filter?: InputMaybe<Block_Video_Filter>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type QueryBlock_Video_AggregatedArgs = {
  filter?: InputMaybe<Block_Video_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type QueryBlock_Video_By_IdArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryBlock_Video_By_VersionArgs = {
  id: Scalars["ID"]["input"];
  version: Scalars["String"]["input"];
};

export type QueryCategoriesArgs = {
  filter?: InputMaybe<Categories_Filter>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type QueryCategories_AggregatedArgs = {
  filter?: InputMaybe<Categories_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type QueryCategories_By_IdArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryCategories_By_VersionArgs = {
  id: Scalars["ID"]["input"];
  version: Scalars["String"]["input"];
};

export type QueryFaqsArgs = {
  filter?: InputMaybe<Faqs_Filter>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type QueryFaqs_AggregatedArgs = {
  filter?: InputMaybe<Faqs_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type QueryFaqs_By_IdArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryFaqs_By_VersionArgs = {
  id: Scalars["ID"]["input"];
  version: Scalars["String"]["input"];
};

export type QueryFormsArgs = {
  filter?: InputMaybe<Forms_Filter>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type QueryForms_AggregatedArgs = {
  filter?: InputMaybe<Forms_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type QueryForms_By_IdArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryForms_By_VersionArgs = {
  id: Scalars["ID"]["input"];
  version: Scalars["String"]["input"];
};

export type QueryGlobals_By_VersionArgs = {
  version: Scalars["String"]["input"];
};

export type QueryImagesArgs = {
  filter?: InputMaybe<Images_Filter>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type QueryImages_AggregatedArgs = {
  filter?: InputMaybe<Images_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type QueryImages_By_IdArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryImages_By_VersionArgs = {
  id: Scalars["ID"]["input"];
  version: Scalars["String"]["input"];
};

export type QueryPagesArgs = {
  filter?: InputMaybe<Pages_Filter>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type QueryPages_AggregatedArgs = {
  filter?: InputMaybe<Pages_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type QueryPages_BlocksArgs = {
  filter?: InputMaybe<Pages_Blocks_Filter>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type QueryPages_Blocks_AggregatedArgs = {
  filter?: InputMaybe<Pages_Blocks_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type QueryPages_Blocks_By_IdArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryPages_Blocks_By_VersionArgs = {
  id: Scalars["ID"]["input"];
  version: Scalars["String"]["input"];
};

export type QueryPages_By_IdArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryPages_By_VersionArgs = {
  id: Scalars["ID"]["input"];
  version: Scalars["String"]["input"];
};

export type QueryPostsArgs = {
  filter?: InputMaybe<Posts_Filter>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type QueryPosts_AggregatedArgs = {
  filter?: InputMaybe<Posts_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type QueryPosts_BlocksArgs = {
  filter?: InputMaybe<Posts_Blocks_Filter>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type QueryPosts_Blocks_AggregatedArgs = {
  filter?: InputMaybe<Posts_Blocks_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type QueryPosts_Blocks_By_IdArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryPosts_Blocks_By_VersionArgs = {
  id: Scalars["ID"]["input"];
  version: Scalars["String"]["input"];
};

export type QueryPosts_By_IdArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryPosts_By_VersionArgs = {
  id: Scalars["ID"]["input"];
  version: Scalars["String"]["input"];
};

export type QueryPosts_CategoriesArgs = {
  filter?: InputMaybe<Posts_Categories_Filter>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type QueryPosts_Categories_AggregatedArgs = {
  filter?: InputMaybe<Posts_Categories_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type QueryPosts_Categories_By_IdArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryPosts_Categories_By_VersionArgs = {
  id: Scalars["ID"]["input"];
  version: Scalars["String"]["input"];
};

export type QueryPosts_TagsArgs = {
  filter?: InputMaybe<Posts_Tags_Filter>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type QueryPosts_Tags_AggregatedArgs = {
  filter?: InputMaybe<Posts_Tags_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type QueryPosts_Tags_By_IdArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryPosts_Tags_By_VersionArgs = {
  id: Scalars["ID"]["input"];
  version: Scalars["String"]["input"];
};

export type QueryRedirectsArgs = {
  filter?: InputMaybe<Redirects_Filter>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type QueryRedirects_AggregatedArgs = {
  filter?: InputMaybe<Redirects_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type QueryRedirects_By_IdArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryRedirects_By_VersionArgs = {
  id: Scalars["ID"]["input"];
  version: Scalars["String"]["input"];
};

export type QuerySeoArgs = {
  filter?: InputMaybe<Seo_Filter>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type QuerySeo_AggregatedArgs = {
  filter?: InputMaybe<Seo_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type QuerySeo_By_IdArgs = {
  id: Scalars["ID"]["input"];
};

export type QuerySeo_By_VersionArgs = {
  id: Scalars["ID"]["input"];
  version: Scalars["String"]["input"];
};

export type QuerySitemapsArgs = {
  filter?: InputMaybe<Sitemaps_Filter>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type QuerySitemaps_AggregatedArgs = {
  filter?: InputMaybe<Sitemaps_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type QuerySitemaps_By_IdArgs = {
  id: Scalars["ID"]["input"];
};

export type QuerySitemaps_By_VersionArgs = {
  id: Scalars["ID"]["input"];
  version: Scalars["String"]["input"];
};

export type QuerySitemaps_ExcludedArgs = {
  filter?: InputMaybe<Sitemaps_Excluded_Filter>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type QuerySitemaps_Excluded_AggregatedArgs = {
  filter?: InputMaybe<Sitemaps_Excluded_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type QuerySitemaps_Excluded_By_IdArgs = {
  id: Scalars["ID"]["input"];
};

export type QuerySitemaps_Excluded_By_VersionArgs = {
  id: Scalars["ID"]["input"];
  version: Scalars["String"]["input"];
};

export type QuerySitemaps_IncludedArgs = {
  filter?: InputMaybe<Sitemaps_Included_Filter>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type QuerySitemaps_Included_AggregatedArgs = {
  filter?: InputMaybe<Sitemaps_Included_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type QuerySitemaps_Included_By_IdArgs = {
  id: Scalars["ID"]["input"];
};

export type QuerySitemaps_Included_By_VersionArgs = {
  id: Scalars["ID"]["input"];
  version: Scalars["String"]["input"];
};

export type QueryTagsArgs = {
  filter?: InputMaybe<Tags_Filter>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type QueryTags_AggregatedArgs = {
  filter?: InputMaybe<Tags_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type QueryTags_By_IdArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryTags_By_VersionArgs = {
  id: Scalars["ID"]["input"];
  version: Scalars["String"]["input"];
};

export type Subscription = {
  __typename?: "Subscription";
  autocomplete_mutated?: Maybe<Autocomplete_Mutated>;
  block_button_mutated?: Maybe<Block_Button_Mutated>;
  block_card_mutated?: Maybe<Block_Card_Mutated>;
  block_content_mutated?: Maybe<Block_Content_Mutated>;
  block_faq_faqs_mutated?: Maybe<Block_Faq_Faqs_Mutated>;
  block_faq_mutated?: Maybe<Block_Faq_Mutated>;
  block_gallery_images_mutated?: Maybe<Block_Gallery_Images_Mutated>;
  block_gallery_mutated?: Maybe<Block_Gallery_Mutated>;
  block_hero_block_button_mutated?: Maybe<Block_Hero_Block_Button_Mutated>;
  block_hero_images_mutated?: Maybe<Block_Hero_Images_Mutated>;
  block_hero_mutated?: Maybe<Block_Hero_Mutated>;
  block_image_mutated?: Maybe<Block_Image_Mutated>;
  block_posts_mutated?: Maybe<Block_Posts_Mutated>;
  block_quote_mutated?: Maybe<Block_Quote_Mutated>;
  block_video_mutated?: Maybe<Block_Video_Mutated>;
  categories_mutated?: Maybe<Categories_Mutated>;
  directus_files_mutated?: Maybe<Directus_Files_Mutated>;
  directus_folders_mutated?: Maybe<Directus_Folders_Mutated>;
  directus_users_mutated?: Maybe<Directus_Users_Mutated>;
  faqs_mutated?: Maybe<Faqs_Mutated>;
  forms_mutated?: Maybe<Forms_Mutated>;
  globals_mutated?: Maybe<Globals_Mutated>;
  images_mutated?: Maybe<Images_Mutated>;
  pages_blocks_mutated?: Maybe<Pages_Blocks_Mutated>;
  pages_mutated?: Maybe<Pages_Mutated>;
  posts_blocks_mutated?: Maybe<Posts_Blocks_Mutated>;
  posts_categories_mutated?: Maybe<Posts_Categories_Mutated>;
  posts_mutated?: Maybe<Posts_Mutated>;
  posts_tags_mutated?: Maybe<Posts_Tags_Mutated>;
  redirects_mutated?: Maybe<Redirects_Mutated>;
  seo_mutated?: Maybe<Seo_Mutated>;
  sitemaps_excluded_mutated?: Maybe<Sitemaps_Excluded_Mutated>;
  sitemaps_included_mutated?: Maybe<Sitemaps_Included_Mutated>;
  sitemaps_mutated?: Maybe<Sitemaps_Mutated>;
  tags_mutated?: Maybe<Tags_Mutated>;
};

export type SubscriptionAutocomplete_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};

export type SubscriptionBlock_Button_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};

export type SubscriptionBlock_Card_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};

export type SubscriptionBlock_Content_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};

export type SubscriptionBlock_Faq_Faqs_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};

export type SubscriptionBlock_Faq_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};

export type SubscriptionBlock_Gallery_Images_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};

export type SubscriptionBlock_Gallery_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};

export type SubscriptionBlock_Hero_Block_Button_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};

export type SubscriptionBlock_Hero_Images_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};

export type SubscriptionBlock_Hero_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};

export type SubscriptionBlock_Image_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};

export type SubscriptionBlock_Posts_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};

export type SubscriptionBlock_Quote_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};

export type SubscriptionBlock_Video_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};

export type SubscriptionCategories_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};

export type SubscriptionDirectus_Files_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};

export type SubscriptionDirectus_Folders_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};

export type SubscriptionDirectus_Users_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};

export type SubscriptionFaqs_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};

export type SubscriptionForms_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};

export type SubscriptionGlobals_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};

export type SubscriptionImages_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};

export type SubscriptionPages_Blocks_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};

export type SubscriptionPages_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};

export type SubscriptionPosts_Blocks_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};

export type SubscriptionPosts_Categories_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};

export type SubscriptionPosts_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};

export type SubscriptionPosts_Tags_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};

export type SubscriptionRedirects_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};

export type SubscriptionSeo_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};

export type SubscriptionSitemaps_Excluded_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};

export type SubscriptionSitemaps_Included_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};

export type SubscriptionSitemaps_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};

export type SubscriptionTags_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};

export type Autocomplete = {
  __typename?: "autocomplete";
  date_created?: Maybe<Scalars["Date"]["output"]>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars["Date"]["output"]>;
  date_updated_func?: Maybe<Datetime_Functions>;
  id: Scalars["ID"]["output"];
  sort?: Maybe<Scalars["Int"]["output"]>;
  status?: Maybe<Scalars["String"]["output"]>;
  topics?: Maybe<Scalars["JSON"]["output"]>;
  topics_func?: Maybe<Count_Functions>;
  user_created?: Maybe<Directus_Users>;
  user_updated?: Maybe<Directus_Users>;
};

export type AutocompleteUser_CreatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type AutocompleteUser_UpdatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type Autocomplete_Mutated = {
  __typename?: "autocomplete_mutated";
  data?: Maybe<Autocomplete>;
  event?: Maybe<EventEnum>;
  key: Scalars["ID"]["output"];
};

export type Block_Button = {
  __typename?: "block_button";
  align?: Maybe<Scalars["String"]["output"]>;
  date_created?: Maybe<Scalars["Date"]["output"]>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars["Date"]["output"]>;
  date_updated_func?: Maybe<Datetime_Functions>;
  disabled?: Maybe<Scalars["Boolean"]["output"]>;
  href?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["ID"]["output"];
  label?: Maybe<Scalars["String"]["output"]>;
  properties?: Maybe<Scalars["JSON"]["output"]>;
  properties_func?: Maybe<Count_Functions>;
  shape?: Maybe<Scalars["String"]["output"]>;
  size?: Maybe<Scalars["String"]["output"]>;
  sort?: Maybe<Scalars["Int"]["output"]>;
  status?: Maybe<Scalars["String"]["output"]>;
  /** SVG Icons:<br/>https://tablericons.com<br/>https://fontawesome.com/search?o=r&m=free <br/>  */
  svg?: Maybe<Scalars["String"]["output"]>;
  user_created?: Maybe<Directus_Users>;
  user_updated?: Maybe<Directus_Users>;
  variant?: Maybe<Scalars["String"]["output"]>;
};

export type Block_ButtonUser_CreatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type Block_ButtonUser_UpdatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type Block_Button_Aggregated = {
  __typename?: "block_button_aggregated";
  avg?: Maybe<Block_Button_Aggregated_Fields>;
  avgDistinct?: Maybe<Block_Button_Aggregated_Fields>;
  count?: Maybe<Block_Button_Aggregated_Count>;
  countAll?: Maybe<Scalars["Int"]["output"]>;
  countDistinct?: Maybe<Block_Button_Aggregated_Count>;
  group?: Maybe<Scalars["JSON"]["output"]>;
  max?: Maybe<Block_Button_Aggregated_Fields>;
  min?: Maybe<Block_Button_Aggregated_Fields>;
  sum?: Maybe<Block_Button_Aggregated_Fields>;
  sumDistinct?: Maybe<Block_Button_Aggregated_Fields>;
};

export type Block_Button_Aggregated_Count = {
  __typename?: "block_button_aggregated_count";
  align?: Maybe<Scalars["Int"]["output"]>;
  date_created?: Maybe<Scalars["Int"]["output"]>;
  date_updated?: Maybe<Scalars["Int"]["output"]>;
  disabled?: Maybe<Scalars["Int"]["output"]>;
  href?: Maybe<Scalars["Int"]["output"]>;
  id?: Maybe<Scalars["Int"]["output"]>;
  label?: Maybe<Scalars["Int"]["output"]>;
  properties?: Maybe<Scalars["Int"]["output"]>;
  shape?: Maybe<Scalars["Int"]["output"]>;
  size?: Maybe<Scalars["Int"]["output"]>;
  sort?: Maybe<Scalars["Int"]["output"]>;
  status?: Maybe<Scalars["Int"]["output"]>;
  /** SVG Icons:<br/>https://tablericons.com<br/>https://fontawesome.com/search?o=r&m=free <br/>  */
  svg?: Maybe<Scalars["Int"]["output"]>;
  user_created?: Maybe<Scalars["Int"]["output"]>;
  user_updated?: Maybe<Scalars["Int"]["output"]>;
  variant?: Maybe<Scalars["Int"]["output"]>;
};

export type Block_Button_Aggregated_Fields = {
  __typename?: "block_button_aggregated_fields";
  sort?: Maybe<Scalars["Float"]["output"]>;
};

export type Block_Button_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Block_Button_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Block_Button_Filter>>>;
  align?: InputMaybe<String_Filter_Operators>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  disabled?: InputMaybe<Boolean_Filter_Operators>;
  href?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<String_Filter_Operators>;
  label?: InputMaybe<String_Filter_Operators>;
  properties?: InputMaybe<String_Filter_Operators>;
  properties_func?: InputMaybe<Count_Function_Filter_Operators>;
  shape?: InputMaybe<String_Filter_Operators>;
  size?: InputMaybe<String_Filter_Operators>;
  sort?: InputMaybe<Number_Filter_Operators>;
  status?: InputMaybe<String_Filter_Operators>;
  svg?: InputMaybe<String_Filter_Operators>;
  user_created?: InputMaybe<Directus_Users_Filter>;
  user_updated?: InputMaybe<Directus_Users_Filter>;
  variant?: InputMaybe<String_Filter_Operators>;
};

export type Block_Button_Mutated = {
  __typename?: "block_button_mutated";
  data?: Maybe<Block_Button>;
  event?: Maybe<EventEnum>;
  key: Scalars["ID"]["output"];
};

export type Block_Card = {
  __typename?: "block_card";
  date_created?: Maybe<Scalars["Date"]["output"]>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars["Date"]["output"]>;
  date_updated_func?: Maybe<Datetime_Functions>;
  description?: Maybe<Scalars["String"]["output"]>;
  headline?: Maybe<Scalars["String"]["output"]>;
  href?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["ID"]["output"];
  image?: Maybe<Images>;
  size?: Maybe<Scalars["String"]["output"]>;
  sort?: Maybe<Scalars["Int"]["output"]>;
  status?: Maybe<Scalars["String"]["output"]>;
  title?: Maybe<Scalars["String"]["output"]>;
  user_created?: Maybe<Directus_Users>;
  user_updated?: Maybe<Directus_Users>;
  variant?: Maybe<Scalars["String"]["output"]>;
};

export type Block_CardImageArgs = {
  filter?: InputMaybe<Images_Filter>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type Block_CardUser_CreatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type Block_CardUser_UpdatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type Block_Card_Aggregated = {
  __typename?: "block_card_aggregated";
  avg?: Maybe<Block_Card_Aggregated_Fields>;
  avgDistinct?: Maybe<Block_Card_Aggregated_Fields>;
  count?: Maybe<Block_Card_Aggregated_Count>;
  countAll?: Maybe<Scalars["Int"]["output"]>;
  countDistinct?: Maybe<Block_Card_Aggregated_Count>;
  group?: Maybe<Scalars["JSON"]["output"]>;
  max?: Maybe<Block_Card_Aggregated_Fields>;
  min?: Maybe<Block_Card_Aggregated_Fields>;
  sum?: Maybe<Block_Card_Aggregated_Fields>;
  sumDistinct?: Maybe<Block_Card_Aggregated_Fields>;
};

export type Block_Card_Aggregated_Count = {
  __typename?: "block_card_aggregated_count";
  date_created?: Maybe<Scalars["Int"]["output"]>;
  date_updated?: Maybe<Scalars["Int"]["output"]>;
  description?: Maybe<Scalars["Int"]["output"]>;
  headline?: Maybe<Scalars["Int"]["output"]>;
  href?: Maybe<Scalars["Int"]["output"]>;
  id?: Maybe<Scalars["Int"]["output"]>;
  image?: Maybe<Scalars["Int"]["output"]>;
  size?: Maybe<Scalars["Int"]["output"]>;
  sort?: Maybe<Scalars["Int"]["output"]>;
  status?: Maybe<Scalars["Int"]["output"]>;
  title?: Maybe<Scalars["Int"]["output"]>;
  user_created?: Maybe<Scalars["Int"]["output"]>;
  user_updated?: Maybe<Scalars["Int"]["output"]>;
  variant?: Maybe<Scalars["Int"]["output"]>;
};

export type Block_Card_Aggregated_Fields = {
  __typename?: "block_card_aggregated_fields";
  sort?: Maybe<Scalars["Float"]["output"]>;
};

export type Block_Card_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Block_Card_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Block_Card_Filter>>>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  description?: InputMaybe<String_Filter_Operators>;
  headline?: InputMaybe<String_Filter_Operators>;
  href?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<String_Filter_Operators>;
  image?: InputMaybe<Images_Filter>;
  size?: InputMaybe<String_Filter_Operators>;
  sort?: InputMaybe<Number_Filter_Operators>;
  status?: InputMaybe<String_Filter_Operators>;
  title?: InputMaybe<String_Filter_Operators>;
  user_created?: InputMaybe<Directus_Users_Filter>;
  user_updated?: InputMaybe<Directus_Users_Filter>;
  variant?: InputMaybe<String_Filter_Operators>;
};

export type Block_Card_Mutated = {
  __typename?: "block_card_mutated";
  data?: Maybe<Block_Card>;
  event?: Maybe<EventEnum>;
  key: Scalars["ID"]["output"];
};

export type Block_Content = {
  __typename?: "block_content";
  date_created?: Maybe<Scalars["Date"]["output"]>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars["Date"]["output"]>;
  date_updated_func?: Maybe<Datetime_Functions>;
  editor: Scalars["String"]["output"];
  headline?: Maybe<Scalars["String"]["output"]>;
  html?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["ID"]["output"];
  markdown?: Maybe<Scalars["String"]["output"]>;
  sort?: Maybe<Scalars["Int"]["output"]>;
  status?: Maybe<Scalars["String"]["output"]>;
  title?: Maybe<Scalars["String"]["output"]>;
  user_created?: Maybe<Directus_Users>;
  user_updated?: Maybe<Directus_Users>;
};

export type Block_ContentUser_CreatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type Block_ContentUser_UpdatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type Block_Content_Aggregated = {
  __typename?: "block_content_aggregated";
  avg?: Maybe<Block_Content_Aggregated_Fields>;
  avgDistinct?: Maybe<Block_Content_Aggregated_Fields>;
  count?: Maybe<Block_Content_Aggregated_Count>;
  countAll?: Maybe<Scalars["Int"]["output"]>;
  countDistinct?: Maybe<Block_Content_Aggregated_Count>;
  group?: Maybe<Scalars["JSON"]["output"]>;
  max?: Maybe<Block_Content_Aggregated_Fields>;
  min?: Maybe<Block_Content_Aggregated_Fields>;
  sum?: Maybe<Block_Content_Aggregated_Fields>;
  sumDistinct?: Maybe<Block_Content_Aggregated_Fields>;
};

export type Block_Content_Aggregated_Count = {
  __typename?: "block_content_aggregated_count";
  date_created?: Maybe<Scalars["Int"]["output"]>;
  date_updated?: Maybe<Scalars["Int"]["output"]>;
  editor?: Maybe<Scalars["Int"]["output"]>;
  headline?: Maybe<Scalars["Int"]["output"]>;
  html?: Maybe<Scalars["Int"]["output"]>;
  id?: Maybe<Scalars["Int"]["output"]>;
  markdown?: Maybe<Scalars["Int"]["output"]>;
  sort?: Maybe<Scalars["Int"]["output"]>;
  status?: Maybe<Scalars["Int"]["output"]>;
  title?: Maybe<Scalars["Int"]["output"]>;
  user_created?: Maybe<Scalars["Int"]["output"]>;
  user_updated?: Maybe<Scalars["Int"]["output"]>;
};

export type Block_Content_Aggregated_Fields = {
  __typename?: "block_content_aggregated_fields";
  sort?: Maybe<Scalars["Float"]["output"]>;
};

export type Block_Content_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Block_Content_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Block_Content_Filter>>>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  editor?: InputMaybe<String_Filter_Operators>;
  headline?: InputMaybe<String_Filter_Operators>;
  html?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<String_Filter_Operators>;
  markdown?: InputMaybe<String_Filter_Operators>;
  sort?: InputMaybe<Number_Filter_Operators>;
  status?: InputMaybe<String_Filter_Operators>;
  title?: InputMaybe<String_Filter_Operators>;
  user_created?: InputMaybe<Directus_Users_Filter>;
  user_updated?: InputMaybe<Directus_Users_Filter>;
};

export type Block_Content_Mutated = {
  __typename?: "block_content_mutated";
  data?: Maybe<Block_Content>;
  event?: Maybe<EventEnum>;
  key: Scalars["ID"]["output"];
};

export type Block_Faq = {
  __typename?: "block_faq";
  date_created?: Maybe<Scalars["Date"]["output"]>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars["Date"]["output"]>;
  date_updated_func?: Maybe<Datetime_Functions>;
  faqs?: Maybe<Array<Maybe<Block_Faq_Faqs>>>;
  faqs_func?: Maybe<Count_Functions>;
  headline?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["ID"]["output"];
  sort?: Maybe<Scalars["Int"]["output"]>;
  status?: Maybe<Scalars["String"]["output"]>;
  title: Scalars["String"]["output"];
  user_created?: Maybe<Directus_Users>;
  user_updated?: Maybe<Directus_Users>;
};

export type Block_FaqFaqsArgs = {
  filter?: InputMaybe<Block_Faq_Faqs_Filter>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type Block_FaqUser_CreatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type Block_FaqUser_UpdatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type Block_Faq_Aggregated = {
  __typename?: "block_faq_aggregated";
  avg?: Maybe<Block_Faq_Aggregated_Fields>;
  avgDistinct?: Maybe<Block_Faq_Aggregated_Fields>;
  count?: Maybe<Block_Faq_Aggregated_Count>;
  countAll?: Maybe<Scalars["Int"]["output"]>;
  countDistinct?: Maybe<Block_Faq_Aggregated_Count>;
  group?: Maybe<Scalars["JSON"]["output"]>;
  max?: Maybe<Block_Faq_Aggregated_Fields>;
  min?: Maybe<Block_Faq_Aggregated_Fields>;
  sum?: Maybe<Block_Faq_Aggregated_Fields>;
  sumDistinct?: Maybe<Block_Faq_Aggregated_Fields>;
};

export type Block_Faq_Aggregated_Count = {
  __typename?: "block_faq_aggregated_count";
  date_created?: Maybe<Scalars["Int"]["output"]>;
  date_updated?: Maybe<Scalars["Int"]["output"]>;
  faqs?: Maybe<Scalars["Int"]["output"]>;
  headline?: Maybe<Scalars["Int"]["output"]>;
  id?: Maybe<Scalars["Int"]["output"]>;
  sort?: Maybe<Scalars["Int"]["output"]>;
  status?: Maybe<Scalars["Int"]["output"]>;
  title?: Maybe<Scalars["Int"]["output"]>;
  user_created?: Maybe<Scalars["Int"]["output"]>;
  user_updated?: Maybe<Scalars["Int"]["output"]>;
};

export type Block_Faq_Aggregated_Fields = {
  __typename?: "block_faq_aggregated_fields";
  sort?: Maybe<Scalars["Float"]["output"]>;
};

export type Block_Faq_Faqs = {
  __typename?: "block_faq_faqs";
  block_faq_id?: Maybe<Block_Faq>;
  faqs_id?: Maybe<Faqs>;
  id: Scalars["ID"]["output"];
  sort?: Maybe<Scalars["Int"]["output"]>;
};

export type Block_Faq_FaqsBlock_Faq_IdArgs = {
  filter?: InputMaybe<Block_Faq_Filter>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type Block_Faq_FaqsFaqs_IdArgs = {
  filter?: InputMaybe<Faqs_Filter>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type Block_Faq_Faqs_Aggregated = {
  __typename?: "block_faq_faqs_aggregated";
  avg?: Maybe<Block_Faq_Faqs_Aggregated_Fields>;
  avgDistinct?: Maybe<Block_Faq_Faqs_Aggregated_Fields>;
  count?: Maybe<Block_Faq_Faqs_Aggregated_Count>;
  countAll?: Maybe<Scalars["Int"]["output"]>;
  countDistinct?: Maybe<Block_Faq_Faqs_Aggregated_Count>;
  group?: Maybe<Scalars["JSON"]["output"]>;
  max?: Maybe<Block_Faq_Faqs_Aggregated_Fields>;
  min?: Maybe<Block_Faq_Faqs_Aggregated_Fields>;
  sum?: Maybe<Block_Faq_Faqs_Aggregated_Fields>;
  sumDistinct?: Maybe<Block_Faq_Faqs_Aggregated_Fields>;
};

export type Block_Faq_Faqs_Aggregated_Count = {
  __typename?: "block_faq_faqs_aggregated_count";
  block_faq_id?: Maybe<Scalars["Int"]["output"]>;
  faqs_id?: Maybe<Scalars["Int"]["output"]>;
  id?: Maybe<Scalars["Int"]["output"]>;
  sort?: Maybe<Scalars["Int"]["output"]>;
};

export type Block_Faq_Faqs_Aggregated_Fields = {
  __typename?: "block_faq_faqs_aggregated_fields";
  id?: Maybe<Scalars["Float"]["output"]>;
  sort?: Maybe<Scalars["Float"]["output"]>;
};

export type Block_Faq_Faqs_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Block_Faq_Faqs_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Block_Faq_Faqs_Filter>>>;
  block_faq_id?: InputMaybe<Block_Faq_Filter>;
  faqs_id?: InputMaybe<Faqs_Filter>;
  id?: InputMaybe<Number_Filter_Operators>;
  sort?: InputMaybe<Number_Filter_Operators>;
};

export type Block_Faq_Faqs_Mutated = {
  __typename?: "block_faq_faqs_mutated";
  data?: Maybe<Block_Faq_Faqs>;
  event?: Maybe<EventEnum>;
  key: Scalars["ID"]["output"];
};

export type Block_Faq_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Block_Faq_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Block_Faq_Filter>>>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  faqs?: InputMaybe<Block_Faq_Faqs_Filter>;
  faqs_func?: InputMaybe<Count_Function_Filter_Operators>;
  headline?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<String_Filter_Operators>;
  sort?: InputMaybe<Number_Filter_Operators>;
  status?: InputMaybe<String_Filter_Operators>;
  title?: InputMaybe<String_Filter_Operators>;
  user_created?: InputMaybe<Directus_Users_Filter>;
  user_updated?: InputMaybe<Directus_Users_Filter>;
};

export type Block_Faq_Mutated = {
  __typename?: "block_faq_mutated";
  data?: Maybe<Block_Faq>;
  event?: Maybe<EventEnum>;
  key: Scalars["ID"]["output"];
};

export type Block_Gallery = {
  __typename?: "block_gallery";
  date_created?: Maybe<Scalars["Date"]["output"]>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars["Date"]["output"]>;
  date_updated_func?: Maybe<Datetime_Functions>;
  description?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["ID"]["output"];
  images?: Maybe<Array<Maybe<Block_Gallery_Images>>>;
  images_func?: Maybe<Count_Functions>;
  sort?: Maybe<Scalars["Int"]["output"]>;
  status?: Maybe<Scalars["String"]["output"]>;
  title?: Maybe<Scalars["String"]["output"]>;
  user_created?: Maybe<Directus_Users>;
  user_updated?: Maybe<Directus_Users>;
};

export type Block_GalleryImagesArgs = {
  filter?: InputMaybe<Block_Gallery_Images_Filter>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type Block_GalleryUser_CreatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type Block_GalleryUser_UpdatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type Block_Gallery_Aggregated = {
  __typename?: "block_gallery_aggregated";
  avg?: Maybe<Block_Gallery_Aggregated_Fields>;
  avgDistinct?: Maybe<Block_Gallery_Aggregated_Fields>;
  count?: Maybe<Block_Gallery_Aggregated_Count>;
  countAll?: Maybe<Scalars["Int"]["output"]>;
  countDistinct?: Maybe<Block_Gallery_Aggregated_Count>;
  group?: Maybe<Scalars["JSON"]["output"]>;
  max?: Maybe<Block_Gallery_Aggregated_Fields>;
  min?: Maybe<Block_Gallery_Aggregated_Fields>;
  sum?: Maybe<Block_Gallery_Aggregated_Fields>;
  sumDistinct?: Maybe<Block_Gallery_Aggregated_Fields>;
};

export type Block_Gallery_Aggregated_Count = {
  __typename?: "block_gallery_aggregated_count";
  date_created?: Maybe<Scalars["Int"]["output"]>;
  date_updated?: Maybe<Scalars["Int"]["output"]>;
  description?: Maybe<Scalars["Int"]["output"]>;
  id?: Maybe<Scalars["Int"]["output"]>;
  images?: Maybe<Scalars["Int"]["output"]>;
  sort?: Maybe<Scalars["Int"]["output"]>;
  status?: Maybe<Scalars["Int"]["output"]>;
  title?: Maybe<Scalars["Int"]["output"]>;
  user_created?: Maybe<Scalars["Int"]["output"]>;
  user_updated?: Maybe<Scalars["Int"]["output"]>;
};

export type Block_Gallery_Aggregated_Fields = {
  __typename?: "block_gallery_aggregated_fields";
  sort?: Maybe<Scalars["Float"]["output"]>;
};

export type Block_Gallery_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Block_Gallery_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Block_Gallery_Filter>>>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  description?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<String_Filter_Operators>;
  images?: InputMaybe<Block_Gallery_Images_Filter>;
  images_func?: InputMaybe<Count_Function_Filter_Operators>;
  sort?: InputMaybe<Number_Filter_Operators>;
  status?: InputMaybe<String_Filter_Operators>;
  title?: InputMaybe<String_Filter_Operators>;
  user_created?: InputMaybe<Directus_Users_Filter>;
  user_updated?: InputMaybe<Directus_Users_Filter>;
};

export type Block_Gallery_Images = {
  __typename?: "block_gallery_images";
  block_gallery_id?: Maybe<Block_Gallery>;
  id: Scalars["ID"]["output"];
  images_id?: Maybe<Images>;
  sort?: Maybe<Scalars["Int"]["output"]>;
};

export type Block_Gallery_ImagesBlock_Gallery_IdArgs = {
  filter?: InputMaybe<Block_Gallery_Filter>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type Block_Gallery_ImagesImages_IdArgs = {
  filter?: InputMaybe<Images_Filter>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type Block_Gallery_Images_Aggregated = {
  __typename?: "block_gallery_images_aggregated";
  avg?: Maybe<Block_Gallery_Images_Aggregated_Fields>;
  avgDistinct?: Maybe<Block_Gallery_Images_Aggregated_Fields>;
  count?: Maybe<Block_Gallery_Images_Aggregated_Count>;
  countAll?: Maybe<Scalars["Int"]["output"]>;
  countDistinct?: Maybe<Block_Gallery_Images_Aggregated_Count>;
  group?: Maybe<Scalars["JSON"]["output"]>;
  max?: Maybe<Block_Gallery_Images_Aggregated_Fields>;
  min?: Maybe<Block_Gallery_Images_Aggregated_Fields>;
  sum?: Maybe<Block_Gallery_Images_Aggregated_Fields>;
  sumDistinct?: Maybe<Block_Gallery_Images_Aggregated_Fields>;
};

export type Block_Gallery_Images_Aggregated_Count = {
  __typename?: "block_gallery_images_aggregated_count";
  block_gallery_id?: Maybe<Scalars["Int"]["output"]>;
  id?: Maybe<Scalars["Int"]["output"]>;
  images_id?: Maybe<Scalars["Int"]["output"]>;
  sort?: Maybe<Scalars["Int"]["output"]>;
};

export type Block_Gallery_Images_Aggregated_Fields = {
  __typename?: "block_gallery_images_aggregated_fields";
  id?: Maybe<Scalars["Float"]["output"]>;
  sort?: Maybe<Scalars["Float"]["output"]>;
};

export type Block_Gallery_Images_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Block_Gallery_Images_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Block_Gallery_Images_Filter>>>;
  block_gallery_id?: InputMaybe<Block_Gallery_Filter>;
  id?: InputMaybe<Number_Filter_Operators>;
  images_id?: InputMaybe<Images_Filter>;
  sort?: InputMaybe<Number_Filter_Operators>;
};

export type Block_Gallery_Images_Mutated = {
  __typename?: "block_gallery_images_mutated";
  data?: Maybe<Block_Gallery_Images>;
  event?: Maybe<EventEnum>;
  key: Scalars["ID"]["output"];
};

export type Block_Gallery_Mutated = {
  __typename?: "block_gallery_mutated";
  data?: Maybe<Block_Gallery>;
  event?: Maybe<EventEnum>;
  key: Scalars["ID"]["output"];
};

export type Block_Hero = {
  __typename?: "block_hero";
  buttons?: Maybe<Array<Maybe<Block_Hero_Block_Button>>>;
  buttons_func?: Maybe<Count_Functions>;
  date_created?: Maybe<Scalars["Date"]["output"]>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars["Date"]["output"]>;
  date_updated_func?: Maybe<Datetime_Functions>;
  description: Scalars["String"]["output"];
  headline?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["ID"]["output"];
  images?: Maybe<Array<Maybe<Block_Hero_Images>>>;
  images_func?: Maybe<Count_Functions>;
  sort?: Maybe<Scalars["Int"]["output"]>;
  status?: Maybe<Scalars["String"]["output"]>;
  title: Scalars["String"]["output"];
  user_created?: Maybe<Directus_Users>;
  user_updated?: Maybe<Directus_Users>;
};

export type Block_HeroButtonsArgs = {
  filter?: InputMaybe<Block_Hero_Block_Button_Filter>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type Block_HeroImagesArgs = {
  filter?: InputMaybe<Block_Hero_Images_Filter>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type Block_HeroUser_CreatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type Block_HeroUser_UpdatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type Block_Hero_Aggregated = {
  __typename?: "block_hero_aggregated";
  avg?: Maybe<Block_Hero_Aggregated_Fields>;
  avgDistinct?: Maybe<Block_Hero_Aggregated_Fields>;
  count?: Maybe<Block_Hero_Aggregated_Count>;
  countAll?: Maybe<Scalars["Int"]["output"]>;
  countDistinct?: Maybe<Block_Hero_Aggregated_Count>;
  group?: Maybe<Scalars["JSON"]["output"]>;
  max?: Maybe<Block_Hero_Aggregated_Fields>;
  min?: Maybe<Block_Hero_Aggregated_Fields>;
  sum?: Maybe<Block_Hero_Aggregated_Fields>;
  sumDistinct?: Maybe<Block_Hero_Aggregated_Fields>;
};

export type Block_Hero_Aggregated_Count = {
  __typename?: "block_hero_aggregated_count";
  buttons?: Maybe<Scalars["Int"]["output"]>;
  date_created?: Maybe<Scalars["Int"]["output"]>;
  date_updated?: Maybe<Scalars["Int"]["output"]>;
  description?: Maybe<Scalars["Int"]["output"]>;
  headline?: Maybe<Scalars["Int"]["output"]>;
  id?: Maybe<Scalars["Int"]["output"]>;
  images?: Maybe<Scalars["Int"]["output"]>;
  sort?: Maybe<Scalars["Int"]["output"]>;
  status?: Maybe<Scalars["Int"]["output"]>;
  title?: Maybe<Scalars["Int"]["output"]>;
  user_created?: Maybe<Scalars["Int"]["output"]>;
  user_updated?: Maybe<Scalars["Int"]["output"]>;
};

export type Block_Hero_Aggregated_Fields = {
  __typename?: "block_hero_aggregated_fields";
  sort?: Maybe<Scalars["Float"]["output"]>;
};

export type Block_Hero_Block_Button = {
  __typename?: "block_hero_block_button";
  block_button_id?: Maybe<Block_Button>;
  block_hero_id?: Maybe<Block_Hero>;
  id: Scalars["ID"]["output"];
};

export type Block_Hero_Block_ButtonBlock_Button_IdArgs = {
  filter?: InputMaybe<Block_Button_Filter>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type Block_Hero_Block_ButtonBlock_Hero_IdArgs = {
  filter?: InputMaybe<Block_Hero_Filter>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type Block_Hero_Block_Button_Aggregated = {
  __typename?: "block_hero_block_button_aggregated";
  avg?: Maybe<Block_Hero_Block_Button_Aggregated_Fields>;
  avgDistinct?: Maybe<Block_Hero_Block_Button_Aggregated_Fields>;
  count?: Maybe<Block_Hero_Block_Button_Aggregated_Count>;
  countAll?: Maybe<Scalars["Int"]["output"]>;
  countDistinct?: Maybe<Block_Hero_Block_Button_Aggregated_Count>;
  group?: Maybe<Scalars["JSON"]["output"]>;
  max?: Maybe<Block_Hero_Block_Button_Aggregated_Fields>;
  min?: Maybe<Block_Hero_Block_Button_Aggregated_Fields>;
  sum?: Maybe<Block_Hero_Block_Button_Aggregated_Fields>;
  sumDistinct?: Maybe<Block_Hero_Block_Button_Aggregated_Fields>;
};

export type Block_Hero_Block_Button_Aggregated_Count = {
  __typename?: "block_hero_block_button_aggregated_count";
  block_button_id?: Maybe<Scalars["Int"]["output"]>;
  block_hero_id?: Maybe<Scalars["Int"]["output"]>;
  id?: Maybe<Scalars["Int"]["output"]>;
};

export type Block_Hero_Block_Button_Aggregated_Fields = {
  __typename?: "block_hero_block_button_aggregated_fields";
  id?: Maybe<Scalars["Float"]["output"]>;
};

export type Block_Hero_Block_Button_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Block_Hero_Block_Button_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Block_Hero_Block_Button_Filter>>>;
  block_button_id?: InputMaybe<Block_Button_Filter>;
  block_hero_id?: InputMaybe<Block_Hero_Filter>;
  id?: InputMaybe<Number_Filter_Operators>;
};

export type Block_Hero_Block_Button_Mutated = {
  __typename?: "block_hero_block_button_mutated";
  data?: Maybe<Block_Hero_Block_Button>;
  event?: Maybe<EventEnum>;
  key: Scalars["ID"]["output"];
};

export type Block_Hero_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Block_Hero_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Block_Hero_Filter>>>;
  buttons?: InputMaybe<Block_Hero_Block_Button_Filter>;
  buttons_func?: InputMaybe<Count_Function_Filter_Operators>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  description?: InputMaybe<String_Filter_Operators>;
  headline?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<String_Filter_Operators>;
  images?: InputMaybe<Block_Hero_Images_Filter>;
  images_func?: InputMaybe<Count_Function_Filter_Operators>;
  sort?: InputMaybe<Number_Filter_Operators>;
  status?: InputMaybe<String_Filter_Operators>;
  title?: InputMaybe<String_Filter_Operators>;
  user_created?: InputMaybe<Directus_Users_Filter>;
  user_updated?: InputMaybe<Directus_Users_Filter>;
};

export type Block_Hero_Images = {
  __typename?: "block_hero_images";
  block_hero_id?: Maybe<Block_Hero>;
  id: Scalars["ID"]["output"];
  images_id?: Maybe<Images>;
};

export type Block_Hero_ImagesBlock_Hero_IdArgs = {
  filter?: InputMaybe<Block_Hero_Filter>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type Block_Hero_ImagesImages_IdArgs = {
  filter?: InputMaybe<Images_Filter>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type Block_Hero_Images_Aggregated = {
  __typename?: "block_hero_images_aggregated";
  avg?: Maybe<Block_Hero_Images_Aggregated_Fields>;
  avgDistinct?: Maybe<Block_Hero_Images_Aggregated_Fields>;
  count?: Maybe<Block_Hero_Images_Aggregated_Count>;
  countAll?: Maybe<Scalars["Int"]["output"]>;
  countDistinct?: Maybe<Block_Hero_Images_Aggregated_Count>;
  group?: Maybe<Scalars["JSON"]["output"]>;
  max?: Maybe<Block_Hero_Images_Aggregated_Fields>;
  min?: Maybe<Block_Hero_Images_Aggregated_Fields>;
  sum?: Maybe<Block_Hero_Images_Aggregated_Fields>;
  sumDistinct?: Maybe<Block_Hero_Images_Aggregated_Fields>;
};

export type Block_Hero_Images_Aggregated_Count = {
  __typename?: "block_hero_images_aggregated_count";
  block_hero_id?: Maybe<Scalars["Int"]["output"]>;
  id?: Maybe<Scalars["Int"]["output"]>;
  images_id?: Maybe<Scalars["Int"]["output"]>;
};

export type Block_Hero_Images_Aggregated_Fields = {
  __typename?: "block_hero_images_aggregated_fields";
  id?: Maybe<Scalars["Float"]["output"]>;
};

export type Block_Hero_Images_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Block_Hero_Images_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Block_Hero_Images_Filter>>>;
  block_hero_id?: InputMaybe<Block_Hero_Filter>;
  id?: InputMaybe<Number_Filter_Operators>;
  images_id?: InputMaybe<Images_Filter>;
};

export type Block_Hero_Images_Mutated = {
  __typename?: "block_hero_images_mutated";
  data?: Maybe<Block_Hero_Images>;
  event?: Maybe<EventEnum>;
  key: Scalars["ID"]["output"];
};

export type Block_Hero_Mutated = {
  __typename?: "block_hero_mutated";
  data?: Maybe<Block_Hero>;
  event?: Maybe<EventEnum>;
  key: Scalars["ID"]["output"];
};

export type Block_Image = {
  __typename?: "block_image";
  date_created?: Maybe<Scalars["Date"]["output"]>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars["Date"]["output"]>;
  date_updated_func?: Maybe<Datetime_Functions>;
  id: Scalars["ID"]["output"];
  image?: Maybe<Images>;
  size?: Maybe<Scalars["String"]["output"]>;
  sort?: Maybe<Scalars["Int"]["output"]>;
  status?: Maybe<Scalars["String"]["output"]>;
  user_created?: Maybe<Directus_Users>;
  user_updated?: Maybe<Directus_Users>;
};

export type Block_ImageImageArgs = {
  filter?: InputMaybe<Images_Filter>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type Block_ImageUser_CreatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type Block_ImageUser_UpdatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type Block_Image_Aggregated = {
  __typename?: "block_image_aggregated";
  avg?: Maybe<Block_Image_Aggregated_Fields>;
  avgDistinct?: Maybe<Block_Image_Aggregated_Fields>;
  count?: Maybe<Block_Image_Aggregated_Count>;
  countAll?: Maybe<Scalars["Int"]["output"]>;
  countDistinct?: Maybe<Block_Image_Aggregated_Count>;
  group?: Maybe<Scalars["JSON"]["output"]>;
  max?: Maybe<Block_Image_Aggregated_Fields>;
  min?: Maybe<Block_Image_Aggregated_Fields>;
  sum?: Maybe<Block_Image_Aggregated_Fields>;
  sumDistinct?: Maybe<Block_Image_Aggregated_Fields>;
};

export type Block_Image_Aggregated_Count = {
  __typename?: "block_image_aggregated_count";
  date_created?: Maybe<Scalars["Int"]["output"]>;
  date_updated?: Maybe<Scalars["Int"]["output"]>;
  id?: Maybe<Scalars["Int"]["output"]>;
  image?: Maybe<Scalars["Int"]["output"]>;
  size?: Maybe<Scalars["Int"]["output"]>;
  sort?: Maybe<Scalars["Int"]["output"]>;
  status?: Maybe<Scalars["Int"]["output"]>;
  user_created?: Maybe<Scalars["Int"]["output"]>;
  user_updated?: Maybe<Scalars["Int"]["output"]>;
};

export type Block_Image_Aggregated_Fields = {
  __typename?: "block_image_aggregated_fields";
  sort?: Maybe<Scalars["Float"]["output"]>;
};

export type Block_Image_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Block_Image_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Block_Image_Filter>>>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  id?: InputMaybe<String_Filter_Operators>;
  image?: InputMaybe<Images_Filter>;
  size?: InputMaybe<String_Filter_Operators>;
  sort?: InputMaybe<Number_Filter_Operators>;
  status?: InputMaybe<String_Filter_Operators>;
  user_created?: InputMaybe<Directus_Users_Filter>;
  user_updated?: InputMaybe<Directus_Users_Filter>;
};

export type Block_Image_Mutated = {
  __typename?: "block_image_mutated";
  data?: Maybe<Block_Image>;
  event?: Maybe<EventEnum>;
  key: Scalars["ID"]["output"];
};

export type Block_Posts = {
  __typename?: "block_posts";
  date_created?: Maybe<Scalars["Date"]["output"]>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars["Date"]["output"]>;
  date_updated_func?: Maybe<Datetime_Functions>;
  description?: Maybe<Scalars["String"]["output"]>;
  headline?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["ID"]["output"];
  /** Pagination is very much recommended, otherwise all the posts will be loaded at once and will make page heavier and very slow in performance */
  pagination?: Maybe<Scalars["Boolean"]["output"]>;
  perpage?: Maybe<Scalars["Float"]["output"]>;
  select?: Maybe<Scalars["String"]["output"]>;
  sort?: Maybe<Scalars["Int"]["output"]>;
  status?: Maybe<Scalars["String"]["output"]>;
  title?: Maybe<Scalars["String"]["output"]>;
  topic?: Maybe<Scalars["String"]["output"]>;
  user_created?: Maybe<Directus_Users>;
  user_updated?: Maybe<Directus_Users>;
};

export type Block_PostsUser_CreatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type Block_PostsUser_UpdatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type Block_Posts_Aggregated = {
  __typename?: "block_posts_aggregated";
  avg?: Maybe<Block_Posts_Aggregated_Fields>;
  avgDistinct?: Maybe<Block_Posts_Aggregated_Fields>;
  count?: Maybe<Block_Posts_Aggregated_Count>;
  countAll?: Maybe<Scalars["Int"]["output"]>;
  countDistinct?: Maybe<Block_Posts_Aggregated_Count>;
  group?: Maybe<Scalars["JSON"]["output"]>;
  max?: Maybe<Block_Posts_Aggregated_Fields>;
  min?: Maybe<Block_Posts_Aggregated_Fields>;
  sum?: Maybe<Block_Posts_Aggregated_Fields>;
  sumDistinct?: Maybe<Block_Posts_Aggregated_Fields>;
};

export type Block_Posts_Aggregated_Count = {
  __typename?: "block_posts_aggregated_count";
  date_created?: Maybe<Scalars["Int"]["output"]>;
  date_updated?: Maybe<Scalars["Int"]["output"]>;
  description?: Maybe<Scalars["Int"]["output"]>;
  headline?: Maybe<Scalars["Int"]["output"]>;
  id?: Maybe<Scalars["Int"]["output"]>;
  /** Pagination is very much recommended, otherwise all the posts will be loaded at once and will make page heavier and very slow in performance */
  pagination?: Maybe<Scalars["Int"]["output"]>;
  perpage?: Maybe<Scalars["Int"]["output"]>;
  select?: Maybe<Scalars["Int"]["output"]>;
  sort?: Maybe<Scalars["Int"]["output"]>;
  status?: Maybe<Scalars["Int"]["output"]>;
  title?: Maybe<Scalars["Int"]["output"]>;
  topic?: Maybe<Scalars["Int"]["output"]>;
  user_created?: Maybe<Scalars["Int"]["output"]>;
  user_updated?: Maybe<Scalars["Int"]["output"]>;
};

export type Block_Posts_Aggregated_Fields = {
  __typename?: "block_posts_aggregated_fields";
  perpage?: Maybe<Scalars["Float"]["output"]>;
  sort?: Maybe<Scalars["Float"]["output"]>;
};

export type Block_Posts_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Block_Posts_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Block_Posts_Filter>>>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  description?: InputMaybe<String_Filter_Operators>;
  headline?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<String_Filter_Operators>;
  pagination?: InputMaybe<Boolean_Filter_Operators>;
  perpage?: InputMaybe<Number_Filter_Operators>;
  select?: InputMaybe<String_Filter_Operators>;
  sort?: InputMaybe<Number_Filter_Operators>;
  status?: InputMaybe<String_Filter_Operators>;
  title?: InputMaybe<String_Filter_Operators>;
  topic?: InputMaybe<String_Filter_Operators>;
  user_created?: InputMaybe<Directus_Users_Filter>;
  user_updated?: InputMaybe<Directus_Users_Filter>;
};

export type Block_Posts_Mutated = {
  __typename?: "block_posts_mutated";
  data?: Maybe<Block_Posts>;
  event?: Maybe<EventEnum>;
  key: Scalars["ID"]["output"];
};

export type Block_Quote = {
  __typename?: "block_quote";
  about?: Maybe<Scalars["String"]["output"]>;
  author?: Maybe<Scalars["String"]["output"]>;
  date_created?: Maybe<Scalars["Date"]["output"]>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars["Date"]["output"]>;
  date_updated_func?: Maybe<Datetime_Functions>;
  id: Scalars["ID"]["output"];
  quote: Scalars["String"]["output"];
  sort?: Maybe<Scalars["Int"]["output"]>;
  status?: Maybe<Scalars["String"]["output"]>;
  title?: Maybe<Scalars["String"]["output"]>;
  user_created?: Maybe<Directus_Users>;
  user_updated?: Maybe<Directus_Users>;
};

export type Block_QuoteUser_CreatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type Block_QuoteUser_UpdatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type Block_Quote_Aggregated = {
  __typename?: "block_quote_aggregated";
  avg?: Maybe<Block_Quote_Aggregated_Fields>;
  avgDistinct?: Maybe<Block_Quote_Aggregated_Fields>;
  count?: Maybe<Block_Quote_Aggregated_Count>;
  countAll?: Maybe<Scalars["Int"]["output"]>;
  countDistinct?: Maybe<Block_Quote_Aggregated_Count>;
  group?: Maybe<Scalars["JSON"]["output"]>;
  max?: Maybe<Block_Quote_Aggregated_Fields>;
  min?: Maybe<Block_Quote_Aggregated_Fields>;
  sum?: Maybe<Block_Quote_Aggregated_Fields>;
  sumDistinct?: Maybe<Block_Quote_Aggregated_Fields>;
};

export type Block_Quote_Aggregated_Count = {
  __typename?: "block_quote_aggregated_count";
  about?: Maybe<Scalars["Int"]["output"]>;
  author?: Maybe<Scalars["Int"]["output"]>;
  date_created?: Maybe<Scalars["Int"]["output"]>;
  date_updated?: Maybe<Scalars["Int"]["output"]>;
  id?: Maybe<Scalars["Int"]["output"]>;
  quote?: Maybe<Scalars["Int"]["output"]>;
  sort?: Maybe<Scalars["Int"]["output"]>;
  status?: Maybe<Scalars["Int"]["output"]>;
  title?: Maybe<Scalars["Int"]["output"]>;
  user_created?: Maybe<Scalars["Int"]["output"]>;
  user_updated?: Maybe<Scalars["Int"]["output"]>;
};

export type Block_Quote_Aggregated_Fields = {
  __typename?: "block_quote_aggregated_fields";
  sort?: Maybe<Scalars["Float"]["output"]>;
};

export type Block_Quote_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Block_Quote_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Block_Quote_Filter>>>;
  about?: InputMaybe<String_Filter_Operators>;
  author?: InputMaybe<String_Filter_Operators>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  id?: InputMaybe<String_Filter_Operators>;
  quote?: InputMaybe<String_Filter_Operators>;
  sort?: InputMaybe<Number_Filter_Operators>;
  status?: InputMaybe<String_Filter_Operators>;
  title?: InputMaybe<String_Filter_Operators>;
  user_created?: InputMaybe<Directus_Users_Filter>;
  user_updated?: InputMaybe<Directus_Users_Filter>;
};

export type Block_Quote_Mutated = {
  __typename?: "block_quote_mutated";
  data?: Maybe<Block_Quote>;
  event?: Maybe<EventEnum>;
  key: Scalars["ID"]["output"];
};

export type Block_Video = {
  __typename?: "block_video";
  date_created?: Maybe<Scalars["Date"]["output"]>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars["Date"]["output"]>;
  date_updated_func?: Maybe<Datetime_Functions>;
  description?: Maybe<Scalars["String"]["output"]>;
  headline?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["ID"]["output"];
  provider?: Maybe<Scalars["String"]["output"]>;
  sort?: Maybe<Scalars["Int"]["output"]>;
  source: Scalars["String"]["output"];
  status?: Maybe<Scalars["String"]["output"]>;
  title?: Maybe<Scalars["String"]["output"]>;
  user_created?: Maybe<Directus_Users>;
  user_updated?: Maybe<Directus_Users>;
};

export type Block_VideoUser_CreatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type Block_VideoUser_UpdatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type Block_Video_Aggregated = {
  __typename?: "block_video_aggregated";
  avg?: Maybe<Block_Video_Aggregated_Fields>;
  avgDistinct?: Maybe<Block_Video_Aggregated_Fields>;
  count?: Maybe<Block_Video_Aggregated_Count>;
  countAll?: Maybe<Scalars["Int"]["output"]>;
  countDistinct?: Maybe<Block_Video_Aggregated_Count>;
  group?: Maybe<Scalars["JSON"]["output"]>;
  max?: Maybe<Block_Video_Aggregated_Fields>;
  min?: Maybe<Block_Video_Aggregated_Fields>;
  sum?: Maybe<Block_Video_Aggregated_Fields>;
  sumDistinct?: Maybe<Block_Video_Aggregated_Fields>;
};

export type Block_Video_Aggregated_Count = {
  __typename?: "block_video_aggregated_count";
  date_created?: Maybe<Scalars["Int"]["output"]>;
  date_updated?: Maybe<Scalars["Int"]["output"]>;
  description?: Maybe<Scalars["Int"]["output"]>;
  headline?: Maybe<Scalars["Int"]["output"]>;
  id?: Maybe<Scalars["Int"]["output"]>;
  provider?: Maybe<Scalars["Int"]["output"]>;
  sort?: Maybe<Scalars["Int"]["output"]>;
  source?: Maybe<Scalars["Int"]["output"]>;
  status?: Maybe<Scalars["Int"]["output"]>;
  title?: Maybe<Scalars["Int"]["output"]>;
  user_created?: Maybe<Scalars["Int"]["output"]>;
  user_updated?: Maybe<Scalars["Int"]["output"]>;
};

export type Block_Video_Aggregated_Fields = {
  __typename?: "block_video_aggregated_fields";
  sort?: Maybe<Scalars["Float"]["output"]>;
};

export type Block_Video_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Block_Video_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Block_Video_Filter>>>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  description?: InputMaybe<String_Filter_Operators>;
  headline?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<String_Filter_Operators>;
  provider?: InputMaybe<String_Filter_Operators>;
  sort?: InputMaybe<Number_Filter_Operators>;
  source?: InputMaybe<String_Filter_Operators>;
  status?: InputMaybe<String_Filter_Operators>;
  title?: InputMaybe<String_Filter_Operators>;
  user_created?: InputMaybe<Directus_Users_Filter>;
  user_updated?: InputMaybe<Directus_Users_Filter>;
};

export type Block_Video_Mutated = {
  __typename?: "block_video_mutated";
  data?: Maybe<Block_Video>;
  event?: Maybe<EventEnum>;
  key: Scalars["ID"]["output"];
};

export type Boolean_Filter_Operators = {
  _eq?: InputMaybe<Scalars["Boolean"]["input"]>;
  _neq?: InputMaybe<Scalars["Boolean"]["input"]>;
  _nnull?: InputMaybe<Scalars["Boolean"]["input"]>;
  _null?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type Categories = {
  __typename?: "categories";
  date_created?: Maybe<Scalars["Date"]["output"]>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars["Date"]["output"]>;
  date_updated_func?: Maybe<Datetime_Functions>;
  id: Scalars["ID"]["output"];
  name: Scalars["String"]["output"];
  posts?: Maybe<Array<Maybe<Posts_Categories>>>;
  posts_func?: Maybe<Count_Functions>;
  slug: Scalars["String"]["output"];
  sort?: Maybe<Scalars["Int"]["output"]>;
  status?: Maybe<Scalars["String"]["output"]>;
  user_created?: Maybe<Directus_Users>;
  user_updated?: Maybe<Directus_Users>;
};

export type CategoriesPostsArgs = {
  filter?: InputMaybe<Posts_Categories_Filter>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type CategoriesUser_CreatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type CategoriesUser_UpdatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type Categories_Aggregated = {
  __typename?: "categories_aggregated";
  avg?: Maybe<Categories_Aggregated_Fields>;
  avgDistinct?: Maybe<Categories_Aggregated_Fields>;
  count?: Maybe<Categories_Aggregated_Count>;
  countAll?: Maybe<Scalars["Int"]["output"]>;
  countDistinct?: Maybe<Categories_Aggregated_Count>;
  group?: Maybe<Scalars["JSON"]["output"]>;
  max?: Maybe<Categories_Aggregated_Fields>;
  min?: Maybe<Categories_Aggregated_Fields>;
  sum?: Maybe<Categories_Aggregated_Fields>;
  sumDistinct?: Maybe<Categories_Aggregated_Fields>;
};

export type Categories_Aggregated_Count = {
  __typename?: "categories_aggregated_count";
  date_created?: Maybe<Scalars["Int"]["output"]>;
  date_updated?: Maybe<Scalars["Int"]["output"]>;
  id?: Maybe<Scalars["Int"]["output"]>;
  name?: Maybe<Scalars["Int"]["output"]>;
  posts?: Maybe<Scalars["Int"]["output"]>;
  slug?: Maybe<Scalars["Int"]["output"]>;
  sort?: Maybe<Scalars["Int"]["output"]>;
  status?: Maybe<Scalars["Int"]["output"]>;
  user_created?: Maybe<Scalars["Int"]["output"]>;
  user_updated?: Maybe<Scalars["Int"]["output"]>;
};

export type Categories_Aggregated_Fields = {
  __typename?: "categories_aggregated_fields";
  id?: Maybe<Scalars["Float"]["output"]>;
  sort?: Maybe<Scalars["Float"]["output"]>;
};

export type Categories_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Categories_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Categories_Filter>>>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  name?: InputMaybe<String_Filter_Operators>;
  posts?: InputMaybe<Posts_Categories_Filter>;
  posts_func?: InputMaybe<Count_Function_Filter_Operators>;
  slug?: InputMaybe<String_Filter_Operators>;
  sort?: InputMaybe<Number_Filter_Operators>;
  status?: InputMaybe<String_Filter_Operators>;
  user_created?: InputMaybe<Directus_Users_Filter>;
  user_updated?: InputMaybe<Directus_Users_Filter>;
};

export type Categories_Mutated = {
  __typename?: "categories_mutated";
  data?: Maybe<Categories>;
  event?: Maybe<EventEnum>;
  key: Scalars["ID"]["output"];
};

export type Count_Function_Filter_Operators = {
  count?: InputMaybe<Number_Filter_Operators>;
};

export type Count_Functions = {
  __typename?: "count_functions";
  count?: Maybe<Scalars["Int"]["output"]>;
};

export type Date_Filter_Operators = {
  _between?: InputMaybe<Array<InputMaybe<Scalars["GraphQLStringOrFloat"]["input"]>>>;
  _eq?: InputMaybe<Scalars["String"]["input"]>;
  _gt?: InputMaybe<Scalars["String"]["input"]>;
  _gte?: InputMaybe<Scalars["String"]["input"]>;
  _in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  _lt?: InputMaybe<Scalars["String"]["input"]>;
  _lte?: InputMaybe<Scalars["String"]["input"]>;
  _nbetween?: InputMaybe<Array<InputMaybe<Scalars["GraphQLStringOrFloat"]["input"]>>>;
  _neq?: InputMaybe<Scalars["String"]["input"]>;
  _nin?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  _nnull?: InputMaybe<Scalars["Boolean"]["input"]>;
  _null?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type Datetime_Function_Filter_Operators = {
  day?: InputMaybe<Number_Filter_Operators>;
  hour?: InputMaybe<Number_Filter_Operators>;
  minute?: InputMaybe<Number_Filter_Operators>;
  month?: InputMaybe<Number_Filter_Operators>;
  second?: InputMaybe<Number_Filter_Operators>;
  week?: InputMaybe<Number_Filter_Operators>;
  weekday?: InputMaybe<Number_Filter_Operators>;
  year?: InputMaybe<Number_Filter_Operators>;
};

export type Datetime_Functions = {
  __typename?: "datetime_functions";
  day?: Maybe<Scalars["Int"]["output"]>;
  hour?: Maybe<Scalars["Int"]["output"]>;
  minute?: Maybe<Scalars["Int"]["output"]>;
  month?: Maybe<Scalars["Int"]["output"]>;
  second?: Maybe<Scalars["Int"]["output"]>;
  week?: Maybe<Scalars["Int"]["output"]>;
  weekday?: Maybe<Scalars["Int"]["output"]>;
  year?: Maybe<Scalars["Int"]["output"]>;
};

export type Directus_Files = {
  __typename?: "directus_files";
  charset?: Maybe<Scalars["String"]["output"]>;
  description?: Maybe<Scalars["String"]["output"]>;
  duration?: Maybe<Scalars["Int"]["output"]>;
  embed?: Maybe<Scalars["String"]["output"]>;
  filename_disk?: Maybe<Scalars["String"]["output"]>;
  filename_download: Scalars["String"]["output"];
  filesize?: Maybe<Scalars["GraphQLBigInt"]["output"]>;
  folder?: Maybe<Directus_Folders>;
  height?: Maybe<Scalars["Int"]["output"]>;
  id: Scalars["ID"]["output"];
  location?: Maybe<Scalars["String"]["output"]>;
  metadata?: Maybe<Scalars["JSON"]["output"]>;
  metadata_func?: Maybe<Count_Functions>;
  modified_by?: Maybe<Directus_Users>;
  modified_on?: Maybe<Scalars["Date"]["output"]>;
  modified_on_func?: Maybe<Datetime_Functions>;
  storage: Scalars["String"]["output"];
  tags?: Maybe<Scalars["JSON"]["output"]>;
  tags_func?: Maybe<Count_Functions>;
  title?: Maybe<Scalars["String"]["output"]>;
  type?: Maybe<Scalars["String"]["output"]>;
  uploaded_by?: Maybe<Directus_Users>;
  uploaded_on?: Maybe<Scalars["Date"]["output"]>;
  uploaded_on_func?: Maybe<Datetime_Functions>;
  width?: Maybe<Scalars["Int"]["output"]>;
};

export type Directus_FilesFolderArgs = {
  filter?: InputMaybe<Directus_Folders_Filter>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type Directus_FilesModified_ByArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type Directus_FilesUploaded_ByArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type Directus_Files_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Directus_Files_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Directus_Files_Filter>>>;
  charset?: InputMaybe<String_Filter_Operators>;
  description?: InputMaybe<String_Filter_Operators>;
  duration?: InputMaybe<Number_Filter_Operators>;
  embed?: InputMaybe<String_Filter_Operators>;
  filename_disk?: InputMaybe<String_Filter_Operators>;
  filename_download?: InputMaybe<String_Filter_Operators>;
  filesize?: InputMaybe<Number_Filter_Operators>;
  folder?: InputMaybe<Directus_Folders_Filter>;
  height?: InputMaybe<Number_Filter_Operators>;
  id?: InputMaybe<String_Filter_Operators>;
  location?: InputMaybe<String_Filter_Operators>;
  metadata?: InputMaybe<String_Filter_Operators>;
  metadata_func?: InputMaybe<Count_Function_Filter_Operators>;
  modified_by?: InputMaybe<Directus_Users_Filter>;
  modified_on?: InputMaybe<Date_Filter_Operators>;
  modified_on_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  storage?: InputMaybe<String_Filter_Operators>;
  tags?: InputMaybe<String_Filter_Operators>;
  tags_func?: InputMaybe<Count_Function_Filter_Operators>;
  title?: InputMaybe<String_Filter_Operators>;
  type?: InputMaybe<String_Filter_Operators>;
  uploaded_by?: InputMaybe<Directus_Users_Filter>;
  uploaded_on?: InputMaybe<Date_Filter_Operators>;
  uploaded_on_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  width?: InputMaybe<Number_Filter_Operators>;
};

export type Directus_Files_Mutated = {
  __typename?: "directus_files_mutated";
  data?: Maybe<Directus_Files>;
  event?: Maybe<EventEnum>;
  key: Scalars["ID"]["output"];
};

export type Directus_Folders = {
  __typename?: "directus_folders";
  id: Scalars["ID"]["output"];
  name: Scalars["String"]["output"];
  parent?: Maybe<Directus_Folders>;
};

export type Directus_FoldersParentArgs = {
  filter?: InputMaybe<Directus_Folders_Filter>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type Directus_Folders_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Directus_Folders_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Directus_Folders_Filter>>>;
  id?: InputMaybe<String_Filter_Operators>;
  name?: InputMaybe<String_Filter_Operators>;
  parent?: InputMaybe<Directus_Folders_Filter>;
};

export type Directus_Folders_Mutated = {
  __typename?: "directus_folders_mutated";
  data?: Maybe<Directus_Folders>;
  event?: Maybe<EventEnum>;
  key: Scalars["ID"]["output"];
};

export type Directus_Users = {
  __typename?: "directus_users";
  appearance?: Maybe<Scalars["String"]["output"]>;
  auth_data?: Maybe<Scalars["JSON"]["output"]>;
  auth_data_func?: Maybe<Count_Functions>;
  avatar?: Maybe<Directus_Files>;
  description?: Maybe<Scalars["String"]["output"]>;
  email?: Maybe<Scalars["String"]["output"]>;
  email_notifications?: Maybe<Scalars["Boolean"]["output"]>;
  external_identifier?: Maybe<Scalars["String"]["output"]>;
  first_name?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["ID"]["output"];
  language?: Maybe<Scalars["String"]["output"]>;
  last_access?: Maybe<Scalars["Date"]["output"]>;
  last_access_func?: Maybe<Datetime_Functions>;
  last_name?: Maybe<Scalars["String"]["output"]>;
  last_page?: Maybe<Scalars["String"]["output"]>;
  location?: Maybe<Scalars["String"]["output"]>;
  password?: Maybe<Scalars["Hash"]["output"]>;
  provider?: Maybe<Scalars["String"]["output"]>;
  role?: Maybe<Scalars["String"]["output"]>;
  status?: Maybe<Scalars["String"]["output"]>;
  tags?: Maybe<Scalars["JSON"]["output"]>;
  tags_func?: Maybe<Count_Functions>;
  tfa_secret?: Maybe<Scalars["Hash"]["output"]>;
  theme_dark?: Maybe<Scalars["String"]["output"]>;
  theme_dark_overrides?: Maybe<Scalars["JSON"]["output"]>;
  theme_dark_overrides_func?: Maybe<Count_Functions>;
  theme_light?: Maybe<Scalars["String"]["output"]>;
  theme_light_overrides?: Maybe<Scalars["JSON"]["output"]>;
  theme_light_overrides_func?: Maybe<Count_Functions>;
  title?: Maybe<Scalars["String"]["output"]>;
  token?: Maybe<Scalars["Hash"]["output"]>;
  username?: Maybe<Scalars["String"]["output"]>;
};

export type Directus_UsersAvatarArgs = {
  filter?: InputMaybe<Directus_Files_Filter>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type Directus_Users_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Directus_Users_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Directus_Users_Filter>>>;
  appearance?: InputMaybe<String_Filter_Operators>;
  auth_data?: InputMaybe<String_Filter_Operators>;
  auth_data_func?: InputMaybe<Count_Function_Filter_Operators>;
  avatar?: InputMaybe<Directus_Files_Filter>;
  description?: InputMaybe<String_Filter_Operators>;
  email?: InputMaybe<String_Filter_Operators>;
  email_notifications?: InputMaybe<Boolean_Filter_Operators>;
  external_identifier?: InputMaybe<String_Filter_Operators>;
  first_name?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<String_Filter_Operators>;
  language?: InputMaybe<String_Filter_Operators>;
  last_access?: InputMaybe<Date_Filter_Operators>;
  last_access_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  last_name?: InputMaybe<String_Filter_Operators>;
  last_page?: InputMaybe<String_Filter_Operators>;
  location?: InputMaybe<String_Filter_Operators>;
  password?: InputMaybe<Hash_Filter_Operators>;
  provider?: InputMaybe<String_Filter_Operators>;
  role?: InputMaybe<String_Filter_Operators>;
  status?: InputMaybe<String_Filter_Operators>;
  tags?: InputMaybe<String_Filter_Operators>;
  tags_func?: InputMaybe<Count_Function_Filter_Operators>;
  tfa_secret?: InputMaybe<Hash_Filter_Operators>;
  theme_dark?: InputMaybe<String_Filter_Operators>;
  theme_dark_overrides?: InputMaybe<String_Filter_Operators>;
  theme_dark_overrides_func?: InputMaybe<Count_Function_Filter_Operators>;
  theme_light?: InputMaybe<String_Filter_Operators>;
  theme_light_overrides?: InputMaybe<String_Filter_Operators>;
  theme_light_overrides_func?: InputMaybe<Count_Function_Filter_Operators>;
  title?: InputMaybe<String_Filter_Operators>;
  token?: InputMaybe<Hash_Filter_Operators>;
  username?: InputMaybe<String_Filter_Operators>;
};

export type Directus_Users_Mutated = {
  __typename?: "directus_users_mutated";
  data?: Maybe<Directus_Users>;
  event?: Maybe<EventEnum>;
  key: Scalars["ID"]["output"];
};

export type Faqs = {
  __typename?: "faqs";
  answer: Scalars["String"]["output"];
  date_created?: Maybe<Scalars["Date"]["output"]>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars["Date"]["output"]>;
  date_updated_func?: Maybe<Datetime_Functions>;
  id: Scalars["ID"]["output"];
  question: Scalars["String"]["output"];
  sort?: Maybe<Scalars["Int"]["output"]>;
  status?: Maybe<Scalars["String"]["output"]>;
  user_created?: Maybe<Directus_Users>;
  user_updated?: Maybe<Directus_Users>;
};

export type FaqsUser_CreatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type FaqsUser_UpdatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type Faqs_Aggregated = {
  __typename?: "faqs_aggregated";
  avg?: Maybe<Faqs_Aggregated_Fields>;
  avgDistinct?: Maybe<Faqs_Aggregated_Fields>;
  count?: Maybe<Faqs_Aggregated_Count>;
  countAll?: Maybe<Scalars["Int"]["output"]>;
  countDistinct?: Maybe<Faqs_Aggregated_Count>;
  group?: Maybe<Scalars["JSON"]["output"]>;
  max?: Maybe<Faqs_Aggregated_Fields>;
  min?: Maybe<Faqs_Aggregated_Fields>;
  sum?: Maybe<Faqs_Aggregated_Fields>;
  sumDistinct?: Maybe<Faqs_Aggregated_Fields>;
};

export type Faqs_Aggregated_Count = {
  __typename?: "faqs_aggregated_count";
  answer?: Maybe<Scalars["Int"]["output"]>;
  date_created?: Maybe<Scalars["Int"]["output"]>;
  date_updated?: Maybe<Scalars["Int"]["output"]>;
  id?: Maybe<Scalars["Int"]["output"]>;
  question?: Maybe<Scalars["Int"]["output"]>;
  sort?: Maybe<Scalars["Int"]["output"]>;
  status?: Maybe<Scalars["Int"]["output"]>;
  user_created?: Maybe<Scalars["Int"]["output"]>;
  user_updated?: Maybe<Scalars["Int"]["output"]>;
};

export type Faqs_Aggregated_Fields = {
  __typename?: "faqs_aggregated_fields";
  sort?: Maybe<Scalars["Float"]["output"]>;
};

export type Faqs_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Faqs_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Faqs_Filter>>>;
  answer?: InputMaybe<String_Filter_Operators>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  id?: InputMaybe<String_Filter_Operators>;
  question?: InputMaybe<String_Filter_Operators>;
  sort?: InputMaybe<Number_Filter_Operators>;
  status?: InputMaybe<String_Filter_Operators>;
  user_created?: InputMaybe<Directus_Users_Filter>;
  user_updated?: InputMaybe<Directus_Users_Filter>;
};

export type Faqs_Mutated = {
  __typename?: "faqs_mutated";
  data?: Maybe<Faqs>;
  event?: Maybe<EventEnum>;
  key: Scalars["ID"]["output"];
};

export type Forms = {
  __typename?: "forms";
  date_created?: Maybe<Scalars["Date"]["output"]>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars["Date"]["output"]>;
  date_updated_func?: Maybe<Datetime_Functions>;
  formkey?: Maybe<Scalars["String"]["output"]>;
  headline?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["ID"]["output"];
  sort?: Maybe<Scalars["Int"]["output"]>;
  status?: Maybe<Scalars["String"]["output"]>;
  title?: Maybe<Scalars["String"]["output"]>;
  user_created?: Maybe<Directus_Users>;
  user_updated?: Maybe<Directus_Users>;
};

export type FormsUser_CreatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type FormsUser_UpdatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type Forms_Aggregated = {
  __typename?: "forms_aggregated";
  avg?: Maybe<Forms_Aggregated_Fields>;
  avgDistinct?: Maybe<Forms_Aggregated_Fields>;
  count?: Maybe<Forms_Aggregated_Count>;
  countAll?: Maybe<Scalars["Int"]["output"]>;
  countDistinct?: Maybe<Forms_Aggregated_Count>;
  group?: Maybe<Scalars["JSON"]["output"]>;
  max?: Maybe<Forms_Aggregated_Fields>;
  min?: Maybe<Forms_Aggregated_Fields>;
  sum?: Maybe<Forms_Aggregated_Fields>;
  sumDistinct?: Maybe<Forms_Aggregated_Fields>;
};

export type Forms_Aggregated_Count = {
  __typename?: "forms_aggregated_count";
  date_created?: Maybe<Scalars["Int"]["output"]>;
  date_updated?: Maybe<Scalars["Int"]["output"]>;
  formkey?: Maybe<Scalars["Int"]["output"]>;
  headline?: Maybe<Scalars["Int"]["output"]>;
  id?: Maybe<Scalars["Int"]["output"]>;
  sort?: Maybe<Scalars["Int"]["output"]>;
  status?: Maybe<Scalars["Int"]["output"]>;
  title?: Maybe<Scalars["Int"]["output"]>;
  user_created?: Maybe<Scalars["Int"]["output"]>;
  user_updated?: Maybe<Scalars["Int"]["output"]>;
};

export type Forms_Aggregated_Fields = {
  __typename?: "forms_aggregated_fields";
  sort?: Maybe<Scalars["Float"]["output"]>;
};

export type Forms_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Forms_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Forms_Filter>>>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  formkey?: InputMaybe<String_Filter_Operators>;
  headline?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<String_Filter_Operators>;
  sort?: InputMaybe<Number_Filter_Operators>;
  status?: InputMaybe<String_Filter_Operators>;
  title?: InputMaybe<String_Filter_Operators>;
  user_created?: InputMaybe<Directus_Users_Filter>;
  user_updated?: InputMaybe<Directus_Users_Filter>;
};

export type Forms_Mutated = {
  __typename?: "forms_mutated";
  data?: Maybe<Forms>;
  event?: Maybe<EventEnum>;
  key: Scalars["ID"]["output"];
};

export type Globals = {
  __typename?: "globals";
  address_city?: Maybe<Scalars["String"]["output"]>;
  address_country?: Maybe<Scalars["String"]["output"]>;
  address_pincode?: Maybe<Scalars["String"]["output"]>;
  address_state?: Maybe<Scalars["String"]["output"]>;
  date_created?: Maybe<Scalars["Date"]["output"]>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars["Date"]["output"]>;
  date_updated_func?: Maybe<Datetime_Functions>;
  description?: Maybe<Scalars["String"]["output"]>;
  domain: Scalars["String"]["output"];
  email?: Maybe<Scalars["String"]["output"]>;
  footer_sections?: Maybe<Scalars["JSON"]["output"]>;
  footer_sections_func?: Maybe<Count_Functions>;
  id: Scalars["ID"]["output"];
  name: Scalars["String"]["output"];
  og_image?: Maybe<Images>;
  phone?: Maybe<Scalars["String"]["output"]>;
  /** SVG Icons:<br/>https://tablericons.com<br/>https://fontawesome.com/search?o=r&m=free <br/>  */
  social_links?: Maybe<Scalars["JSON"]["output"]>;
  social_links_func?: Maybe<Count_Functions>;
  street_address?: Maybe<Scalars["String"]["output"]>;
  tagline?: Maybe<Scalars["String"]["output"]>;
  /** What's the website title? */
  title?: Maybe<Scalars["String"]["output"]>;
  twitter_image?: Maybe<Images>;
  url: Scalars["String"]["output"];
  user_created?: Maybe<Directus_Users>;
  user_updated?: Maybe<Directus_Users>;
};

export type GlobalsOg_ImageArgs = {
  filter?: InputMaybe<Images_Filter>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type GlobalsTwitter_ImageArgs = {
  filter?: InputMaybe<Images_Filter>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type GlobalsUser_CreatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type GlobalsUser_UpdatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type Globals_Mutated = {
  __typename?: "globals_mutated";
  data?: Maybe<Globals>;
  event?: Maybe<EventEnum>;
  key: Scalars["ID"]["output"];
};

export type Hash_Filter_Operators = {
  _empty?: InputMaybe<Scalars["Boolean"]["input"]>;
  _nempty?: InputMaybe<Scalars["Boolean"]["input"]>;
  _nnull?: InputMaybe<Scalars["Boolean"]["input"]>;
  _null?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type Images = {
  __typename?: "images";
  alt?: Maybe<Scalars["String"]["output"]>;
  caption?: Maybe<Scalars["String"]["output"]>;
  date_created?: Maybe<Scalars["Date"]["output"]>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars["Date"]["output"]>;
  date_updated_func?: Maybe<Datetime_Functions>;
  description?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["ID"]["output"];
  loading?: Maybe<Scalars["String"]["output"]>;
  posts_featured?: Maybe<Array<Maybe<Posts>>>;
  posts_featured_func?: Maybe<Count_Functions>;
  sort?: Maybe<Scalars["Int"]["output"]>;
  source?: Maybe<Scalars["String"]["output"]>;
  status?: Maybe<Scalars["String"]["output"]>;
  title?: Maybe<Scalars["String"]["output"]>;
  type?: Maybe<Scalars["String"]["output"]>;
  user_created?: Maybe<Directus_Users>;
  user_updated?: Maybe<Directus_Users>;
};

export type ImagesPosts_FeaturedArgs = {
  filter?: InputMaybe<Posts_Filter>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type ImagesUser_CreatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type ImagesUser_UpdatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type Images_Aggregated = {
  __typename?: "images_aggregated";
  avg?: Maybe<Images_Aggregated_Fields>;
  avgDistinct?: Maybe<Images_Aggregated_Fields>;
  count?: Maybe<Images_Aggregated_Count>;
  countAll?: Maybe<Scalars["Int"]["output"]>;
  countDistinct?: Maybe<Images_Aggregated_Count>;
  group?: Maybe<Scalars["JSON"]["output"]>;
  max?: Maybe<Images_Aggregated_Fields>;
  min?: Maybe<Images_Aggregated_Fields>;
  sum?: Maybe<Images_Aggregated_Fields>;
  sumDistinct?: Maybe<Images_Aggregated_Fields>;
};

export type Images_Aggregated_Count = {
  __typename?: "images_aggregated_count";
  alt?: Maybe<Scalars["Int"]["output"]>;
  caption?: Maybe<Scalars["Int"]["output"]>;
  date_created?: Maybe<Scalars["Int"]["output"]>;
  date_updated?: Maybe<Scalars["Int"]["output"]>;
  description?: Maybe<Scalars["Int"]["output"]>;
  id?: Maybe<Scalars["Int"]["output"]>;
  loading?: Maybe<Scalars["Int"]["output"]>;
  posts_featured?: Maybe<Scalars["Int"]["output"]>;
  sort?: Maybe<Scalars["Int"]["output"]>;
  source?: Maybe<Scalars["Int"]["output"]>;
  status?: Maybe<Scalars["Int"]["output"]>;
  title?: Maybe<Scalars["Int"]["output"]>;
  type?: Maybe<Scalars["Int"]["output"]>;
  user_created?: Maybe<Scalars["Int"]["output"]>;
  user_updated?: Maybe<Scalars["Int"]["output"]>;
};

export type Images_Aggregated_Fields = {
  __typename?: "images_aggregated_fields";
  sort?: Maybe<Scalars["Float"]["output"]>;
};

export type Images_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Images_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Images_Filter>>>;
  alt?: InputMaybe<String_Filter_Operators>;
  caption?: InputMaybe<String_Filter_Operators>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  description?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<String_Filter_Operators>;
  loading?: InputMaybe<String_Filter_Operators>;
  posts_featured?: InputMaybe<Posts_Filter>;
  posts_featured_func?: InputMaybe<Count_Function_Filter_Operators>;
  sort?: InputMaybe<Number_Filter_Operators>;
  source?: InputMaybe<String_Filter_Operators>;
  status?: InputMaybe<String_Filter_Operators>;
  title?: InputMaybe<String_Filter_Operators>;
  type?: InputMaybe<String_Filter_Operators>;
  user_created?: InputMaybe<Directus_Users_Filter>;
  user_updated?: InputMaybe<Directus_Users_Filter>;
};

export type Images_Mutated = {
  __typename?: "images_mutated";
  data?: Maybe<Images>;
  event?: Maybe<EventEnum>;
  key: Scalars["ID"]["output"];
};

export type Number_Filter_Operators = {
  _between?: InputMaybe<Array<InputMaybe<Scalars["GraphQLStringOrFloat"]["input"]>>>;
  _eq?: InputMaybe<Scalars["GraphQLStringOrFloat"]["input"]>;
  _gt?: InputMaybe<Scalars["GraphQLStringOrFloat"]["input"]>;
  _gte?: InputMaybe<Scalars["GraphQLStringOrFloat"]["input"]>;
  _in?: InputMaybe<Array<InputMaybe<Scalars["GraphQLStringOrFloat"]["input"]>>>;
  _lt?: InputMaybe<Scalars["GraphQLStringOrFloat"]["input"]>;
  _lte?: InputMaybe<Scalars["GraphQLStringOrFloat"]["input"]>;
  _nbetween?: InputMaybe<Array<InputMaybe<Scalars["GraphQLStringOrFloat"]["input"]>>>;
  _neq?: InputMaybe<Scalars["GraphQLStringOrFloat"]["input"]>;
  _nin?: InputMaybe<Array<InputMaybe<Scalars["GraphQLStringOrFloat"]["input"]>>>;
  _nnull?: InputMaybe<Scalars["Boolean"]["input"]>;
  _null?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type Pages = {
  __typename?: "pages";
  blocks?: Maybe<Array<Maybe<Pages_Blocks>>>;
  blocks_func?: Maybe<Count_Functions>;
  date_created?: Maybe<Scalars["Date"]["output"]>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars["Date"]["output"]>;
  date_updated_func?: Maybe<Datetime_Functions>;
  description?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["ID"]["output"];
  pagination?: Maybe<Scalars["Boolean"]["output"]>;
  path: Scalars["String"]["output"];
  seo?: Maybe<Seo>;
  sort?: Maybe<Scalars["Int"]["output"]>;
  status?: Maybe<Scalars["String"]["output"]>;
  title?: Maybe<Scalars["String"]["output"]>;
  user_created?: Maybe<Directus_Users>;
  user_updated?: Maybe<Directus_Users>;
};

export type PagesBlocksArgs = {
  filter?: InputMaybe<Pages_Blocks_Filter>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type PagesSeoArgs = {
  filter?: InputMaybe<Seo_Filter>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type PagesUser_CreatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type PagesUser_UpdatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type Pages_Aggregated = {
  __typename?: "pages_aggregated";
  avg?: Maybe<Pages_Aggregated_Fields>;
  avgDistinct?: Maybe<Pages_Aggregated_Fields>;
  count?: Maybe<Pages_Aggregated_Count>;
  countAll?: Maybe<Scalars["Int"]["output"]>;
  countDistinct?: Maybe<Pages_Aggregated_Count>;
  group?: Maybe<Scalars["JSON"]["output"]>;
  max?: Maybe<Pages_Aggregated_Fields>;
  min?: Maybe<Pages_Aggregated_Fields>;
  sum?: Maybe<Pages_Aggregated_Fields>;
  sumDistinct?: Maybe<Pages_Aggregated_Fields>;
};

export type Pages_Aggregated_Count = {
  __typename?: "pages_aggregated_count";
  blocks?: Maybe<Scalars["Int"]["output"]>;
  date_created?: Maybe<Scalars["Int"]["output"]>;
  date_updated?: Maybe<Scalars["Int"]["output"]>;
  description?: Maybe<Scalars["Int"]["output"]>;
  id?: Maybe<Scalars["Int"]["output"]>;
  pagination?: Maybe<Scalars["Int"]["output"]>;
  path?: Maybe<Scalars["Int"]["output"]>;
  seo?: Maybe<Scalars["Int"]["output"]>;
  sort?: Maybe<Scalars["Int"]["output"]>;
  status?: Maybe<Scalars["Int"]["output"]>;
  title?: Maybe<Scalars["Int"]["output"]>;
  user_created?: Maybe<Scalars["Int"]["output"]>;
  user_updated?: Maybe<Scalars["Int"]["output"]>;
};

export type Pages_Aggregated_Fields = {
  __typename?: "pages_aggregated_fields";
  sort?: Maybe<Scalars["Float"]["output"]>;
};

export type Pages_Blocks = {
  __typename?: "pages_blocks";
  collection?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["ID"]["output"];
  item?: Maybe<Pages_Blocks_Item_Union>;
  pages_id?: Maybe<Pages>;
  sort?: Maybe<Scalars["Int"]["output"]>;
};

export type Pages_BlocksPages_IdArgs = {
  filter?: InputMaybe<Pages_Filter>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type Pages_Blocks_Aggregated = {
  __typename?: "pages_blocks_aggregated";
  avg?: Maybe<Pages_Blocks_Aggregated_Fields>;
  avgDistinct?: Maybe<Pages_Blocks_Aggregated_Fields>;
  count?: Maybe<Pages_Blocks_Aggregated_Count>;
  countAll?: Maybe<Scalars["Int"]["output"]>;
  countDistinct?: Maybe<Pages_Blocks_Aggregated_Count>;
  group?: Maybe<Scalars["JSON"]["output"]>;
  max?: Maybe<Pages_Blocks_Aggregated_Fields>;
  min?: Maybe<Pages_Blocks_Aggregated_Fields>;
  sum?: Maybe<Pages_Blocks_Aggregated_Fields>;
  sumDistinct?: Maybe<Pages_Blocks_Aggregated_Fields>;
};

export type Pages_Blocks_Aggregated_Count = {
  __typename?: "pages_blocks_aggregated_count";
  collection?: Maybe<Scalars["Int"]["output"]>;
  id?: Maybe<Scalars["Int"]["output"]>;
  item?: Maybe<Scalars["Int"]["output"]>;
  pages_id?: Maybe<Scalars["Int"]["output"]>;
  sort?: Maybe<Scalars["Int"]["output"]>;
};

export type Pages_Blocks_Aggregated_Fields = {
  __typename?: "pages_blocks_aggregated_fields";
  id?: Maybe<Scalars["Float"]["output"]>;
  sort?: Maybe<Scalars["Float"]["output"]>;
};

export type Pages_Blocks_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Pages_Blocks_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Pages_Blocks_Filter>>>;
  collection?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  item__block_button?: InputMaybe<Block_Button_Filter>;
  item__block_card?: InputMaybe<Block_Card_Filter>;
  item__block_content?: InputMaybe<Block_Content_Filter>;
  item__block_faq?: InputMaybe<Block_Faq_Filter>;
  item__block_gallery?: InputMaybe<Block_Gallery_Filter>;
  item__block_hero?: InputMaybe<Block_Hero_Filter>;
  item__block_image?: InputMaybe<Block_Image_Filter>;
  item__block_posts?: InputMaybe<Block_Posts_Filter>;
  item__block_quote?: InputMaybe<Block_Quote_Filter>;
  item__block_video?: InputMaybe<Block_Video_Filter>;
  pages_id?: InputMaybe<Pages_Filter>;
  sort?: InputMaybe<Number_Filter_Operators>;
};

export type Pages_Blocks_Item_Union =
  | Block_Button
  | Block_Card
  | Block_Content
  | Block_Faq
  | Block_Gallery
  | Block_Hero
  | Block_Image
  | Block_Posts
  | Block_Quote
  | Block_Video;

export type Pages_Blocks_Mutated = {
  __typename?: "pages_blocks_mutated";
  data?: Maybe<Pages_Blocks>;
  event?: Maybe<EventEnum>;
  key: Scalars["ID"]["output"];
};

export type Pages_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Pages_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Pages_Filter>>>;
  blocks?: InputMaybe<Pages_Blocks_Filter>;
  blocks_func?: InputMaybe<Count_Function_Filter_Operators>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  description?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<String_Filter_Operators>;
  pagination?: InputMaybe<Boolean_Filter_Operators>;
  path?: InputMaybe<String_Filter_Operators>;
  seo?: InputMaybe<Seo_Filter>;
  sort?: InputMaybe<Number_Filter_Operators>;
  status?: InputMaybe<String_Filter_Operators>;
  title?: InputMaybe<String_Filter_Operators>;
  user_created?: InputMaybe<Directus_Users_Filter>;
  user_updated?: InputMaybe<Directus_Users_Filter>;
};

export type Pages_Mutated = {
  __typename?: "pages_mutated";
  data?: Maybe<Pages>;
  event?: Maybe<EventEnum>;
  key: Scalars["ID"]["output"];
};

export type Posts = {
  __typename?: "posts";
  biography?: Maybe<Scalars["JSON"]["output"]>;
  biography_func?: Maybe<Count_Functions>;
  blocks?: Maybe<Array<Maybe<Posts_Blocks>>>;
  blocks_func?: Maybe<Count_Functions>;
  categories?: Maybe<Array<Maybe<Posts_Categories>>>;
  categories_func?: Maybe<Count_Functions>;
  date_created?: Maybe<Scalars["Date"]["output"]>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_published?: Maybe<Scalars["Date"]["output"]>;
  date_published_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars["Date"]["output"]>;
  date_updated_func?: Maybe<Datetime_Functions>;
  description?: Maybe<Scalars["String"]["output"]>;
  editor?: Maybe<Scalars["String"]["output"]>;
  featured?: Maybe<Images>;
  headline?: Maybe<Scalars["String"]["output"]>;
  html?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["ID"]["output"];
  info?: Maybe<Scalars["JSON"]["output"]>;
  info_func?: Maybe<Count_Functions>;
  markdown?: Maybe<Scalars["String"]["output"]>;
  seo?: Maybe<Seo>;
  slug?: Maybe<Scalars["String"]["output"]>;
  sort?: Maybe<Scalars["Int"]["output"]>;
  status?: Maybe<Scalars["String"]["output"]>;
  tags?: Maybe<Array<Maybe<Posts_Tags>>>;
  tags_func?: Maybe<Count_Functions>;
  title: Scalars["String"]["output"];
  topic: Scalars["String"]["output"];
  user_created?: Maybe<Directus_Users>;
  user_updated?: Maybe<Directus_Users>;
};

export type PostsBlocksArgs = {
  filter?: InputMaybe<Posts_Blocks_Filter>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type PostsCategoriesArgs = {
  filter?: InputMaybe<Posts_Categories_Filter>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type PostsFeaturedArgs = {
  filter?: InputMaybe<Images_Filter>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type PostsSeoArgs = {
  filter?: InputMaybe<Seo_Filter>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type PostsTagsArgs = {
  filter?: InputMaybe<Posts_Tags_Filter>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type PostsUser_CreatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type PostsUser_UpdatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type Posts_Aggregated = {
  __typename?: "posts_aggregated";
  avg?: Maybe<Posts_Aggregated_Fields>;
  avgDistinct?: Maybe<Posts_Aggregated_Fields>;
  count?: Maybe<Posts_Aggregated_Count>;
  countAll?: Maybe<Scalars["Int"]["output"]>;
  countDistinct?: Maybe<Posts_Aggregated_Count>;
  group?: Maybe<Scalars["JSON"]["output"]>;
  max?: Maybe<Posts_Aggregated_Fields>;
  min?: Maybe<Posts_Aggregated_Fields>;
  sum?: Maybe<Posts_Aggregated_Fields>;
  sumDistinct?: Maybe<Posts_Aggregated_Fields>;
};

export type Posts_Aggregated_Count = {
  __typename?: "posts_aggregated_count";
  biography?: Maybe<Scalars["Int"]["output"]>;
  blocks?: Maybe<Scalars["Int"]["output"]>;
  categories?: Maybe<Scalars["Int"]["output"]>;
  date_created?: Maybe<Scalars["Int"]["output"]>;
  date_published?: Maybe<Scalars["Int"]["output"]>;
  date_updated?: Maybe<Scalars["Int"]["output"]>;
  description?: Maybe<Scalars["Int"]["output"]>;
  editor?: Maybe<Scalars["Int"]["output"]>;
  featured?: Maybe<Scalars["Int"]["output"]>;
  headline?: Maybe<Scalars["Int"]["output"]>;
  html?: Maybe<Scalars["Int"]["output"]>;
  id?: Maybe<Scalars["Int"]["output"]>;
  info?: Maybe<Scalars["Int"]["output"]>;
  markdown?: Maybe<Scalars["Int"]["output"]>;
  seo?: Maybe<Scalars["Int"]["output"]>;
  slug?: Maybe<Scalars["Int"]["output"]>;
  sort?: Maybe<Scalars["Int"]["output"]>;
  status?: Maybe<Scalars["Int"]["output"]>;
  tags?: Maybe<Scalars["Int"]["output"]>;
  title?: Maybe<Scalars["Int"]["output"]>;
  topic?: Maybe<Scalars["Int"]["output"]>;
  user_created?: Maybe<Scalars["Int"]["output"]>;
  user_updated?: Maybe<Scalars["Int"]["output"]>;
};

export type Posts_Aggregated_Fields = {
  __typename?: "posts_aggregated_fields";
  sort?: Maybe<Scalars["Float"]["output"]>;
};

export type Posts_Blocks = {
  __typename?: "posts_blocks";
  collection?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["ID"]["output"];
  item?: Maybe<Posts_Blocks_Item_Union>;
  posts_id?: Maybe<Posts>;
  sort?: Maybe<Scalars["Int"]["output"]>;
};

export type Posts_BlocksPosts_IdArgs = {
  filter?: InputMaybe<Posts_Filter>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type Posts_Blocks_Aggregated = {
  __typename?: "posts_blocks_aggregated";
  avg?: Maybe<Posts_Blocks_Aggregated_Fields>;
  avgDistinct?: Maybe<Posts_Blocks_Aggregated_Fields>;
  count?: Maybe<Posts_Blocks_Aggregated_Count>;
  countAll?: Maybe<Scalars["Int"]["output"]>;
  countDistinct?: Maybe<Posts_Blocks_Aggregated_Count>;
  group?: Maybe<Scalars["JSON"]["output"]>;
  max?: Maybe<Posts_Blocks_Aggregated_Fields>;
  min?: Maybe<Posts_Blocks_Aggregated_Fields>;
  sum?: Maybe<Posts_Blocks_Aggregated_Fields>;
  sumDistinct?: Maybe<Posts_Blocks_Aggregated_Fields>;
};

export type Posts_Blocks_Aggregated_Count = {
  __typename?: "posts_blocks_aggregated_count";
  collection?: Maybe<Scalars["Int"]["output"]>;
  id?: Maybe<Scalars["Int"]["output"]>;
  item?: Maybe<Scalars["Int"]["output"]>;
  posts_id?: Maybe<Scalars["Int"]["output"]>;
  sort?: Maybe<Scalars["Int"]["output"]>;
};

export type Posts_Blocks_Aggregated_Fields = {
  __typename?: "posts_blocks_aggregated_fields";
  id?: Maybe<Scalars["Float"]["output"]>;
  sort?: Maybe<Scalars["Float"]["output"]>;
};

export type Posts_Blocks_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Posts_Blocks_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Posts_Blocks_Filter>>>;
  collection?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  item__block_button?: InputMaybe<Block_Button_Filter>;
  item__block_card?: InputMaybe<Block_Card_Filter>;
  item__block_content?: InputMaybe<Block_Content_Filter>;
  item__block_faq?: InputMaybe<Block_Faq_Filter>;
  item__block_gallery?: InputMaybe<Block_Gallery_Filter>;
  item__block_hero?: InputMaybe<Block_Hero_Filter>;
  item__block_image?: InputMaybe<Block_Image_Filter>;
  item__block_posts?: InputMaybe<Block_Posts_Filter>;
  item__block_quote?: InputMaybe<Block_Quote_Filter>;
  item__block_video?: InputMaybe<Block_Video_Filter>;
  posts_id?: InputMaybe<Posts_Filter>;
  sort?: InputMaybe<Number_Filter_Operators>;
};

export type Posts_Blocks_Item_Union =
  | Block_Button
  | Block_Card
  | Block_Content
  | Block_Faq
  | Block_Gallery
  | Block_Hero
  | Block_Image
  | Block_Posts
  | Block_Quote
  | Block_Video;

export type Posts_Blocks_Mutated = {
  __typename?: "posts_blocks_mutated";
  data?: Maybe<Posts_Blocks>;
  event?: Maybe<EventEnum>;
  key: Scalars["ID"]["output"];
};

export type Posts_Categories = {
  __typename?: "posts_categories";
  categories_id?: Maybe<Categories>;
  id: Scalars["ID"]["output"];
  posts_id?: Maybe<Posts>;
  sort?: Maybe<Scalars["Int"]["output"]>;
};

export type Posts_CategoriesCategories_IdArgs = {
  filter?: InputMaybe<Categories_Filter>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type Posts_CategoriesPosts_IdArgs = {
  filter?: InputMaybe<Posts_Filter>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type Posts_Categories_Aggregated = {
  __typename?: "posts_categories_aggregated";
  avg?: Maybe<Posts_Categories_Aggregated_Fields>;
  avgDistinct?: Maybe<Posts_Categories_Aggregated_Fields>;
  count?: Maybe<Posts_Categories_Aggregated_Count>;
  countAll?: Maybe<Scalars["Int"]["output"]>;
  countDistinct?: Maybe<Posts_Categories_Aggregated_Count>;
  group?: Maybe<Scalars["JSON"]["output"]>;
  max?: Maybe<Posts_Categories_Aggregated_Fields>;
  min?: Maybe<Posts_Categories_Aggregated_Fields>;
  sum?: Maybe<Posts_Categories_Aggregated_Fields>;
  sumDistinct?: Maybe<Posts_Categories_Aggregated_Fields>;
};

export type Posts_Categories_Aggregated_Count = {
  __typename?: "posts_categories_aggregated_count";
  categories_id?: Maybe<Scalars["Int"]["output"]>;
  id?: Maybe<Scalars["Int"]["output"]>;
  posts_id?: Maybe<Scalars["Int"]["output"]>;
  sort?: Maybe<Scalars["Int"]["output"]>;
};

export type Posts_Categories_Aggregated_Fields = {
  __typename?: "posts_categories_aggregated_fields";
  categories_id?: Maybe<Scalars["Float"]["output"]>;
  id?: Maybe<Scalars["Float"]["output"]>;
  sort?: Maybe<Scalars["Float"]["output"]>;
};

export type Posts_Categories_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Posts_Categories_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Posts_Categories_Filter>>>;
  categories_id?: InputMaybe<Categories_Filter>;
  id?: InputMaybe<Number_Filter_Operators>;
  posts_id?: InputMaybe<Posts_Filter>;
  sort?: InputMaybe<Number_Filter_Operators>;
};

export type Posts_Categories_Mutated = {
  __typename?: "posts_categories_mutated";
  data?: Maybe<Posts_Categories>;
  event?: Maybe<EventEnum>;
  key: Scalars["ID"]["output"];
};

export type Posts_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Posts_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Posts_Filter>>>;
  biography?: InputMaybe<String_Filter_Operators>;
  biography_func?: InputMaybe<Count_Function_Filter_Operators>;
  blocks?: InputMaybe<Posts_Blocks_Filter>;
  blocks_func?: InputMaybe<Count_Function_Filter_Operators>;
  categories?: InputMaybe<Posts_Categories_Filter>;
  categories_func?: InputMaybe<Count_Function_Filter_Operators>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_published?: InputMaybe<Date_Filter_Operators>;
  date_published_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  description?: InputMaybe<String_Filter_Operators>;
  editor?: InputMaybe<String_Filter_Operators>;
  featured?: InputMaybe<Images_Filter>;
  headline?: InputMaybe<String_Filter_Operators>;
  html?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<String_Filter_Operators>;
  info?: InputMaybe<String_Filter_Operators>;
  info_func?: InputMaybe<Count_Function_Filter_Operators>;
  markdown?: InputMaybe<String_Filter_Operators>;
  seo?: InputMaybe<Seo_Filter>;
  slug?: InputMaybe<String_Filter_Operators>;
  sort?: InputMaybe<Number_Filter_Operators>;
  status?: InputMaybe<String_Filter_Operators>;
  tags?: InputMaybe<Posts_Tags_Filter>;
  tags_func?: InputMaybe<Count_Function_Filter_Operators>;
  title?: InputMaybe<String_Filter_Operators>;
  topic?: InputMaybe<String_Filter_Operators>;
  user_created?: InputMaybe<Directus_Users_Filter>;
  user_updated?: InputMaybe<Directus_Users_Filter>;
};

export type Posts_Mutated = {
  __typename?: "posts_mutated";
  data?: Maybe<Posts>;
  event?: Maybe<EventEnum>;
  key: Scalars["ID"]["output"];
};

export type Posts_Tags = {
  __typename?: "posts_tags";
  id: Scalars["ID"]["output"];
  posts_id?: Maybe<Posts>;
  sort?: Maybe<Scalars["Int"]["output"]>;
  tags_id?: Maybe<Tags>;
};

export type Posts_TagsPosts_IdArgs = {
  filter?: InputMaybe<Posts_Filter>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type Posts_TagsTags_IdArgs = {
  filter?: InputMaybe<Tags_Filter>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type Posts_Tags_Aggregated = {
  __typename?: "posts_tags_aggregated";
  avg?: Maybe<Posts_Tags_Aggregated_Fields>;
  avgDistinct?: Maybe<Posts_Tags_Aggregated_Fields>;
  count?: Maybe<Posts_Tags_Aggregated_Count>;
  countAll?: Maybe<Scalars["Int"]["output"]>;
  countDistinct?: Maybe<Posts_Tags_Aggregated_Count>;
  group?: Maybe<Scalars["JSON"]["output"]>;
  max?: Maybe<Posts_Tags_Aggregated_Fields>;
  min?: Maybe<Posts_Tags_Aggregated_Fields>;
  sum?: Maybe<Posts_Tags_Aggregated_Fields>;
  sumDistinct?: Maybe<Posts_Tags_Aggregated_Fields>;
};

export type Posts_Tags_Aggregated_Count = {
  __typename?: "posts_tags_aggregated_count";
  id?: Maybe<Scalars["Int"]["output"]>;
  posts_id?: Maybe<Scalars["Int"]["output"]>;
  sort?: Maybe<Scalars["Int"]["output"]>;
  tags_id?: Maybe<Scalars["Int"]["output"]>;
};

export type Posts_Tags_Aggregated_Fields = {
  __typename?: "posts_tags_aggregated_fields";
  id?: Maybe<Scalars["Float"]["output"]>;
  sort?: Maybe<Scalars["Float"]["output"]>;
  tags_id?: Maybe<Scalars["Float"]["output"]>;
};

export type Posts_Tags_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Posts_Tags_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Posts_Tags_Filter>>>;
  id?: InputMaybe<Number_Filter_Operators>;
  posts_id?: InputMaybe<Posts_Filter>;
  sort?: InputMaybe<Number_Filter_Operators>;
  tags_id?: InputMaybe<Tags_Filter>;
};

export type Posts_Tags_Mutated = {
  __typename?: "posts_tags_mutated";
  data?: Maybe<Posts_Tags>;
  event?: Maybe<EventEnum>;
  key: Scalars["ID"]["output"];
};

export type Redirects = {
  __typename?: "redirects";
  date_created?: Maybe<Scalars["Date"]["output"]>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars["Date"]["output"]>;
  date_updated_func?: Maybe<Datetime_Functions>;
  id: Scalars["ID"]["output"];
  /** Just for self reference, This will not be shown or related to front-end in any way.  */
  message?: Maybe<Scalars["String"]["output"]>;
  response_code: Scalars["String"]["output"];
  url_new: Scalars["String"]["output"];
  url_old: Scalars["String"]["output"];
  user_created?: Maybe<Directus_Users>;
  user_updated?: Maybe<Directus_Users>;
};

export type RedirectsUser_CreatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type RedirectsUser_UpdatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type Redirects_Aggregated = {
  __typename?: "redirects_aggregated";
  count?: Maybe<Redirects_Aggregated_Count>;
  countAll?: Maybe<Scalars["Int"]["output"]>;
  countDistinct?: Maybe<Redirects_Aggregated_Count>;
  group?: Maybe<Scalars["JSON"]["output"]>;
};

export type Redirects_Aggregated_Count = {
  __typename?: "redirects_aggregated_count";
  date_created?: Maybe<Scalars["Int"]["output"]>;
  date_updated?: Maybe<Scalars["Int"]["output"]>;
  id?: Maybe<Scalars["Int"]["output"]>;
  /** Just for self reference, This will not be shown or related to front-end in any way.  */
  message?: Maybe<Scalars["Int"]["output"]>;
  response_code?: Maybe<Scalars["Int"]["output"]>;
  url_new?: Maybe<Scalars["Int"]["output"]>;
  url_old?: Maybe<Scalars["Int"]["output"]>;
  user_created?: Maybe<Scalars["Int"]["output"]>;
  user_updated?: Maybe<Scalars["Int"]["output"]>;
};

export type Redirects_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Redirects_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Redirects_Filter>>>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  id?: InputMaybe<String_Filter_Operators>;
  message?: InputMaybe<String_Filter_Operators>;
  response_code?: InputMaybe<String_Filter_Operators>;
  url_new?: InputMaybe<String_Filter_Operators>;
  url_old?: InputMaybe<String_Filter_Operators>;
  user_created?: InputMaybe<Directus_Users_Filter>;
  user_updated?: InputMaybe<Directus_Users_Filter>;
};

export type Redirects_Mutated = {
  __typename?: "redirects_mutated";
  data?: Maybe<Redirects>;
  event?: Maybe<EventEnum>;
  key: Scalars["ID"]["output"];
};

export type Seo = {
  __typename?: "seo";
  /** The canonical URL is used to specify the preferred version of a page, especially when there are multiple URLs with similar content. It helps prevent duplicate content issues */
  canonical_url?: Maybe<Scalars["String"]["output"]>;
  change_frequency?: Maybe<Scalars["String"]["output"]>;
  /** The meta description provides a concise summary of the page content. Search engines may use it in search results, so it should be compelling and relevant. Max 160 characters.  */
  description?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["ID"]["output"];
  /** Instruct crawlers not to follow links on this page. */
  nofollow?: Maybe<Scalars["Boolean"]["output"]>;
  /** Instruct crawlers not to index this entry. */
  noindex?: Maybe<Scalars["Boolean"]["output"]>;
  og_image?: Maybe<Images>;
  posts?: Maybe<Array<Maybe<Posts>>>;
  posts_func?: Maybe<Count_Functions>;
  priority?: Maybe<Scalars["Float"]["output"]>;
  /** The title tag is one of the most important on-page SEO elements. It defines the title of a webpage and appears in the browser's title bar and search engine results. Max 70 characters including the site name. */
  title?: Maybe<Scalars["String"]["output"]>;
  twitter_image?: Maybe<Images>;
};

export type SeoOg_ImageArgs = {
  filter?: InputMaybe<Images_Filter>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type SeoPostsArgs = {
  filter?: InputMaybe<Posts_Filter>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type SeoTwitter_ImageArgs = {
  filter?: InputMaybe<Images_Filter>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type Seo_Aggregated = {
  __typename?: "seo_aggregated";
  avg?: Maybe<Seo_Aggregated_Fields>;
  avgDistinct?: Maybe<Seo_Aggregated_Fields>;
  count?: Maybe<Seo_Aggregated_Count>;
  countAll?: Maybe<Scalars["Int"]["output"]>;
  countDistinct?: Maybe<Seo_Aggregated_Count>;
  group?: Maybe<Scalars["JSON"]["output"]>;
  max?: Maybe<Seo_Aggregated_Fields>;
  min?: Maybe<Seo_Aggregated_Fields>;
  sum?: Maybe<Seo_Aggregated_Fields>;
  sumDistinct?: Maybe<Seo_Aggregated_Fields>;
};

export type Seo_Aggregated_Count = {
  __typename?: "seo_aggregated_count";
  /** The canonical URL is used to specify the preferred version of a page, especially when there are multiple URLs with similar content. It helps prevent duplicate content issues */
  canonical_url?: Maybe<Scalars["Int"]["output"]>;
  change_frequency?: Maybe<Scalars["Int"]["output"]>;
  /** The meta description provides a concise summary of the page content. Search engines may use it in search results, so it should be compelling and relevant. Max 160 characters.  */
  description?: Maybe<Scalars["Int"]["output"]>;
  id?: Maybe<Scalars["Int"]["output"]>;
  /** Instruct crawlers not to follow links on this page. */
  nofollow?: Maybe<Scalars["Int"]["output"]>;
  /** Instruct crawlers not to index this entry. */
  noindex?: Maybe<Scalars["Int"]["output"]>;
  og_image?: Maybe<Scalars["Int"]["output"]>;
  posts?: Maybe<Scalars["Int"]["output"]>;
  priority?: Maybe<Scalars["Int"]["output"]>;
  /** The title tag is one of the most important on-page SEO elements. It defines the title of a webpage and appears in the browser's title bar and search engine results. Max 70 characters including the site name. */
  title?: Maybe<Scalars["Int"]["output"]>;
  twitter_image?: Maybe<Scalars["Int"]["output"]>;
};

export type Seo_Aggregated_Fields = {
  __typename?: "seo_aggregated_fields";
  priority?: Maybe<Scalars["Float"]["output"]>;
};

export type Seo_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Seo_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Seo_Filter>>>;
  canonical_url?: InputMaybe<String_Filter_Operators>;
  change_frequency?: InputMaybe<String_Filter_Operators>;
  description?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<String_Filter_Operators>;
  nofollow?: InputMaybe<Boolean_Filter_Operators>;
  noindex?: InputMaybe<Boolean_Filter_Operators>;
  og_image?: InputMaybe<Images_Filter>;
  posts?: InputMaybe<Posts_Filter>;
  posts_func?: InputMaybe<Count_Function_Filter_Operators>;
  priority?: InputMaybe<Number_Filter_Operators>;
  title?: InputMaybe<String_Filter_Operators>;
  twitter_image?: InputMaybe<Images_Filter>;
};

export type Seo_Mutated = {
  __typename?: "seo_mutated";
  data?: Maybe<Seo>;
  event?: Maybe<EventEnum>;
  key: Scalars["ID"]["output"];
};

export type Sitemaps = {
  __typename?: "sitemaps";
  change_frequency?: Maybe<Scalars["String"]["output"]>;
  collection: Scalars["String"]["output"];
  date_created?: Maybe<Scalars["Date"]["output"]>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars["Date"]["output"]>;
  date_updated_func?: Maybe<Datetime_Functions>;
  excluded?: Maybe<Array<Maybe<Sitemaps_Excluded>>>;
  excluded_func?: Maybe<Count_Functions>;
  id: Scalars["ID"]["output"];
  included?: Maybe<Array<Maybe<Sitemaps_Included>>>;
  included_func?: Maybe<Count_Functions>;
  loc: Scalars["String"]["output"];
  priority?: Maybe<Scalars["Float"]["output"]>;
  size?: Maybe<Scalars["Int"]["output"]>;
  sort?: Maybe<Scalars["Int"]["output"]>;
  status?: Maybe<Scalars["String"]["output"]>;
  user_created?: Maybe<Directus_Users>;
  user_updated?: Maybe<Directus_Users>;
};

export type SitemapsExcludedArgs = {
  filter?: InputMaybe<Sitemaps_Excluded_Filter>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type SitemapsIncludedArgs = {
  filter?: InputMaybe<Sitemaps_Included_Filter>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type SitemapsUser_CreatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type SitemapsUser_UpdatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type Sitemaps_Aggregated = {
  __typename?: "sitemaps_aggregated";
  avg?: Maybe<Sitemaps_Aggregated_Fields>;
  avgDistinct?: Maybe<Sitemaps_Aggregated_Fields>;
  count?: Maybe<Sitemaps_Aggregated_Count>;
  countAll?: Maybe<Scalars["Int"]["output"]>;
  countDistinct?: Maybe<Sitemaps_Aggregated_Count>;
  group?: Maybe<Scalars["JSON"]["output"]>;
  max?: Maybe<Sitemaps_Aggregated_Fields>;
  min?: Maybe<Sitemaps_Aggregated_Fields>;
  sum?: Maybe<Sitemaps_Aggregated_Fields>;
  sumDistinct?: Maybe<Sitemaps_Aggregated_Fields>;
};

export type Sitemaps_Aggregated_Count = {
  __typename?: "sitemaps_aggregated_count";
  change_frequency?: Maybe<Scalars["Int"]["output"]>;
  collection?: Maybe<Scalars["Int"]["output"]>;
  date_created?: Maybe<Scalars["Int"]["output"]>;
  date_updated?: Maybe<Scalars["Int"]["output"]>;
  excluded?: Maybe<Scalars["Int"]["output"]>;
  id?: Maybe<Scalars["Int"]["output"]>;
  included?: Maybe<Scalars["Int"]["output"]>;
  loc?: Maybe<Scalars["Int"]["output"]>;
  priority?: Maybe<Scalars["Int"]["output"]>;
  size?: Maybe<Scalars["Int"]["output"]>;
  sort?: Maybe<Scalars["Int"]["output"]>;
  status?: Maybe<Scalars["Int"]["output"]>;
  user_created?: Maybe<Scalars["Int"]["output"]>;
  user_updated?: Maybe<Scalars["Int"]["output"]>;
};

export type Sitemaps_Aggregated_Fields = {
  __typename?: "sitemaps_aggregated_fields";
  priority?: Maybe<Scalars["Float"]["output"]>;
  size?: Maybe<Scalars["Float"]["output"]>;
  sort?: Maybe<Scalars["Float"]["output"]>;
};

export type Sitemaps_Excluded = {
  __typename?: "sitemaps_excluded";
  collection?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["ID"]["output"];
  item?: Maybe<Sitemaps_Excluded_Item_Union>;
  sitemaps_id?: Maybe<Sitemaps>;
  sort?: Maybe<Scalars["Int"]["output"]>;
};

export type Sitemaps_ExcludedSitemaps_IdArgs = {
  filter?: InputMaybe<Sitemaps_Filter>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type Sitemaps_Excluded_Aggregated = {
  __typename?: "sitemaps_excluded_aggregated";
  avg?: Maybe<Sitemaps_Excluded_Aggregated_Fields>;
  avgDistinct?: Maybe<Sitemaps_Excluded_Aggregated_Fields>;
  count?: Maybe<Sitemaps_Excluded_Aggregated_Count>;
  countAll?: Maybe<Scalars["Int"]["output"]>;
  countDistinct?: Maybe<Sitemaps_Excluded_Aggregated_Count>;
  group?: Maybe<Scalars["JSON"]["output"]>;
  max?: Maybe<Sitemaps_Excluded_Aggregated_Fields>;
  min?: Maybe<Sitemaps_Excluded_Aggregated_Fields>;
  sum?: Maybe<Sitemaps_Excluded_Aggregated_Fields>;
  sumDistinct?: Maybe<Sitemaps_Excluded_Aggregated_Fields>;
};

export type Sitemaps_Excluded_Aggregated_Count = {
  __typename?: "sitemaps_excluded_aggregated_count";
  collection?: Maybe<Scalars["Int"]["output"]>;
  id?: Maybe<Scalars["Int"]["output"]>;
  item?: Maybe<Scalars["Int"]["output"]>;
  sitemaps_id?: Maybe<Scalars["Int"]["output"]>;
  sort?: Maybe<Scalars["Int"]["output"]>;
};

export type Sitemaps_Excluded_Aggregated_Fields = {
  __typename?: "sitemaps_excluded_aggregated_fields";
  id?: Maybe<Scalars["Float"]["output"]>;
  sort?: Maybe<Scalars["Float"]["output"]>;
};

export type Sitemaps_Excluded_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Sitemaps_Excluded_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Sitemaps_Excluded_Filter>>>;
  collection?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  item__pages?: InputMaybe<Pages_Filter>;
  item__posts?: InputMaybe<Posts_Filter>;
  sitemaps_id?: InputMaybe<Sitemaps_Filter>;
  sort?: InputMaybe<Number_Filter_Operators>;
};

export type Sitemaps_Excluded_Item_Union = Pages | Posts;

export type Sitemaps_Excluded_Mutated = {
  __typename?: "sitemaps_excluded_mutated";
  data?: Maybe<Sitemaps_Excluded>;
  event?: Maybe<EventEnum>;
  key: Scalars["ID"]["output"];
};

export type Sitemaps_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Sitemaps_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Sitemaps_Filter>>>;
  change_frequency?: InputMaybe<String_Filter_Operators>;
  collection?: InputMaybe<String_Filter_Operators>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  excluded?: InputMaybe<Sitemaps_Excluded_Filter>;
  excluded_func?: InputMaybe<Count_Function_Filter_Operators>;
  id?: InputMaybe<String_Filter_Operators>;
  included?: InputMaybe<Sitemaps_Included_Filter>;
  included_func?: InputMaybe<Count_Function_Filter_Operators>;
  loc?: InputMaybe<String_Filter_Operators>;
  priority?: InputMaybe<Number_Filter_Operators>;
  size?: InputMaybe<Number_Filter_Operators>;
  sort?: InputMaybe<Number_Filter_Operators>;
  status?: InputMaybe<String_Filter_Operators>;
  user_created?: InputMaybe<Directus_Users_Filter>;
  user_updated?: InputMaybe<Directus_Users_Filter>;
};

export type Sitemaps_Included = {
  __typename?: "sitemaps_included";
  collection?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["ID"]["output"];
  item?: Maybe<Sitemaps_Included_Item_Union>;
  sitemaps_id?: Maybe<Sitemaps>;
  sort?: Maybe<Scalars["Int"]["output"]>;
};

export type Sitemaps_IncludedSitemaps_IdArgs = {
  filter?: InputMaybe<Sitemaps_Filter>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type Sitemaps_Included_Aggregated = {
  __typename?: "sitemaps_included_aggregated";
  avg?: Maybe<Sitemaps_Included_Aggregated_Fields>;
  avgDistinct?: Maybe<Sitemaps_Included_Aggregated_Fields>;
  count?: Maybe<Sitemaps_Included_Aggregated_Count>;
  countAll?: Maybe<Scalars["Int"]["output"]>;
  countDistinct?: Maybe<Sitemaps_Included_Aggregated_Count>;
  group?: Maybe<Scalars["JSON"]["output"]>;
  max?: Maybe<Sitemaps_Included_Aggregated_Fields>;
  min?: Maybe<Sitemaps_Included_Aggregated_Fields>;
  sum?: Maybe<Sitemaps_Included_Aggregated_Fields>;
  sumDistinct?: Maybe<Sitemaps_Included_Aggregated_Fields>;
};

export type Sitemaps_Included_Aggregated_Count = {
  __typename?: "sitemaps_included_aggregated_count";
  collection?: Maybe<Scalars["Int"]["output"]>;
  id?: Maybe<Scalars["Int"]["output"]>;
  item?: Maybe<Scalars["Int"]["output"]>;
  sitemaps_id?: Maybe<Scalars["Int"]["output"]>;
  sort?: Maybe<Scalars["Int"]["output"]>;
};

export type Sitemaps_Included_Aggregated_Fields = {
  __typename?: "sitemaps_included_aggregated_fields";
  id?: Maybe<Scalars["Float"]["output"]>;
  sort?: Maybe<Scalars["Float"]["output"]>;
};

export type Sitemaps_Included_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Sitemaps_Included_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Sitemaps_Included_Filter>>>;
  collection?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  item__pages?: InputMaybe<Pages_Filter>;
  item__posts?: InputMaybe<Posts_Filter>;
  sitemaps_id?: InputMaybe<Sitemaps_Filter>;
  sort?: InputMaybe<Number_Filter_Operators>;
};

export type Sitemaps_Included_Item_Union = Pages | Posts;

export type Sitemaps_Included_Mutated = {
  __typename?: "sitemaps_included_mutated";
  data?: Maybe<Sitemaps_Included>;
  event?: Maybe<EventEnum>;
  key: Scalars["ID"]["output"];
};

export type Sitemaps_Mutated = {
  __typename?: "sitemaps_mutated";
  data?: Maybe<Sitemaps>;
  event?: Maybe<EventEnum>;
  key: Scalars["ID"]["output"];
};

export type String_Filter_Operators = {
  _contains?: InputMaybe<Scalars["String"]["input"]>;
  _empty?: InputMaybe<Scalars["Boolean"]["input"]>;
  _ends_with?: InputMaybe<Scalars["String"]["input"]>;
  _eq?: InputMaybe<Scalars["String"]["input"]>;
  _icontains?: InputMaybe<Scalars["String"]["input"]>;
  _iends_with?: InputMaybe<Scalars["String"]["input"]>;
  _in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  _istarts_with?: InputMaybe<Scalars["String"]["input"]>;
  _ncontains?: InputMaybe<Scalars["String"]["input"]>;
  _nempty?: InputMaybe<Scalars["Boolean"]["input"]>;
  _nends_with?: InputMaybe<Scalars["String"]["input"]>;
  _neq?: InputMaybe<Scalars["String"]["input"]>;
  _niends_with?: InputMaybe<Scalars["String"]["input"]>;
  _nin?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  _nistarts_with?: InputMaybe<Scalars["String"]["input"]>;
  _nnull?: InputMaybe<Scalars["Boolean"]["input"]>;
  _nstarts_with?: InputMaybe<Scalars["String"]["input"]>;
  _null?: InputMaybe<Scalars["Boolean"]["input"]>;
  _starts_with?: InputMaybe<Scalars["String"]["input"]>;
};

export type Tags = {
  __typename?: "tags";
  date_created?: Maybe<Scalars["Date"]["output"]>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars["Date"]["output"]>;
  date_updated_func?: Maybe<Datetime_Functions>;
  id: Scalars["ID"]["output"];
  name: Scalars["String"]["output"];
  posts?: Maybe<Array<Maybe<Posts_Tags>>>;
  posts_func?: Maybe<Count_Functions>;
  slug: Scalars["String"]["output"];
  sort?: Maybe<Scalars["Int"]["output"]>;
  status?: Maybe<Scalars["String"]["output"]>;
  user_created?: Maybe<Directus_Users>;
  user_updated?: Maybe<Directus_Users>;
};

export type TagsPostsArgs = {
  filter?: InputMaybe<Posts_Tags_Filter>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type TagsUser_CreatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type TagsUser_UpdatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type Tags_Aggregated = {
  __typename?: "tags_aggregated";
  avg?: Maybe<Tags_Aggregated_Fields>;
  avgDistinct?: Maybe<Tags_Aggregated_Fields>;
  count?: Maybe<Tags_Aggregated_Count>;
  countAll?: Maybe<Scalars["Int"]["output"]>;
  countDistinct?: Maybe<Tags_Aggregated_Count>;
  group?: Maybe<Scalars["JSON"]["output"]>;
  max?: Maybe<Tags_Aggregated_Fields>;
  min?: Maybe<Tags_Aggregated_Fields>;
  sum?: Maybe<Tags_Aggregated_Fields>;
  sumDistinct?: Maybe<Tags_Aggregated_Fields>;
};

export type Tags_Aggregated_Count = {
  __typename?: "tags_aggregated_count";
  date_created?: Maybe<Scalars["Int"]["output"]>;
  date_updated?: Maybe<Scalars["Int"]["output"]>;
  id?: Maybe<Scalars["Int"]["output"]>;
  name?: Maybe<Scalars["Int"]["output"]>;
  posts?: Maybe<Scalars["Int"]["output"]>;
  slug?: Maybe<Scalars["Int"]["output"]>;
  sort?: Maybe<Scalars["Int"]["output"]>;
  status?: Maybe<Scalars["Int"]["output"]>;
  user_created?: Maybe<Scalars["Int"]["output"]>;
  user_updated?: Maybe<Scalars["Int"]["output"]>;
};

export type Tags_Aggregated_Fields = {
  __typename?: "tags_aggregated_fields";
  id?: Maybe<Scalars["Float"]["output"]>;
  sort?: Maybe<Scalars["Float"]["output"]>;
};

export type Tags_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Tags_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Tags_Filter>>>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  name?: InputMaybe<String_Filter_Operators>;
  posts?: InputMaybe<Posts_Tags_Filter>;
  posts_func?: InputMaybe<Count_Function_Filter_Operators>;
  slug?: InputMaybe<String_Filter_Operators>;
  sort?: InputMaybe<Number_Filter_Operators>;
  status?: InputMaybe<String_Filter_Operators>;
  user_created?: InputMaybe<Directus_Users_Filter>;
  user_updated?: InputMaybe<Directus_Users_Filter>;
};

export type Tags_Mutated = {
  __typename?: "tags_mutated";
  data?: Maybe<Tags>;
  event?: Maybe<EventEnum>;
  key: Scalars["ID"]["output"];
};

export type Version_Autocomplete = {
  __typename?: "version_autocomplete";
  date_created?: Maybe<Scalars["Date"]["output"]>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars["Date"]["output"]>;
  date_updated_func?: Maybe<Datetime_Functions>;
  id: Scalars["ID"]["output"];
  sort?: Maybe<Scalars["Int"]["output"]>;
  status?: Maybe<Scalars["String"]["output"]>;
  topics?: Maybe<Scalars["JSON"]["output"]>;
  topics_func?: Maybe<Count_Functions>;
  user_created?: Maybe<Scalars["String"]["output"]>;
  user_updated?: Maybe<Scalars["String"]["output"]>;
};

export type Version_Block_Button = {
  __typename?: "version_block_button";
  align?: Maybe<Scalars["String"]["output"]>;
  date_created?: Maybe<Scalars["Date"]["output"]>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars["Date"]["output"]>;
  date_updated_func?: Maybe<Datetime_Functions>;
  disabled?: Maybe<Scalars["Boolean"]["output"]>;
  href?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["ID"]["output"];
  label?: Maybe<Scalars["String"]["output"]>;
  properties?: Maybe<Scalars["JSON"]["output"]>;
  properties_func?: Maybe<Count_Functions>;
  shape?: Maybe<Scalars["String"]["output"]>;
  size?: Maybe<Scalars["String"]["output"]>;
  sort?: Maybe<Scalars["Int"]["output"]>;
  status?: Maybe<Scalars["String"]["output"]>;
  /** SVG Icons:<br/>https://tablericons.com<br/>https://fontawesome.com/search?o=r&m=free <br/>  */
  svg?: Maybe<Scalars["String"]["output"]>;
  user_created?: Maybe<Scalars["String"]["output"]>;
  user_updated?: Maybe<Scalars["String"]["output"]>;
  variant?: Maybe<Scalars["String"]["output"]>;
};

export type Version_Block_Card = {
  __typename?: "version_block_card";
  date_created?: Maybe<Scalars["Date"]["output"]>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars["Date"]["output"]>;
  date_updated_func?: Maybe<Datetime_Functions>;
  description?: Maybe<Scalars["String"]["output"]>;
  headline?: Maybe<Scalars["String"]["output"]>;
  href?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["ID"]["output"];
  image?: Maybe<Scalars["String"]["output"]>;
  size?: Maybe<Scalars["String"]["output"]>;
  sort?: Maybe<Scalars["Int"]["output"]>;
  status?: Maybe<Scalars["String"]["output"]>;
  title?: Maybe<Scalars["String"]["output"]>;
  user_created?: Maybe<Scalars["String"]["output"]>;
  user_updated?: Maybe<Scalars["String"]["output"]>;
  variant?: Maybe<Scalars["String"]["output"]>;
};

export type Version_Block_Content = {
  __typename?: "version_block_content";
  date_created?: Maybe<Scalars["Date"]["output"]>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars["Date"]["output"]>;
  date_updated_func?: Maybe<Datetime_Functions>;
  editor: Scalars["String"]["output"];
  headline?: Maybe<Scalars["String"]["output"]>;
  html?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["ID"]["output"];
  markdown?: Maybe<Scalars["String"]["output"]>;
  sort?: Maybe<Scalars["Int"]["output"]>;
  status?: Maybe<Scalars["String"]["output"]>;
  title?: Maybe<Scalars["String"]["output"]>;
  user_created?: Maybe<Scalars["String"]["output"]>;
  user_updated?: Maybe<Scalars["String"]["output"]>;
};

export type Version_Block_Faq = {
  __typename?: "version_block_faq";
  date_created?: Maybe<Scalars["Date"]["output"]>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars["Date"]["output"]>;
  date_updated_func?: Maybe<Datetime_Functions>;
  faqs?: Maybe<Scalars["JSON"]["output"]>;
  faqs_func?: Maybe<Count_Functions>;
  headline?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["ID"]["output"];
  sort?: Maybe<Scalars["Int"]["output"]>;
  status?: Maybe<Scalars["String"]["output"]>;
  title: Scalars["String"]["output"];
  user_created?: Maybe<Scalars["String"]["output"]>;
  user_updated?: Maybe<Scalars["String"]["output"]>;
};

export type Version_Block_Faq_Faqs = {
  __typename?: "version_block_faq_faqs";
  block_faq_id?: Maybe<Scalars["String"]["output"]>;
  faqs_id?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["ID"]["output"];
  sort?: Maybe<Scalars["Int"]["output"]>;
};

export type Version_Block_Gallery = {
  __typename?: "version_block_gallery";
  date_created?: Maybe<Scalars["Date"]["output"]>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars["Date"]["output"]>;
  date_updated_func?: Maybe<Datetime_Functions>;
  description?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["ID"]["output"];
  images?: Maybe<Scalars["JSON"]["output"]>;
  images_func?: Maybe<Count_Functions>;
  sort?: Maybe<Scalars["Int"]["output"]>;
  status?: Maybe<Scalars["String"]["output"]>;
  title?: Maybe<Scalars["String"]["output"]>;
  user_created?: Maybe<Scalars["String"]["output"]>;
  user_updated?: Maybe<Scalars["String"]["output"]>;
};

export type Version_Block_Gallery_Images = {
  __typename?: "version_block_gallery_images";
  block_gallery_id?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["ID"]["output"];
  images_id?: Maybe<Scalars["String"]["output"]>;
  sort?: Maybe<Scalars["Int"]["output"]>;
};

export type Version_Block_Hero = {
  __typename?: "version_block_hero";
  buttons?: Maybe<Scalars["JSON"]["output"]>;
  buttons_func?: Maybe<Count_Functions>;
  date_created?: Maybe<Scalars["Date"]["output"]>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars["Date"]["output"]>;
  date_updated_func?: Maybe<Datetime_Functions>;
  description: Scalars["String"]["output"];
  headline?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["ID"]["output"];
  images?: Maybe<Scalars["JSON"]["output"]>;
  images_func?: Maybe<Count_Functions>;
  sort?: Maybe<Scalars["Int"]["output"]>;
  status?: Maybe<Scalars["String"]["output"]>;
  title: Scalars["String"]["output"];
  user_created?: Maybe<Scalars["String"]["output"]>;
  user_updated?: Maybe<Scalars["String"]["output"]>;
};

export type Version_Block_Hero_Block_Button = {
  __typename?: "version_block_hero_block_button";
  block_button_id?: Maybe<Scalars["String"]["output"]>;
  block_hero_id?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["ID"]["output"];
};

export type Version_Block_Hero_Images = {
  __typename?: "version_block_hero_images";
  block_hero_id?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["ID"]["output"];
  images_id?: Maybe<Scalars["String"]["output"]>;
};

export type Version_Block_Image = {
  __typename?: "version_block_image";
  date_created?: Maybe<Scalars["Date"]["output"]>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars["Date"]["output"]>;
  date_updated_func?: Maybe<Datetime_Functions>;
  id: Scalars["ID"]["output"];
  image: Scalars["String"]["output"];
  size?: Maybe<Scalars["String"]["output"]>;
  sort?: Maybe<Scalars["Int"]["output"]>;
  status?: Maybe<Scalars["String"]["output"]>;
  user_created?: Maybe<Scalars["String"]["output"]>;
  user_updated?: Maybe<Scalars["String"]["output"]>;
};

export type Version_Block_Posts = {
  __typename?: "version_block_posts";
  date_created?: Maybe<Scalars["Date"]["output"]>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars["Date"]["output"]>;
  date_updated_func?: Maybe<Datetime_Functions>;
  description?: Maybe<Scalars["String"]["output"]>;
  headline?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["ID"]["output"];
  /** Pagination is very much recommended, otherwise all the posts will be loaded at once and will make page heavier and very slow in performance */
  pagination?: Maybe<Scalars["Boolean"]["output"]>;
  perpage?: Maybe<Scalars["Float"]["output"]>;
  select?: Maybe<Scalars["String"]["output"]>;
  sort?: Maybe<Scalars["Int"]["output"]>;
  status?: Maybe<Scalars["String"]["output"]>;
  title?: Maybe<Scalars["String"]["output"]>;
  topic?: Maybe<Scalars["String"]["output"]>;
  user_created?: Maybe<Scalars["String"]["output"]>;
  user_updated?: Maybe<Scalars["String"]["output"]>;
};

export type Version_Block_Quote = {
  __typename?: "version_block_quote";
  about?: Maybe<Scalars["String"]["output"]>;
  author?: Maybe<Scalars["String"]["output"]>;
  date_created?: Maybe<Scalars["Date"]["output"]>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars["Date"]["output"]>;
  date_updated_func?: Maybe<Datetime_Functions>;
  id: Scalars["ID"]["output"];
  quote: Scalars["String"]["output"];
  sort?: Maybe<Scalars["Int"]["output"]>;
  status?: Maybe<Scalars["String"]["output"]>;
  title?: Maybe<Scalars["String"]["output"]>;
  user_created?: Maybe<Scalars["String"]["output"]>;
  user_updated?: Maybe<Scalars["String"]["output"]>;
};

export type Version_Block_Video = {
  __typename?: "version_block_video";
  date_created?: Maybe<Scalars["Date"]["output"]>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars["Date"]["output"]>;
  date_updated_func?: Maybe<Datetime_Functions>;
  description?: Maybe<Scalars["String"]["output"]>;
  headline?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["ID"]["output"];
  provider?: Maybe<Scalars["String"]["output"]>;
  sort?: Maybe<Scalars["Int"]["output"]>;
  source: Scalars["String"]["output"];
  status?: Maybe<Scalars["String"]["output"]>;
  title?: Maybe<Scalars["String"]["output"]>;
  user_created?: Maybe<Scalars["String"]["output"]>;
  user_updated?: Maybe<Scalars["String"]["output"]>;
};

export type Version_Categories = {
  __typename?: "version_categories";
  date_created?: Maybe<Scalars["Date"]["output"]>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars["Date"]["output"]>;
  date_updated_func?: Maybe<Datetime_Functions>;
  id: Scalars["ID"]["output"];
  name: Scalars["String"]["output"];
  posts?: Maybe<Scalars["JSON"]["output"]>;
  posts_func?: Maybe<Count_Functions>;
  slug: Scalars["String"]["output"];
  sort?: Maybe<Scalars["Int"]["output"]>;
  status?: Maybe<Scalars["String"]["output"]>;
  user_created?: Maybe<Scalars["String"]["output"]>;
  user_updated?: Maybe<Scalars["String"]["output"]>;
};

export type Version_Faqs = {
  __typename?: "version_faqs";
  answer: Scalars["String"]["output"];
  date_created?: Maybe<Scalars["Date"]["output"]>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars["Date"]["output"]>;
  date_updated_func?: Maybe<Datetime_Functions>;
  id: Scalars["ID"]["output"];
  question: Scalars["String"]["output"];
  sort?: Maybe<Scalars["Int"]["output"]>;
  status?: Maybe<Scalars["String"]["output"]>;
  user_created?: Maybe<Scalars["String"]["output"]>;
  user_updated?: Maybe<Scalars["String"]["output"]>;
};

export type Version_Forms = {
  __typename?: "version_forms";
  date_created?: Maybe<Scalars["Date"]["output"]>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars["Date"]["output"]>;
  date_updated_func?: Maybe<Datetime_Functions>;
  formkey?: Maybe<Scalars["String"]["output"]>;
  headline?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["ID"]["output"];
  sort?: Maybe<Scalars["Int"]["output"]>;
  status?: Maybe<Scalars["String"]["output"]>;
  title?: Maybe<Scalars["String"]["output"]>;
  user_created?: Maybe<Scalars["String"]["output"]>;
  user_updated?: Maybe<Scalars["String"]["output"]>;
};

export type Version_Globals = {
  __typename?: "version_globals";
  address_city?: Maybe<Scalars["String"]["output"]>;
  address_country?: Maybe<Scalars["String"]["output"]>;
  address_pincode?: Maybe<Scalars["String"]["output"]>;
  address_state?: Maybe<Scalars["String"]["output"]>;
  date_created?: Maybe<Scalars["Date"]["output"]>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars["Date"]["output"]>;
  date_updated_func?: Maybe<Datetime_Functions>;
  description?: Maybe<Scalars["String"]["output"]>;
  domain: Scalars["String"]["output"];
  email?: Maybe<Scalars["String"]["output"]>;
  footer_sections?: Maybe<Scalars["JSON"]["output"]>;
  footer_sections_func?: Maybe<Count_Functions>;
  id: Scalars["ID"]["output"];
  name: Scalars["String"]["output"];
  og_image?: Maybe<Scalars["String"]["output"]>;
  phone?: Maybe<Scalars["String"]["output"]>;
  /** SVG Icons:<br/>https://tablericons.com<br/>https://fontawesome.com/search?o=r&m=free <br/>  */
  social_links?: Maybe<Scalars["JSON"]["output"]>;
  social_links_func?: Maybe<Count_Functions>;
  street_address?: Maybe<Scalars["String"]["output"]>;
  tagline?: Maybe<Scalars["String"]["output"]>;
  /** What's the website title? */
  title?: Maybe<Scalars["String"]["output"]>;
  twitter_image?: Maybe<Scalars["String"]["output"]>;
  url: Scalars["String"]["output"];
  user_created?: Maybe<Scalars["String"]["output"]>;
  user_updated?: Maybe<Scalars["String"]["output"]>;
};

export type Version_Images = {
  __typename?: "version_images";
  alt?: Maybe<Scalars["String"]["output"]>;
  caption?: Maybe<Scalars["String"]["output"]>;
  date_created?: Maybe<Scalars["Date"]["output"]>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars["Date"]["output"]>;
  date_updated_func?: Maybe<Datetime_Functions>;
  description?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["ID"]["output"];
  loading?: Maybe<Scalars["String"]["output"]>;
  posts_featured?: Maybe<Scalars["JSON"]["output"]>;
  posts_featured_func?: Maybe<Count_Functions>;
  sort?: Maybe<Scalars["Int"]["output"]>;
  source?: Maybe<Scalars["String"]["output"]>;
  status?: Maybe<Scalars["String"]["output"]>;
  title?: Maybe<Scalars["String"]["output"]>;
  type?: Maybe<Scalars["String"]["output"]>;
  user_created?: Maybe<Scalars["String"]["output"]>;
  user_updated?: Maybe<Scalars["String"]["output"]>;
};

export type Version_Pages = {
  __typename?: "version_pages";
  blocks?: Maybe<Scalars["JSON"]["output"]>;
  blocks_func?: Maybe<Count_Functions>;
  date_created?: Maybe<Scalars["Date"]["output"]>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars["Date"]["output"]>;
  date_updated_func?: Maybe<Datetime_Functions>;
  description?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["ID"]["output"];
  pagination?: Maybe<Scalars["Boolean"]["output"]>;
  path: Scalars["String"]["output"];
  seo?: Maybe<Scalars["String"]["output"]>;
  sort?: Maybe<Scalars["Int"]["output"]>;
  status?: Maybe<Scalars["String"]["output"]>;
  title?: Maybe<Scalars["String"]["output"]>;
  user_created?: Maybe<Scalars["String"]["output"]>;
  user_updated?: Maybe<Scalars["String"]["output"]>;
};

export type Version_Pages_Blocks = {
  __typename?: "version_pages_blocks";
  collection?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["ID"]["output"];
  item?: Maybe<Scalars["String"]["output"]>;
  pages_id?: Maybe<Scalars["String"]["output"]>;
  sort?: Maybe<Scalars["Int"]["output"]>;
};

export type Version_Posts = {
  __typename?: "version_posts";
  biography?: Maybe<Scalars["JSON"]["output"]>;
  biography_func?: Maybe<Count_Functions>;
  blocks?: Maybe<Scalars["JSON"]["output"]>;
  blocks_func?: Maybe<Count_Functions>;
  categories?: Maybe<Scalars["JSON"]["output"]>;
  categories_func?: Maybe<Count_Functions>;
  date_created?: Maybe<Scalars["Date"]["output"]>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_published?: Maybe<Scalars["Date"]["output"]>;
  date_published_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars["Date"]["output"]>;
  date_updated_func?: Maybe<Datetime_Functions>;
  description?: Maybe<Scalars["String"]["output"]>;
  editor?: Maybe<Scalars["String"]["output"]>;
  featured?: Maybe<Scalars["String"]["output"]>;
  headline?: Maybe<Scalars["String"]["output"]>;
  html?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["ID"]["output"];
  info?: Maybe<Scalars["JSON"]["output"]>;
  info_func?: Maybe<Count_Functions>;
  markdown?: Maybe<Scalars["String"]["output"]>;
  seo?: Maybe<Scalars["String"]["output"]>;
  slug?: Maybe<Scalars["String"]["output"]>;
  sort?: Maybe<Scalars["Int"]["output"]>;
  status?: Maybe<Scalars["String"]["output"]>;
  tags?: Maybe<Scalars["JSON"]["output"]>;
  tags_func?: Maybe<Count_Functions>;
  title: Scalars["String"]["output"];
  topic: Scalars["String"]["output"];
  user_created?: Maybe<Scalars["String"]["output"]>;
  user_updated?: Maybe<Scalars["String"]["output"]>;
};

export type Version_Posts_Blocks = {
  __typename?: "version_posts_blocks";
  collection?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["ID"]["output"];
  item?: Maybe<Scalars["String"]["output"]>;
  posts_id?: Maybe<Scalars["String"]["output"]>;
  sort?: Maybe<Scalars["Int"]["output"]>;
};

export type Version_Posts_Categories = {
  __typename?: "version_posts_categories";
  categories_id?: Maybe<Scalars["GraphQLBigInt"]["output"]>;
  id: Scalars["ID"]["output"];
  posts_id?: Maybe<Scalars["String"]["output"]>;
  sort?: Maybe<Scalars["Int"]["output"]>;
};

export type Version_Posts_Tags = {
  __typename?: "version_posts_tags";
  id: Scalars["ID"]["output"];
  posts_id?: Maybe<Scalars["String"]["output"]>;
  sort?: Maybe<Scalars["Int"]["output"]>;
  tags_id?: Maybe<Scalars["GraphQLBigInt"]["output"]>;
};

export type Version_Redirects = {
  __typename?: "version_redirects";
  date_created?: Maybe<Scalars["Date"]["output"]>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars["Date"]["output"]>;
  date_updated_func?: Maybe<Datetime_Functions>;
  id: Scalars["ID"]["output"];
  /** Just for self reference, This will not be shown or related to front-end in any way.  */
  message?: Maybe<Scalars["String"]["output"]>;
  response_code: Scalars["String"]["output"];
  url_new: Scalars["String"]["output"];
  url_old: Scalars["String"]["output"];
  user_created?: Maybe<Scalars["String"]["output"]>;
  user_updated?: Maybe<Scalars["String"]["output"]>;
};

export type Version_Seo = {
  __typename?: "version_seo";
  /** The canonical URL is used to specify the preferred version of a page, especially when there are multiple URLs with similar content. It helps prevent duplicate content issues */
  canonical_url?: Maybe<Scalars["String"]["output"]>;
  change_frequency?: Maybe<Scalars["String"]["output"]>;
  /** The meta description provides a concise summary of the page content. Search engines may use it in search results, so it should be compelling and relevant. Max 160 characters.  */
  description?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["ID"]["output"];
  /** Instruct crawlers not to follow links on this page. */
  nofollow?: Maybe<Scalars["Boolean"]["output"]>;
  /** Instruct crawlers not to index this entry. */
  noindex?: Maybe<Scalars["Boolean"]["output"]>;
  og_image?: Maybe<Scalars["String"]["output"]>;
  posts?: Maybe<Scalars["JSON"]["output"]>;
  posts_func?: Maybe<Count_Functions>;
  priority?: Maybe<Scalars["Float"]["output"]>;
  /** The title tag is one of the most important on-page SEO elements. It defines the title of a webpage and appears in the browser's title bar and search engine results. Max 70 characters including the site name. */
  title?: Maybe<Scalars["String"]["output"]>;
  twitter_image?: Maybe<Scalars["String"]["output"]>;
};

export type Version_Sitemaps = {
  __typename?: "version_sitemaps";
  change_frequency?: Maybe<Scalars["String"]["output"]>;
  collection: Scalars["String"]["output"];
  date_created?: Maybe<Scalars["Date"]["output"]>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars["Date"]["output"]>;
  date_updated_func?: Maybe<Datetime_Functions>;
  excluded?: Maybe<Scalars["JSON"]["output"]>;
  excluded_func?: Maybe<Count_Functions>;
  id: Scalars["ID"]["output"];
  included?: Maybe<Scalars["JSON"]["output"]>;
  included_func?: Maybe<Count_Functions>;
  loc: Scalars["String"]["output"];
  priority?: Maybe<Scalars["Float"]["output"]>;
  size?: Maybe<Scalars["Int"]["output"]>;
  sort?: Maybe<Scalars["Int"]["output"]>;
  status?: Maybe<Scalars["String"]["output"]>;
  user_created?: Maybe<Scalars["String"]["output"]>;
  user_updated?: Maybe<Scalars["String"]["output"]>;
};

export type Version_Sitemaps_Excluded = {
  __typename?: "version_sitemaps_excluded";
  collection?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["ID"]["output"];
  item?: Maybe<Scalars["String"]["output"]>;
  sitemaps_id?: Maybe<Scalars["String"]["output"]>;
  sort?: Maybe<Scalars["Int"]["output"]>;
};

export type Version_Sitemaps_Included = {
  __typename?: "version_sitemaps_included";
  collection?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["ID"]["output"];
  item?: Maybe<Scalars["String"]["output"]>;
  sitemaps_id?: Maybe<Scalars["String"]["output"]>;
  sort?: Maybe<Scalars["Int"]["output"]>;
};

export type Version_Tags = {
  __typename?: "version_tags";
  date_created?: Maybe<Scalars["Date"]["output"]>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars["Date"]["output"]>;
  date_updated_func?: Maybe<Datetime_Functions>;
  id: Scalars["ID"]["output"];
  name: Scalars["String"]["output"];
  posts?: Maybe<Scalars["JSON"]["output"]>;
  posts_func?: Maybe<Count_Functions>;
  slug: Scalars["String"]["output"];
  sort?: Maybe<Scalars["Int"]["output"]>;
  status?: Maybe<Scalars["String"]["output"]>;
  user_created?: Maybe<Scalars["String"]["output"]>;
  user_updated?: Maybe<Scalars["String"]["output"]>;
};

export type FetchGlobalQueryVariables = Exact<{ [key: string]: never }>;

export type FetchGlobalQuery = {
  __typename?: "Query";
  globals?: {
    __typename: "globals";
    id: string;
    date_created?: any | null;
    date_updated?: any | null;
    url: string;
    title?: string | null;
    tagline?: string | null;
    description?: string | null;
    social_links?: any | null;
    street_address?: string | null;
    address_city?: string | null;
    address_state?: string | null;
    address_pincode?: string | null;
    address_country?: string | null;
    phone?: string | null;
    email?: string | null;
    og_image?: {
      __typename: "images";
      id: string;
      title?: string | null;
      alt?: string | null;
      type?: string | null;
      caption?: string | null;
      source?: string | null;
      description?: string | null;
      loading?: string | null;
    } | null;
    twitter_image?: {
      __typename: "images";
      id: string;
      title?: string | null;
      alt?: string | null;
      type?: string | null;
      caption?: string | null;
      source?: string | null;
      description?: string | null;
      loading?: string | null;
    } | null;
  } | null;
};

export type GetPagesQueryVariables = Exact<{
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>> | InputMaybe<Scalars["String"]["input"]>
  >;
  search?: InputMaybe<Scalars["String"]["input"]>;
  filter?: InputMaybe<Pages_Filter>;
}>;

export type GetPagesQuery = {
  __typename?: "Query";
  pages: Array<{
    __typename: "pages";
    id: string;
    sort?: number | null;
    status?: string | null;
    date_created?: any | null;
    date_updated?: any | null;
    title?: string | null;
    path: string;
    description?: string | null;
    pagination?: boolean | null;
    seo?: {
      __typename: "seo";
      title?: string | null;
      priority?: number | null;
      description?: string | null;
      noindex?: boolean | null;
      nofollow?: boolean | null;
      canonical_url?: string | null;
      change_frequency?: string | null;
      twitter_image?: {
        __typename: "images";
        id: string;
        title?: string | null;
        alt?: string | null;
        type?: string | null;
        caption?: string | null;
        source?: string | null;
        description?: string | null;
        loading?: string | null;
      } | null;
      og_image?: {
        __typename: "images";
        id: string;
        title?: string | null;
        alt?: string | null;
        type?: string | null;
        caption?: string | null;
        source?: string | null;
        description?: string | null;
        loading?: string | null;
      } | null;
    } | null;
    blocks?: Array<{
      __typename?: "pages_blocks";
      sort?: number | null;
      item?:
        | {
            __typename: "block_button";
            id: string;
            svg?: string | null;
            sort?: number | null;
            size?: string | null;
            label?: string | null;
            shape?: string | null;
            variant?: string | null;
            disabled?: boolean | null;
            align?: string | null;
            properties?: any | null;
            href_button?: string | null;
          }
        | {
            __typename: "block_card";
            id: string;
            sort?: number | null;
            headline?: string | null;
            size?: string | null;
            href_card?: string | null;
            title_card?: string | null;
            description_card?: string | null;
            variant_card?: string | null;
            image?: {
              __typename: "images";
              id: string;
              title?: string | null;
              alt?: string | null;
              type?: string | null;
              caption?: string | null;
              source?: string | null;
              description?: string | null;
              loading?: string | null;
            } | null;
          }
        | {
            __typename: "block_content";
            id: string;
            sort?: number | null;
            html?: string | null;
            editor: string;
            headline?: string | null;
            markdown?: string | null;
            title_content?: string | null;
          }
        | {
            __typename: "block_faq";
            id: string;
            sort?: number | null;
            headline?: string | null;
            title_faq: string;
            faqs?: Array<{
              __typename?: "block_faq_faqs";
              faqs_id?: { __typename: "faqs"; id: string; question: string; answer: string } | null;
            } | null> | null;
          }
        | {
            __typename: "block_gallery";
            id: string;
            sort?: number | null;
            title?: string | null;
            description_gallery?: string | null;
            images?: Array<{
              __typename: "block_gallery_images";
              sort?: number | null;
              images_id?: {
                __typename: "images";
                id: string;
                title?: string | null;
                alt?: string | null;
                type?: string | null;
                caption?: string | null;
                source?: string | null;
                description?: string | null;
                loading?: string | null;
              } | null;
            } | null> | null;
          }
        | {
            __typename: "block_hero";
            sort?: number | null;
            headline?: string | null;
            title_hero: string;
            description_hero: string;
            buttons?: Array<{
              __typename?: "block_hero_block_button";
              block_button_id?: {
                __typename: "block_button";
                id: string;
                svg?: string | null;
                sort?: number | null;
                size?: string | null;
                label?: string | null;
                shape?: string | null;
                variant?: string | null;
                disabled?: boolean | null;
                align?: string | null;
                properties?: any | null;
                href_button?: string | null;
              } | null;
            } | null> | null;
          }
        | {
            __typename: "block_image";
            sort?: number | null;
            size?: string | null;
            image?: {
              __typename: "images";
              id: string;
              title?: string | null;
              alt?: string | null;
              type?: string | null;
              caption?: string | null;
              source?: string | null;
              description?: string | null;
              loading?: string | null;
            } | null;
          }
        | {
            __typename: "block_posts";
            id: string;
            sort?: number | null;
            topic?: string | null;
            select?: string | null;
            headline?: string | null;
            perpage?: number | null;
            pagination?: boolean | null;
            title_cardgroup?: string | null;
            description_cardgroup?: string | null;
          }
        | {
            __typename: "block_quote";
            id: string;
            sort?: number | null;
            quote: string;
            title?: string | null;
            author?: string | null;
            about?: string | null;
          }
        | {
            __typename: "block_video";
            id: string;
            sort?: number | null;
            title?: string | null;
            source: string;
            headline?: string | null;
            provider?: string | null;
            description_video?: string | null;
          }
        | null;
    } | null> | null;
  }>;
};

export type GetPostsQueryVariables = Exact<{
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>> | InputMaybe<Scalars["String"]["input"]>
  >;
  search?: InputMaybe<Scalars["String"]["input"]>;
  content?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<Posts_Filter>;
}>;

export type GetPostsQuery = {
  __typename?: "Query";
  posts: Array<{
    __typename: "posts";
    editor?: string | null;
    html?: string | null;
    markdown?: string | null;
    id: string;
    sort?: number | null;
    status?: string | null;
    date_created?: any | null;
    date_updated?: any | null;
    date_published?: any | null;
    slug?: string | null;
    title: string;
    headline?: string | null;
    topic: string;
    description?: string | null;
    featured?: {
      __typename: "images";
      id: string;
      title?: string | null;
      alt?: string | null;
      type?: string | null;
      caption?: string | null;
      source?: string | null;
      description?: string | null;
      loading?: string | null;
    } | null;
    seo?: {
      __typename: "seo";
      title?: string | null;
      priority?: number | null;
      description?: string | null;
      noindex?: boolean | null;
      nofollow?: boolean | null;
      canonical_url?: string | null;
      change_frequency?: string | null;
      twitter_image?: {
        __typename: "images";
        id: string;
        title?: string | null;
        alt?: string | null;
        type?: string | null;
        caption?: string | null;
        source?: string | null;
        description?: string | null;
        loading?: string | null;
      } | null;
      og_image?: {
        __typename: "images";
        id: string;
        title?: string | null;
        alt?: string | null;
        type?: string | null;
        caption?: string | null;
        source?: string | null;
        description?: string | null;
        loading?: string | null;
      } | null;
    } | null;
    tags?: Array<{
      __typename?: "posts_tags";
      tags_id?: { __typename?: "tags"; id: string; name: string; slug: string } | null;
    } | null> | null;
    categories?: Array<{
      __typename?: "posts_categories";
      categories_id?: { __typename?: "categories"; id: string; name: string; slug: string } | null;
    } | null> | null;
    blocks?: Array<{
      __typename?: "posts_blocks";
      sort?: number | null;
      item?:
        | {
            __typename: "block_button";
            id: string;
            svg?: string | null;
            sort?: number | null;
            size?: string | null;
            label?: string | null;
            shape?: string | null;
            variant?: string | null;
            disabled?: boolean | null;
            align?: string | null;
            properties?: any | null;
            href_button?: string | null;
          }
        | {
            __typename: "block_card";
            id: string;
            sort?: number | null;
            headline?: string | null;
            size?: string | null;
            href_card?: string | null;
            title_card?: string | null;
            description_card?: string | null;
            variant_card?: string | null;
            image?: {
              __typename: "images";
              id: string;
              title?: string | null;
              alt?: string | null;
              type?: string | null;
              caption?: string | null;
              source?: string | null;
              description?: string | null;
              loading?: string | null;
            } | null;
          }
        | {
            __typename: "block_content";
            id: string;
            sort?: number | null;
            html?: string | null;
            editor: string;
            headline?: string | null;
            markdown?: string | null;
            title_content?: string | null;
          }
        | {
            __typename: "block_faq";
            id: string;
            sort?: number | null;
            headline?: string | null;
            title_faq: string;
            faqs?: Array<{
              __typename?: "block_faq_faqs";
              faqs_id?: { __typename: "faqs"; id: string; question: string; answer: string } | null;
            } | null> | null;
          }
        | {
            __typename: "block_gallery";
            id: string;
            sort?: number | null;
            title?: string | null;
            description_gallery?: string | null;
            images?: Array<{
              __typename: "block_gallery_images";
              sort?: number | null;
              images_id?: {
                __typename: "images";
                id: string;
                title?: string | null;
                alt?: string | null;
                type?: string | null;
                caption?: string | null;
                source?: string | null;
                description?: string | null;
                loading?: string | null;
              } | null;
            } | null> | null;
          }
        | {
            __typename: "block_hero";
            sort?: number | null;
            headline?: string | null;
            title_hero: string;
            description_hero: string;
            buttons?: Array<{
              __typename?: "block_hero_block_button";
              block_button_id?: {
                __typename: "block_button";
                id: string;
                svg?: string | null;
                sort?: number | null;
                size?: string | null;
                label?: string | null;
                shape?: string | null;
                variant?: string | null;
                disabled?: boolean | null;
                align?: string | null;
                properties?: any | null;
                href_button?: string | null;
              } | null;
            } | null> | null;
          }
        | {
            __typename: "block_image";
            sort?: number | null;
            size?: string | null;
            image?: {
              __typename: "images";
              id: string;
              title?: string | null;
              alt?: string | null;
              type?: string | null;
              caption?: string | null;
              source?: string | null;
              description?: string | null;
              loading?: string | null;
            } | null;
          }
        | {
            __typename: "block_posts";
            id: string;
            sort?: number | null;
            topic?: string | null;
            select?: string | null;
            headline?: string | null;
            perpage?: number | null;
            pagination?: boolean | null;
            title_cardgroup?: string | null;
            description_cardgroup?: string | null;
          }
        | {
            __typename: "block_quote";
            id: string;
            sort?: number | null;
            quote: string;
            title?: string | null;
            author?: string | null;
            about?: string | null;
          }
        | {
            __typename: "block_video";
            id: string;
            sort?: number | null;
            title?: string | null;
            source: string;
            headline?: string | null;
            provider?: string | null;
            description_video?: string | null;
          }
        | null;
    } | null> | null;
  }>;
};

export type FaqFieldsFragment = {
  __typename: "faqs";
  id: string;
  question: string;
  answer: string;
};

export type SeoFieldsFragment = {
  __typename: "seo";
  title?: string | null;
  priority?: number | null;
  description?: string | null;
  noindex?: boolean | null;
  nofollow?: boolean | null;
  canonical_url?: string | null;
  change_frequency?: string | null;
  twitter_image?: {
    __typename: "images";
    id: string;
    title?: string | null;
    alt?: string | null;
    type?: string | null;
    caption?: string | null;
    source?: string | null;
    description?: string | null;
    loading?: string | null;
  } | null;
  og_image?: {
    __typename: "images";
    id: string;
    title?: string | null;
    alt?: string | null;
    type?: string | null;
    caption?: string | null;
    source?: string | null;
    description?: string | null;
    loading?: string | null;
  } | null;
};

export type ImageFieldsFragment = {
  __typename: "images";
  id: string;
  title?: string | null;
  alt?: string | null;
  type?: string | null;
  caption?: string | null;
  source?: string | null;
  description?: string | null;
  loading?: string | null;
};

export type TagFieldsFragment = { __typename?: "tags"; id: string; name: string; slug: string };

export type CategoryFieldsFragment = {
  __typename?: "categories";
  id: string;
  name: string;
  slug: string;
};

export type PostFieldsFragment = {
  __typename: "posts";
  id: string;
  sort?: number | null;
  status?: string | null;
  date_created?: any | null;
  date_updated?: any | null;
  date_published?: any | null;
  slug?: string | null;
  title: string;
  headline?: string | null;
  topic: string;
  description?: string | null;
  featured?: {
    __typename: "images";
    id: string;
    title?: string | null;
    alt?: string | null;
    type?: string | null;
    caption?: string | null;
    source?: string | null;
    description?: string | null;
    loading?: string | null;
  } | null;
  seo?: {
    __typename: "seo";
    title?: string | null;
    priority?: number | null;
    description?: string | null;
    noindex?: boolean | null;
    nofollow?: boolean | null;
    canonical_url?: string | null;
    change_frequency?: string | null;
    twitter_image?: {
      __typename: "images";
      id: string;
      title?: string | null;
      alt?: string | null;
      type?: string | null;
      caption?: string | null;
      source?: string | null;
      description?: string | null;
      loading?: string | null;
    } | null;
    og_image?: {
      __typename: "images";
      id: string;
      title?: string | null;
      alt?: string | null;
      type?: string | null;
      caption?: string | null;
      source?: string | null;
      description?: string | null;
      loading?: string | null;
    } | null;
  } | null;
  tags?: Array<{
    __typename?: "posts_tags";
    tags_id?: { __typename?: "tags"; id: string; name: string; slug: string } | null;
  } | null> | null;
  categories?: Array<{
    __typename?: "posts_categories";
    categories_id?: { __typename?: "categories"; id: string; name: string; slug: string } | null;
  } | null> | null;
  blocks?: Array<{
    __typename?: "posts_blocks";
    sort?: number | null;
    item?:
      | {
          __typename: "block_button";
          id: string;
          svg?: string | null;
          sort?: number | null;
          size?: string | null;
          label?: string | null;
          shape?: string | null;
          variant?: string | null;
          disabled?: boolean | null;
          align?: string | null;
          properties?: any | null;
          href_button?: string | null;
        }
      | {
          __typename: "block_card";
          id: string;
          sort?: number | null;
          headline?: string | null;
          size?: string | null;
          href_card?: string | null;
          title_card?: string | null;
          description_card?: string | null;
          variant_card?: string | null;
          image?: {
            __typename: "images";
            id: string;
            title?: string | null;
            alt?: string | null;
            type?: string | null;
            caption?: string | null;
            source?: string | null;
            description?: string | null;
            loading?: string | null;
          } | null;
        }
      | {
          __typename: "block_content";
          id: string;
          sort?: number | null;
          html?: string | null;
          editor: string;
          headline?: string | null;
          markdown?: string | null;
          title_content?: string | null;
        }
      | {
          __typename: "block_faq";
          id: string;
          sort?: number | null;
          headline?: string | null;
          title_faq: string;
          faqs?: Array<{
            __typename?: "block_faq_faqs";
            faqs_id?: { __typename: "faqs"; id: string; question: string; answer: string } | null;
          } | null> | null;
        }
      | {
          __typename: "block_gallery";
          id: string;
          sort?: number | null;
          title?: string | null;
          description_gallery?: string | null;
          images?: Array<{
            __typename: "block_gallery_images";
            sort?: number | null;
            images_id?: {
              __typename: "images";
              id: string;
              title?: string | null;
              alt?: string | null;
              type?: string | null;
              caption?: string | null;
              source?: string | null;
              description?: string | null;
              loading?: string | null;
            } | null;
          } | null> | null;
        }
      | {
          __typename: "block_hero";
          sort?: number | null;
          headline?: string | null;
          title_hero: string;
          description_hero: string;
          buttons?: Array<{
            __typename?: "block_hero_block_button";
            block_button_id?: {
              __typename: "block_button";
              id: string;
              svg?: string | null;
              sort?: number | null;
              size?: string | null;
              label?: string | null;
              shape?: string | null;
              variant?: string | null;
              disabled?: boolean | null;
              align?: string | null;
              properties?: any | null;
              href_button?: string | null;
            } | null;
          } | null> | null;
        }
      | {
          __typename: "block_image";
          sort?: number | null;
          size?: string | null;
          image?: {
            __typename: "images";
            id: string;
            title?: string | null;
            alt?: string | null;
            type?: string | null;
            caption?: string | null;
            source?: string | null;
            description?: string | null;
            loading?: string | null;
          } | null;
        }
      | {
          __typename: "block_posts";
          id: string;
          sort?: number | null;
          topic?: string | null;
          select?: string | null;
          headline?: string | null;
          perpage?: number | null;
          pagination?: boolean | null;
          title_cardgroup?: string | null;
          description_cardgroup?: string | null;
        }
      | {
          __typename: "block_quote";
          id: string;
          sort?: number | null;
          quote: string;
          title?: string | null;
          author?: string | null;
          about?: string | null;
        }
      | {
          __typename: "block_video";
          id: string;
          sort?: number | null;
          title?: string | null;
          source: string;
          headline?: string | null;
          provider?: string | null;
          description_video?: string | null;
        }
      | null;
  } | null> | null;
};

export type BlockCardFieldsFragment = {
  __typename: "block_card";
  id: string;
  sort?: number | null;
  headline?: string | null;
  size?: string | null;
  href_card?: string | null;
  title_card?: string | null;
  description_card?: string | null;
  variant_card?: string | null;
  image?: {
    __typename: "images";
    id: string;
    title?: string | null;
    alt?: string | null;
    type?: string | null;
    caption?: string | null;
    source?: string | null;
    description?: string | null;
    loading?: string | null;
  } | null;
};

export type BlockButtonFieldsFragment = {
  __typename: "block_button";
  id: string;
  svg?: string | null;
  sort?: number | null;
  size?: string | null;
  label?: string | null;
  shape?: string | null;
  variant?: string | null;
  disabled?: boolean | null;
  align?: string | null;
  properties?: any | null;
  href_button?: string | null;
};

export type BlockFaqFieldsFragment = {
  __typename: "block_faq";
  id: string;
  sort?: number | null;
  headline?: string | null;
  title_faq: string;
  faqs?: Array<{
    __typename?: "block_faq_faqs";
    faqs_id?: { __typename: "faqs"; id: string; question: string; answer: string } | null;
  } | null> | null;
};

export type BlockHeroFragment = {
  __typename: "block_hero";
  sort?: number | null;
  headline?: string | null;
  title_hero: string;
  description_hero: string;
  buttons?: Array<{
    __typename?: "block_hero_block_button";
    block_button_id?: {
      __typename: "block_button";
      id: string;
      svg?: string | null;
      sort?: number | null;
      size?: string | null;
      label?: string | null;
      shape?: string | null;
      variant?: string | null;
      disabled?: boolean | null;
      align?: string | null;
      properties?: any | null;
      href_button?: string | null;
    } | null;
  } | null> | null;
};

export type BlockContentFragment = {
  __typename: "block_content";
  id: string;
  sort?: number | null;
  html?: string | null;
  editor: string;
  headline?: string | null;
  markdown?: string | null;
  title_content?: string | null;
};

export type BlockQuoteFragment = {
  __typename: "block_quote";
  id: string;
  sort?: number | null;
  quote: string;
  title?: string | null;
  author?: string | null;
  about?: string | null;
};

export type BlockGalleryFragment = {
  __typename: "block_gallery";
  id: string;
  sort?: number | null;
  title?: string | null;
  description_gallery?: string | null;
  images?: Array<{
    __typename: "block_gallery_images";
    sort?: number | null;
    images_id?: {
      __typename: "images";
      id: string;
      title?: string | null;
      alt?: string | null;
      type?: string | null;
      caption?: string | null;
      source?: string | null;
      description?: string | null;
      loading?: string | null;
    } | null;
  } | null> | null;
};

export type BlockVideoFragment = {
  __typename: "block_video";
  id: string;
  sort?: number | null;
  title?: string | null;
  source: string;
  headline?: string | null;
  provider?: string | null;
  description_video?: string | null;
};

export type BlockPostsFragment = {
  __typename: "block_posts";
  id: string;
  sort?: number | null;
  topic?: string | null;
  select?: string | null;
  headline?: string | null;
  perpage?: number | null;
  pagination?: boolean | null;
  title_cardgroup?: string | null;
  description_cardgroup?: string | null;
};

export type PageFieldsFragment = {
  __typename: "pages";
  id: string;
  sort?: number | null;
  status?: string | null;
  date_created?: any | null;
  date_updated?: any | null;
  title?: string | null;
  path: string;
  description?: string | null;
  pagination?: boolean | null;
  seo?: {
    __typename: "seo";
    title?: string | null;
    priority?: number | null;
    description?: string | null;
    noindex?: boolean | null;
    nofollow?: boolean | null;
    canonical_url?: string | null;
    change_frequency?: string | null;
    twitter_image?: {
      __typename: "images";
      id: string;
      title?: string | null;
      alt?: string | null;
      type?: string | null;
      caption?: string | null;
      source?: string | null;
      description?: string | null;
      loading?: string | null;
    } | null;
    og_image?: {
      __typename: "images";
      id: string;
      title?: string | null;
      alt?: string | null;
      type?: string | null;
      caption?: string | null;
      source?: string | null;
      description?: string | null;
      loading?: string | null;
    } | null;
  } | null;
  blocks?: Array<{
    __typename?: "pages_blocks";
    sort?: number | null;
    item?:
      | {
          __typename: "block_button";
          id: string;
          svg?: string | null;
          sort?: number | null;
          size?: string | null;
          label?: string | null;
          shape?: string | null;
          variant?: string | null;
          disabled?: boolean | null;
          align?: string | null;
          properties?: any | null;
          href_button?: string | null;
        }
      | {
          __typename: "block_card";
          id: string;
          sort?: number | null;
          headline?: string | null;
          size?: string | null;
          href_card?: string | null;
          title_card?: string | null;
          description_card?: string | null;
          variant_card?: string | null;
          image?: {
            __typename: "images";
            id: string;
            title?: string | null;
            alt?: string | null;
            type?: string | null;
            caption?: string | null;
            source?: string | null;
            description?: string | null;
            loading?: string | null;
          } | null;
        }
      | {
          __typename: "block_content";
          id: string;
          sort?: number | null;
          html?: string | null;
          editor: string;
          headline?: string | null;
          markdown?: string | null;
          title_content?: string | null;
        }
      | {
          __typename: "block_faq";
          id: string;
          sort?: number | null;
          headline?: string | null;
          title_faq: string;
          faqs?: Array<{
            __typename?: "block_faq_faqs";
            faqs_id?: { __typename: "faqs"; id: string; question: string; answer: string } | null;
          } | null> | null;
        }
      | {
          __typename: "block_gallery";
          id: string;
          sort?: number | null;
          title?: string | null;
          description_gallery?: string | null;
          images?: Array<{
            __typename: "block_gallery_images";
            sort?: number | null;
            images_id?: {
              __typename: "images";
              id: string;
              title?: string | null;
              alt?: string | null;
              type?: string | null;
              caption?: string | null;
              source?: string | null;
              description?: string | null;
              loading?: string | null;
            } | null;
          } | null> | null;
        }
      | {
          __typename: "block_hero";
          sort?: number | null;
          headline?: string | null;
          title_hero: string;
          description_hero: string;
          buttons?: Array<{
            __typename?: "block_hero_block_button";
            block_button_id?: {
              __typename: "block_button";
              id: string;
              svg?: string | null;
              sort?: number | null;
              size?: string | null;
              label?: string | null;
              shape?: string | null;
              variant?: string | null;
              disabled?: boolean | null;
              align?: string | null;
              properties?: any | null;
              href_button?: string | null;
            } | null;
          } | null> | null;
        }
      | {
          __typename: "block_image";
          sort?: number | null;
          size?: string | null;
          image?: {
            __typename: "images";
            id: string;
            title?: string | null;
            alt?: string | null;
            type?: string | null;
            caption?: string | null;
            source?: string | null;
            description?: string | null;
            loading?: string | null;
          } | null;
        }
      | {
          __typename: "block_posts";
          id: string;
          sort?: number | null;
          topic?: string | null;
          select?: string | null;
          headline?: string | null;
          perpage?: number | null;
          pagination?: boolean | null;
          title_cardgroup?: string | null;
          description_cardgroup?: string | null;
        }
      | {
          __typename: "block_quote";
          id: string;
          sort?: number | null;
          quote: string;
          title?: string | null;
          author?: string | null;
          about?: string | null;
        }
      | {
          __typename: "block_video";
          id: string;
          sort?: number | null;
          title?: string | null;
          source: string;
          headline?: string | null;
          provider?: string | null;
          description_video?: string | null;
        }
      | null;
  } | null> | null;
};

export type SitemapFieldsFragment = {
  __typename: "sitemaps";
  id: string;
  sort?: number | null;
  status?: string | null;
  date_updated?: any | null;
  loc: string;
  size?: number | null;
  priority?: number | null;
  collection: string;
  change_frequency?: string | null;
  excluded?: Array<{
    __typename?: "sitemaps_excluded";
    sort?: number | null;
    item?:
      | { __typename: "pages"; path: string; status?: string | null; date_updated?: any | null }
      | {
          __typename: "posts";
          status?: string | null;
          slug?: string | null;
          topic: string;
          date_updated?: any | null;
        }
      | null;
  } | null> | null;
  included?: Array<{
    __typename?: "sitemaps_included";
    sort?: number | null;
    item?:
      | { __typename: "pages"; path: string; status?: string | null; date_updated?: any | null }
      | {
          __typename: "posts";
          status?: string | null;
          slug?: string | null;
          topic: string;
          date_updated?: any | null;
        }
      | null;
  } | null> | null;
};

export type GetSitemapsQueryVariables = Exact<{
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>> | InputMaybe<Scalars["String"]["input"]>
  >;
  search?: InputMaybe<Scalars["String"]["input"]>;
  filter?: InputMaybe<Sitemaps_Filter>;
}>;

export type GetSitemapsQuery = {
  __typename?: "Query";
  sitemaps: Array<{
    __typename: "sitemaps";
    id: string;
    sort?: number | null;
    status?: string | null;
    date_updated?: any | null;
    loc: string;
    size?: number | null;
    priority?: number | null;
    collection: string;
    change_frequency?: string | null;
    excluded?: Array<{
      __typename?: "sitemaps_excluded";
      sort?: number | null;
      item?:
        | { __typename: "pages"; path: string; status?: string | null; date_updated?: any | null }
        | {
            __typename: "posts";
            status?: string | null;
            slug?: string | null;
            topic: string;
            date_updated?: any | null;
          }
        | null;
    } | null> | null;
    included?: Array<{
      __typename?: "sitemaps_included";
      sort?: number | null;
      item?:
        | { __typename: "pages"; path: string; status?: string | null; date_updated?: any | null }
        | {
            __typename: "posts";
            status?: string | null;
            slug?: string | null;
            topic: string;
            date_updated?: any | null;
          }
        | null;
    } | null> | null;
  }>;
};

export type GetSitemapPostsQueryVariables = Exact<{
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>> | InputMaybe<Scalars["String"]["input"]>
  >;
  search?: InputMaybe<Scalars["String"]["input"]>;
  filter?: InputMaybe<Posts_Filter>;
}>;

export type GetSitemapPostsQuery = {
  __typename?: "Query";
  posts: Array<{
    __typename?: "posts";
    slug?: string | null;
    topic: string;
    status?: string | null;
    date_updated?: any | null;
  }>;
};

export type GetSitemapPagesQueryVariables = Exact<{
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>> | InputMaybe<Scalars["String"]["input"]>
  >;
  search?: InputMaybe<Scalars["String"]["input"]>;
  filter?: InputMaybe<Pages_Filter>;
}>;

export type GetSitemapPagesQuery = {
  __typename?: "Query";
  pages: Array<{
    __typename?: "pages";
    path: string;
    status?: string | null;
    date_updated?: any | null;
  }>;
};

export const ImageFieldsFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ImageFields" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "images" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "alt" } },
          { kind: "Field", name: { kind: "Name", value: "type" } },
          { kind: "Field", name: { kind: "Name", value: "caption" } },
          { kind: "Field", name: { kind: "Name", value: "source" } },
          { kind: "Field", name: { kind: "Name", value: "description" } },
          { kind: "Field", name: { kind: "Name", value: "loading" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ImageFieldsFragment, unknown>;
export const SeoFieldsFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "SeoFields" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "seo" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "priority" } },
          { kind: "Field", name: { kind: "Name", value: "description" } },
          { kind: "Field", name: { kind: "Name", value: "noindex" } },
          { kind: "Field", name: { kind: "Name", value: "nofollow" } },
          { kind: "Field", name: { kind: "Name", value: "canonical_url" } },
          { kind: "Field", name: { kind: "Name", value: "change_frequency" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "twitter_image" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "FragmentSpread", name: { kind: "Name", value: "ImageFields" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "og_image" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "FragmentSpread", name: { kind: "Name", value: "ImageFields" } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ImageFields" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "images" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "alt" } },
          { kind: "Field", name: { kind: "Name", value: "type" } },
          { kind: "Field", name: { kind: "Name", value: "caption" } },
          { kind: "Field", name: { kind: "Name", value: "source" } },
          { kind: "Field", name: { kind: "Name", value: "description" } },
          { kind: "Field", name: { kind: "Name", value: "loading" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<SeoFieldsFragment, unknown>;
export const TagFieldsFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "TagFields" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "tags" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "name" } },
          { kind: "Field", name: { kind: "Name", value: "slug" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<TagFieldsFragment, unknown>;
export const CategoryFieldsFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "CategoryFields" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "categories" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "name" } },
          { kind: "Field", name: { kind: "Name", value: "slug" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<CategoryFieldsFragment, unknown>;
export const BlockCardFieldsFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "BlockCardFields" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "block_card" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "sort" } },
          {
            kind: "Field",
            alias: { kind: "Name", value: "href_card" },
            name: { kind: "Name", value: "href" },
          },
          {
            kind: "Field",
            alias: { kind: "Name", value: "title_card" },
            name: { kind: "Name", value: "title" },
          },
          { kind: "Field", name: { kind: "Name", value: "headline" } },
          {
            kind: "Field",
            alias: { kind: "Name", value: "description_card" },
            name: { kind: "Name", value: "description" },
          },
          { kind: "Field", name: { kind: "Name", value: "size" } },
          {
            kind: "Field",
            alias: { kind: "Name", value: "variant_card" },
            name: { kind: "Name", value: "variant" },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "image" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "FragmentSpread", name: { kind: "Name", value: "ImageFields" } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ImageFields" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "images" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "alt" } },
          { kind: "Field", name: { kind: "Name", value: "type" } },
          { kind: "Field", name: { kind: "Name", value: "caption" } },
          { kind: "Field", name: { kind: "Name", value: "source" } },
          { kind: "Field", name: { kind: "Name", value: "description" } },
          { kind: "Field", name: { kind: "Name", value: "loading" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<BlockCardFieldsFragment, unknown>;
export const FaqFieldsFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "FaqFields" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "faqs" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "question" } },
          { kind: "Field", name: { kind: "Name", value: "answer" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<FaqFieldsFragment, unknown>;
export const BlockFaqFieldsFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "BlockFaqFields" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "block_faq" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "sort" } },
          { kind: "Field", name: { kind: "Name", value: "headline" } },
          {
            kind: "Field",
            alias: { kind: "Name", value: "title_faq" },
            name: { kind: "Name", value: "title" },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "faqs" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "faqs_id" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "FaqFields" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "FaqFields" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "faqs" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "question" } },
          { kind: "Field", name: { kind: "Name", value: "answer" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<BlockFaqFieldsFragment, unknown>;
export const BlockButtonFieldsFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "BlockButtonFields" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "block_button" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "svg" } },
          { kind: "Field", name: { kind: "Name", value: "sort" } },
          { kind: "Field", name: { kind: "Name", value: "size" } },
          { kind: "Field", name: { kind: "Name", value: "label" } },
          { kind: "Field", name: { kind: "Name", value: "shape" } },
          { kind: "Field", name: { kind: "Name", value: "variant" } },
          { kind: "Field", name: { kind: "Name", value: "disabled" } },
          { kind: "Field", name: { kind: "Name", value: "align" } },
          { kind: "Field", name: { kind: "Name", value: "properties" } },
          {
            kind: "Field",
            alias: { kind: "Name", value: "href_button" },
            name: { kind: "Name", value: "href" },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<BlockButtonFieldsFragment, unknown>;
export const BlockHeroFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "BlockHero" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "block_hero" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "sort" } },
          { kind: "Field", name: { kind: "Name", value: "headline" } },
          {
            kind: "Field",
            alias: { kind: "Name", value: "title_hero" },
            name: { kind: "Name", value: "title" },
          },
          {
            kind: "Field",
            alias: { kind: "Name", value: "description_hero" },
            name: { kind: "Name", value: "description" },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "buttons" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "block_button_id" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "BlockButtonFields" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "BlockButtonFields" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "block_button" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "svg" } },
          { kind: "Field", name: { kind: "Name", value: "sort" } },
          { kind: "Field", name: { kind: "Name", value: "size" } },
          { kind: "Field", name: { kind: "Name", value: "label" } },
          { kind: "Field", name: { kind: "Name", value: "shape" } },
          { kind: "Field", name: { kind: "Name", value: "variant" } },
          { kind: "Field", name: { kind: "Name", value: "disabled" } },
          { kind: "Field", name: { kind: "Name", value: "align" } },
          { kind: "Field", name: { kind: "Name", value: "properties" } },
          {
            kind: "Field",
            alias: { kind: "Name", value: "href_button" },
            name: { kind: "Name", value: "href" },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<BlockHeroFragment, unknown>;
export const BlockContentFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "BlockContent" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "block_content" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "sort" } },
          { kind: "Field", name: { kind: "Name", value: "html" } },
          { kind: "Field", name: { kind: "Name", value: "editor" } },
          { kind: "Field", name: { kind: "Name", value: "headline" } },
          { kind: "Field", name: { kind: "Name", value: "markdown" } },
          {
            kind: "Field",
            alias: { kind: "Name", value: "title_content" },
            name: { kind: "Name", value: "title" },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<BlockContentFragment, unknown>;
export const BlockQuoteFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "BlockQuote" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "block_quote" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "sort" } },
          { kind: "Field", name: { kind: "Name", value: "quote" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "author" } },
          { kind: "Field", name: { kind: "Name", value: "about" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<BlockQuoteFragment, unknown>;
export const BlockGalleryFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "BlockGallery" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "block_gallery" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "sort" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          {
            kind: "Field",
            alias: { kind: "Name", value: "description_gallery" },
            name: { kind: "Name", value: "description" },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "images" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "__typename" } },
                { kind: "Field", name: { kind: "Name", value: "sort" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "images_id" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "ImageFields" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ImageFields" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "images" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "alt" } },
          { kind: "Field", name: { kind: "Name", value: "type" } },
          { kind: "Field", name: { kind: "Name", value: "caption" } },
          { kind: "Field", name: { kind: "Name", value: "source" } },
          { kind: "Field", name: { kind: "Name", value: "description" } },
          { kind: "Field", name: { kind: "Name", value: "loading" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<BlockGalleryFragment, unknown>;
export const BlockVideoFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "BlockVideo" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "block_video" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "sort" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "source" } },
          { kind: "Field", name: { kind: "Name", value: "headline" } },
          { kind: "Field", name: { kind: "Name", value: "provider" } },
          {
            kind: "Field",
            alias: { kind: "Name", value: "description_video" },
            name: { kind: "Name", value: "description" },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<BlockVideoFragment, unknown>;
export const BlockPostsFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "BlockPosts" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "block_posts" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "sort" } },
          { kind: "Field", name: { kind: "Name", value: "topic" } },
          { kind: "Field", name: { kind: "Name", value: "select" } },
          { kind: "Field", name: { kind: "Name", value: "headline" } },
          { kind: "Field", name: { kind: "Name", value: "perpage" } },
          { kind: "Field", name: { kind: "Name", value: "pagination" } },
          {
            kind: "Field",
            alias: { kind: "Name", value: "title_cardgroup" },
            name: { kind: "Name", value: "title" },
          },
          {
            kind: "Field",
            alias: { kind: "Name", value: "description_cardgroup" },
            name: { kind: "Name", value: "description" },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<BlockPostsFragment, unknown>;
export const PostFieldsFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "PostFields" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "posts" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "sort" } },
          { kind: "Field", name: { kind: "Name", value: "status" } },
          { kind: "Field", name: { kind: "Name", value: "date_created" } },
          { kind: "Field", name: { kind: "Name", value: "date_updated" } },
          { kind: "Field", name: { kind: "Name", value: "date_published" } },
          { kind: "Field", name: { kind: "Name", value: "slug" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "headline" } },
          { kind: "Field", name: { kind: "Name", value: "topic" } },
          { kind: "Field", name: { kind: "Name", value: "description" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "featured" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "FragmentSpread", name: { kind: "Name", value: "ImageFields" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "seo" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "SeoFields" } }],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "tags" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "tags_id" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "TagFields" } },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "categories" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "categories_id" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "CategoryFields" } },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "blocks" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "sort" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "item" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "InlineFragment",
                        typeCondition: {
                          kind: "NamedType",
                          name: { kind: "Name", value: "block_card" },
                        },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "FragmentSpread",
                              name: { kind: "Name", value: "BlockCardFields" },
                            },
                          ],
                        },
                      },
                      {
                        kind: "InlineFragment",
                        typeCondition: {
                          kind: "NamedType",
                          name: { kind: "Name", value: "block_faq" },
                        },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "FragmentSpread",
                              name: { kind: "Name", value: "BlockFaqFields" },
                            },
                          ],
                        },
                      },
                      {
                        kind: "InlineFragment",
                        typeCondition: {
                          kind: "NamedType",
                          name: { kind: "Name", value: "block_hero" },
                        },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            { kind: "FragmentSpread", name: { kind: "Name", value: "BlockHero" } },
                          ],
                        },
                      },
                      {
                        kind: "InlineFragment",
                        typeCondition: {
                          kind: "NamedType",
                          name: { kind: "Name", value: "block_button" },
                        },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "FragmentSpread",
                              name: { kind: "Name", value: "BlockButtonFields" },
                            },
                          ],
                        },
                      },
                      {
                        kind: "InlineFragment",
                        typeCondition: {
                          kind: "NamedType",
                          name: { kind: "Name", value: "block_image" },
                        },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            { kind: "Field", name: { kind: "Name", value: "__typename" } },
                            { kind: "Field", name: { kind: "Name", value: "sort" } },
                            { kind: "Field", name: { kind: "Name", value: "size" } },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "image" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "FragmentSpread",
                                    name: { kind: "Name", value: "ImageFields" },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: "InlineFragment",
                        typeCondition: {
                          kind: "NamedType",
                          name: { kind: "Name", value: "block_content" },
                        },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "FragmentSpread",
                              name: { kind: "Name", value: "BlockContent" },
                            },
                          ],
                        },
                      },
                      {
                        kind: "InlineFragment",
                        typeCondition: {
                          kind: "NamedType",
                          name: { kind: "Name", value: "block_quote" },
                        },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            { kind: "FragmentSpread", name: { kind: "Name", value: "BlockQuote" } },
                          ],
                        },
                      },
                      {
                        kind: "InlineFragment",
                        typeCondition: {
                          kind: "NamedType",
                          name: { kind: "Name", value: "block_gallery" },
                        },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "FragmentSpread",
                              name: { kind: "Name", value: "BlockGallery" },
                            },
                          ],
                        },
                      },
                      {
                        kind: "InlineFragment",
                        typeCondition: {
                          kind: "NamedType",
                          name: { kind: "Name", value: "block_video" },
                        },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            { kind: "FragmentSpread", name: { kind: "Name", value: "BlockVideo" } },
                          ],
                        },
                      },
                      {
                        kind: "InlineFragment",
                        typeCondition: {
                          kind: "NamedType",
                          name: { kind: "Name", value: "block_posts" },
                        },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            { kind: "FragmentSpread", name: { kind: "Name", value: "BlockPosts" } },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ImageFields" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "images" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "alt" } },
          { kind: "Field", name: { kind: "Name", value: "type" } },
          { kind: "Field", name: { kind: "Name", value: "caption" } },
          { kind: "Field", name: { kind: "Name", value: "source" } },
          { kind: "Field", name: { kind: "Name", value: "description" } },
          { kind: "Field", name: { kind: "Name", value: "loading" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "FaqFields" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "faqs" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "question" } },
          { kind: "Field", name: { kind: "Name", value: "answer" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "BlockButtonFields" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "block_button" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "svg" } },
          { kind: "Field", name: { kind: "Name", value: "sort" } },
          { kind: "Field", name: { kind: "Name", value: "size" } },
          { kind: "Field", name: { kind: "Name", value: "label" } },
          { kind: "Field", name: { kind: "Name", value: "shape" } },
          { kind: "Field", name: { kind: "Name", value: "variant" } },
          { kind: "Field", name: { kind: "Name", value: "disabled" } },
          { kind: "Field", name: { kind: "Name", value: "align" } },
          { kind: "Field", name: { kind: "Name", value: "properties" } },
          {
            kind: "Field",
            alias: { kind: "Name", value: "href_button" },
            name: { kind: "Name", value: "href" },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "SeoFields" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "seo" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "priority" } },
          { kind: "Field", name: { kind: "Name", value: "description" } },
          { kind: "Field", name: { kind: "Name", value: "noindex" } },
          { kind: "Field", name: { kind: "Name", value: "nofollow" } },
          { kind: "Field", name: { kind: "Name", value: "canonical_url" } },
          { kind: "Field", name: { kind: "Name", value: "change_frequency" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "twitter_image" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "FragmentSpread", name: { kind: "Name", value: "ImageFields" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "og_image" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "FragmentSpread", name: { kind: "Name", value: "ImageFields" } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "TagFields" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "tags" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "name" } },
          { kind: "Field", name: { kind: "Name", value: "slug" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "CategoryFields" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "categories" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "name" } },
          { kind: "Field", name: { kind: "Name", value: "slug" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "BlockCardFields" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "block_card" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "sort" } },
          {
            kind: "Field",
            alias: { kind: "Name", value: "href_card" },
            name: { kind: "Name", value: "href" },
          },
          {
            kind: "Field",
            alias: { kind: "Name", value: "title_card" },
            name: { kind: "Name", value: "title" },
          },
          { kind: "Field", name: { kind: "Name", value: "headline" } },
          {
            kind: "Field",
            alias: { kind: "Name", value: "description_card" },
            name: { kind: "Name", value: "description" },
          },
          { kind: "Field", name: { kind: "Name", value: "size" } },
          {
            kind: "Field",
            alias: { kind: "Name", value: "variant_card" },
            name: { kind: "Name", value: "variant" },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "image" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "FragmentSpread", name: { kind: "Name", value: "ImageFields" } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "BlockFaqFields" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "block_faq" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "sort" } },
          { kind: "Field", name: { kind: "Name", value: "headline" } },
          {
            kind: "Field",
            alias: { kind: "Name", value: "title_faq" },
            name: { kind: "Name", value: "title" },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "faqs" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "faqs_id" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "FaqFields" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "BlockHero" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "block_hero" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "sort" } },
          { kind: "Field", name: { kind: "Name", value: "headline" } },
          {
            kind: "Field",
            alias: { kind: "Name", value: "title_hero" },
            name: { kind: "Name", value: "title" },
          },
          {
            kind: "Field",
            alias: { kind: "Name", value: "description_hero" },
            name: { kind: "Name", value: "description" },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "buttons" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "block_button_id" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "BlockButtonFields" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "BlockContent" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "block_content" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "sort" } },
          { kind: "Field", name: { kind: "Name", value: "html" } },
          { kind: "Field", name: { kind: "Name", value: "editor" } },
          { kind: "Field", name: { kind: "Name", value: "headline" } },
          { kind: "Field", name: { kind: "Name", value: "markdown" } },
          {
            kind: "Field",
            alias: { kind: "Name", value: "title_content" },
            name: { kind: "Name", value: "title" },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "BlockQuote" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "block_quote" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "sort" } },
          { kind: "Field", name: { kind: "Name", value: "quote" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "author" } },
          { kind: "Field", name: { kind: "Name", value: "about" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "BlockGallery" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "block_gallery" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "sort" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          {
            kind: "Field",
            alias: { kind: "Name", value: "description_gallery" },
            name: { kind: "Name", value: "description" },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "images" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "__typename" } },
                { kind: "Field", name: { kind: "Name", value: "sort" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "images_id" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "ImageFields" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "BlockVideo" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "block_video" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "sort" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "source" } },
          { kind: "Field", name: { kind: "Name", value: "headline" } },
          { kind: "Field", name: { kind: "Name", value: "provider" } },
          {
            kind: "Field",
            alias: { kind: "Name", value: "description_video" },
            name: { kind: "Name", value: "description" },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "BlockPosts" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "block_posts" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "sort" } },
          { kind: "Field", name: { kind: "Name", value: "topic" } },
          { kind: "Field", name: { kind: "Name", value: "select" } },
          { kind: "Field", name: { kind: "Name", value: "headline" } },
          { kind: "Field", name: { kind: "Name", value: "perpage" } },
          { kind: "Field", name: { kind: "Name", value: "pagination" } },
          {
            kind: "Field",
            alias: { kind: "Name", value: "title_cardgroup" },
            name: { kind: "Name", value: "title" },
          },
          {
            kind: "Field",
            alias: { kind: "Name", value: "description_cardgroup" },
            name: { kind: "Name", value: "description" },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<PostFieldsFragment, unknown>;
export const PageFieldsFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "PageFields" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "pages" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "sort" } },
          { kind: "Field", name: { kind: "Name", value: "status" } },
          { kind: "Field", name: { kind: "Name", value: "date_created" } },
          { kind: "Field", name: { kind: "Name", value: "date_updated" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "path" } },
          { kind: "Field", name: { kind: "Name", value: "description" } },
          { kind: "Field", name: { kind: "Name", value: "pagination" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "seo" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "SeoFields" } }],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "blocks" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "sort" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "item" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "InlineFragment",
                        typeCondition: {
                          kind: "NamedType",
                          name: { kind: "Name", value: "block_card" },
                        },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "FragmentSpread",
                              name: { kind: "Name", value: "BlockCardFields" },
                            },
                          ],
                        },
                      },
                      {
                        kind: "InlineFragment",
                        typeCondition: {
                          kind: "NamedType",
                          name: { kind: "Name", value: "block_faq" },
                        },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "FragmentSpread",
                              name: { kind: "Name", value: "BlockFaqFields" },
                            },
                          ],
                        },
                      },
                      {
                        kind: "InlineFragment",
                        typeCondition: {
                          kind: "NamedType",
                          name: { kind: "Name", value: "block_hero" },
                        },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            { kind: "FragmentSpread", name: { kind: "Name", value: "BlockHero" } },
                          ],
                        },
                      },
                      {
                        kind: "InlineFragment",
                        typeCondition: {
                          kind: "NamedType",
                          name: { kind: "Name", value: "block_button" },
                        },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "FragmentSpread",
                              name: { kind: "Name", value: "BlockButtonFields" },
                            },
                          ],
                        },
                      },
                      {
                        kind: "InlineFragment",
                        typeCondition: {
                          kind: "NamedType",
                          name: { kind: "Name", value: "block_image" },
                        },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            { kind: "Field", name: { kind: "Name", value: "__typename" } },
                            { kind: "Field", name: { kind: "Name", value: "sort" } },
                            { kind: "Field", name: { kind: "Name", value: "size" } },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "image" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "FragmentSpread",
                                    name: { kind: "Name", value: "ImageFields" },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: "InlineFragment",
                        typeCondition: {
                          kind: "NamedType",
                          name: { kind: "Name", value: "block_content" },
                        },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "FragmentSpread",
                              name: { kind: "Name", value: "BlockContent" },
                            },
                          ],
                        },
                      },
                      {
                        kind: "InlineFragment",
                        typeCondition: {
                          kind: "NamedType",
                          name: { kind: "Name", value: "block_quote" },
                        },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            { kind: "FragmentSpread", name: { kind: "Name", value: "BlockQuote" } },
                          ],
                        },
                      },
                      {
                        kind: "InlineFragment",
                        typeCondition: {
                          kind: "NamedType",
                          name: { kind: "Name", value: "block_gallery" },
                        },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "FragmentSpread",
                              name: { kind: "Name", value: "BlockGallery" },
                            },
                          ],
                        },
                      },
                      {
                        kind: "InlineFragment",
                        typeCondition: {
                          kind: "NamedType",
                          name: { kind: "Name", value: "block_video" },
                        },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            { kind: "FragmentSpread", name: { kind: "Name", value: "BlockVideo" } },
                          ],
                        },
                      },
                      {
                        kind: "InlineFragment",
                        typeCondition: {
                          kind: "NamedType",
                          name: { kind: "Name", value: "block_posts" },
                        },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            { kind: "FragmentSpread", name: { kind: "Name", value: "BlockPosts" } },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ImageFields" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "images" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "alt" } },
          { kind: "Field", name: { kind: "Name", value: "type" } },
          { kind: "Field", name: { kind: "Name", value: "caption" } },
          { kind: "Field", name: { kind: "Name", value: "source" } },
          { kind: "Field", name: { kind: "Name", value: "description" } },
          { kind: "Field", name: { kind: "Name", value: "loading" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "FaqFields" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "faqs" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "question" } },
          { kind: "Field", name: { kind: "Name", value: "answer" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "BlockButtonFields" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "block_button" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "svg" } },
          { kind: "Field", name: { kind: "Name", value: "sort" } },
          { kind: "Field", name: { kind: "Name", value: "size" } },
          { kind: "Field", name: { kind: "Name", value: "label" } },
          { kind: "Field", name: { kind: "Name", value: "shape" } },
          { kind: "Field", name: { kind: "Name", value: "variant" } },
          { kind: "Field", name: { kind: "Name", value: "disabled" } },
          { kind: "Field", name: { kind: "Name", value: "align" } },
          { kind: "Field", name: { kind: "Name", value: "properties" } },
          {
            kind: "Field",
            alias: { kind: "Name", value: "href_button" },
            name: { kind: "Name", value: "href" },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "SeoFields" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "seo" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "priority" } },
          { kind: "Field", name: { kind: "Name", value: "description" } },
          { kind: "Field", name: { kind: "Name", value: "noindex" } },
          { kind: "Field", name: { kind: "Name", value: "nofollow" } },
          { kind: "Field", name: { kind: "Name", value: "canonical_url" } },
          { kind: "Field", name: { kind: "Name", value: "change_frequency" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "twitter_image" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "FragmentSpread", name: { kind: "Name", value: "ImageFields" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "og_image" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "FragmentSpread", name: { kind: "Name", value: "ImageFields" } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "BlockCardFields" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "block_card" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "sort" } },
          {
            kind: "Field",
            alias: { kind: "Name", value: "href_card" },
            name: { kind: "Name", value: "href" },
          },
          {
            kind: "Field",
            alias: { kind: "Name", value: "title_card" },
            name: { kind: "Name", value: "title" },
          },
          { kind: "Field", name: { kind: "Name", value: "headline" } },
          {
            kind: "Field",
            alias: { kind: "Name", value: "description_card" },
            name: { kind: "Name", value: "description" },
          },
          { kind: "Field", name: { kind: "Name", value: "size" } },
          {
            kind: "Field",
            alias: { kind: "Name", value: "variant_card" },
            name: { kind: "Name", value: "variant" },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "image" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "FragmentSpread", name: { kind: "Name", value: "ImageFields" } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "BlockFaqFields" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "block_faq" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "sort" } },
          { kind: "Field", name: { kind: "Name", value: "headline" } },
          {
            kind: "Field",
            alias: { kind: "Name", value: "title_faq" },
            name: { kind: "Name", value: "title" },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "faqs" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "faqs_id" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "FaqFields" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "BlockHero" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "block_hero" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "sort" } },
          { kind: "Field", name: { kind: "Name", value: "headline" } },
          {
            kind: "Field",
            alias: { kind: "Name", value: "title_hero" },
            name: { kind: "Name", value: "title" },
          },
          {
            kind: "Field",
            alias: { kind: "Name", value: "description_hero" },
            name: { kind: "Name", value: "description" },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "buttons" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "block_button_id" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "BlockButtonFields" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "BlockContent" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "block_content" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "sort" } },
          { kind: "Field", name: { kind: "Name", value: "html" } },
          { kind: "Field", name: { kind: "Name", value: "editor" } },
          { kind: "Field", name: { kind: "Name", value: "headline" } },
          { kind: "Field", name: { kind: "Name", value: "markdown" } },
          {
            kind: "Field",
            alias: { kind: "Name", value: "title_content" },
            name: { kind: "Name", value: "title" },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "BlockQuote" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "block_quote" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "sort" } },
          { kind: "Field", name: { kind: "Name", value: "quote" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "author" } },
          { kind: "Field", name: { kind: "Name", value: "about" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "BlockGallery" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "block_gallery" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "sort" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          {
            kind: "Field",
            alias: { kind: "Name", value: "description_gallery" },
            name: { kind: "Name", value: "description" },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "images" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "__typename" } },
                { kind: "Field", name: { kind: "Name", value: "sort" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "images_id" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "ImageFields" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "BlockVideo" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "block_video" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "sort" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "source" } },
          { kind: "Field", name: { kind: "Name", value: "headline" } },
          { kind: "Field", name: { kind: "Name", value: "provider" } },
          {
            kind: "Field",
            alias: { kind: "Name", value: "description_video" },
            name: { kind: "Name", value: "description" },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "BlockPosts" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "block_posts" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "sort" } },
          { kind: "Field", name: { kind: "Name", value: "topic" } },
          { kind: "Field", name: { kind: "Name", value: "select" } },
          { kind: "Field", name: { kind: "Name", value: "headline" } },
          { kind: "Field", name: { kind: "Name", value: "perpage" } },
          { kind: "Field", name: { kind: "Name", value: "pagination" } },
          {
            kind: "Field",
            alias: { kind: "Name", value: "title_cardgroup" },
            name: { kind: "Name", value: "title" },
          },
          {
            kind: "Field",
            alias: { kind: "Name", value: "description_cardgroup" },
            name: { kind: "Name", value: "description" },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<PageFieldsFragment, unknown>;
export const SitemapFieldsFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "SitemapFields" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "sitemaps" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "sort" } },
          { kind: "Field", name: { kind: "Name", value: "status" } },
          { kind: "Field", name: { kind: "Name", value: "date_updated" } },
          { kind: "Field", name: { kind: "Name", value: "loc" } },
          { kind: "Field", name: { kind: "Name", value: "size" } },
          { kind: "Field", name: { kind: "Name", value: "priority" } },
          { kind: "Field", name: { kind: "Name", value: "collection" } },
          { kind: "Field", name: { kind: "Name", value: "change_frequency" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "excluded" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "sort" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "item" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "InlineFragment",
                        typeCondition: {
                          kind: "NamedType",
                          name: { kind: "Name", value: "posts" },
                        },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            { kind: "Field", name: { kind: "Name", value: "__typename" } },
                            { kind: "Field", name: { kind: "Name", value: "status" } },
                            { kind: "Field", name: { kind: "Name", value: "slug" } },
                            { kind: "Field", name: { kind: "Name", value: "topic" } },
                            { kind: "Field", name: { kind: "Name", value: "date_updated" } },
                          ],
                        },
                      },
                      {
                        kind: "InlineFragment",
                        typeCondition: {
                          kind: "NamedType",
                          name: { kind: "Name", value: "pages" },
                        },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            { kind: "Field", name: { kind: "Name", value: "__typename" } },
                            { kind: "Field", name: { kind: "Name", value: "path" } },
                            { kind: "Field", name: { kind: "Name", value: "status" } },
                            { kind: "Field", name: { kind: "Name", value: "date_updated" } },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "included" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "sort" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "item" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "InlineFragment",
                        typeCondition: {
                          kind: "NamedType",
                          name: { kind: "Name", value: "posts" },
                        },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            { kind: "Field", name: { kind: "Name", value: "__typename" } },
                            { kind: "Field", name: { kind: "Name", value: "status" } },
                            { kind: "Field", name: { kind: "Name", value: "slug" } },
                            { kind: "Field", name: { kind: "Name", value: "topic" } },
                            { kind: "Field", name: { kind: "Name", value: "date_updated" } },
                          ],
                        },
                      },
                      {
                        kind: "InlineFragment",
                        typeCondition: {
                          kind: "NamedType",
                          name: { kind: "Name", value: "pages" },
                        },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            { kind: "Field", name: { kind: "Name", value: "__typename" } },
                            { kind: "Field", name: { kind: "Name", value: "path" } },
                            { kind: "Field", name: { kind: "Name", value: "status" } },
                            { kind: "Field", name: { kind: "Name", value: "date_updated" } },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<SitemapFieldsFragment, unknown>;
export const FetchGlobalDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "FetchGlobal" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "globals" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "__typename" } },
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "date_created" } },
                { kind: "Field", name: { kind: "Name", value: "date_updated" } },
                { kind: "Field", name: { kind: "Name", value: "url" } },
                { kind: "Field", name: { kind: "Name", value: "title" } },
                { kind: "Field", name: { kind: "Name", value: "tagline" } },
                { kind: "Field", name: { kind: "Name", value: "description" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "og_image" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "ImageFields" } },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "twitter_image" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "ImageFields" } },
                    ],
                  },
                },
                { kind: "Field", name: { kind: "Name", value: "social_links" } },
                { kind: "Field", name: { kind: "Name", value: "street_address" } },
                { kind: "Field", name: { kind: "Name", value: "address_city" } },
                { kind: "Field", name: { kind: "Name", value: "address_state" } },
                { kind: "Field", name: { kind: "Name", value: "address_pincode" } },
                { kind: "Field", name: { kind: "Name", value: "address_country" } },
                { kind: "Field", name: { kind: "Name", value: "phone" } },
                { kind: "Field", name: { kind: "Name", value: "email" } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ImageFields" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "images" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "alt" } },
          { kind: "Field", name: { kind: "Name", value: "type" } },
          { kind: "Field", name: { kind: "Name", value: "caption" } },
          { kind: "Field", name: { kind: "Name", value: "source" } },
          { kind: "Field", name: { kind: "Name", value: "description" } },
          { kind: "Field", name: { kind: "Name", value: "loading" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<FetchGlobalQuery, FetchGlobalQueryVariables>;
export const GetPagesDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetPages" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "limit" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "page" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "offset" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "sort" } },
          type: {
            kind: "ListType",
            type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "search" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "filter" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "pages_filter" } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "pages" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "limit" },
                value: { kind: "Variable", name: { kind: "Name", value: "limit" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "offset" },
                value: { kind: "Variable", name: { kind: "Name", value: "offset" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "page" },
                value: { kind: "Variable", name: { kind: "Name", value: "page" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "sort" },
                value: { kind: "Variable", name: { kind: "Name", value: "sort" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "filter" },
                value: { kind: "Variable", name: { kind: "Name", value: "filter" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "search" },
                value: { kind: "Variable", name: { kind: "Name", value: "search" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "PageFields" } }],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ImageFields" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "images" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "alt" } },
          { kind: "Field", name: { kind: "Name", value: "type" } },
          { kind: "Field", name: { kind: "Name", value: "caption" } },
          { kind: "Field", name: { kind: "Name", value: "source" } },
          { kind: "Field", name: { kind: "Name", value: "description" } },
          { kind: "Field", name: { kind: "Name", value: "loading" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "SeoFields" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "seo" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "priority" } },
          { kind: "Field", name: { kind: "Name", value: "description" } },
          { kind: "Field", name: { kind: "Name", value: "noindex" } },
          { kind: "Field", name: { kind: "Name", value: "nofollow" } },
          { kind: "Field", name: { kind: "Name", value: "canonical_url" } },
          { kind: "Field", name: { kind: "Name", value: "change_frequency" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "twitter_image" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "FragmentSpread", name: { kind: "Name", value: "ImageFields" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "og_image" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "FragmentSpread", name: { kind: "Name", value: "ImageFields" } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "BlockCardFields" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "block_card" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "sort" } },
          {
            kind: "Field",
            alias: { kind: "Name", value: "href_card" },
            name: { kind: "Name", value: "href" },
          },
          {
            kind: "Field",
            alias: { kind: "Name", value: "title_card" },
            name: { kind: "Name", value: "title" },
          },
          { kind: "Field", name: { kind: "Name", value: "headline" } },
          {
            kind: "Field",
            alias: { kind: "Name", value: "description_card" },
            name: { kind: "Name", value: "description" },
          },
          { kind: "Field", name: { kind: "Name", value: "size" } },
          {
            kind: "Field",
            alias: { kind: "Name", value: "variant_card" },
            name: { kind: "Name", value: "variant" },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "image" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "FragmentSpread", name: { kind: "Name", value: "ImageFields" } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "FaqFields" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "faqs" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "question" } },
          { kind: "Field", name: { kind: "Name", value: "answer" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "BlockFaqFields" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "block_faq" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "sort" } },
          { kind: "Field", name: { kind: "Name", value: "headline" } },
          {
            kind: "Field",
            alias: { kind: "Name", value: "title_faq" },
            name: { kind: "Name", value: "title" },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "faqs" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "faqs_id" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "FaqFields" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "BlockButtonFields" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "block_button" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "svg" } },
          { kind: "Field", name: { kind: "Name", value: "sort" } },
          { kind: "Field", name: { kind: "Name", value: "size" } },
          { kind: "Field", name: { kind: "Name", value: "label" } },
          { kind: "Field", name: { kind: "Name", value: "shape" } },
          { kind: "Field", name: { kind: "Name", value: "variant" } },
          { kind: "Field", name: { kind: "Name", value: "disabled" } },
          { kind: "Field", name: { kind: "Name", value: "align" } },
          { kind: "Field", name: { kind: "Name", value: "properties" } },
          {
            kind: "Field",
            alias: { kind: "Name", value: "href_button" },
            name: { kind: "Name", value: "href" },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "BlockHero" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "block_hero" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "sort" } },
          { kind: "Field", name: { kind: "Name", value: "headline" } },
          {
            kind: "Field",
            alias: { kind: "Name", value: "title_hero" },
            name: { kind: "Name", value: "title" },
          },
          {
            kind: "Field",
            alias: { kind: "Name", value: "description_hero" },
            name: { kind: "Name", value: "description" },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "buttons" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "block_button_id" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "BlockButtonFields" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "BlockContent" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "block_content" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "sort" } },
          { kind: "Field", name: { kind: "Name", value: "html" } },
          { kind: "Field", name: { kind: "Name", value: "editor" } },
          { kind: "Field", name: { kind: "Name", value: "headline" } },
          { kind: "Field", name: { kind: "Name", value: "markdown" } },
          {
            kind: "Field",
            alias: { kind: "Name", value: "title_content" },
            name: { kind: "Name", value: "title" },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "BlockQuote" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "block_quote" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "sort" } },
          { kind: "Field", name: { kind: "Name", value: "quote" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "author" } },
          { kind: "Field", name: { kind: "Name", value: "about" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "BlockGallery" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "block_gallery" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "sort" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          {
            kind: "Field",
            alias: { kind: "Name", value: "description_gallery" },
            name: { kind: "Name", value: "description" },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "images" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "__typename" } },
                { kind: "Field", name: { kind: "Name", value: "sort" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "images_id" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "ImageFields" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "BlockVideo" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "block_video" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "sort" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "source" } },
          { kind: "Field", name: { kind: "Name", value: "headline" } },
          { kind: "Field", name: { kind: "Name", value: "provider" } },
          {
            kind: "Field",
            alias: { kind: "Name", value: "description_video" },
            name: { kind: "Name", value: "description" },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "BlockPosts" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "block_posts" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "sort" } },
          { kind: "Field", name: { kind: "Name", value: "topic" } },
          { kind: "Field", name: { kind: "Name", value: "select" } },
          { kind: "Field", name: { kind: "Name", value: "headline" } },
          { kind: "Field", name: { kind: "Name", value: "perpage" } },
          { kind: "Field", name: { kind: "Name", value: "pagination" } },
          {
            kind: "Field",
            alias: { kind: "Name", value: "title_cardgroup" },
            name: { kind: "Name", value: "title" },
          },
          {
            kind: "Field",
            alias: { kind: "Name", value: "description_cardgroup" },
            name: { kind: "Name", value: "description" },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "PageFields" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "pages" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "sort" } },
          { kind: "Field", name: { kind: "Name", value: "status" } },
          { kind: "Field", name: { kind: "Name", value: "date_created" } },
          { kind: "Field", name: { kind: "Name", value: "date_updated" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "path" } },
          { kind: "Field", name: { kind: "Name", value: "description" } },
          { kind: "Field", name: { kind: "Name", value: "pagination" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "seo" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "SeoFields" } }],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "blocks" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "sort" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "item" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "InlineFragment",
                        typeCondition: {
                          kind: "NamedType",
                          name: { kind: "Name", value: "block_card" },
                        },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "FragmentSpread",
                              name: { kind: "Name", value: "BlockCardFields" },
                            },
                          ],
                        },
                      },
                      {
                        kind: "InlineFragment",
                        typeCondition: {
                          kind: "NamedType",
                          name: { kind: "Name", value: "block_faq" },
                        },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "FragmentSpread",
                              name: { kind: "Name", value: "BlockFaqFields" },
                            },
                          ],
                        },
                      },
                      {
                        kind: "InlineFragment",
                        typeCondition: {
                          kind: "NamedType",
                          name: { kind: "Name", value: "block_hero" },
                        },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            { kind: "FragmentSpread", name: { kind: "Name", value: "BlockHero" } },
                          ],
                        },
                      },
                      {
                        kind: "InlineFragment",
                        typeCondition: {
                          kind: "NamedType",
                          name: { kind: "Name", value: "block_button" },
                        },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "FragmentSpread",
                              name: { kind: "Name", value: "BlockButtonFields" },
                            },
                          ],
                        },
                      },
                      {
                        kind: "InlineFragment",
                        typeCondition: {
                          kind: "NamedType",
                          name: { kind: "Name", value: "block_image" },
                        },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            { kind: "Field", name: { kind: "Name", value: "__typename" } },
                            { kind: "Field", name: { kind: "Name", value: "sort" } },
                            { kind: "Field", name: { kind: "Name", value: "size" } },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "image" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "FragmentSpread",
                                    name: { kind: "Name", value: "ImageFields" },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: "InlineFragment",
                        typeCondition: {
                          kind: "NamedType",
                          name: { kind: "Name", value: "block_content" },
                        },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "FragmentSpread",
                              name: { kind: "Name", value: "BlockContent" },
                            },
                          ],
                        },
                      },
                      {
                        kind: "InlineFragment",
                        typeCondition: {
                          kind: "NamedType",
                          name: { kind: "Name", value: "block_quote" },
                        },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            { kind: "FragmentSpread", name: { kind: "Name", value: "BlockQuote" } },
                          ],
                        },
                      },
                      {
                        kind: "InlineFragment",
                        typeCondition: {
                          kind: "NamedType",
                          name: { kind: "Name", value: "block_gallery" },
                        },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "FragmentSpread",
                              name: { kind: "Name", value: "BlockGallery" },
                            },
                          ],
                        },
                      },
                      {
                        kind: "InlineFragment",
                        typeCondition: {
                          kind: "NamedType",
                          name: { kind: "Name", value: "block_video" },
                        },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            { kind: "FragmentSpread", name: { kind: "Name", value: "BlockVideo" } },
                          ],
                        },
                      },
                      {
                        kind: "InlineFragment",
                        typeCondition: {
                          kind: "NamedType",
                          name: { kind: "Name", value: "block_posts" },
                        },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            { kind: "FragmentSpread", name: { kind: "Name", value: "BlockPosts" } },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetPagesQuery, GetPagesQueryVariables>;
export const GetPostsDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetPosts" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "limit" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "page" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "offset" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "sort" } },
          type: {
            kind: "ListType",
            type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "search" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "content" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Boolean" } },
          defaultValue: { kind: "BooleanValue", value: false },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "filter" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "posts_filter" } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "posts" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "filter" },
                value: { kind: "Variable", name: { kind: "Name", value: "filter" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "limit" },
                value: { kind: "Variable", name: { kind: "Name", value: "limit" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "page" },
                value: { kind: "Variable", name: { kind: "Name", value: "page" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "offset" },
                value: { kind: "Variable", name: { kind: "Name", value: "offset" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "sort" },
                value: { kind: "Variable", name: { kind: "Name", value: "sort" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "search" },
                value: { kind: "Variable", name: { kind: "Name", value: "search" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "FragmentSpread", name: { kind: "Name", value: "PostFields" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "editor" },
                  directives: [
                    {
                      kind: "Directive",
                      name: { kind: "Name", value: "include" },
                      arguments: [
                        {
                          kind: "Argument",
                          name: { kind: "Name", value: "if" },
                          value: { kind: "Variable", name: { kind: "Name", value: "content" } },
                        },
                      ],
                    },
                  ],
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "html" },
                  directives: [
                    {
                      kind: "Directive",
                      name: { kind: "Name", value: "include" },
                      arguments: [
                        {
                          kind: "Argument",
                          name: { kind: "Name", value: "if" },
                          value: { kind: "Variable", name: { kind: "Name", value: "content" } },
                        },
                      ],
                    },
                  ],
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "markdown" },
                  directives: [
                    {
                      kind: "Directive",
                      name: { kind: "Name", value: "include" },
                      arguments: [
                        {
                          kind: "Argument",
                          name: { kind: "Name", value: "if" },
                          value: { kind: "Variable", name: { kind: "Name", value: "content" } },
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ImageFields" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "images" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "alt" } },
          { kind: "Field", name: { kind: "Name", value: "type" } },
          { kind: "Field", name: { kind: "Name", value: "caption" } },
          { kind: "Field", name: { kind: "Name", value: "source" } },
          { kind: "Field", name: { kind: "Name", value: "description" } },
          { kind: "Field", name: { kind: "Name", value: "loading" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "SeoFields" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "seo" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "priority" } },
          { kind: "Field", name: { kind: "Name", value: "description" } },
          { kind: "Field", name: { kind: "Name", value: "noindex" } },
          { kind: "Field", name: { kind: "Name", value: "nofollow" } },
          { kind: "Field", name: { kind: "Name", value: "canonical_url" } },
          { kind: "Field", name: { kind: "Name", value: "change_frequency" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "twitter_image" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "FragmentSpread", name: { kind: "Name", value: "ImageFields" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "og_image" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "FragmentSpread", name: { kind: "Name", value: "ImageFields" } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "TagFields" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "tags" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "name" } },
          { kind: "Field", name: { kind: "Name", value: "slug" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "CategoryFields" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "categories" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "name" } },
          { kind: "Field", name: { kind: "Name", value: "slug" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "BlockCardFields" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "block_card" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "sort" } },
          {
            kind: "Field",
            alias: { kind: "Name", value: "href_card" },
            name: { kind: "Name", value: "href" },
          },
          {
            kind: "Field",
            alias: { kind: "Name", value: "title_card" },
            name: { kind: "Name", value: "title" },
          },
          { kind: "Field", name: { kind: "Name", value: "headline" } },
          {
            kind: "Field",
            alias: { kind: "Name", value: "description_card" },
            name: { kind: "Name", value: "description" },
          },
          { kind: "Field", name: { kind: "Name", value: "size" } },
          {
            kind: "Field",
            alias: { kind: "Name", value: "variant_card" },
            name: { kind: "Name", value: "variant" },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "image" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "FragmentSpread", name: { kind: "Name", value: "ImageFields" } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "FaqFields" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "faqs" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "question" } },
          { kind: "Field", name: { kind: "Name", value: "answer" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "BlockFaqFields" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "block_faq" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "sort" } },
          { kind: "Field", name: { kind: "Name", value: "headline" } },
          {
            kind: "Field",
            alias: { kind: "Name", value: "title_faq" },
            name: { kind: "Name", value: "title" },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "faqs" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "faqs_id" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "FaqFields" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "BlockButtonFields" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "block_button" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "svg" } },
          { kind: "Field", name: { kind: "Name", value: "sort" } },
          { kind: "Field", name: { kind: "Name", value: "size" } },
          { kind: "Field", name: { kind: "Name", value: "label" } },
          { kind: "Field", name: { kind: "Name", value: "shape" } },
          { kind: "Field", name: { kind: "Name", value: "variant" } },
          { kind: "Field", name: { kind: "Name", value: "disabled" } },
          { kind: "Field", name: { kind: "Name", value: "align" } },
          { kind: "Field", name: { kind: "Name", value: "properties" } },
          {
            kind: "Field",
            alias: { kind: "Name", value: "href_button" },
            name: { kind: "Name", value: "href" },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "BlockHero" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "block_hero" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "sort" } },
          { kind: "Field", name: { kind: "Name", value: "headline" } },
          {
            kind: "Field",
            alias: { kind: "Name", value: "title_hero" },
            name: { kind: "Name", value: "title" },
          },
          {
            kind: "Field",
            alias: { kind: "Name", value: "description_hero" },
            name: { kind: "Name", value: "description" },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "buttons" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "block_button_id" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "BlockButtonFields" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "BlockContent" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "block_content" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "sort" } },
          { kind: "Field", name: { kind: "Name", value: "html" } },
          { kind: "Field", name: { kind: "Name", value: "editor" } },
          { kind: "Field", name: { kind: "Name", value: "headline" } },
          { kind: "Field", name: { kind: "Name", value: "markdown" } },
          {
            kind: "Field",
            alias: { kind: "Name", value: "title_content" },
            name: { kind: "Name", value: "title" },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "BlockQuote" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "block_quote" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "sort" } },
          { kind: "Field", name: { kind: "Name", value: "quote" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "author" } },
          { kind: "Field", name: { kind: "Name", value: "about" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "BlockGallery" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "block_gallery" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "sort" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          {
            kind: "Field",
            alias: { kind: "Name", value: "description_gallery" },
            name: { kind: "Name", value: "description" },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "images" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "__typename" } },
                { kind: "Field", name: { kind: "Name", value: "sort" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "images_id" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "ImageFields" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "BlockVideo" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "block_video" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "sort" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "source" } },
          { kind: "Field", name: { kind: "Name", value: "headline" } },
          { kind: "Field", name: { kind: "Name", value: "provider" } },
          {
            kind: "Field",
            alias: { kind: "Name", value: "description_video" },
            name: { kind: "Name", value: "description" },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "BlockPosts" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "block_posts" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "sort" } },
          { kind: "Field", name: { kind: "Name", value: "topic" } },
          { kind: "Field", name: { kind: "Name", value: "select" } },
          { kind: "Field", name: { kind: "Name", value: "headline" } },
          { kind: "Field", name: { kind: "Name", value: "perpage" } },
          { kind: "Field", name: { kind: "Name", value: "pagination" } },
          {
            kind: "Field",
            alias: { kind: "Name", value: "title_cardgroup" },
            name: { kind: "Name", value: "title" },
          },
          {
            kind: "Field",
            alias: { kind: "Name", value: "description_cardgroup" },
            name: { kind: "Name", value: "description" },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "PostFields" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "posts" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "sort" } },
          { kind: "Field", name: { kind: "Name", value: "status" } },
          { kind: "Field", name: { kind: "Name", value: "date_created" } },
          { kind: "Field", name: { kind: "Name", value: "date_updated" } },
          { kind: "Field", name: { kind: "Name", value: "date_published" } },
          { kind: "Field", name: { kind: "Name", value: "slug" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "headline" } },
          { kind: "Field", name: { kind: "Name", value: "topic" } },
          { kind: "Field", name: { kind: "Name", value: "description" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "featured" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "FragmentSpread", name: { kind: "Name", value: "ImageFields" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "seo" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "SeoFields" } }],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "tags" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "tags_id" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "TagFields" } },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "categories" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "categories_id" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "CategoryFields" } },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "blocks" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "sort" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "item" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "InlineFragment",
                        typeCondition: {
                          kind: "NamedType",
                          name: { kind: "Name", value: "block_card" },
                        },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "FragmentSpread",
                              name: { kind: "Name", value: "BlockCardFields" },
                            },
                          ],
                        },
                      },
                      {
                        kind: "InlineFragment",
                        typeCondition: {
                          kind: "NamedType",
                          name: { kind: "Name", value: "block_faq" },
                        },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "FragmentSpread",
                              name: { kind: "Name", value: "BlockFaqFields" },
                            },
                          ],
                        },
                      },
                      {
                        kind: "InlineFragment",
                        typeCondition: {
                          kind: "NamedType",
                          name: { kind: "Name", value: "block_hero" },
                        },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            { kind: "FragmentSpread", name: { kind: "Name", value: "BlockHero" } },
                          ],
                        },
                      },
                      {
                        kind: "InlineFragment",
                        typeCondition: {
                          kind: "NamedType",
                          name: { kind: "Name", value: "block_button" },
                        },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "FragmentSpread",
                              name: { kind: "Name", value: "BlockButtonFields" },
                            },
                          ],
                        },
                      },
                      {
                        kind: "InlineFragment",
                        typeCondition: {
                          kind: "NamedType",
                          name: { kind: "Name", value: "block_image" },
                        },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            { kind: "Field", name: { kind: "Name", value: "__typename" } },
                            { kind: "Field", name: { kind: "Name", value: "sort" } },
                            { kind: "Field", name: { kind: "Name", value: "size" } },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "image" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "FragmentSpread",
                                    name: { kind: "Name", value: "ImageFields" },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: "InlineFragment",
                        typeCondition: {
                          kind: "NamedType",
                          name: { kind: "Name", value: "block_content" },
                        },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "FragmentSpread",
                              name: { kind: "Name", value: "BlockContent" },
                            },
                          ],
                        },
                      },
                      {
                        kind: "InlineFragment",
                        typeCondition: {
                          kind: "NamedType",
                          name: { kind: "Name", value: "block_quote" },
                        },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            { kind: "FragmentSpread", name: { kind: "Name", value: "BlockQuote" } },
                          ],
                        },
                      },
                      {
                        kind: "InlineFragment",
                        typeCondition: {
                          kind: "NamedType",
                          name: { kind: "Name", value: "block_gallery" },
                        },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "FragmentSpread",
                              name: { kind: "Name", value: "BlockGallery" },
                            },
                          ],
                        },
                      },
                      {
                        kind: "InlineFragment",
                        typeCondition: {
                          kind: "NamedType",
                          name: { kind: "Name", value: "block_video" },
                        },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            { kind: "FragmentSpread", name: { kind: "Name", value: "BlockVideo" } },
                          ],
                        },
                      },
                      {
                        kind: "InlineFragment",
                        typeCondition: {
                          kind: "NamedType",
                          name: { kind: "Name", value: "block_posts" },
                        },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            { kind: "FragmentSpread", name: { kind: "Name", value: "BlockPosts" } },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetPostsQuery, GetPostsQueryVariables>;
export const GetSitemapsDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetSitemaps" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "limit" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "page" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "offset" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "sort" } },
          type: {
            kind: "ListType",
            type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "search" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "filter" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "sitemaps_filter" } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "sitemaps" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "filter" },
                value: { kind: "Variable", name: { kind: "Name", value: "filter" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "limit" },
                value: { kind: "Variable", name: { kind: "Name", value: "limit" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "page" },
                value: { kind: "Variable", name: { kind: "Name", value: "page" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "offset" },
                value: { kind: "Variable", name: { kind: "Name", value: "offset" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "sort" },
                value: { kind: "Variable", name: { kind: "Name", value: "sort" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "search" },
                value: { kind: "Variable", name: { kind: "Name", value: "search" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "FragmentSpread", name: { kind: "Name", value: "SitemapFields" } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "SitemapFields" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "sitemaps" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "sort" } },
          { kind: "Field", name: { kind: "Name", value: "status" } },
          { kind: "Field", name: { kind: "Name", value: "date_updated" } },
          { kind: "Field", name: { kind: "Name", value: "loc" } },
          { kind: "Field", name: { kind: "Name", value: "size" } },
          { kind: "Field", name: { kind: "Name", value: "priority" } },
          { kind: "Field", name: { kind: "Name", value: "collection" } },
          { kind: "Field", name: { kind: "Name", value: "change_frequency" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "excluded" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "sort" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "item" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "InlineFragment",
                        typeCondition: {
                          kind: "NamedType",
                          name: { kind: "Name", value: "posts" },
                        },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            { kind: "Field", name: { kind: "Name", value: "__typename" } },
                            { kind: "Field", name: { kind: "Name", value: "status" } },
                            { kind: "Field", name: { kind: "Name", value: "slug" } },
                            { kind: "Field", name: { kind: "Name", value: "topic" } },
                            { kind: "Field", name: { kind: "Name", value: "date_updated" } },
                          ],
                        },
                      },
                      {
                        kind: "InlineFragment",
                        typeCondition: {
                          kind: "NamedType",
                          name: { kind: "Name", value: "pages" },
                        },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            { kind: "Field", name: { kind: "Name", value: "__typename" } },
                            { kind: "Field", name: { kind: "Name", value: "path" } },
                            { kind: "Field", name: { kind: "Name", value: "status" } },
                            { kind: "Field", name: { kind: "Name", value: "date_updated" } },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "included" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "sort" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "item" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "InlineFragment",
                        typeCondition: {
                          kind: "NamedType",
                          name: { kind: "Name", value: "posts" },
                        },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            { kind: "Field", name: { kind: "Name", value: "__typename" } },
                            { kind: "Field", name: { kind: "Name", value: "status" } },
                            { kind: "Field", name: { kind: "Name", value: "slug" } },
                            { kind: "Field", name: { kind: "Name", value: "topic" } },
                            { kind: "Field", name: { kind: "Name", value: "date_updated" } },
                          ],
                        },
                      },
                      {
                        kind: "InlineFragment",
                        typeCondition: {
                          kind: "NamedType",
                          name: { kind: "Name", value: "pages" },
                        },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            { kind: "Field", name: { kind: "Name", value: "__typename" } },
                            { kind: "Field", name: { kind: "Name", value: "path" } },
                            { kind: "Field", name: { kind: "Name", value: "status" } },
                            { kind: "Field", name: { kind: "Name", value: "date_updated" } },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetSitemapsQuery, GetSitemapsQueryVariables>;
export const GetSitemapPostsDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetSitemapPosts" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "limit" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "page" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "offset" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "sort" } },
          type: {
            kind: "ListType",
            type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "search" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "filter" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "posts_filter" } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "posts" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "filter" },
                value: { kind: "Variable", name: { kind: "Name", value: "filter" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "limit" },
                value: { kind: "Variable", name: { kind: "Name", value: "limit" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "page" },
                value: { kind: "Variable", name: { kind: "Name", value: "page" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "offset" },
                value: { kind: "Variable", name: { kind: "Name", value: "offset" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "sort" },
                value: { kind: "Variable", name: { kind: "Name", value: "sort" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "search" },
                value: { kind: "Variable", name: { kind: "Name", value: "search" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "slug" } },
                { kind: "Field", name: { kind: "Name", value: "topic" } },
                { kind: "Field", name: { kind: "Name", value: "status" } },
                { kind: "Field", name: { kind: "Name", value: "date_updated" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetSitemapPostsQuery, GetSitemapPostsQueryVariables>;
export const GetSitemapPagesDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetSitemapPages" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "limit" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "page" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "offset" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "sort" } },
          type: {
            kind: "ListType",
            type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "search" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "filter" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "pages_filter" } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "pages" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "filter" },
                value: { kind: "Variable", name: { kind: "Name", value: "filter" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "limit" },
                value: { kind: "Variable", name: { kind: "Name", value: "limit" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "page" },
                value: { kind: "Variable", name: { kind: "Name", value: "page" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "offset" },
                value: { kind: "Variable", name: { kind: "Name", value: "offset" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "sort" },
                value: { kind: "Variable", name: { kind: "Name", value: "sort" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "search" },
                value: { kind: "Variable", name: { kind: "Name", value: "search" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "path" } },
                { kind: "Field", name: { kind: "Name", value: "status" } },
                { kind: "Field", name: { kind: "Name", value: "date_updated" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetSitemapPagesQuery, GetSitemapPagesQueryVariables>;
