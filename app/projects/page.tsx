"use client";

import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import Link from "next/link";

const projects = [
    {
        title: "Karto – Android E-Commerce App",
        description: "Karto is a modern Android e-commerce application built using Kotlin and Jetpack Compose, following MVVM + Clean Architecture principles. It integrates REST APIs for product and user data, supports offline-first persistence using Room, and focuses heavily on scalable state management, modular design, and maintainable code structure.",
        tags: ["Kotlin", "Jetpack Compose", "MVVM", "Room", "Retrofit"],
        github: "https://github.com/nitish058",
        demo: null,
    },
    {
        title: "Attendance Calculator – Java Console App",
        description: "A simple yet well-structured Java console application that calculates course attendance and helps students decide whether they must attend upcoming classes or can safely skip them based on a required attendance percentage. Built using a strict layered (N-tier) architecture to demonstrate clean coding practices, input validation, and separation of concerns even in a small project.",
        tags: ["Java", "N-tier Architecture", "Console App"],
        github: "https://github.com/nitish058",
        demo: null,
    },
    {
        title: "ISS Tracker",
        description: "A Java-based application that tracks the real-time location of the International Space Station (ISS) using a public API and visualizes its live position on an interactive world map. The project follows clean N-tier architecture, supports both console mode and JavaFX UI, and is structured using an industry-standard Maven project layout.",
        tags: ["Java", "JavaFX", "Maven", "API Integration"],
        github: "https://github.com/nitish058",
        demo: null,
    },
];

export default function ProjectsPage() {
    return (
        <Section>
            <div className="space-y-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-4"
                >
                    <h1 className="text-4xl font-bold tracking-tight">Featured Projects</h1>
                    <div className="h-1 w-20 bg-black dark:bg-white rounded-full" />
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="flex flex-col justify-between p-8 rounded-2xl bg-white dark:bg-neutral-900 border border-gray-100 dark:border-neutral-800 shadow-sm hover:shadow-lg transition-all duration-300"
                        >
                            <div className="space-y-4">
                                <h3 className="text-2xl font-bold tracking-tight">{project.title}</h3>
                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{project.description}</p>
                                <div className="flex flex-wrap gap-2 pt-2">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-3 py-1 bg-gray-100 dark:bg-neutral-800 text-gray-700 dark:text-gray-300 text-xs font-medium rounded-full"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="flex gap-4 pt-8 mt-auto">
                                <Button asChild variant="default" size="sm">
                                    <Link href={project.github} target="_blank" className="flex items-center gap-2">
                                        <Github className="h-4 w-4" /> Code
                                    </Link>
                                </Button>
                                {project.demo && (
                                    <Button asChild variant="outline" size="sm">
                                        <Link href={project.demo} target="_blank" className="flex items-center gap-2">
                                            <ExternalLink className="h-4 w-4" /> Demo
                                        </Link>
                                    </Button>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
