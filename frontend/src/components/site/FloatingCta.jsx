import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";

export default function FloatingCta() {
    const [show, setShow] = useState(false);
    useEffect(() => {
        const onScroll = () => setShow(window.scrollY > 400);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <AnimatePresence>
            {show && (
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 30 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-40 flex flex-col gap-3"
                    data-testid="floating-cta"
                >
                    <a
                        href="https://wa.me/919392015888"
                        target="_blank"
                        rel="noreferrer"
                        data-testid="floating-whatsapp"
                        className="w-12 h-12 rounded-full bg-[color:var(--ivory)] border border-[color:var(--obsidian)] flex items-center justify-center shadow-[0_8px_24px_-8px_rgba(0,0,0,0.35)] hover:bg-[color:var(--obsidian)] hover:text-[color:var(--ivory)] transition-colors"
                        aria-label="WhatsApp"
                    >
                        <MessageCircle className="w-4 h-4" strokeWidth={1.5} />
                    </a>
                    <a
                        href="tel:+919392015888"
                        data-testid="floating-call"
                        className="w-12 h-12 rounded-full bg-[color:var(--obsidian)] text-[color:var(--ivory)] flex items-center justify-center shadow-[0_8px_24px_-8px_rgba(0,0,0,0.35)] hover:bg-[color:var(--champagne)] hover:text-[color:var(--obsidian)] transition-colors"
                        aria-label="Call"
                    >
                        <Phone className="w-4 h-4" strokeWidth={1.5} />
                    </a>
                </motion.div>
            )}
        </AnimatePresence>
    );
}


