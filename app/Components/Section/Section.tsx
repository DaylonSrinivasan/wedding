import React from 'react';

type SectionProps = {
  children: React.ReactNode;
  background?: string;
};

const Section: React.FC<SectionProps> = ({ children, background }) => (
  <section
    className="flex flex-col items-center justify-center min-h-screen w-screen bg-cover bg-center px-4 py-4"
    style={background ? { backgroundImage: `url(${background})` } : {}}
  >
    {children}
  </section>
);

export default Section;
