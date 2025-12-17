import React, { useEffect, useState } from 'react';
import { ShieldCheck, Key, Loader2 } from 'lucide-react';

export const ApiKeyGuard: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [hasKey, setHasKey] = useState<boolean | null>(null);

  const checkKey = async () => {
    try {
      const selected = await window.aistudio.hasSelectedApiKey();
      setHasKey(selected);
    } catch (e) {
      console.warn("ApiKeyGuard check failed", e);
      // Fallback for dev/preview
      setHasKey(true);
    }
  };

  useEffect(() => {
    checkKey();
  }, []);

  const handleSelectKey = async () => {
    try {
      await window.aistudio.openSelectKey();
      // Assume success after dialog closes
      setHasKey(true);
    } catch (e) {
      console.error(e);
      checkKey(); // Retry check
    }
  };

  if (hasKey === null) {
    return (
      <div className="h-full w-full bg-slate-900 flex items-center justify-center">
        <Loader2 className="w-8 h-8 text-indigo-500 animate-spin" />
      </div>
    );
  }

  if (!hasKey) {
    return (
      <div className="h-full w-full bg-slate-900 flex flex-col items-center justify-center p-6 text-center text-white animate-in fade-in duration-500">
        <div className="w-20 h-20 bg-indigo-600/20 rounded-full flex items-center justify-center mb-6 border border-indigo-500/30">
          <Key className="w-10 h-10 text-indigo-400" />
        </div>
        <h1 className="text-2xl font-bold mb-2">Ativar Funcionalidades IA</h1>
        <p className="text-slate-400 max-w-md mb-8 text-sm">
          Para usar o Copiloto inteligente, Estúdio Dashcam e Dream Drive, precisas de ligar a tua Chave API Google Gemini.
        </p>
        
        <button 
          onClick={handleSelectKey}
          className="bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-3 rounded-full font-bold flex items-center gap-2 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-indigo-500/25"
        >
          <ShieldCheck className="w-5 h-5" />
          Ligar Chave API
        </button>

        <a 
          href="https://ai.google.dev/gemini-api/docs/billing" 
          target="_blank" 
          rel="noopener noreferrer"
          className="mt-6 text-xs text-slate-500 hover:text-slate-300 underline"
        >
          Saber mais sobre a faturação da API Gemini
        </a>
      </div>
    );
  }

  return <>{children}</>;
};