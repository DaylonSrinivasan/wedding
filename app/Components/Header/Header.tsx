"use client";

import React from "react";
import { motion } from 'framer-motion';


const Header = () => {
    return (
        <main className="relative w-full h-screen">
            {/* Animated Text */}
            <div className="absolute inset-0 flex items-center justify-center">
                <motion.h1
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="text-5xl font-serif font-bold text-black drop-shadow-lg"
                >
                    Rika and Daylon
                </motion.h1>
            </div>
        </main>
    );
};

export default Header;