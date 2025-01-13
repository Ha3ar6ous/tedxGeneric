import React from "react";
import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const teamMembers = [
    {
        name: "John Doe",
        role: "Event Coordinator",
        image: "/images/speaker2.png", // Replace with the image path
        social: {
            linkedin: "https://linkedin.com/in/johndoe",
            instagram: "https://instagram.com/johndoe",
        },
    },
    {
        name: "Jane Smith",
        role: "Content Manager",
        image: "/images/speaker2.png", // Replace with the image path
        social: {
            linkedin: "https://linkedin.com/in/janesmith",
            instagram: "https://instagram.com/janesmith",
        },
    },
    {
        name: "Alice Johnson",
        role: "Marketing Lead",
        image: "/images/speaker2.png", // Replace with the image path
        social: {
            linkedin: "https://linkedin.com/in/alicejohnson",
            instagram: "https://instagram.com/alicejohnson",
        },
    },
    {
        name: "John Doe",
        role: "Event Coordinator",
        image: "/images/speaker2.png", // Replace with the image path
        social: {
            linkedin: "https://linkedin.com/in/johndoe",
            instagram: "https://instagram.com/johndoe",
        },
    },
    {
        name: "Jane Smith",
        role: "Content Manager",
        image: "/images/speaker2.png", // Replace with the image path
        social: {
            linkedin: "https://linkedin.com/in/janesmith",
            instagram: "https://instagram.com/janesmith",
        },
    },
    {
        name: "Alice Johnson",
        role: "Marketing Lead",
        image: "/images/speaker2.png", // Replace with the image path
        social: {
            linkedin: "https://linkedin.com/in/alicejohnson",
            instagram: "https://instagram.com/alicejohnson",
        },
    },
    {
        name: "John Doe",
        role: "Event Coordinator",
        image: "/images/speaker2.png", // Replace with the image path
        social: {
            linkedin: "https://linkedin.com/in/johndoe",
            instagram: "https://instagram.com/johndoe",
        },
    },
    {
        name: "Jane Smith",
        role: "Content Manager",
        image: "/images/speaker2.png", // Replace with the image path
        social: {
            linkedin: "https://linkedin.com/in/janesmith",
            instagram: "https://instagram.com/janesmith",
        },
    },
    {
        name: "Alice Johnson",
        role: "Marketing Lead",
        image: "/images/speaker2.png", // Replace with the image path
        social: {
            linkedin: "https://linkedin.com/in/alicejohnson",
            instagram: "https://instagram.com/alicejohnson",
        },
    },
];

const Team = () => {
    return (
        <div className="bg-gray-900 text-white font-sans">
            {/* Hero Section */}
            <header className="relative bg-gradient-to-r from-gray-800 to-gray-900 py-20 px-6 text-center">
                <h1 className="text-5xl font-bold animate__animated animate__fadeInDown">
                    Meet the TEDx College Team
                </h1>
                <p className="text-lg mt-4 text-gray-300 animate__animated animate__fadeInUp">
                    Passionate individuals dedicated to bringing ideas to life and inspiring the community.
                </p>
                <p className="text-lg mt-4 text-gray-300 animate__animated animate__fadeInUp">
                    Be inspired by innovators, creators, and leaders shaping the future&#39;s horizon. Be inspired by innovators, creators, and leaders shaping the future&#39;s horizon.
                    Be inspired by innovators, creators, and leaders shaping the future&#39;s horizon. Be inspired by innovators, creators, and leaders shaping the future&#39;s horizon.
                    Be inspired by innovators, creators, and leaders shaping the future&#39;s horizon. Be inspired by innovators, creators, and leaders shaping the future&#39;s horizon.
                    Be inspired by innovators, creators, and leaders shaping the future&#39;s horizon. Be inspired by innovators, creators, and leaders shaping the future&#39;s horizon.
                </p>
            </header>

            {/* Team Members Section */}
            <section className="py-16 px-6">
                <h2 className="text-4xl font-semibold text-center mb-12">
                    Our Amazing Team
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-screen-xl mx-auto">
                    {teamMembers.map((member, index) => (
                        <div
                            key={index}
                            className="bg-white text-black rounded-lg shadow-lg p-6 transform hover:scale-105 transition-all duration-300"
                        >
                            <img
                                src={member.image}
                                alt={member.name}
                                className="rounded-full w-32 h-32 mx-auto mb-4"
                            />
                            <h3 className="text-xl font-bold text-center">{member.name}</h3>
                            <p className="text-sm text-center text-gray-600">{member.role}</p>
                            <div className="flex justify-center mt-4 space-x-4">
                                <a
                                    href={member.social.linkedin}
                                    className="text-blue-500 hover:text-blue-400"
                                >
                                    <FaLinkedin size={20} />
                                </a>
                                <a
                                    href={member.social.instagram}
                                    className="text-pink-500 hover:text-pink-400"
                                >
                                    <FaInstagram size={20} />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Highlight Section */}
            <section className="bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 py-16 px-6 text-center">
                <h2 className="text-4xl font-semibold mb-8 text-white">
                    Join Us and Make a Difference
                </h2>
                <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                    Become part of our team, contribute to impactful ideas, and help shape the future.
                </p>
            </section>
        </div>
    );
};

export default Team;
