"use client";

import { cn } from "@/lib/utils";

interface MoodDisplayProps {
    paletteName: string;
    moodDescription: string;
    diagnosis?: string;
}

export default function MoodDisplay({ paletteName, moodDescription, diagnosis }: MoodDisplayProps) {
    if (!paletteName) return null;

    const poemLines = moodDescription
        .split(/[，。！？]/)
        .filter(line => line.trim().length > 0);

    return (
        <div className="text-center mt-8 animate-in fade-in duration-1000 slide-in-from-bottom-8 flex flex-col items-center gap-12 w-full">

            {/* 1. Mood Mirror (Diagnosis) */}
            {diagnosis && (
                <div className="max-w-xl mx-auto animate-in fade-in slide-in-from-top-4 duration-[1500ms]">
                    <p className="text-white/50 text-xs md:text-sm font-serif tracking-[0.3em] mb-3">
                        ··· 情绪映照 ···
                    </p>
                    <p className="text-white/90 text-lg md:text-xl font-serif leading-loose italic border-b border-white/10 pb-6 px-4">
                        {diagnosis}
                    </p>
                </div>
            )}

            <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-32 mt-4 w-full max-w-5xl">

                {/* 2. Color Name Stamp */}
                <div className="relative group shrink-0">
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent rounded-full blur-[60px] opacity-0 group-hover:opacity-60 transition-opacity duration-1000" />

                    <div className="relative flex flex-col items-center">
                        <h2 className="relative z-10 text-[6rem] md:text-[8rem] text-white font-calligraphy tracking-wider select-none leading-tight"
                            style={{ fontFamily: 'var(--font-ma-shan-zheng)' }}>
                            {paletteName}
                        </h2>
                        <div className="mt-4 border-t border-white/20 pt-2 px-4">
                            <span className="text-[10px] md:text-xs text-white/40 tracking-[0.6em] font-serif uppercase">
                                Traditional Color
                            </span>
                        </div>
                    </div>
                </div>

                <div className="h-48 w-[1px] bg-gradient-to-b from-transparent via-white/20 to-transparent hidden md:block" />

                {/* 3. Poem (Vertical Layout) */}
                {/* Using .font-kaiti for specific KaiShu look requested by user */}
                <div className="relative h-auto min-h-[20rem] flex flex-row-reverse gap-10 items-start justify-center">
                    {poemLines.map((line, index) => (
                        <div key={index} className="flex flex-col items-center h-full pt-2">
                            <p className="text-4xl md:text-5xl text-white/90 leading-[1.6] tracking-widest vertical-rl select-none opacity-90 transition-all hover:opacity-100 hover:scale-105 duration-500 font-kaiti shadow-sm"
                                style={{
                                    writingMode: 'vertical-rl',
                                    textOrientation: 'upright',
                                    // font-family handled by class 'font-kaiti'
                                    letterSpacing: '0.1em'
                                }}>
                                {line}
                            </p>
                            {/* Stamp logic */}
                            {index === poemLines.length - 1 && (
                                <div className="mt-8 w-8 h-8 border md:w-10 md:h-10 border-white/30 rounded-sm opacity-60 bg-red-800/40 shadow-inner flex items-center justify-center">
                                    <span className="text-[12px] text-white/50 writing-vertical font-kaiti">印</span>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}
