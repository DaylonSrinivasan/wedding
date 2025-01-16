"use client";

import React, { useCallback, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import SectionHeader from "../SectionHeader/SectionHeader";
import Section from "../Section/Section";
import Image from 'next/image';
import EngagementPhoto from '../../../public/engagement-shot.jpg';
import { Language, STRINGS} from '../../../public/strings';


interface GalleryProps {
    language: Language;
}

const Gallery: React.FC<GalleryProps> = ({ language }) => {

    const controls = useAnimation(); // Framer Motion animation controls

    const images = [EngagementPhoto, EngagementPhoto, EngagementPhoto, EngagementPhoto];

    // We duplicate the images 3 times to enable us to loop around.
    // We need 3x because our slowdown/speedup hover effect might restart the animation
    // partway through an iteration.
    //
    // For example: Imagine x goes from 0 to -100 for a single cycle of images. If we hover
    // when x = -80, then our animation will need to loop from -80 to -180. At -180, we need
    // to make sure we still have a full set of images to show, so we need to cover the range
    // up to -300.
    const duplicatedImages = [...images, ...images, ...images]
    const imageWidth = 300; // Fixed image width
    const imageMargin = 16 * 2; // Left and right margins (mx-4 = 16px on each side)
    const totalImageWidth = imageWidth + imageMargin;

    const totalGalleryWidth = totalImageWidth * duplicatedImages.length;

    const animationDuration = useRef(15);
    const lastX = useRef(0); // Tracks the last x position of the animation

    const startAnimation = useCallback(async (duration: number) => {
        const startingX = lastX.current % (totalGalleryWidth / 3);
        await controls.start({
            x: [startingX, startingX - totalGalleryWidth / 3],
            transition: {
                duration,
                ease: "linear",
                repeat: Infinity,
            },
        });
    }, [totalGalleryWidth, controls]);

    useEffect(() => {
        startAnimation(animationDuration.current);
    }, [startAnimation]);

    const handleMouseEnter = () => {
        controls.stop();
        animationDuration.current = 30; // Slow speed
        startAnimation(animationDuration.current);
    };

    const handleMouseLeave = () => {
        controls.stop();
        animationDuration.current = 15; // Normal speed
        startAnimation(animationDuration.current);
    };

    return (
        <Section>
            <SectionHeader text={STRINGS.GALLERY[language]} />
            <div
                className="overflow-hidden w-full mt-6 relative"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <motion.div
                    className="flex"
                    style={{ display: "flex", whiteSpace: "nowrap" }}
                    animate={controls}
                    onUpdate={(latest: { [key: string]: number }) => {
                        if (typeof latest.x === "number") {
                            lastX.current = latest.x;
                        }
                    }}
                >
                    {duplicatedImages.map((img, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 mx-4"
                            style={{ minWidth: `${imageWidth}px` }}
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
