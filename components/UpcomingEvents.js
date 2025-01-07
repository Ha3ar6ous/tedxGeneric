import React from 'react';
import { AiOutlineCalendar, AiFillStar } from 'react-icons/ai';
import { FaTicketAlt } from 'react-icons/fa'; 

const UpcomingEvents = () => {
    return (
        <section className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 py-16 px-6 md:px-12">
            <div className="max-w-screen-xl mx-auto text-center">
                <h2 className="text-4xl font-semibold text-white mb-8 animate__animated animate__fadeIn">
                    Upcoming Events
                </h2>
                <p className="text-lg text-lightGrey mb-16 animate__animated animate__fadeInUp">
                    Join us for an unforgettable experience. Explore our events, theme reveal, and speaker list.
                </p>

                {/* Upcoming Events Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Event 1 */}
                    <div className="bg-white rounded-lg shadow-lg p-8 transform hover:scale-105 transition-all duration-300 animate__animated animate__fadeIn">
                        <AiOutlineCalendar className="text-4xl text-tedRed mb-4 mx-auto" />
                        <h3 className="text-2xl font-semibold text-black mb-3">Event 1: Tech Talks&apos;</h3>
                        <p className="text-lg text-gray-600">Stay ahead in the tech world with insights from industry leaders.</p>
                    </div>

                    {/* Event 2 */}
                    <div className="bg-white rounded-lg shadow-lg p-8 transform hover:scale-105 transition-all duration-300 animate__animated animate__fadeIn">
                        <AiFillStar className="text-4xl text-tedRed mb-4 mx-auto" />
                        <h3 className="text-2xl font-semibold text-black mb-3">Event 2: Theme Reveal</h3>
                        <p className="text-lg text-gray-600">Unveil the theme for this year&apos;s TEDx, setting the stage for amazing talks!</p>
                    </div>

                    {/* Event 3 */}
                    <div className="bg-white rounded-lg shadow-lg p-8 transform hover:scale-105 transition-all duration-300 animate__animated animate__fadeIn">
                        <FaTicketAlt className="text-4xl text-tedRed mb-4 mx-auto" />
                        <h3 className="text-2xl font-semibold text-black mb-3">Event 3: Speaker List</h3>
                        <p className="text-lg text-gray-600">Meet the inspiring speakers who will share their knowledge and stories.</p>
                    </div>
                </div>

                {/* Sign-up Section */}
                <div className="mt-16 bg-black text-white p-8 rounded-lg shadow-lg animate__animated animate__fadeInUp">
                    <h3 className="text-2xl font-semibold mb-4">Sign up for the latest TEDx NITK news!</h3>
                    <p className="text-lg text-lightGrey mb-6">
                        Don&apos;t miss out on any updates. Stay informed about upcoming events, theme reveals, and our amazing speakers.
                    </p>
                    <form action="https://example.com/signup" method="POST">
                        <input
                            type="email"
                            name="email"
                            className="bg-gray-800 text-white px-6 py-3 rounded-md w-full mb-4 border-2 border-transparent focus:border-tedRed focus:ring focus:ring-tedRed focus:ring-opacity-50"
                            placeholder="Enter your email"
                            required
                        />
                        <button
                            type="submit"
                            className="bg-tedRed text-white px-6 py-3 rounded-md w-full hover:bg-lightRed transition duration-300 transform hover:scale-105"
                        >
                            Sign Up
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default UpcomingEvents;
