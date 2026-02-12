"use client";

import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import Link from "next/link";

const projects = [
    {
        title: "E-Commerce Microservices",
        description: "A scalable backend system built with Spring Boot and Microservices architecture. Features include authentication, product management, and order processing with Kafka messaging.",
        tags: ["Java", "Spring Boot", "Kafka", "Docker", "PostgreSQL"],
        github: "https://github.com/nitish058",
        demo: null,
    },
    {
        title: "Task Master Android App",
        description: "A modern task management application built with Jetpack Compose. Supports offline synchronization using Room Database and follows MVVM clean architecture.",
        tags: ["Kotlin", "Android", "Jetpack Compose", "Room DB"],
        github: "https://github.com/nitish058",
        demo: "https://play.google.com",
    },
    {
        title: "Algorithm Visualizer",
        description: "Interactive web application to visualize sorting and pathfinding algorithms. Built to help students understand complex algorithms intuitively.",
        tags: ["TypeScript", "React", "Algorithms", "Tailwind"],
        github: "https://github.com/nitish058",
        demo: "https://github.com/nitish058",
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
