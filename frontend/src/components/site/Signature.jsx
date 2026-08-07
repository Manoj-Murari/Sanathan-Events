import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { Reveal } from "./Reveal";

export default function Signature() {
    const ref = useRef(null);
    const reduced = useReducedMotion();
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const y1 = useTransform(scrollYProgress, [0, 1], ["8%", "-8%"]);
    const y2 = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);
    const y3 = useTransform(scrollYProgress, [0, 1], ["4%", "-10%"]);

    return (
        <section
            id="signature"
            ref={ref}
            data-testid="signature-section"
            className="py-20 sm:py-24 md:py-40 lg:py-48"
        >
            <div className="max-w-[1440px] mx-auto px-5 sm:px-6 md:px-10 lg:px-14">
                <Reveal className="grid grid-cols-12 gap-4 md:gap-6 mb-12 sm:mb-16 md:mb-24">
                    <div className="col-span-12 md:col-span-5">
                        <div className="text-[10px] tracking-[0.28em] sm:tracking-[0.32em] uppercase text-neutral-500 flex items-center gap-3 mb-4 sm:mb-6">
                            <span className="w-8 h-px bg-[color:var(--obsidian)]" />
                            Signature · Volume 03
                        </div>
                        <h2 className="font-serif font-light tracking-tighter leading-[0.98] md:leading-[0.95] text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                            A quiet <span className="italic">portfolio</span>
                            <br />
                            of moments.
                        </h2>
                    </div>
                    <p className="col-span-12 md:col-span-6 md:col-start-7 text-[15px] md:text-base leading-relaxed text-neutral-700 max-w-lg md:mt-6">
                        Studies in florals, light, ritual and space. Each frame is a study
                        in restraint — the kind of image that feels found rather than
                        styled.
                    </p>
                </Reveal>

                {/* Asymmetric gallery */}
                <div className="grid grid-cols-12 gap-4 sm:gap-6 md:gap-10">
                    <motion.figure
                        style={reduced ? undefined : { y: y1 }}
                        className="col-span-12 md:col-span-7 relative"
                        data-testid="signature-frame-1"
                    >
                        <div className="aspect-[4/5] w-full overflow-hidden border border-[color:var(--line)]">
                            <img
                                src="https://images.pexels.com/photos/13156145/pexels-photo-13156145.jpeg"
                                alt="Luxurious wedding stage with a floral arch"
                                className="w-full h-full object-cover"
                                loading="lazy"
                            />
                        </div>
                        <figcaption className="mt-3 md:mt-4 flex items-center justify-between text-[9px] md:text-[10px] tracking-[0.24em] md:tracking-[0.28em] uppercase text-neutral-500">
                            <span>Figure 02 · The Floral Arch</span>
                            <span className="hidden sm:inline">Muhurtham · Vijayawada</span>
                        </figcaption>
                    </motion.figure>

                    <div className="col-span-12 md:col-span-5 flex flex-col gap-4 sm:gap-6 md:gap-10 md:pt-24">
                        <motion.figure
                            style={reduced ? undefined : { y: y2 }}
                            className="relative"
                            data-testid="signature-frame-2"
                        >
                            <div className="aspect-[3/4] w-full overflow-hidden border border-[color:var(--line)]">
                                <img
                                    src="https://images.unsplash.com/photo-1746044159277-ced38bb9ae58"
                                    alt="Floral backdrop with candles"
                                    className="w-full h-full object-cover"
                                    loading="lazy"
                                />
                            </div>
                            <figcaption className="mt-3 text-[9px] md:text-[10px] tracking-[0.24em] md:tracking-[0.28em] uppercase text-neutral-500">
                                Figure 03 · Candles &amp; Craft
                            </figcaption>
                        </motion.figure>

                        <motion.figure
                            style={reduced ? undefined : { y: y3 }}
                            className="relative"
                            data-testid="signature-frame-3"
                        >
                            <div className="aspect-[5/4] w-full overflow-hidden border border-[color:var(--line)]">
                                <img
                                    src="https://images.pexels.com/photos/29967503/pexels-photo-29967503.jpeg"
                                    alt="Indian couple on a decorated stage"
                                    className="w-full h-full object-cover"
                                    loading="lazy"
                                />
                            </div>
                            <figcaption className="mt-3 text-[9px] md:text-[10px] tracking-[0.24em] md:tracking-[0.28em] uppercase text-neutral-500">
                                Figure 04 · The First Look
                            </figcaption>
                        </motion.figure>
                    </div>
                </div>

                {/* Editorial pull quote */}
                <Reveal className="mt-16 sm:mt-24 md:mt-32 grid grid-cols-12 gap-4 md:gap-6">
                    <div className="col-span-12 md:col-span-2 hidden md:block">
                        <div className="text-[10px] tracking-[0.28em] uppercase text-neutral-500">
                            An Editor's
                            <br />
                            Note
                        </div>
                    </div>
                    <blockquote className="col-span-12 md:col-span-10 font-serif italic font-light text-[26px] sm:text-3xl md:text-5xl lg:text-6xl leading-[1.1] md:leading-[1.05] tracking-tight">
                        <span className="text-[color:var(--champagne)] not-italic font-serif mr-1">
                            &ldquo;
                        </span>
                        The most beautiful weddings are the ones that feel inevitable — as
                        if the flowers, the light and the moment could not have arrived any
                        other way.
                        <span className="text-[color:var(--champagne)] not-italic font-serif ml-1">
                            &rdquo;
                        </span>
                    </blockquote>
                </Reveal>
            </div>
        </section>
    );
}


