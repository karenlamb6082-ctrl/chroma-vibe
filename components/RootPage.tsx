"use client";

import { useState, useEffect } from "react";
import GradientBackground from "./GradientBackground";
import VibeInput from "./VibeInput";
import MoodDisplay from "./MoodDisplay";
import HistoryDrawer, { HistoryItem } from "./HistoryDrawer";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { History as HistoryIcon } from "lucide-react";

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface VibeState {
    colors: string[];
    paletteName: string;
    moodDescription: string;
    diagnosis?: string;
}

export default function RootPage() {
    const [vibe, setVibe] = useState<VibeState>({
        colors: ["#77969a", "#a4e2c6", "#2775b6", "#d6ecf0"],
        paletteName: "",
        moodDescription: "",
        diagnosis: ""
    });
    const [isLoading, setIsLoading] = useState(false);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [resetKey, setResetKey] = useState(0);

    // History State
    const [history, setHistory] = useState<HistoryItem[]>([]);
    const [isHistoryOpen, setIsHistoryOpen] = useState(false);

    // Load history on mount
    useEffect(() => {
        const saved = localStorage.getItem("vibe_history");
        if (saved) {
            try {
                setHistory(JSON.parse(saved));
            } catch (e) {
                console.error("Failed to load history", e);
            }
        }
    }, []);

    // Save history helper
    const saveToHistory = (newHistory: HistoryItem[]) => {
        setHistory(newHistory);
        localStorage.setItem("vibe_history", JSON.stringify(newHistory));
    };

    const handleVibeSubmit = async (text: string) => {
        setIsLoading(true);
        setIsTransitioning(true);

        try {
            const response = await fetch("/api/analyze-vibe", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ text }),
            });

            if (response.ok) {
                const data = await response.json();
                const newVibe = {
                    colors: data.colors,
                    paletteName: data.paletteName,
                    moodDescription: data.moodDescription,
                    diagnosis: data.diagnosis
                };

                setVibe(newVibe);

                // Add to history
                const newItem: HistoryItem = {
                    id: Date.now().toString(),
                    text,
                    timestamp: Date.now(),
                    ...newVibe
                };
                // Keep last 20 items
                const updatedHistory = [newItem, ...history].slice(0, 20);
                saveToHistory(updatedHistory);
            }
        } catch (error) {
            console.error("Failed to analyze vibe:", error);
        } finally {
            setIsLoading(false);
            setTimeout(() => setIsTransitioning(false), 300);
        }
    };

    const restoreHistory = (item: HistoryItem) => {
        setIsTransitioning(true);
        setVibe({
            colors: item.colors,
            paletteName: item.paletteName,
            moodDescription: item.moodDescription,
            diagnosis: item.diagnosis
        });
        setTimeout(() => setIsTransitioning(false), 300);
    };

    return (
        <main className="relative h-screen w-full overflow-y-auto overflow-x-hidden no-scrollbar">
            <GradientBackground colors={vibe.colors} />

            {/* History Toggle Button */}
            <button
                onClick={() => setIsHistoryOpen(true)}
                className="fixed top-6 right-6 z-30 p-3 bg-white/5 hover:bg-white/10 backdrop-blur-md rounded-full border border-white/10 text-white/70 hover:text-white transition-all duration-300 hover:scale-105 group"
            >
                <HistoryIcon className="w-5 h-5" />
                <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-black/50 backdrop-blur text-xs px-2 py-1 rounded text-white/80 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                    时光卷轴
                </span>
            </button>

            <HistoryDrawer
                isOpen={isHistoryOpen}
                onClose={() => setIsHistoryOpen(false)}
                history={history}
                onSelect={restoreHistory}
                onClear={() => saveToHistory([])}
            />

            <div className="flex flex-col items-center justify-center min-h-full py-20 px-4 md:px-6 gap-12 w-full">

                {/* Branding Hero Section (Visible only when no vibe generated yet) */}
                <div className={cn(
                    "flex flex-col items-center justify-center transition-all duration-1000 absolute top-[20%] md:top-[25%] left-0 right-0 z-10 pointer-events-none",
                    vibe.paletteName ? "opacity-0 translate-y-[-50px] scale-90" : "opacity-100 translate-y-0 scale-100"
                )}>
                    <h1 className="text-[6rem] md:text-[8rem] text-white/90 font-calligraphy leading-tight select-none drop-shadow-2xl"
                        style={{ fontFamily: 'var(--font-ma-shan-zheng)' }}>
                        映心
                    </h1>
                    <div className="flex flex-col items-center gap-2 mt-2">
                        <span className="text-sm md:text-base text-white/60 font-serif tracking-[0.5em] uppercase">
                            Inheart
                        </span>
                        <div className="w-12 h-[1px] bg-white/20 my-2" />
                        <span className="text-xs text-white/40 font-serif tracking-[0.2em]">
                            以色映心 · 见本真
                        </span>
                    </div>
                </div>

                <div className={cn(
                    "w-full max-w-4xl z-20 flex justify-center transition-all duration-1000",
                    vibe.paletteName ? "mt-0" : "mt-[35vh]" // Push input down initially to make room for title
                )}>
                    {/* Add key to force re-render on reset */}
                    <VibeInput key={resetKey} onSubmit={handleVibeSubmit} isLoading={isLoading} />
                </div>

                <div className={cn(
                    "w-full max-w-6xl transition-all duration-1000 ease-in-out flex flex-col items-center justify-center",
                    isTransitioning ? "opacity-0 blur-sm translate-y-4" : "opacity-100 blur-0 translate-y-0"
                )}>
                    <MoodDisplay
                        paletteName={vibe.paletteName}
                        moodDescription={vibe.moodDescription}
                        diagnosis={vibe.diagnosis}
                    />

                    {/* Back to Home Button - High Visibility Version */}
                    {vibe.paletteName && (
                        <button
                            onClick={() => {
                                setVibe({ colors: ["#77969a", "#a4e2c6", "#2775b6", "#d6ecf0"], paletteName: "", moodDescription: "", diagnosis: "" });
                                setIsTransitioning(false);
                                setResetKey(prev => prev + 1); // Reset Input
                            }}
                            className="mt-16 px-8 py-3 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 hover:border-white/40 transition-all duration-500 backdrop-blur-md group flex items-center gap-3 cursor-pointer shadow-lg hover:shadow-white/5"
                        >
                            <span className="font-serif text-lg text-white/70 group-hover:rotate-[-180deg] transition-transform duration-700">↺</span>
                            <span className="text-sm font-serif tracking-[0.2em] text-white/70 group-hover:text-white transition-colors">
                                再试一次
                            </span>
                        </button>
                    )}
                </div>
            </div>
        </main>
    );
}
