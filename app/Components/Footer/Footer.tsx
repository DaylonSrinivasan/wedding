"use client";

import React, { useState } from "react";

interface FooterProps {
    language: 'en' | 'jp';
}

const Footer: React.FC<FooterProps> = ({ language }) => {
    const [isVisible, setIsVisible] = useState(true);

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

    const currentText = textContent[language] || textContent['en'];

    return (
        <main className="relative w-full">
            <footer
                className={`absolute bottom-0 w-full py-4 bg-gray-800 text-center flex items-center justify-center relative transition-opacity duration-300 ${
                    isVisible ? "opacity-100 visible" : "opacity-0 invisible"
                }`}
            >
                <p
                    className="text-sm font-sans text-white"
                    style={{ fontFamily: "Inter, sans-serif" }}
                >
                    {currentText.madeWith} <span className="text-red-500">{currentText.heart}</span>.{" "}
                    {currentText.seeCode}{" "}
                    <a
                        href="https://github.com/daylonsrinivasan/wedding"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 underline hover:text-blue-300"
                    >
                        {currentText.github}
                    </a>
                    !
                </p>
                <button
                    onClick={() => setIsVisible(false)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-xs bg-transparent hover:text-red-500 focus:outline-none"
                    aria-label="Dismiss footer"
                >
                    ✖
                </button>
            </footer>
        </main>
    );
};

export default Footer;
