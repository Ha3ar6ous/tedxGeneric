import React from 'react';
import { FaLaptopCode, FaChalkboardTeacher, FaHandsHelping } from 'react-icons/fa';
import { BsFillPeopleFill } from 'react-icons/bs';

const Experience = () => {
    return (
        <section className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 py-16 px-6 md:px-12">
            <div className="max-w-screen-xl mx-auto text-center">
                <h2 className="text-4xl font-semibold text-white mb-8 animate__animated animate__fadeIn">
                    Our Experience
                </h2>
                <p className="text-lg text-lightGrey mb-16 animate__animated animate__fadeInUp">
                    Join us as we bring inspiring experiences, knowledge sharing, and innovation to life.
                </p>

                {/* Experience Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* First Card */}
                    <div className="bg-white rounded-lg shadow-lg p-8 transform hover:scale-105 transition-all duration-300">
                        <FaLaptopCode className="text-4xl text-tedRed mb-4 mx-auto" />
                        <h3 className="text-2xl font-semibold text-black mb-3">Tech Talks</h3>
                        <p className="text-lg text-gray-600">
                            Discover the latest in technology with renowned experts sharing their insights.
                        </p>
                    </div>

                    {/* Second Card */}
                    <div className="bg-white rounded-lg shadow-lg p-8 transform hover:scale-105 transition-all duration-300">
                        <FaChalkboardTeacher className="text-4xl text-tedRed mb-4 mx-auto" />
                        <h3 className="text-2xl font-semibold text-black mb-3">Workshops</h3>
                        <p className="text-lg text-gray-600">
                            Interactive sessions where you can learn and grow through hands-on experiences.
                        </p>
                    </div>

                    {/* Third Card */}
                    <div className="bg-white rounded-lg shadow-lg p-8 transform hover:scale-105 transition-all duration-300">
                        <FaHandsHelping className="text-4xl text-tedRed mb-4 mx-auto" />
                        <h3 className="text-2xl font-semibold text-black mb-3">Collaboration</h3>
                        <p className="text-lg text-gray-600">
                            Opportunities to collaborate with like-minded individuals and organizations.
                        </p>
                    </div>

                    {/* Fourth Card */}
                    <div className="bg-white rounded-lg shadow-lg p-8 transform hover:scale-105 transition-all duration-300">
                        <BsFillPeopleFill className="text-4xl text-tedRed mb-4 mx-auto" />
                        <h3 className="text-2xl font-semibold text-black mb-3">Networking</h3>
                        <p className="text-lg text-gray-600">
                            Build lasting connections with professionals and peers from diverse fields.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
