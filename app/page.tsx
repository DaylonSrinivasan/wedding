"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Language from "./Components/Language/Language";
import Welcome from "./Components/Welcome/Welcome";
import Events from "./Components/Events/Events";
import Footer from "./Components/Footer/Footer";
import Travel from "./Components/Travel/Travel";
import Registry from "./Components/Registry/Registry";
import Gallery from "./Components/Gallery/Gallery";


export default function Home() {
    const [language, setLanguage] = useState<'en' | 'jp'>('en');
    const [showButtons, setShowButtons] = useState(true);

    const handleLanguageChange = (newLanguage: 'en' | 'jp') => {
        setLanguage(newLanguage);
    };

    const languageRef = useRef<HTMLDivElement | null>(null);
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

    return (
        <div className="relative">
            <motion.nav
                className="fixed top-0 left-0 w-full flex justify-evenly items-center z-50"
                initial={{ opacity: 0 }}
                animate={{ opacity: showButtons ? 1 : 0 }}
                transition={{ duration: 0.5 }}
            >
                <button
                    onClick={() => scrollToSection(languageRef)}
                    className="flex-1 text-center py-2 px-4 bg-orange-400 text-white hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 transition duration-300"
                >
                    Language
                </button>
                <button
                    onClick={() => scrollToSection(welcomeRef)}
                    className="flex-1 text-center py-2 px-4 bg-orange-400 text-white hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 transition duration-300"
                >
                    Welcome
                </button>
                <button
                    onClick={() => scrollToSection(eventsRef)}
                    className="flex-1 text-center py-2 px-4 bg-orange-400 text-white hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 transition duration-300"
                >
                    Events
                </button>
                <button
                    onClick={() => scrollToSection(travelRef)}
                    className="flex-1 text-center py-2 px-4 bg-orange-400 text-white hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 transition duration-300"
                >
                    Travel
                </button>
                <button
                    onClick={() => scrollToSection(registryRef)}
                    className="flex-1 text-center py-2 px-4 bg-orange-400 text-white hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 transition duration-300"
                >
                    Registry
                </button>
                <button
                    onClick={() => scrollToSection(galleryRef)}
                    className="flex-1 text-center py-2 px-4 bg-orange-400 text-white hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 transition duration-300"
                >
                    Gallery
                </button>
            </motion.nav>

            <div ref={languageRef}>
                <Language language={language} onLanguageChange={handleLanguageChange} />
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
        </div>
    );
}
