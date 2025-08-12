"use client";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

function CountUpAnimation({ end, duration = 2 }: { end: number; duration?: number }) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            let startTime: number;
            const animate = (currentTime: number) => {
                if (!startTime) startTime = currentTime;
                const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
                setCount(Math.floor(progress * end));
                if (progress < 1) {
                    requestAnimationFrame(animate);
                }
            };
            requestAnimationFrame(animate);
        }
    }, [isInView, end, duration]);

    return <span ref={ref}>{count}</span>;
}

export default function StatsSection() {
    return (
        <section className="py-12 md:py-20">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
                <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center">
                    <h2 className="text-4xl font-bold lg:text-5xl">Date care inspiră încredere</h2>
                    <p className="text-neutral-600 dark:text-neutral-400">Performanța financiară solidă și structura echipei Trans Prima îl transformă într-un partener stabil și responsabil în transportul rutier de mărfuri.</p>
                </div>

                <div className="grid gap-12 divide-y *:text-center md:grid-cols-3 md:gap-2 md:divide-x md:divide-y-0">
                    <div className="space-y-4">
                        <div className="text-5xl font-bold">
                            <CountUpAnimation end={1200} />
                        </div>
                        <p className="text-neutral-600 dark:text-neutral-400">Curse anuale</p>
                    </div>
                    <div className="space-y-4">
                        <div className="text-5xl font-bold">
                            <CountUpAnimation end={45} />
                        </div>
                        <p className="text-neutral-600 dark:text-neutral-400">Capete tiruri</p> 
                    </div>
                    <div className="space-y-4">
                        <div className="text-5xl font-bold">
                            <CountUpAnimation end={60} />
                        </div>
                        <p className="text-neutral-600 dark:text-neutral-400">Semiremorci</p>
                    </div>
                </div>
            </div>
        </section>
    )
}