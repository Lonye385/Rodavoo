import React from 'react';
import { 
  ArrowLeft, Settings, Truck, Flag, AlertTriangle, CheckCheck, 
  Star, Image as ImageIcon, Eye, Plus, Send
} from 'lucide-react';

interface GuildChatProps {
  onBack: () => void;
}

export const GuildChat: React.FC<GuildChatProps> = ({ onBack }) => {
  return (
    <div className="h-full w-full bg-[#05060a] text-white flex flex-col relative overflow-hidden font-sans">
      
      {/* Background Grid */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03]" 
           style={{ 
             backgroundSize: '40px 40px', 
             backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)' 
           }}>
      </div>

      {/* Header */}
      <header className="flex-none bg-[#12141c]/95 backdrop-blur-md border-b border-white/10 z-20 shadow-lg animate-in slide-in-from-top-2 duration-300">
        <div className="flex items-center px-4 py-3 justify-between">
          <button 
            onClick={onBack}
            className="text-white/70 hover:text-[#00f0ff] flex size-10 items-center justify-center rounded-full hover:bg-white/5 transition-all duration-200 active:scale-90 active:bg-white/10"
          >
            <ArrowLeft size={24} />
          </button>
          <div className="flex-1 flex flex-col items-center">
            <div className="flex items-center gap-2">
              <Truck size={20} className="text-[#0d33f2]" />
              <h1 className="text-white text-base font-bold tracking-tight uppercase">IRONCLAD LOGISTICS</h1>
              <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-white/10 text-white/60 border border-white/5">LVL 8</span>
            </div>
            <div className="flex items-center gap-3 mt-1 animate-in fade-in duration-500 delay-150">
              <div className="flex items-center gap-1.5">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00f0ff] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#00f0ff]"></span>
                </span>
                <span className="text-[#00f0ff]/80 text-[10px] font-medium tracking-wide">12 ONLINE</span>
              </div>
              <span className="text-white/20 text-[10px]">•</span>
              <span className="text-white/40 text-[10px] font-medium tracking-wide uppercase">Rank: Platinum</span>
            </div>
          </div>
          <button className="text-white/70 hover:text-[#00f0ff] flex size-10 items-center justify-center rounded-full hover:bg-white/5 transition-all duration-200 active:rotate-90 active:scale-95">
            <Settings size={24} />
          </button>
        </div>
        <div className="bg-[#0d33f2]/10 border-t border-b border-[#0d33f2]/20 px-4 py-1.5 flex justify-between items-center text-[10px] font-mono">
          <span className="text-[#0d33f2] uppercase tracking-wider flex items-center gap-1">
            <Flag size={12} />
            Current Obj:
          </span>
          <span className="text-white/90 truncate max-w-[200px]">Secure Sector 7 Depot</span>
          <span className="text-[#0d33f2] font-bold">84%</span>
        </div>
      </header>

      {/* Main Chat Area */}
      <main className="flex-1 overflow-y-auto no-scrollbar flex flex-col p-4 gap-3 bg-[#05060a] relative">
        
        <div className="flex justify-center my-4 sticky top-0 z-10 animate-in zoom-in-95 duration-300 delay-100 fill-mode-forwards">
          <span className="text-white/30 text-[10px] font-bold bg-[#12141c]/80 backdrop-blur border border-white/5 px-3 py-1 rounded-full uppercase tracking-widest shadow-lg">
            Today, 2045-10-24
          </span>
        </div>

        {/* System Message */}
        <div className="flex justify-center w-full my-2 animate-in slide-in-from-bottom-2 duration-300 delay-200 fill-mode-forwards opacity-0">
          <div className="bg-red-500/5 border-l-2 border-red-500 text-red-400 text-[11px] font-mono py-2 px-4 w-full max-w-sm rounded-r text-center tracking-wide uppercase flex items-center justify-center gap-2 shadow-[0_0_10px_rgba(239,68,68,0.1)]">
            <AlertTriangle size={14} className="animate-pulse" />
            <span>[SYSTEM] Daily server reset in 10 minutes.</span>
          </div>
        </div>

        {/* Message 1 */}
        <div className="flex items-end gap-3 group animate-in slide-in-from-bottom-4 duration-300 delay-300 fill-mode-forwards opacity-0">
          <div className="relative shrink-0 transition-transform duration-300 group-hover:scale-105">
            <div 
              className="bg-center bg-no-repeat bg-cover rounded-lg w-10 h-10 border border-teal-500/30 shadow-[0_0_10px_rgba(20,184,166,0.2)]"
              style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDbeTmkHx64A_LCPb-ybqmdNCWfWbzvV2WFm6fZJUOGdmEPb4OneKWG6uaKsijpFzQEIcEf6aVY2PL1vVcAjnD4z6cNghVTU4XjKwZo5fmXVV5eE41UrsKEIk9z30LKv93cP0PFTpaIDWAAl_lS6Oz_SBAY_2C5oj_xKC8m_7S26SW0ZVKALjfZhq9wWYYqNn98-CkF1BTCubpjiNYTPdb7t2pKLcYV8i3LcCN5tDT5PSVtj6ZR-_L9xwbG_9AF3FDW0CykWZ2PIvQ")' }}
            ></div>
            <div className="absolute -bottom-1 -right-1 bg-[#12141c] border border-white/10 rounded px-1 py-[1px] text-[8px] font-bold text-teal-400">24</div>
          </div>
          <div className="flex flex-1 flex-col gap-1 items-start max-w-[85%]">
            <div className="flex items-baseline gap-2 pl-1">
              <p className="text-teal-400 text-xs font-bold uppercase tracking-wide">CyberTrucker</p>
              <span className="text-white/30 text-[10px] font-mono">14:02</span>
            </div>
            <div className="p-3 bg-[#13161f] border border-teal-500/20 text-gray-200 text-sm leading-relaxed shadow-md relative rounded-lg rounded-bl-none transition-colors duration-300 hover:bg-[#1a1e29] hover:border-teal-500/40">
              <p>Anyone near <span className="text-[#fcee0a] font-semibold">Sector 7</span>? I need an escort through the waste zone. Scavengers are pinging my radar.</p>
            </div>
          </div>
        </div>

        {/* Message 2 */}
        <div className="flex items-end gap-3 mt-1 group animate-in slide-in-from-bottom-4 duration-300 delay-400 fill-mode-forwards opacity-0">
          <div className="relative shrink-0 transition-transform duration-300 group-hover:scale-105">
            <div 
              className="bg-center bg-no-repeat bg-cover rounded-lg w-10 h-10 border border-purple-500/30 shadow-[0_0_10px_rgba(168,85,247,0.2)]"
              style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDsPac5ohZ9LrQ_LzRPqizAaQHhzw0OiblXzBFiteIkQ8sTEc1dM6FbE6sdZ27MXIVBTD7-yFZIoSPBF61zDhzPZOFtmQwieYpSc6WhwtIkOCVMUy2ITg3sKVA4wQGyamljtyk74CKyvvhWj_4FOUTi19Whu7j-uBf5Ota45S_Axr9DK8hV4IfkOKry5ojG72MylkSssg5g5RMA6ON9kYNjV2dY5YEg9XYRyMTPG61AISZMIfbkF7mHeSUn2jOe_2M8Vs4jlMysRas")' }}
            ></div>
            <div className="absolute -bottom-1 -right-1 bg-[#12141c] border border-white/10 rounded px-1 py-[1px] text-[8px] font-bold text-purple-400">31</div>
          </div>
          <div className="flex flex-1 flex-col gap-1 items-start max-w-[85%]">
            <div className="flex items-baseline gap-2 pl-1">
              <p className="text-purple-400 text-xs font-bold uppercase tracking-wide">NetRunner01</p>
              <span className="text-white/30 text-[10px] font-mono">14:04</span>
            </div>
            <div className="p-3 bg-[#13161f] border border-purple-500/20 text-gray-200 text-sm leading-relaxed shadow-md rounded-lg rounded-bl-none transition-colors duration-300 hover:bg-[#1a1e29] hover:border-purple-500/40">
              <p>OMW. ETA 2 mins. Keep your shields up, I’m bringing heavy ordinance.</p>
            </div>
          </div>
        </div>

        {/* Message 3 (User) */}
        <div className="flex items-end gap-3 mt-1 justify-end group animate-in slide-in-from-bottom-4 duration-300 delay-500 fill-mode-forwards opacity-0">
          <div className="flex flex-1 flex-col gap-1 items-end max-w-[85%]">
            <div className="flex items-baseline gap-2 pr-1">
              <span className="text-white/30 text-[10px] font-mono">14:05</span>
              <p className="text-[#0d33f2] text-xs font-bold uppercase tracking-wide">You</p>
            </div>
            <div className="p-3 bg-[#0d33f2]/20 text-white text-sm leading-relaxed shadow-[0_0_15px_rgba(13,51,242,0.15)] border border-[#0d33f2]/50 relative rounded-lg rounded-br-none transition-all duration-300 hover:shadow-[0_0_20px_rgba(13,51,242,0.25)] hover:bg-[#0d33f2]/30">
              <p>Dropping payload at the depot now. Can support in 5.</p>
            </div>
            <span className="text-white/40 text-[10px] flex items-center gap-1">
              Read <CheckCheck size={12} className="text-[#0d33f2]" />
            </span>
          </div>
          <div className="relative shrink-0 transition-transform duration-300 group-hover:scale-105">
            <div 
              className="bg-center bg-no-repeat bg-cover rounded-lg w-10 h-10 border border-[#0d33f2]/50 shadow-[0_0_10px_rgba(13,51,242,0.3)]"
              style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDPZBBfDz7Bi_4RmCw14HZHTj6mQtf22BUFvWIQSlCIgLGffTx2mE_23WJd1r6SkbmY4c-wrPj9A1lMEbJJSX0IOqLrZvHUTb_2kFJqwfVTuFPvrQ0x3_onF1mIoxjFXolI-mVKxhTEQIRIiNVfTJnTnppCdzpXbuTg0uQ0ZpVr-S10K_HZEbo_255H6ClZWbteujnK6LHZ3qPuHUW8JYXi_SrvAc4o2zK9hEbP94iYtI5U_pS9ux4_NbRhIDNUAiwgIHQcbErbDGE")' }}
            ></div>
            <div className="absolute -bottom-1 -left-1 bg-[#12141c] border border-white/10 rounded px-1 py-[1px] text-[8px] font-bold text-[#0d33f2]">42</div>
          </div>
        </div>

        {/* Message 4 (Image) */}
        <div className="flex items-end gap-3 mt-3 group animate-in slide-in-from-bottom-4 duration-300 delay-600 fill-mode-forwards opacity-0">
          <div className="relative shrink-0 transition-transform duration-300 group-hover:scale-105">
            <div 
              className="bg-center bg-no-repeat bg-cover rounded-lg w-10 h-10 border border-[#fcee0a]/50 shadow-[0_0_15px_rgba(252,238,10,0.2)]"
              style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAjm4TAtzJoaAhpumfQ_8c0KlCD8j0E8RQK-x1u4vvy4dRSY-J4YtGP_wrs4Ln4F9b3r3gANTnb9dPYSzqLX5MuBLQgCsiZoRxy7RKuPx3ILIwfOT8FrMsrxZD9NFflBz4NpSCE0AUfITy4hBnjisXq3aKaVyvAnvWgVT-oT9R2dcFA3JQRBfXVKX15Rm6xOtHwrEMZ8OIlskBRztCIdMhs3CaqrN4VX3hX4Q56laZrHbfg6SiuXr6aktmP4nJVIkgx5u4ynNZCoFI")' }}
            ></div>
            <div className="absolute -top-1 -right-1">
              <Star size={16} className="text-[#fcee0a] drop-shadow-md animate-pulse fill-current" />
            </div>
          </div>
          <div className="flex flex-1 flex-col gap-1 items-start max-w-[85%]">
            <div className="flex items-baseline gap-2 pl-1">
              <p className="text-[#fcee0a] text-xs font-bold uppercase tracking-wide flex items-center gap-1">
                CommanderV <span className="text-[9px] opacity-70 border border-[#fcee0a]/30 px-1 rounded ml-1 text-white">Lvl 60</span>
              </p>
              <span className="text-white/30 text-[10px] font-mono">14:10</span>
            </div>
            <div className="bg-[#13161f] border border-[#fcee0a]/20 overflow-hidden shadow-md rounded-lg rounded-bl-none flex flex-col transition-all duration-300 hover:border-[#fcee0a]/40 hover:shadow-[0_0_15px_rgba(252,238,10,0.1)]">
              <div className="relative w-full h-32 bg-gray-800 group-hover:brightness-110 transition-all cursor-pointer">
                <img 
                  alt="Tactical map showing route to Sector 9" 
                  className="w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-110" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCgE5XnGzIB4biEBqH8_V-PIQCz7IMBYi9kjbWWWDB7ccGBjbCQ7Vr-4_xswbBnD2zRYiY3PXeAzouzTjiu1aAY-KAYxXsU9n24qEiRVvTZQaTMTlT1cpfqWPxFLuXybhzqycLmfGWkpVSp_2Ac3pIOS4c8ZuCAILgdfeHoJbnYlVwDT3dtM0vchcMqf5FYM0gsFQQNBHgAI_4zfczdW-oROhAG4VTdVqsNvR8UXjxh2FKxfgjAdVMq4JJ-hWDyhR2NHdMAG_1VGa4" 
                />
                <div className="absolute top-0 left-0 right-0 p-2 bg-gradient-to-b from-black/60 to-transparent">
                  <div className="flex items-center gap-1">
                    <ImageIcon size={12} className="text-white/70" />
                    <span className="text-[9px] font-mono text-white/90 truncate">TACTICAL_MAP_SEC9.PNG</span>
                  </div>
                </div>
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-black/50 p-1.5 rounded-full hover:bg-[#00f0ff] hover:text-black transition-colors text-white">
                    <Eye size={20} />
                  </div>
                </div>
              </div>
              <div className="p-3 text-gray-200 text-sm leading-relaxed border-t border-white/5 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#fcee0a]"></div>
                <p className="pl-2">New orders. Reroute all cargo to Sector 9 immediately. Avoid the main highway.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="h-2"></div>
      </main>

      {/* Footer */}
      <footer className="flex-none z-30 bg-[#12141c]/95 backdrop-blur-xl border-t border-white/10 pb-8 shadow-[0_-4px_20px_rgba(0,0,0,0.3)] animate-in slide-in-from-bottom-10 duration-300 delay-700 fill-mode-forwards opacity-0">
        <div className="flex gap-2 overflow-x-auto px-4 py-2.5 no-scrollbar border-b border-white/5 bg-black/20">
          <button className="flex-none px-3 py-1.5 bg-[#1c1f2e] hover:bg-white/10 border border-white/10 rounded text-[10px] font-mono text-[#00f0ff] transition-all duration-200 hover:border-[#00f0ff]/50 hover:shadow-[0_0_10px_rgba(0,240,255,0.2)] uppercase whitespace-nowrap active:scale-95 active:bg-[#00f0ff]/10">
            On my way
          </button>
          <button className="flex-none px-3 py-1.5 bg-[#1c1f2e] hover:bg-white/10 border border-white/10 rounded text-[10px] font-mono text-green-400 transition-all duration-200 hover:border-green-400/50 hover:shadow-[0_0_10px_rgba(74,222,128,0.2)] uppercase whitespace-nowrap active:scale-95 active:bg-green-400/10">
            Cargo Secured
          </button>
          <button className="flex-none px-3 py-1.5 bg-[#1c1f2e] hover:bg-white/10 border border-white/10 rounded text-[10px] font-mono text-red-400 transition-all duration-200 hover:border-red-400/50 hover:shadow-[0_0_10px_rgba(248,113,113,0.2)] uppercase whitespace-nowrap active:scale-95 active:bg-red-400/10">
            Enemy Spotted
          </button>
          <button className="flex-none px-3 py-1.5 bg-[#1c1f2e] hover:bg-white/10 border border-white/10 rounded text-[10px] font-mono text-[#fcee0a] transition-all duration-200 hover:border-[#fcee0a]/50 hover:shadow-[0_0_10px_rgba(252,238,10,0.2)] uppercase whitespace-nowrap active:scale-95 active:bg-[#fcee0a]/10">
            Need Repairs
          </button>
        </div>
        <div className="flex items-end gap-2 p-3 relative">
          <button className="flex-shrink-0 size-10 flex items-center justify-center rounded bg-[#1c1f2e] text-white/60 hover:text-[#00f0ff] hover:bg-white/10 border border-white/10 hover:border-[#00f0ff]/30 transition-all active:scale-90 group active:shadow-[0_0_10px_rgba(0,240,255,0.15)]">
            <Plus size={24} className="transform group-hover:rotate-90 transition-transform duration-300" />
          </button>
          <div className="flex-1 min-h-[44px] relative bg-black/40 rounded border border-white/10 focus-within:border-[#0d33f2] focus-within:ring-1 focus-within:ring-[#0d33f2] focus-within:bg-black/60 focus-within:shadow-[0_0_15px_rgba(13,51,242,0.2)] transition-all duration-300">
            <textarea 
              className="w-full h-full bg-transparent text-white placeholder-white/20 text-sm p-2.5 resize-none border-none focus:ring-0 rounded max-h-24 no-scrollbar font-sans transition-colors outline-none" 
              placeholder="Encrypted transmission..." 
              rows={1}
            ></textarea>
            <div className="hidden absolute right-2 bottom-2 flex gap-0.5">
              <span className="w-1 h-1 bg-[#0d33f2] rounded-full animate-bounce"></span>
              <span className="w-1 h-1 bg-[#0d33f2] rounded-full animate-bounce delay-100"></span>
              <span className="w-1 h-1 bg-[#0d33f2] rounded-full animate-bounce delay-200"></span>
            </div>
          </div>
          <button className="flex-shrink-0 size-10 flex items-center justify-center rounded bg-[#0d33f2] text-white shadow-[0_0_15px_rgba(13,51,242,0.4)] hover:shadow-[0_0_25px_rgba(13,51,242,0.7)] hover:bg-blue-600 border border-[#0d33f2]/50 transition-all duration-200 active:scale-90 active:translate-y-0.5 group">
            <Send size={20} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
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