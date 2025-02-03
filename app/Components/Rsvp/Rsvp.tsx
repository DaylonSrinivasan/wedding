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
      transition={{ duration: 1.5, ease: "easeOut" }}
      className="flex justify-center w-full"
    >
      {/* RSVP Button */}
      <a
        href="https://forms.fillout.com/t/qj9gjqXznKus"
        target="_blank"
        rel="noopener noreferrer"
        className="w-full px-12 py-6 bg-gradient-to-r from-orange-700 to-yellow-500 text-white font-bold text-3xl shadow-lg hover:from-orange-800 hover:to-yellow-600 transition-all duration-300 ease-in-out text-center"
      >
        {STRINGS.RSVP[language]}
      </a>
    </motion.div>
  );
};

export default RSVP;
