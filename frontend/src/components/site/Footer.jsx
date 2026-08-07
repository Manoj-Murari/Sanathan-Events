import { Instagram, Facebook } from "lucide-react";

export default function Footer() {
    return (
                                <footer
                            data-testid="site-footer"
                            className="bg-[color:var(--obsidian)] text-[color:var(--ivory)] pt-16 sm:pt-20 md:pt-28 pb-10"
                        >
                            <div className="max-w-[1440px] mx-auto px-5 sm:px-6 md:px-10 lg:px-14">
                                <div className="grid grid-cols-12 gap-8 md:gap-12 border-b border-white/20 pb-12 sm:pb-16">
                                    <div className="col-span-12 md:col-span-6">
                                        <div className="text-[10px] tracking-[0.28em] sm:tracking-[0.32em] uppercase text-neutral-400 mb-4 sm:mb-6">
                                            The Studio
                                        </div>
                                        <h3 className="font-serif italic font-light text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.02] md:leading-[0.95] tracking-tight max-w-2xl">
                                            Compose your day with us.
                                        </h3>
                                        <a
                                            href="#contact"
                                            className="mt-6 sm:mt-8 inline-flex items-center gap-3 text-[11px] tracking-[0.24em] uppercase font-semibold border-b border-[color:var(--champagne)] pb-1 text-[color:var(--champagne)]"
                                        >
                                            Begin an enquiry →
                                        </a>
                                    </div>

                                    <div className="col-span-6 md:col-span-2">
                                        <div className="text-[10px] tracking-[0.28em] sm:tracking-[0.32em] uppercase text-neutral-400 mb-4 sm:mb-6">
                                            Studio
                                        </div>
                                        <p className="text-[13px] sm:text-sm leading-relaxed text-neutral-200">
                                            Near Noble Kids,
                                            <br />
                                            Maruthi Nagar,
                                            <br />
                                            Machavaram, Vijayawada,
                                            <br />
                                            Andhra Pradesh
                                        </p>
                                    </div>

                                    <div className="col-span-6 md:col-span-2">
                                        <div className="text-[10px] tracking-[0.28em] sm:tracking-[0.32em] uppercase text-neutral-400 mb-4 sm:mb-6">
                                            Contact
                                        </div>
                                        <a
                                            href="tel:+919392015888"
                                            className="block text-[13px] sm:text-sm text-neutral-200 hover:text-[color:var(--champagne)] transition-colors"
                                        >
                                            +91 93920 15888
                                        </a>
                                        <a
                                            href="https://wa.me/919392015888"
                                            target="_blank"
                                            rel="noreferrer"
                                            className="block text-[13px] sm:text-sm text-neutral-200 hover:text-[color:var(--champagne)] transition-colors mt-2"
                                        >
                                            WhatsApp
                                        </a>
                                        <p className="text-[13px] sm:text-sm text-neutral-400 mt-2">Open 24 × 7</p>
                                    </div>

                                    <div className="col-span-12 md:col-span-2">
                                        <div className="text-[10px] tracking-[0.28em] sm:tracking-[0.32em] uppercase text-neutral-400 mb-4 sm:mb-6">
                                            Follow
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <a
                                                href="#"
                                                aria-label="Instagram"
                                                className="w-10 h-10 border border-white/30 flex items-center justify-center hover:bg-[color:var(--champagne)] hover:text-[color:var(--obsidian)] hover:border-[color:var(--champagne)] transition-colors"
                                            >
                                                <Instagram className="w-4 h-4" strokeWidth={1.5} />
                                            </a>
                                            <a
                                                href="#"
                                                aria-label="Facebook"
                                                className="w-10 h-10 border border-white/30 flex items-center justify-center hover:bg-[color:var(--champagne)] hover:text-[color:var(--obsidian)] hover:border-[color:var(--champagne)] transition-colors"
                                            >
                                                <Facebook className="w-4 h-4" strokeWidth={1.5} />
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                {/* Huge wordmark */}
                                <div className="py-12 sm:py-16 md:py-24 select-none pointer-events-none overflow-hidden w-full">
                                    <div className="font-serif italic font-light leading-none tracking-tighter text-[color:var(--ivory)] text-[28vw] sm:text-[24vw] md:text-[22vw] text-center whitespace-nowrap">
                                        Sanathan
                                    </div>
                                </div>

                                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 md:gap-4 text-[9px] sm:text-[10px] tracking-[0.24em] sm:tracking-[0.28em] uppercase text-neutral-500">
                                    <span>© {new Date().getFullYear()} Sanathan Events</span>
                                    <span>Vijayawada · Andhra Pradesh · India</span>
                                    <span>Designed with restraint</span>
                                </div>
                            </div>
                        </footer>

);
}

