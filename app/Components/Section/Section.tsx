import React from 'react';

type SectionProps = {
  children: React.ReactNode;
  background?: string;
};

const Section: React.FC<SectionProps> = ({ children, background }) => (
  <section
    className="flex flex-col items-center justify-center h-screen w-screen bg-cover bg-center"
    style={background ? { backgroundImage: `url(${background})` } : {}}
  >
    {children}
  </section>
);


export default Section;