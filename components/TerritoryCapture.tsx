import React, { useState } from 'react';
import { 
  ArrowLeft, Info, Crosshair, Shield, Users, 
  Radar, Factory, Zap, Timer, ChevronsRight, Loader2
} from 'lucide-react';

interface TerritoryCaptureProps {
  onBack: () => void;
}

export const TerritoryCapture: React.FC<TerritoryCaptureProps> = ({ onBack }) => {
  const [capturing, setCapturing] = useState(false);
  const [captured, setCaptured] = useState(false);

  const handleCapture = () => {
    if (captured) return;
    setCapturing(true);
    // Simula tempo de captura
    setTimeout(() => {
      setCapturing(false);
      setCaptured(true);
    }, 2000);
  };

  return (
    <div className="h-full w-full bg-[#101322] text-white overflow-hidden flex flex-col relative font-sans">
      
      {/* Background Grid & Scanline */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" 
           style={{ 
             backgroundImage: 'linear-gradient(rgba(13, 51, 242, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(13, 51, 242, 0.1) 1px, transparent 1px)', 
             backgroundSize: '20px 20px' 
           }}>
      </div>
      <div className="absolute top-0 left-0 w-full h-1 bg-[#0d33f2]/50 shadow-[0_0_10px_#0d33f2] z-10 animate-[scan_3s_linear_infinite]"></div>

      {/* Header */}
      <header className="flex items-center px-4 py-4 justify-between z-20 bg-[#101322]/90 backdrop-blur-sm border-b border-white/5 shrink-0">
        <button 
          onClick={onBack}
          className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-white/5 active:bg-white/10 transition-colors cursor-pointer text-[#0d33f2]"
        >
          <ArrowLeft size={24} />
        </button>
        <div className="flex flex-col items-center">
          <h1 className="text-white text-base font-bold tracking-[0.1em] uppercase">Target Acquisition</h1>
          <span className="text-xs text-[#0d33f2] font-medium tracking-widest">SECTOR 7G</span>
        </div>
        <button className="flex w-10 h-10 items-center justify-center rounded-full hover:bg-white/5 active:bg-white/10 transition-colors cursor-pointer">
          <Info size={24} className="text-white/70" />
        </button>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto relative pb-24 z-10">
        
        {/* Map Visualization */}
        <div className="px-4 py-4 relative group">
          <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-[#0d33f2]/30 shadow-[0_0_10px_rgba(13,51,242,0.3)] bg-[#1a1d2d]">
            {/* Map Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-80 mix-blend-luminosity" 
              style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBds92FJfF_NO5_NuRivwwwfcqvC3GS7Hr_opybhcJdaeL0zfYIsHENN7hhqa0049SCJ906b6Ux_LWJIb1qhUi0lcPnwMHaEGxzLBoaHTXTFptRwf5a2vZ_mqrJglArWXx5Z7i-taGTnlxLISRQAJLTXR3rmme4m364mEpCFPT7dqvayHu1LyPERxLUHxZj2U8vWc-scP3yNQ2-EHAN1Z527mYO13jm-w43kxjarzkItYzdJWc-dQ7CHl3xBIFQuADo0zlYINjtcAw")' }}
            ></div>
            
            <div className="absolute inset-0 bg-[#0d33f2]/10"></div>
            
            {/* HUD Elements */}
            <div className="absolute top-3 left-3 flex gap-2">
              <div className="bg-black/60 backdrop-blur-md px-2 py-1 rounded border border-red-500/50 flex items-center gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></div>
                <span className="text-[10px] font-bold text-red-400 tracking-wider">HOSTILE</span>
              </div>
            </div>
            
            <div className="absolute bottom-3 right-3">
              <span className="text-[10px] font-mono text-[#0d33f2] bg-black/80 px-2 py-1 rounded border border-[#0d33f2]/30">
                 LAT: 34.0522 // LON: 118.2437
              </span>
            </div>

            {/* Crosshair */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none text-[#0d33f2]/80 opacity-50">
               <Crosshair size={48} strokeWidth={1} />
            </div>
          </div>
        </div>

        {/* Chips */}
        <div className="flex gap-2 px-4 pb-2 overflow-x-auto no-scrollbar">
           <div className="flex h-7 shrink-0 items-center justify-center gap-x-2 rounded bg-[#1a1d2d] border border-white/10 px-3">
              <Shield size={12} className="text-white/60" />
              <p className="text-white text-xs font-bold tracking-wide uppercase">Def: Fortified</p>
           </div>
           <div className="flex h-7 shrink-0 items-center justify-center gap-x-2 rounded bg-[#1a1d2d] border border-white/10 px-3">
              <Users size={12} className="text-white/60" />
              <p className="text-white text-xs font-bold tracking-wide uppercase">Pop: High</p>
           </div>
           <div className="flex h-7 shrink-0 items-center justify-center gap-x-2 rounded bg-[#1a1d2d] border border-white/10 px-3">
              <Radar size={12} className="text-white/60" />
              <p className="text-white text-xs font-bold tracking-wide uppercase">Scan: 98%</p>
           </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-3 p-4">
           {/* Card 1 */}
           <div className="relative overflow-hidden rounded-xl bg-[#1a1d2d] border border-white/5 p-4 group hover:border-[#0d33f2]/50 transition-colors">
              <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-20 transition-opacity">
                 <Factory size={36} className="text-white" />
              </div>
              <p className="text-white/60 text-xs font-medium uppercase tracking-wider mb-1">Resource Output</p>
              <div className="flex items-baseline gap-1">
                 <p className="text-white text-xl font-bold">500</p>
                 <p className="text-[#0d33f2] text-xs font-bold">FUEL/HR</p>
              </div>
              <div className="w-full bg-white/5 h-1 mt-3 rounded-full overflow-hidden">
                 <div className="bg-[#0d33f2] h-full w-[75%] shadow-[0_0_10px_#0d33f2]"></div>
              </div>
           </div>

           {/* Card 2 */}
           <div className="relative overflow-hidden rounded-xl bg-[#1a1d2d] border border-white/5 p-4 group hover:border-[#0d33f2]/50 transition-colors">
              <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-20 transition-opacity">
                 <Zap size={36} className="text-white" />
              </div>
              <p className="text-white/60 text-xs font-medium uppercase tracking-wider mb-1">Capture Cost</p>
              <div className="flex items-baseline gap-1">
                 <p className="text-white text-xl font-bold">200</p>
                 <p className="text-[#0d33f2] text-xs font-bold">CELLS</p>
              </div>
              <div className="w-full bg-white/5 h-1 mt-3 rounded-full overflow-hidden">
                 <div className="bg-yellow-500 h-full w-[45%]"></div>
              </div>
           </div>
        </div>

        {/* Timer */}
        <div className="px-4 py-2">
          <div className="bg-[#1a1d2d] rounded-xl border border-white/5 p-4 relative overflow-hidden">
             <div className="absolute top-0 left-0 w-1 h-full bg-red-500"></div>
             <div className="flex justify-between items-center mb-4">
                <h3 className="text-white text-sm font-bold uppercase tracking-widest flex items-center gap-2">
                   <Timer size={18} className="text-red-500" />
                   Vulnerability Window
                </h3>
                <span className="px-2 py-0.5 rounded bg-red-500/20 text-red-400 text-[10px] font-bold border border-red-500/30">CRITICAL</span>
             </div>
             
             <div className="flex gap-2">
                {['00', '15', '30'].map((time, i) => (
                  <React.Fragment key={i}>
                    <div className="flex-1 flex flex-col items-center bg-[#101322]/50 rounded p-2 border border-white/5">
                        <span className={`text-2xl font-mono font-bold ${i === 2 ? 'text-[#0d33f2] animate-pulse' : 'text-white'}`}>{time}</span>
                        <span className="text-[10px] text-white/40 uppercase">{['Hours', 'Mins', 'Secs'][i]}</span>
                    </div>
                    {i < 2 && <div className="flex items-center text-white/20">:</div>}
                  </React.Fragment>
                ))}
             </div>
          </div>
        </div>

        {/* Warning */}
        <div className="px-6 py-4 text-center">
            <p className="text-xs text-white/40 leading-relaxed font-sans">
                <strong className="text-red-400">WARNING:</strong> High enemy density detected in quadrant. Recommended squad size: 5+. Capture protocols initiated upon slide.
            </p>
        </div>
      </main>

      {/* Footer Slider */}
      <footer className="fixed bottom-0 w-full bg-[#101322]/80 backdrop-blur-xl border-t border-white/10 p-4 pb-8 z-30">
          <button 
             onClick={handleCapture}
             disabled={capturing || captured}
             className="w-full relative h-14 rounded-full bg-white/5 border border-white/10 p-1 cursor-pointer overflow-hidden group select-none active:scale-[0.98] transition-transform"
          >
             {/* Text */}
             <div className="absolute inset-0 flex items-center justify-center z-0">
                 <span className={`text-white/30 font-bold tracking-[0.2em] text-sm ${captured ? 'text-green-500/80' : 'animate-pulse group-hover:text-white/50'} transition-colors`}>
                    {capturing ? 'INITIATING...' : captured ? 'SECTOR CAPTURED' : 'SLIDE TO INITIATE'}
                 </span>
             </div>
             
             {/* Handle / Progress */}
             <div 
                className={`h-full aspect-square rounded-full shadow-[0_0_20px_rgba(13,51,242,0.5)] flex items-center justify-center relative z-10 transition-all duration-1000 ease-out
                    ${capturing || captured ? 'w-full bg-green-600' : 'bg-[#0d33f2] w-12 translate-x-0'}
                `}
             >
                 {capturing ? <Loader2 className="animate-spin text-white" /> : captured ? <Shield className="text-white" /> : <ChevronsRight className="text-white font-bold" />}
             </div>
          </button>
      </footer>

      <style>{`
        @keyframes scan {
            0% { top: 0%; opacity: 0; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { top: 100%; opacity: 0; }
        }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
};