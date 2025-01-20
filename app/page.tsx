"use client";

import { Merriweather, Dancing_Script } from 'next/font/google';

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LanguageSelect from "./Components/LanguageSelect/LanguageSelect";
import Welcome from "./Components/Welcome/Welcome";
import Events from "./Components/Events/Events";
import Footer from "./Components/Footer/Footer";
import Travel from "./Components/Travel/Travel";
import Registry from "./Components/Registry/Registry";
import Gallery from "./Components/Gallery/Gallery";
import NavBar from "./Components/NavBar/NavBar";

import Envelope from "./Components/Envelope/Envelope";

import { Language, STRINGS } from "../public/strings";

const merriweather = Merriweather({ subsets: ['latin'] , weight:"400"});

const dancingScripts = Dancing_Script({ subsets: ['latin'] });


export default function Home() {
    const [language, setLanguage] = useState<Language>(Language.ENGLISH);
    const [showNavBar, setShowNavBar] = useState(false);
    const [showHomepage, setShowHomepage] = useState(false);
    const [showEnvelope, setShowEnvelope] = useState(true);
    const envelopeFadeDelay = 0.5;
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
    const navLinks = [
        { ref: languageSelectRef, title: STRINGS.LANGUAGE[language] },
        { ref: welcomeRef, title: STRINGS.WELCOME[language] },
        { ref: eventsRef, title: STRINGS.EVENTS[language] },
        { ref: travelRef, title: STRINGS.TRAVEL[language] },
        { ref: registryRef, title: STRINGS.REGISTRY[language] },
        { ref: galleryRef, title: STRINGS.GALLERY[language] }
    ];

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
            setShowNavBar(true); // Show buttons when user starts scrolling
            timeoutId = setTimeout(() => {
                setShowNavBar(false);
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
        setTimeout(() => {
            setShowEnvelope(false);
        }, envelopeFadeDelay * 1000);
        setTimeout(() => {
            setShowHomepage(true);
        }, envelopeFadeDelay * 1000 + envelopeFadeDuration * 1000);
    };

    return (
        <div className={`relative ${merriweather.className} ${dancingScripts.className}`}>
            {!showHomepage ? (
                <motion.div
                    initial={{ opacity: 1 }}
                    animate={{
                        opacity: showEnvelope ? 1 : 0,
                        y: [0, -10, 0],
                        transition: {
                            opacity: { duration: envelopeFadeDuration },
                            y: {
                                duration: 1,
                                repeat: Infinity,
                                repeatType: "reverse",
                                ease: "easeInOut"
                            }
                        }
                    }}
                >
                    <Envelope handleClick={handleEnvelopeClick} />
                </motion.div>


            ) : (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <AnimatePresence>
                        {/* NavBar is always shown on small screens (below md) */}
                        <motion.div
                            key="mobile-nav"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            className="md:hidden"
                        >
                            <NavBar links={navLinks} onClick={scrollToSection} />
                        </motion.div>

                        {/* NavBar appears on larger screens based on scroll */}
                        <motion.div
                            key="desktop-nav"
                            className="hidden md:block"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: showNavBar ? 1 : 0 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <NavBar links={navLinks} onClick={scrollToSection} />
                        </motion.div>

                    </AnimatePresence>
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
