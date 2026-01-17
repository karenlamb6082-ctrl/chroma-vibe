import { NextResponse } from "next/server";
import { analyzeSentiment, getDiagnosis } from "@/lib/sentiment-engine";
import { getColorsBySentiment } from "@/lib/chinese-colors";

export async function POST(req: Request) {
    try {
        const { text, recentHexCodes } = await req.json();

        if (!text || typeof text !== "string") {
            return NextResponse.json({ error: "Invalid input" }, { status: 400 });
        }

        // 1. Analyze Sentiment (Now includes Chaos)
        const sentiment = analyzeSentiment(text);

        // 2. Get diagnosis based on full sentiment object
        const diagnosis = getDiagnosis(sentiment);

        // 3. Get colors using 3D Vector Matching + History De-duplication
        // Map 0-1 sentiment scores to 0-10 scale for the color DB
        const inputVector = {
            energy: sentiment.energy * 10,
            valence: ((sentiment.valence + 1) / 2) * 10, // Map -1~1 to 0~10
            chaos: (sentiment.chaos || 0) * 10
        };

        const colors = getColorsBySentiment(inputVector, recentHexCodes || []);

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
