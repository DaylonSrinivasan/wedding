"use client";

import React, { useCallback, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import SectionHeader from "../SectionHeader/SectionHeader";
import Section from "../Section/Section";
import Image from 'next/image';
import image1 from '../../../public/images/image1.jpg';
import image2 from '../../../public/images/image2.jpg';
import image3 from '../../../public/images/image3.jpg';
import image4 from '../../../public/images/image4.jpg';
import image5 from '../../../public/images/image5.jpg';
import image6 from '../../../public/images/image6.jpg';
import image7 from '../../../public/images/image7.jpg';
import image8 from '../../../public/images/image8.jpg';
import image9 from '../../../public/images/image9.jpg';
import image10 from '../../../public/images/image10.jpg';
import image11 from '../../../public/images/image11.jpg';
import image12 from '../../../public/images/image12.jpg';
import image13 from '../../../public/images/image13.jpg';
import image14 from '../../../public/images/image14.jpg';
import image15 from '../../../public/images/image15.jpg';
import image16 from '../../../public/images/image16.jpg';
import image17 from '../../../public/images/image17.jpg';
import image18 from '../../../public/images/image18.jpg';
import image19 from '../../../public/images/image19.jpg';
import image20 from '../../../public/images/image20.jpg';
import image21 from '../../../public/images/image21.jpg';
import image22 from '../../../public/images/image22.jpg';
import image23 from '../../../public/images/image23.jpg';
import image24 from '../../../public/images/image24.jpg';
import image25 from '../../../public/images/image25.jpg';
import image26 from '../../../public/images/image26.jpg';
import image27 from '../../../public/images/image27.jpg';
import image28 from '../../../public/images/image28.jpg';
import image29 from '../../../public/images/image29.jpg';
import image30 from '../../../public/images/image30.jpg';
import image31 from '../../../public/images/image31.jpg';
import image32 from '../../../public/images/image32.jpg';
import image33 from '../../../public/images/image33.jpg';
import image34 from '../../../public/images/image34.jpg';
import image35 from '../../../public/images/image35.jpg';
import image36 from '../../../public/images/image36.jpg';
import image37 from '../../../public/images/image37.jpg';
import image38 from '../../../public/images/image38.jpg';
import image39 from '../../../public/images/image39.jpg';
import image40 from '../../../public/images/image40.jpg';
import image41 from '../../../public/images/image41.jpg';
import image42 from '../../../public/images/image42.jpg';
import image43 from '../../../public/images/image43.jpg';
import image44 from '../../../public/images/image44.jpg';
import image45 from '../../../public/images/image45.jpg';
import image46 from '../../../public/images/image46.jpg';
import image47 from '../../../public/images/image47.jpg';
import image48 from '../../../public/images/image48.jpg';
import image49 from '../../../public/images/image49.jpg';
import image50 from '../../../public/images/image50.jpg';
import image51 from '../../../public/images/image51.jpg';
import image52 from '../../../public/images/image52.jpg';
import image53 from '../../../public/images/image53.jpg';
import image54 from '../../../public/images/image54.jpg';
import image55 from '../../../public/images/image55.jpg';
import image56 from '../../../public/images/image56.jpg';
import image57 from '../../../public/images/image57.jpg';
import image58 from '../../../public/images/image58.jpg';
import image59 from '../../../public/images/image59.jpg';
import image60 from '../../../public/images/image60.jpg';
import image61 from '../../../public/images/image61.jpg';
import image62 from '../../../public/images/image62.jpg';
import image63 from '../../../public/images/image63.jpg';
import image64 from '../../../public/images/image64.jpg';
import image65 from '../../../public/images/image65.jpg';
import image66 from '../../../public/images/image66.jpg';
import image67 from '../../../public/images/image67.jpg';
import image68 from '../../../public/images/image68.jpg';
import image69 from '../../../public/images/image69.jpg';
import image70 from '../../../public/images/image70.jpg';


import { Language, STRINGS } from '../../../public/strings';

interface GalleryProps {
    language: Language;
}

const Gallery: React.FC<GalleryProps> = ({ language }) => {

    const controls = useAnimation(); // Framer Motion animation controls

    const images = [
        image44,
        image3,
        image53,
        image6,
        image47,
        image21,
        image24,
        image56,
        image33,
        image39,
        image63,
        image1,
        image10,
        image67,
        image28,
        image37,
        image26,
        image31,
        image42,
        image9,
        image40,
        image54,
        image11,
        image52,
        image60,
        image16,
        image46,
        image32,
        image48,
        image12,
        image25,
        image14,
        image58,
        image50,
        image5,
        image34,
        image15,
        image13,
        image66,
        image29,
        image20,
        image65,
        image70,
        image45,
        image2,
        image61,
        image18,
        image23,
        image22,
        image43,
        image36,
        image35,
        image38,
        image19,
        image64,
        image27,
        image59,
        image4,
        image57,
        image68,
        image51,
        image7,
        image55,
        image70,
        image17,
        image30,
        image8,
        image62,
        image49,
        image41,
        image69,
    ];
    
    

    const duplicatedImages = [...images, ...images]; // Duplicate images for seamless looping
    const imageWidth = 300; // Fixed image width
    const imageMargin = 16 * 2; // Left and right margins (mx-4 = 16px on each side)
    const totalImageWidth = imageWidth + imageMargin;

    const totalGalleryWidth = totalImageWidth * duplicatedImages.length;
    const animationDuration = 240; // Fixed animation speed (seconds)

    const startAnimation = useCallback(async () => {
        await controls.start({
            x: [0, -totalGalleryWidth / 2],
            transition: {
                duration: animationDuration,
                ease: "linear",
                repeat: Infinity,
            },
        });
    }, [totalGalleryWidth, animationDuration, controls]);

    useEffect(() => {
        startAnimation();
    }, [startAnimation]);

    return (
        <Section background="/images/plain-background-5.jpg">
            <SectionHeader text={STRINGS.GALLERY[language]} />
            <div className="overflow-hidden w-full mt-6 relative">
                <motion.div
                    className="flex"
                    style={{ display: "flex", whiteSpace: "nowrap" }}
                    animate={controls}
                >
                    {duplicatedImages.map((img, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 mx-4"
                            style={{
                                width: `${imageWidth}px`,
                                display: 'flex', // Flexbox for centering
                                alignItems: 'center', // Vertically center the content
                                justifyContent: 'center', // Optionally center horizontally if needed
                            }}
                        >
                            <Image
                                src={img}
                                alt={`Gallery image ${index + 1}`}
                                width={imageWidth}
                                height={300}
                                className="rounded-lg object-cover"
                            />
                        </div>
                    ))}
                </motion.div>
            </div>
        </Section>
    );
};

export default Gallery;
