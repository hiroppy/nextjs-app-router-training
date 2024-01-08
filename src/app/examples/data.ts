export type Meta = {
  path: string;
  title: string;
  description: string;
  doc: string;
  kind:
    | "basic"
    | "route groups"
    | "loading"
    | "error"
    | "dynamic routes"
    | "parallel routes"
    | "intercepting routes"
    | "showcases";
};

export type ExampleName = keyof typeof meta;

export const meta = (<const>{
  "overwrite-meta": {
    kind: "basic",
    path: "overwrite-meta",
    title: "Overwriting Metadata",
    description: `
Next.js has a Metadata API that can be used to define your application metadata (e.g. meta and link tags inside your HTML head element) for improved SEO and web shareability.
  `,
    doc: "https://nextjs.org/docs/app/building-your-application/optimizing/metadata",
  },
  "nesting-layouts": {
    kind: "basic",
    path: "nesting-layouts",
    title: "Nesting Layouts",
    description: `
A layout is UI that is shared between multiple pages. On navigation, layouts preserve state, remain interactive, and do not re-render. Layouts can also be nested.
  `,
    doc: "https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts",
  },
  "(grouping)": {
    kind: "route groups",
    path: "grouping-2",
    title: "Grouping",
    description: `
In the app directory, nested folders are normally mapped to URL paths. However, you can mark a folder as a Route Group to prevent the folder from being included in the route's URL path.
This allows you to organize your route segments and project files into logical groups without affecting the URL path structure.
    `,
    doc: "https://nextjs.org/docs/app/building-your-application/routing/route-groups",
  },
  "loading-immediately": {
    kind: "loading",
    path: "loading-immediately",
    title: "Loading Immediately",
    description: `
An instant loading state is fallback UI that is shown immediately upon navigation. You can pre-render loading indicators such as skeletons and spinners, or a small but meaningful part of future screens such as a cover photo, title, etc. This helps users understand the app is responding and provides a better user experience.
Create a loading state by adding a loading.js file inside a folder.
    `,
    doc: "https://nextjs.org/docs/app/building-your-application/routing/loading-ui-and-streaming",
  },
  "loading-with-streaming": {
    kind: "loading",
    path: "loading-with-streaming",
    title: "Loading with Streaming",
    description: `
In addition to loading.js, you can also manually create Suspense Boundaries for your own UI components. The App Router supports streaming with Suspense for both Node.js and Edge runtimes.
  `,
    doc: "https://nextjs.org/docs/app/building-your-application/routing/loading-ui-and-streaming#streaming-with-suspense",
  },
  "error-immediately": {
    kind: "error",
    path: "error-immediately",
    title: "Error Immediately",
    description: `
The error.js file convention allows you to gracefully handle unexpected runtime errors in nested routes.
    `,
    doc: "https://nextjs.org/docs/app/building-your-application/routing/error-handling",
  },
  "dynamic-required-single": {
    kind: "dynamic routes",
    path: "dynamic-required-single/dog",
    title: "Dynamic Routes with a Single Parameter",
    description: `
A Dynamic Segment can be created by wrapping a file or folder name in square brackets: [segmentName]. For example, [id] or [slug].
  `,
    doc: "https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes#convention",
  },
  "dynamic-required-multiple": {
    kind: "dynamic routes",
    path: "dynamic-required-multiple/animals/dog",
    title: "Dynamic Routes with a Multiple Required Parameter",
    description: `
Dynamic Segments can be extended to catch-all subsequent segments by adding an ellipsis inside the brackets [...segmentName].
For example, pages/shop/[...slug].js will match /shop/clothes, but also /shop/clothes/tops, /shop/clothes/tops/t-shirts, and so on.
    `,
    doc: "https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes#catch-all-segments",
  },
  "dynamic-optional-multiple": {
    kind: "dynamic routes",
    path: "dynamic-optional-multiple/animals/dog",
    title: "Dynamic Routes with a Multiple Optional Parameter",
    description: `
Catch-all Segments can be made optional by including the parameter in double square brackets: [[...segmentName]].
For example, pages/shop/[[...slug]].js will also match /shop, in addition to /shop/clothes, /shop/clothes/tops, /shop/clothes/tops/t-shirts.
    `,
    doc: "https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes#optional-catch-all-segments",
  },
  parallel: {
    kind: "parallel routes",
    path: "parallel",
    title: "Parallel Routes",
    description: `
Parallel Routing allows you to simultaneously or conditionally render one or more pages in the same layout.
For highly dynamic sections of an app, such as dashboards and feeds on social sites, Parallel Routing can be used to implement complex routing patterns.

Slots(@) are not route segments and do not affect the URL structure.
    `,
    doc: "https://nextjs.org/docs/app/building-your-application/routing/parallel-routes",
  },
  intercepting: {
    kind: "intercepting routes",
    path: "intercepting",
    title: "Intercepting Routes",
    description: `
Intercepting routes allows you to load a route from another part of your application within the current layout.
This routing paradigm can be useful when you want to display the content of a route without the user switching to a different context.

(.) to match segments on the same level
(..) to match segments one level above
(..)(..) to match segments two levels above
(...) to match segments from the root app directory
    `,
    doc: "https://nextjs.org/docs/app/building-your-application/routing/intercepting-routes",
  },
  "service-e-commerce": {
    kind: "showcases",
    path: "service-e-commerce",
    title: "Electronic Commerce",
    description: `
Intercepting routes allows you to load a route from another part of your application within the current layout.
This routing paradigm can be useful when you want to display the content of a route without the user switching to a different context.
    `,
    doc: "https://nextjs.org/docs/app/building-your-application/routing/intercepting-routes",
  },
}) satisfies Record<string, Meta>;
