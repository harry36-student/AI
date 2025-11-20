import React from 'react';

const Skills = () => {
    const skills = [
        "TQC-Artificial Intelligence Application and Technology Certificate",
        "Google Cloud Data Analytics Certificate",
        "Gemini Certified Educator"
    ];

    return (
        <section>
            <h2 className="text-2xl font-semibold mb-2">Skills</h2>
            <div style={{ textAlign: 'left', margin: '20px 0' }}>
                <div
                    data-iframe-width="150"
                    data-iframe-height="270"
                    data-share-badge-id="493f635d-f8ff-4c06-870c-1a4ce4991069"
                    data-share-badge-host="https://www.credly.com"
                ></div>
                <ul className="list-disc list-inside mt-4">
                    {skills.map((skill, index) => (
                        <li key={index}>{skill}</li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Skills;
