"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaAngleDoubleDown } from "react-icons/fa";
import Section from "../Section/Section";
import { Language, STRINGS } from "../../../public/strings";

interface LanguageSelectProps {
    language: Language;
    onLanguageChange: (language: Language) => void;
}

const LanguageSelect: React.FC<LanguageSelectProps> = ({ language, onLanguageChange }) => {
    return (
        <Section>
            <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="text-5xl text-center font-elegant font-bold text-black drop-shadow-lg mb-6"
            >
                {STRINGS.RIKA_AND_DAYLON[language]}
            </motion.h1>

            {/* Language selection buttons */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5, ease: "easeOut", delay: 1.5 }}
                className="flex space-x-4"
            >
                <button
                    onClick={() => onLanguageChange(Language.ENGLISH)}
                    className={`px-4 py-2 rounded-lg text-lg font-medium font-text font-title ${language === Language.ENGLISH
                        ? "bg-orange-600 text-white shadow-md"
                        : "bg-orange-200 text-orange-800 hover:bg-orange-300"
                        } transition-all`}
                >
                    English
                </button>
                <button
                    onClick={() => onLanguageChange(Language.JAPANESE)}
                    className={`px-4 py-2 rounded-lg text-lg font-medium font-text font-title ${language === Language.JAPANESE
                        ? "bg-orange-600 text-white shadow-md"
                        : "bg-orange-200 text-orange-800 hover:bg-orange-300"
                        } transition-all`}
                >
                    日本語
                </button>
            </motion.div>

            {/* Bouncing down arrow with delayed appearance */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3, duration: 1.5, ease: "easeOut" }}
                className="mt-8 flex justify-center animate-bounce"
            >
                <FaAngleDoubleDown className="text-orange-600 text-4xl" />
            </motion.div>
        </Section>
    );
};

export default LanguageSelect;
