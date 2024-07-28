import React from "react";

export default function Button({
    text,
    link
}: {
    text: string,
    link: string
}) {
    return (
        <a href={link} className="my-2 py-3 rounded-lg font-semibold bg-[#333333] w-full text-center text-white cursor-pointer transition-transform hover:scale-105">
            {text}
        </a>
    );
}
