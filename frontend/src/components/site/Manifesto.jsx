import { Reveal } from "./Reveal";

const chapters = [
    {
        n: "01",
        title: "Restraint over spectacle",
        body: "We compose weddings that feel considered, not crowded. Every stem, every flame, every silhouette earns its place — nothing is decorative for the sake of being seen.",
    },
    {
        n: "02",
        title: "The mother-tongue of celebration",
        body: "Rooted in Andhra tradition and open to the wider world, our work honours ritual first — mehendi, haldi, muhurtham, saptapadi — before dressing the room around it.",
    },
    {
        n: "03",
        title: "One team, one thread",
        body: "Planning, stage, floral, catering coordination, photography — under one atelier. A single point of trust, so families arrive at the moment, not the logistics.",
    },
    {
        n: "04",
        title: "Available at any hour",
        body: "Weddings do not obey office hours. We answer at dawn, at midnight, at the muhurtham — 24 × 7, from Vijayawada, wherever the celebration finds you.",
    },
];

export default function Manifesto() {
    return (
        <section
            id="craft"
            data-testid="manifesto-section"
            className="py-20 sm:py-24 md:py-40 lg:py-48"
        >
            <div className="max-w-[1440px] mx-auto px-5 sm:px-6 md:px-10 lg:px-14">
                <Reveal className="grid grid-cols-12 gap-4 md:gap-6 mb-12 sm:mb-16 md:mb-24">
                    <div className="col-span-12 md:col-span-4">
                        <div className="text-[10px] tracking-[0.28em] sm:tracking-[0.32em] uppercase text-neutral-500 flex items-center gap-3 mb-4 md:mb-0">
                            <span className="w-8 h-px bg-[color:var(--obsidian)]" />
                            The House Manifesto
                        </div>
                    </div>
                    <h2 className="col-span-12 md:col-span-8 font-serif font-light tracking-tighter leading-[0.98] md:leading-[0.95] text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                        Four <span className="italic">quiet</span> beliefs that shape every
                        room we build.
                    </h2>
                </Reveal>

                <div className="border-t border-[color:var(--obsidian)]">
                    {chapters.map((c, i) => (
                        <Reveal
                            key={c.n}
                            className="grid grid-cols-12 gap-x-4 gap-y-4 md:gap-8 border-b border-[color:var(--line)] py-8 sm:py-10 md:py-16"
                            delay={i * 0.05}
                        >
                            <div className="col-span-12 md:col-span-1 flex items-baseline md:block">
                                <span className="big-number tabular-nums block">{c.n}</span>
                            </div>
                            <h3 className="col-span-12 md:col-span-5 font-serif text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-light leading-tight tracking-tight -mt-2 md:mt-0">
                                {c.title}
                            </h3>
                            <p className="col-span-12 md:col-span-6 text-[15px] md:text-base leading-relaxed text-neutral-700 max-w-xl md:pl-8">
                                {c.body}
                            </p>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}


