/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_SITE_URL: string;
  readonly API_URL: string;
  readonly API_TOKEN: string;
  readonly GOOGLE_TAG_MANAGER: string;
  readonly GOOGLE_SITE_VERIFICATION: string;
  readonly ANALYTICS_USERNAME: string;
  readonly ANALYTICS_PASSWORD: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
