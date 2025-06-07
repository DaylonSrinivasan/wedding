"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import { Language, STRINGS } from '../../../public/strings';

interface AccommodationProps {
    language: Language;
    img: StaticImageData;
    title: string;
    hotelName: string;
    datesAvailable: string;
    price: string;
    location: string;
    locationUrl: string;
    transportation: string;
    bookingUrl?: string | null;
    bookingInfo?: string | null;
    alternatives: string;
}

const Accommodation: React.FC<AccommodationProps> = ({ language, img, title, hotelName, datesAvailable, price, location, locationUrl, transportation, bookingUrl, bookingInfo, alternatives }) => {
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
                    alt={hotelName}
                    className="rounded-lg h-auto max-h-[50vh] w-full object-cover"
                />
            </div>
            <div className="mt-6 md:mt-0 md:ml-6 text-left font-text text-gray-800 w-full md:w-1/2">
                <h2 className="text-3xl font-semibold text-gray-900 mb-2">{title}</h2>
                <p className="text-xl text-gray-700 mb-4">{hotelName}</p>
                <p className="text-lg text-gray-600 mb-2">
                    <strong>{STRINGS.DATES_AVAILABLE[language]}:</strong> {datesAvailable}
                </p>
                <p className="text-lg text-gray-600 mb-2">
                    <strong>{STRINGS.PRICE[language]}:</strong> {price}
                </p>
                <p className="text-lg text-gray-600 mb-2">
                    <strong>{STRINGS.LOCATION[language]}:</strong> {" "}
                    {locationUrl && (
                        <a
                            href={locationUrl}
                            className="text-blue-500 hover:underline"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {location}
                        </a>
                    )}
                </p>
                <p className="text-lg text-gray-600 mb-2">
                    <strong>{STRINGS.TRANSPORTATION[language]}:</strong> {transportation}
                </p>
                <p className="text-lg text-gray-600 mb-2">
                    <strong>{STRINGS.BOOKING[language]}: </strong> {bookingInfo}
                    {bookingUrl && (
                        <>
                            <a
                                href={bookingUrl}
                                className="text-blue-500 hover:underline"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {STRINGS.HERE[language]}
                            </a>
                        </>
                    )}
                </p>
                <p className="text-lg text-gray-600 mb-2">
                    <strong>{STRINGS.ALTERNATIVES[language]}:</strong> {alternatives}
                </p>
            </div>
        </motion.div>
    );
};

export default Accommodation;
