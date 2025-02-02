"use client";

import React from "react";
import SectionHeader from "../SectionHeader/SectionHeader";
import Section from "../Section/Section";
import { Language, STRINGS } from '../../../public/strings';

interface FaqProps {
    language: Language;
}

type QA = {
    QUESTION: Record<Language, string>;
    ANSWER: Record<Language, string | string[]>;
};

const Faq: React.FC<FaqProps> = ({ language }) => {
    return (
        <Section background="/images/plain-background-4.jpg">
            <SectionHeader text={STRINGS.FREQUENTLY_ASKED_QUESTIONS_TITLE[language]} />

            <div className="flex flex-col items-center justify-center mt-6 w-full">
                <div className="text-center font-text text-gray-800 w-full">
                    <div>
                        {(STRINGS.FREQUENTLY_ASKED_QUESTIONS as QA[]).map((qa, index) =>
                            qa.QUESTION[language] && qa.ANSWER[language] ? (
                                <div key={index} className="p-4">
                                    <div className="mb-6">
                                        <h3 className="text-2xl font-semibold mb-2">{qa.QUESTION[language]}</h3>
                                        <p className="text-xl leading-relaxed">
                                            {Array.isArray(qa.ANSWER[language])
                                                ? (qa.ANSWER[language] as string[]).map((a, i) => (
                                                    <React.Fragment key={i}>{a}<br /></React.Fragment>
                                                ))
                                                : qa.ANSWER[language]}
                                        </p>
                                    </div>
                                </div>
                            ) : null
                        )}
                    </div>

                </div>
            </div>
        </Section>
    );
};

export default Faq;
