import React from 'react';

const About = () => {
    const education = [
        "Bachelor's degree: Department of Information Network Engineering, Longhua University of Science and Technology, Department of Information Management, minor Department (Graduated on 2024/6/1)",
        "Master's degree: Department of Information Engineering, National Quemoy University (currently working on it)",
    ];

    return (
        <section>
            <h2 className="text-2xl font-semibold mb-2">About Me</h2>
            <p className="mb-2"><strong>Name:</strong> Chang Yung-Yu</p>
            <p className="mb-4">
                <strong>Motto:</strong> Like challenges and not afraid of difficulties
            </p>
            <h3 className="font-semibold">Education</h3>
            <ul className="list-disc list-inside">
                {education.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </section>
    );
};

export default About;
