import React, { useState } from 'react';
import { 
  X, ChevronDown, Radio, Image as ImageIcon, Camera, 
  MapPin, Package, AtSign, Send, Plus
} from 'lucide-react';

interface CreateSignalProps {
  onCancel: () => void;
}

export const CreateSignal: React.FC<CreateSignalProps> = ({ onCancel }) => {
  const [text, setText] = useState('');
  const [sending, setSending] = useState(false);

  const handleTransmit = () => {
    if (!text.trim()) return;
    
    setSending(true);
    // Simula envio para a rede
    setTimeout(() => {
        setSending(false);
        alert("Sinal transmitido para a rede segura.");
        setText('');
        onCancel();
    }, 1500);
  };

  return (
    <div className="h-full w-full bg-[#0b0a14] text-white flex flex-col relative overflow-hidden font-sans">
        
        {/* Background Gradients */}
        <div className="fixed top-20 right-[-100px] w-[300px] h-[300px] bg-[#330df2]/20 blur-[100px] rounded-full pointer-events-none z-0"></div>
        <div className="fixed bottom-20 left-[-100px] w-[200px] h-[200px] bg-purple-600/10 blur-[80px] rounded-full pointer-events-none z-0"></div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 z-0 pointer-events-none" style={{
            backgroundImage: 'linear-gradient(rgba(42, 39, 69, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(42, 39, 69, 0.1) 1px, transparent 1px)',
            backgroundSize: '20px 20px'
        }}></div>

        {/* Header */}
        <header className="flex items-center justify-between p-4 sticky top-0 z-50 bg-[#f6f5f8]/95 dark:bg-[#0b0a14]/95 backdrop-blur-md border-b border-[#2a2745]">
            <button 
                onClick={onCancel}
                className="text-slate-400 text-base font-medium active:text-[#330df2] transition-colors hover:text-white"
            >
                Cancel
            </button>
            <h2 className="text-white text-lg font-bold tracking-tight uppercase">New Signal</h2>
            <button className="text-[#330df2] font-bold text-base hover:text-[#5d44f5] transition-colors disabled:opacity-50">
                Drafts
            </button>
        </header>

        {/* Main Content */}
        <main className="flex-1 flex flex-col w-full max-w-3xl mx-auto px-4 pt-2 pb-24 z-10">
            {/* Channel Selector */}
            <div className="py-4">
                <div className="relative inline-block w-full">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-[#330df2]">
                        <Radio size={20} />
                    </div>
                    <select className="block w-full pl-10 pr-10 py-3 text-base border border-[#2a2745] bg-[#161425] rounded-lg text-gray-100 focus:ring-1 focus:ring-[#330df2] focus:border-[#330df2] appearance-none cursor-pointer shadow-sm outline-none">
                        <option>Global Frequency</option>
                        <option>Guild Network</option>
                        <option>Trade Route Alpha</option>
                        <option>Local Proximity</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-slate-400">
                        <ChevronDown size={20} />
                    </div>
                </div>
            </div>

            {/* Composer */}
            <div className="flex-1 flex flex-col gap-4">
                <div className="flex gap-3 h-full">
                    {/* Avatar */}
                    <div className="shrink-0 pt-2 hidden sm:block">
                        <div 
                            className="h-10 w-10 rounded-full bg-[#161425] border border-[#2a2745] bg-cover bg-center shadow-lg"
                            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAH0ZROb7h72inTgK4Jviaehg7nrl67RQGkixJ_d-yAufzfatlb38zpg9B-gC5E4MTd8pTzyozrJuIJwKPPMcYFHRWr8pDMk-hH8n_jGCjYdgFRkGHd0XVl5Kc3n5dJ3v94yfp2aXQ8ljs50db2aI_NN-xkxL6uExp362k6lxtsAzliZnty8R9bGxGCMdpFLLF_8SijMeYTlJWqbaLvetb1T81hhQvIQQ_LisZ5F2bfYHnWk5yQhLIcPEUE6Rne4xJdg2sRB7R1iKM")' }}
                        ></div>
                    </div>
                    
                    {/* Input */}
                    <div className="flex-1 relative h-full flex flex-col">
                        <textarea 
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                            className="w-full h-full min-h-[150px] bg-transparent border-0 p-2 text-lg text-white placeholder:text-slate-600 focus:ring-0 resize-none font-normal leading-relaxed outline-none"
                            placeholder="Transmit your status update to the network..."
                        ></textarea>
                    </div>
                </div>

                {/* Media Previews */}
                <div className="w-full overflow-x-auto pb-2 no-scrollbar">
                    <div className="flex gap-3 min-w-full">
                        {/* Img 1 */}
                        <div className="relative group shrink-0 w-24 h-24 sm:w-32 sm:h-32 rounded-lg overflow-hidden border border-[#2a2745]">
                            <div className="absolute top-1 right-1 z-10">
                                <button className="bg-black/60 hover:bg-red-500/80 text-white rounded-full p-1 transition-colors backdrop-blur-sm">
                                    <X size={14} />
                                </button>
                            </div>
                            <div 
                                className="w-full h-full bg-cover bg-center transition-transform hover:scale-110 duration-500"
                                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBGmHEJrtqoC2ocQdXrpAPZew6yO49I-zJmTnzHpNhWneNzy6scxRMh6J4J-YDCVlumP3lTho40LJLqvfi8_F1A0Vepfqh72LCvVe9aRvTXZo4VYtMoA44P2XlwCCFxxtUqf2zTL5UdmrJzuXEEalk3hhVMUYJoMcd1qfzd11szQJ6LAtfXlSrsV85OCEw9mN5ytgxRPsNSQ8vzbpeDhzMCrTKOR2AytuBmfdaVZDchBJI0JSuSRi4YkmwJnQzzPop_lPJHzRyWUNM")' }}
                            ></div>
                        </div>
                        
                        {/* Img 2 */}
                        <div className="relative group shrink-0 w-24 h-24 sm:w-32 sm:h-32 rounded-lg overflow-hidden border border-[#2a2745]">
                            <div className="absolute top-1 right-1 z-10">
                                <button className="bg-black/60 hover:bg-red-500/80 text-white rounded-full p-1 transition-colors backdrop-blur-sm">
                                    <X size={14} />
                                </button>
                            </div>
                            <div 
                                className="w-full h-full bg-cover bg-center transition-transform hover:scale-110 duration-500"
                                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDtb6sOVh-2eT8iCVToqamT5pJXIH58IiYLH3aS56EbxtlIhZS5qlkyl2QVzfjLJN6JtiWSgrPBrzzFvuD5HCMX7uuSDcguo2Kn_t_BV9UvVWqIie8XtgqQnaesia2FxguaN2BRXf-JJPpBNUQO-1iVQhu2mZmdGY0mid6QVUV9-EZRfNL3oYIMrPZNIRJI5_3MrOo62_8GbI2eEKDCdrWnCyU8rU4lBavfmxXHUxZ2wTyz9iLrO5ZqQGgPg60dW5R20wRMY-PXVDc")' }}
                            ></div>
                            <div className="absolute bottom-0 left-0 right-0 bg-black/60 backdrop-blur-sm px-2 py-1 flex items-center gap-1">
                                <MapPin size={12} className="text-[#330df2]" />
                                <span className="text-[10px] text-white truncate font-medium">Sector 7</span>
                            </div>
                        </div>

                        {/* Add Placeholder */}
                        <button className="shrink-0 w-24 h-24 sm:w-32 sm:h-32 rounded-lg border-2 border-dashed border-[#2a2745] hover:border-[#330df2] flex flex-col items-center justify-center gap-2 text-slate-400 hover:text-[#330df2] transition-colors bg-[#161425]/30">
                            <Camera size={24} />
                            <span className="text-xs font-medium">Add Media</span>
                        </button>
                    </div>
                </div>
            </div>
        </main>

        {/* Footer Toolbar */}
        <footer className="fixed bottom-0 w-full z-40 bg-[#0b0a14] border-t border-[#2a2745] p-4 pb-8">
            <div className="flex justify-between items-center mb-3 px-1">
                <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-green-500 shadow-[0_0_5px_rgba(34,197,94,0.5)]"></span>
                    <span className="text-xs text-slate-400 font-medium tracking-wide">ONLINE</span>
                </div>
                <span className="text-xs text-slate-400 font-mono tracking-widest">{text.length}/280</span>
            </div>

            <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-1 sm:gap-2">
                    <button className="p-2 text-[#330df2] hover:bg-[#330df2]/10 rounded-full transition-colors">
                        <ImageIcon size={20} />
                    </button>
                    <button className="p-2 text-[#330df2] hover:bg-[#330df2]/10 rounded-full transition-colors">
                        <Camera size={20} />
                    </button>
                    <button className="p-2 text-slate-500 hover:text-[#330df2] hover:bg-[#330df2]/10 rounded-full transition-colors">
                        <MapPin size={20} />
                    </button>
                    <button className="p-2 text-slate-500 hover:text-[#330df2] hover:bg-[#330df2]/10 rounded-full transition-colors">
                        <Package size={20} />
                    </button>
                    <div className="h-6 w-px bg-[#2a2745] mx-1"></div>
                    <button className="p-2 text-slate-500 hover:text-[#330df2] hover:bg-[#330df2]/10 rounded-full transition-colors">
                        <AtSign size={20} />
                    </button>
                </div>

                <button 
                    onClick={handleTransmit}
                    disabled={sending || !text.trim()}
                    className="flex-1 max-w-[160px] bg-[#330df2] hover:bg-[#5d44f5] text-white h-12 rounded-lg font-bold text-sm tracking-widest flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(51,13,242,0.4)] transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    <span>{sending ? 'SENDING...' : 'TRANSMIT'}</span>
                    {!sending && <Send size={18} />}
                </button>
            </div>
        </footer>

        <style>{`
            .no-scrollbar::-webkit-scrollbar { display: none; }
            .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        `}</style>
    </div>
  );
};