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
        <section className="space-y-8">
            <h2 className="text-2xl font-heading font-bold text-slate-800 mb-6">Activities & Competitions</h2>

            <div className="grid md:grid-cols-2 gap-6">
                <div className="modern-card p-6">
                    <h3 className="text-xl font-heading font-bold text-slate-700 mb-4 pb-2 border-b border-slate-100">
                        Community
                    </h3>
                    <ul className="space-y-4">
                        {community.map((item, index) => (
                            <li key={index} className="flex gap-3 text-slate-600">
                                <span className="text-primary mt-1">●</span>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="modern-card p-6">
                    <h3 className="text-xl font-heading font-bold text-slate-700 mb-4 pb-2 border-b border-slate-100">
                        Competitions
                    </h3>
                    <ul className="space-y-4">
                        {competitions.map((item, index) => (
                            <li key={index} className="flex gap-3 text-slate-600">
                                <span className="text-amber-500 mt-1">★</span>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Activities;
