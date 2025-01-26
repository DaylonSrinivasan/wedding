"use client";

import React from "react";
import SectionHeader from '../SectionHeader/SectionHeader';
import Section from '../Section/Section';

import { Language, STRINGS } from "../../../public/strings";

interface RSVPProps {
  language: Language;
}

const RSVP: React.FC<RSVPProps> = ({ language }) => {
  return (
    <Section background="/images/plain-background-6.jpg">
      <SectionHeader text={STRINGS.RSVP[language]} />
      {/* Embedded Google Form */}
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSe3bLzzSGp63xJAwp4r644X39W4T0xv6DN02MgxLxGyriIDFw/viewform?embedded=true"
        width="800"
        height="1200"
      >
        Loading…
      </iframe>
    </Section>
  );
};

export default RSVP;
