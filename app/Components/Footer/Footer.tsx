"use client";

import React from "react";

interface FooterProps {
    language: 'en' | 'jp';
}

const Footer: React.FC<FooterProps> = ({ language }) => {
    // Text content for different languages
    const textContent = {
        en: {
            madeWith: "Made with",
            heart: "<3",
            seeCode: "See the code on",
            github: "GitHub",
        },
        jp: {
            madeWith: "作成者",
            heart: "❤",
            seeCode: "コードをこちらで確認",
            github: "GitHub",
        },
    };

    const { madeWith, heart, seeCode, github } = textContent[language];

    return (
        <main className="relative w-full">
            {/* Footer */}
            <footer className="absolute bottom-0 w-full py-4 bg-gray-800 text-center">
                <p
                    className="text-sm font-sans text-white"
                    style={{ fontFamily: "Inter, sans-serif" }}
                >
                    {madeWith} <span className="text-red-500">{heart}</span>. {seeCode}{" "}
                    <a
                        href="https://github.com/daylonsrinivasan/wedding"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 underline hover:text-blue-300"
                    >
                        {github}
                    </a>
                    !
                </p>
            </footer>
        </main>
    );
};

export default Footer;
