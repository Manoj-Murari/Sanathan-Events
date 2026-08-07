import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";

const services = [
    {
        title: "Wedding Planning",
        tag: "Full ceremony",
        img: "https://images.pexels.com/photos/13156145/pexels-photo-13156145.jpeg",
    },
    {
        title: "Reception & Sangeet",
        tag: "Evening",
        img: "https://images.unsplash.com/photo-1746044159277-ced38bb9ae58",
    },
    {
        title: "Engagement Ceremony",
        tag: "Intimate",
        img: "https://images.pexels.com/photos/29967503/pexels-photo-29967503.jpeg",
    },
    {
        title: "Mehendi & Haldi",
        tag: "Rituals",
        img: "https://images.unsplash.com/photo-1747040762931-d1c96be72798",
    },
    {
        title: "Stage & Floral Decor",
        tag: "Design",
        img: "https://images.pexels.com/photos/34079355/pexels-photo-34079355.jpeg",
    },
    {
        title: "Photography & Video",
        tag: "Capture",
        img: "https://images.pexels.com/photos/13156145/pexels-photo-13156145.jpeg",
    },
    {
        title: "Catering Coordination",
        tag: "Table",
        img: "https://images.unsplash.com/photo-1747040762931-d1c96be72798",
    },
    {
        title: "Entertainment & Artists",
        tag: "Programme",
        img: "https://images.pexels.com/photos/29967503/pexels-photo-29967503.jpeg",
    },
    {
        title: "Corporate & Birthdays",
        tag: "Bespoke",
        img: "https://images.unsplash.com/photo-1746044159277-ced38bb9ae58",
    },
];

export default function Services() {
    return (
        <section
            id="services"
            data-testid="services-section"
            className="py-20 sm:py-24 md:py-40 bg-[color:var(--ivory-2)] border-y border-[color:var(--line)]"
        >
            <div className="max-w-[1440px] mx-auto px-5 sm:px-6 md:px-10 lg:px-14">
                <Reveal className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 md:gap-8 mb-10 sm:mb-14 md:mb-20">
                    <div>
                        <div className="text-[10px] tracking-[0.28em] sm:tracking-[0.32em] uppercase text-neutral-500 flex items-center gap-3 mb-4 sm:mb-6">
                            <span className="w-8 h-px bg-[color:var(--obsidian)]" />
                            Services · Index 02
                        </div>
                        <h2 className="font-serif font-light tracking-tighter leading-[0.98] md:leading-[0.95] text-4xl sm:text-5xl md:text-6xl lg:text-7xl max-w-3xl">
                            An atelier for every <span className="italic">chapter</span> of
                            the celebration.
                        </h2>
                    </div>
                    <p className="max-w-sm text-neutral-700 leading-relaxed text-[15px] md:text-base">
                        Each service is delivered in-house by the same production team — no
                        vendor stitching, no lost briefs.
                    </p>
                </Reveal>

                <div className="relative">
                    {services.map((s, i) => (
                        <Reveal
                            key={s.title}
                            as="a"
                            href="#contact"
                            className="service-row group"
                            delay={i * 0.03}
                            data-testid={`service-row-${i}`}
                        >
                            <span className="text-[11px] md:text-sm tracking-[0.2em] md:tracking-[0.22em] uppercase text-neutral-500 tabular-nums font-medium pt-1 md:pt-0">
                                {String(i + 1).padStart(2, "0")}
                            </span>
                            <span className="service-row__title font-serif text-[26px] sm:text-3xl md:text-5xl lg:text-6xl font-light leading-[1.05] md:leading-none text-neutral-800 pr-2">
                                {s.title}
                            </span>
                            <span className="flex items-center gap-2 md:gap-3 text-[9px] md:text-xs tracking-[0.2em] md:tracking-[0.22em] uppercase text-neutral-500 pt-1 md:pt-0 whitespace-nowrap">
                                <span className="hidden sm:inline">{s.tag}</span>
                                <ArrowUpRight
                                    className="w-4 h-4 md:w-5 md:h-5 text-[color:var(--obsidian)] transition-transform duration-500 group-hover:rotate-45"
                                    strokeWidth={1.25}
                                />
                            </span>
                            <span
                                className="service-row__hover hidden md:block"
                                style={{ backgroundImage: `url(${s.img})` }}
                                aria-hidden="true"
                            />
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}


