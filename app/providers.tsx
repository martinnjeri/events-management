"use client";

import posthog from "posthog-js";
import { PostHogProvider as PHProvider } from "@posthog/react";
import { useEffect } from "react";

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const key = process.env.NEXT_PUBLIC_POSTHOG_KEY;
    if (!key) return;
    // These defaults set capture_pageview to "history_change", so App Router navigations also send $pageview.
    posthog.init(key, {
      api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
      defaults: "2026-08-30",
    });
  }, []);

  return <PHProvider client={posthog}>{children}</PHProvider>;
}
