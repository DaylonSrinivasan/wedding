"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeader from "../SectionHeader/SectionHeader";
import Section from "../Section/Section";

interface TravelProps {
    language: 'en' | 'jp';
}

const Travel: React.FC<TravelProps> = ({ language }) => {
    const textContent = {
        en: {
            header: "Travel",
            travelInfo: [
                "No hotel block for our wedding, but we'll add some recommended hotels in the future!",
                "We recommend carpooling or using Uber to get to the venue. There's plenty of parking available!"
            ],
        },
        jp: {
            header: "交通案内",
            travelInfo: [
                "私たちの結婚式のためのホテルブロックはありませんが、後日おすすめのホテルを追加する予定です！",
                "会場には車でお越しいただくか、Uberをご利用いただくことをお勧めします。駐車場は十分にあります！"
            ],
        },
    };

    const { header, travelInfo } = textContent[language];

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
                    {travelInfo.map((paragraph, index) => (
                        <p key={index} className="text-2xl leading-relaxed mb-4">{paragraph}</p>
                    ))}
                </motion.div>
            </div>
        </Section>
    );
};

export default Travel;
