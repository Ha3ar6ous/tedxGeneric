import React from "react";

const orgTeam = [
    {
        photo: 'images/speaker1.png',
        name: 'John Doe',
        position: 'Position1',
        email: 'name@example.com',
        phone: '123-456-7890',
    },
    {
        photo: 'images/speaker1.png',
        name: 'John Doe',
        position: 'Position2',
        email: 'name@example.com',
        phone: '098-765-4321',
    },
];

const Authorities = [
    {
        photo: 'images/speaker2.png',
        name: 'John Doe',
        position: 'Position1',
        email: 'name@example.com',
        phone: '123-456-7890',
    },
    {
        photo: 'images/speaker2.png',
        name: 'John Doe',
        position: 'Position2',
        email: 'name@example.com',
        phone: '098-765-4321',
    },
];

const Official = [
    {
        photo: 'images/speaker3.png',
        name: 'John Doe',
        position: 'Position1',
        email: 'name@example.com',
        phone: '123-456-7890',
    },
    {
        photo: 'images/speaker3.png',
        name: 'John Doe',
        position: 'Position2',
        email: 'name@example.com',
        phone: '098-765-4321',
    },
];

const Card = ({ photo, position, email, phone, name}) => {
    return (
        <div className="bg-gray-900 shadow-md rounded-lg p-4 m-4">
            <img src={photo} alt="Profile" className="w-full h-48 object-cover rounded-t-lg" />
            <div className="mt-4">
            <h2 className="text-xl font-semibold">{name}</h2>
                <h2 className="text-xl font-semibold">{position}</h2>
                <p className="text-gray-600">{email}</p>
                <p className="text-gray-600">{phone}</p>
            </div>
        </div>
    );
};

const ContactUs = () => {
    return (
        <>
            <section className="pt-20 pb-8 px-6 bg-gray-800 text-center">
                <div className="flex justify-between items-center max-w-screen-xl ">
                    <h2 className="text-3xl font-semibold mt-4">Contact Us</h2>
                </div>
            </section>

            <div className="flex flex-col items-center bg-black mt-4">
                <h1 className="text-3xl px-4 text-[#E62B1E] font-bold">Organizing Team</h1>
                <div className="grid grid-cols-2  gap-4">
                    {orgTeam.map((team, index) => (
                        <Card
                            key={index}
                            photo={team.photo}
                            name={team.name}
                            position={team.position}
                            email={team.email}
                            phone={team.phone}
                        />
                    ))}
                </div>
                <hr className="border-t border-white w-1/2 my-4" />
                <h1 className="text-3xl px-4 text-[#E62B1E] font-bold">College Authorities</h1>
                <div className="grid grid-cols-2  gap-4">
                    {Authorities.map((team, index) => (
                        <Card
                            key={index}
                            photo={team.photo}
                            name={team.name}
                            position={team.position}
                            email={team.email}
                            phone={team.phone}
                        />
                    ))}
                </div>
                <hr className="border-t border-white w-1/2 my-4" />
                <h1 className="text-3xl px-4 text-[#E62B1E] font-bold">Official TEDx</h1>
                <div className="grid grid-cols-2  gap-4">
                    {Official.map((team, index) => (
                        <Card
                            key={index}
                            photo={team.photo}
                            name={team.name}
                            position={team.position}
                            email={team.email}
                            phone={team.phone}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};

export default ContactUs;