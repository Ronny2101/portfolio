"use client";

import { Suspense, lazy } from "react";

const HeroScene = lazy(() => import("./HeroScene"));

export default function SceneWrapper() {
  return (
    <div className="absolute inset-0 -z-10">
      <Suspense fallback={null}>
        <HeroScene />
      </Suspense>
    </div>
  );
}
