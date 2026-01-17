"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Loader2, Sparkles } from "lucide-react";

interface VibeInputProps {
    onSubmit: (text: string) => void;
    isLoading: boolean;
}

export default function VibeInput({ onSubmit, isLoading }: VibeInputProps) {
    const [value, setValue] = useState("");
    const [isFocused, setIsFocused] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (value.trim()) {
            onSubmit(value);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="w-full max-w-xl relative flex flex-col items-center justify-center gap-4 transition-all duration-700">

            <div className={cn(
                "relative w-full group transition-all duration-700",
                isLoading ? "scale-95 opacity-80" : "scale-100 opacity-100",
                isFocused ? "scale-[1.02]" : "" // Subtle scale on focus
            )}>
                {/* Glass background pill with shimmer */}
                <div className={cn(
                    "absolute inset-0 bg-white/5 blur-xl rounded-full transition-all duration-1000",
                    isFocused ? "bg-white/10 opacity-100 scale-105" : "opacity-0 group-hover:opacity-60"
                )} />

                <input
                    type="text"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    placeholder={isLoading ? "正在感知..." : "写下此刻的心情..."}
                    disabled={isLoading}
                    className={cn(
                        "relative z-10 w-full bg-white/5 backdrop-blur-md rounded-full text-center text-3xl md:text-4xl text-white placeholder-white/40 focus:outline-none border px-8 py-6 transition-all duration-700 font-serif tracking-widest shadow-2xl",
                        // Dynamic Border Animation
                        isLoading
                            ? "border-white/50 text-white/50 cursor-wait"
                            : isFocused
                                ? "border-white/50 shadow-[0_0_30px_rgba(255,255,255,0.15)]" // Focus Glow
                                : "border-white/10 hover:border-white/30 animate-[gentle-pulse_4s_ease-in-out_infinite]" // Idle Breathing
                    )}
                    autoFocus
                />

                {/* Icon Positioned inside right */}
                <button
                    type="submit"
                    disabled={isLoading || !value.trim()}
                    className={cn(
                        "absolute right-4 top-1/2 -translate-y-1/2 z-20 text-white/70 hover:text-white transition-all duration-500 p-2 rounded-full hover:bg-white/10",
                        (!value.trim() && !isLoading) ? "opacity-0 pointer-events-none scale-90" : "opacity-100 scale-100"
                    )}
                >
                    {isLoading ? (
                        <Loader2 className="w-6 h-6 animate-spin" />
                    ) : (
                        <Sparkles className="w-6 h-6" />
                    )}
                </button>
            </div>

            {/* Subtle status text for better feedback loop */}
            <p className={cn(
                "text-white/40 font-serif text-sm tracking-widest transition-opacity duration-500 h-6",
                isLoading ? "opacity-100" : "opacity-0"
            )}>
                {isLoading ? "正在调制色彩..." : ""}
            </p>
        </form>
    );
}
