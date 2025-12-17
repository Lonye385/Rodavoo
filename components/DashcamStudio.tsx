import React, { useState, useRef } from 'react';
import { Upload, Sparkles, Image as ImageIcon, ArrowRight, X, Loader2, ArrowLeft } from 'lucide-react';
import { GeminiService } from '../services/gemini';

interface DashcamStudioProps {
  onBack: () => void;
}

export const DashcamStudio: React.FC<DashcamStudioProps> = ({ onBack }) => {
  const [image, setImage] = useState<string | null>(null);
  const [prompt, setPrompt] = useState('');
  const [processing, setProcessing] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
        setResult(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleEdit = async () => {
    if (!image || !prompt.trim() || processing) return;

    setProcessing(true);
    setResult(null);

    try {
      const editedImage = await GeminiService.editImage(image, prompt);
      setResult(editedImage);
    } catch (error) {
      console.error("Edit failed:", error);
      alert("Falha ao processar a imagem. Por favor tenta novamente.");
    } finally {
      setProcessing(false);
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
            <div className="w-10 h-10 rounded-xl bg-orange-500 flex items-center justify-center shadow-lg shadow-orange-900/20">
              <ImageIcon className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-lg font-bold leading-tight">Estúdio Dashcam</h2>
              <p className="text-slate-400 text-[10px] uppercase tracking-wider">IA Powered</p>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="space-y-6">
          {/* Upload Area */}
          {!image ? (
            <div 
              onClick={() => fileInputRef.current?.click()}
              className="border-2 border-dashed border-slate-700 rounded-2xl h-64 flex flex-col items-center justify-center cursor-pointer hover:bg-slate-800/50 hover:border-slate-500 transition-all group active:scale-[0.99]"
            >
              <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg">
                <Upload className="w-8 h-8 text-slate-400 group-hover:text-white" />
              </div>
              <p className="text-slate-300 font-medium">Carregar Foto da Estrada</p>
              <p className="text-slate-500 text-xs mt-1">Suporta JPG, PNG</p>
            </div>
          ) : (
            <div className="relative rounded-2xl overflow-hidden border border-slate-700 bg-black aspect-video flex items-center justify-center shadow-2xl">
              <img src={result || image} alt="Preview" className="max-w-full max-h-full object-contain" />
              {processing && (
                <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center backdrop-blur-sm">
                  <Loader2 className="w-12 h-12 text-orange-500 animate-spin mb-3" />
                  <p className="text-white font-medium animate-pulse">O Gemini está a processar...</p>
                </div>
              )}
              <button 
                onClick={() => { setImage(null); setResult(null); setPrompt(''); }}
                className="absolute top-4 right-4 bg-black/50 hover:bg-red-600 p-2 rounded-full backdrop-blur transition-all active:scale-90"
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </div>
          )}
          <input 
            type="file" 
            ref={fileInputRef} 
            onChange={handleFileChange} 
            accept="image/*" 
            className="hidden" 
          />

          {/* Controls */}
          <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700">
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Instrução IA
            </label>
            <div className="flex gap-2">
              <input 
                type="text" 
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder='Ex: "Remove o nevoeiro", "Realça os sinais", "Torna de noite"'
                className="flex-1 bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-orange-500 focus:outline-none transition-shadow"
              />
              <button 
                onClick={handleEdit}
                disabled={!image || !prompt || processing}
                className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-400 hover:to-red-400 disabled:opacity-50 disabled:grayscale text-white px-6 rounded-lg font-bold flex items-center gap-2 transition-all shadow-lg shadow-orange-500/20 active:scale-95"
              >
                <Sparkles className="w-4 h-4" />
                <span className="hidden md:inline">Magia</span>
              </button>
            </div>
            
            <div className="mt-4 flex gap-2 flex-wrap">
              {['Remover reflexo', 'Melhorar clareza', 'Identificar perigos', 'Estilo Cyberpunk'].map(suggestion => (
                <button 
                  key={suggestion}
                  onClick={() => setPrompt(suggestion)}
                  className="px-3 py-1.5 bg-slate-700/50 hover:bg-slate-700 rounded-full text-xs text-slate-300 border border-slate-600 transition-all active:scale-95 hover:border-orange-400"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};