"use client";

import { useState, useEffect, useRef } from "react";
import { Music, Volume2, VolumeX } from "lucide-react";

export default function BackgroundMusic() {
    const audioRef = useRef<HTMLAudioElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [hasInteracted, setHasInteracted] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        // Attempt to play on mount (might be blocked by browser policy)
        const playAudio = async () => {
            if (audioRef.current) {
                try {
                    audioRef.current.volume = 0.4; // Set initial volume
                    await audioRef.current.play();
                    setIsPlaying(true);
                } catch (err) {
                    console.log("Autoplay blocked, waiting for interaction");
                }
            }
        };

        if (hasInteracted) {
            playAudio();
        }

        // Cleanup
        return () => {
            if (audioRef.current) {
                audioRef.current.pause();
            }
        };
    }, [hasInteracted]);

    const togglePlay = () => {
        if (!audioRef.current) return;

        if (isPlaying) {
            audioRef.current.pause();
            setIsPlaying(false);
        } else {
            audioRef.current.play();
            setIsPlaying(true);
            setHasInteracted(true);
        }
    };

    // Handle global click to initialize audio context if needed
    useEffect(() => {
        const handleInteraction = () => {
            if (!hasInteracted && !isPlaying && audioRef.current) {
                // We don't auto-play on first click to avoid annoying user, 
                // but we mark interaction so next intent works freely
                // setHasInteracted(true); 
            }
        };

        window.addEventListener('click', handleInteraction);
        return () => window.removeEventListener('click', handleInteraction);
    }, [hasInteracted, isPlaying]);

    return (
        <>
            <audio
                ref={audioRef}
                src="/bgm.mp3"
                loop
                preload="auto"
            />

            <button
                onClick={togglePlay}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="fixed bottom-6 right-6 z-50 p-3 bg-white/5 hover:bg-white/10 backdrop-blur-md rounded-full border border-white/10 text-white/70 hover:text-white transition-all duration-300 hover:scale-105 group"
                aria-label={isPlaying ? "Pause Music" : "Play Music"}
            >
                <div className="relative">
                    {isPlaying ? (
                        <div className="relative">
                            <Volume2 className={`w-5 h-5 ${isHovered ? 'opacity-0 scale-0' : 'opacity-100 scale-100'} transition-all duration-300 absolute inset-0`} />
                            <div className={`w-5 h-5 flex items-center justify-center gap-[2px] ${isHovered ? 'opacity-0 scale-0' : 'opacity-100 scale-100'} transition-all duration-300 absolute inset-0`}>
                                {/* Visualizer bars */}
                                <div className="w-[2px] h-3 bg-current animate-[pulse_1s_ease-in-out_infinite]" />
                                <div className="w-[2px] h-4 bg-current animate-[pulse_1.2s_ease-in-out_infinite_0.1s]" />
                                <div className="w-[2px] h-2 bg-current animate-[pulse_0.8s_ease-in-out_infinite_0.2s]" />
                            </div>
                            <Music className={`w-5 h-5 ${isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-0'} transition-all duration-300`} />
                        </div>
                    ) : (
                        <VolumeX className="w-5 h-5" />
                    )}
                </div>

                <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-black/50 backdrop-blur text-xs px-2 py-1 rounded text-white/80 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                    {isPlaying ? "暂停音乐" : "播放音乐"}
                </span>
            </button>
        </>
    );
}
