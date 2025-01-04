import React from "react";
import EngagementPhoto from '../../../public/engagement-shot.jpg';
import { motion } from 'framer-motion';
import Event from '../Event/Event';
import SectionHeader from '../SectionHeader/SectionHeader';
import Section from '../Section/Section';

interface EventsProps {
    language: 'en' | 'jp';
}

const Events: React.FC<EventsProps> = ({ language }) => {
    const textContent = {
        en: {
            header: "Events",
            usWedding: {
                title: "US Wedding",
                description: "Ceremony, cocktail hour, festivities and dancing! Dinner and drinks will be provided.",
                time: "5:00PM - 10:00 PM, August 15, 2025",
                location: "Saratoga Springs, California",
                dressCode: "Cocktail attire: cocktail dresses, suits + slacks, something comfortable!",
                rsvpForm: "https://docs.google.com/forms/d/e/1FAIpQLSe0RH6C8ISg1NsCzubs2L48sMtQQdKY7QPKUiAgMB1OYDiNqg/viewform?usp=sharing"
            },
            usDinner: {
                title: "US Dinner Party",
                description: "Help us post-game this wedding :) Daylon's gonna reserve a private dining area in a nice restaurant; come party with us after the wedding!",
                time: "7:00 PM, August 16, 2025",
                location: "TBD",
                dressCode: "Be you :)",
                rsvpForm: "https://docs.google.com/forms/d/e/1FAIpQLSe0RH6C8ISg1NsCzubs2L48sMtQQdKY7QPKUiAgMB1OYDiNqg/viewform?usp=sharing"
            },
            japanWedding: {
                title: "Japan Wedding",
                description: "Our Japan wedding!",
                time: "September 20, 2025",
                location: "Tokyo, Japan",
                dressCode: "Not sure yet, but western cocktail attire is probably fine.",
                rsvpForm: "https://docs.google.com/forms/d/e/1FAIpQLSfuZ5C76VrQaDunwKtq5BeuBZ3LboV9JkhpvWcaYKddiPe1QA/viewform?usp=sharing"
            }
        },
        jp: {
            header: "イベント",
            usWedding: {
                title: "アメリカの結婚式",
                description: "式典、カクテルタイム、楽しいひとときとダンス！ディナーと飲み物が提供されます。",
                time: "2025年8月15日 17:00〜22:00",
                location: "カリフォルニア州サラトガスプリングス",
                dressCode: "カクテルドレス、スーツ、または快適な服装でお越しください。",
                rsvpForm: "https://docs.google.com/forms/d/e/1FAIpQLSe0RH6C8ISg1NsCzubs2L48sMtQQdKY7QPKUiAgMB1OYDiNqg/viewform?usp=sharing"
            },
            usDinner: {
                title: "アメリカのディナーパーティー",
                description: "結婚式の後、一緒に食事をしませんか？デイロンが素敵なレストランのプライベートダイニングエリアを予約します！",
                time: "2025年8月16日 19:00〜",
                location: "未定",
                dressCode: "お好きな服装でお越しください。",
                rsvpForm: "https://docs.google.com/forms/d/e/1FAIpQLSe0RH6C8ISg1NsCzubs2L48sMtQQdKY7QPKUiAgMB1OYDiNqg/viewform?usp=sharing"
            },
            japanWedding: {
                title: "日本の結婚式",
                description: "私たちの日本での結婚式！",
                time: "2025年9月20日",
                location: "東京都",
                dressCode: "まだ未定ですが、西洋風のカクテルドレスやスーツが無難です。",
                rsvpForm: "https://docs.google.com/forms/d/e/1FAIpQLSfuZ5C76VrQaDunwKtq5BeuBZ3LboV9JkhpvWcaYKddiPe1QA/viewform?usp=sharing"
            }
        }
    };

    const { header, usWedding, usDinner, japanWedding } = textContent[language];

    return (
        <Section>
            <SectionHeader text={header} />
            <div className="flex w-full overflow-x-auto space-x-6 scrollbar-hide">
                <motion.div
                    className="flex-shrink-0 w-full"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Event
                        img={EngagementPhoto}
                        title={usWedding.title}
                        description={usWedding.description}
                        time={usWedding.time}
                        location={usWedding.location}
                        dressCode={usWedding.dressCode}
                        rsvpForm={usWedding.rsvpForm}
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
                        img={EngagementPhoto}
                        title={usDinner.title}
                        description={usDinner.description}
                        time={usDinner.time}
                        location={usDinner.location}
                        dressCode={usDinner.dressCode}
                        rsvpForm={usDinner.rsvpForm}
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
                        img={EngagementPhoto}
                        title={japanWedding.title}
                        description={japanWedding.description}
                        time={japanWedding.time}
                        location={japanWedding.location}
                        dressCode={japanWedding.dressCode}
                        rsvpForm={japanWedding.rsvpForm}
                    />
                </motion.div>
            </div>
        </Section>
    );
};

export default Events;
