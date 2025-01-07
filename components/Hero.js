import React from 'react';
import { FaPlay } from 'react-icons/fa'; // Added more icons for variety
import Image from 'next/image';

const Hero = () => {
    return (
        <section className="relative bg-black text-white overflow-hidden">
            {/* Background with Overlay */}
            <div className="absolute inset-0">
                <Image
                    src="/images/hero-bg.jpg" // Replace with your background image
                    alt="TEDx Background"
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                    className="opacity-70"
                />
            </div>

            {/* Content */}
            <div className="relative container mx-auto flex flex-col md:flex-row items-center py-24 md:py-32 px-6 z-10">
                {/* Left Content */}
                <div className="md:w-1/2 text-center md:text-left">
                    <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 animate__animated animate__fadeIn animate__delay-1s">
                        Welcome to <span className="text-tedRed">TEDxCollege</span>
                    </h1>
                    <p className="text-lg md:text-xl mb-6 text-lightGrey animate__animated animate__fadeIn animate__delay-2s">
                        Unleashing the power of ideas worth spreading. Join us to explore bold ideas and innovative thoughts that will transform your perspective.
                    </p>
                    <div className="flex justify-center md:justify-start space-x-4 animate__animated animate__fadeIn animate__delay-3s">
                        <a
                            href="#tickets"
                            className="bg-tedRed hover:bg-lightRed text-white font-semibold py-3 px-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
                        >
                            Get Tickets
                        </a>
                        <a
                            href="#video"
                            className="flex items-center bg-charcoalGrey hover:bg-silver text-white font-semibold py-3 px-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
                        >
                            <FaPlay className="mr-2 animate-pulse" />
                            Watch Video
                        </a>
                    </div>
                </div>

                {/* Right Content */}
                <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center relative">
                    <Image
                        src="/images/hero-image.png" // Replace with your hero image
                        alt="TEDx Event"
                        width={500}
                        height={500}
                        className="rounded-lg shadow-2xl transform hover:scale-105 hover:rotate-2 transition duration-500"
                    />
                    {/* Decorative Circle */}
                    <div className="absolute -z-10 bg-tedRed opacity-20 w-72 h-72 rounded-full top-1/4 right-1/4 blur-3xl"></div>
                </div>
            </div>

            {/* Add a Call-to-Action Below */}
            <div className="bg-black py-12 text-center">
                <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4 animate__animated animate__fadeIn animate__delay-4s">
                    Be Part of Something Bigger
                </h2>
                <p className="text-lg md:text-xl text-lightGrey mb-8 animate__animated animate__fadeIn animate__delay-5s">
                    Explore the future of innovation, creativity, and inspiration. Join us for a day of transformative talks and experiences.
                </p>
                <a
                    href="#tickets"
                    className="bg-tedRed hover:bg-lightRed text-white font-semibold py-3 px-8 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 animate__animated animate__fadeIn animate__delay-6s"
                >
                    Reserve Your Spot
                </a>
            </div>
        </section>
    );
};

export default Hero;
