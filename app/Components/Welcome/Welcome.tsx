"use client";

import React from "react";
import Image from 'next/image';
import EngagementPhoto from '../../../public/engagement-shot.jpg';
import { motion } from 'framer-motion';
import SectionHeader from '../SectionHeader/SectionHeader'; // Import the SectionHeader component

interface WelcomeProps {
    language: 'en' | 'jp';
}

const Welcome: React.FC<WelcomeProps> = ({ language }) => {
    const textContent = {
        en: {
            header: "Welcome",
            welcomeMessage: [
                "Welcome to our wedding website! We are absolutely thrilled to have you here to celebrate with us!",
                "Get ready for a day full of love, laughter, happy tears, and maybe a few surprises along the way.",
                "Feel free to explore the rest of this page for all the details.",
                "Got questions? Daylon and Rika are just a message away!"
            ],
        },
        jp: {
            header: "ようこそ",
            welcomeMessage: [
                "私たちの結婚式のウェブサイトへようこそ！一緒にお祝いできることをとても嬉しく思っています！",
                "愛と笑い、幸せな涙、そしていくつかのサプライズに満ちた一日をお楽しみください。",
                "詳細はこのページを自由に探してみてください。",
                "質問がありますか？デイロンとリカにお気軽にメッセージを送ってください！"
            ],            
        },
    };

    const { header, welcomeMessage } = textContent[language];

    return (
        <section className="flex flex-col items-center justify-center p-6"> {/* Use flex-col to stack items */}
            <SectionHeader text={header} /> {/* Place header at the top */}

            <div className="flex flex-col md:flex-row items-center justify-between mt-6"> {/* Added mt-6 for space */}
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
                    {welcomeMessage.map((paragraph, index) => (
                        <p key={index} className="text-2xl leading-relaxed mb-4">{paragraph}</p>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Welcome;
