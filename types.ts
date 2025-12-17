export enum AppView {
  MAP = 'MAP',
  COPILOT = 'COPILOT',
  STUDIO = 'STUDIO',
  DREAM = 'DREAM',
  MARKET = 'MARKET',
  SETTINGS = 'SETTINGS',
  TERRITORY = 'TERRITORY',
  SIGNAL = 'SIGNAL',
  DEFEND = 'DEFEND',
  EVENTS = 'EVENTS',
  GUILD_CHAT = 'GUILD_CHAT',
  SUPPORT = 'SUPPORT',
  ROUTE_MANIFEST = 'ROUTE_MANIFEST',
  VEHICLE_SELECT = 'VEHICLE_SELECT',
  ROULETTE = 'ROULETTE',
  INVENTORY = 'INVENTORY',
  SHOP = 'SHOP',
  PROFILE = 'PROFILE'
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export interface ImageEditState {
  originalImage: string | null;
  processedImage: string | null;
  isProcessing: boolean;
  prompt: string;
}

export interface ImageGenState {
  prompt: string;
  generatedImage: string | null;
  isGenerating: boolean;
  size: '1K' | '2K' | '4K';
  aspectRatio: '16:9' | '1:1' | '9:16';
}

declare global {
  // Native Speech Recognition Types
  interface SpeechRecognitionErrorEvent extends Event {
    readonly error: string;
    readonly message: string;
  }

  interface SpeechRecognitionEvent extends Event {
    readonly results: SpeechRecognitionResultList;
    readonly resultIndex: number;
  }

  interface SpeechRecognitionResultList {
    readonly length: number;
    item(index: number): SpeechRecognitionResult;
    [index: number]: SpeechRecognitionResult;
  }

  interface SpeechRecognitionResult {
    readonly length: number;
    item(index: number): SpeechRecognitionAlternative;
    [index: number]: SpeechRecognitionAlternative;
    readonly isFinal: boolean;
  }

  interface SpeechRecognitionAlternative {
    readonly transcript: string;
    readonly confidence: number;
  }

  interface SpeechRecognition extends EventTarget {
    continuous: boolean;
    interimResults: boolean;
    lang: string;
    maxAlternatives: number;
    onaudiostart: (this: SpeechRecognition, ev: Event) => any;
    onsoundstart: (this: SpeechRecognition, ev: Event) => any;
    onspeechstart: (this: SpeechRecognition, ev: Event) => any;
    onspeechend: (this: SpeechRecognition, ev: Event) => any;
    onsoundend: (this: SpeechRecognition, ev: Event) => any;
    onaudioend: (this: SpeechRecognition, ev: Event) => any;
    onresult: (this: SpeechRecognition, ev: SpeechRecognitionEvent) => any;
    onnomatch: (this: SpeechRecognition, ev: SpeechRecognitionEvent) => any;
    onerror: (this: SpeechRecognition, ev: SpeechRecognitionErrorEvent) => any;
    onstart: (this: SpeechRecognition, ev: Event) => any;
    onend: (this: SpeechRecognition, ev: Event) => any;
    start(): void;
    stop(): void;
    abort(): void;
  }

  interface SpeechRecognitionConstructor {
    new (): SpeechRecognition;
    prototype: SpeechRecognition;
  }

  interface Window {
    H: any; // HERE Maps Global
    // aistudio is managed by environment types
    
    // Native Browser Speech APIs
    SpeechRecognition: SpeechRecognitionConstructor;
    webkitSpeechRecognition: SpeechRecognitionConstructor;
  }
}