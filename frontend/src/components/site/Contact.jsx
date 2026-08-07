import { useState } from "react";
import { toast } from "sonner";
import { ArrowUpRight, Phone, MapPin, Clock } from "lucide-react";
import { Reveal } from "./Reveal";

const EVENT_TYPES = [
    "Wedding",
    "Reception",
    "Engagement",
    "Mehendi & Haldi",
    "Birthday",
    "Corporate Event",
    "Other",
];

const initial = {
    name: "",
    phone: "",
    email: "",
    event_type: "Wedding",
    event_date: "",
    message: "",
};

export default function Contact() {
    const [form, setForm] = useState(initial);
    const [loading, setLoading] = useState(false);

    const change = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const submit = async (e) => {
        e.preventDefault();
        if (!form.name.trim() || !form.phone.trim() || !form.event_type) {
            toast.error("Please share your name, phone and event type.");
            return;
        }
        setLoading(true);
        // Simulate a short delay, then confirm
        await new Promise((r) => setTimeout(r, 800));
        toast.success("Enquiry received. Our studio will call you shortly.");
        setForm(initial);
        setLoading(false);
    };

    return (
        <section
            id="contact"
            data-testid="contact-section"
            className="py-20 sm:py-24 md:py-40"
        >
            <div className="max-w-[1440px] mx-auto px-5 sm:px-6 md:px-10 lg:px-14 grid grid-cols-12 gap-10 md:gap-16">
                <Reveal className="col-span-12 md:col-span-5">
                    <div className="text-[10px] tracking-[0.28em] sm:tracking-[0.32em] uppercase text-neutral-500 flex items-center gap-3 mb-4 sm:mb-6">
                        <span className="w-8 h-px bg-[color:var(--obsidian)]" />
                        Enquire · Correspondence
                    </div>
                    <h2 className="font-serif font-light tracking-tighter leading-[0.98] md:leading-[0.95] text-4xl sm:text-5xl md:text-6xl">
                        Tell us the <span className="italic">shape</span> of your
                        celebration.
                    </h2>
                    <p className="mt-6 sm:mt-8 max-w-md text-neutral-700 leading-relaxed text-[15px]">
                        Share a few details and our studio will call you back — usually
                        within the hour. For urgent muhurthams, please call directly.
                    </p>

                    <ul className="mt-10 sm:mt-12 space-y-5 sm:space-y-6">
                        <li className="flex items-start gap-4">
                            <Phone className="w-4 h-4 mt-1 text-[color:var(--obsidian)]" strokeWidth={1.5} />
                            <div>
                                <div className="text-[10px] tracking-[0.28em] uppercase text-neutral-500 mb-1">
                                    Direct line
                                </div>
                                <a
                                    href="tel:+919392015888"
                                    className="font-serif text-2xl md:text-3xl link-under"
                                    data-testid="contact-phone"
                                >
                                    +91 93920 15888
                                </a>
                            </div>
                        </li>
                        <li className="flex items-start gap-4">
                            <MapPin className="w-4 h-4 mt-1 text-[color:var(--obsidian)]" strokeWidth={1.5} />
                            <div>
                                <div className="text-[10px] tracking-[0.28em] uppercase text-neutral-500 mb-1">
                                    Studio
                                </div>
                                <p className="text-[15px] leading-snug max-w-xs">
                                    Near Noble Kids, Maruthi Nagar,
                                    <br />
                                    Machavaram, Vijayawada,
                                    <br />
                                    Andhra Pradesh
                                </p>
                            </div>
                        </li>
                        <li className="flex items-start gap-4">
                            <Clock className="w-4 h-4 mt-1 text-[color:var(--obsidian)]" strokeWidth={1.5} />
                            <div>
                                <div className="text-[10px] tracking-[0.28em] uppercase text-neutral-500 mb-1">
                                    Hours
                                </div>
                                <p className="text-[15px]">Open 24 × 7 · All days</p>
                            </div>
                        </li>
                    </ul>
                </Reveal>

                <Reveal className="col-span-12 md:col-span-7" delay={0.1}>
                    <form
                        onSubmit={submit}
                        className="grid grid-cols-2 gap-x-5 sm:gap-x-6 gap-y-6 sm:gap-y-8 border-t border-[color:var(--obsidian)] pt-8 sm:pt-10"
                        data-testid="contact-form"
                    >
                        <Field label="01 · Name" htmlFor="name" className="col-span-2 md:col-span-1">
                            <input
                                id="name"
                                name="name"
                                value={form.name}
                                onChange={change}
                                placeholder="Your full name"
                                required
                                data-testid="contact-input-name"
                                className="w-full bg-transparent border-0 border-b border-[color:var(--line-strong)] py-3 text-lg font-serif focus:outline-none focus:border-[color:var(--obsidian)] placeholder:text-neutral-400 placeholder:font-sans placeholder:text-base"
                            />
                        </Field>

                        <Field label="02 · Phone" htmlFor="phone" className="col-span-2 md:col-span-1">
                            <input
                                id="phone"
                                name="phone"
                                type="tel"
                                value={form.phone}
                                onChange={change}
                                placeholder="+91 XXXXX XXXXX"
                                required
                                data-testid="contact-input-phone"
                                className="w-full bg-transparent border-0 border-b border-[color:var(--line-strong)] py-3 text-lg font-serif focus:outline-none focus:border-[color:var(--obsidian)] placeholder:text-neutral-400 placeholder:font-sans placeholder:text-base"
                            />
                        </Field>

                        <Field label="03 · Email" htmlFor="email" className="col-span-2 md:col-span-1">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                value={form.email}
                                onChange={change}
                                placeholder="Optional"
                                data-testid="contact-input-email"
                                className="w-full bg-transparent border-0 border-b border-[color:var(--line-strong)] py-3 text-lg font-serif focus:outline-none focus:border-[color:var(--obsidian)] placeholder:text-neutral-400 placeholder:font-sans placeholder:text-base"
                            />
                        </Field>

                        <Field label="04 · Event type" htmlFor="event_type" className="col-span-2 md:col-span-1">
                            <select
                                id="event_type"
                                name="event_type"
                                value={form.event_type}
                                onChange={change}
                                data-testid="contact-input-event-type"
                                className="w-full bg-transparent border-0 border-b border-[color:var(--line-strong)] py-3 text-lg font-serif focus:outline-none focus:border-[color:var(--obsidian)] appearance-none cursor-pointer"
                            >
                                {EVENT_TYPES.map((t) => (
                                    <option key={t} value={t}>{t}</option>
                                ))}
                            </select>
                        </Field>

                        <Field label="05 · Preferred date" htmlFor="event_date" className="col-span-2 md:col-span-1">
                            <input
                                id="event_date"
                                name="event_date"
                                type="date"
                                value={form.event_date}
                                onChange={change}
                                data-testid="contact-input-date"
                                className="w-full bg-transparent border-0 border-b border-[color:var(--line-strong)] py-3 text-lg font-serif focus:outline-none focus:border-[color:var(--obsidian)]"
                            />
                        </Field>

                        <Field label="06 · Message" htmlFor="message" className="col-span-2">
                            <textarea
                                id="message"
                                name="message"
                                value={form.message}
                                onChange={change}
                                rows={3}
                                placeholder="Guest count, venue thoughts, anything on your mind…"
                                data-testid="contact-input-message"
                                className="w-full bg-transparent border-0 border-b border-[color:var(--line-strong)] py-3 text-base font-sans focus:outline-none focus:border-[color:var(--obsidian)] placeholder:text-neutral-400 resize-none"
                            />
                        </Field>

                        <div className="col-span-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 sm:gap-6 pt-3 sm:pt-4">
                            <p className="text-xs text-neutral-500 max-w-xs leading-relaxed order-2 sm:order-1">
                                By sending, you agree to be contacted by our studio via phone
                                or WhatsApp regarding your enquiry.
                            </p>
                            <button
                                type="submit"
                                disabled={loading}
                                className="btn-editorial disabled:opacity-60 disabled:cursor-not-allowed justify-center sm:justify-start order-1 sm:order-2 w-full sm:w-auto"
                                data-testid="contact-submit"
                            >
                                {loading ? "Sending…" : "Send Enquiry"}
                                <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={1.5} />
                            </button>
                        </div>
                    </form>
                </Reveal>
            </div>
        </section>
    );
}

const Field = ({ label, htmlFor, className = "", children }) => (
    <div className={className}>
        <label
            htmlFor={htmlFor}
            className="block text-[10px] tracking-[0.28em] uppercase text-neutral-500 font-semibold mb-1"
        >
            {label}
        </label>
        {children}
    </div>
);
