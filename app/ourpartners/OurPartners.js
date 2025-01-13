import React from 'react';

const sponsors = [
    { id: 1, name: 'Company A', image: '/images/noxlogo.webp', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
    { id: 2, name: 'Company B', image: '/images/noxlogo.webp', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { id: 3, name: 'Company C', image: '/images/noxlogo.webp', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { id: 4, name: 'Company D', image: '/images/noxlogo.webp', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { id: 5, name: 'Company E', image: '/images/noxlogo.webp', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
];

const statsData = [
    { title: "Participants", value: '1K+' },
    { title: "Sessions", value: 10 },
    { title: "Speakers", value: 5 },
    { title: "Workshops", value: 3 },
    { title: "YouTube Views", value: '1M+' },
    { title: "Followers", value: '10K+' },
];

const SponsorCards = () => {
    return (
        <div className="overflow-hidden relative mt-10 mb-10">
            <div className="flex animate-marquee whitespace-nowrap">
                {sponsors.map((sponsor) => (
                    <div key={sponsor.id} className="flex-shrink-0 flex-col bg-gray-800 w-48 min-h-32 shadow-lg rounded-lg flex items-center justify-center mx-2 transition-transform transform hover:scale-105 p-4">
                        <img src={sponsor.image} alt={sponsor.name} className="h-16 mb-2" />
                        <span className="text-sm text-center">{sponsor.name}</span>
                        <span className="text-sm text-center overflow-hidden text-ellipsis whitespace-normal">{sponsor.desc}</span>
                    </div>
                ))}
                {sponsors.map((sponsor) => (
                    <div key={sponsor.id} className="flex-shrink-0 flex-col bg-gray-800 w-48 min-h-32 shadow-lg rounded-lg flex items-center justify-center mx-2 transition-transform transform hover:scale-105 p-4">
                        <img src={sponsor.image} alt={sponsor.name} className="h-16 mb-2" />
                        <span className="text-sm text-center">{sponsor.name}</span>
                        <span className="text-sm text-center overflow-hidden text-ellipsis whitespace-normal">{sponsor.desc}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

const OurPartners = () => {
    return (
        <>
            <section className="pt-20 pb-8 px-6 bg-gray-800">
                <div className="flex justify-between items-center max-w-screen-xl mx-auto">
                    <h2 className="text-3xl font-semibold mt-4">Our Sponsers</h2>
                </div>
            </section>

            <SponsorCards />
            
            <div className="p-6 bg-[#72012b] rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Event Statistics</h2>
                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4">
                    {statsData.map((stat, index) => (
                        <div
                            key={index}
                            className="bg-gray-800 text-center p-4 rounded-lg shadow hover:shadow-lg transition-shadow duration-300"
                        >
                            <h3 className="text-xl font-semibold">{stat.title}</h3>
                            <p className="text-2xl font-bold text-blue-600">{stat.value}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default OurPartners;
