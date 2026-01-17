"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface GradientBackgroundProps {
    colors: string[];
}

export default function GradientBackground({ colors }: GradientBackgroundProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const safeColors = [...colors, ...colors, ...colors].slice(0, 4);

    useEffect(() => {
        if (containerRef.current) {
            safeColors.forEach((color, index) => {
                containerRef.current?.style.setProperty(`--c${index + 1}`, color);
            });
        }
    }, [safeColors]);

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 -z-10 overflow-hidden transition-colors duration-700"
            style={{ backgroundColor: `color-mix(in srgb, var(--c1, #000), black 40%)` }} // Reduced black mix for brighter color presence
        >
            {/* 1. The Moving Blobs (Deep Layer) */}
            {/* 1. The Moving Blobs (Deep Layer) */}
            <div className="absolute inset-0 opacity-100 scale-125 animate-drift">
                <div
                    className="absolute top-1/2 left-1/2 w-[80vw] h-[80vw] -translate-x-1/2 -translate-y-1/2 rounded-full mix-blend-screen filter blur-[100px] opacity-60 animate-flow transition-colors duration-[1500ms]"
                    style={{ backgroundColor: "var(--c1, #3b82f6)" }}
                />
                <div
                    className="absolute top-0 right-0 w-[60vw] h-[60vw] rounded-full mix-blend-screen filter blur-[100px] opacity-50 animate-flow delay-2000 transition-colors duration-[1500ms]"
                    style={{ backgroundColor: "var(--c2, #8b5cf6)" }}
                />
                <div
                    className="absolute bottom-0 left-0 w-[70vw] h-[70vw] rounded-full mix-blend-screen filter blur-[120px] opacity-60 animate-flow delay-5000 transition-colors duration-[1500ms]"
                    style={{ backgroundColor: "var(--c3, #ec4899)" }}
                />
            </div>

            {/* 2. The Frosted Glass Layer (Middle) */}
            {/* Highly blurred backdrop to merge blobs into a smooth soup */}
            <div className="absolute inset-0 backdrop-blur-[100px] bg-black/10" />

            {/* 3. The Glass Texture (Surface) */}
            {/* Much subtler noise, imitating the 'grain' on frosted glass */}
            <div
                className="absolute inset-0 opacity-[0.07] pointer-events-none mix-blend-overlay"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                }}
            />

            {/* 4. Vignette / sheen for depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 pointer-events-none" />
        </div>
    );
}
