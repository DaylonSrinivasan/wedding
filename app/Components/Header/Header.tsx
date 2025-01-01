"use client";

import React from "react";
import Image from 'next/image';
import { motion } from 'framer-motion';
import BackgroundImage from '../../../public/background.jpg';


const Header = () => {
    return (
        <main className="relative w-full h-screen">
            {/* Background Image */}
            <div className="absolute inset-0">
                <Image
                    src={BackgroundImage}
                    alt="Background"
                    layout="fill"
                    objectFit="cover"
                    className="z-0"
                />
            </div>

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