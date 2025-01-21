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


import { Language, STRINGS } from '../../../public/strings';

interface GalleryProps {
    language: Language;
}

const Gallery: React.FC<GalleryProps> = ({ language }) => {

    const controls = useAnimation(); // Framer Motion animation controls

    const images = [
        image1,
        image2,
        image3,
        image4,
        image5,
        image6,
        image7,
        image8,
        image9,
        image10,
        image11,
        image12,
        image13,
        image14,
        image15,
        image16,
        image17,
        image18,
        image19,
        image20,
        image21,
        image22,
        image23,
        image24,
        image25,
        image26,
        image27,
        image28,
        image29,
        image30,
        image31,
        image32,
        image33,
        image34,
        image35,
        image36,
        image37,
        image38,
        image39,
        image40,
        image41,
        image42,
        image43,
        image44,
        image45,
        image46,
    ];
    

    const duplicatedImages = [...images, ...images]; // Duplicate images for seamless looping
    const imageWidth = 300; // Fixed image width
    const imageMargin = 16 * 2; // Left and right margins (mx-4 = 16px on each side)
    const totalImageWidth = imageWidth + imageMargin;

    const totalGalleryWidth = totalImageWidth * duplicatedImages.length;
    const animationDuration = 120; // Fixed animation speed (seconds)

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
