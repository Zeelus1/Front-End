import { GoogleGenAI } from "@google/genai";
import zeePrompt from "../data/zeePrompt";

async function promptGemini(text) {
    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

    if (!apiKey) {
        throw new Error("GEMINI_API_KEY is not defined. Check your .env file.");
    }

    let ai;
    try {
        ai = new GoogleGenAI({ apiKey });
    } catch (error) {
        console.error("Error initializing GoogleGenAI:", error.message);
        throw new Error("Failed to initialize the AI client.");
    }

    const textPrompt = `${zeePrompt.prompt}. O usuario fez uma pergunta, responda ela: "${text}"`;

    try {
        const response = await ai.models.generateContent({
            model: "gemini-2.0-flash",
            contents: textPrompt,
        });

        if (response && response.text) {
            return response.text;
        } else {
            throw new Error("Invalid response format from the model.");
        }
    } catch (error) {
        console.error("Error generating content:", error.message);
        throw new Error("Failed to generate content from the model.");
    }
}

export default promptGemini;