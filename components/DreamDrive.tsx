import React, { useState } from 'react';
import { ImagePlus, Download, Monitor, CheckCircle, AlertCircle, Loader2, ArrowLeft } from 'lucide-react';
import { GeminiService } from '../services/gemini';

interface DreamDriveProps {
  onBack: () => void;
}

export const DreamDrive: React.FC<DreamDriveProps> = ({ onBack }) => {
  const [prompt, setPrompt] = useState('');
  const [size, setSize] = useState<'1K' | '2K' | '4K'>('1K');
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = async () => {
    if (!prompt.trim() || loading) return;

    // Check for API key permission for this specific model per requirements
    try {
        const hasKey = await window.aistudio.hasSelectedApiKey();
        if (!hasKey) {
            await window.aistudio.openSelectKey();
             // Re-check after dialog
             const keyAfter = await window.aistudio.hasSelectedApiKey();
             if(!keyAfter) return;
        }
    } catch (e) {
        // Fallback for dev environments where window.aistudio might be mocked or missing
        console.warn("API Key check skipped or failed", e);
    }

    setLoading(true);
    setError(null);
    setGeneratedImage(null);

    try {
      const img = await GeminiService.generateImage(prompt, size);
      setGeneratedImage(img);
    } catch (err: any) {
      setError("Falha na geração. Verifica se tens uma chave API paga válida para modelos Pro.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-full flex flex-col bg-slate-900 text-white overflow-y-auto glass-scroll">
      {/* Sticky Header */}
      <div className="sticky top-0 z-20 bg-slate-900/95 backdrop-blur-md p-4 border-b border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button 
            onClick={onBack}
            className="flex w-10 h-10 shrink-0 items-center justify-center rounded-full hover:bg-slate-800 text-white transition-colors"
          >
            <ArrowLeft size={24} />
          </button>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-purple-600 flex items-center justify-center shadow-lg shadow-purple-900/20">
              <ImagePlus className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-lg font-bold leading-tight">Dream Drive</h2>
              <p className="text-slate-400 text-[10px] uppercase tracking-wider">Visualização 4K</p>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Controls */}
          <div className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-300">Descrição</label>
              <textarea 
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Descreve a tua viagem de sonho... ex: 'Uma autoestrada futurista na costa de Marte ao pôr do sol com um descapotável vermelho'"
                className="w-full h-32 bg-slate-800 border border-slate-700 rounded-xl p-4 text-sm focus:ring-2 focus:ring-purple-500 focus:outline-none resize-none transition-shadow"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-300">Resolução</label>
              <div className="grid grid-cols-3 gap-3">
                {(['1K', '2K', '4K'] as const).map((s) => (
                  <button
                    key={s}
                    onClick={() => setSize(s)}
                    className={`py-3 px-4 rounded-xl border flex flex-col items-center gap-1 transition-all active:scale-95 ${
                      size === s 
                        ? 'bg-purple-600/20 border-purple-500 text-white shadow-[0_0_15px_rgba(147,51,234,0.3)]' 
                        : 'bg-slate-800 border-slate-700 text-slate-400 hover:bg-slate-700'
                    }`}
                  >
                    <Monitor className="w-5 h-5" />
                    <span className="text-xs font-bold">{s}</span>
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={handleGenerate}
              disabled={loading || !prompt}
              className="w-full py-4 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl font-bold text-lg shadow-lg hover:shadow-purple-500/25 active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  A gerar...
                </>
              ) : (
                <>
                  <ImagePlus className="w-5 h-5" />
                  Gerar Visualização
                </>
              )}
            </button>
             {error && (
              <div className="p-3 bg-red-500/10 border border-red-500/50 rounded-lg flex items-center gap-2 text-sm text-red-200">
                <AlertCircle className="w-4 h-4 shrink-0" />
                {error}
              </div>
            )}
            <p className="text-xs text-slate-500 text-center">
              Requer uma chave API paga para geração de alta resolução.
            </p>
          </div>

          {/* Preview */}
          <div className="bg-black rounded-2xl border border-slate-700 overflow-hidden min-h-[300px] flex items-center justify-center relative group shadow-2xl">
            {generatedImage ? (
              <>
                <img src={generatedImage} alt="Generated" className="w-full h-full object-contain" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-6">
                  <a 
                    href={generatedImage} 
                    download="dream-drive.png"
                    className="bg-white text-black px-6 py-2 rounded-full font-bold flex items-center gap-2 hover:bg-slate-200 transition-transform active:scale-95"
                  >
                    <Download className="w-4 h-4" />
                    Descarregar {size}
                  </a>
                </div>
              </>
            ) : (
              <div className="text-center p-8">
                <div className="w-20 h-20 bg-slate-900 rounded-full flex items-center justify-center mx-auto mb-4 border border-slate-800 shadow-inner">
                  <ImagePlus className="w-8 h-8 text-slate-600" />
                </div>
                <p className="text-slate-500 font-medium">A tua imaginação aguarda</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};