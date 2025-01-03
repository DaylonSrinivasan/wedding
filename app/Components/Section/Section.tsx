import React from 'react';

type SectionProps = {
  children: React.ReactNode;
};

const Section: React.FC<SectionProps> = ({ children }) => (
  <section className="flex flex-col items-center justify-center max-w-6xl mx-auto h-screen">
    {children}
  </section>
);

export default Section;