import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { PORTFOLIO_OWNER, PROJECTS, SKILLS, TRAINING, BIO } from '../constants';

// Construct a context string for the AI
const SYSTEM_CONTEXT = `
You are an AI assistant for the portfolio of ${PORTFOLIO_OWNER}, a Biomedical Engineer.
Your goal is to answer questions from visitors regarding Alex's skills, projects, and experience.
Be professional, concise, and helpful.

Here is the context about ${PORTFOLIO_OWNER}:
Bio: ${BIO}

Skills:
${JSON.stringify(SKILLS, null, 2)}

Projects:
${JSON.stringify(PROJECTS, null, 2)}

Training/Certifications:
${JSON.stringify(TRAINING, null, 2)}

If a user asks about contact info, suggest they use the contact form or email alex.bioeng@example.com.
If a user asks about something not in the context, politely say you don't have that information but they can reach out directly.
`;

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const sendMessageToGemini = async (userMessage: string): Promise<string> => {
  try {
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: userMessage,
      config: {
        systemInstruction: SYSTEM_CONTEXT,
      }
    });

    return response.text || "I'm sorry, I couldn't generate a response at this time.";
  } catch (error) {
    console.error("Error communicating with Gemini:", error);
    return "I'm having trouble connecting to my knowledge base right now. Please try again later.";
  }
};