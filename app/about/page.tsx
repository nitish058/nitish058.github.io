"use client";

import { Section } from "@/components/ui/Section";
import { motion } from "framer-motion";

export default function AboutPage() {
    return (
        <Section>
            <div className="space-y-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-4"
                >
                    <h1 className="text-4xl font-bold tracking-tight">About Me</h1>
                    <div className="h-1 w-20 bg-black dark:bg-white rounded-full" />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="grid md:grid-cols-2 gap-12 items-start"
                >
                    <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                        <p>
                            Hello! I'm Nitish, a Computer Science student with a deep passion for building robust software solutions.
                            My journey began with a curiosity about how things work under the hood, leading me to specialize in
                            <span className="font-semibold text-black dark:text-white"> Java Backend Engineering</span> and
                            <span className="font-semibold text-black dark:text-white"> Android Development</span>.
                        </p>
                        <p>
                            I believe in the power of <span className="text-black dark:text-white">simplicity and discipline</span>. Whether it's writing clean,
                            maintainable code or designing user interfaces, I strive for minimalist perfection similar to the
                            products I admire.
                        </p>
                        <p>
                            My goal is simple: to solve complex problems at scale. I am currently honing my skills in algorithms,
                            system design, and modern frameworks to prepare for a career at a top-tier technology company.
                        </p>
                    </div>

                    <div className="bg-gray-50 dark:bg-neutral-900 p-8 rounded-2xl border border-gray-100 dark:border-neutral-800">
                        <h3 className="text-xl font-semibold mb-4 text-black dark:text-white">What I Value</h3>
                        <ul className="space-y-4 text-gray-600 dark:text-gray-400">
                            <li className="flex items-center gap-3">
                                <span className="h-2 w-2 rounded-full bg-black dark:bg-white"></span>
                                <span>Clean, Efficient Code</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="h-2 w-2 rounded-full bg-black dark:bg-white"></span>
                                <span>User-Centric Design</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="h-2 w-2 rounded-full bg-black dark:bg-white"></span>
                                <span>Continuous Learning</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="h-2 w-2 rounded-full bg-black dark:bg-white"></span>
                                <span>Problem Solving</span>
                            </li>
                        </ul>
                    </div>
                </motion.div>
            </div>
        </Section>
    );
}
