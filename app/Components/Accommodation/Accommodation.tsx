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
    locationAddress: string;
    locationUrl: string;
    locationInfo: string;
    bookingUrl?: string | null;
    bookingInfo: string;
    alternatives: string;
    transportation: string | string[];
    carpoolUrl?: string | null;
}

const Accommodation: React.FC<AccommodationProps> = ({ language, img, title, hotelName, datesAvailable, price, locationAddress, locationUrl, locationInfo, bookingUrl, bookingInfo, alternatives, transportation, carpoolUrl }) => {
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
                    <strong>{STRINGS.LOCATION[language]}:</strong>{" "}
                    <a
                        href={locationUrl}
                        className="text-blue-500 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {locationAddress}
                    </a>{" "}
                    {locationInfo}
                </p>
                <p className="text-lg text-gray-600 mb-2">
                    <strong>{STRINGS.BOOKING[language]}: </strong>
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
                    )} {bookingInfo}
                </p>
                <p className="text-lg text-gray-600 mb-2">
                    <strong>{STRINGS.ALTERNATIVES[language]}:</strong> {alternatives}
                </p>
                <br></br>
                <h2 className="text-3xl font-semibold text-gray-900 mb-2">{STRINGS.WEDDING_VENUE_TRANSPORTATION[language]}</h2>
                <div className="text-lg text-gray-600 mb-2">
                    {/* This is pretty hacky :^)
                        
                        Basically: We have a lot to say about California, and very little to say about Tokyo.
                        So, if it's an array, we hardcode to make it look pretty for California (e.g., bulleted list).
                        If it's a single element, we just output that element (Tokyo)
                    */}
                    {Array.isArray(transportation) ? (
                        <>
                            <div>
                                {transportation[0]}
                                <ul className="list-disc list-inside ml-4">
                                    <li>{transportation[1]}</li>
                                    <li>{transportation[2]}</li>
                                </ul>
                                <br></br>
                                {transportation[3]}{" "}
                                {carpoolUrl && (
                                    <a
                                        href={carpoolUrl}
                                        className="text-blue-500 hover:underline"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {STRINGS.HERE[language]}
                                    </a>)}
                            </div>
                        </>
                    ) : (
                        <div>
                            {transportation}
                        </div>)}
                </div>

            </div>
        </motion.div>
    );
};

export default Accommodation;
