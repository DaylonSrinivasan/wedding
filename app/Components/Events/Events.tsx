import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SaratogaSpringsImage from '../../../public/images/SaratogaSprings.jpg';
import BellClassicImage from '../../../public/images/bellclassic.jpg';
import TokyoBarImage from '../../../public/images/TokyoBar.jpg';
import BarImage from '../../../public/images/bar.jpg';

import Event from '../Event/Event';
import SectionHeader from '../SectionHeader/SectionHeader';
import Section from '../Section/Section';
import { Language, STRINGS } from '../../../public/strings';

interface EventsProps {
    language: Language
}

const Events: React.FC<EventsProps> = ({ language }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 400,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <Section background="/images/plain-background-2.jpg">
            <SectionHeader text={STRINGS.EVENTS[language]} />
            <div className="w-full pb-8">
                <Slider {...settings}>
                    <div>
                        <Event
                            language={language}
                            img={SaratogaSpringsImage}
                            title={STRINGS.CALIFORNIA_WEDDING.TITLE[language]}
                            description={STRINGS.CALIFORNIA_WEDDING.DESCRIPTION[language]}
                            time={STRINGS.CALIFORNIA_WEDDING.TIME[language]}
                            location={STRINGS.CALIFORNIA_WEDDING.LOCATION[language]}
                            locationUrl={"https://maps.app.goo.gl/MoZUBYr7xk32UHA5A"}
                            dressCode={STRINGS.CALIFORNIA_WEDDING.DRESS_CODE[language]}
                        />
                    </div>
                    <div>
                        <Event
                            language={language}
                            img={BarImage}
                            title={STRINGS.CALIFORNIA_DINNER.TITLE[language]}
                            description={STRINGS.CALIFORNIA_DINNER.DESCRIPTION[language]}
                            time={STRINGS.CALIFORNIA_DINNER.TIME[language]}
                            location={STRINGS.CALIFORNIA_DINNER.LOCATION[language]}
                            dressCode={STRINGS.CALIFORNIA_DINNER.DRESS_CODE[language]}
                        />
                    </div>
                    <div>
                        <Event
                            language={language}
                            img={BellClassicImage}
                            title={STRINGS.JAPAN_WEDDING.TITLE[language]}
                            description={STRINGS.JAPAN_WEDDING.DESCRIPTION[language]}
                            time={STRINGS.JAPAN_WEDDING.TIME[language]}
                            location={STRINGS.JAPAN_WEDDING.LOCATION[language]}
                            dressCode={STRINGS.JAPAN_WEDDING.DRESS_CODE[language]}
                        />
                    </div>
                    <div>
                        <Event
                            language={language}
                            img={TokyoBarImage}
                            title={STRINGS.JAPAN_DINNER.TITLE[language]}
                            description={STRINGS.JAPAN_DINNER.DESCRIPTION[language]}
                            time={STRINGS.JAPAN_DINNER.TIME[language]}
                            location={STRINGS.JAPAN_DINNER.LOCATION[language]}
                            dressCode={STRINGS.JAPAN_DINNER.DRESS_CODE[language]}
                        />
                    </div>
                </Slider>
            </div>
        </Section>
    );
};

export default Events;
