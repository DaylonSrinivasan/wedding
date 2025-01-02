"use client";

import { useState } from "react";
import Header from "./Components/Header/Header";
import Welcome from "./Components/Welcome/Welcome";
import Footer from "./Components/Footer/Footer";

export default function Home() {
    const [language, setLanguage] = useState<'en' | 'jp'>('en');

    const handleLanguageChange = (newLanguage: 'en' | 'jp') => {
        setLanguage(newLanguage);
    };

    return (
        <div>
            <Header language={language} onLanguageChange={handleLanguageChange} />
            <Welcome language={language} />
            <Footer language={language}/>
        </div>
    );
}