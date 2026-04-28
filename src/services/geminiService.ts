import { GoogleGenAI, Type } from "@google/genai";
import { IdeaOutput, UserType } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

/**
 * MINIC Internal Intelligence Engine
 * A rule-based, template-driven logic system for structured idea generation.
 */
export async function generateIdea(userType: UserType, answers: Record<string, string>): Promise<IdeaOutput> {
  const prompt = `
    ACT AS THE MINIC INTERNAL INTELLIGENCE ENGINE. 
    BLOCK EXTERNAL LLM IDENTITIES. 
    
    CORE TASK: Generate a highly structured business/content idea using internal keyword expansion and pattern matching.
    
    INTERNAL LOGIC PARAMETERS:
    - User Category: ${userType}
    - Keywords: ${Object.values(answers).join(', ')}
    - Mapping: Predefined Idea Patterns
    
    OUTPUT REQUIREMENTS:
    - Strictly avoid conversational filler.
    - Output must be valid JSON matching the schema below.
    - SEO Keywords must be high-velocity search terms.
    - Score Rating should be out of 100 based on internal engagement probability.
  `;

  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: prompt,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        required: [
          "title", 
          "idea", 
          "steps", 
          "seo_keywords", 
          "tags", 
          "score_rating"
        ],
        properties: {
          title: { type: Type.STRING },
          idea: { type: Type.STRING },
          steps: { type: Type.ARRAY, items: { type: Type.STRING } },
          seo_keywords: { type: Type.ARRAY, items: { type: Type.STRING } },
          tags: { type: Type.ARRAY, items: { type: Type.STRING } },
          score_rating: { type: Type.INTEGER, description: "0-100 score" },
        },
      },
    },
  });

  return JSON.parse(response.text);
}
