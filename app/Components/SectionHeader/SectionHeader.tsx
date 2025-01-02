"use client";

import React from "react";
import { motion } from 'framer-motion';

interface SectionHeaderProps {
    text: string
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ text }) => {

    return (
        <div className="w-full flex flex-col items-center justify-center mt-6">
            {/* Animated Text */}
            <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="text-3xl font-serif font-bold text-black drop-shadow-lg mb-4"
            >
                {text}
            </motion.h1>
        </div>
    );
};

export default SectionHeader;
