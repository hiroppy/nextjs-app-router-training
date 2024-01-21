declare module "process" {
  global {
    namespace NodeJS {
      interface ProcessEnv {
        NEXT_PUBLIC_SITE_URL: string;
        NEXT_PUBLIC_SERVER_ONLY_DEMO: string;
        SERVER_ONLY_DEMO: string;
        NEXT_PUBLIC_ALGOLIA_APPLICATION_ID: string;
        NEXT_PUBLIC_ALGOLIA_SEARCH_ONLY_API_KEY: string;
        GA_ID: string;
      }
    }
  }
}
