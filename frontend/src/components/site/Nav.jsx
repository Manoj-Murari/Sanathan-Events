import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X } from "lucide-react";

const links = [
    { label: "Craft", href: "#craft" },
    { label: "Services", href: "#services" },
    { label: "Signature", href: "#signature" },
    { label: "Voices", href: "#voices" },
    { label: "Enquire", href: "#contact" },
];

export default function Nav() {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <motion.header
            data-testid="site-nav"
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,border-color,padding] duration-500 ${scrolled
                    ? "bg-[color:var(--ivory)]/95 backdrop-blur-sm border-b border-[color:var(--line)]"
                    : "bg-transparent"
                }`}
        >
            <div className="max-w-[1440px] mx-auto px-5 sm:px-6 md:px-10 lg:px-14 py-4 sm:py-5 flex items-center justify-between gap-3">
                <a
                    href="#top"
                    data-testid="nav-logo"
                    className="flex items-baseline gap-2 group min-w-0"
                >
                    <span className="font-serif text-xl sm:text-2xl md:text-[26px] tracking-tight leading-none">
                        Sanathan
                    </span>
                    <span className="hidden sm:inline text-[10px] tracking-[0.28em] uppercase text-neutral-500 truncate">
                        Events · Vijayawada
                    </span>
                </a>

                <nav className="hidden md:flex items-center gap-8">
                    {links.map((l) => (
                        <a
                            key={l.href}
                            href={l.href}
                            data-testid={`nav-link-${l.label.toLowerCase()}`}
                            className="text-[11px] tracking-[0.24em] uppercase font-semibold text-[color:var(--obsidian)] hover:text-[color:var(--champagne-dim)] transition-colors duration-300"
                        >
                            {l.label}
                        </a>
                    ))}
                </nav>

                <div className="hidden md:flex items-center gap-3">
                    <a
                        href="tel:+919392015888"
                        data-testid="nav-call"
                        className="flex items-center gap-2 text-[12px] tracking-[0.18em] uppercase font-medium"
                    >
                        <Phone className="w-3.5 h-3.5" strokeWidth={1.5} />
                        +91 93920 15888
                    </a>
                </div>

                <button
                    className="md:hidden p-2 -mr-2 relative z-[60] text-[color:var(--obsidian)]"
                    onClick={() => setOpen((v) => !v)}
                    data-testid="nav-menu-toggle"
                    aria-label="Toggle menu"
                >
                    {open ? <X className="w-6 h-6" strokeWidth={1.5} /> : <Menu className="w-6 h-6" strokeWidth={1.5} />}
                </button>
            </div>

            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="md:hidden bg-[color:var(--ivory)] border-t border-[color:var(--line)] overflow-hidden"
                    >
                        <div className="px-6 py-6 flex flex-col gap-5">
                            {links.map((l) => (
                                <a
                                    key={l.href}
                                    href={l.href}
                                    onClick={() => setOpen(false)}
                                    className="text-sm tracking-[0.18em] uppercase font-semibold"
                                    data-testid={`nav-mobile-${l.label.toLowerCase()}`}
                                >
                                    {l.label}
                                </a>
                            ))}
                            <a
                                href="tel:+919392015888"
                                className="text-sm tracking-[0.16em] uppercase flex items-center gap-2 pt-3 border-t border-[color:var(--line)]"
                            >
                                <Phone className="w-4 h-4" strokeWidth={1.5} /> +91 93920 15888
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}

