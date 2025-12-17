import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Loader2, Volume2, VolumeX, ArrowLeft } from 'lucide-react';
import { GeminiService } from '../services/gemini';
import { ChatMessage } from '../types';

interface CopilotProps {
  onBack: () => void;
}

export const Copilot: React.FC<CopilotProps> = ({ onBack }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'model',
      text: 'Olá! Eu sou o RodaVO, o teu copiloto. Posso ajudar com o código da estrada, diagnósticos do carro ou conselhos de rota. O que precisas?',
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [voiceEnabled, setVoiceEnabled] = useState(true); // Voice enabled by default
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  // NATIVE SPEECH SYNTHESIS IMPLEMENTATION
  const speak = (text: string) => {
    // Check if browser supports speech synthesis
    if (!voiceEnabled || typeof window === 'undefined' || !window.speechSynthesis) return;
    
    // Cancel any currently speaking audio
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'pt-PT'; // Force Portuguese Portugal
    utterance.rate = 1.1; // Slightly faster for natural feel
    utterance.pitch = 1.0;

    // Try to select a high quality voice if available
    const voices = window.speechSynthesis.getVoices();
    // Prioritize "Joana" or similar PT voices
    const ptVoice = voices.find(v => v.lang === 'pt-PT') || voices.find(v => v.lang.startsWith('pt'));
    if (ptVoice) utterance.voice = ptVoice;

    window.speechSynthesis.speak(utterance);
  };

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    try {
      const responseText = await GeminiService.chat(
        messages.map(m => ({ role: m.role, text: m.text })),
        userMsg.text
      );

      const botMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: responseText || "Estou com dificuldades em ligar ao satélite. Tenta novamente.",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMsg]);
      
      // TRIGGER VOICE
      speak(botMsg.text);

    } catch (err) {
      console.error(err);
      const errorMsg: ChatMessage = {
         id: (Date.now() + 1).toString(),
        role: 'model',
        text: "Ligação perdida. Por favor verifica a tua rede ou chave API.",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMsg]);
      speak("Ocorreu um erro na ligação.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-full bg-slate-900 text-slate-100">
      <div className="p-4 border-b border-slate-800 flex items-center justify-between bg-slate-900/90 backdrop-blur sticky top-0 z-10 safe-top">
        <div className="flex items-center gap-3">
          <button 
            onClick={onBack}
            className="flex w-10 h-10 shrink-0 items-center justify-center rounded-full hover:bg-slate-800 text-white transition-colors mr-1"
          >
            <ArrowLeft size={24} />
          </button>
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center shadow-lg">
            <Bot className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="font-bold text-lg">Inteligência RodaVO</h2>
            <p className="text-xs text-slate-400">Com tecnologia Gemini</p>
          </div>
        </div>
        <button 
          onClick={() => {
            const newState = !voiceEnabled;
            setVoiceEnabled(newState);
            if (!newState) window.speechSynthesis.cancel();
          }} 
          className={`p-2 rounded-full transition-colors active:scale-95 ${voiceEnabled ? 'bg-indigo-600/20 text-indigo-400' : 'bg-slate-800 text-slate-500'}`}
        >
          {voiceEnabled ? <Volume2 size={20} /> : <VolumeX size={20} />}
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4 glass-scroll" ref={scrollRef}>
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[80%] rounded-2xl px-4 py-3 shadow-md ${
                msg.role === 'user'
                  ? 'bg-indigo-600 text-white rounded-br-none'
                  : 'bg-slate-800 text-slate-200 rounded-bl-none border border-slate-700'
              }`}
            >
              <div className="text-sm leading-relaxed whitespace-pre-wrap">{msg.text}</div>
              <div className="text-[10px] opacity-50 mt-1 text-right">
                {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </div>
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start">
            <div className="bg-slate-800 rounded-2xl rounded-bl-none px-4 py-3 border border-slate-700 flex items-center gap-2">
              <Loader2 className="w-4 h-4 animate-spin text-indigo-400" />
              <span className="text-xs text-slate-400">A analisar dados da rota...</span>
            </div>
          </div>
        )}
      </div>

      <div className="p-4 bg-slate-900 border-t border-slate-800 safe-bottom">
        <div className="relative">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Pergunta sobre trânsito, sinais ou segurança..."
            className="w-full bg-slate-800 border-slate-700 border rounded-full pl-5 pr-12 py-3.5 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent placeholder:text-slate-500 text-sm transition-shadow"
          />
          <button
            onClick={handleSend}
            disabled={loading || !input.trim()}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 bg-indigo-600 rounded-full flex items-center justify-center hover:bg-indigo-500 disabled:opacity-50 disabled:hover:bg-indigo-600 transition-all active:scale-90 shadow-lg shadow-indigo-500/20"
          >
            <Send className="w-4 h-4 text-white ml-0.5" />
          </button>
        </div>
      </div>
    </div>
  );
};