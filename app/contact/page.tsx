"use client";

import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
    return (
        <Section>
            <div className="max-w-2xl mx-auto space-y-12 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-6"
                >
                    <div className="inline-flex items-center justify-center p-3 bg-gray-50 rounded-full mb-4">
                        <Mail className="h-6 w-6 text-black" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Get in Touch</h1>
                    <p className="text-xl text-gray-600">
                        I'm currently looking for new opportunities as a Software Engineer.
                        Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex flex-col items-center gap-6"
                >
                    <Button asChild size="lg" className="rounded-full px-8 text-lg h-14">
                        <a href="mailto:Nitishbhusnur@gmail.com">
                            Say Hello <ArrowRight className="ml-2 h-5 w-5" />
                        </a>
                    </Button>

                    <div className="flex gap-6 mt-8">
                        <Link
                            href="https://github.com/nitish058"
                            target="_blank"
                            className="p-4 bg-gray-50 rounded-full text-gray-600 hover:text-black hover:bg-gray-100 transition-all"
                        >
                            <Github className="h-6 w-6" />
                            <span className="sr-only">GitHub</span>
                        </Link>
                        <Link
                            href="https://www.linkedin.com/in/nitish-a-geek"
                            target="_blank"
                            className="p-4 bg-gray-50 rounded-full text-gray-600 hover:text-black hover:bg-gray-100 transition-all"
                        >
                            <Linkedin className="h-6 w-6" />
                            <span className="sr-only">LinkedIn</span>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </Section>
    );
}
