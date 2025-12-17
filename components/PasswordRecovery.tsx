import React from 'react';
import { ArrowLeft, Lock, AtSign, Send, AlertCircle } from 'lucide-react';

interface PasswordRecoveryProps {
  onBack: () => void;
}

export const PasswordRecovery: React.FC<PasswordRecoveryProps> = ({ onBack }) => {
  return (
    <div className="h-full w-full bg-[#f5f6f8] dark:bg-[#101322] flex flex-col font-display antialiased overflow-x-hidden selection:bg-[#0d33f2] selection:text-white text-slate-900 dark:text-white">
        
        {/* Top Navigation */}
        <div className="flex items-center px-4 py-4 justify-between sticky top-0 z-10 bg-[#f5f6f8]/90 dark:bg-[#101322]/90 backdrop-blur-md">
            <button 
                onClick={onBack}
                className="text-slate-900 dark:text-white flex size-10 shrink-0 items-center justify-center rounded-lg hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
            >
                <ArrowLeft size={24} />
            </button>
            <div className="text-sm font-bold tracking-widest text-[#0d33f2] uppercase">Sys.Recovery_v2.0</div>
            <div className="size-10"></div> 
        </div>

        <div className="flex-1 flex flex-col max-w-md mx-auto w-full pb-8">
            
            {/* Header Image */}
            <div className="px-4 py-6">
                <div className="w-full flex flex-col items-center justify-center py-12 rounded-xl bg-[#1b1e2e]/50 border border-white/5 relative overflow-hidden group">
                    {/* Abstract Grid */}
                    <div 
                        className="absolute inset-0 opacity-20 bg-cover bg-center mix-blend-overlay" 
                        style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCU2Zx4obZ-ibFeH7zpSnfkZDQNeUEJ0eNHlLnYKVOd7tDXOfgC3lTy6d5cPFiRCA6Jj1YlNJYrysfqmcZeHjtqc9y9CVIM9j0hqa9pRlXukIqDePnLL2h82nu8vBjOT_Cya6BH0OMpDVox6u_v2piO9L27kbEZ2mhmj3R6a_nM3XxCdiHJR_lgXJQKfuPCpW0qR__THsIebjQOjKJGCwRvaXThn0cRqE8lRg34h6K9sLFf0W2Y60G3ctiMm6NzQxloMN6vah5yBgE")' }}
                    ></div>
                    {/* Glowing Icon */}
                    <div className="relative z-10 size-24 rounded-full bg-[#101322] flex items-center justify-center border border-[#0d33f2]/30 shadow-[0_0_10px_rgba(13,51,242,0.5),0_0_20px_rgba(13,51,242,0.3)]">
                        <Lock size={48} className="text-[#0d33f2]" />
                    </div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-[#0d33f2]/20 blur-[40px] rounded-full -z-0"></div>
                </div>
            </div>

            {/* Headline */}
            <div className="px-4 pt-2 text-center">
                <h2 className="tracking-tight text-[32px] font-bold leading-tight uppercase">Access Recovery</h2>
            </div>

            {/* Body */}
            <div className="px-6 py-3 text-center">
                <p className="text-slate-500 dark:text-slate-400 text-base font-normal leading-relaxed">
                    Enter your registered email frequency to receive a neural reset link. Secure transmission ensures data integrity.
                </p>
            </div>

            {/* Form */}
            <div className="flex flex-col gap-6 px-4 py-6">
                <label className="flex flex-col flex-1 group">
                    <p className="text-sm font-bold leading-normal pb-2 uppercase tracking-wide ml-1">Comms ID / Email</p>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-500 dark:text-slate-400">
                            <AtSign size={20} />
                        </div>
                        <input 
                            className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-slate-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-[#0d33f2] focus:border-[#0d33f2] border border-slate-300 dark:border-slate-700 bg-white dark:bg-[#1b1e2e] h-14 placeholder:text-slate-400 dark:placeholder:text-slate-600 pl-12 pr-4 text-base font-normal leading-normal transition-all" 
                            placeholder="operative@domain.com" 
                            type="email" 
                        />
                    </div>
                    <p className="hidden text-red-500 text-xs mt-2 ml-1 flex items-center gap-1">
                        <AlertCircle size={14} />
                        <span>Invalid frequency format.</span>
                    </p>
                </label>

                <button className="w-full h-14 bg-[#0d33f2] hover:bg-blue-600 active:bg-blue-700 text-white rounded-lg font-bold tracking-wider uppercase transition-all shadow-lg hover:shadow-[0_0_10px_rgba(13,51,242,0.5)] flex items-center justify-center gap-2 group">
                    <span>Initiate Recovery</span>
                    <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
            </div>

            {/* Spacer */}
            <div className="flex-1"></div>

            {/* Footer */}
            <div className="px-4 py-6 text-center">
                <p className="text-slate-500 dark:text-slate-400 text-sm">
                    Signal lost? 
                    <button className="text-[#0d33f2] hover:text-blue-400 font-medium hover:underline transition-colors decoration-2 underline-offset-4 ml-1">
                        Contact System Support
                    </button>
                </p>
            </div>

        </div>
    </div>
  );
};