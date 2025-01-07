import React from 'react';
import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { AiOutlineUser } from 'react-icons/ai';

const Location = () => {
    return (
        <section className="bg-black py-16 px-6 md:px-12 text-white">
            <div className="max-w-screen-xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-semibold text-tedRed mb-12 animate__animated animate__fadeIn">
                    Event Location & Details
                </h2>

                {/* Event Date & Time */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    <div className="bg-charcoalGrey p-8 rounded-xl shadow-xl transform hover:scale-105 transition duration-300 animate__animated animate__fadeInUp">
                        <h3 className="text-xl font-bold text-tedRed mb-4">Date & Time</h3>
                        <div className="flex items-center justify-center space-x-3">
                            <FaCalendarAlt className="text-4xl text-tedRed" />
                            <span className="text-lg">6:00 PM, 8th Nov, 2024</span>
                        </div>
                    </div>

                    {/* Location */}
                    <div className="bg-charcoalGrey p-8 rounded-xl shadow-xl transform hover:scale-105 transition duration-300 animate__animated animate__fadeInUp">
                        <h3 className="text-xl font-bold text-tedRed mb-4">Location</h3>
                        <div className="flex items-center justify-center space-x-3">
                            <FaMapMarkerAlt className="text-4xl text-tedRed" />
                            <span className="text-lg">SJA, NITK Surathkal</span>
                        </div>
                    </div>

                    {/* Speakers */}
                    <div className="bg-charcoalGrey p-8 rounded-xl shadow-xl transform hover:scale-105 transition duration-300 animate__animated animate__fadeInUp">
                        <h3 className="text-xl font-bold text-tedRed mb-4">Speakers</h3>
                        <div className="flex justify-center space-x-6">
                            <div className="flex flex-col items-center">
                                <AiOutlineUser className="text-3xl text-tedRed mb-2" />
                                <span className="text-lg">Speaker 1</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <AiOutlineUser className="text-3xl text-tedRed mb-2" />
                                <span className="text-lg">Speaker 2</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <AiOutlineUser className="text-3xl text-tedRed mb-2" />
                                <span className="text-lg">Speaker 3</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Location;
