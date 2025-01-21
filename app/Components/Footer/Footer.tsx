"use client";

import { Language, STRINGS } from '../../../public/strings';
import React from "react";

interface FooterProps {
    language: Language;
}

const Footer: React.FC<FooterProps> = ({ language }) => {
    return (
        <footer className="fixed bottom-0 left-0 w-full py-4 bg-gray-800 text-center flex items-center justify-center">
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
        </footer>
    );
};

export default Footer;
