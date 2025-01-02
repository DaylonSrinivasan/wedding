import React from "react";
import EngagementPhoto from '../../../public/engagement-shot.jpg';
import { motion } from 'framer-motion';
import Event from '../Event/Event';
import SectionHeader from '../SectionHeader/SectionHeader';

interface EventsProps {
    language: 'en' | 'jp';
}

const Events: React.FC<EventsProps> = ({ language }) => {
    const textContent = {
        en: {
            header: "Events",
            usWedding: {
                title: "US Wedding",
                description: "Our California wedding!",
                time: "August 15, 2025",
                location: "Saratoga Springs, California"
            },
            japanWedding: {
                title: "Japan Wedding",
                description: "Our Japan wedding!",
                time: "September 20, 2025",
                location: "Tokyo, Japan"
            }
        },
        jp: {
            header: "イベント",
            usWedding: {
                title: "アメリカの結婚式",
                description: "カリフォルニアでの結婚式！",
                time: "2025年8月15日",
                location: "カリフォルニア州サラトガスプリングス"
            },
            japanWedding: {
                title: "日本の結婚式",
                description: "日本での結婚式！",
                time: "2025年9月20日",
                location: "東京都"
            }
        }
    };
    

    const { header, usWedding, japanWedding } = textContent[language];

    return (
        <section className="flex flex-col items-center justify-center p-6">
            <SectionHeader text={header} />
            <div className="flex w-full overflow-x-auto">
                <motion.div
                    className="flex-shrink-0 w-full"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Event img={EngagementPhoto} title={usWedding.title} description={usWedding.description} time={usWedding.time} location={usWedding.location} />
                </motion.div>
                <motion.div
                    className="flex-shrink-0 w-full"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Event img={EngagementPhoto} title={japanWedding.title} description={japanWedding.description} time={japanWedding.time} location={japanWedding.location} />
                </motion.div>
            </div>
        </section>
    );
};

export default Events;
