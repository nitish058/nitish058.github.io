"use client";

import { Section } from "@/components/ui/Section";
import { motion } from "framer-motion";

const skills = [
    {
        category: "Languages",
        items: ["Java", "Kotlin", "SQL"],
    },
    {
        category: "Backend",
        items: ["Ktor", "Spring Boot"],
    },
    {
        category: "Android",
        items: ["Jetpack Compose", "MVVM Architecture", "Coroutines", "Retrofit", "Room DB"],
    },
    {
        category: "Tools & DevOps",
        items: ["Git & GitHub", "IntelliJ IDEA", "Android Studio", "Linux"],
    },
];

export default function SkillsPage() {
    return (
        <Section>
            <div className="space-y-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-4"
                >
                    <h1 className="text-4xl font-bold tracking-tight">Skills</h1>
                    <div className="h-1 w-20 bg-black dark:bg-white rounded-full" />
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {skills.map((skillGroup, index) => (
                        <motion.div
                            key={skillGroup.category}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group p-8 rounded-2xl bg-white dark:bg-neutral-900 border border-gray-100 dark:border-neutral-800 shadow-sm hover:shadow-md transition-shadow"
                        >
                            <h3 className="text-xl font-semibold mb-6 flex items-center gap-3">
                                <span className="w-1.5 h-6 bg-black dark:bg-white rounded-full" />
                                {skillGroup.category}
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {skillGroup.items.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-4 py-2 bg-gray-50 dark:bg-neutral-800 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-full border border-gray-100 dark:border-neutral-700"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
