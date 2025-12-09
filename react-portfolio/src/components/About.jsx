import React from 'react';

const About = () => {
    const education = [
        "Bachelor's degree: Department of Information Network Engineering, Longhua University of Science and Technology, Department of Information Management, minor Department (Graduated on 2024/6/1)",
        "Master's degree: Department of Information Engineering, National Quemoy University (currently working on it)",
    ];

    return (
        <section className="space-y-6">
            <div className="modern-card p-8">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                    <div className="flex-1">
                        <h2 className="text-3xl font-heading font-bold text-slate-900 mb-2">About Me</h2>
                        <p className="text-lg text-slate-600 mb-6">
                            Hi, I'm <span className="font-semibold text-primary">Chang Yung-Yu</span>.
                        </p>

                        <div className="bg-blue-50 border-l-4 border-primary p-4 mb-6">
                            <p className="text-blue-900 font-medium italic">
                                "Like challenges and not afraid of difficulties"
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid gap-4">
                <h3 className="text-xl font-heading font-bold text-slate-800 ml-1">Education</h3>
                {education.map((item, index) => (
                    <div key={index} className="modern-card p-6 flex items-start gap-4">
                        <div className="bg-blue-100 p-2 rounded-lg text-primary mt-1">
                            <i className="fas fa-graduation-cap text-lg"></i>
                        </div>
                        <p className="text-slate-700 leading-relaxed">{item}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default About;
