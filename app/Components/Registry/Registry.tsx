"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeader from "../SectionHeader/SectionHeader";
import Section from "../Section/Section";
import { Language, STRINGS} from '../../../public/strings';


interface RegistryProps {
    language: Language;
}

const Registry: React.FC<RegistryProps> = ({ language }) => {
    return (
        <Section background="/images/plain-background-4.jpg">
            <SectionHeader text={STRINGS.REGISTRY[language]} />

            <div className="flex flex-col items-center justify-center mt-6">
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="text-left font-serif text-gray-800"
                >
                    {STRINGS.REGISTRY_INFO[language].map((paragraph, index) => (
                        <p key={index} className="text-2xl leading-relaxed mb-4">{paragraph}</p>
                    ))}
                </motion.div>
            </div>
        </Section>
    );
};

export default Registry;
