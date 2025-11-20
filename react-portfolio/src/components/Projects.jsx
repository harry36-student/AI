import React from 'react';

const Projects = () => {
    const learning = [
        "Writing operating system scheduling algorithm using C++",
        "Use PHP language and Laravel architecture to create small web pages",
        "Chat messages with Google Firebase database via Android studio",
    ];

    const research = [
        "Using Python to write a program to detect the number of people in the classroom",
    ];

    return (
        <section>
            <h2 className="text-2xl font-semibold mb-2">Projects</h2>
            <h3 className="font-semibold mt-4">Learning Projects</h3>
            <ul className="list-disc list-inside">
                {learning.map((project, index) => (
                    <li key={index}>{project}</li>
                ))}
            </ul>

            <h3 className="font-semibold mt-4">Research Projects</h3>
            <ul className="list-disc list-inside">
                {research.map((project, index) => (
                    <li key={index}>{project}</li>
                ))}
            </ul>
        </section>
    );
};

export default Projects;
