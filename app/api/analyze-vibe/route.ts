import { NextResponse } from "next/server";
import { analyzeSentiment, getDiagnosis } from "@/lib/sentiment-engine";
import { getColorsBySentiment } from "@/lib/chinese-colors";

export async function POST(req: Request) {
    try {
        const { text } = await req.json();

        if (!text || typeof text !== "string") {
            return NextResponse.json({ error: "Invalid input" }, { status: 400 });
        }

        // 1. Analyze Sentiment with new logic (returns specialCategory)
        const sentiment = analyzeSentiment(text);

        // 2. Get diagnosis based on full sentiment object
        const diagnosis = getDiagnosis(sentiment);

        // 3. Get colors (Passing specialCategory if it exists)
        const colors = getColorsBySentiment(
            sentiment.valence,
            sentiment.energy,
            sentiment.specialCategory // Routes anxiety/nostalgia to specific colors
        );

        // 4. Extract data
        const paletteName = colors[0].name;
        const moodDescription = colors[0].poem;
        const colorHexes = colors.map(c => c.hex);

        return NextResponse.json({
            paletteName,
            colors: colorHexes,
            moodDescription,
            diagnosis
        });
    } catch (error) {
        console.error("Analysis failed:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
