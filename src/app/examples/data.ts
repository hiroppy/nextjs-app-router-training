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
    | "full route cache"
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
  template: {
    kind: "basic",
    path: "template",
    title: "Template",
    description: `
Templates are similar to layouts in that they wrap each child layout or page.
Unlike layouts that persist across routes and maintain state, templates create a new instance for each of their children on navigation. This means that when a user navigates between routes that share a template, a new instance of the component is mounted, DOM elements are recreated, state is not preserved, and effects are re-synchronized.

There may be cases where you need those specific behaviors, and templates would be a more suitable option than layouts. For example:

- Features that rely on useEffect (e.g logging page views) and useState (e.g a per-page feedback form).
- To change the default framework behavior. For example, Suspense Boundaries inside layouts only show the fallback the first time the Layout is loaded and not when switching pages. For templates, the fallback is shown on each navigation.
  `,
    doc: "https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#templates",
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
  "error-not-found": {
    kind: "error",
    path: "error-not-found",
    title: "Not Found",
    description: `
Invoking the notFound() function throws a NEXT_NOT_FOUND error and terminates rendering of the route segment in which it was thrown.
Specifying a not-found file allows you to gracefully handle such errors by rendering a Not Found UI within the segment.
    `,
    doc: "https://nextjs.org/docs/app/api-reference/functions/not-found",
  },
  "dynamic-required-single": {
    kind: "dynamic routes",
    path: "dynamic-required-single/dog",
    title: "A Single Segment",
    description: `
A Dynamic Segment can be created by wrapping a file or folder name in square brackets: [segmentName]. For example, [id] or [slug].
  `,
    doc: "https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes#convention",
  },
  "dynamic-required-multiple": {
    kind: "dynamic routes",
    path: "dynamic-required-multiple/animals/dog",
    title: "Catch-all Segments",
    description: `
Dynamic Segments can be extended to catch-all subsequent segments by adding an ellipsis inside the brackets [...segmentName].
For example, pages/shop/[...slug].js will match /shop/clothes, but also /shop/clothes/tops, /shop/clothes/tops/t-shirts, and so on.
    `,
    doc: "https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes#catch-all-segments",
  },
  "dynamic-optional-multiple": {
    kind: "dynamic routes",
    path: "dynamic-optional-multiple/animals/dog",
    title: "Optional Catch-all Segments",
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
  "parallel-condition": {
    kind: "parallel routes",
    path: "parallel-condition",
    title: "Conditional Routes",
    description: `
Parallel Routes can be used to implement conditional routing. For example, you can render a @dashboard or @login route depending on the authentication state.
    `,
    doc: "https://nextjs.org/docs/app/building-your-application/routing/parallel-routes#conditional-routes",
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
  "cache-static": {
    kind: "full route cache",
    path: "cache-static",
    title: "Static Rendering",
    description: `
With Static Rendering(default), routes are rendered at build time, or in the background after data revalidation. The result is cached and can be pushed to a Content Delivery Network (CDN). This optimization allows you to share the result of the rendering work between users and server requests.

Static rendering is useful when a route has data that is not personalized to the user and can be known at build time, such as a static blog post or a product page.
    `,
    doc: "https://nextjs.org/docs/app/building-your-application/rendering/server-components#static-rendering-default",
  },
  "cache-dynamic": {
    kind: "full route cache",
    path: "cache-dynamic",
    title: "Dynamic Rendering",
    description: `
With Dynamic Rendering, routes are rendered for each user at request time.

Dynamic rendering is useful when a route has data that is personalized to the user or has information that can only be known at request time, such as cookies or the URL's search params.
    `,
    doc: "https://nextjs.org/docs/app/building-your-application/rendering/server-components#dynamic-rendering",
  },
  "cache-revalidate": {
    kind: "full route cache",
    path: "cache-revalidate",
    title: "Revalidating",
    description: `
Set the default revalidation time for a layout or page. This option does not override the revalidate value set by individual fetch requests.

- false: (default) The default heuristic to cache any fetch requests that set their cache option to 'force-cache' or are discovered before a dynamic function is used. Semantically equivalent to revalidate: Infinity which effectively means the resource should be cached indefinitely. It is still possible for individual fetch requests to use cache: 'no-store' or revalidate: 0 to avoid being cached and make the route dynamically rendered. Or set revalidate to a positive number lower than the route default to increase the revalidation frequency of a route.
- 0: Ensure a layout or page is always dynamically rendered even if no dynamic functions or uncached data fetches are discovered. This option changes the default of fetch requests that do not set a cache option to 'no-store' but leaves fetch requests that opt into 'force-cache' or use a positive revalidate as is.
- number: (in seconds) Set the default revalidation frequency of a layout or page to n seconds.
    `,
    doc: "https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config#revalidate",
  },
  "service-e-commerce": {
    kind: "showcases",
    path: "service-e-commerce",
    title: "Electronic Commerce",
    description: `
This example is for an e-commerce site that uses segment, grouping, intercepting, and parallel.

Path
- /admin "(admin)"
- / "(public)"
- /foods/[itemId] (with intercepting)
- /sign-in  (with intercepting)
    `,
    doc: "https://nextjs.org/docs/app/building-your-application/routing/intercepting-routes",
  },
}) satisfies Record<string, Meta>;
