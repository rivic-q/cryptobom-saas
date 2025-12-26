
import { GoogleGenAI, Type, Modality } from "@google/genai";

// Encoding/Decoding Helpers for Live API and TTS
export function decode(base64: string) {
  const binaryString = atob(base64);
  const len = binaryString.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes;
}

export function encode(bytes: Uint8Array) {
  let binary = '';
  const len = bytes.byteLength;
  for (let i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary);
}

export async function decodeAudioData(
  data: Uint8Array,
  ctx: AudioContext,
  sampleRate: number,
  numChannels: number,
): Promise<AudioBuffer> {
  const dataInt16 = new Int16Array(data.buffer);
  const frameCount = dataInt16.length / numChannels;
  const buffer = ctx.createBuffer(numChannels, frameCount, sampleRate);

  for (let channel = 0; channel < numChannels; channel++) {
    const channelData = buffer.getChannelData(channel);
    for (let i = 0; i < frameCount; i++) {
      channelData[i] = dataInt16[i * numChannels + channel] / 32768.0;
    }
  }
  return buffer;
}

/**
 * Generates a comprehensive PQC compliance report using deep reasoning.
 * Cross-references algorithms with DORA and BSI TR-02102.
 */
export const generateComprehensiveAuditReport = async (inventory: any, compliance: any) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  const prompt = `
    TASK: Generate a high-fidelity PQC Compliance Audit Report.
    INVENTORY: ${JSON.stringify(inventory)}
    MANDATES: ${JSON.stringify(compliance)}
    
    REQUIREMENTS:
    1. Cross-reference every "Quantum-Vulnerable" algorithm with specific DORA Articles (e.g. Art 16) and BSI TR-02102-1 sections.
    2. Provide a Risk Assessment Summary (Critical/High/Medium/Low).
    3. Detail actionable remediation steps for each vulnerability.
    4. Format the output as professional Markdown suitable for a CISO or Regulatory Auditor.
    5. Include a "Regulatory Outlook" section for 2026 enforcement.
  `;

  const response = await ai.models.generateContent({
    model: 'gemini-3-pro-preview',
    contents: prompt,
    config: {
      thinkingConfig: { thinkingBudget: 32768 },
      systemInstruction: "You are a specialized cryptographic auditor for EU Financial Infrastructure. Your goal is to help regulated entities achieve PQC readiness."
    }
  });

  return response.text;
};

/**
 * Basic Text Task with Gemini 3 Flash
 */
export const runQuickAnalysis = async (prompt: string) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: prompt,
  });
  return response.text;
};

/**
 * Complex Text Task with Thinking Mode (Gemini 3 Pro)
 */
export const runDeepAnalysis = async (prompt: string) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  const response = await ai.models.generateContent({
    model: 'gemini-3-pro-preview',
    contents: prompt,
    config: {
      thinkingConfig: { thinkingBudget: 32768 }
    },
  });
  return response.text;
};

/**
 * Grounding Analysis (Search)
 */
export const runSearchGroundedAnalysis = async (prompt: string) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: prompt,
    config: {
      tools: [{ googleSearch: {} }]
    }
  });
  return {
    text: response.text,
    sources: response.candidates?.[0]?.groundingMetadata?.groundingChunks || []
  };
};

/**
 * Grounding Analysis (Maps)
 */
export const runMapsGroundedAnalysis = async (prompt: string, location?: { latitude: number, longitude: number }) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  const config: any = {
    tools: [{ googleMaps: {} }]
  };
  
  if (location) {
    config.toolConfig = {
      retrievalConfig: {
        latLng: {
          latitude: location.latitude,
          longitude: location.longitude
        }
      }
    };
  }

  const response = await ai.models.generateContent({
    model: 'gemini-2.5-flash',
    contents: prompt,
    config
  });

  return {
    text: response.text,
    sources: response.candidates?.[0]?.groundingMetadata?.groundingChunks || []
  };
};

/**
 * Image Generation (Pro Image Preview)
 */
export const generateImage = async (prompt: string, size: '1K' | '2K' | '4K' = '1K', aspectRatio: string = '1:1') => {
  if (!(await window.aistudio?.hasSelectedApiKey())) {
    await window.aistudio?.openSelectKey();
  }
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  const response = await ai.models.generateContent({
    model: 'gemini-3-pro-image-preview',
    contents: { parts: [{ text: prompt }] },
    config: {
      imageConfig: {
        imageSize: size,
        aspectRatio
      }
    }
  });

  for (const part of response.candidates[0].content.parts) {
    if (part.inlineData) {
      return `data:image/png;base64,${part.inlineData.data}`;
    }
  }
  return null;
};

/**
 * Image Editing (Flash Image)
 */
export const editImage = async (prompt: string, base64Image: string, mimeType: string) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  const response = await ai.models.generateContent({
    model: 'gemini-2.5-flash-image',
    contents: {
      parts: [
        { inlineData: { data: base64Image, mimeType: mimeType } },
        { text: prompt }
      ]
    }
  });

  for (const part of response.candidates[0].content.parts) {
    if (part.inlineData) {
      return `data:image/png;base64,${part.inlineData.data}`;
    }
  }
  return null;
};

/**
 * Video Generation (Veo)
 */
export const generateVideo = async (prompt: string, aspectRatio: '16:9' | '9:16' = '16:9', startImage?: { base64: string, mime: string }) => {
  if (!(await window.aistudio?.hasSelectedApiKey())) {
    await window.aistudio?.openSelectKey();
  }
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const payload: any = {
    model: 'veo-3.1-fast-generate-preview',
    prompt,
    config: {
      numberOfVideos: 1,
      resolution: '720p',
      aspectRatio
    }
  };

  if (startImage) {
    payload.image = {
      imageBytes: startImage.base64,
      mimeType: startImage.mime
    };
  }

  let operation = await ai.models.generateVideos(payload);
  while (!operation.done) {
    await new Promise(resolve => setTimeout(resolve, 10000));
    operation = await ai.operations.getVideosOperation({ operation: operation });
  }

  const downloadLink = operation.response?.generatedVideos?.[0]?.video?.uri;
  return `${downloadLink}&key=${process.env.API_KEY}`;
};

/**
 * Image/Video Understanding (Pro Preview)
 */
export const analyzeMedia = async (prompt: string, mediaData: { data: string, mimeType: string }[]) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  const response = await ai.models.generateContent({
    model: 'gemini-3-pro-preview',
    contents: {
      parts: [
        ...mediaData.map(m => ({ inlineData: m })),
        { text: prompt }
      ]
    }
  });
  return response.text;
};

/**
 * Text-To-Speech (Flash Preview TTS)
 */
export const textToSpeech = async (text: string, voiceName: string = 'Kore') => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash-preview-tts",
    contents: [{ parts: [{ text: `Say clearly: ${text}` }] }],
    config: {
      responseModalities: [Modality.AUDIO],
      speechConfig: {
        voiceConfig: {
          prebuiltVoiceConfig: { voiceName },
        },
      },
    },
  });
  return response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
};

/**
 * Audio Transcription (Flash Preview)
 */
export const transcribeAudio = async (base64Audio: string, mimeType: string) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: {
      parts: [
        { inlineData: { data: base64Audio, mimeType } },
        { text: "Transcribe this audio exactly. If there is no speech, say 'No speech detected'." }
      ]
    }
  });
  return response.text;
};

/**
 * Cryptographic Policy Analysis with JSON Schema output
 * Added to fix the missing export error in AIAssistant.tsx
 */
export const analyzeCryptoPolicy = async (prompt: string) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: `Analyze the following cryptographic policy or algorithm list against post-quantum security risks and compliance mandates like DORA or BSI TR-02102: ${prompt}`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          overallRisk: {
            type: Type.NUMBER,
            description: "An overall risk score from 0 (Safe) to 10 (Critical)."
          },
          summary: {
            type: Type.STRING,
            description: "A high-level summary of the findings."
          },
          findings: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                algorithm: { type: Type.STRING },
                riskLevel: { type: Type.STRING },
                recommendation: { type: Type.STRING }
              },
              required: ["algorithm", "riskLevel", "recommendation"]
            }
          }
        },
        required: ["overallRisk", "summary", "findings"]
      }
    }
  });
  
  try {
    return JSON.parse(response.text || '{}');
  } catch (e) {
    console.error("Failed to parse JSON response from Gemini", e);
    return {
      overallRisk: 5,
      summary: "Error parsing AI response.",
      findings: []
    };
  }
};
