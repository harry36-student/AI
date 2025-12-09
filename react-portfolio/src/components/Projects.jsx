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
        <section className="space-y-8">
            <div>
                <h2 className="text-2xl font-heading font-bold text-slate-800 mb-4 flex items-center gap-2">
                    <i className="fas fa-book-open text-primary"></i> Learning Projects
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {learning.map((project, index) => (
                        <div key={index} className="modern-card p-5 flex flex-col h-full border-l-4 border-l-blue-400">
                            <p className="text-slate-700 font-medium">{project}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div>
                <h2 className="text-2xl font-heading font-bold text-slate-800 mb-4 flex items-center gap-2">
                    <i className="fas fa-flask text-purple-600"></i> Research Projects
                </h2>
                <div className="grid md:grid-cols-1 gap-4">
                    {research.map((project, index) => (
                        <div key={index} className="modern-card p-5 border-l-4 border-l-purple-400">
                            <p className="text-slate-700 font-medium">{project}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
