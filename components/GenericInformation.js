import React from 'react';
import { FaClock, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const GenericInformation = () => {
    return (
        <section className="bg-black py-16 px-6 md:px-12 text-white">
            <h2 className="text-3xl md:text-4xl font-semibold text-center text-tedRed mb-12">
                Event Information
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
                {/* Event Time */}
                <div className="bg-charcoalGrey p-8 rounded-lg shadow-xl transform hover:scale-105 transition duration-300">
                    <div className="flex items-center mb-4">
                        <FaClock className="text-tedRed text-3xl mr-4" />
                        <h3 className="text-2xl font-bold">Event Timing</h3>
                    </div>
                    <p className="text-lightGrey text-lg">
                        The event will be held on <span className="text-white">March 15, 2025</span> at 10:00 AM.
                    </p>
                </div>

                {/* Event Location */}
                <div className="bg-charcoalGrey p-8 rounded-lg shadow-xl transform hover:scale-105 transition duration-300">
                    <div className="flex items-center mb-4">
                        <FaMapMarkerAlt className="text-tedRed text-3xl mr-4" />
                        <h3 className="text-2xl font-bold">Event Location</h3>
                    </div>
                    <p className="text-lightGrey text-lg">
                        The event will be held at <span className="text-white">TEDx Auditorium, College Campus</span>, Downtown City.
                    </p>
                </div>

                {/* Contact Information */}
                <div className="bg-charcoalGrey p-8 rounded-lg shadow-xl transform hover:scale-105 transition duration-300">
                    <div className="flex items-center mb-4">
                        <FaPhoneAlt className="text-tedRed text-3xl mr-4" />
                        <h3 className="text-2xl font-bold">Contact Us</h3>
                    </div>
                    <p className="text-lightGrey text-lg">
                        Have any questions? Contact us at{' '}
                        <span className="text-white">+123 456 7890</span> or{' '}
                        <span className="text-white">info@tedxcollege.com</span>.
                    </p>
                </div>

                {/* Email Information */}
                <div className="bg-charcoalGrey p-8 rounded-lg shadow-xl transform hover:scale-105 transition duration-300">
                    <div className="flex items-center mb-4">
                        <FaEnvelope className="text-tedRed text-3xl mr-4" />
                        <h3 className="text-2xl font-bold">Email Us</h3>
                    </div>
                    <p className="text-lightGrey text-lg">
                        You can also reach out to us at{' '}
                        <span className="text-white">contact@tedxcollege.com</span> for more information.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default GenericInformation;
