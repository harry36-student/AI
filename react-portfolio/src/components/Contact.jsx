import React from 'react';

const Contact = () => {
    const contact = {
        email: { value: "yuhome31@gmail.com", icon: "fa-envelope", label: "Email" },
        instagram: { value: "https://www.instagram.com/yu.ha.944023?igsh=aDg1Y3BvOW5ldDNh", icon: "fa-brands fa-instagram", label: "Instagram" },
        linkedin: { value: "https://www.linkedin.com/in/yuyoungzha/", icon: "fa-brands fa-linkedin", label: "LinkedIn" },
        github: { value: "https://github.com/harry36-student?tab=repositories/", icon: "fa-brands fa-github", label: "GitHub" },
        Blog: { value: "https://github.com/harry36-student/sift", icon: "fa-rss", label: "Blog" },
    };

    return (
        <section className="space-y-6">
            <h2 className="text-2xl font-heading font-bold text-slate-800 mb-6">Get in Touch</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {Object.entries(contact).map(([key, { value, icon, label }]) => (
                    <a
                        key={key}
                        href={key === 'email' ? `mailto:${value}` : value}
                        target={key === 'email' ? undefined : "_blank"}
                        rel={key === 'email' ? undefined : "noopener noreferrer"}
                        className="modern-card p-6 flex flex-col items-center justify-center text-center gap-3 hover:-translate-y-1 transition-transform cursor-pointer group"
                    >
                        <div className="w-12 h-12 bg-blue-50 text-primary rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                            <i className={`fas ${icon} text-2xl`}></i>
                        </div>
                        <div>
                            <h3 className="font-bold text-slate-700">{label}</h3>
                            <p className="text-sm text-slate-500 truncate max-w-[200px]">
                                {key === 'email' ? value : 'View Profile'}
                            </p>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
};

export default Contact;
