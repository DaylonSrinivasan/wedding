"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeader from "../SectionHeader/SectionHeader";
import Section from "../Section/Section";

interface RegistryProps {
    language: 'en' | 'jp';
}

const Registry: React.FC<RegistryProps> = ({ language }) => {
    const textContent = {
        en: {
            header: "Registry",
            RegistryInfo: [
                "No registry! Rika and Daylon are both minimalists - your company is more than enough, I promise!",
                "Really really!",
                "...",
                "Still here? If you want to send some cash, we'll have a gift jar at the venue :).",
                "Or you can just send some Bitcoin that works too."
            ],
        },
        jp: {
            header: "レジストリ",
            RegistryInfo: [
                "レジストリーはありません！リカとデイロンは二人ともミニマリストです。皆さんが来てくださるだけで十分です、本当に！",
                "本当に本当に！",
                "...",
                "まだ見てますか？もし現金を贈りたい場合、会場にギフトジャーを用意しておきます :)",
                "それか、Bitcoin を送っていただいても大丈夫です。"
            ],
            
        },
    };

    const { header, RegistryInfo } = textContent[language];

    return (
        <Section>
            <SectionHeader text={header} />

            <div className="flex flex-col items-center justify-center mt-6">
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="text-left font-serif text-gray-800"
                >
                    {RegistryInfo.map((paragraph, index) => (
                        <p key={index} className="text-2xl leading-relaxed mb-4">{paragraph}</p>
                    ))}
                </motion.div>
            </div>
        </Section>
    );
};

export default Registry;
