# Next.js App Router Training

[This site](https://nextjs-app-router-training.vercel.app/) introduces various basic patterns for Next.js app router to understand how to work it.

This project aims to

- design for beginners to understand
- visitors can see the code and understand how it works
- eliminating unnecessary code as much as possible to focus on Next.js code
- covering many patterns for app router

## Examples

| Example                      | Kind                | Status |
| ---------------------------- | ------------------- | ------ |
| Client and Server Components | basic               | ✅     |
| Overwriting Metadata         | basic               | ✅     |
| Nesting Layouts              | basic               | ✅     |
| Template                     | basic               | ✅     |
| Grouping                     | route groups        | ✅     |
| Loading Immediately          | loading             | ✅     |
| Loading with Streaming       | loading             | ✅     |
| Loading with Preloading Data | loading             | ✅     |
| Error Immediately            | error               | ✅     |
| Not Found                    | error               | ✅     |
| A Single Segment             | dynamic routes      | ✅     |
| Catch-all Segments           | dynamic routes      | ✅     |
| Optional Catch-all Segments  | dynamic routes      | ✅     |
| Parallel Routes              | parallel routes     | ✅     |
| Conditional Routes           | parallel routes     | ✅     |
| Intercepting Routes          | intercepting routes | ✅     |
| Modal with Parallel Routes   | intercepting routes | ✅     |
| Static Rendering             | full route cache    | ✅     |
| Dynamic Rendering            | full route cache    | ✅     |
| Revalidating                 | full route cache    | ✅     |
| Electronic Commerce          | showcases           | ✅     |
| Route Handlers               | route handlers      | ✅     |
| Server Actions               | server actions      | ✅     |
| Non-form Elements            | server actions      | ✅     |
| Optimistic Updates           | server actions      | ✅     |
| Revalidating data            | server actions      |        |
| Taint                        | security            | ✅     |

_This project doesn't have `fetch` section until now._

## Adding a new sample

Welcome to submitting a new example but please write simplified code as much as possible to understand beginners!

```sh
$ git clone git@github.com:hiroppy/nextjs-app-router-training.git
$ cd nextjs-app-router-training
$ npm i
$ mkdir src/app/examples/new-example
# adding code to src/app/examples/new-example
$ # editing src/app/examples/data.ts to add meta data, please refer type definitions
$ npm run generate
$ # editing a table in README.md
```
