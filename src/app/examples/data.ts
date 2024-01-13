export type Kind =
  | "basic"
  | "route-groups"
  | "loading"
  | "error"
  | "dynamic-routes"
  | "parallel-routes"
  | "intercepting-routes"
  | "full-route-cache"
  | "route-handlers"
  | "server-actions"
  | "security"
  | "showcases";

export type Meta = {
  kind?: Kind;
  path: string;
  title: string;
  description: string;
  doc: string;
};

export const meta = (<const>{
  basic: {
    "server-client-components": {
      path: "server-client-components",
      title: "Server and Client Components",
      description: `
By default, Next.js uses Server Components. This allows you to automatically implement server rendering with no additional configuration, and you can opt into using Client Components when needed

React Server Components allow you to write UI that can be rendered and optionally cached on the server. In Next.js, the rendering work is further split by route segments to enable streaming and partial rendering

Client Components allows you to write interactive UI that can be rendered on the client at request time. In Next.js, client rendering is opt-in, meaning you have to explicitly decide what components React should render on the client.
  `,
      doc: "https://nextjs.org/docs/app/building-your-application/rendering/composition-patterns",
    },
    "overwrite-meta": {
      path: "overwrite-meta",
      title: "Overwriting Metadata",
      description: `
Next.js has a Metadata API that can be used to define your application metadata (e.g. meta and link tags inside your HTML head element) for improved SEO and web shareability.
  `,
      doc: "https://nextjs.org/docs/app/building-your-application/optimizing/metadata",
    },
    "nesting-layouts": {
      path: "nesting-layouts",
      title: "Nesting Layouts",
      description: `
A layout is UI that is shared between multiple pages. On navigation, layouts preserve state, remain interactive, and do not re-render. Layouts can also be nested.
  `,
      doc: "https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts",
    },
    template: {
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
  },
  "dynamic-routes": {
    "dynamic-required-single": {
      path: "dynamic-required-single/dog",
      title: "A Single Segment",
      description: `
A Dynamic Segment can be created by wrapping a file or folder name in square brackets: [segmentName]. For example, [id] or [slug].
  `,
      doc: "https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes#convention",
    },
    "dynamic-required-multiple": {
      path: "dynamic-required-multiple/animals/dog",
      title: "Catch-all Segments",
      description: `
Dynamic Segments can be extended to catch-all subsequent segments by adding an ellipsis inside the brackets [...segmentName].
For example, pages/shop/[...slug].js will match /shop/clothes, but also /shop/clothes/tops, /shop/clothes/tops/t-shirts, and so on.
    `,
      doc: "https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes#catch-all-segments",
    },
    "dynamic-optional-multiple": {
      path: "dynamic-optional-multiple/animals/dog",
      title: "Optional Catch-all Segments",
      description: `
Catch-all Segments can be made optional by including the parameter in double square brackets: [[...segmentName]].
For example, pages/shop/[[...slug]].js will also match /shop, in addition to /shop/clothes, /shop/clothes/tops, /shop/clothes/tops/t-shirts.
    `,
      doc: "https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes#optional-catch-all-segments",
    },
  },
  "route-groups": {
    grouping: {
      path: "grouping",
      title: "Grouping",
      description: `
In the app directory, nested folders are normally mapped to URL paths. However, you can mark a folder as a Route Group to prevent the folder from being included in the route's URL path.
This allows you to organize your route segments and project files into logical groups without affecting the URL path structure.
    `,
      doc: "https://nextjs.org/docs/app/building-your-application/routing/route-groups",
    },
  },
  loading: {
    "loading-immediately": {
      path: "loading-immediately",
      title: "Loading Immediately",
      description: `
An instant loading state is fallback UI that is shown immediately upon navigation. You can pre-render loading indicators such as skeletons and spinners, or a small but meaningful part of future screens such as a cover photo, title, etc. This helps users understand the app is responding and provides a better user experience.
Create a loading state by adding a loading.js file inside a folder.
    `,
      doc: "https://nextjs.org/docs/app/building-your-application/routing/loading-ui-and-streaming",
    },
    "loading-with-streaming": {
      path: "loading-with-streaming",
      title: "Loading with Streaming",
      description: `
In addition to loading.js, you can also manually create Suspense Boundaries for your own UI components. The App Router supports streaming with Suspense for both Node.js and Edge runtimes.
  `,
      doc: "https://nextjs.org/docs/app/building-your-application/routing/loading-ui-and-streaming#streaming-with-suspense",
    },
    "loading-with-preloading-data": {
      path: "loading-with-preloading-data",
      title: "Loading with Preloading Data",
      description: `
Another way to prevent waterfalls is to use the preload pattern.
You can optionally create a preload function to further optimize parallel data fetching. With this approach, you don't have to pass promises down as props. The preload function can also have any name as it's a pattern, not an API.
  `,
      doc: "https://nextjs.org/docs/app/building-your-application/data-fetching/patterns#preloading-data",
    },
  },
  error: {
    "error-immediately": {
      path: "error-immediately",
      title: "Error Immediately",
      description: `
The error.js file convention allows you to gracefully handle unexpected runtime errors in nested routes.
    `,
      doc: "https://nextjs.org/docs/app/building-your-application/routing/error-handling",
    },
    "error-not-found": {
      path: "error-not-found",
      title: "Not Found",
      description: `
Invoking the notFound() function throws a NEXT_NOT_FOUND error and terminates rendering of the route segment in which it was thrown.
Specifying a not-found file allows you to gracefully handle such errors by rendering a Not Found UI within the segment.
    `,
      doc: "https://nextjs.org/docs/app/api-reference/functions/not-found",
    },
  },
  "parallel-routes": {
    parallel: {
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
      path: "parallel-condition",
      title: "Conditional Routes",
      description: `
Parallel Routes can be used to implement conditional routing. For example, you can render a @dashboard or @login route depending on the authentication state.
    `,
      doc: "https://nextjs.org/docs/app/building-your-application/routing/parallel-routes#conditional-routes",
    },
  },
  "intercepting-routes": {
    intercepting: {
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
    "intercepting-modal": {
      path: "intercepting-modal",
      title: "Modal with Parallel Routes",
      description: `
Intercepting Routes can be used together with Parallel Routes to create modals.
Using this pattern to create modals overcomes some common challenges when working with modals, by allowing you to:

- Make the modal content shareable through a URL
- Preserve context when the page is refreshed, instead of closing the modal
- Close the modal on backwards navigation rather than going to the previous route
- Reopen the modal on forwards navigation
    `,
      doc: "https://nextjs.org/docs/app/building-your-application/routing/intercepting-routes#modals",
    },
  },
  "full-route-cache": {
    "cache-static": {
      path: "cache-static",
      title: "Static Rendering",
      description: `
With Static Rendering(default), routes are rendered at build time, or in the background after data revalidation. The result is cached and can be pushed to a Content Delivery Network (CDN). This optimization allows you to share the result of the rendering work between users and server requests.

Static rendering is useful when a route has data that is not personalized to the user and can be known at build time, such as a static blog post or a product page.
    `,
      doc: "https://nextjs.org/docs/app/building-your-application/rendering/server-components#static-rendering-default",
    },
    "cache-dynamic": {
      path: "cache-dynamic",
      title: "Dynamic Rendering",
      description: `
With Dynamic Rendering, routes are rendered for each user at request time.

Dynamic rendering is useful when a route has data that is personalized to the user or has information that can only be known at request time, such as cookies or the URL's search params.
    `,
      doc: "https://nextjs.org/docs/app/building-your-application/rendering/server-components#dynamic-rendering",
    },
    "cache-revalidate": {
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
  },
  "route-handlers": {
    "route-handlers": {
      path: "route-handlers",
      title: "Route Handlers",
      description: `
Route Handlers allow you to create custom request handlers for a given route using the Web Request and Response APIs.
Route Handlers can be nested inside the app directory, similar to page.js and layout.js. But there cannot be a route.js file at the same route segment level as page.js.
    `,
      doc: "https://nextjs.org/docs/app/building-your-application/routing/route-handlers",
    },
  },
  "server-actions": {
    "server-actions": {
      path: "server-actions",
      title: "Server Actions",
      description: `
Server Actions are asynchronous functions that are executed on the server.
They can be used in Server and Client Components to handle form submissions and data mutations in Next.js applications.
    `,
      doc: "https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations",
    },
    "server-actions-non-form": {
      path: "server-actions-non-form",
      title: "Non-form Elements",
      description: `
While it's common to use Server Actions within <form> elements, they can also be invoked from other parts of your code such as event handlers and useEffect.
    `,
      doc: "https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations#non-form-elements",
    },
    "server-actions-optimism": {
      path: "server-actions-optimism",
      title: "Optimistic Updates",
      description: `
useOptimistic is a React Hook that lets you show a different state while an async action is underway.
It accepts some state as an argument and returns a copy of that state that can be different during the duration of an async action such as a network request.
You provide a function that takes the current state and the input to the action, and returns the optimistic state to be used while the action is pending.

This state is called the “optimistic” state because it is usually used to immediately present the user with the result of performing an action, even though the action actually takes time to complete.
    `,
      doc: "https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations#optimistic-updates",
    },
  },
  security: {
    taint: {
      path: "taint",
      title: "Taint",
      description: `
A Client Component should never accept objects that carry sensitive data.
Ideally, the data fetching functions should not expose data that the current user should not have access to. Sometimes mistakes happen during refactoring. To protect against these mistakes happening down the line we can “taint” the user object in our data API.
  `,
      doc: "https://nextjs.org/docs/app/building-your-application/data-fetching/patterns#preventing-sensitive-data-from-being-exposed-to-the-client",
    },
  },
  showcases: {
    "service-e-commerce": {
      path: "service-e-commerce",
      title: "Electronic Commerce",
      description: `
This example is for an e-commerce site that uses segment, grouping, intercepting, and parallel.

Path
- /admin "(admin)"
- / "(public)"
- /foods/[itemId] (with intercepting)
- /sign-in {2}(with intercepting)
    `,
      doc: "https://nextjs.org/docs/app/building-your-application/routing/intercepting-routes",
    },
  },
}) satisfies Record<Kind, Record<string, Meta>>;
