import React, { useState } from 'react';
import { Truck, ShoppingBag, Map, Users, User, ArrowLeft, Star, Zap, DollarSign, Wallet, LayoutGrid } from 'lucide-react';

interface ShopProps {
  onBack: () => void;
}

export const Shop: React.FC<ShopProps> = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState('Vehicles');

  const handlePurchase = (item: string, cost: string) => {
    // Em produção, isto chamaria o backend/contexto global
    if (confirm(`Deseja comprar ${item} por ${cost}?`)) {
        alert("Compra efetuada com sucesso! O item foi adicionado ao seu inventário.");
    }
  };

  const handleViewAll = () => {
      alert("A carregar catálogo completo...");
  };

  return (
    <div className="bg-[#101322] text-white font-display overflow-x-hidden selection:bg-[#0d33f2] selection:text-white flex flex-col h-full w-full relative pb-[90px]">
        
        {/* Sticky Header */}
        <div className="sticky top-0 z-40 bg-[#101322]/95 backdrop-blur-md border-b border-white/5 shadow-lg shadow-black/40">
            <div className="flex items-center justify-between px-4 pt-4 pb-2">
                <div className="flex items-center gap-2">
                    <button onClick={onBack} className="text-white/70 hover:text-white transition-colors">
                        <ArrowLeft size={24} />
                    </button>
                    <div className="flex items-center gap-2">
                        <Truck size={24} className="text-[#0d33f2]" />
                        <h2 className="text-xl font-bold tracking-wide uppercase bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">RodaVO Store</h2>
                    </div>
                </div>
                <button className="flex items-center justify-center w-10 h-10 rounded-full bg-[#1a1d2d] border border-white/10 relative hover:bg-white/5 transition-colors">
                    <span className="absolute top-2 right-2 w-2 h-2 bg-[#0d33f2] rounded-full animate-pulse"></span>
                    <ShoppingBag size={20} />
                </button>
            </div>

            <div className="grid grid-cols-2 gap-3 px-4 pb-4">
                <div className="flex flex-col gap-1 rounded-xl bg-[#1a1d2d] border border-white/5 p-3 relative overflow-hidden group">
                    <div className="absolute right-0 top-0 p-2 opacity-10 group-hover:opacity-20 transition-opacity">
                        <DollarSign size={32} className="text-[#4ade80]" />
                    </div>
                    <p className="text-slate-400 text-[10px] font-bold uppercase tracking-wider">Cash Balance</p>
                    <p className="text-white text-lg font-bold tracking-tight text-[#4ade80]">$245,000</p>
                </div>
                <div className="flex flex-col gap-1 rounded-xl bg-[#1a1d2d] border border-white/5 p-3 relative overflow-hidden group">
                    <div className="absolute right-0 top-0 p-2 opacity-10 group-hover:opacity-20 transition-opacity">
                        <Wallet size={32} className="text-[#facc15]" />
                    </div>
                    <div className="flex justify-between items-center w-full">
                        <p className="text-slate-400 text-[10px] font-bold uppercase tracking-wider">R-Coins</p>
                        <button className="bg-[#facc15] text-black text-[10px] font-bold px-1.5 py-0.5 rounded flex items-center shadow-lg shadow-[#facc15]/20 hover:bg-yellow-400 transition-colors">+ Add</button>
                    </div>
                    <p className="text-white text-lg font-bold tracking-tight text-[#facc15]">1,200 RC</p>
                </div>
            </div>

            <div className="px-4">
                <div className="flex border-b border-white/10">
                    {['Best Sellers', 'Vehicles', 'Customs'].map((tab) => (
                        <button 
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`flex-1 pb-3 pt-2 text-center border-b-2 font-medium text-sm tracking-wide transition-colors relative ${
                                activeTab === tab 
                                ? 'border-[#0d33f2] text-white font-bold' 
                                : 'border-transparent text-slate-400 hover:text-slate-200'
                            }`}
                        >
                            {tab}
                            {activeTab === tab && <div className="absolute bottom-0 left-0 w-full h-32 bg-[#0d33f2]/20 blur-[20px] -z-10"></div>}
                        </button>
                    ))}
                </div>
            </div>
        </div>

        <main className="flex flex-col gap-6 pt-6 overflow-y-auto no-scrollbar">
            {/* Featured VIP Pass */}
            <section className="px-4">
                <div className="relative w-full rounded-2xl overflow-hidden border border-yellow-500/30 shadow-[0_0_20px_rgba(234,179,8,0.15)] group bg-[#161202]">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#1a1500] via-[#2d2200] to-yellow-900/20"></div>
                    <div className="absolute -right-10 -top-10 w-40 h-40 bg-yellow-500/10 blur-[50px] rounded-full"></div>
                    <div className="relative p-5 flex flex-col">
                        <div className="flex items-start justify-between mb-4">
                            <div>
                                <div className="flex items-center gap-2 mb-1">
                                    <span className="bg-yellow-500/20 text-yellow-400 border border-yellow-500/40 text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">Most Popular</span>
                                </div>
                                <h2 className="text-2xl font-black text-white uppercase tracking-wide italic leading-none">VIP Pass <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-600">Mensal</span></h2>
                            </div>
                            <div className="p-2 rounded-full bg-gradient-to-b from-yellow-400/20 to-yellow-600/5 border border-yellow-500/50 shadow-[0_0_15px_rgba(234,179,8,0.2)]">
                                <Star size={24} className="text-yellow-400 fill-current drop-shadow-[0_0_5px_rgba(234,179,8,0.8)]" />
                            </div>
                        </div>
                        <div className="grid grid-cols-3 gap-2 w-full mb-5">
                            <div className="flex flex-col items-center gap-1 p-2 rounded-lg bg-black/40 border border-white/5 backdrop-blur-sm">
                                <Zap size={18} className="text-yellow-400" />
                                <span className="text-[10px] text-slate-300 font-bold leading-tight text-center">2x XP<br/>per km</span>
                            </div>
                            <div className="flex flex-col items-center gap-1 p-2 rounded-lg bg-black/40 border border-white/5 backdrop-blur-sm">
                                <Truck size={18} className="text-yellow-400" />
                                <span className="text-[10px] text-slate-300 font-bold leading-tight text-center">Unlimited<br/>Slots</span>
                            </div>
                            <div className="flex flex-col items-center gap-1 p-2 rounded-lg bg-black/40 border border-white/5 backdrop-blur-sm">
                                <Star size={18} className="text-yellow-400" />
                                <span className="text-[10px] text-slate-300 font-bold leading-tight text-center">Golden<br/>Icon</span>
                            </div>
                        </div>
                        <button 
                            onClick={() => handlePurchase('VIP Pass Mensal', '500 RC')}
                            className="w-full py-3 rounded-xl bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-black font-black text-sm uppercase tracking-wide shadow-lg shadow-yellow-500/20 active:scale-[0.98] transition-all flex items-center justify-center gap-2 group-hover:shadow-yellow-500/40"
                        >
                            <span>Purchase for 500</span>
                            <Wallet size={16} />
                            <span className="text-[10px] font-bold text-black/60 bg-black/10 px-1.5 py-0.5 rounded ml-1">(~€4.90)</span>
                        </button>
                    </div>
                </div>
            </section>

            {/* R-Coin Packs */}
            <section className="px-4">
                <div className="flex items-center justify-between mb-3">
                    <h3 className="text-white font-bold text-lg flex items-center gap-2">
                        <Wallet size={20} className="text-[#facc15]" />
                        R-Coin Packs
                    </h3>
                    <span className="text-[10px] text-slate-400 font-bold bg-[#1a1d2d] px-2 py-1 rounded border border-white/5 uppercase">Instant Delivery</span>
                </div>
                <div className="grid grid-cols-2 gap-3">
                    <button 
                        onClick={() => handlePurchase('Starter Pack (500 RC)', '€4.90')}
                        className="bg-[#1a1d2d] p-4 rounded-xl border border-white/5 hover:border-[#facc15]/50 relative overflow-hidden group flex flex-col items-center text-center transition-all active:scale-[0.98]"
                    >
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#facc15]/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <div className="w-14 h-14 rounded-full bg-black/40 flex items-center justify-center mb-2 border border-white/5 shadow-inner relative">
                            <Wallet size={28} className="text-[#facc15]" />
                        </div>
                        <p className="text-white font-black text-xl leading-none mb-1">500 <span className="text-sm font-bold text-[#facc15]">RC</span></p>
                        <p className="text-slate-500 text-[10px] uppercase font-bold tracking-wider mb-4">Starter Pack</p>
                        <div className="w-full py-2 bg-white/5 group-hover:bg-[#facc15] group-hover:text-black text-white border border-white/10 group-hover:border-[#facc15] font-bold rounded transition-colors text-sm">
                            €4.90
                        </div>
                    </button>
                    <button 
                        onClick={() => handlePurchase('Trader Sack (2750 RC)', '€24.90')}
                        className="bg-[#1a1d2d] p-4 rounded-xl border border-[#facc15]/30 hover:border-[#facc15]/80 relative overflow-hidden group flex flex-col items-center text-center transition-all active:scale-[0.98] shadow-[0_0_15px_rgba(250,204,21,0.05)]"
                    >
                        <div className="absolute top-0 right-0 bg-[#facc15] text-black text-[9px] font-bold px-2 py-1 rounded-bl-lg">POPULAR</div>
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#facc15]/10 opacity-30 group-hover:opacity-50 transition-opacity"></div>
                        <div className="w-14 h-14 rounded-full bg-black/40 flex items-center justify-center mb-2 border border-white/5 shadow-inner relative">
                            <LayoutGrid size={28} className="text-[#facc15]" />
                            <div className="absolute -right-1 -bottom-1 bg-green-500 text-white text-[8px] font-bold px-1 rounded border border-black">+10%</div>
                        </div>
                        <p className="text-white font-black text-xl leading-none mb-1">2,750 <span className="text-sm font-bold text-[#facc15]">RC</span></p>
                        <p className="text-slate-500 text-[10px] uppercase font-bold tracking-wider mb-4">Trader Sack</p>
                        <div className="w-full py-2 bg-[#facc15] text-black border border-[#facc15] font-bold rounded transition-colors text-sm hover:bg-yellow-400">
                            €24.90
                        </div>
                    </button>
                </div>
            </section>

            {/* Featured Arrivals */}
            <section className="px-4">
                <div className="flex items-center justify-between mb-3">
                    <h3 className="text-white font-bold text-lg">Featured Arrivals</h3>
                    <button onClick={handleViewAll} className="text-[#0d33f2] text-xs font-bold uppercase tracking-wider hover:text-[#0b29c2]">View all</button>
                </div>
                <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2">
                    <div className="min-w-[260px] group bg-[#1a1d2d] rounded-xl border border-white/5 overflow-hidden flex flex-col hover:border-[#facc15]/50 transition-colors duration-300 relative shadow-lg">
                        <div className="absolute top-2 left-2 z-10 px-2 py-0.5 rounded bg-[#facc15]/20 backdrop-blur-sm border border-[#facc15]/30">
                            <span className="text-[10px] font-bold text-[#facc15] uppercase tracking-wider flex items-center gap-1">
                                <Star size={10} /> Premium
                            </span>
                        </div>
                        <div className="aspect-[16/9] bg-black/50 relative overflow-hidden">
                            <div className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-500" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDF8hB1JGPbotfB38P-nNNYQYlrUocWBa4qwyucyDliJQ9eYWdTAK_diUrC5OE1DMp3UeqR30wp9F2SMEFuAJwVZ0z4fE9UiMTguN0sEWf22_HcXv5hwTmjE6OLDWkvjf2xu2LQdaxGU1SNevMIbdx2_Dattc_zq7Q2agHCXTIxPsyAZFgp5ugKV7xP4Hcqj7btmb5oe87Xvgs5Bsd2ql3adKAT-0j96eCFheMxzp2LrGIifZLHE7AT9g0E2R1--68cIhuz5-FkREU")' }}></div>
                        </div>
                        <div className="p-3 flex flex-col flex-1">
                            <h4 className="text-white font-bold text-base leading-tight">Cyber-Hauler X1</h4>
                            <div className="flex items-center gap-3 mt-2 mb-3">
                                <span className="text-slate-400 text-xs flex items-center gap-1"><Zap size={10} /> Class S</span>
                                <span className="text-slate-400 text-xs border-l border-white/10 pl-3">Heavy Transport</span>
                            </div>
                            <button 
                                onClick={() => handlePurchase('Cyber-Hauler X1', '2,000 RC')}
                                className="w-full py-2 rounded bg-[#facc15] text-black text-sm font-bold flex items-center justify-center gap-1 shadow-lg shadow-[#facc15]/20 hover:bg-yellow-400 transition-all active:scale-95"
                            >
                                2,000 <span className="text-xs">RC</span>
                            </button>
                        </div>
                    </div>
                    
                    <div className="min-w-[260px] group bg-[#1a1d2d] rounded-xl border border-white/5 overflow-hidden flex flex-col hover:border-[#4ade80]/50 transition-colors duration-300 relative shadow-lg">
                        <div className="absolute top-2 left-2 z-10 px-2 py-0.5 rounded bg-black/60 backdrop-blur-sm border border-white/10">
                            <span className="text-[10px] font-bold text-white uppercase tracking-wider">
                                Standard
                            </span>
                        </div>
                        <div className="aspect-[16/9] bg-black/50 relative overflow-hidden">
                            <div className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-500" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAOVaXh9LiV0VNgFd46tdMqGglwx0EYr5UGWHtiQAV4xcxRIYgF7r1SLvC_GxMcXKisoI9IuIjNGynYgl0xkUACWxojb_s5KhbnV-DCe9zJ63uj0AHHWCF1oRMXJEAEf_sVwG_fs8rhKMqXoeqW-1iTGv-pj-x6Aeyvur5DMw-PA0hbLxi57ux1oeW_qfeCkn9ErSa6DT4Xdoji98lw2_zhHHOmdDm1Miw5-6mQGEGeAC1XMrVFOHk3SEtMRibFpp8NNfRn3tGNuLE")' }}></div>
                        </div>
                        <div className="p-3 flex flex-col flex-1">
                            <h4 className="text-white font-bold text-base leading-tight">Street Viper</h4>
                            <div className="flex items-center gap-3 mt-2 mb-3">
                                <span className="text-slate-400 text-xs flex items-center gap-1"><Zap size={10} /> 280 km/h</span>
                                <span className="text-slate-400 text-xs border-l border-white/10 pl-3">Sport</span>
                            </div>
                            <button 
                                onClick={() => handlePurchase('Street Viper', '$50,000')}
                                className="w-full py-2 rounded bg-white/5 hover:bg-[#4ade80]/10 border border-white/10 hover:border-[#4ade80]/50 text-[#4ade80] text-sm font-bold flex items-center justify-center gap-1 transition-all active:scale-95"
                            >
                                $50,000
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </main>

        <nav className="fixed bottom-0 w-full bg-[#15171e] dark:bg-[#0f1119] border-t border-white/5 z-50 h-[80px] pb-[10px] flex items-center justify-around px-2 backdrop-blur-lg bg-opacity-95">
            <button className="flex flex-col items-center gap-1 w-14 group cursor-pointer" onClick={() => alert("Garagem em manutenção.")}>
                <Truck size={24} className="text-slate-500 group-hover:text-white transition-colors" />
                <span className="text-[10px] font-medium text-slate-500 group-hover:text-white transition-colors">Garage</span>
            </button>
            <button className="flex flex-col items-center gap-1 w-14 group cursor-pointer" onClick={onBack}>
                <Map size={24} className="text-slate-500 group-hover:text-white transition-colors" />
                <span className="text-[10px] font-medium text-slate-500 group-hover:text-white transition-colors">Map</span>
            </button>
            <button className="flex flex-col items-center justify-center w-14 -mt-6 cursor-pointer">
                <div className="w-14 h-14 rounded-full bg-[#0d33f2] flex items-center justify-center shadow-[0_0_15px_rgba(13,51,242,0.5)] border-4 border-[#15171e] relative">
                    <ShoppingBag size={28} className="text-white" />
                    <span className="absolute -top-1 -right-1 w-3 h-3 bg-[#facc15] rounded-full border border-[#15171e]"></span>
                </div>
                <span className="text-[10px] font-bold text-white mt-1">Shop</span>
            </button>
            <button className="flex flex-col items-center gap-1 w-14 group cursor-pointer" onClick={() => alert("Social Hub disponível no menu principal.")}>
                <Users size={24} className="text-slate-500 group-hover:text-white transition-colors" />
                <span className="text-[10px] font-medium text-slate-500 group-hover:text-white transition-colors">Social</span>
            </button>
            <button className="flex flex-col items-center gap-1 w-14 group cursor-pointer" onClick={() => alert("Perfil disponível no menu principal.")}>
                <User size={24} className="text-slate-500 group-hover:text-white transition-colors" />
                <span className="text-[10px] font-medium text-slate-500 group-hover:text-white transition-colors">Profile</span>
            </button>
        </nav>
    </div>
  );
};