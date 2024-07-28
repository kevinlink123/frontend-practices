import { useState } from "react";

export default function FooterItem({
    title,
    description,
    link
}: {
    title: string,
    description: string,
    link: string
}) {
    return (
        <a
            href={link}
            className="group px-4 py-4 rounded-lg border border-transparent transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
            <h2 className="pb-4 font-semibold text-2xl">
                {title}{" "}
                <span className="inline-block transition-transform group-hover:translate-x-1">
                    -&gt;
                </span>
            </h2>
            <p className="m-0 font-extralight text-sm">
                {description}
            </p>
        </a>
    );
}
