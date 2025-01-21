import React from "react";
import SaratogaSpringsImage from '../../../public/images/SaratogaSprings.jpg';
import BellClassicImage from '../../../public/images/bellclassic.jpg';
import TokyoBarImage from '../../../public/images/TokyoBar.jpg';
import BarImage from '../../../public/images/bar.jpg';

import { motion } from 'framer-motion';
import Event from '../Event/Event';
import SectionHeader from '../SectionHeader/SectionHeader';
import Section from '../Section/Section';
import { Language, STRINGS } from '../../../public/strings';

interface EventsProps {
    language: Language
}

const Events: React.FC<EventsProps> = ({ language }) => {

    return (
        <Section background="/images/plain-background-2.jpg">
            <SectionHeader text={STRINGS.EVENTS[language]} />
            <div className="flex w-full overflow-x-auto space-x-6 scrollbar-hide">
                <motion.div
                    className="flex-shrink-0 w-full"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Event
                        language={language}
                        img={SaratogaSpringsImage}
                        title={STRINGS.CALIFORNIA_WEDDING.TITLE[language]}
                        description={STRINGS.CALIFORNIA_WEDDING.DESCRIPTION[language]}
                        time={STRINGS.CALIFORNIA_WEDDING.TIME[language]}
                        location={STRINGS.CALIFORNIA_WEDDING.LOCATION[language]}
                        dressCode={STRINGS.CALIFORNIA_WEDDING.DRESS_CODE[language]}
                    />
                </motion.div>
                <motion.div
                    className="flex-shrink-0 w-full"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Event
                        language={language}
                        img={BarImage}
                        title={STRINGS.CALIFORNIA_DINNER.TITLE[language]}
                        description={STRINGS.CALIFORNIA_DINNER.DESCRIPTION[language]}
                        time={STRINGS.CALIFORNIA_DINNER.TIME[language]}
                        location={STRINGS.CALIFORNIA_DINNER.LOCATION[language]}
                        dressCode={STRINGS.CALIFORNIA_DINNER.DRESS_CODE[language]}
                    />
                </motion.div>
                <motion.div
                    className="flex-shrink-0 w-full"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Event
                        language={language}
                        img={BellClassicImage}
                        title={STRINGS.JAPAN_WEDDING.TITLE[language]}
                        description={STRINGS.JAPAN_WEDDING.DESCRIPTION[language]}
                        time={STRINGS.JAPAN_WEDDING.TIME[language]}
                        location={STRINGS.JAPAN_WEDDING.LOCATION[language]}
                        dressCode={STRINGS.JAPAN_WEDDING.DRESS_CODE[language]}
                    />
                </motion.div>
                <motion.div
                    className="flex-shrink-0 w-full"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Event
                        language={language}
                        img={TokyoBarImage}
                        title={STRINGS.JAPAN_DINNER.TITLE[language]}
                        description={STRINGS.JAPAN_DINNER.DESCRIPTION[language]}
                        time={STRINGS.JAPAN_DINNER.TIME[language]}
                        location={STRINGS.JAPAN_DINNER.LOCATION[language]}
                        dressCode={STRINGS.JAPAN_DINNER.DRESS_CODE[language]}
                    />
                </motion.div>
            </div>
        </Section>
    );
};

export default Events;
