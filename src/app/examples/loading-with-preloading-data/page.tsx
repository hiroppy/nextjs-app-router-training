import { Suspense } from "react";
import { Basic } from "./_components/basic";
import { Loading } from "./_components/loading";
import { Preload } from "./_components/preload";

// turn off full route cache for demo
export const dynamic = "force-dynamic";

export default async function Page() {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-gray-400">
        Preload component doesn't wait for serial communication
      </p>
      <div>
        <span>Preload: </span>
        <Suspense fallback={<Loading />}>
          <Preload />
        </Suspense>
      </div>
      <div>
        <span>Basic: </span>
        <Suspense fallback={<Loading />}>
          <Basic />
        </Suspense>
      </div>
    </div>
  );
}
