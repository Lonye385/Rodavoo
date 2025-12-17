import React, { useState } from 'react';
import { 
  ArrowLeft, Search, Activity, MessageCircle, Bug, Phone, 
  Ticket, ChevronRight, HelpCircle, FileText, ChevronDown
} from 'lucide-react';

interface SupportCenterProps {
  onBack: () => void;
}

export const SupportCenter: React.FC<SupportCenterProps> = ({ onBack }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    { id: 1, q: "Como reportar um radar móvel?", a: "Toque no botão 'Reportar' (+) na vista de mapa e selecione 'Radar Móvel'. A sua localização será registada automaticamente." },
    { id: 2, q: "O modo offline funciona em todo o lado?", a: "Sim, se descarregou os mapas da região previamente. O GPS continua a funcionar sem dados móveis." },
    { id: 3, q: "Como ganho pontos RodaVO?", a: "Ganha pontos ao conduzir com a app, reportar incidentes confirmados por outros e completar eventos diários." },
    { id: 4, q: "Problemas com a subscrição Premium", a: "Verifique se a sua conta Google Play está ativa. Se o problema persistir, abra um ticket abaixo." },
  ];

  return (
    <div className="h-full w-full bg-[#101422] text-white flex flex-col relative overflow-hidden font-sans">
        {/* Header */}
        <header className="flex items-center bg-[#101422]/95 sticky top-0 z-30 backdrop-blur-md p-4 pb-2 border-b border-white/5">
            <button 
                onClick={onBack}
                className="text-white flex size-12 shrink-0 items-center justify-start cursor-pointer hover:text-[#0d46f2] transition-colors"
            >
                <ArrowLeft size={24} />
            </button>
            <h2 className="text-white text-lg font-bold leading-tight tracking-wide flex-1 text-center pr-12 uppercase">
                Centro de Suporte
            </h2>
        </header>

        {/* Scrollable Content */}
        <main className="flex-1 overflow-y-auto pb-6 glass-scroll">
            {/* Search Bar */}
            <div className="px-4 py-4">
                <label className="flex flex-col w-full">
                    <div className="flex w-full items-stretch rounded-lg h-12 relative group">
                        <div className="text-gray-400 absolute left-4 top-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none group-focus-within:text-[#0d46f2] transition-colors">
                            <Search size={20} />
                        </div>
                        <input 
                            className="flex w-full rounded-lg text-white focus:outline-none border border-white/10 bg-[#1b1e27] focus:border-[#0d46f2]/50 focus:ring-1 focus:ring-[#0d46f2]/50 placeholder:text-gray-500 pl-11 pr-4 py-3 text-base font-normal leading-normal transition-all" 
                            placeholder="Pesquisar problemas, erros ou guias..." 
                        />
                    </div>
                </label>
            </div>

            {/* System Status Card */}
            <div className="px-4 pb-2">
                <div className="flex items-center justify-between gap-4 rounded-lg bg-[#1b1e27] border-l-4 border-l-green-500 p-4 border-y border-r border-y-white/5 border-r-white/5 shadow-lg">
                    <div className="flex flex-col gap-1 flex-1">
                        <div className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)] animate-pulse"></div>
                            <p className="text-white text-sm font-bold tracking-wide uppercase">Sistema Operacional</p>
                        </div>
                        <p className="text-gray-400 text-xs font-normal leading-normal">Ping: 24ms | Sem falhas reportadas.</p>
                    </div>
                    <div className="text-gray-500">
                        <Activity size={24} />
                    </div>
                </div>
            </div>

            {/* Quick Actions Grid */}
            <div className="pt-6 px-4">
                <h2 className="text-sm font-bold tracking-widest uppercase mb-4 text-gray-400">Ações Rápidas</h2>
                <div className="grid grid-cols-2 gap-3">
                    <button className="flex flex-col gap-3 rounded-lg border border-white/5 bg-[#1b1e27] p-4 items-start hover:border-[#0d46f2]/30 hover:bg-[#1b1e27]/80 transition-all active:scale-95 group">
                        <div className="p-2 rounded bg-[#0d46f2]/10 text-[#0d46f2] group-hover:bg-[#0d46f2] group-hover:text-white transition-colors">
                            <MessageCircle size={24} />
                        </div>
                        <div className="text-left">
                            <h2 className="text-white text-sm font-bold leading-tight">Iniciar Chat</h2>
                            <span className="text-[10px] text-green-400 font-medium">Espera: &lt; 2 min</span>
                        </div>
                    </button>
                    
                    <button className="flex flex-col gap-3 rounded-lg border border-white/5 bg-[#1b1e27] p-4 items-start hover:border-[#fa383e]/30 hover:bg-[#1b1e27]/80 transition-all active:scale-95 group">
                        <div className="p-2 rounded bg-[#fa383e]/10 text-[#fa383e] group-hover:bg-[#fa383e] group-hover:text-white transition-colors">
                            <Bug size={24} />
                        </div>
                        <div className="text-left">
                            <h2 className="text-white text-sm font-bold leading-tight">Reportar Bug</h2>
                            <span className="text-[10px] text-gray-500 font-medium">Via logs automáticos</span>
                        </div>
                    </button>

                    <button className="flex flex-col gap-3 rounded-lg border border-white/5 bg-[#1b1e27] p-4 items-start hover:border-white/20 hover:bg-[#1b1e27]/80 transition-all active:scale-95 group">
                        <div className="p-2 rounded bg-white/5 text-white group-hover:bg-white group-hover:text-black transition-colors">
                            <Phone size={24} />
                        </div>
                        <div className="text-left">
                            <h2 className="text-white text-sm font-bold leading-tight">Ligar Suporte</h2>
                            <span className="text-[10px] text-gray-500 font-medium">Premium Only</span>
                        </div>
                    </button>

                    <button className="flex flex-col gap-3 rounded-lg border border-white/5 bg-[#1b1e27] p-4 items-start hover:border-white/20 hover:bg-[#1b1e27]/80 transition-all active:scale-95 group">
                        <div className="p-2 rounded bg-white/5 text-white group-hover:bg-white group-hover:text-black transition-colors">
                            <Ticket size={24} />
                        </div>
                        <div className="text-left">
                            <h2 className="text-white text-sm font-bold leading-tight">Meus Tickets</h2>
                            <span className="text-[10px] text-gray-500 font-medium">0 Abertos</span>
                        </div>
                    </button>
                </div>
            </div>

            {/* FAQ Section */}
            <div className="pt-8 px-4 pb-8">
                <h2 className="text-sm font-bold tracking-widest uppercase mb-4 text-gray-400">Perguntas Frequentes</h2>
                <div className="flex flex-col gap-2">
                    {faqs.map((faq) => (
                        <div key={faq.id} className="rounded-lg border border-white/5 bg-[#1b1e27] overflow-hidden">
                            <button 
                                onClick={() => setOpenFaq(openFaq === faq.id ? null : faq.id)}
                                className="flex items-center justify-between w-full p-4 text-left hover:bg-white/5 transition-colors"
                            >
                                <span className="text-sm font-medium text-white">{faq.q}</span>
                                <ChevronDown 
                                    size={16} 
                                    className={`text-gray-500 transition-transform duration-300 ${openFaq === faq.id ? 'rotate-180' : ''}`} 
                                />
                            </button>
                            {openFaq === faq.id && (
                                <div className="px-4 pb-4 pt-0 text-sm text-gray-400 leading-relaxed border-t border-white/5 mt-2 pt-3">
                                    {faq.a}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
                <div className="mt-4 flex justify-center">
                    <button className="text-[#0d46f2] text-sm font-bold hover:text-white transition-colors flex items-center gap-1">
                        Ver todos os artigos <ChevronRight size={16} />
                    </button>
                </div>
            </div>
            
            <div className="flex flex-col items-center gap-2 pb-8 pt-4 border-t border-white/5 mx-4">
                <p className="text-gray-600 text-[10px] font-mono uppercase tracking-widest">RodaVO Support Systems</p>
                <div className="flex gap-4">
                     <span className="text-xs text-gray-500 hover:text-white cursor-pointer transition-colors">Privacidade</span>
                     <span className="text-xs text-gray-500 hover:text-white cursor-pointer transition-colors">Termos</span>
                     <span className="text-xs text-gray-500 hover:text-white cursor-pointer transition-colors">Comunidade</span>
                </div>
            </div>
        </main>
    </div>
  );
};