"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import LanguageSelect from "./Components/LanguageSelect/LanguageSelect";
import Welcome from "./Components/Welcome/Welcome";
import Events from "./Components/Events/Events";
import Footer from "./Components/Footer/Footer";
import Travel from "./Components/Travel/Travel";
import Registry from "./Components/Registry/Registry";
import Gallery from "./Components/Gallery/Gallery";
import Envelope from "./Components/Envelope/Envelope";

import { Language, STRINGS } from "../public/strings";

export default function Home() {
    const [language, setLanguage] = useState<Language>(Language.ENGLISH);
    const [showButtons, setShowButtons] = useState(false);
    const [showHomepage, setShowHomepage] = useState(false);
    const [isEnvelopeClicked, setIsEnvelopeClicked] = useState(false);

    const envelopeFadeDuration = 1;
    const handleLanguageChange = (newLanguage: Language) => {
        setLanguage(newLanguage);
    };

    const languageSelectRef = useRef<HTMLDivElement | null>(null);
    const welcomeRef = useRef<HTMLDivElement | null>(null);
    const eventsRef = useRef<HTMLDivElement | null>(null);
    const travelRef = useRef<HTMLDivElement | null>(null);
    const registryRef = useRef<HTMLDivElement | null>(null);
    const galleryRef = useRef<HTMLDivElement | null>(null);

    const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
        ref.current?.scrollIntoView({ behavior: "smooth" });
    };

    // Hide buttons after a delay when scrolling stops
    useEffect(() => {
        let timeoutId: NodeJS.Timeout;

        const handleScroll = () => {
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
            setShowButtons(true); // Show buttons when user starts scrolling
            timeoutId = setTimeout(() => {
                setShowButtons(false);
            }, 2000); // Hide after 2 seconds of inactivity
        };

        window.addEventListener("scroll", handleScroll);

        // Cleanup event listener
        return () => {
            window.removeEventListener("scroll", handleScroll);
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
        };
    }, []);

    const handleEnvelopeClick = () => {
        setIsEnvelopeClicked(true);

        setTimeout(() => {
            setShowHomepage(true);
        }, envelopeFadeDuration * 1000);
    };

    return (
        <div className="relative">
            {!showHomepage ? (
                <motion.div
                    initial={{ opacity: 1 }}
                    animate={{ opacity: isEnvelopeClicked ? 0 : 1 }} // Fade to opacity 0 when clicked
                    transition={{ duration: envelopeFadeDuration }}
                >
                    <Envelope handleClick={handleEnvelopeClick} />
                </motion.div>
            ) : (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <motion.nav
                        className="fixed top-0 left-0 w-full flex justify-evenly items-center z-50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: showButtons ? 1 : 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <button
                            onClick={() => scrollToSection(languageSelectRef)}
                            className="flex-1 text-center py-2 px-4 bg-orange-400 text-white hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 transition duration-300"
                        >
                            {STRINGS.LANGUAGE[language]}
                        </button>
                        <button
                            onClick={() => scrollToSection(welcomeRef)}
                            className="flex-1 text-center py-2 px-4 bg-orange-400 text-white hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 transition duration-300"
                        >
                            {STRINGS.WELCOME[language]}
                        </button>
                        <button
                            onClick={() => scrollToSection(eventsRef)}
                            className="flex-1 text-center py-2 px-4 bg-orange-400 text-white hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 transition duration-300"
                        >
                            {STRINGS.EVENTS[language]}
                        </button>
                        <button
                            onClick={() => scrollToSection(travelRef)}
                            className="flex-1 text-center py-2 px-4 bg-orange-400 text-white hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 transition duration-300"
                        >
                            {STRINGS.TRAVEL[language]}
                        </button>
                        <button
                            onClick={() => scrollToSection(registryRef)}
                            className="flex-1 text-center py-2 px-4 bg-orange-400 text-white hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 transition duration-300"
                        >
                            {STRINGS.REGISTRY[language]}
                        </button>
                        <button
                            onClick={() => scrollToSection(galleryRef)}
                            className="flex-1 text-center py-2 px-4 bg-orange-400 text-white hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 transition duration-300"
                        >
                            {STRINGS.GALLERY[language]}
                        </button>
                    </motion.nav>

                    <div ref={languageSelectRef}>
                        <LanguageSelect language={language} onLanguageChange={handleLanguageChange} />
                    </div>
                    <div ref={welcomeRef}>
                        <Welcome language={language} />
                    </div>
                    <div ref={eventsRef}>
                        <Events language={language} />
                    </div>
                    <div ref={travelRef}>
                        <Travel language={language} />
                    </div>
                    <div ref={registryRef}>
                        <Registry language={language} />
                    </div>
                    <div ref={galleryRef}>
                        <Gallery language={language} />
                    </div>
                    <div>
                        <Footer language={language} />
                    </div>
                </motion.div>
            )}
        </div>
    );
}
