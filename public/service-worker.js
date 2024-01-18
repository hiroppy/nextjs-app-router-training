self.addEventListener("install", () => {
  console.log("service worker installed");
});

self.addEventListener("activate", () => {
  console.log("service worker activated");
});

self.addEventListener("fetch", (e) => {
  if (e.request.url.includes("_rsc")) {
    e.respondWith(
      (async () => {
        const res = await fetch(e.request);
        const createdAt = Date.now();

        // res.text() fails is when trying to read the same response stream twice.
        const clone = res.clone();

        clone.text().then((text) => {
          self.clients.matchAll().then((clients) => {
            for (const client of clients) {
              client.postMessage({
                url: e.request.url,
                createdAt,
                body: text,
              });
            }
          });
        });

        return res;
      })(),
    );
  }
});
