"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";

interface EventProps {
    img: StaticImageData;
    title: string;
    description: string;
    time: string;
    location: string;
    dressCode: string;
    rsvpForm: string;
}

const Event: React.FC<EventProps> = ({ img, title, description, time, location, dressCode, rsvpForm }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex flex-col md:flex-row items-center justify-between p-6 rounded-lg w-full"
        >
            <div className="w-full md:w-1/2">
                <Image
                    src={img}
                    alt={title}
                    className="rounded-lg h-auto max-h-[50vh] w-full object-cover"
                />
            </div>
            <div className="mt-6 md:mt-0 md:ml-6 text-left font-serif text-gray-800 w-full md:w-1/2">
                <h2 className="text-3xl font-semibold text-gray-900 mb-2">{title}</h2>
                <p className="text-xl text-gray-700 mb-4">{description}</p>
                <p className="text-lg text-gray-600 mb-2">
                    <strong>Time:</strong> {time}
                </p>
                <p className="text-lg text-gray-600 mb-2">
                    <strong>Location:</strong> {location}
                </p>
                <p className="text-lg text-gray-600 mb-2">
                    <strong>Dress Code:</strong> {dressCode}
                </p>
                <a
                    href={rsvpForm}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg text-blue-600 underline hover:text-blue-800"
                >
                    RSVP Here
                </a>
            </div>
        </motion.div>
    );
};

export default Event;
