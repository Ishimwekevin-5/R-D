
import { GoogleGenAI, Type } from "@google/genai";

const getAI = () => new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const generateLabReport = async (subject: string) => {
  const ai = getAI();
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: `Conduct a technical research synthesis for the following subject: ${subject}. 
               Format as a highly detailed laboratory report with technical metrics.`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          id: { type: Type.STRING },
          timestamp: { type: Type.STRING },
          subject: { type: Type.STRING },
          summary: { type: Type.STRING },
          findings: {
            type: Type.ARRAY,
            items: { type: Type.STRING }
          },
          metrics: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                label: { type: Type.STRING },
                value: { type: Type.NUMBER }
              },
              required: ["label", "value"]
            }
          },
          conclusion: { type: Type.STRING }
        },
        required: ["id", "timestamp", "subject", "summary", "findings", "metrics", "conclusion"]
      }
    }
  });

  return JSON.parse(response.text);
};
