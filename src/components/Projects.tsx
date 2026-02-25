"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";
import Image from "next/image";

const projects = [
    {
        id: 1,
        title: "FileStarter – Insurance Claims AI System",
        category: "Python & ChromaDB",
        description: "Automated PDF policy analysis reducing manual review time by 70%. Implemented semantic clause retrieval for accurate claim matching with real-time AI decisions.",
        link: "https://beetals-o1-aenhveuvb5bkqgj5c6whro.streamlit.app/", // Live App
        color: "bg-emerald-900/30",
        image: "/projects/filestarter_ai.png"
    },
    {
        id: 2,
        title: "Helpdesk Spring AI",
        category: "Java & Spring Boot",
        description: "Automated ticket processing reducing response effort by 60%. Built scalable REST APIs using Spring Boot with a modular backend architecture.",
        link: "https://github.com/yashrajputs/Helpdesk-spring-ai", // GitHub Repo
        color: "bg-emerald-900/30",
        image: "/projects/helpdesk_spring.png"
    },
    {
        id: 3,
        title: "CF-App (Comfort Food App)",
        category: "React Native & Redux",
        description: "Cross-platform React Native mobile application with a Redux-based persistent favorites system and seamless multi-navigation UI experience.",
        link: "https://drive.google.com/file/d/1NekS2yt51J2tdP0kTP2KHsfcrOAizldJ/view", // Google Drive Link
        color: "bg-orange-900/30",
        image: "/projects/cf_app.png"
    },
];

const experiences = [
    {
        id: 1,
        company: "Bookose Startup",
        role: "Application Developer",
        date: "Jan 2024 – Present",
        description: "Built backend systems supporting 1,000+ users with 30% faster API performance. Reduced server failures by 40% through architecture optimization and delivered 5+ scalable production modules across teams."
    },
    {
        id: 2,
        company: "VITAiL'S Ring Startup",
        role: "Systems Developer",
        date: "Dec 2024 – Present",
        description: "Developed AI-enabled wearable prototypes improving sensor accuracy by 25%. Integrated real-time hardware–software data pipelines and performed system testing and optimization."
    },
    {
        id: 3,
        company: "Machine Sound Diagnostic System",
        role: "Application Developer",
        date: "Dec 2025 – Present",
        description: "Built ML fault detection system achieving 90% accuracy. Processed 1,000+ audio samples into spectrogram datasets and designed predictive maintenance pipeline."
    }
]

export default function Projects() {
    return (
        <>
            {/* EXPERIENCE SECTION */}
            <section className="relative w-full bg-[#0a0a0a] border-t border-white/5 py-32 px-6 md:px-12 lg:px-24 z-20">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="mb-16"
                    >
                        <h2 className="text-sm font-medium tracking-[0.2em] text-white/50 uppercase mb-4">
                            Experience
                        </h2>
                        <h3 className="text-4xl md:text-6xl font-semibold tracking-tight text-white">
                            Work History
                        </h3>
                    </motion.div>

                    <div className="flex flex-col gap-12">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={exp.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="group border-l-2 border-white/10 pl-6 md:pl-10 relative py-2 transition-colors hover:border-emerald-400"
                            >
                                <div className="absolute w-4 h-4 rounded-full bg-[#0a0a0a] border-2 border-white/20 -left-[9px] top-4 group-hover:border-emerald-400 group-hover:bg-emerald-400 transition-colors" />
                                <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2 mb-3">
                                    <h4 className="text-2xl md:text-3xl font-medium text-white tracking-wide">
                                        {exp.company}
                                    </h4>
                                    <p className="text-emerald-400 tracking-widest text-sm uppercase font-semibold">
                                        {exp.date}
                                    </p>
                                </div>
                                <p className="text-white/80 font-medium mb-3">{exp.role}</p>
                                <p className="text-white/60 font-light leading-relaxed max-w-3xl">
                                    {exp.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* PROJECTS SECTION */}
            <section className="relative w-full bg-[#121212] py-32 px-6 md:px-12 lg:px-24 z-20">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="mb-20"
                    >
                        <h2 className="text-sm font-medium tracking-[0.2em] text-white/50 uppercase mb-4">
                            Selected Works
                        </h2>
                        <h3 className="text-4xl md:text-6xl font-semibold tracking-tight text-white max-w-2xl">
                            Featured Projects &<br /> Case Studies
                        </h3>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                        {projects.map((project, index) => (
                            <motion.a
                                key={project.id}
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className={`group block relative overflow-hidden rounded-2xl flex flex-col h-[500px] transition-all duration-500 will-change-transform hover:-translate-y-2 border border-white/5 bg-[#1a1a1a]`}
                            >
                                {/* Image Section */}
                                <div className="relative w-full h-[220px] overflow-hidden bg-black/50">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] to-transparent opacity-80" />

                                    <div className="absolute top-6 left-6 z-10">
                                        <span className="text-xs font-semibold tracking-widest text-emerald-400 uppercase drop-shadow-md">
                                            {project.category}
                                        </span>
                                    </div>
                                    <div className="absolute top-4 right-4 z-10 bg-white/10 backdrop-blur-md p-3 rounded-full opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                                        <ArrowUpRight className="text-emerald-400 w-5 h-5" />
                                    </div>
                                </div>

                                {/* Text Section */}
                                <div className="relative z-10 flex flex-col flex-grow p-8">
                                    <h4 className="text-2xl font-medium text-white mb-4 tracking-wide group-hover:text-emerald-300 transition-colors">
                                        {project.title}
                                    </h4>
                                    <p className="text-white/60 font-light leading-relaxed text-sm">
                                        {project.description}
                                    </p>
                                </div>
                            </motion.a>
                        ))}
                    </div>
                </div>
            </section>

            {/* SKILLS & PATENTS SECTION */}
            <section className="relative w-full bg-[#0a0a0a] py-32 px-6 md:px-12 lg:px-24 z-20 border-t border-white/5">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                    >
                        <h3 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-8">
                            Patents & Certifications
                        </h3>
                        <div className="space-y-6 text-white/70 font-light">
                            <div>
                                <p className="text-white font-medium mb-2">Patents:</p>
                                <ul className="list-square ml-4 space-y-1">
                                    <li>Smart Ring</li>
                                    <li>Gesture Control System</li>
                                    <li>Water Stopper</li>
                                    <li>Gesture Pen</li>
                                </ul>
                            </div>
                            <div className="pt-4 border-t border-white/10">
                                <ul className="space-y-3">
                                    <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-emerald-400" /> Smart India Hackathon — 2nd Place Winner</li>
                                    <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-emerald-400" /> Advanced Technology Certification</li>
                                    <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-emerald-400" /> React Native Certification</li>
                                </ul>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                    >
                        <h3 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-8">
                            Technical Skills
                        </h3>
                        <div className="space-y-6 text-white/70 font-light">
                            <div>
                                <p className="text-emerald-400 font-medium text-sm tracking-widest uppercase mb-2">Languages</p>
                                <p className="text-lg">Java, JavaScript, MySQL, Python</p>
                            </div>
                            <div>
                                <p className="text-emerald-400 font-medium text-sm tracking-widest uppercase mb-2">Frameworks</p>
                                <p className="text-lg">Spring Boot, React Native, React.js, Redux Toolkit</p>
                            </div>
                            <div>
                                <p className="text-emerald-400 font-medium text-sm tracking-widest uppercase mb-2">Tools</p>
                                <p className="text-lg">Git, GitHub, Streamlit, MySQL, ChromaDB, Figma</p>
                            </div>
                            <div>
                                <p className="text-emerald-400 font-medium text-sm tracking-widest uppercase mb-2">Core Concepts</p>
                                <p className="text-lg">Data Structures, Backend Systems, Machine Learning, REST APIs, System Design, UI/UX Wireframing</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
