import Nav from "@/components/site/Nav";
import Hero from "@/components/site/Hero";
import EditorialMarquee from "@/components/site/Marquee";
import Manifesto from "@/components/site/Manifesto";
import Services from "@/components/site/Services";
import Signature from "@/components/site/Signature";
import Testimonials from "@/components/site/Testimonials";
import Contact from "@/components/site/Contact";
import Footer from "@/components/site/Footer";
import FloatingCta from "@/components/site/FloatingCta";

export default function Sanathan() {
    return (
        <main
            className="relative bg-[color:var(--ivory)] text-[color:var(--obsidian)]"
            data-testid="sanathan-page"
        >
            <Nav />
            <Hero />
            <EditorialMarquee />
            <Manifesto />
            <Services />
            <Signature />
            <Testimonials />
            <Contact />
            <Footer />
            <FloatingCta />
        </main>
    );
}

