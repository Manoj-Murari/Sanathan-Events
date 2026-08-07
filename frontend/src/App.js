import { useEffect } from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Lenis from "lenis";
import Sanathan from "@/pages/Sanathan";
import { Toaster } from "@/components/ui/sonner";

function useLenis() {
    useEffect(() => {
        const prefersReduced =
            typeof window !== "undefined" &&
            window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (prefersReduced) return;

        const lenis = new Lenis({
            duration: 1.15,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smoothWheel: true,
            wheelMultiplier: 1,
            touchMultiplier: 1.2,
        });

        let rafId;
        const raf = (time) => {
            lenis.raf(time);
            rafId = requestAnimationFrame(raf);
        };
        rafId = requestAnimationFrame(raf);

        return () => {
            cancelAnimationFrame(rafId);
            lenis.destroy();
        };
    }, []);
}

function App() {
    useLenis();

    return (
        <div className="App" data-testid="app-root">
            <div className="grain-overlay" aria-hidden="true" />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Sanathan />} />
                </Routes>
            </BrowserRouter>
            <Toaster position="bottom-center" richColors closeButton />
        </div>
    );
}

export default App;


