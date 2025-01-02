"use client";

import React from "react";
import Image from 'next/image';
import EngagementPhoto from '../../../public/engagement-shot.jpg';
import { motion } from 'framer-motion';
import SectionHeader from '../SectionHeader/SectionHeader'; // Import the SectionHeader component

interface EventsProps {
    language: 'en' | 'jp';
}

const Events: React.FC<EventsProps> = ({ language }) => {
    const textContent = {
        en: {
            header: "Events",
            text: "This section is a WIP.",
        },
        jp: {  
            header: "イベント",
            text: "This section is a WIP.",   
        },
    };

    const { header, text } = textContent[language];

    return (
        <section className="flex flex-col items-center justify-center p-6">
            <SectionHeader text={header} />

            <div className="flex flex-col md:flex-row items-center justify-between mt-6">
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="w-full md:w-1/2"
                >
                    <Image
                        src={EngagementPhoto}
                        alt="Engagement photo"
                        className="rounded-lg h-auto max-h-[50vh] w-full object-cover"
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: -300 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.75 }}
                    className="mt-6 md:mt-0 md:ml-6 text-left font-serif text-gray-800"
                >
                    <p className="text-2xl leading-relaxed mb-4">{text}</p>
                </motion.div>
            </div>
        </section>
    );
};

export default Events;
