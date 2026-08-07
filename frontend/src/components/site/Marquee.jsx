import Marquee from "react-fast-marquee";

const items = [
    "Wedding Planning",
    "Reception",
    "Engagement",
    "Mehendi & Haldi",
    "Stage & Floral Decoration",
    "Photography & Videography",
    "Catering Coordination",
    "Corporate Events",
    "Entertainment",
    "Birthdays",
];

export default function EditorialMarquee() {
    return (
        <section
            data-testid="marquee-section"
            className="py-6 sm:py-8 md:py-12 border-y border-[color:var(--obsidian)] bg-[color:var(--obsidian)] text-[color:var(--ivory)] overflow-hidden"
        >
            <Marquee speed={40} gradient={false} pauseOnHover>
                {items.map((it, i) => (
                    <span
                        key={i}
                        className="font-serif italic text-2xl sm:text-3xl md:text-5xl lg:text-6xl px-5 sm:px-8 md:px-14 font-light"
                    >
                        {it}
                        <span className="inline-block mx-4 sm:mx-6 md:mx-10 w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[color:var(--champagne)] align-middle" />
                    </span>
                ))}
            </Marquee>
        </section>
    );
}


