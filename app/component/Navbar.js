'use client';
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { AiOutlineHome} from 'react-icons/ai'; // Example additional icons
import { MdOutlineSpeakerNotes, MdOutlineVideoLibrary } from 'react-icons/md';
import { RiTeamLine } from 'react-icons/ri';
import { FiPhoneCall } from 'react-icons/fi';
import Link from 'next/link';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { name: 'Home', icon: <AiOutlineHome />, href: '/' },
        { name: 'Speakers', icon: <MdOutlineSpeakerNotes />,href: '/speakers' },
        { name: 'Team', icon: <RiTeamLine />, href: '/team' },
        { name: 'Watch', icon: <MdOutlineVideoLibrary />, href: '/watch' },
        { name: 'Our Partners', icon: null, href: '/ourpartners' },
        { name: 'Contact Us', icon: <FiPhoneCall />, href: '/contactus' },
    ];

    return (
        <nav className="bg-black text-white fixed w-full z-50 shadow-lg transition-all duration-300">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="flex items-center">
                    <img
                        src="/tedx-logo.png" // Replace with your logo path
                        alt="TEDx Logo"
                        className="h-12 transform hover:scale-105 transition duration-300"
                    />
                    <span className="ml-2 text-2xl font-bold text-tedRed">
                        TEDxCollege
                    </span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-8">
                    {navItems.map(({ name, icon,href }, index) => (
                        <Link
                            key={index}
                            href={href}
                            className="flex items-center space-x-2 hover:text-tedRed transition duration-300 font-medium"
                        >
                            {icon && <span className="text-lg">{icon}</span>}
                            <span>{name}</span>
                        </Link>
                    ))}
                </div>

                {/* Hamburger Menu */}
                <div
                    className="md:hidden text-white cursor-pointer"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-black py-4 space-y-4 text-center">
                    {navItems.map(({ name, icon, href }, index) => (
                        <Link
                            key={index}
                            href={href}
                            className="block hover:text-tedRed transition duration-300 font-medium"
                            onClick={() => setIsOpen(false)} // Close menu on click
                        >
                            <div className="flex justify-center items-center space-x-2">
                                {icon && <span className="text-lg">{icon}</span>}
                                <span>{name}</span>
                            </div>
                        </Link>
                    ))}
                </div>
            )}
        </nav>
    );
};

export default Navbar;
