"use client";

import React from "react";
import Image from 'next/image';
import EngagementPhoto from '../../../public/engagement-shot.jpg';
import { motion } from 'framer-motion';

interface ScheduleProps {
    language: 'en' | 'jp';
}

const Schedule: React.FC<ScheduleProps> = ({ language }) => {
    const textContent = {
        en: {
            title: "Rika Yokoji and Daylon Srinivasan",
            time: "5:00 PM on Friday, August 15, 2025",
            location: "Saratoga Springs",
            address: "22801 Big Basin Way",
            city: "Saratoga, CA 95070",
        },
        jp: {
            title: "リカ・ヨコジ と デイロン・スリニヴァサン",
            time: "2025年8月15日（金曜日）午後5時",
            location: "サラトガ・スプリングス",
            address: "22801 ビッグ・ベイシン・ウェイ",
            city: "サラトガ, CA 95070",
        },
    };

    const { title, time, location, address, city } = textContent[language];

    return (
        <section className="flex items-center justify-between p-6">
            {/* Engagement photo */}
            <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="w-1/2"
            >
                <Image
                    src={EngagementPhoto}
                    alt="Engagement photo"
                    className="rounded-lg"
                />
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: -300 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.75 }}
                className="ml-6 text-left font-serif text-gray-800"
            >
                <h2 className="text-3xl mb-4 font-bold">{title}</h2>
                <p className="text-lg mb-2">{time}</p>
                <p className="text-lg mb-2">{location}</p>
                <p className="text-lg mb-2">{address}</p>
                <p className="text-lg">{city}</p>
            </motion.div>
        </section>
    );
};

export default Schedule;
