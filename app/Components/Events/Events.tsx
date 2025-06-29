import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SaratogaSpringsImage from '../../../public/images/SaratogaSprings.jpg';
import BellClassicImage from '../../../public/images/bellclassic.jpg';
import TokyoBarImage from '../../../public/images/TokyoBar.jpg';
import BJsImage from '../../../public/images/BJs-SanJose.jpg'

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
                            img={BJsImage}
                            title={STRINGS.CALIFORNIA_AFTER_SOCIAL.TITLE[language]}
                            description={STRINGS.CALIFORNIA_AFTER_SOCIAL.DESCRIPTION[language]}
                            time={STRINGS.CALIFORNIA_AFTER_SOCIAL.TIME[language]}
                            location={STRINGS.CALIFORNIA_AFTER_SOCIAL.LOCATION[language]}
                            locationUrl={"https://maps.app.goo.gl/PCCinrr3F92MY4Xs6"}
                            dressCode={STRINGS.CALIFORNIA_AFTER_SOCIAL.DRESS_CODE[language]}
                        />
                    </div>
                    <div>
                        <Event
                            language={language}
                            img={BellClassicImage}
                            title={STRINGS.TOKYO_WEDDING.TITLE[language]}
                            description={STRINGS.TOKYO_WEDDING.DESCRIPTION[language]}
                            time={STRINGS.TOKYO_WEDDING.TIME[language]}
                            location={STRINGS.TOKYO_WEDDING.LOCATION[language]}
                            locationUrl={"https://maps.app.goo.gl/otZtQuinTvP7qCoN8"}
                            dressCode={STRINGS.TOKYO_WEDDING.DRESS_CODE[language]}
                        />
                    </div>
                    <div>
                        <Event
                            language={language}
                            img={TokyoBarImage}
                            title={STRINGS.TOKYO_AFTER_SOCIAL.TITLE[language]}
                            description={STRINGS.TOKYO_AFTER_SOCIAL.DESCRIPTION[language]}
                            time={STRINGS.TOKYO_AFTER_SOCIAL.TIME[language]}
                            location={STRINGS.TOKYO_AFTER_SOCIAL.LOCATION[language]}
                            dressCode={STRINGS.TOKYO_AFTER_SOCIAL.DRESS_CODE[language]}
                        />
                    </div>
                </Slider>
            </div>
        </Section>
    );
};

export default Events;
