import React, { useState } from 'react';
import { ArrowLeft, Grid, Bell, Zap, Database, ArrowUp, Play, DollarSign, PenTool, Shield, BatteryCharging, Palette } from 'lucide-react';

interface InventoryProps {
  onBack: () => void;
}

export const Inventory: React.FC<InventoryProps> = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState('All');
  const [selectedItem, setSelectedItem] = useState<any | null>(null);

  const items = [
    { id: 1, name: 'Nitro Injection', type: 'Consumable • Boost', rarity: 'Rare', qty: 5, icon: Zap, color: 'text-white', image: 'https://images.unsplash.com/photo-1614726365723-49cfae968b56?q=80&w=300&auto=format&fit=crop', description: 'Advanced nitrous oxide system. Instantly boosts vehicle speed by 20% for 30s. WARNING: Engine overheat risk if used consecutively.' },
    { id: 2, name: 'Armor Plate', type: 'Part • Defense', rarity: 'Common', qty: 2, icon: Shield, color: 'text-gray-500', image: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=300&auto=format&fit=crop', description: 'Standard protective plating. Reduces damage taken from minor impacts by 15%.' },
    { id: 3, name: 'Turbo Charger', type: 'Part • Speed', rarity: 'Legendary', qty: 1, icon: ArrowUp, color: 'text-yellow-500', image: 'https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=300&auto=format&fit=crop', description: 'High-performance turbocharger. Significantly increases top speed and acceleration. Legendary rarity.' },
    { id: 4, name: 'Repair Kit', type: 'Consumable • Heal', rarity: 'Common', qty: 10, icon: WrenchIcon, color: 'text-gray-500', image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=300&auto=format&fit=crop', description: 'Basic repair tools. Restores 25% of vehicle durability.' },
    { id: 5, name: 'Neon Decal', type: 'Skin • Cyber Vibe', rarity: 'Epic', qty: 1, icon: Palette, color: 'text-purple-500', image: 'https://images.unsplash.com/photo-1563205764-6e9273c246f9?q=80&w=300&auto=format&fit=crop', description: 'Glowing neon skin for your vehicle. Adds style points.' },
    { id: 6, name: 'Energy Cell', type: 'Fuel • Refill', rarity: 'Common', qty: 20, icon: BatteryCharging, color: 'text-gray-500', image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=300&auto=format&fit=crop', description: 'Standard energy cell for electric vehicles. Refills 10% battery.' },
  ];

  // Helper for Lucide icon in items array
  function WrenchIcon(props: any) { return <PenTool {...props} /> }

  return (
    <div className="bg-[#050508] font-body text-[#e2e8f0] overflow-hidden antialiased h-screen flex flex-col w-full">
        <style>{`
            .clip-corner-br { clip-path: polygon(100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 0); }
            .glass-panel { background: rgba(15, 17, 26, 0.95); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); }
            @keyframes scan {
                0% { transform: translateY(-100%); opacity: 0; }
                50% { opacity: 1; }
                100% { transform: translateY(100%); opacity: 0; }
            }
        `}</style>

        <header className="sticky top-0 z-30 flex items-center justify-between px-5 py-3 bg-[#050508]/95 backdrop-blur-md border-b border-[#2a2e42]/50">
            <button onClick={onBack} className="group flex size-10 items-center justify-center rounded-lg border border-[#2a2e42] bg-[#0f111a]/50 text-[#94a3b8] hover:text-white hover:border-[#2563eb]/50 hover:shadow-[0_0_10px_rgba(37,99,235,0.3)] transition-all active:scale-95 active:bg-[#2563eb]/10">
                <ArrowLeft size={20} className="group-hover:-translate-x-0.5 transition-transform" />
            </button>
            <div className="flex flex-col items-center justify-center">
                <span className="text-[10px] font-display font-bold tracking-[0.2em] text-[#2563eb] uppercase opacity-80 leading-none mb-1">Gamification</span>
                <h1 className="text-xl font-display font-bold uppercase tracking-widest text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.15)] leading-none">
                    Inventory
                </h1>
            </div>
            <button className="group relative flex size-10 items-center justify-center rounded-lg border border-[#2a2e42] bg-[#0f111a]/50 text-[#94a3b8] hover:text-white hover:border-[#2563eb]/50 transition-all active:scale-95">
                <Bell size={20} />
                <span className="absolute top-2.5 right-2.5 size-1.5 bg-[#06b6d4] rounded-full shadow-[0_0_6px_#06b6d4] animate-pulse"></span>
            </button>
        </header>

        <main className="flex-1 overflow-y-auto pb-48 no-scrollbar">
            <div className="px-5 pt-6 pb-2">
                <div className="grid grid-cols-2 gap-3">
                    <div className="relative overflow-hidden rounded-xl bg-[#131620] border border-[#2a2e42] p-3.5 flex flex-col justify-between group hover:border-[#2563eb]/30 transition-colors cursor-default">
                        <div className="absolute right-0 top-0 p-2 opacity-[0.05] group-hover:opacity-[0.1] transition-opacity">
                            <DollarSign size={48} />
                        </div>
                        <div className="flex items-center gap-2 mb-2">
                            <div className="size-6 rounded bg-[#2563eb]/10 flex items-center justify-center border border-[#2563eb]/20">
                                <DollarSign size={14} className="text-[#2563eb]" />
                            </div>
                            <span className="text-[#94a3b8] text-[10px] font-display font-bold tracking-widest uppercase">Balance</span>
                        </div>
                        <div className="text-white text-xl font-display font-bold tracking-wide group-hover:text-[#2563eb] transition-colors">$12,450</div>
                        <div className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-[#2563eb]/80 to-transparent"></div>
                    </div>
                    <div className="relative overflow-hidden rounded-xl bg-[#131620] border border-[#2a2e42] p-3.5 flex flex-col justify-between group hover:border-[#a855f7]/30 transition-colors cursor-default">
                        <div className="absolute right-0 top-0 p-2 opacity-[0.05] group-hover:opacity-[0.1] transition-opacity">
                            <Database size={48} />
                        </div>
                        <div className="flex items-center gap-2 mb-2">
                            <div className="size-6 rounded bg-[#a855f7]/10 flex items-center justify-center border border-[#a855f7]/20">
                                <Database size={14} className="text-[#a855f7]" />
                            </div>
                            <span className="text-[#94a3b8] text-[10px] font-display font-bold tracking-widest uppercase">R-Coins</span>
                        </div>
                        <div className="text-white text-xl font-display font-bold tracking-wide group-hover:text-[#a855f7] transition-colors">500 RC</div>
                        <div className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-[#a855f7]/80 to-transparent"></div>
                    </div>
                </div>
            </div>

            <div className="sticky top-0 z-20 bg-[#050508]/95 backdrop-blur-xl pt-4 pb-4 px-5 border-b border-[#2a2e42]/30">
                <div className="flex gap-3 overflow-x-auto no-scrollbar items-center">
                    {['All Items', 'Equipment', 'Consumables', 'Materials'].map(tab => (
                        <button 
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`flex items-center gap-2 px-4 py-1.5 rounded-full border transition-all active:scale-95 whitespace-nowrap ${
                                activeTab === tab 
                                ? 'bg-[#2563eb]/10 border-[#2563eb] text-[#2563eb] shadow-[0_0_10px_rgba(37,99,235,0.3)]' 
                                : 'bg-[#1a1d2d] border-[#2a2e42] text-[#94a3b8] hover:text-white hover:border-[#2a2e42]/80'
                            }`}
                        >
                            <span className="text-xs font-display font-bold uppercase tracking-wide">{tab}</span>
                        </button>
                    ))}
                </div>
            </div>

            <div className="px-5 grid grid-cols-2 gap-3 mt-4">
                {items.map((item) => (
                    <button 
                        key={item.id}
                        onClick={() => setSelectedItem(item)}
                        className={`relative group clip-corner-br bg-[#0f111a] border p-0 text-left transition-all duration-200 active:scale-[0.98] ${item.rarity === 'Rare' ? 'border-[#2563eb]/60 shadow-[0_0_10px_rgba(37,99,235,0.3)]' : item.rarity === 'Legendary' ? 'border-yellow-500/30 hover:border-yellow-500/60' : item.rarity === 'Epic' ? 'border-[#a855f7]/30 hover:border-[#a855f7]/60' : 'border-[#2a2e42] hover:bg-[#1a1d2d]/30'}`}
                    >
                        <div className={`absolute top-2 left-2 z-10 backdrop-blur-sm border px-1.5 rounded text-[9px] font-bold uppercase tracking-wider ${
                            item.rarity === 'Rare' ? 'bg-[#2563eb]/20 border-[#2563eb]/30 text-[#2563eb]' :
                            item.rarity === 'Legendary' ? 'bg-yellow-500/10 border-yellow-500/30 text-yellow-500' :
                            item.rarity === 'Epic' ? 'bg-[#a855f7]/10 border-[#a855f7]/30 text-[#a855f7]' :
                            'bg-[#2a2e42]/50 border-white/5 text-[#94a3b8]'
                        }`}>
                            {item.rarity}
                        </div>
                        <div className="p-2 pb-0">
                            <div className={`relative aspect-[4/3] w-full rounded-lg bg-[#0b0c15] overflow-hidden flex items-center justify-center border ${item.rarity === 'Rare' ? 'border-[#2563eb]/10' : 'border-white/5'}`}>
                                <div className="absolute inset-0 bg-cover bg-center opacity-50 mix-blend-overlay group-hover:scale-110 transition-transform duration-500" style={{ backgroundImage: `url(${item.image})` }}></div>
                                <item.icon size={36} className={`${item.color} z-10 relative`} />
                                <div className="absolute bottom-0 right-0 p-1">
                                    <div className="bg-[#0f111a]/80 backdrop-blur px-1.5 py-0.5 rounded text-[10px] font-display font-bold text-white border border-white/10">x{item.qty}</div>
                                </div>
                            </div>
                        </div>
                        <div className="p-3">
                            <h3 className={`text-sm font-display font-bold leading-tight truncate transition-colors ${item.rarity === 'Rare' ? 'text-white group-hover:text-[#2563eb]' : 'text-[#e2e8f0] group-hover:text-white'}`}>{item.name}</h3>
                            <p className="text-[10px] text-[#94a3b8] mt-1 truncate">{item.type}</p>
                        </div>
                    </button>
                ))}
            </div>
        </main>

        {selectedItem && (
            <div className="absolute bottom-0 left-0 w-full z-40">
                <div className="h-12 w-full bg-gradient-to-t from-[#050508] to-transparent pointer-events-none"></div>
                <div className="glass-panel border-t border-[#2563eb]/30 rounded-t-[32px] shadow-[0_-10px_40px_rgba(0,0,0,0.6)] p-6 pb-8 relative overflow-hidden ring-1 ring-white/5 transition-transform animate-in slide-in-from-bottom duration-300">
                    <button 
                        onClick={() => setSelectedItem(null)}
                        className="absolute top-4 right-4 z-50 p-2 text-[#94a3b8]/50 hover:text-white hover:bg-white/5 rounded-full transition-all active:scale-90"
                    >
                        <ArrowLeft size={20} className="rotate-[-90deg]" />
                    </button>
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#2563eb]/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none mix-blend-screen"></div>
                    <div className="absolute top-full left-0 w-32 h-32 bg-[#a855f7]/20 rounded-full blur-[50px] -translate-y-full -translate-x-1/4 pointer-events-none mix-blend-screen"></div>
                    <div className="mx-auto mb-6 h-1 w-12 rounded-full bg-white/20"></div>
                    
                    <div className="flex gap-5 items-start relative z-10">
                        <div className="size-24 shrink-0 rounded-2xl bg-[#0b0c15] border border-[#2563eb]/30 flex items-center justify-center shadow-[0_0_10px_rgba(37,99,235,0.3)] relative overflow-hidden group">
                            <div className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-overlay" style={{ backgroundImage: `url(${selectedItem.image})` }}></div>
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#2563eb]/10 to-transparent translate-y-[-100%] animate-[scan_3s_ease-in-out_infinite]"></div>
                            <selectedItem.icon size={48} className={`${selectedItem.color} drop-shadow-[0_0_12px_rgba(37,99,235,0.8)] z-10`} />
                        </div>
                        <div className="flex-1 min-w-0 pt-1">
                            <div className="flex justify-between items-start">
                                <div className="w-full">
                                    <div className="flex items-center justify-between mb-1">
                                        <span className={`text-[10px] font-bold border px-2 py-0.5 rounded uppercase tracking-wider ${
                                            selectedItem.rarity === 'Rare' ? 'bg-[#2563eb]/20 text-[#2563eb] border-[#2563eb]/30' : 
                                            'bg-[#2a2e42]/50 text-[#94a3b8] border-white/5'
                                        }`}>{selectedItem.rarity}</span>
                                        <span className="text-[10px] text-[#94a3b8] font-display tracking-wider uppercase">Qty: {selectedItem.qty}</span>
                                    </div>
                                    <h2 className="text-2xl font-display font-bold text-white uppercase tracking-wide leading-none mb-2 drop-shadow-md">{selectedItem.name}</h2>
                                    <div className="flex items-center gap-2 text-xs text-[#94a3b8]">
                                        <Grid size={14} />
                                        <span>{selectedItem.type.split('•')[0].trim()} Item</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-5 relative z-10 bg-[#0f111a]/40 rounded-xl p-3 border border-white/5">
                        <p className="text-sm text-gray-300 leading-relaxed font-light">
                            {selectedItem.description}
                        </p>
                    </div>

                    <div className="mt-6 flex gap-3 relative z-10">
                        <button className="flex-1 h-12 rounded-xl bg-[#2a2e42]/40 hover:bg-[#2a2e42]/60 text-[#94a3b8] hover:text-white font-display font-bold text-sm tracking-wide border border-white/5 transition-all uppercase flex items-center justify-center gap-2 active:scale-95">
                            <DollarSign size={18} />
                            Sell
                        </button>
                        <button className="flex-[2] h-12 rounded-xl bg-gradient-to-r from-[#2563eb] to-blue-600 hover:from-blue-500 hover:to-blue-500 text-white font-display font-bold text-sm tracking-widest shadow-[0_0_10px_rgba(37,99,235,0.3)] active:scale-[0.98] transition-all uppercase flex items-center justify-center gap-2 border-t border-blue-400/50 group relative overflow-hidden">
                            <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-12"></div>
                            <Play size={22} />
                            Use Item
                        </button>
                    </div>
                </div>
            </div>
        )}
    </div>
  );
};