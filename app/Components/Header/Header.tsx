"use client";

import React from "react";
import { motion } from 'framer-motion';

interface HeaderProps {
    language: 'en' | 'jp';
    onLanguageChange: (language: 'en' | 'jp') => void;
}

const Header: React.FC<HeaderProps> = ({ language, onLanguageChange }) => {
    // Texts for different languages
    const headerText = language === 'en' ? 'Rika and Daylon' : 'リカとデイロン';

    return (
        <main className="relative w-full h-screen flex flex-col items-center justify-center">
            {/* Animated Text */}
            <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="text-5xl font-serif font-bold text-black drop-shadow-lg mb-6"
            >
                {headerText}
            </motion.h1>

            {/* Language selection buttons */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5, ease: "easeOut", delay: 1.5 }} // Delay added for the buttons
                className="flex space-x-4"
            >
                <button
                    onClick={() => onLanguageChange('en')}
                    className={`px-4 py-2 rounded-lg text-lg font-medium ${
                        language === 'en'
                            ? 'bg-orange-600 text-white shadow-md'
                            : 'bg-orange-200 text-orange-800 hover:bg-orange-300'
                    } transition-all`}
                >
                    English
                </button>
                <button
                    onClick={() => onLanguageChange('jp')}
                    className={`px-4 py-2 rounded-lg text-lg font-medium ${
                        language === 'jp'
                            ? 'bg-orange-600 text-white shadow-md'
                            : 'bg-orange-200 text-orange-800 hover:bg-orange-300'
                    } transition-all`}
                >
                    日本語
                </button>
            </motion.div>
        </main>
    );
};

export default Header;
