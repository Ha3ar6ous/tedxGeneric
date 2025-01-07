import React from 'react';
import { FaLinkedin, FaTwitter, FaInstagram, FaFilter } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';
import { AiOutlineInstagram, AiOutlineTwitter, AiOutlineLinkedin } from 'react-icons/ai';

const speakers = [
    {
        name: 'John Doe',
        title: 'Innovator in AI',
        bio: 'John Doe is an industry-leading expert in artificial intelligence, having worked with top tech companies to revolutionize AI development.',
        image: '/images/speaker1.png',
        social: {
            instagram: 'https://www.instagram.com/johndoe',
            twitter: 'https://www.twitter.com/johndoe',
            linkedin: 'https://www.linkedin.com/in/johndoe',
        },
        location: 'San Francisco, CA',
    },
    {
        name: 'Jane Smith',
        title: 'Pioneer in Sustainable Design',
        bio: 'Jane Smith is known for her sustainable design solutions that are transforming the future of architecture and urban development.',
        image: '/images/speaker2.png', // Replace with your speaker image
        social: {
            instagram: 'https://www.instagram.com/janesmith',
            twitter: 'https://www.twitter.com/janesmith',
            linkedin: 'https://www.linkedin.com/in/janesmith'
        },
        location: 'New York, NY'
    },
    {
        name: 'Jane Smith',
        title: 'Pioneer in Sustainable Design',
        bio: 'Jane Smith is known for her sustainable design solutions that are transforming the future of architecture and urban development.',
        image: '/images/speaker3.png', // Replace with your speaker image
        social: {
            instagram: 'https://www.instagram.com/janesmith',
            twitter: 'https://www.twitter.com/janesmith',
            linkedin: 'https://www.linkedin.com/in/janesmith'
        },
        location: 'New York, NY'
    },
    // Add more speakers...
];
const pastSpeakers = [
    {
        name: "Alice Johnson",
        title: "Human Rights Activist",
        bio: "Alice has championed human rights and social justice globally for over a decade.",
        image: "/images/speaker1.png", // Replace with the image path
        social: {
            instagram: "https://instagram.com/alicejohnson",
            twitter: "https://twitter.com/alicejohnson",
            linkedin: "https://linkedin.com/in/alicejohnson",
        },
    },
    {
        name: "Dr. Ethan Cole",
        title: "AI Researcher",
        bio: "Ethan is a pioneer in artificial intelligence, exploring ethical AI development.",
        image: "/images/speaker1.png", // Replace with the image path
        social: {
            instagram: "https://instagram.com/ethancole",
            twitter: "https://twitter.com/ethancole",
            linkedin: "https://linkedin.com/in/ethancole",
        },
    },
    {
        name: "Sophia White",
        title: "Entrepreneur & Author",
        bio: "Sophia's journey from startup struggles to success inspires budding entrepreneurs.",
        image: "/images/speaker1.png", // Replace with the image path
        social: {
            instagram: "https://instagram.com/sophiawhite",
            twitter: "https://twitter.com/sophiawhite",
            linkedin: "https://linkedin.com/in/sophiawhite",
        },
    },
];

const UpcomingSpeakers = () => {
    return (
        <div className="bg-gradient-to-b from-gray-900 via-black to-gray-800 text-white font-sans">
            {/* Hero Section */}
            <header className="relative bg-gradient-to-r from-red-800 to-gray-900 py-20 px-6 text-center">
                <h1 className="text-5xl font-bold animate__animated animate__fadeInDown">
                    Meet Our Upcoming Speakers
                </h1>
                <p className="text-lg mt-4 text-gray-300 animate__animated animate__fadeInUp">
                    Be inspired by innovators, creators, and leaders shaping the future&#39;s horizon.
                </p>
                <button className="mt-8 px-8 py-3 bg-red-600 hover:bg-red-500 rounded-md text-lg font-medium transition transform hover:scale-105 animate__animated animate__fadeIn">
                    Sign Up for Updates
                </button>
            </header>

            {/* Filters Section */}
            <section className="py-8 px-6 bg-gray-800">
                <div className="flex justify-between items-center max-w-screen-xl mx-auto">
                    <h2 className="text-3xl font-semibold">Browse Speakers</h2>
                    <button className="flex items-center space-x-2 bg-red-600 hover:bg-red-500 px-4 py-2 rounded text-white">
                        <FaFilter />
                        <span>Filter</span>
                    </button>
                </div>
            </section>

            {/* Speakers Section */}
            <section className="py-16 px-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-screen-xl mx-auto">
                    {speakers.map((speaker, index) => (
                        <div
                            key={index}
                            className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition duration-300"
                        >
                            <div className="relative w-full h-64">
                                <img
                                    src={speaker.image}
                                    alt={speaker.name}
                                    className="w-full h-full object-cover rounded-t-lg transition-transform duration-500 hover:scale-110"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-2xl font-bold text-white mb-2">{speaker.name}</h3>
                                <p className="text-lg font-semibold text-gray-400 mb-2">{speaker.title}</p>
                                <p className="text-sm text-gray-500 mb-4">{speaker.bio.replace("'", "&#39;")}</p>
                                <div className="flex items-center text-gray-400 mb-4">
                                    <MdLocationOn className="mr-2" />
                                    <span>{speaker.location}</span>
                                </div>
                                <div className="flex space-x-4">
                                    <a
                                        href={speaker.social.instagram}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-red-500 hover:text-red-400 transition-transform transform hover:scale-110"
                                    >
                                        <AiOutlineInstagram className="text-2xl" />
                                    </a>
                                    <a
                                        href={speaker.social.twitter}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-400 hover:text-blue-300 transition-transform transform hover:scale-110"
                                    >
                                        <AiOutlineTwitter className="text-2xl" />
                                    </a>
                                    <a
                                        href={speaker.social.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-500 hover:text-blue-400 transition-transform transform hover:scale-110"
                                    >
                                        <AiOutlineLinkedin className="text-2xl" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <div className="bg-gray-900 text-white font-sans">
                {/* Hero Section */}
                <header className="relative bg-gradient-to-r from-gray-800 to-gray-900 py-20 px-6 text-center">
                    <h1 className="text-5xl font-bold animate__animated animate__fadeInDown">
                        Our Past Speakers
                    </h1>
                    <p className="text-lg mt-4 text-gray-400 animate__animated animate__fadeInUp">
                        Celebrating thought leaders and changemakers who have graced our stage.
                    </p>
                    <button className="mt-8 px-8 py-3 bg-red-600 hover:bg-red-500 rounded-md text-lg font-medium transition transform hover:scale-105 animate__animated animate__fadeIn">
                        Watch Their Talks
                    </button>
                </header>

                {/* Past Speakers Section */}
                <section className="py-16 px-6">
                    <h2 className="text-4xl font-semibold text-center mb-12">
                        Meet the Visionaries
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-screen-xl mx-auto">
                        {pastSpeakers.map((speaker, index) => (
                            <div
                                key={index}
                                className="bg-white text-black rounded-lg shadow-lg p-6 transform hover:scale-105 transition-all duration-300"
                            >
                                <img
                                    src={speaker.image}
                                    alt={speaker.name}
                                    className="rounded-full w-32 h-32 mx-auto mb-4"
                                />
                                <h3 className="text-xl font-bold text-center">{speaker.name}</h3>
                                <p className="text-sm text-center text-gray-600">
                                    {speaker.title}
                                </p>
                                <p className="text-center mt-4 text-gray-700">{speaker.bio.replace("'", "&#39;")}</p>
                                <div className="flex justify-center mt-4 space-x-4">
                                    <a
                                        href={speaker.social.linkedin}
                                        className="text-blue-500 hover:text-blue-400"
                                    >
                                        <FaLinkedin size={20} />
                                    </a>
                                    <a
                                        href={speaker.social.twitter}
                                        className="text-blue-400 hover:text-blue-300"
                                    >
                                        <FaTwitter size={20} />
                                    </a>
                                    <a
                                        href={speaker.social.instagram}
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
                        Their Legacy Lives On
                    </h2>
                    <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                        Our past speakers have left a lasting impression, inspiring audiences
                        to think beyond boundaries and take action.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default UpcomingSpeakers;
