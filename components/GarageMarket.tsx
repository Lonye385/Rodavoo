import React from 'react';
import { 
  ArrowLeft, Star, Navigation, CheckCircle, Wrench, 
  Plus, Warehouse, Store, ArrowLeftRight 
} from 'lucide-react';

interface GarageMarketProps {
  onBack: () => void;
}

export const GarageMarket: React.FC<GarageMarketProps> = ({ onBack }) => {
  return (
    <div className="bg-[#f5f7f8] dark:bg-[#080c10] font-display text-white h-full w-full relative overflow-hidden flex flex-col">
       {/* Styles for neon effects that might not be in standard tailwind config */}
       <style>{`
        .neon-text { text-shadow: 0 0 10px rgba(56, 185, 250, 0.5); }
        .neon-border { box-shadow: 0 0 8px rgba(56, 185, 250, 0.3), inset 0 0 8px rgba(56, 185, 250, 0.1); }
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      {/* Background Blobs */}
      <div className="absolute top-[-20%] right-[-20%] w-[80%] h-[50%] bg-[#38b9fa]/10 rounded-full blur-[100px] pointer-events-none z-0"></div>
      <div className="absolute bottom-[-10%] left-[-20%] w-[60%] h-[40%] bg-purple-600/10 rounded-full blur-[80px] pointer-events-none z-0"></div>

      {/* Header */}
      <div className="flex items-center justify-between p-5 pb-2 z-10 bg-gradient-to-b from-[#080c10]/90 to-transparent backdrop-blur-sm shrink-0">
        <button 
            onClick={onBack}
            className="text-white/80 hover:text-[#38b9fa] transition-colors cursor-pointer p-2 -ml-2 rounded-full hover:bg-white/5"
        >
            <ArrowLeft size={28} />
        </button>
        <h2 className="text-white text-xl font-bold tracking-widest uppercase flex-1 text-center neon-text">Rodavo Garage</h2>
        <div className="flex items-center gap-1 bg-[#1a242c]/50 border border-white/10 rounded-full px-3 py-1 backdrop-blur-md">
            <Star size={16} className="text-yellow-400 fill-yellow-400" />
            <span className="text-xs font-bold text-yellow-400 tracking-wider">VIP</span>
        </div>
      </div>

      {/* Main Scrollable Content */}
      <div className="flex-1 overflow-y-auto hide-scrollbar z-10 pb-24 relative">
        
        {/* Hero Section */}
        <div className="relative w-full h-[320px] flex flex-col justify-end items-center">
            <div 
                className="absolute inset-0 w-full h-full bg-cover bg-center opacity-80" 
                style={{ 
                    backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCKqPom6V4MkaDRxQGkVlufXDg_Wp3bjQDJ0zc6__GVW2abpezS_zgQL1YqzKYy7gUco6ORxWX8twQtmAI7-CbxjrZuy-4wPsvNpU08-OfRsWXbyd0KBBnWwCRLX4smtuUEhRP3WTfU1zYqYcG6rpteGwnko52DR4gZU4CsB_pKt-HWiOGUWC7ETmxMNvSzJJPzZKvogO6w8YUvo7hsVAy-H28fi-_xUgTQgLqFfYUdFor2FxI8MrzGB0sGh84pu0CIPYpU5acj2Vk")',
                    maskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)',
                    WebkitMaskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)'
                }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#080c10] via-[#080c10]/60 to-transparent"></div>
            
            <div className="relative z-10 w-full px-6 pb-6 text-center">
                <div className="inline-flex items-center justify-center gap-2 mb-2">
                    <span className="w-2 h-2 rounded-full bg-[#38b9fa] animate-pulse"></span>
                    <p className="text-[#38b9fa] text-xs font-bold tracking-[0.2em] uppercase">Status: Online</p>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-white uppercase tracking-tighter leading-none mb-1 neon-text">
                    Sector 7<br/>
                    <span className="text-white/50 text-2xl font-normal">Warehouse Alpha</span>
                </h1>
                <div className="mt-4 flex justify-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] text-gray-400 uppercase tracking-widest">Zone B</span>
                    <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] text-gray-400 uppercase tracking-widest">Capacity: High</span>
                </div>
            </div>
        </div>

        {/* Divider */}
        <div className="px-6 mb-6">
            <div className="flex items-center gap-4">
                <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-[#38b9fa]/50"></div>
                <p className="text-[#38b9fa] font-bold tracking-[0.15em] text-xs md:text-sm uppercase neon-text whitespace-nowrap">Active Garage: Sector 7</p>
                <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-[#38b9fa]/50"></div>
            </div>
        </div>

        {/* Vehicles Horizontal List */}
        <div className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar px-6 pb-8 gap-4">
            
            {/* Card 1: Truck */}
            <div className="snap-center shrink-0 w-[280px] flex flex-col gap-0 rounded-2xl bg-[#1a242c] border border-white/5 shadow-lg group hover:border-[#38b9fa]/50 transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#38b9fa] to-transparent opacity-50 group-hover:opacity-100 transition-opacity"></div>
                <div className="w-full h-40 bg-[#0f1519] relative flex items-center justify-center p-4">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#38b9fa]/10 to-transparent opacity-50"></div>
                    <div 
                        className="w-full h-full bg-contain bg-no-repeat bg-center z-10 transition-transform duration-500 group-hover:scale-110" 
                        style={{ 
                            backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBTmld9ivzhSaSlpBEtjCGVixjZD11cQT7h_un2EwvRd7YNC_9zbT0AbhQSbjOrU6oPmmm1glZxnCSZ1gncnz50yEWciWR2Qe6HvVAwl3yrjgJexexDzd8WZYBXKf5NgcpZa7crjQy29qW-V_a1LaggixQWH9SP0nY_8SOP2XHexUY2boqJAcOm4wzGejoG3VCAkXqG3xObQ4OrX48oAbLtoB_RTiiadEhyDeDLb_hDVPhkdq-GmIExP_MSB3l49xSubGqWYo9vzX0")',
                            maskImage: 'radial-gradient(black 70%, transparent 100%)',
                            WebkitMaskImage: 'radial-gradient(black 70%, transparent 100%)'
                        }}
                    ></div>
                    <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md px-2 py-1 rounded text-[10px] font-bold text-green-400 border border-green-500/30">
                        READY
                    </div>
                </div>
                <div className="p-5 flex flex-col gap-4">
                    <div className="flex justify-between items-start">
                        <div>
                            <h3 className="text-white text-lg font-bold leading-tight uppercase group-hover:text-[#38b9fa] transition-colors">Cyber-Hauler X1</h3>
                            <p className="text-gray-400 text-xs mt-1">Class: Heavy Logistics</p>
                        </div>
                        <div className="flex items-center gap-1 bg-yellow-400/10 border border-yellow-400/30 rounded px-1.5 py-0.5">
                            <Star size={10} className="text-yellow-400 fill-yellow-400" />
                            <span className="text-[8px] font-bold text-yellow-400 tracking-wider">VIP</span>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                        <div className="flex flex-col gap-1">
                            <span className="text-[10px] text-gray-500 uppercase font-bold">Fuel</span>
                            <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                                <div className="bg-[#38b9fa] h-full w-[85%] neon-border"></div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-1">
                            <span className="text-[10px] text-gray-500 uppercase font-bold">Health</span>
                            <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                                <div className="bg-green-500 h-full w-[100%]"></div>
                            </div>
                        </div>
                    </div>
                    <button className="w-full h-11 mt-2 bg-[#38b9fa]/10 hover:bg-[#38b9fa] active:bg-[#38b9fa] text-[#38b9fa] hover:text-[#080c10] active:text-[#080c10] border border-[#38b9fa]/50 hover:border-[#38b9fa] active:shadow-[0_0_25px_rgba(56,185,250,0.8)] rounded-lg text-xs font-bold tracking-widest uppercase transition-all duration-200 flex items-center justify-center gap-2 group/btn shadow-[0_0_10px_rgba(56,185,250,0.1)] hover:shadow-[0_0_20px_rgba(56,185,250,0.4)]">
                        <span>Select For Map</span>
                        <Navigation size={18} className="group-hover/btn:scale-110 transition-transform" />
                    </button>
                </div>
            </div>

            {/* Card 2: Van */}
            <div className="snap-center shrink-0 w-[280px] flex flex-col gap-0 rounded-2xl bg-[#1a242c] border border-[#38b9fa]/60 shadow-[0_0_20px_rgba(56,185,250,0.15)] relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#38b9fa] to-transparent"></div>
                <div className="w-full h-40 bg-[#0f1519] relative flex items-center justify-center p-4">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#38b9fa]/20 to-transparent opacity-80"></div>
                    <div 
                        className="w-full h-full bg-contain bg-no-repeat bg-center z-10 scale-105" 
                        style={{ 
                            backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAhQCWj0BGVkjiYzwRnXZiM9ta1-f7j46O8ey7aUwSwiq8w1UiLcE4xZIpTMThHC_ix8TWGHx1jbo6tJqSBPsDGsoHR90U7rNkqhh7qS3THTb1EFoiAp3rd1DwQbNsuTSiGMnqOa6f1Lz3kC2V73jVkw-HC60wusNmVohKRmyVSlYNr4tRHFVFbSEUeevRviEBElPJDmVMytRyhvJMq6wg52IB-vYmQVwyN4lcXifxAbF8RJQ7pKh43C4BelbcmjPbzQ2Gs-UcNKRw")',
                            maskImage: 'radial-gradient(black 70%, transparent 100%)',
                            WebkitMaskImage: 'radial-gradient(black 70%, transparent 100%)'
                        }}
                    ></div>
                    <div className="absolute top-3 right-3 bg-[#38b9fa]/20 backdrop-blur-md px-2 py-1 rounded text-[10px] font-bold text-[#38b9fa] border border-[#38b9fa]/30">
                        SELECTED
                    </div>
                </div>
                <div className="p-5 flex flex-col gap-4">
                    <div>
                        <h3 className="text-[#38b9fa] text-lg font-bold leading-tight uppercase neon-text">Interceptor V9</h3>
                        <p className="text-gray-400 text-xs mt-1">Class: Fast Courier</p>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                        <div className="flex flex-col gap-1">
                            <span className="text-[10px] text-gray-500 uppercase font-bold">Fuel</span>
                            <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                                <div className="bg-yellow-500 h-full w-[45%]"></div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-1">
                            <span className="text-[10px] text-gray-500 uppercase font-bold">Health</span>
                            <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                                <div className="bg-green-500 h-full w-[92%]"></div>
                            </div>
                        </div>
                    </div>
                    <button className="w-full h-10 mt-2 bg-[#38b9fa] text-black font-bold border border-[#38b9fa] rounded-lg text-sm tracking-wider uppercase shadow-[0_0_15px_rgba(56,185,250,0.4)] flex items-center justify-center gap-2">
                        <span>Deployed</span>
                        <CheckCircle size={18} />
                    </button>
                </div>
            </div>

            {/* Card 3: Offroad */}
            <div className="snap-center shrink-0 w-[280px] flex flex-col gap-0 rounded-2xl bg-[#1a242c] border border-white/5 shadow-lg group hover:border-[#38b9fa]/50 transition-all duration-300 relative overflow-hidden">
                <div className="w-full h-40 bg-[#0f1519] relative flex items-center justify-center p-4">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-500/10 to-transparent opacity-50"></div>
                    <div 
                        className="w-full h-full bg-contain bg-no-repeat bg-center z-10 opacity-70 grayscale group-hover:grayscale-0 transition-all" 
                        style={{ 
                            backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB3awdP_YVtbPGMy3tbCCA4FhSJc5XENzqei-8cxSYG9n-I0JJGsTgxGMw77Wu0amxednvslD40T2vetNFMie4zQP0VCQClIaqErXO1GNnCcAn42TT4Vx4KAeVZWpt2FtO6xlKyYwXX4RA5lG8PmSR1fuIlbnvmCd_nPeHllEWPU1qKT3stUBX6hK5jDeTgxZ7ClvCiqdhB2strW7gcVva9ZHnYkdm_du4Gy8Fn2CQAxn_3cOu0VP3yZrUAH9bcTnQREQySva5bzBs")',
                            maskImage: 'radial-gradient(black 70%, transparent 100%)',
                            WebkitMaskImage: 'radial-gradient(black 70%, transparent 100%)'
                        }}
                    ></div>
                    <div className="absolute top-3 right-3 bg-red-500/20 backdrop-blur-md px-2 py-1 rounded text-[10px] font-bold text-red-400 border border-red-500/30">
                        REPAIRING
                    </div>
                </div>
                <div className="p-5 flex flex-col gap-4">
                    <div>
                        <h3 className="text-white text-lg font-bold leading-tight uppercase group-hover:text-[#38b9fa] transition-colors">Heavy Lifter Mk.IV</h3>
                        <p className="text-gray-400 text-xs mt-1">Class: Industrial</p>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                        <div className="flex flex-col gap-1">
                            <span className="text-[10px] text-gray-500 uppercase font-bold">Fuel</span>
                            <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                                <div className="bg-[#38b9fa] h-full w-[10%]"></div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-1">
                            <span className="text-[10px] text-gray-500 uppercase font-bold">Health</span>
                            <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                                <div className="bg-red-500 h-full w-[35%]"></div>
                            </div>
                        </div>
                    </div>
                    <button className="w-full h-10 mt-2 bg-white/5 text-gray-500 cursor-not-allowed border border-white/5 rounded-lg text-sm font-bold tracking-wider uppercase flex items-center justify-center gap-2" disabled>
                        <span>Unavailable</span>
                        <Wrench size={18} />
                    </button>
                </div>
            </div>

            {/* Buy Slot Card */}
            <div className="snap-center shrink-0 w-[100px] flex flex-col justify-center items-center gap-2 rounded-2xl bg-white/5 border border-dashed border-white/10 hover:border-[#38b9fa]/50 hover:bg-[#38b9fa]/5 transition-all cursor-pointer">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-[#38b9fa]">
                    <Plus size={24} />
                </div>
                <span className="text-xs text-gray-400 font-bold uppercase">Buy Slot</span>
            </div>
        </div>

        {/* Garage Info */}
        <div className="px-6 pb-6">
            <div className="bg-[#1a242c] rounded-xl p-4 flex items-center justify-between border border-white/5">
                <div className="flex items-center gap-3">
                    <div className="bg-[#38b9fa]/20 p-2 rounded-lg text-[#38b9fa]">
                        <Warehouse size={20} />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-xs text-gray-400 uppercase font-bold">Garage Slots</span>
                        <span className="text-white font-mono text-sm">4 / 10 <span className="text-[#38b9fa] text-[10px] ml-1">VIP: UNLIMITED</span></span>
                    </div>
                </div>
                <div className="relative w-10 h-10 flex items-center justify-center">
                    <svg className="transform -rotate-90 w-10 h-10">
                        <circle className="text-gray-700" cx="20" cy="20" fill="transparent" r="16" stroke="currentColor" strokeWidth="3"></circle>
                        <circle className="text-[#38b9fa]" cx="20" cy="20" fill="transparent" r="16" stroke="currentColor" strokeDasharray="100" strokeDashoffset="60" strokeWidth="3"></circle>
                    </svg>
                </div>
            </div>
        </div>
        
        <div className="h-20"></div>

        {/* Floating Action Buttons */}
        <div className="absolute bottom-[30px] right-5 flex flex-col items-end gap-3 z-20">
            <button className="bg-[#1a242c] hover:bg-[#1a242c]/80 text-white p-3 rounded-full shadow-lg border border-white/10 transition-transform hover:scale-105">
                <Store size={24} />
            </button>
            <button className="flex items-center gap-3 bg-[#38b9fa] hover:bg-[#38b9fa]/90 text-black px-5 py-3 rounded-full shadow-[0_4px_20px_rgba(56,185,250,0.4)] font-bold tracking-wider uppercase transition-all hover:scale-105 active:scale-95">
                <ArrowLeftRight size={24} />
                <span>Switch Garage</span>
            </button>
        </div>

      </div>
    </div>
  );
};