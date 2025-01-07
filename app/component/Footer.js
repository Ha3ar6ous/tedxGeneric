import React from 'react';
import { AiFillInstagram, AiOutlineTwitter, AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-black via-gray-900 to-black text-white py-10 px-6 md:px-12 transition-all duration-300">
            <div className="max-w-screen-xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-semibold text-tedRed mb-6 animate__animated animate__fadeIn">
                    Connect With Us
                </h2>
                <p className="text-lg text-lightGrey mb-8 animate__animated animate__fadeInUp">
                    Join the conversation and stay updated with our latest events and activities.
                </p>

                {/* Social Media Links */}
                <div className="flex justify-center items-center space-x-6 mb-8 animate__animated animate__fadeInUp">
                    <a
                        href="https://www.instagram.com/tedx/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-tedRed hover:text-lightRed transition-all transform hover:scale-125"
                    >
                        <AiFillInstagram className="text-4xl" />
                    </a>
                    <a
                        href="https://twitter.com/tedx"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-tedRed hover:text-lightRed transition-all transform hover:scale-125"
                    >
                        <AiOutlineTwitter className="text-4xl" />
                    </a>
                    <a
                        href="https://www.linkedin.com/company/tedx/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-tedRed hover:text-lightRed transition-all transform hover:scale-125"
                    >
                        <AiFillLinkedin className="text-4xl" />
                    </a>
                    <a
                        href="https://github.com/tedx"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-tedRed hover:text-lightRed transition-all transform hover:scale-125"
                    >
                        <AiFillGithub className="text-4xl" />
                    </a>
                    <a
                        href="https://www.facebook.com/tedx/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-tedRed hover:text-lightRed transition-all transform hover:scale-125"
                    >
                        <FaFacebookF className="text-4xl" />
                    </a>
                </div>

                {/* Footer Links */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-lightGrey mb-8">
                    <div className="text-sm">
                        <h4 className="text-lg font-semibold text-white mb-3">About</h4>
                        <ul>
                            <li>
                                <a href="/about" className="hover:text-tedRed transition-all duration-300">Who We Are</a>
                            </li>
                            <li>
                                <a href="/history" className="hover:text-tedRed transition-all duration-300">Our History</a>
                            </li>
                            <li>
                                <a href="/team" className="hover:text-tedRed transition-all duration-300">Our Team</a>
                            </li>
                        </ul>
                    </div>
                    <div className="text-sm">
                        <h4 className="text-lg font-semibold text-white mb-3">Events</h4>
                        <ul>
                            <li>
                                <a href="/events" className="hover:text-tedRed transition-all duration-300">Upcoming Events</a>
                            </li>
                            <li>
                                <a href="/past-events" className="hover:text-tedRed transition-all duration-300">Past Events</a>
                            </li>
                            <li>
                                <a href="/apply" className="hover:text-tedRed transition-all duration-300">Apply to Speak</a>
                            </li>
                        </ul>
                    </div>
                    <div className="text-sm">
                        <h4 className="text-lg font-semibold text-white mb-3">Contact</h4>
                        <ul>
                            <li>
                                <a href="mailto:contact@tedx.com" className="hover:text-tedRed transition-all duration-300">Email Us</a>
                            </li>
                            <li>
                                <a href="/contact" className="hover:text-tedRed transition-all duration-300">Contact Form</a>
                            </li>
                            <li>
                                <a href="/support" className="hover:text-tedRed transition-all duration-300">Support</a>
                            </li>
                        </ul>
                    </div>
                    <div className="text-sm">
                        <h4 className="text-lg font-semibold text-white mb-3">Legal</h4>
                        <ul>
                            <li>
                                <a href="/privacy-policy" className="hover:text-tedRed transition-all duration-300">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="/terms" className="hover:text-tedRed transition-all duration-300">Terms & Conditions</a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Copyright */}
                <p className="text-sm text-lightGrey mb-4 animate__animated animate__fadeInUp">
                    © 2024 TEDx | All Rights Reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
