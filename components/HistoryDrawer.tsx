"use client";

import { X, Trash2, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

export interface HistoryItem {
    id: string; // Timestamp ID
    text: string;
    colors: string[];
    paletteName: string;
    moodDescription: string;
    diagnosis: string;
    timestamp: number;
}

interface HistoryDrawerProps {
    isOpen: boolean;
    onClose: () => void;
    history: HistoryItem[];
    onSelect: (item: HistoryItem) => void;
    onClear: () => void;
}

export default function HistoryDrawer({ isOpen, onClose, history, onSelect, onClear }: HistoryDrawerProps) {
    return (
        <>
            {/* Backdrop */}
            <div
                className={cn(
                    "fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-500",
                    isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                )}
                onClick={onClose}
            />

            {/* Drawer Panel */}
            <div className={cn(
                "fixed top-0 right-0 h-full w-full max-w-sm bg-black/80 backdrop-blur-xl border-l border-white/10 shadow-2xl z-50 transition-transform duration-500 ease-out transform flex flex-col",
                isOpen ? "translate-x-0" : "translate-x-full"
            )}>
                {/* Header */}
                <div className="p-6 border-b border-white/10 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <Clock className="w-5 h-5 text-white/50" />
                        <h2 className="text-xl font-serif text-white/90 tracking-widest">时光卷轴</h2>
                    </div>
                    <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full transition-colors">
                        <X className="w-5 h-5 text-white/50" />
                    </button>
                </div>

                {/* List */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4 no-scrollbar">
                    {history.length === 0 ? (
                        <div className="h-full flex flex-col items-center justify-center text-white/30 gap-4">
                            <Clock className="w-12 h-12 opacity-20" />
                            <p className="font-serif tracking-widest text-sm">暂无记录</p>
                        </div>
                    ) : (
                        history.map((item) => (
                            <div
                                key={item.id}
                                onClick={() => {
                                    onSelect(item);
                                    onClose();
                                }}
                                className="group relative bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 rounded-xl p-4 cursor-pointer transition-all duration-300 flex items-center gap-4"
                            >
                                {/* Color Swatch */}
                                <div className="w-12 h-12 rounded-full shrink-0 shadow-lg border border-white/10"
                                    style={{ background: `linear-gradient(135deg, ${item.colors[0]}, ${item.colors[1]})` }}
                                />

                                <div className="flex-1 min-w-0">
                                    <div className="flex justify-between items-baseline mb-1">
                                        <h3 className="text-white/90 text-sm font-serif truncate pr-2">
                                            {item.paletteName || "无名之色"}
                                        </h3>
                                        <span className="text-white/30 text-xs font-mono">
                                            {new Date(item.timestamp).toLocaleDateString()}
                                        </span>
                                    </div>
                                    <p className="text-white/50 text-xs truncate font-serif">
                                        "{item.text}"
                                    </p>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                {/* Footer */}
                {history.length > 0 && (
                    <div className="p-6 border-t border-white/10">
                        <button
                            onClick={onClear}
                            className="w-full flex items-center justify-center gap-2 text-red-400/70 hover:text-red-300 hover:bg-red-500/10 py-3 rounded-lg transition-all font-serif text-sm tracking-widest"
                        >
                            <Trash2 className="w-4 h-4" />
                            清空回忆
                        </button>
                    </div>
                )}
            </div>
        </>
    );
}
