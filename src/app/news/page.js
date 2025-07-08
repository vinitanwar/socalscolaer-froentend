"use client";

import { Suspense } from "react";
import NewPage from "./NewPAgeContent";

export default function Page() {
  return (
    <Suspense fallback={<div className="text-center p-10">Loading...</div>}>
      <NewPage />
    </Suspense>
  );
}
