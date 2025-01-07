import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';
import { AiOutlineInstagram, AiOutlineTwitter, AiOutlineLinkedin } from 'react-icons/ai';

const speakers = [
    {
        name: 'John Doe',
        title: 'Innovator in AI',
        bio: 'John Doe is an industry-leading expert in artificial intelligence, having worked with top tech companies to revolutionize AI development.',
        image: '/images/speaker1.png', // Replace with your speaker image
        social: {
            instagram: 'https://www.instagram.com/johndoe',
            twitter: 'https://www.twitter.com/johndoe',
            linkedin: 'https://www.linkedin.com/in/johndoe'
        },
        location: 'San Francisco, CA'
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
    // Add more speakers here...
];

const Speakers = () => {
    return (
        <section className="bg-black py-16 px-6 md:px-12 text-white">
            <h2 className="text-3xl md:text-4xl font-semibold text-center text-tedRed mb-12">
                Meet Our Speakers
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                {speakers.map((speaker, index) => (
                    <div
                        key={index}
                        className="bg-charcoalGrey rounded-lg overflow-hidden shadow-xl transform hover:scale-105 transition duration-300"
                    >
                        {/* Speaker Image */}
                        <div className="relative w-full h-64">
                            <img
                                src={speaker.image}
                                alt={speaker.name}
                                className="w-full h-full object-cover object-center rounded-t-lg transition-transform duration-500 ease-in-out transform hover:scale-110"
                            />
                            <div className="absolute top-4 left-4 bg-black bg-opacity-50 p-2 rounded-full animate__animated animate__fadeIn">
                                <FaQuoteLeft className="text-tedRed text-3xl" />
                            </div>
                        </div>

                        {/* Speaker Content */}
                        <div className="p-6">
                            <h3 className="text-2xl font-bold text-white mb-2">{speaker.name}</h3>
                            <p className="text-lg font-semibold text-lightGrey mb-2">{speaker.title}</p>
                            <p className="text-sm text-lightGrey mb-4">{speaker.bio}</p>
                            <div className="flex items-center text-lightGrey mb-4">
                                <MdLocationOn className="mr-2" />
                                <span>{speaker.location}</span>
                            </div>

                            {/* Social Links */}
                            <div className="flex space-x-4 mt-4">
                                <a
                                    href={speaker.social.instagram}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-tedRed hover:text-lightRed transition duration-300 transform hover:scale-110"
                                >
                                    <AiOutlineInstagram className="text-2xl" />
                                </a>
                                <a
                                    href={speaker.social.twitter}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-tedRed hover:text-lightRed transition duration-300 transform hover:scale-110"
                                >
                                    <AiOutlineTwitter className="text-2xl" />
                                </a>
                                <a
                                    href={speaker.social.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-tedRed hover:text-lightRed transition duration-300 transform hover:scale-110"
                                >
                                    <AiOutlineLinkedin className="text-2xl" />
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Speakers;
