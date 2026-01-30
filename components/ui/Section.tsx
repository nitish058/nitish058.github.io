import { cn } from "@/lib/utils";

interface SectionProps {
    children: React.ReactNode;
    className?: string;
    id?: string;
}

export function Section({ children, className, id }: SectionProps) {
    return (
        <section id={id} className={cn("py-16 md:py-24 px-6 md:px-12 max-w-5xl mx-auto", className)}>
            {children}
        </section>
    );
}
