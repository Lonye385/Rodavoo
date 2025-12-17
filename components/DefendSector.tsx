import React from 'react';
import { 
  ArrowLeft, Shield, Clock, AlertTriangle, ShieldCheck, 
  Users, Radar, ChevronDown, Maximize, PlusSquare, 
  Rocket, Activity, Crosshair
} from 'lucide-react';

interface DefendSectorProps {
  onBack: () => void;
}

export const DefendSector: React.FC<DefendSectorProps> = ({ onBack }) => {
  return (
    <div className="h-full w-full bg-[#050510] text-white flex flex-col relative overflow-hidden font-sans">
        {/* Scanlines Overlay */}
        <div className="absolute inset-0 z-50 pointer-events-none opacity-10" 
             style={{ 
                 background: 'linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255,0) 50%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.2))',
                 backgroundSize: '100% 4px'
             }}>
        </div>

        {/* Header */}
        <header className="sticky top-0 z-40 bg-[#050510]/95 backdrop-blur-md border-b border-[#1a1d2d]">
            <div className="flex items-center p-4 pb-3 justify-between">
                <button 
                  onClick={onBack}
                  className="text-slate-400 hover:text-white transition-colors flex size-10 items-center justify-center rounded-full hover:bg-white/5"
                >
                    <ArrowLeft size={24} />
                </button>
                <div className="flex flex-col items-center">
                    <h2 className="text-white text-lg font-bold leading-tight tracking-wider uppercase">Sector 7-G</h2>
                    <span className="text-xs text-[#0d33f2] font-medium tracking-[0.1em] uppercase opacity-80">Under Siege</span>
                </div>
                <div className="flex size-10 items-center justify-end">
                    <button className="flex items-center justify-center rounded-full size-10 bg-[#fa383e]/10 text-[#fa383e] border border-[#fa383e]/30 shadow-[0_0_15px_-3px_rgba(250,56,62,0.4)]">
                        <ShieldCheck size={20} />
                    </button>
                </div>
            </div>
        </header>

        <div className="flex-1 overflow-y-auto pb-24 z-10">
            {/* Status Banner */}
            <div className="bg-[#fa383e]/10 border-y border-[#fa383e]/20 py-3 px-4 flex items-center justify-center gap-2">
                <AlertTriangle className="text-[#fa383e] animate-pulse" size={20} />
                <h3 className="text-[#fa383e] tracking-widest text-sm font-bold uppercase animate-pulse">Hostiles Inbound</h3>
            </div>

            {/* Timer */}
            <div className="px-4 py-6">
                <p className="text-center text-slate-400 text-xs uppercase tracking-widest mb-3">Time until breach</p>
                <div className="flex gap-3 justify-center">
                    <div className="flex flex-col items-center gap-1">
                        <div className="flex size-12 items-center justify-center rounded bg-[#0f111a] border border-[#1a1d2d] relative overflow-hidden group">
                            <div className="absolute inset-0 bg-[#0d33f2]/5 group-hover:bg-[#0d33f2]/10 transition-colors"></div>
                            <p className="text-white text-xl font-bold font-mono">00</p>
                        </div>
                        <span className="text-slate-500 text-[10px] font-medium uppercase tracking-wider">Hrs</span>
                    </div>
                    <div className="flex items-center h-12 pt-1 text-slate-600">:</div>
                    <div className="flex flex-col items-center gap-1">
                        <div className="flex size-12 items-center justify-center rounded bg-[#0f111a] border border-[#1a1d2d] relative overflow-hidden group">
                            <div className="absolute inset-0 bg-[#0d33f2]/5 group-hover:bg-[#0d33f2]/10 transition-colors"></div>
                            <p className="text-white text-xl font-bold font-mono">14</p>
                        </div>
                        <span className="text-slate-500 text-[10px] font-medium uppercase tracking-wider">Min</span>
                    </div>
                    <div className="flex items-center h-12 pt-1 text-slate-600">:</div>
                    <div className="flex flex-col items-center gap-1">
                        <div className="flex size-12 items-center justify-center rounded bg-[#0f111a] border border-[#0d33f2]/50 shadow-[0_0_15px_-3px_rgba(13,51,242,0.3)] relative overflow-hidden">
                            <div className="absolute inset-0 bg-[#0d33f2]/10 animate-pulse"></div>
                            <p className="text-white text-xl font-bold font-mono">59</p>
                        </div>
                        <span className="text-[#0d33f2] text-[10px] font-bold uppercase tracking-wider">Sec</span>
                    </div>
                </div>
            </div>

            {/* Map */}
            <div className="px-4 pb-2">
                <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-[#1a1d2d] shadow-lg group">
                    <div 
                        className="absolute inset-0 bg-cover bg-center opacity-60" 
                        style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDkduJ0z-hpf2iUBO88D09nNLt7b0OFgGAD5yjH3Lp0PIHWg5Ln-80f5LHalRmvnhgmAADDiZNJz-PHGVCmw6r4sbP8mXrILohQZ_Jn2uFpzyIgD_sZJKK7VmUGKa9oq7NwS8VQF8-kKQlgfv3vtJwo0GFoiUP3FR6QgoKU4Jx4x0oqJqjOBZUKN8EGnjiPEvz7LY_6XbfVHijCugZvAwxMwe0VGGAZ2zKZfYt-lG_TWokXbKhkLbD6GTgoz6fj-RP9EL51OA6VY_o")' }}
                    ></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050510] via-transparent to-transparent opacity-90"></div>
                    <div 
                        className="absolute inset-0 opacity-30"
                        style={{ 
                            backgroundImage: 'linear-gradient(rgba(13, 51, 242, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(13, 51, 242, 0.1) 1px, transparent 1px)',
                            backgroundSize: '20px 20px'
                        }}
                    ></div>

                    {/* Tactical Elements */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-24 rounded-full border border-[#0d33f2]/30 flex items-center justify-center">
                        <div className="size-16 rounded-full border border-[#0d33f2]/60 flex items-center justify-center animate-pulse">
                            <div className="size-2 bg-[#0d33f2] rounded-full shadow-[0_0_15px_-3px_rgba(13,51,242,0.3)]"></div>
                        </div>
                    </div>

                    {/* Enemy Marker */}
                    <div className="absolute top-1/4 right-1/4 flex flex-col items-center">
                        <ChevronDown className="text-[#fa383e] animate-bounce" size={24} />
                        <div className="bg-[#fa383e]/20 text-[#fa383e] text-[10px] font-bold px-1 rounded uppercase backdrop-blur-sm border border-[#fa383e]/40">Enemy Unit</div>
                    </div>

                    <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur px-2 py-1 rounded border border-white/10 flex items-center gap-2">
                        <Radar className="text-[#0d33f2]" size={14} />
                        <span className="text-[10px] text-white font-mono uppercase">Live Feed • Neo-Tokyo Sector 7</span>
                    </div>

                    <button className="absolute bottom-3 right-3 size-8 bg-[#0f111a]/80 backdrop-blur rounded flex items-center justify-center border border-white/10 hover:bg-[#0f111a] hover:border-[#0d33f2]/50 transition-all">
                        <Maximize size={14} className="text-white" />
                    </button>
                </div>
            </div>

            {/* Quick Actions */}
            <div className="flex gap-3 px-4 py-4 overflow-x-auto no-scrollbar snap-x">
                <button className="snap-start shrink-0 flex items-center gap-2 px-4 py-2 bg-[#0f111a] border border-[#1a1d2d] rounded-full hover:border-[#0d33f2]/50 transition-colors group">
                    <PlusSquare className="text-[#0d33f2] text-sm group-hover:scale-110 transition-transform" size={16} />
                    <span className="text-sm font-medium text-white whitespace-nowrap">Deploy Shield</span>
                </button>
                <button className="snap-start shrink-0 flex items-center gap-2 px-4 py-2 bg-[#0f111a] border border-[#1a1d2d] rounded-full hover:border-[#fa383e]/50 transition-colors group">
                    <Rocket className="text-[#fa383e] text-sm group-hover:scale-110 transition-transform" size={16} />
                    <span className="text-sm font-medium text-white whitespace-nowrap">Artillery</span>
                </button>
                <button className="snap-start shrink-0 flex items-center gap-2 px-4 py-2 bg-[#0f111a] border border-[#1a1d2d] rounded-full hover:border-[#f59e0b]/50 transition-colors group">
                    <Users className="text-[#f59e0b] text-sm group-hover:scale-110 transition-transform" size={16} />
                    <span className="text-sm font-medium text-white whitespace-nowrap">Request Backup</span>
                </button>
            </div>

            {/* Stats */}
            <div className="px-4 pb-2">
                <div className="grid grid-cols-2 gap-3">
                    <div className="col-span-1 bg-[#0f111a] border border-[#1a1d2d] rounded-lg p-4 relative overflow-hidden">
                        <div className="absolute right-0 top-0 p-2 opacity-10">
                            <Shield size={36} />
                        </div>
                        <p className="text-slate-400 text-xs font-medium uppercase tracking-wider mb-1">Shield Integrity</p>
                        <div className="flex items-baseline gap-2">
                            <p className="text-white text-2xl font-bold leading-none">45%</p>
                            <p className="text-[#fa383e] text-xs font-bold">-12%</p>
                        </div>
                        <div className="w-full bg-white/10 h-1 mt-3 rounded-full overflow-hidden">
                            <div className="bg-[#fa383e] h-full w-[45%]"></div>
                        </div>
                    </div>
                    
                    <div className="col-span-1 bg-[#0f111a] border border-[#1a1d2d] rounded-lg p-4 relative overflow-hidden">
                        <div className="absolute right-0 top-0 p-2 opacity-10">
                            <Users size={36} />
                        </div>
                        <p className="text-slate-400 text-xs font-medium uppercase tracking-wider mb-1">Garrison</p>
                        <div className="flex items-baseline gap-2">
                            <p className="text-white text-2xl font-bold leading-none">120</p>
                            <span className="text-slate-500 text-sm">/ 200</span>
                        </div>
                        <div className="w-full bg-white/10 h-1 mt-3 rounded-full overflow-hidden">
                            <div className="bg-[#f59e0b] h-full w-[60%]"></div>
                        </div>
                    </div>

                    <div className="col-span-2 bg-[#0f111a] border border-[#1a1d2d] rounded-lg p-4 flex items-center justify-between">
                        <div>
                            <p className="text-slate-400 text-xs font-medium uppercase tracking-wider mb-1">Ammo Reserves</p>
                            <p className="text-[#0bda65] text-xl font-bold leading-none tracking-tight">OPTIMAL LEVELS</p>
                        </div>
                        <div className="flex items-center gap-1">
                            {[1,2,3].map(i => <div key={i} className="h-8 w-1 bg-[#0bda65] rounded-full"></div>)}
                            {[4,5].map(i => <div key={i} className="h-8 w-1 bg-[#0bda65]/30 rounded-full"></div>)}
                        </div>
                    </div>
                </div>
            </div>

            {/* Logs */}
            <div className="flex-1 px-4 py-4 min-h-0">
                <h4 className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-3 flex items-center gap-2">
                    <span className="size-1.5 rounded-full bg-[#0d33f2] animate-pulse"></span>
                    Battle Logs
                </h4>
                <div className="space-y-3">
                    <div className="flex gap-3 items-start opacity-70 hover:opacity-100 transition-opacity">
                        <span className="text-xs text-slate-500 font-mono mt-0.5">10:42</span>
                        <div>
                            <p className="text-sm text-slate-300"><span className="text-[#0d33f2] font-bold">Cmdr. Vex</span> deployed <span className="text-white font-medium">Auto-Turret MKII</span> at North Gate.</p>
                        </div>
                    </div>
                    <div className="flex gap-3 items-start opacity-70 hover:opacity-100 transition-opacity">
                        <span className="text-xs text-slate-500 font-mono mt-0.5">10:41</span>
                        <div>
                            <p className="text-sm text-slate-300">Sector 4 shield took <span className="text-[#fa383e] font-bold">Heavy Damage</span>.</p>
                        </div>
                    </div>
                    <div className="flex gap-3 items-start opacity-70 hover:opacity-100 transition-opacity">
                        <span className="text-xs text-slate-500 font-mono mt-0.5">10:40</span>
                        <div>
                            <p className="text-sm text-slate-300">Enemy wave detected approaching from <span className="text-[#f59e0b] font-medium">East District</span>.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Footer Action */}
        <div className="sticky bottom-0 p-4 bg-[#050510]/80 backdrop-blur-lg border-t border-[#1a1d2d] z-30">
            <button className="relative w-full overflow-hidden group rounded-lg bg-[#0d33f2] hover:bg-blue-600 transition-all active:scale-[0.98] h-14 flex items-center justify-center gap-3">
                 <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImEiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTTAgNDBMMTQwIDBIMHoiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2EpIi8+PC9zdmc+')] opacity-20"></div>
                 <Crosshair className="text-white animate-pulse" size={24} />
                 <span className="text-white text-lg font-bold tracking-wider uppercase">Reinforce Sector</span>
            </button>
        </div>

        <style>{`
            .no-scrollbar::-webkit-scrollbar { display: none; }
            .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        `}</style>
    </div>
  );
};