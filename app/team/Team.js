import React from "react";
import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const teamMembers = [
    {
        name: "John Doe",
        role: "Event Coordinator",
        bio: "John is responsible for organizing and managing TEDx events, ensuring everything runs smoothly.",
        image: "/images/john.png", // Replace with the image path
        social: {
            linkedin: "https://linkedin.com/in/johndoe",
            twitter: "https://twitter.com/johndoe",
            instagram: "https://instagram.com/johndoe",
        },
    },
    {
        name: "Jane Smith",
        role: "Content Manager",
        bio: "Jane creates and curates compelling content to ensure our talks resonate with the audience.",
        image: "/images/jane.png", // Replace with the image path
        social: {
            linkedin: "https://linkedin.com/in/janesmith",
            twitter: "https://twitter.com/janesmith",
            instagram: "https://instagram.com/janesmith",
        },
    },
    {
        name: "Alice Johnson",
        role: "Marketing Lead",
        bio: "Alice develops innovative strategies to promote TEDx College, ensuring maximum impact.",
        image: "/images/alice.png", // Replace with the image path
        social: {
            linkedin: "https://linkedin.com/in/alicejohnson",
            twitter: "https://twitter.com/alicejohnson",
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
                <p className="text-lg mt-4 text-gray-400 animate__animated animate__fadeInUp">
                    A group of passionate individuals working together to bring inspiring ideas to life.
                </p>
                <button className="mt-8 px-8 py-3 bg-red-600 hover:bg-red-500 rounded-md text-lg font-medium transition transform hover:scale-105 animate__animated animate__fadeIn">
                    Join Our Team
                </button>
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
                            <p className="text-center mt-4 text-gray-700">{member.bio}</p>
                            <div className="flex justify-center mt-4 space-x-4">
                                <a
                                    href={member.social.linkedin}
                                    className="text-blue-500 hover:text-blue-400"
                                >
                                    <FaLinkedin size={20} />
                                </a>
                                <a
                                    href={member.social.twitter}
                                    className="text-blue-400 hover:text-blue-300"
                                >
                                    <FaTwitter size={20} />
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
