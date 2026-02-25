"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Overlay() {
    const containerRef = useRef<HTMLDivElement>(null);

    // Track scroll within the 500vh container
    const { scrollYProgress } = useScroll({
        target: containerRef,
        // By using standard offsets, 0 corresponds to top of 500vh, 1 to the bottom.
        offset: ["start start", "end end"],
    });

    // Section 1 (0% scroll): "My Name. Creative Developer." (Center)
    const y1 = useTransform(scrollYProgress, [0, 0.2], ["0vh", "-50vh"]);
    const opacity1 = useTransform(scrollYProgress, [0, 0.15, 0.2], [1, 1, 0]);

    // Section 2 (30% scroll): "I build digital experiences." (Left aligned)
    const y2 = useTransform(scrollYProgress, [0.15, 0.3, 0.45], ["50vh", "0vh", "-50vh"]);
    const opacity2 = useTransform(scrollYProgress, [0.15, 0.25, 0.35, 0.45], [0, 1, 1, 0]);
    const x2 = useTransform(scrollYProgress, [0.15, 0.3], ["-10vw", "0vw"]);

    // Section 3 (60% scroll): "Bridging design and engineering." (Right aligned)
    const y3 = useTransform(scrollYProgress, [0.45, 0.6, 0.8], ["50vh", "0vh", "-50vh"]);
    const opacity3 = useTransform(scrollYProgress, [0.45, 0.55, 0.7, 0.8], [0, 1, 1, 0]);
    const x3 = useTransform(scrollYProgress, [0.45, 0.6], ["10vw", "0vw"]);

    return (
        <div ref={containerRef} className="absolute inset-0 pointer-events-none z-10">
            {/* 
        The sticky wrapper holds our view window in place while the user scrolls down the 500vh container.
      */}
            <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-center items-center">

                {/* SECTION 1 */}
                <motion.div
                    style={{ y: y1, opacity: opacity1 }}
                    className="absolute inset-0 flex flex-col items-center justify-center text-center p-6"
                >
                    <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-white drop-shadow-lg">
                        YASH
                    </h1>
                    <p className="mt-4 text-xl md:text-3xl text-emerald-400 font-light tracking-wide max-w-lg">
                        Application Developer.
                    </p>
                    <p className="mt-4 text-sm md:text-md text-white/50 tracking-widest uppercase">
                        B.Tech CS Undergrad, GLA University (2026)
                    </p>
                </motion.div>

                {/* SECTION 2 */}
                <motion.div
                    style={{ y: y2, opacity: opacity2, x: x2 }}
                    className="absolute inset-0 flex flex-col justify-center items-start text-left p-12 md:p-24"
                >
                    <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-white drop-shadow-md leading-[1.1] max-w-2xl">
                        I build <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">scalable backend systems</span>.
                    </h2>
                    <p className="mt-6 text-lg text-white/70 max-w-md font-light">
                        Specializing in AI-powered systems, backend development, and fast full-stack applications.
                    </p>
                </motion.div>

                {/* SECTION 3 */}
                <motion.div
                    style={{ y: y3, opacity: opacity3, x: x3 }}
                    className="absolute inset-0 flex flex-col justify-center items-end text-right p-12 md:p-24"
                >
                    <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-white drop-shadow-md leading-[1.1] max-w-2xl">
                        From <span className="italic font-light text-emerald-400">startups</span> to <br /> production-ready.
                    </h2>
                    <p className="mt-6 text-lg text-white/70 max-w-md font-light text-right">
                        Reducing server failures, automating processes with AI, and crafting seamless cross-platform experiences.
                    </p>
                </motion.div>

            </div>
        </div>
    );
}
