/// <reference types="astro-imagetools" />
declare module "astro-imagetools/components";

interface ImportMetaEnv {
  readonly PUBLIC_APP_URL: string;
  readonly API_URL: string;
  readonly API_TOKEN: string;
  readonly GOOGLE_TAG_MANAGER: string;
  readonly GOOGLE_SITE_VERIFICATION: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
