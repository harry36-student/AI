import React from 'react';

const Skills = () => {
    const skills = [
        "TQC-Artificial Intelligence Application and Technology Certificate",
        "Google Cloud Data Analytics Certificate",
        "Gemini Certified Educator"
    ];

    return (
        <section className="space-y-6">
            <h2 className="text-2xl font-heading font-bold text-slate-800 mb-6">Skills & Certifications</h2>

            <div className="grid md:grid-cols-2 gap-6">
                <div className="modern-card p-6">
                    <h3 className="text-lg font-bold text-slate-700 mb-4 flex items-center gap-2">
                        <i className="fas fa-certificate text-primary"></i> Certifications
                    </h3>
                    <ul className="space-y-3">
                        {skills.map((skill, index) => (
                            <li key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors">
                                <i className="fas fa-check-circle text-green-500 mt-1"></i>
                                <span className="text-slate-700 font-medium">{skill}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="modern-card p-6 flex flex-col items-center justify-center text-center">
                    <h3 className="text-lg font-bold text-slate-700 mb-4">Credly Badge</h3>
                    <div
                        data-iframe-width="150"
                        data-iframe-height="270"
                        data-share-badge-id="493f635d-f8ff-4c06-870c-1a4ce4991069"
                        data-share-badge-host="https://www.credly.com"
                    ></div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
