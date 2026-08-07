import { Star } from "lucide-react";
import { Reveal } from "./Reveal";

const notes = [
    {
        body: "From the muhurtham to the last farewell, everything unfolded quietly and beautifully. The stage felt considered — not staged.",
        who: "A recent bride's family",
        where: "Reception · Vijayawada",
    },
    {
        body: "They picked up at midnight when a last-minute change came in and rebuilt the mandap by morning. This is what 24×7 really means.",
        who: "Groom's family",
        where: "Wedding · Machavaram",
    },
    {
        body: "The florals had a hand-picked, garden-gathered quality — nothing plastic, nothing loud. Our guests are still writing about it.",
        who: "Mother of the bride",
        where: "Engagement · Krishna District",
    },
];

export default function Testimonials() {
    return (
            <section
id = "voices"
data-testid="voices-section"
className="py-20 sm:py-24 md:py-40 bg-[color:var(--obsidian)] text-[color:var(--ivory)] border-y border-[color:var(--obsidian)]"
    >
    <div className="max-w-[1440px] mx-auto px-5 sm:px-6 md:px-10 lg:px-14">
        <Reveal className="grid grid-cols-12 gap-4 md:gap-6 mb-12 sm:mb-16 md:mb-20">
            <div className="col-span-12 md:col-span-5">
                <div className="text-[10px] tracking-[0.28em] sm:tracking-[0.32em] uppercase text-neutral-400 flex items-center gap-3 mb-4 sm:mb-6">
                    <span className="w-8 h-px bg-[color:var(--champagne)]" />
                    Voices · Index 04
                </div>
                <h2 className="font-serif font-light tracking-tighter leading-[0.98] md:leading-[0.95] text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                    <span className="italic">Five stars</span>,
                    <br />
                    three hundred and
                    <br />
                    thirty five times.
                </h2>
            </div>
            <div className="col-span-12 md:col-span-6 md:col-start-7 md:mt-6">
                <p className="text-[15px] md:text-base leading-relaxed text-neutral-300 max-w-md">
                    A verified 5.0 average across 335 Google reviews — not a
                    marketing claim, but a public ledger. Below, a few notes shared
                    with us in private.
                </p>
                <div className="mt-6 sm:mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
                    <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                            <Star
                                key={i}
                                className="w-4 h-4 fill-[color:var(--champagne)] text-[color:var(--champagne)]"
                            />
                        ))}
                    </div>
                    <span className="font-serif text-2xl sm:text-3xl">5.0</span>
                    <span className="text-[10px] sm:text-[11px] tracking-[0.2em] sm:tracking-[0.22em] uppercase text-neutral-400">
                        / 335 reviews · Google
                    </span>
                </div>
            </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-white/20">
            {notes.map((n, i) => (
                <Reveal
                    key={i}
                    className={`py-8 sm:py-10 md:py-14 md:px-10 ${i === 0 ? "md:pl-0" : ""
                        } ${i === notes.length - 1 ? "md:pr-0" : ""} border-b md:border-b-0 md:border-r border-white/20 ${i === notes.length - 1 ? "border-b-0 md:border-r-0" : ""
                        }`}
                    delay={i * 0.08}
                    data-testid={`voice-${i}`}
                >
                    <div className="text-[color:var(--champagne)] font-serif text-4xl leading-none mb-3 sm:mb-4">
                        &ldquo;
                    </div>
                    <p className="font-serif italic text-lg sm:text-xl md:text-2xl leading-snug font-light text-white">
                        {n.body}
                    </p>
                    <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-white/20 text-[9px] md:text-[10px] tracking-[0.24em] md:tracking-[0.28em] uppercase text-neutral-400 flex items-center justify-between gap-2">
                        <span>{n.who}</span>
                        <span className="text-right">{n.where}</span>
                    </div>
                </Reveal>
            ))}
        </div>
    </div>
    </section>



    );
}


