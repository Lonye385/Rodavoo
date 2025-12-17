import React, { useState } from 'react';
import { 
  ArrowLeft, Shield, Link as LinkIcon, Gauge, CloudDownload, 
  Bell, Map as MapIcon, Languages, HelpCircle, FileText, LogOut,
  ChevronRight, ExternalLink
} from 'lucide-react';

interface SettingsProps {
  onBack: () => void;
  onOpenSupport: () => void;
}

export const Settings: React.FC<SettingsProps> = ({ onBack, onOpenSupport }) => {
  const [netrunnerMode, setNetrunnerMode] = useState(true);
  const [dataSaver, setDataSaver] = useState(false);
  const [notifications, setNotifications] = useState(true);

  const handleFeatureNotAvailable = (feature: string) => {
    alert(`A funcionalidade '${feature}' estará disponível na próxima atualização do sistema.`);
  };

  const handleLogout = () => {
    if (confirm("Tem a certeza que deseja terminar a sessão e desligar do sistema RodaVO?")) {
        window.location.reload(); // Simula logout reiniciando a app
    }
  };

  return (
    <div className="h-full w-full bg-[#f5f6f8] dark:bg-[#050505] text-slate-900 dark:text-white overflow-y-auto glass-scroll pb-10">
      <div className="relative flex flex-col max-w-md mx-auto">
        
        {/* TopAppBar */}
        <div className="sticky top-0 z-10 flex items-center bg-[#f5f6f8] dark:bg-[#050505]/95 backdrop-blur-md p-4 border-b border-white/5">
          <button 
            onClick={onBack}
            className="text-slate-900 dark:text-white flex w-10 h-10 shrink-0 items-center justify-center rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
          >
            <ArrowLeft size={24} />
          </button>
          <h2 className="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-wider flex-1 text-center pr-10 uppercase">
            Definições
          </h2>
        </div>

        {/* ProfileHeader */}
        <div className="flex p-4 flex-col gap-6">
          <div className="bg-[#121212] rounded-xl p-4 border border-white/5 shadow-lg relative overflow-hidden group">
            {/* Subtle glow effect behind the card */}
            <div className="absolute -right-10 -top-10 w-32 h-32 bg-[#0d46f2]/20 rounded-full blur-[50px] pointer-events-none"></div>
            <div className="flex flex-col gap-4 relative z-10">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div 
                    className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-20 w-20 border-2 border-[#0d46f2]/50 shadow-[0_0_15px_rgba(13,70,242,0.3)]"
                    style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCSbOzdgXlqfV0stcsBN0MWyWO-IT9SsUO78rRDJ4a3fvgaYd1pEm-mX6OKLZOlbEy36ch69OP01bAlIFdt5Dwd9u_iuoA3PUtd4DoiOQohKuZkAhV_UIPLaz6W5DREBYcGCkmYIVtU-U0MY_5hSbc4B3Pw4mwFT-DlOMz-PBD6BF8lAnkytywYPd30XzbsKVl0Lr0qkLaoZt0LlnvfM9Ffh3t9rfm5-BxgtcGaOX-YBDXCk-s_M4H4RpaBeX4jSrvogEpbPkaMqu0")' }}
                  ></div>
                  <div className="absolute bottom-0 right-0 bg-[#0d46f2] text-[10px] font-bold px-1.5 py-0.5 rounded border border-[#050505] text-white">
                    LVL 54
                  </div>
                </div>
                <div className="flex flex-col justify-center flex-1 min-w-0">
                  <p className="text-slate-900 dark:text-white text-xl font-bold leading-tight tracking-tight truncate">
                    CyberRunner_99
                  </p>
                  <p className="text-[#9ca3ba] text-sm font-medium mt-1">
                    Rank: <span className="text-[#0d46f2]">Elite Navigator</span>
                  </p>
                </div>
              </div>
              <button 
                onClick={() => handleFeatureNotAvailable('Editar Perfil')}
                className="flex items-center justify-center w-full rounded-lg h-10 px-4 bg-[#1e2230] hover:bg-white/10 text-white text-sm font-bold tracking-wide transition-all border border-white/5 active:scale-[0.98]"
              >
                Editar Perfil
              </button>
            </div>
          </div>
        </div>

        {/* Section: Account */}
        <div className="flex flex-col">
          <h3 className="text-[#9ca3ba] text-xs font-bold tracking-[0.1em] px-6 pb-2 pt-2 uppercase">Conta</h3>
          <div className="mx-4 flex flex-col bg-[#121212] rounded-xl border border-white/5 overflow-hidden">
            <button 
              onClick={() => handleFeatureNotAvailable('Privacidade & Segurança')}
              className="flex items-center gap-4 p-4 hover:bg-[#1e2230] transition-colors w-full text-left group border-b border-white/5 last:border-0"
            >
              <div className="text-[#0d46f2] flex items-center justify-center rounded-lg bg-[#0d46f2]/10 shrink-0 w-10 h-10 group-hover:bg-[#0d46f2] group-hover:text-white transition-colors">
                <Shield size={22} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-slate-900 dark:text-white text-base font-medium truncate">Privacidade & Segurança</p>
              </div>
              <ChevronRight size={20} className="text-[#9ca3ba]" />
            </button>
            <button 
              onClick={() => handleFeatureNotAvailable('Contas Ligadas')}
              className="flex items-center gap-4 p-4 hover:bg-[#1e2230] transition-colors w-full text-left group"
            >
              <div className="text-[#0d46f2] flex items-center justify-center rounded-lg bg-[#0d46f2]/10 shrink-0 w-10 h-10 group-hover:bg-[#0d46f2] group-hover:text-white transition-colors">
                <LinkIcon size={22} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-slate-900 dark:text-white text-base font-medium truncate">Contas Ligadas</p>
              </div>
              <ChevronRight size={20} className="text-[#9ca3ba]" />
            </button>
          </div>
        </div>
        <div className="h-6"></div>

        {/* Section: Performance */}
        <div className="flex flex-col">
          <h3 className="text-[#9ca3ba] text-xs font-bold tracking-[0.1em] px-6 pb-2 pt-2 uppercase flex items-center gap-2">
            Sistema & Performance
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#0d46f2] animate-pulse"></span>
          </h3>
          <div className="mx-4 flex flex-col bg-[#121212] rounded-xl border border-white/5 overflow-hidden">
            
            {/* Netrunner Mode */}
            <div className="flex items-center justify-between gap-4 p-4 border-b border-white/5 last:border-0 bg-[#0d46f2]/5">
              <div className="flex items-center gap-4 flex-1">
                <div className="text-white flex items-center justify-center rounded-lg bg-[#0d46f2] shrink-0 w-10 h-10 shadow-[0_0_10px_rgba(13,70,242,0.4)]">
                  <Gauge size={22} />
                </div>
                <div className="flex flex-col">
                  <p className="text-slate-900 dark:text-white text-base font-bold">Modo Netrunner</p>
                  <p className="text-[#9ca3ba] text-xs mt-0.5">Otimização Low-spec. Reduz VFX para max FPS.</p>
                </div>
              </div>
              <button 
                onClick={() => setNetrunnerMode(!netrunnerMode)}
                className={`w-11 h-6 rounded-full relative transition-colors ${netrunnerMode ? 'bg-[#0d46f2]' : 'bg-[#1e2230]'}`}
              >
                <div className={`absolute top-[2px] left-[2px] bg-white rounded-full h-5 w-5 transition-transform ${netrunnerMode ? 'translate-x-5' : 'translate-x-0'}`} />
              </button>
            </div>

            {/* Data Saver */}
            <div className="flex items-center justify-between gap-4 p-4">
              <div className="flex items-center gap-4 flex-1">
                <div className="text-[#0d46f2] flex items-center justify-center rounded-lg bg-[#0d46f2]/10 shrink-0 w-10 h-10">
                  <CloudDownload size={22} />
                </div>
                <div className="flex flex-col">
                  <p className="text-slate-900 dark:text-white text-base font-medium">Poupança de Dados</p>
                  <p className="text-[#9ca3ba] text-xs mt-0.5">Limita downloads em segundo plano.</p>
                </div>
              </div>
              <button 
                onClick={() => setDataSaver(!dataSaver)}
                className={`w-11 h-6 rounded-full relative transition-colors ${dataSaver ? 'bg-[#0d46f2]' : 'bg-[#1e2230]'}`}
              >
                <div className={`absolute top-[2px] left-[2px] bg-white rounded-full h-5 w-5 transition-transform ${dataSaver ? 'translate-x-5' : 'translate-x-0'}`} />
              </button>
            </div>
          </div>
        </div>
        <div className="h-6"></div>

        {/* Section: Preferences */}
        <div className="flex flex-col">
          <h3 className="text-[#9ca3ba] text-xs font-bold tracking-[0.1em] px-6 pb-2 pt-2 uppercase">Preferências</h3>
          <div className="mx-4 flex flex-col bg-[#121212] rounded-xl border border-white/5 overflow-hidden">
            
            <div className="flex items-center justify-between gap-4 p-4 border-b border-white/5">
              <div className="flex items-center gap-4">
                <div className="text-[#0d46f2] flex items-center justify-center rounded-lg bg-[#0d46f2]/10 shrink-0 w-10 h-10">
                  <Bell size={22} />
                </div>
                <p className="text-slate-900 dark:text-white text-base font-medium">Notificações</p>
              </div>
              <button 
                onClick={() => setNotifications(!notifications)}
                className={`w-11 h-6 rounded-full relative transition-colors ${notifications ? 'bg-[#0d46f2]' : 'bg-[#1e2230]'}`}
              >
                <div className={`absolute top-[2px] left-[2px] bg-white rounded-full h-5 w-5 transition-transform ${notifications ? 'translate-x-5' : 'translate-x-0'}`} />
              </button>
            </div>

            <button 
              onClick={() => handleFeatureNotAvailable('Estilo Mapa')}
              className="flex items-center justify-between gap-4 p-4 hover:bg-[#1e2230] transition-colors w-full border-b border-white/5 text-left group"
            >
              <div className="flex items-center gap-4">
                <div className="text-[#0d46f2] flex items-center justify-center rounded-lg bg-[#0d46f2]/10 shrink-0 w-10 h-10 group-hover:bg-[#0d46f2] group-hover:text-white transition-colors">
                  <MapIcon size={22} />
                </div>
                <p className="text-slate-900 dark:text-white text-base font-medium">Estilo Mapa</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#9ca3ba] text-sm font-medium">Holo 3D</span>
                <ChevronRight size={20} className="text-[#9ca3ba]" />
              </div>
            </button>

            <button 
              onClick={() => handleFeatureNotAvailable('Idioma')}
              className="flex items-center justify-between gap-4 p-4 hover:bg-[#1e2230] transition-colors w-full text-left group"
            >
              <div className="flex items-center gap-4">
                <div className="text-[#0d46f2] flex items-center justify-center rounded-lg bg-[#0d46f2]/10 shrink-0 w-10 h-10 group-hover:bg-[#0d46f2] group-hover:text-white transition-colors">
                  <Languages size={22} />
                </div>
                <p className="text-slate-900 dark:text-white text-base font-medium">Idioma</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#9ca3ba] text-sm font-medium">Português</span>
                <ChevronRight size={20} className="text-[#9ca3ba]" />
              </div>
            </button>
          </div>
        </div>
        <div className="h-6"></div>

        {/* Section: Support */}
        <div className="flex flex-col">
          <h3 className="text-[#9ca3ba] text-xs font-bold tracking-[0.1em] px-6 pb-2 pt-2 uppercase">Suporte</h3>
          <div className="mx-4 flex flex-col bg-[#121212] rounded-xl border border-white/5 overflow-hidden">
            <button 
              onClick={onOpenSupport}
              className="flex items-center gap-4 p-4 hover:bg-[#1e2230] transition-colors w-full text-left group border-b border-white/5"
            >
              <div className="text-[#0d46f2] flex items-center justify-center rounded-lg bg-[#0d46f2]/10 shrink-0 w-10 h-10 group-hover:bg-[#0d46f2] group-hover:text-white transition-colors">
                <HelpCircle size={22} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-slate-900 dark:text-white text-base font-medium truncate">Centro de Ajuda</p>
              </div>
              <ChevronRight size={20} className="text-[#9ca3ba]" />
            </button>
            <button 
              onClick={() => handleFeatureNotAvailable('Termos de Serviço')}
              className="flex items-center gap-4 p-4 hover:bg-[#1e2230] transition-colors w-full text-left group border-b border-white/5"
            >
              <div className="text-[#0d46f2] flex items-center justify-center rounded-lg bg-[#0d46f2]/10 shrink-0 w-10 h-10 group-hover:bg-[#0d46f2] group-hover:text-white transition-colors">
                <FileText size={22} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-slate-900 dark:text-white text-base font-medium truncate">Termos de Serviço</p>
              </div>
            </button>
            <button 
              onClick={handleLogout}
              className="flex items-center gap-4 p-4 hover:bg-red-500/10 transition-colors w-full text-left group"
            >
              <div className="text-red-500 flex items-center justify-center rounded-lg bg-red-500/10 shrink-0 w-10 h-10 group-hover:bg-red-500 group-hover:text-white transition-colors">
                <LogOut size={22} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-red-500 font-medium truncate">Terminar Sessão</p>
              </div>
            </button>
          </div>
        </div>
        <div className="h-8"></div>

        <div className="flex flex-col items-center gap-2 pb-8">
          <p className="text-[#9ca3ba]/50 text-xs font-mono uppercase tracking-widest">RodaVO Logistics</p>
          <p className="text-[#9ca3ba]/30 text-[10px] font-mono">v4.0.2 (Build 9921) • Netrunner Compatible</p>
        </div>
      </div>
    </div>
  );
};