import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

// Helper to get a fresh instance (important for key updates)
const getAI = () => new GoogleGenAI({ apiKey: process.env.API_KEY });

export const GeminiService = {
  // Chat / Co-pilot
  async chat(history: { role: string; text: string }[], newMessage: string) {
    const ai = getAI();
    const model = 'gemini-2.5-flash'; // Fast model for chat
    const chat = ai.chats.create({
      model,
      config: {
        systemInstruction: "Tu és o RodaVO, um assistente de condução inteligente. Mantém as respostas concisas, úteis e focadas na segurança. Sabes sobre o Código da Estrada português, manutenção automóvel e planeamento de rotas. Responde sempre em Português de Portugal.",
      },
      history: history.map(h => ({ role: h.role, parts: [{ text: h.text }] })),
    });

    const response = await chat.sendMessage({ message: newMessage });
    return response.text;
  },

  // Image Editing (Nano Banana / Flash Image)
  async editImage(imageBase64: string, prompt: string): Promise<string> {
    const ai = getAI();
    // Using gemini-2.5-flash-image for editing/analysis tasks
    const model = 'gemini-2.5-flash-image';
    
    // Remove header if present for raw data
    const cleanBase64 = imageBase64.replace(/^data:image\/(png|jpeg|jpg|webp);base64,/, '');

    const response = await ai.models.generateContent({
      model,
      contents: {
        parts: [
          {
            inlineData: {
              mimeType: 'image/jpeg',
              data: cleanBase64
            }
          },
          { text: prompt }
        ]
      }
    });

    // Check for image in response
    const candidates = response.candidates;
    if (candidates && candidates[0]?.content?.parts) {
      for (const part of candidates[0].content.parts) {
        if (part.inlineData && part.inlineData.data) {
          return `data:image/png;base64,${part.inlineData.data}`;
        }
      }
    }
    
    throw new Error("Não foi possível gerar ou editar a imagem.");
  },

  // Image Generation (Nano Banana Pro / Pro Image)
  async generateImage(prompt: string, size: '1K' | '2K' | '4K', aspectRatio: '16:9' | '1:1' | '9:16' = '16:9'): Promise<string> {
    const ai = getAI();
    // Using gemini-3-pro-image-preview for high quality generation
    const model = 'gemini-3-pro-image-preview';
    
    const response = await ai.models.generateContent({
      model,
      contents: {
        parts: [{ text: prompt }]
      },
      config: {
        imageConfig: {
          imageSize: size,
          aspectRatio: aspectRatio
        }
      }
    });

    const candidates = response.candidates;
    if (candidates && candidates[0]?.content?.parts) {
      for (const part of candidates[0].content.parts) {
        if (part.inlineData && part.inlineData.data) {
          return `data:image/png;base64,${part.inlineData.data}`;
        }
      }
    }
    
    throw new Error("Falha ao gerar a imagem.");
  }
};