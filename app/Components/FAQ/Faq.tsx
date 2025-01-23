"use client";

import React from "react";
import Slider from "react-slick";
import SectionHeader from "../SectionHeader/SectionHeader";
import Section from "../Section/Section";
import { Language, STRINGS } from '../../../public/strings';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface FaqProps {
    language: Language;
}

type QA = {
    QUESTION: Record<Language, string>;
    ANSWER: Record<Language, string | string[]>;
};

const Faq: React.FC<FaqProps> = ({ language }) => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <Section background="/images/plain-background-3.jpg">
            <SectionHeader text={STRINGS.FREQUENTLY_ASKED_QUESTIONS_TITLE[language]} />

            <div className="flex flex-col items-center justify-center mt-6 w-full">
                <div className="text-center font-serif text-gray-800 w-full">
                    <Slider {...settings}>
                        {(STRINGS.FREQUENTLY_ASKED_QUESTIONS as QA[]).reduce<QA[][]>((acc, _, i, arr) => {
                            if (i % 2 === 0) acc.push(arr.slice(i, i + 2));
                            return acc;
                        }, []).map((group, index) => (
                            <div key={index} className="p-4">
                                {group.map((qa, i) => (
                                    <div key={i} className="mb-6">
                                        <h3 className="text-2xl font-semibold mb-2">{qa.QUESTION[language]}</h3>
                                        <p className="text-xl leading-relaxed">
                                            {Array.isArray(qa.ANSWER[language])
                                                ? (qa.ANSWER[language] as string[]).map((a, j) => (
                                                    <React.Fragment key={j}>{a}<br /></React.Fragment>
                                                  ))
                                                : qa.ANSWER[language]}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </Section>
    );
};

export default Faq;
