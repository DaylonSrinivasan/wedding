"use client";

import React from "react";
import { motion } from "framer-motion";

import { Language, STRINGS } from "../../../public/strings";

interface RSVPProps {
  language: Language;
}

const RSVP: React.FC<RSVPProps> = ({ language }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      className="flex justify-center w-full"
    >
      {/* RSVP Button */}
      <a
        href="https://your-google-form-link.com" // Replace with your actual Google Form link
        target="_blank"
        rel="noopener noreferrer"
        className="w-full px-12 py-6 bg-orange-600 text-white font-bold text-2xl rounded-lg shadow-md hover:bg-orange-700 transition-all text-center"
      >
        {STRINGS.RSVP[language]}
      </a>
    </motion.div>
  );
};

export default RSVP;
