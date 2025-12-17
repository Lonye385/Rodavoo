import React, { useState } from 'react';
import { ArrowLeft, Fuel, Wrench, Zap, Package, Shield, Star, Coins, Info } from 'lucide-react';

interface GamificationRouletteProps {
  onBack: () => void;
}

export const GamificationRoulette: React.FC<GamificationRouletteProps> = ({ onBack }) => {
  const [isSpinning, setIsSpinning] = useState(false);

  const handleSpin = () => {
    if (isSpinning) return;
    setIsSpinning(true);
    setTimeout(() => setIsSpinning(false), 3000);
  };

  return (
    <div className="bg-[#050b14] font-display text-white overflow-hidden h-screen flex flex-col relative w-full selection:bg-[#0d59f2]/30">
        <style>{`
            .wheel-segments {
                background: conic-gradient(
                    #1a2332 0deg 45deg,
                    #101622 45deg 90deg,
                    #1a2332 90deg 135deg,
                    #101622 135deg 180deg,
                    #1a2332 180deg 225deg,
                    #101622 225deg 270deg,
                    #1a2332 270deg 315deg,
                    #101622 315deg 360deg
                );
            }
            .clip-notch {
                clip-path: polygon(0% 0%, 100% 0%, 50% 100%);
            }
            @keyframes laserH {
                0% { transform: translateX(-100%) scaleX(0.2); opacity: 0; }
                50% { opacity: 1; transform: translateX(0) scaleX(1.5); }
                100% { transform: translateX(100%) scaleX(0.2); opacity: 0; }
            }
            @keyframes laserV {
                0% { transform: translateY(-100%) scaleY(0.2); opacity: 0; }
                50% { opacity: 1; transform: translateY(0) scaleY(1.5); }
                100% { transform: translateY(100%) scaleY(0.2); opacity: 0; }
            }
            @keyframes spin-slow {
                from { transform: rotate(0deg); }
                to { transform: rotate(360deg); }
            }
            @keyframes spin-fast {
                from { transform: rotate(0deg); }
                to { transform: rotate(360deg); }
            }
            @keyframes pulse-glow {
                0%, 100% { opacity: 1; box-shadow: 0 0 10px rgba(13, 89, 242, 0.3); }
                50% { opacity: .8; box-shadow: 0 0 25px rgba(13, 89, 242, 0.6); }
            }
            @keyframes float {
                0%, 100% { transform: translateY(0); }
                50% { transform: translateY(-5px); }
            }
            @keyframes shimmer {
                0% { transform: translateX(-100%); }
                100% { transform: translateX(100%); }
            }
            .animate-spin-slow { animation: spin-slow 20s linear infinite; }
            .animate-spin-fast { animation: spin-fast 0.5s linear infinite; }
            .animate-pulse-glow { animation: pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
            .animate-float { animation: float 3s ease-in-out infinite; }
            .animate-shimmer { animation: shimmer 2s linear infinite; }
            .animate-laser-h { animation: laserH 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards; }
            .animate-laser-v { animation: laserV 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards; }
        `}</style>

        {/* Ambient Effects */}
        <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center overflow-hidden">
            <div className="absolute top-1/3 left-0 w-full h-[2px] bg-[#00f0ff] shadow-[0_0_20px_rgba(0,240,255,1)] blur-[1px] animate-laser-h z-30"></div>
            <div className="absolute bottom-1/3 left-0 w-full h-[3px] bg-[#0d59f2] shadow-[0_0_25px_rgba(13,89,242,1)] blur-[2px] animate-laser-h z-30" style={{ animationDuration: '0.6s', animationDelay: '0.1s', animationDirection: 'reverse' }}></div>
            <div className="absolute top-0 left-1/2 h-full w-[1px] bg-white/50 blur-[1px] animate-laser-v z-20"></div>
        </div>
        
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_50%,rgba(13,89,242,0.1)_0%,transparent_50%),linear-gradient(0deg,transparent_24%,rgba(255,255,255,.03)_25%,rgba(255,255,255,.03)_26%,transparent_27%,transparent_74%,rgba(255,255,255,.03)_75%,rgba(255,255,255,.03)_76%,transparent_77%,transparent),linear-gradient(90deg,transparent_24%,rgba(255,255,255,.03)_25%,rgba(255,255,255,.03)_26%,transparent_27%,transparent_74%,rgba(255,255,255,.03)_75%,rgba(255,255,255,.03)_76%,transparent_77%,transparent)] bg-[length:50px_50px] opacity-20"></div>

        {/* Header */}
        <header className="relative z-20 flex items-center justify-between p-4 bg-[#050b14]/80 backdrop-blur-md border-b border-white/5">
            <button onClick={onBack} className="flex size-10 items-center justify-center rounded-lg border border-white/10 hover:bg-white/5 active:bg-white/10 transition-all duration-200 text-gray-400 hover:text-white active:scale-90 active:shadow-[0_0_15px_rgba(255,255,255,0.1)] group">
                <ArrowLeft size={20} className="transition-transform group-active:-translate-x-0.5" />
            </button>
            <div className="flex flex-col items-center">
                <h1 className="text-white text-lg font-bold tracking-wider uppercase drop-shadow-[0_0_10px_rgba(13,89,242,0.5)]">
                    Roleta <span className="text-[#0d59f2]">Neon</span>
                </h1>
                <div className="flex items-center gap-1">
                    <div className="size-1.5 rounded-full bg-green-500 animate-[pulse_2s_ease-in-out_infinite] shadow-[0_0_8px_rgba(34,197,94,0.6)]"></div>
                    <span className="text-[10px] text-green-500/80 font-mono tracking-widest uppercase">Online</span>
                </div>
            </div>
            <button className="flex size-10 items-center justify-center rounded-lg border border-white/10 hover:bg-white/5 active:bg-white/10 transition-all duration-200 text-[#0d59f2] hover:text-[#0d59f2]/80 active:scale-90">
                <Info size={20} />
            </button>
        </header>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto no-scrollbar relative z-10">
            <div className="flex flex-col items-center justify-center py-8 relative perspective-[1000px]">
                {/* Glow behind wheel */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#0d59f2]/20 blur-[80px] rounded-full pointer-events-none animate-pulse-glow"></div>
                <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-[#00f0ff]/40 rounded-full animate-float"></div>
                <div className="absolute bottom-1/4 right-1/4 w-1.5 h-1.5 bg-[#0d59f2]/30 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>

                {/* The Wheel */}
                <div className="relative size-72 md:size-80 rounded-full p-2 bg-[#151b26] border border-[#1a2332] shadow-[0_0_30px_rgba(0,0,0,0.6)] ring-1 ring-white/5 group hover:shadow-[0_0_40px_rgba(13,89,242,0.15)] transition-shadow duration-500">
                    {/* Pointer */}
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-30 drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)] pointer-events-none">
                        <div className="w-10 h-12 bg-gradient-to-b from-[#0d59f2] to-blue-600 clip-notch flex items-start justify-center shadow-lg relative overflow-hidden pt-1">
                            <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                            <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-white/80 mt-1"></div>
                        </div>
                        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 h-1 bg-[#00f0ff]/50 blur-md rounded-full"></div>
                    </div>

                    <div className={`w-full h-full rounded-full overflow-hidden relative border-4 border-[#0a0e17] shadow-inner ${isSpinning ? 'animate-spin-fast' : 'animate-spin-slow'}`}>
                        <div className="absolute inset-0 wheel-segments opacity-80"></div>
                        <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'radial-gradient(circle at center, transparent 30%, rgba(0,0,0,0.8) 100%)' }}></div>
                        <div className="absolute inset-0" style={{ background: 'repeating-conic-gradient(transparent 0deg 44deg, rgba(13, 89, 242, 0.3) 44deg 45deg)' }}></div>
                        
                        {/* Icons positioned radially */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center text-white/70" style={{ transform: 'translate(-50%, -50%) rotate(0deg) translateY(-100px) rotate(0deg)' }}>
                            <Fuel size={24} />
                        </div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center text-yellow-500" style={{ transform: 'translate(-50%, -50%) rotate(45deg) translateY(-100px) rotate(-45deg)' }}>
                            <Star size={24} className="drop-shadow-[0_0_5px_rgba(234,179,8,0.8)] animate-pulse" />
                        </div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center text-white/70" style={{ transform: 'translate(-50%, -50%) rotate(90deg) translateY(-100px) rotate(-90deg)' }}>
                            <Wrench size={24} />
                        </div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center text-purple-400" style={{ transform: 'translate(-50%, -50%) rotate(135deg) translateY(-100px) rotate(-135deg)' }}>
                            <Zap size={24} className="drop-shadow-[0_0_5px_rgba(192,132,252,0.8)]" />
                        </div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center text-white/70" style={{ transform: 'translate(-50%, -50%) rotate(180deg) translateY(-100px) rotate(-180deg)' }}>
                            <Coins size={24} />
                        </div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center text-white/70" style={{ transform: 'translate(-50%, -50%) rotate(225deg) translateY(-100px) rotate(-225deg)' }}>
                            <Package size={24} />
                        </div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center text-blue-400" style={{ transform: 'translate(-50%, -50%) rotate(270deg) translateY(-100px) rotate(-270deg)' }}>
                            <Coins size={24} className="drop-shadow-[0_0_5px_rgba(96,165,250,0.8)]" />
                        </div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center text-white/70" style={{ transform: 'translate(-50%, -50%) rotate(315deg) translateY(-100px) rotate(-315deg)' }}>
                            <Shield size={24} />
                        </div>
                    </div>

                    {/* Center Hub */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full bg-[#151b26] border-4 border-[#0d59f2]/30 flex items-center justify-center shadow-[0_0_20px_rgba(0,0,0,0.8)] z-20">
                        <div className="absolute inset-0 rounded-full border border-white/10 animate-[spin_5s_linear_infinite_reverse] opacity-50 border-dashed"></div>
                        <div className="size-14 rounded-full bg-[#0a0e17] flex flex-col items-center justify-center shadow-inner relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-[#0d59f2]/10 to-transparent"></div>
                            <span className="text-[8px] text-gray-500 uppercase font-bold tracking-widest mb-0.5 relative z-10">RodaVO</span>
                            <div className="w-8 h-0.5 bg-[#0d59f2]/50 rounded-full shadow-[0_0_8px_rgba(13,89,242,0.8)]"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Countdown */}
            <div className="px-6 mb-8">
                <div className="bg-[#1a2332]/40 backdrop-blur-sm rounded-xl p-0.5 border border-white/5 shadow-lg">
                    <div className="bg-[#0b0f17]/80 rounded-[10px] p-4 flex flex-col items-center gap-3 relative overflow-hidden">
                        <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer pointer-events-none"></div>
                        <div className="flex items-center gap-2 relative z-10">
                            <span className="text-[#0d59f2] font-bold text-sm">COOLDOWN RESET</span>
                        </div>
                        <div className="flex items-end gap-3 font-mono relative z-10">
                            <div className="flex flex-col items-center bg-[#151b26] rounded border border-white/5 p-2 min-w-[60px] shadow-inner relative overflow-hidden group">
                                <div className="absolute inset-x-0 bottom-0 h-0.5 bg-[#0d59f2]/30 group-hover:bg-[#0d59f2] transition-colors"></div>
                                <span className="text-2xl font-bold text-white leading-none tracking-wider">03</span>
                                <span className="text-[9px] text-[#0d59f2]/70 uppercase mt-1 font-sans font-bold">Hrs</span>
                            </div>
                            <span className="text-2xl text-[#0d59f2]/40 mb-3 animate-[pulse_1s_ease-in-out_infinite]">:</span>
                            <div className="flex flex-col items-center bg-[#151b26] rounded border border-white/5 p-2 min-w-[60px] shadow-inner relative overflow-hidden group">
                                <div className="absolute inset-x-0 bottom-0 h-0.5 bg-[#0d59f2]/30 group-hover:bg-[#0d59f2] transition-colors"></div>
                                <span className="text-2xl font-bold text-white leading-none tracking-wider">45</span>
                                <span className="text-[9px] text-[#0d59f2]/70 uppercase mt-1 font-sans font-bold">Min</span>
                            </div>
                            <span className="text-2xl text-[#0d59f2]/40 mb-3 animate-[pulse_1s_ease-in-out_infinite]">:</span>
                            <div className="flex flex-col items-center bg-[#151b26] rounded border border-white/5 p-2 min-w-[60px] shadow-inner relative overflow-hidden group ring-1 ring-[#0d59f2]/20">
                                <div className="absolute inset-x-0 bottom-0 h-0.5 bg-[#0d59f2] shadow-[0_0_8px_rgba(13,89,242,0.8)]"></div>
                                <span className="text-2xl font-bold text-white leading-none tracking-wider">12</span>
                                <span className="text-[9px] text-[#0d59f2]/70 uppercase mt-1 font-sans font-bold">Seg</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Spin Button */}
            <div className="px-6 mb-10">
                <button 
                    onClick={handleSpin}
                    className="relative w-full group overflow-hidden rounded-xl transition-transform duration-100 active:scale-[0.97]"
                >
                    <div className="absolute -inset-1 bg-gradient-to-r from-[#0d59f2] to-[#00f0ff] opacity-30 blur-lg group-hover:opacity-60 transition duration-500 rounded-xl group-active:opacity-100 group-active:blur-xl"></div>
                    <div className="relative bg-[#0d59f2] h-14 rounded-xl flex items-center justify-between px-6 transition-all duration-300 border border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.2)] group-hover:bg-blue-600 group-hover:shadow-[0_0_20px_rgba(13,89,242,0.4)] group-active:bg-blue-700 group-active:border-[#00f0ff]/50 overflow-hidden">
                        <div className="absolute inset-0 -translate-x-full group-hover:animate-shimmer bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 z-10"></div>
                        <div className="flex items-center gap-3 relative z-20">
                            <span className="font-bold text-lg uppercase tracking-wider text-white drop-shadow-md group-active:text-white/90">Girar Agora</span>
                        </div>
                        <div className="bg-black/20 px-3 py-1 rounded text-xs font-mono text-white/90 border border-white/10 flex items-center gap-1.5 relative z-20 group-hover:bg-black/30 transition-colors">
                            <span className="text-yellow-400 text-sm drop-shadow-[0_0_5px_rgba(250,204,21,0.6)]">🎫</span>
                            <span>1 TICKET</span>
                        </div>
                    </div>
                </button>
                <p className="text-center text-[10px] text-gray-500 mt-3 flex items-center justify-center gap-1 opacity-60">
                    <Info size={10} />
                    Ao girar, você concorda com os termos de uso.
                </p>
            </div>

            {/* Rewards */}
            <div className="flex flex-col gap-4 pb-8">
                <div className="flex items-center justify-between px-6">
                    <h3 className="text-white text-base font-bold flex items-center gap-2">
                        <span className="w-1 h-4 bg-[#0d59f2] rounded-full shadow-[0_0_8px_rgba(13,89,242,0.8)]"></span>
                        Recompensas
                    </h3>
                    <button className="text-xs font-bold text-[#0d59f2] hover:text-white transition-colors uppercase tracking-wider flex items-center gap-1">
                        Ver Tabela
                    </button>
                </div>
                <div className="flex overflow-x-auto pb-6 px-6 gap-4 no-scrollbar snap-x snap-mandatory">
                    <div className="snap-center shrink-0 w-36 bg-[#101622] rounded-xl border border-yellow-500/20 p-4 flex flex-col items-center relative group hover:border-yellow-500/50 hover:shadow-[0_0_15px_rgba(234,179,8,0.1)] transition-all duration-300 overflow-hidden cursor-pointer">
                        <div className="relative w-14 h-14 rounded-full bg-[#151b26] border border-yellow-500/30 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_15px_rgba(234,179,8,0.2)]">
                            <Coins size={24} className="text-yellow-500" />
                        </div>
                        <div className="text-center w-full relative z-10">
                            <p className="text-white text-sm font-bold truncate group-hover:text-yellow-400 transition-colors">1000 Créditos</p>
                            <p className="text-yellow-500 text-[10px] font-bold uppercase tracking-wider mt-1">Lendário</p>
                        </div>
                    </div>
                    <div className="snap-center shrink-0 w-36 bg-[#101622] rounded-xl border border-[#0d59f2]/20 p-4 flex flex-col items-center relative group hover:border-[#0d59f2]/50 hover:shadow-[0_0_15px_rgba(13,89,242,0.1)] transition-all duration-300 overflow-hidden cursor-pointer">
                        <div className="relative w-14 h-14 rounded-full bg-[#151b26] border border-[#0d59f2]/30 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_15px_rgba(13,89,242,0.2)]">
                            <Fuel size={24} className="text-[#0d59f2]" />
                        </div>
                        <div className="text-center w-full relative z-10">
                            <p className="text-white text-sm font-bold truncate group-hover:text-[#0d59f2] transition-colors">Tanque Cheio</p>
                            <p className="text-[#0d59f2] text-[10px] font-bold uppercase tracking-wider mt-1">Raro</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>

        <footer className="bg-[#1a2332]/80 backdrop-blur-md border-t border-white/5 p-4 pb-6 z-20">
            <div className="flex items-center justify-between gap-4">
                <div className="flex flex-1 items-center gap-3 bg-[#101622] rounded-lg p-2 pr-4 border border-white/5 hover:border-white/10 transition-all duration-300 cursor-pointer">
                    <div className="size-9 rounded bg-green-500/10 flex items-center justify-center text-green-500 shrink-0">
                        <span className="material-symbols-outlined text-lg">history</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-[10px] text-gray-500 uppercase font-bold">Último</span>
                        <span className="text-xs text-white font-bold">250 CR</span>
                    </div>
                </div>
                <div className="flex flex-1 items-center gap-3 bg-[#101622] rounded-lg p-2 pr-4 border border-white/5 justify-end hover:border-white/10 transition-all duration-300 cursor-pointer">
                    <div className="flex flex-col items-end">
                        <span className="text-[10px] text-gray-500 uppercase font-bold">Sorte Diária</span>
                        <span className="text-xs text-white font-bold">3/5</span>
                    </div>
                    <div className="size-9 rounded bg-[#0d59f2]/10 flex items-center justify-center text-[#0d59f2] shrink-0">
                        <span className="material-symbols-outlined text-lg">casino</span>
                    </div>
                </div>
            </div>
        </footer>
    </div>
  );
};