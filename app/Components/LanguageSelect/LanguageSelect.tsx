"use client";

import React from "react";
import { motion } from 'framer-motion';
import Section from '../Section/Section';
import { Language, STRINGS} from '../../../public/strings';



interface LanguageSelectProps {
    language: Language;
    onLanguageChange: (language: Language) => void;
}

const LanguageSelect: React.FC<LanguageSelectProps> = ({ language, onLanguageChange }) => {

    return (
        <Section>
            {/* Animated Text */}
            <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="text-5xl font-serif font-bold text-black drop-shadow-lg mb-6"
            >
                {STRINGS.RIKA_AND_DAYLON[language]}
            </motion.h1>

            {/* Language selection buttons */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5, ease: "easeOut", delay: 1.5 }} // Delay added for the buttons
                className="flex space-x-4"
            >
                <button
                    onClick={() => onLanguageChange(Language.ENGLISH)}
                    className={`px-4 py-2 rounded-lg text-lg font-medium ${
                        language === Language.ENGLISH
                            ? 'bg-orange-600 text-white shadow-md'
                            : 'bg-orange-200 text-orange-800 hover:bg-orange-300'
                    } transition-all`}
                >
                    English
                </button>
                <button
                    onClick={() => onLanguageChange(Language.JAPANESE)}
                    className={`px-4 py-2 rounded-lg text-lg font-medium ${
                        language ===  Language.JAPANESE
                            ? 'bg-orange-600 text-white shadow-md'
                            : 'bg-orange-200 text-orange-800 hover:bg-orange-300'
                    } transition-all`}
                >
                    日本語
                </button>
            </motion.div>
        </Section>
    );
};

export default LanguageSelect;
