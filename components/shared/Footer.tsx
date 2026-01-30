export function Footer() {
    return (
        <footer className="w-full py-6 md:py-12 border-t bg-background">
            <div className="container px-4 md:px-6 mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-sm text-gray-500 text-center md:text-left">
                    &copy; {new Date().getFullYear()} Nitish. Crafted with Next.js & Tailwind.
                </p>
                <div className="flex items-center gap-4">
                    <a href="https://github.com/Nitish01232" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-black transition-colors text-sm">
                        GitHub
                    </a>
                    <a href="https://www.linkedin.com/in/nitish-a-geek" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-black transition-colors text-sm">
                        LinkedIn
                    </a>
                </div>
            </div>
        </footer>
    );
}
