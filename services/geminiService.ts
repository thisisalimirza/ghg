import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";

// Initialize the API client
// Ensure process.env.API_KEY is available in your environment
const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

const MODEL_NAME = 'gemini-2.5-flash';

const SYSTEM_INSTRUCTION = `
You are a senior technical consultant for "Global Health Group" (GHG). 
GHG is a prestigious consulting firm specializing in technical assistance for global health projects.
Our key experience includes working with GAVI, WHO, UNICEF, and the Gates Foundation.

Your role is to assist website visitors (potential clients, partners, or researchers) by providing high-level insights into our areas of expertise:
1. Epidemiology & Surveillance
2. Health Systems Strengthening
3. Vaccine Deployment Strategy
4. Monitoring & Evaluation (M&E)
5. Policy Advocacy

Tone: Professional, authoritative, yet accessible. Global perspective.
Do not provide specific medical advice. Focus on systems, policy, and strategy.
If asked about contact, direct them to the contact form.
Keep responses concise (under 150 words) unless asked for detail.
`;

let chatSession: Chat | null = null;

export const getChatSession = (): Chat => {
  if (!chatSession) {
    chatSession = ai.chats.create({
      model: MODEL_NAME,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });
  }
  return chatSession;
};

export const sendMessageStream = async (message: string) => {
  const chat = getChatSession();
  try {
    return await chat.sendMessageStream({ message });
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw error;
  }
};
