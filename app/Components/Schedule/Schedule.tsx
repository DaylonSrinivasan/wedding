"use client";
import React from "react";
import Image from 'next/image';
import EngagementPhoto from '../../../public/engagement-shot.jpg';
import { motion } from 'framer-motion';

const Gallery = () => {
    return (
        <section className="flex items-center justify-between p-6">
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
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="ml-6 text-left font-serif text-gray-800"
            >
                <h2 className="text-3xl mb-4 font-bold">Rika Yokoji and Daylon Srinivasan</h2>
                <p className="text-lg mb-2">5:00PM on Friday, August 15, 2025</p>
                <p className="text-lg mb-2">Saratoga Springs</p>
                <p className="text-lg mb-2">22801 Big Basin Way</p>
                <p className="text-lg">Saratoga, CA 95070</p>
            </motion.div>
        </section>
    );
};

export default Gallery;
