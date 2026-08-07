import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { MaskedLine } from "./Reveal";
import { ArrowUpRight, Star } from "lucide-react";

export default function Hero() {
    const ref = useRef(null);
    const reduced = useReducedMotion();
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const yImg = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
    const scaleImg = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
    const yMeta = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);

    return (
        <section
            id="top"
            ref={ref}
            data-testid="hero-section"
            className="relative min-h-[100svh] pt-24 sm:pt-28 md:pt-32 pb-16 md:pb-24 overflow-hidden"
        >
            {/* Top eyebrow rule */}
            <div className="max-w-[1440px] mx-auto px-5 sm:px-6 md:px-10 lg:px-14">
                <div className="flex items-center justify-between border-b border-[color:var(--line)] pb-4 sm:pb-5 gap-4">
                    <div className="flex items-center gap-3 min-w-0">
                        <motion.span
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                            className="hidden sm:inline-block w-10 h-px bg-[color:var(--obsidian)] origin-left flex-shrink-0"
                        />
                        <span className="text-[9px] sm:text-[10px] tracking-[0.28em] sm:tracking-[0.32em] uppercase font-semibold text-neutral-500 truncate">
                            Est. Vijayawada · Andhra Pradesh
                        </span>
                    </div>
                    <div className="hidden md:flex items-center gap-4 text-[11px] tracking-[0.24em] uppercase text-neutral-500">
                        <span>Volume 01</span>
                        <span className="w-1 h-1 rounded-full bg-neutral-400" />
                        <span>The Sanathan Journal</span>
                    </div>
                </div>
            </div>

            {/* Headline grid */}
            <div className="max-w-[1440px] mx-auto px-5 sm:px-6 md:px-10 lg:px-14 mt-10 sm:mt-14 md:mt-16 grid grid-cols-12 gap-6">
                {/* Left column: headline */}
                <div className="col-span-12 lg:col-span-8">
                    <h1
                        className="font-serif tracking-tighter leading-[0.92]"
                        style={{ fontSize: "clamp(2.75rem, 11vw, 9.5rem)" }}
                        data-testid="hero-headline"
                    >
                        <MaskedLine delay={0.15}>
                            <span className="italic font-light">Weddings,</span>
                        </MaskedLine>
                        <MaskedLine delay={0.28}>
                            <span className="font-light">composed</span>
                        </MaskedLine>
                        <MaskedLine delay={0.41}>
                            <span className="font-light">
                                like <span className="italic">poetry.</span>
                            </span>
                        </MaskedLine>
                    </h1>

                    {/* Mobile / tablet hero image (shown below headline on <lg) */}
                    <div className="lg:hidden mt-10">
                        <div className="relative aspect-[4/5] sm:aspect-[16/10] w-full overflow-hidden border border-[color:var(--line)]">
                            <img
                                src="https://images.pexels.com/photos/34079355/pexels-photo-34079355.jpeg"
                                alt="A floral wedding mandap"
                                className="w-full h-full object-cover"
                                loading="eager"
                            />
                        </div>
                        <div className="mt-3 flex items-center justify-between text-[9px] tracking-[0.28em] uppercase text-neutral-500">
                            <span>Figure 01</span>
                            <span>Mandap · Floral study</span>
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
                        className="mt-10 md:mt-14 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-start"
                    >
                        <p className="md:col-span-6 max-w-md text-[15px] sm:text-base md:text-[17px] leading-relaxed text-neutral-700">
                            Sanathan Events crafts weddings, receptions and celebrations with
                            a quiet, editorial hand — where florals, light and moment are
                            considered with the same care as the vow itself.
                        </p>

                        <div className="md:col-span-6 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-4">
                            <a
                                href="#contact"
                                className="btn-editorial justify-center sm:justify-start"
                                data-testid="hero-cta-primary"
                            >
                                Begin an Enquiry
                                <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={1.5} />
                            </a>
                            <a
                                href="#services"
                                className="btn-editorial btn-editorial--ghost justify-center sm:justify-start"
                                data-testid="hero-cta-secondary"
                            >
                                Explore the Craft
                            </a>
                        </div>
                    </motion.div>
                </div>

                {/* Right column: clipped image with parallax (desktop only) */}
                <motion.div
                    style={reduced ? undefined : { y: yMeta }}
                    className="col-span-12 lg:col-span-4 relative hidden lg:block"
                >
                    <div className="relative aspect-[3/4] w-full overflow-hidden border border-[color:var(--line)]">
                        <motion.div
                            style={reduced ? undefined : { y: yImg, scale: scaleImg }}
                            className="absolute inset-0"
                        >
                            <img
                                src="https://images.pexels.com/photos/34079355/pexels-photo-34079355.jpeg"
                                alt="A floral wedding mandap"
                                className="w-full h-full object-cover"
                                loading="eager"
                            />
                        </motion.div>
                        <div className="absolute inset-x-0 top-0 h-px bg-[color:var(--obsidian)]/20" />
                    </div>
                    <div className="mt-4 flex items-center justify-between text-[10px] tracking-[0.28em] uppercase text-neutral-500">
                        <span>Figure 01</span>
                        <span>Mandap · Floral study</span>
                    </div>
                </motion.div>
            </div>

            {/* Meta band */}
            <div className="max-w-[1440px] mx-auto px-5 sm:px-6 md:px-10 lg:px-14 mt-14 sm:mt-16 md:mt-24">
                <div className="grid grid-cols-2 md:grid-cols-4 border-t border-b border-[color:var(--obsidian)]">
                    <MetaCell
                        k="Rating"
                        v={
                            <span className="inline-flex items-center gap-1.5">
                                <Star className="w-3.5 h-3.5 fill-[color:var(--champagne)] text-[color:var(--champagne)]" />
                                5.0 / 5
                            </span>
                        }
                        sub="Google Reviews"
                        border="right bottom md:bottom-none"
                    />
                    <MetaCell k="Reviews" v="335+" sub="Verified voices" border="bottom md:bottom-none md:right" />
                    <MetaCell k="Studio" v="Maruthi Nagar" sub="Machavaram, Vijayawada" border="right md:right" />
                    <MetaCell k="Hours" v="24 × 7" sub="Available around the clock" border="" />
                </div>
            </div>
        </section>
    );
}

const MetaCell = ({ k, v, sub, border = "" }) => {
    const b = border || "";
    const borderRight = b.includes("right") ? "border-r border-[color:var(--line)]" : "";
    const borderBottom = b.includes("bottom") && !b.includes("bottom-none")
        ? "border-b border-[color:var(--line)] md:border-b-0"
        : "";
    const mdBorderRight = b.includes("md:right") ? "md:border-r md:border-[color:var(--line)]" : "";
    return (
        <div className={`px-4 md:px-8 py-5 md:py-6 ${borderRight} ${borderBottom} ${mdBorderRight}`}>
            <div className="text-[9px] md:text-[10px] tracking-[0.24em] md:tracking-[0.28em] uppercase text-neutral-500">
                {k}
            </div>
            <div className="font-serif text-xl sm:text-2xl md:text-3xl mt-1.5 md:mt-2 leading-none">
                {v}
            </div>
            <div className="text-[11px] sm:text-xs text-neutral-600 mt-2 md:mt-3 leading-snug">{sub}</div>
        </div>
    );
};


