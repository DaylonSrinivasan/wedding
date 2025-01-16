"use client";

import { Language, STRINGS} from '../../../public/strings';
import React, { useState } from "react";

interface FooterProps {
    language: Language;
}

const Footer: React.FC<FooterProps> = ({ language }) => {
    const [isVisible, setIsVisible] = useState(true);


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
                    {STRINGS.MADE_WITH[language]} <span className="text-red-500">❤</span>.{" "}
                    {STRINGS.SEE_CODE_ON[language]}{" "}
                    <a
                        href="https://github.com/daylonsrinivasan/wedding"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 underline hover:text-blue-300"
                    >
                        Github
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
