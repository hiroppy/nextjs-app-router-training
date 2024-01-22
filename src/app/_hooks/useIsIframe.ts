import { useLayoutEffect, useState } from "react";

export function useIsEmbedded() {
  const [isEmbedded, setIsEmbedded] = useState(false);

  useLayoutEffect(() => {
    if (window.frameElement) {
      // TODO: remove when next.js's bug is fixed
      // see src/app/_template
      // document.querySelector("#header")?.remove();
      setIsEmbedded(true);
    }
  }, []);

  return isEmbedded;
}
