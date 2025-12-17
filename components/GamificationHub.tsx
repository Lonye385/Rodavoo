import React from 'react';
import { 
  Bell, Shield, Target, Zap, CheckCircle, 
  Map, Database, Rocket, ShieldCheck, Verified,
  Truck, ArrowUp, MessageSquare, ArrowLeft
} from 'lucide-react';

interface GamificationHubProps {
  onBack: () => void;
}

export const GamificationHub: React.FC<GamificationHubProps> = ({ onBack }) => {
  return (
    <div className="h-full w-full bg-[#0a0a0a] font-display text-white flex flex-col relative overflow-hidden pb-24 selection:bg-[#590df2] selection:text-white">
        
        {/* Background Grid */}
        <div className="fixed inset-0 pointer-events-none opacity-[0.05] z-0" 
             style={{ 
               backgroundImage: 'linear-gradient(to right, #1f1b27 1px, transparent 1px), linear-gradient(to bottom, #1f1b27 1px, transparent 1px)',
               backgroundSize: '20px 20px'
             }}>
        </div>

        {/* Header */}
        <header className="sticky top-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-white/5">
            <div className="flex items-center px-4 py-3 justify-between">
                <div className="flex items-center gap-3">
                    <button 
                        onClick={onBack}
                        className="flex size-9 items-center justify-center rounded bg-[#1f1b27] border border-white/5 hover:bg-white/5 transition-colors text-white"
                    >
                        <ArrowLeft size={20} />
                    </button>
                    <div className="relative group cursor-pointer">
                        <div 
                            className="bg-center bg-no-repeat bg-cover rounded-md size-10 border border-white/10 ring-1 ring-[#590df2]/30" 
                            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDY8j70ohNJL_4VQj7EOqSEJLAfNBoKzGK3TbrixDGkytlkDlCZTe4-kjn32mJfgjoCnBC-3xuHCnC7iXYYWfpeSRq8eAplG1Lgel0y24lS0TqQbke5pc2EEafGDYgFd92sArNopAp-NJFlwXXbupfUhWGeDgfm8byXLm9EOnkgPV9IZUbCEMfs7fbZzd7KgXc2WbDVtzuHet3dLqP1RroItKTfjbzEQe9T_LpGv_l4w-0Vjp76OjA47IiN5gR1__juAmR1EutJs3k")' }}
                        ></div>
                        <div className="absolute -bottom-1 -right-1 size-2.5 bg-[#00f0ff] rounded-full border-2 border-[#0a0a0a] shadow-[0_0_8px_#00f0ff]"></div>
                    </div>
                    <div className="flex flex-col">
                        <h2 className="text-white text-sm font-bold leading-tight tracking-wide uppercase">Operative Active</h2>
                        <div className="flex items-center gap-2">
                            <span className="text-[10px] text-[#7b3bf7] font-bold tracking-widest bg-[#590df2]/10 px-1 rounded">LVL 42</span>
                            <span className="text-[10px] text-[#948c9e]">XP 85%</span>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-end gap-3">
                    <div className="hidden sm:flex flex-col items-end mr-2">
                        <span className="text-xs text-[#948c9e] font-medium">Balance</span>
                        <span className="text-sm font-bold text-white">$450.00</span>
                    </div>
                    <button className="relative flex size-9 items-center justify-center rounded bg-[#1f1b27] border border-white/5 hover:bg-white/5 transition-colors">
                        <Bell className="text-[#948c9e] w-5 h-5" />
                        <span className="absolute top-2 right-2 flex h-1.5 w-1.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff0099] opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#ff0099]"></span>
                        </span>
                    </button>
                </div>
            </div>
        </header>

        {/* Main Content */}
        <main className="relative z-10 w-full max-w-md mx-auto overflow-y-auto">
            
            {/* Headline */}
            <div className="px-4 pt-6 pb-2">
                <h1 className="text-2xl font-bold leading-tight tracking-tight mb-4">
                    Welcome, <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7b3bf7] to-[#00f0ff]">Driver.</span>
                </h1>
                
                {/* Stats Cards */}
                <div className="grid grid-cols-2 gap-3 mb-2">
                    {/* R-Coins */}
                    <div className="relative overflow-hidden rounded-lg bg-[#13131a] border border-white/5 p-3 flex flex-col justify-between group">
                        <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-20 transition-opacity">
                            <Database size={32} />
                        </div>
                        <div className="flex items-center gap-2 mb-2">
                            <div className="size-6 rounded bg-[#590df2]/20 flex items-center justify-center text-[#7b3bf7]">
                                <Database size={14} />
                            </div>
                            <span className="text-[10px] uppercase tracking-wider text-[#948c9e] font-semibold">R-Coins</span>
                        </div>
                        <div className="flex items-end justify-between">
                            <p className="text-xl font-bold text-white">12,450</p>
                            <span className="text-[10px] text-green-400 font-medium flex items-center">
                                <ArrowUp size={10} className="mr-0.5" /> 2.4%
                            </span>
                        </div>
                    </div>
                    {/* Cash */}
                    <div className="relative overflow-hidden rounded-lg bg-[#13131a] border border-white/5 p-3 flex flex-col justify-between group">
                        <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-20 transition-opacity">
                            <Zap size={32} />
                        </div>
                        <div className="flex items-center gap-2 mb-2">
                            <div className="size-6 rounded bg-green-500/20 flex items-center justify-center text-green-400">
                                <Zap size={14} />
                            </div>
                            <span className="text-[10px] uppercase tracking-wider text-[#948c9e] font-semibold">Cash</span>
                        </div>
                        <div className="flex items-end justify-between">
                            <p className="text-xl font-bold text-white">$450.00</p>
                            <button className="text-[10px] bg-white/5 hover:bg-white/10 px-2 py-0.5 rounded text-[#948c9e] transition-colors border border-white/5">
                                Add
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Hero Card */}
            <div className="px-4 py-2 w-full">
                <div className="relative w-full h-48 rounded-xl overflow-hidden group border border-white/10 hover:border-[#590df2]/50 transition-all duration-300 shadow-lg shadow-black/50">
                    <div 
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
                        style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCRf_15k8dHBJ01ihDXtG7DgW9s6j9SpjLNbm8ZPIQDmeBGqRNUogSlC2Fz50CieyUWsb2dgsujadkp0PzoU1CRrxz2D4vpxMqBKvRW-Ol-f-PeqxmOFpT9rG2mo8DjfSbZyVcX3xMvouWwYWRA1zou2wmux2QxleXZLrB5_xNdcovVtlvKKdpB2JusHKLfYk5adaqhyAi9yMj13aY02cBTgT8S_uL_Ar9DziJoLpHgWeMwfbvKZx6R4VGRyNmCPu1MU05kNnuIm6I")' }}
                    ></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f13] via-[#0f0f13]/60 to-transparent"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0f0f13]/90 via-transparent to-transparent"></div>
                    <div 
                        className="absolute inset-0 opacity-30 pointer-events-none"
                        style={{ 
                            background: 'linear-gradient(to bottom, transparent 50%, rgba(0, 240, 255, 0.02) 51%, transparent 51%)',
                            backgroundSize: '100% 4px'
                        }}
                    ></div>
                    
                    <div className="relative z-10 h-full flex flex-col justify-between p-5">
                        <div className="flex justify-between items-start">
                            <div className="flex items-center gap-2">
                                <span className="inline-flex items-center justify-center size-2 relative">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#590df2] opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#590df2]"></span>
                                </span>
                                <span className="text-xs font-bold text-white tracking-widest drop-shadow-md">SECTOR 7</span>
                            </div>
                            <div className="px-2 py-1 rounded bg-black/60 backdrop-blur-sm border border-white/10 text-[10px] font-mono text-[#00f0ff]">
                                ETA: 24m
                            </div>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-1 shadow-[#590df2]/60 drop-shadow-[0_0_5px_rgba(89,13,242,0.6)]">INITIATE ROUTE</h3>
                            <p className="text-xs text-gray-300 mb-4 font-body max-w-[80%] line-clamp-1">High value cargo. Cyber-security escort required.</p>
                            <button className="w-full h-11 bg-[#590df2] hover:bg-[#7b3bf7] flex items-center justify-center gap-2 text-white font-bold tracking-wide rounded clip-corner transition-all shadow-[0_0_15px_rgba(89,13,242,0.3)] hover:shadow-[0_0_25px_rgba(89,13,242,0.5)] active:scale-[0.98]">
                                <Rocket size={18} />
                                <span>START SHIFT</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* System Status Grid */}
            <div className="px-4 pb-4 mt-2">
                <div className="flex items-center justify-between mb-3 px-1">
                    <h3 className="text-[#948c9e] text-xs font-bold uppercase tracking-widest">System Status</h3>
                    <span className="text-[10px] text-[#585260] font-mono">V.2.0.4 ONLINE</span>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                    {/* Guild Card */}
                    <div className="col-span-2 rounded-lg bg-[#13131a] border border-white/5 p-4 relative overflow-hidden group hover:border-[#590df2]/30 transition-colors">
                        <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-[#590df2]/5 to-transparent pointer-events-none"></div>
                        <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center gap-2">
                                <div className="p-1.5 rounded bg-[#590df2]/10 text-[#7b3bf7]">
                                    <Shield size={20} />
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold text-white leading-none">NeonDragons</h4>
                                    <span className="text-[10px] text-[#948c9e]">Guild Rank: #4</span>
                                </div>
                            </div>
                            <div className="text-right">
                                <span className="text-xs font-bold text-[#00f0ff]">85%</span>
                                <div className="w-16 h-1 bg-white/10 rounded-full mt-1">
                                    <div className="h-full bg-gradient-to-r from-[#590df2] to-[#00f0ff] rounded-full" style={{ width: '85%' }}></div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-[#0f0f13]/50 rounded border border-white/5 p-2.5 flex items-start gap-2.5">
                            <MessageSquare size={16} className="text-[#585260] mt-0.5" />
                            <div className="flex-1">
                                <p className="text-xs text-gray-300 leading-snug">
                                    <span className="text-[#7b3bf7] font-bold">@Viper</span>: "Sector 4 is now under our control. All units regroup at North Hub."
                                </p>
                                <span className="text-[10px] text-[#585260] mt-1 block">2m ago • Global Chat</span>
                            </div>
                        </div>
                    </div>

                    {/* Daily Quests */}
                    <div className="rounded-lg bg-[#13131a] border border-white/5 p-4 hover:border-white/10 transition-colors flex flex-col gap-2">
                        <div className="flex justify-between items-start">
                            <div className="p-1.5 rounded bg-blue-500/10 text-blue-400">
                                <Target size={20} />
                            </div>
                            <span className="text-[10px] font-bold text-[#948c9e] bg-white/5 px-1.5 py-0.5 rounded">4/10</span>
                        </div>
                        <div>
                            <h4 className="text-sm font-bold text-white">Daily Quests</h4>
                            <p className="text-[10px] text-[#948c9e] mb-2">Deliveries Pending</p>
                            <div className="w-full bg-white/10 rounded-full h-1">
                                <div className="bg-blue-400 h-1 rounded-full shadow-[0_0_8px_rgba(96,165,250,0.5)]" style={{ width: '40%' }}></div>
                            </div>
                        </div>
                    </div>

                    {/* Integrity */}
                    <div className="rounded-lg bg-[#13131a] border border-white/5 p-4 hover:border-white/10 transition-colors flex flex-col gap-2">
                        <div className="flex justify-between items-start">
                            <div className="p-1.5 rounded bg-red-500/10 text-red-400">
                                <ShieldCheck size={20} />
                            </div>
                            <span className="text-[10px] font-bold text-green-400">98%</span>
                        </div>
                        <div>
                            <h4 className="text-sm font-bold text-white">Integrity</h4>
                            <p className="text-[10px] text-[#948c9e] mb-2">Systems Stable</p>
                            <div className="flex gap-0.5">
                                <div className="h-1 flex-1 bg-green-400/80 rounded-l-full"></div>
                                <div className="h-1 flex-1 bg-green-400/80"></div>
                                <div className="h-1 flex-1 bg-green-400/80"></div>
                                <div className="h-1 flex-1 bg-white/10 rounded-r-full"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Top 1% Badge */}
             <div className="px-4 pb-8">
                 <div className="rounded-lg border border-white/5 bg-[#13131a] p-3 flex items-center justify-between hover:border-yellow-500/30 transition-colors cursor-pointer group">
                     <div className="flex items-center gap-3">
                        <div className="p-2 rounded bg-yellow-400/10 text-yellow-400 group-hover:bg-yellow-400 group-hover:text-black transition-colors">
                            <Verified size={20} />
                        </div>
                        <div>
                             <h4 className="text-sm font-bold text-white">Performance</h4>
                             <p className="text-[10px] text-[#948c9e]">Rank: <span className="text-yellow-400 font-bold">S-Class</span></p>
                        </div>
                     </div>
                     <span className="text-xs font-bold text-yellow-400 border border-yellow-400/30 px-2 py-0.5 rounded">Top 1%</span>
                 </div>
             </div>

        </main>
    </div>
  );
};