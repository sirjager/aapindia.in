/// <reference types="astro-imagetools" />
declare module "astro-imagetools/components";

declare namespace NodeJS {
  export interface ProcessEnv {
    readonly PUBLIC_APP_URL: string;
  }
}
