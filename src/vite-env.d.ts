/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_GA_MEASUREMENT_ID?: string;
  readonly VITE_SITE_URL?: string;
  // Add other env variables here as needed
}

declare module 'vite/client' {
  interface ImportMetaEnv {
    readonly VITE_GA_MEASUREMENT_ID?: string;
    readonly VITE_SITE_URL?: string;
  }
}