import React from 'react';

const Activities = () => {
    const community = [
        "Participate in GoogleDSC project: Currently GDSC X LHU Lead (2023–2024)",
        "Participate in devfest Taipei 2023",
        "Attend SITCON 2024",
    ];

    const competitions = [
        "Participated in the Asian Intelligent Robot-Obstacle Avoidance Competition and won fifth place",
        "Participate in the Asian Intelligent Robot-Obstacle Avoidance Competition and win masterpieces",
        "Participate in the Ministry of Interior’s innovative and creative application competition",
    ];

    return (
        <section>
            <h2 className="text-2xl font-semibold mb-2">Activities & Competitions</h2>
            <h3 className="font-semibold mt-4">Community</h3>
            <ul className="list-disc list-inside">
                {community.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <h3 className="font-semibold mt-4">Competitions</h3>
            <ul className="list-disc list-inside">
                {competitions.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </section>
    );
};

export default Activities;
