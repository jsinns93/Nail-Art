
import { GoogleGenAI, Type } from "@google/genai";
import { NailSuggestion } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export async function getNailArtSuggestion(prompt: string, imageBase64?: string): Promise<NailSuggestion | null> {
  try {
    const model = 'gemini-3-flash-preview';
    
    const systemInstruction = `
      You are a world-class luxury nail artist and stylist for "Shanail.co". 
      Your task is to suggest a specific nail art design based on the user's outfit description, mood, or an image.
      Be creative, trendy (Y2K, Coquette, Minimalist, etc.), and detailed.
    `;

    const contents: any[] = [{ text: `Suggest a nail design for: ${prompt}` }];
    
    if (imageBase64) {
      contents.push({
        inlineData: {
          mimeType: "image/jpeg",
          data: imageBase64
        }
      });
    }

    const response = await ai.models.generateContent({
      model,
      contents: { parts: contents },
      config: {
        systemInstruction,
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            designName: { type: Type.STRING },
            colorPalette: { 
              type: Type.ARRAY, 
              items: { type: Type.STRING } 
            },
            shape: { type: Type.STRING, description: "e.g. Almond, Stiletto, Square, Coffin" },
            style: { type: Type.STRING, description: "e.g. Minimalist, Aura, French Tip, 3D Art" },
            description: { type: Type.STRING }
          },
          required: ["designName", "colorPalette", "shape", "style", "description"]
        }
      }
    });

    const result = response.text;
    if (result) {
      return JSON.parse(result) as NailSuggestion;
    }
    return null;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return null;
  }
}
