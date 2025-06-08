import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HotelBellClassicRoom from '../../../public/images/hotel-bell-classic-room.jpg';

import SonestaSelectImage from '../../../public/images/sonesta-select.jpg';

import Accommodation from '../Accommodation/Accommodation';
import SectionHeader from '../SectionHeader/SectionHeader';
import Section from '../Section/Section';
import { Language, STRINGS } from '../../../public/strings';

interface AccommodationsProps {
    language: Language
}

const Accommodations: React.FC<AccommodationsProps> = ({ language }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 400,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <Section background="/images/plain-background-5.jpg">
            <SectionHeader text={STRINGS.ACCOMMODATIONS[language]} />
            <div className="w-full pb-8">
                <Slider {...settings}>
                    <div>
                        <Accommodation
                            language={language}
                            img={SonestaSelectImage}
                            title={STRINGS.CALIFORNIA_ACCOMMODATIONS.TITLE[language]}
                            hotelName={STRINGS.CALIFORNIA_ACCOMMODATIONS.HOTEL_NAME[language]}
                            datesAvailable={STRINGS.CALIFORNIA_ACCOMMODATIONS.DATES_AVAILABLE[language]}
                            price={STRINGS.CALIFORNIA_ACCOMMODATIONS.PRICE[language]}
                            locationAddress={STRINGS.CALIFORNIA_ACCOMMODATIONS.LOCATION.ADDRESS[language]}
                            locationUrl={"https://maps.app.goo.gl/9Zm6LNLjK1DkGiKS8"}
                            locationInfo={STRINGS.CALIFORNIA_ACCOMMODATIONS.LOCATION.INFO[language]}
                            bookingInfo={STRINGS.CALIFORNIA_ACCOMMODATIONS.BOOKING_INFO[language]}
                            bookingUrl={"https://www.sonesta.com/sonesta-select/ca/san-jose/sonesta-select-san-jose-airport?isGroupCode=true&groupCode=081325RIKA_1&checkin=2025-08-13&checkout=2025-08-19"}
                            alternatives={STRINGS.CALIFORNIA_ACCOMMODATIONS.ALTERNATIVES[language]}
                            transportation={STRINGS.CALIFORNIA_ACCOMMODATIONS.TRANSPORTATION[language]}
                            carpoolUrl={"https://docs.google.com/spreadsheets/d/1r4opL4Oic1_inNEgQcXZMetvnGRRKlbGiBb_wEsLlaE/edit?usp=sharing"}
                        />
                    </div>
                    <div>
                        <Accommodation
                            language={language}
                            img={HotelBellClassicRoom}
                            title={STRINGS.TOKYO_ACCOMMODATIONS.TITLE[language]}
                            hotelName={STRINGS.TOKYO_ACCOMMODATIONS.HOTEL_NAME[language]}
                            datesAvailable={STRINGS.TOKYO_ACCOMMODATIONS.DATES_AVAILABLE[language]}
                            price={STRINGS.TOKYO_ACCOMMODATIONS.PRICE[language]}
                            locationAddress={STRINGS.TOKYO_ACCOMMODATIONS.LOCATION.ADDRESS[language]}
                            locationUrl={"https://maps.app.goo.gl/B8Enn4Pe99MZfM997"}
                            locationInfo={STRINGS.TOKYO_ACCOMMODATIONS.LOCATION.INFO[language]}
                            bookingInfo={STRINGS.TOKYO_ACCOMMODATIONS.BOOKING_INFO[language]}
                            bookingUrl={null}
                            alternatives={STRINGS.TOKYO_ACCOMMODATIONS.ALTERNATIVES[language]}
                            transportation={STRINGS.TOKYO_ACCOMMODATIONS.TRANSPORTATION[language]}
                            carpoolUrl={null}
                        />
                    </div>
                </Slider>
            </div>
        </Section>
    );
};

export default Accommodations;
