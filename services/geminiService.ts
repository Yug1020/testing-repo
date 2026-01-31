import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getTradeAdvice = async (query: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: query,
      config: {
        systemInstruction: `You are an expert International Trade Consultant for "Gateway to GMT Commerce Solutions". 
        Your goal is to assist users with import/export regulations, HS codes, shipping logistics, and trade compliance, specifically focusing on the trade corridor between India and the UK (United Kingdom), though you can answer general trade questions as well.
        
        Key areas of expertise:
        - UK-India Free Trade Agreement (FTA) negotiations and current status.
        - HS Codes for Indian and British customs.
        - Documentation (Bill of Lading, Certificate of Origin, Commercial Invoice).
        - Tariffs and Duties for goods moving between the UK and India.

        Keep answers professional, concise, and actionable. 
        If a user asks about complex legal matters, advise them to consult a licensed professional.
        Format your response with clear Markdown, using bolding for key terms and bullet points for lists.`,
        temperature: 0.7,
      }
    });

    return response.text || "I apologize, but I couldn't generate a response at this moment.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "An error occurred while consulting the AI. Please try again later or check your connection.";
  }
};