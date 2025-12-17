import React, { useState } from 'react';
import { 
  Map, MessageSquareText, Image as ImageIcon, Sparkles, Menu, ShoppingBag, 
  Settings as SettingsIcon, Target, Radio, ShieldAlert, Users, Calendar,
  Truck, Route, Circle, Backpack, Store, User
} from 'lucide-react';
import { MapController } from './components/MapController';
import { Copilot } from './components/Copilot';
import { DashcamStudio } from './components/DashcamStudio';
import { DreamDrive } from './components/DreamDrive';
import { ApiKeyGuard } from './components/ApiKeyGuard';
import { Settings } from './components/Settings';
import { GarageMarket } from './components/GarageMarket';
import { TerritoryCapture } from './components/TerritoryCapture';
import { CreateSignal } from './components/CreateSignal';
import { DefendSector } from './components/DefendSector';
import { GamificationHub } from './components/GamificationHub';
import { GuildChat } from './components/GuildChat';
import { SupportCenter } from './components/SupportCenter';
import { LoginScreen } from './components/LoginScreen';
import { PasswordRecovery } from './components/PasswordRecovery';
import { VehicleSelection } from './components/VehicleSelection';
import { RouteManifest } from './components/RouteManifest';
import { GamificationRoulette } from './components/GamificationRoulette';
import { Inventory } from './components/Inventory';
import { Shop } from './components/Shop';
import { SocialProfile } from './components/SocialProfile';
import { AppView } from './types';

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [authView, setAuthView] = useState<'LOGIN' | 'RECOVERY'>('LOGIN');
  const [currentView, setCurrentView] = useState<AppView>(AppView.MAP);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Auth Flow
  if (!isLoggedIn) {
    if (authView === 'RECOVERY') {
      return <PasswordRecovery onBack={() => setAuthView('LOGIN')} />;
    }
    return (
      <LoginScreen 
        onLogin={() => setIsLoggedIn(true)} 
        onRecover={() => setAuthView('RECOVERY')}
      />
    );
  }

  const renderView = () => {
    switch (currentView) {
      case AppView.MAP:
        return <MapController onOpenNav={() => setIsMenuOpen(true)} />;
      case AppView.COPILOT:
        return (
          <ApiKeyGuard>
            <Copilot onBack={() => setCurrentView(AppView.MAP)} />
          </ApiKeyGuard>
        );
      case AppView.STUDIO:
        return (
          <ApiKeyGuard>
            <DashcamStudio onBack={() => setCurrentView(AppView.MAP)} />
          </ApiKeyGuard>
        );
      case AppView.DREAM:
        return (
          <ApiKeyGuard>
            <DreamDrive onBack={() => setCurrentView(AppView.MAP)} />
          </ApiKeyGuard>
        );
      case AppView.SETTINGS:
        return <Settings onBack={() => setCurrentView(AppView.MAP)} onOpenSupport={() => setCurrentView(AppView.SUPPORT)} />;
      case AppView.MARKET:
        return <GarageMarket onBack={() => setCurrentView(AppView.MAP)} />;
      case AppView.TERRITORY:
        return <TerritoryCapture onBack={() => setCurrentView(AppView.MAP)} />;
      case AppView.SIGNAL:
        return <CreateSignal onCancel={() => setCurrentView(AppView.MAP)} />;
      case AppView.DEFEND:
        return <DefendSector onBack={() => setCurrentView(AppView.MAP)} />;
      case AppView.EVENTS:
        return <GamificationHub onBack={() => setCurrentView(AppView.MAP)} />;
      case AppView.GUILD_CHAT:
        return <GuildChat onBack={() => setCurrentView(AppView.MAP)} />;
      case AppView.SUPPORT:
        return <SupportCenter onBack={() => setCurrentView(AppView.SETTINGS)} />;
      case AppView.VEHICLE_SELECT:
        return <VehicleSelection onBack={() => setCurrentView(AppView.MAP)} />;
      case AppView.ROUTE_MANIFEST:
        return <RouteManifest onBack={() => setCurrentView(AppView.MAP)} />;
      case AppView.ROULETTE:
        return <GamificationRoulette onBack={() => setCurrentView(AppView.EVENTS)} />;
      case AppView.INVENTORY:
        return <Inventory onBack={() => setCurrentView(AppView.EVENTS)} />;
      case AppView.SHOP:
        return <Shop onBack={() => setCurrentView(AppView.MAP)} />;
      case AppView.PROFILE:
        return <SocialProfile onBack={() => setCurrentView(AppView.MAP)} />;
      default:
        return <MapController onOpenNav={() => setIsMenuOpen(true)} />;
    }
  };

  const navItems = [
    { id: AppView.MAP, label: 'Navegação', icon: Map, color: 'text-blue-400' },
    { id: AppView.PROFILE, label: 'Perfil', icon: User, color: 'text-purple-400' },
    { id: AppView.ROUTE_MANIFEST, label: 'Rota', icon: Route, color: 'text-green-400' },
    { id: AppView.EVENTS, label: 'Dash', icon: Calendar, color: 'text-yellow-400' },
    { id: AppView.ROULETTE, label: 'Roleta', icon: Circle, color: 'text-pink-400' },
    { id: AppView.COPILOT, label: 'Copiloto', icon: MessageSquareText, color: 'text-indigo-400' },
    { id: AppView.STUDIO, label: 'Estúdio', icon: ImageIcon, color: 'text-orange-400' },
    { id: AppView.DREAM, label: 'Dream Drive', icon: Sparkles, color: 'text-purple-400' },
    { id: AppView.MARKET, label: 'Garagem', icon: ShoppingBag, color: 'text-emerald-400' },
    { id: AppView.SHOP, label: 'Loja', icon: Store, color: 'text-yellow-400' },
    { id: AppView.INVENTORY, label: 'Inventário', icon: Backpack, color: 'text-teal-400' },
    { id: AppView.VEHICLE_SELECT, label: 'Veículo', icon: Truck, color: 'text-cyan-400' },
    { id: AppView.TERRITORY, label: 'Captura', icon: Target, color: 'text-red-500' },
    { id: AppView.DEFEND, label: 'Defesa', icon: ShieldAlert, color: 'text-amber-500' },
    { id: AppView.GUILD_CHAT, label: 'Guild Chat', icon: Users, color: 'text-indigo-300' },
    { id: AppView.SIGNAL, label: 'Sinal', icon: Radio, color: 'text-cyan-400' },
    { id: AppView.SETTINGS, label: 'Definições', icon: SettingsIcon, color: 'text-slate-400' },
  ];

  return (
    <div className="h-screen w-full bg-[#050505] flex flex-col md:flex-row overflow-hidden font-display">
      
      {/* Sidebar Navigation (Desktop & Mobile Drawer) */}
      <div className={`
        fixed inset-0 z-[60] bg-[#0a0a0a]/95 backdrop-blur-md transition-transform duration-300 md:relative md:translate-x-0 md:bg-[#0a0a0a] md:w-20 md:flex md:flex-col md:items-center md:border-r md:border-white/5 md:py-6
        ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        {/* Mobile Close Button */}
        <button 
            onClick={() => setIsMenuOpen(false)}
            className="md:hidden absolute top-4 right-4 p-2 text-slate-400 hover:text-white"
        >
            <Menu className="w-6 h-6" />
        </button>

        <div className="hidden md:flex w-10 h-10 bg-[#590df2] rounded-xl items-center justify-center mb-8 shadow-[0_0_15px_rgba(89,13,242,0.5)]">
            <span className="text-white font-black text-xl">R</span>
        </div>

        <div className="flex flex-col w-full px-4 md:px-0 gap-2 md:gap-4 mt-16 md:mt-0 overflow-y-auto max-h-[calc(100vh-100px)] no-scrollbar">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setCurrentView(item.id);
                  setIsMenuOpen(false);
                }}
                className={`
                  flex items-center gap-4 md:gap-0 md:flex-col p-3 md:p-2 rounded-xl transition-all group active:scale-95
                  ${currentView === item.id 
                    ? 'bg-[#1f1b27] text-white shadow-inner border border-white/10' 
                    : 'text-slate-400 hover:bg-white/5 hover:text-slate-200'}
                `}
              >
                <item.icon className={`w-6 h-6 ${currentView === item.id ? item.color : 'text-current'} group-hover:scale-110 transition-transform`} />
                <span className="md:hidden font-medium">{item.label}</span>
                <span className="hidden md:block text-[9px] font-medium mt-1 text-center truncate w-full">{item.label}</span>
              </button>
            ))}
        </div>
      </div>

      {/* Main Content Area */}
      <main className="flex-1 relative overflow-hidden bg-[#050505]">
        {renderView()}
      </main>

    </div>
  );
};

export default App;