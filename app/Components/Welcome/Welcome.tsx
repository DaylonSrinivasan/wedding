"use client";

import React from "react";
import Image from 'next/image';
import EngagementPhoto from '../../../public/images/engagement-shot.jpg';
import { Language, STRINGS} from '../../../public/strings';
import { motion } from 'framer-motion';
import SectionHeader from '../SectionHeader/SectionHeader';
import Section from '../Section/Section';


interface WelcomeProps {
    language: Language
}

const Welcome: React.FC<WelcomeProps> = ({ language }) => {
    return (
        <Section>
            <SectionHeader text={STRINGS.WERE_GETTING_MARRIED[language]} />

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
                    {STRINGS.WELCOME_MESSAGE[language].map((paragraph, index) => (
                        <p key={index} className="text-2xl leading-relaxed mb-4">{paragraph}</p>
                    ))}
                </motion.div>
            </div>
        </Section>
    );
};

export default Welcome;
