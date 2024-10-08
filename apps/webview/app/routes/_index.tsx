import type { MetaFunction } from "@remix-run/node";
import React from "react";
import { ClientOnly } from "remix-utils/client-only";

const LazyMap = React.lazy(() => import("../components/map"));

export const meta: MetaFunction = () => {
    return [{ title: "New Remix SPA" }, { name: "description", content: "Welcome to Remix (SPA Mode)!" }];
};

export default function Index() {
    return (
        <div className="font-sans p-4">
            <h1 className="text-3xl">Welcome to Remix (SPA Mode)</h1>
            <ul className="list-disc mt-4 pl-6 space-y-2">
                <li>
                    <a
                        className="text-blue-700 underline visited:text-purple-900"
                        target="_blank"
                        href="https://remix.run/guides/spa-mode"
                        rel="noreferrer"
                    >
                        SPA Mode Guide
                    </a>
                </li>
                <li>
                    <a
                        className="text-blue-700 underline visited:text-purple-900"
                        target="_blank"
                        href="https://remix.run/docs"
                        rel="noreferrer"
                    >
                        Remix Docs
                    </a>
                </li>
            </ul>
            <ClientOnly fallback={<p>Loading...</p>}>{() => <LazyMap />}</ClientOnly>
        </div>
    );
}
