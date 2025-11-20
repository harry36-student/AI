import React from 'react';

const Contact = () => {
    const contact = {
        email: "yuhome31@gmail.com",
        instagram: "https://www.instagram.com/yu.ha.944023?igsh=aDg1Y3BvOW5ldDNh",
        linkedin: "https://www.linkedin.com/in/yuyoungzha/",
        github: "https://github.com/harry36-student?tab=repositories/",
        Blog: "https://github.com/harry36-student/sift",
    };

    return (
        <section>
            <h2 className="text-2xl font-semibold mb-2">Contact</h2>
            <ul className="list-disc list-inside">
                <li>
                    Email: <a href={`mailto:${contact.email}`} className="text-blue-600">{contact.email}</a>
                </li>
                <li>
                    Instagram: <a href={contact.instagram} className="text-blue-600" target="_blank" rel="noopener noreferrer">yu.ha.944023</a>
                </li>
                <li>
                    LinkedIn: <a href={contact.linkedin} className="text-blue-600" target="_blank" rel="noopener noreferrer">yuyoungzha</a>
                </li>
                <li>
                    GitHub: <a href={contact.github} className="text-blue-600" target="_blank" rel="noopener noreferrer">harry36-student</a>
                </li>
                <li>
                    Blog: <a href={contact.Blog} className="text-blue-600" target="_blank" rel="noopener noreferrer">sift</a>
                </li>
            </ul>
        </section>
    );
};

export default Contact;
