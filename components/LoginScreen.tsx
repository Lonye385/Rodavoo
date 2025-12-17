import React, { useState } from 'react';
import { 
  ArrowLeft, User, Lock, Eye, EyeOff, 
  ArrowRight, Smartphone, Star 
} from 'lucide-react';

interface LoginScreenProps {
  onLogin: () => void;
  onRecover: () => void;
}

export const LoginScreen: React.FC<LoginScreenProps> = ({ onLogin, onRecover }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API delay
    setTimeout(() => {
      setLoading(false);
      onLogin();
    }, 1500);
  };

  return (
    <div className="min-h-screen w-full bg-[#05070e] font-display text-[#e2e8f0] flex flex-col relative overflow-hidden selection:bg-[#0d33f2] selection:text-white antialiased">
      {/* Background Effects */}
      <div className="fixed inset-0 z-0 opacity-20 pointer-events-none" 
        style={{ 
          backgroundImage: 'linear-gradient(rgba(42, 46, 66, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(42, 46, 66, 0.2) 1px, transparent 1px)', 
          backgroundSize: '30px 30px' 
        }}>
      </div>
      <div className="fixed top-0 inset-x-0 h-64 bg-gradient-to-b from-[#38b9fa]/10 to-transparent pointer-events-none z-0 animate-pulse"></div>
      <div className="fixed bottom-0 right-0 w-80 h-80 bg-[#38b9fa]/10 rounded-full blur-[100px] pointer-events-none z-0 translate-x-1/3 translate-y-1/3"></div>

      {/* Header */}
      <header className="relative z-20 flex items-center justify-between px-5 pt-6 pb-2 sticky top-0">
        <button className="w-11 h-11 flex items-center justify-center rounded-xl bg-[#1c1f2e]/80 border border-[#2a2e42] text-white hover:bg-[#2a2e42] transition-all duration-300 active:scale-95">
          <ArrowLeft size={20} />
        </button>
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1c1f2e]/50 border border-white/5 backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#38b9fa] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#38b9fa]"></span>
          </span>
          <span className="text-[10px] font-bold tracking-[0.15em] text-[#888da8] uppercase">Secure Gateway</span>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex-1 flex flex-col w-full max-w-md mx-auto px-5 pb-8 justify-center min-h-[85vh]">
        
        {/* Logo Section */}
        <div className="flex flex-col items-center mb-12">
          {/* Custom RodaVO Logo Construction */}
          <div className="relative p-4 group cursor-default">
             <div className="absolute inset-0 bg-[#38b9fa]/20 blur-[60px] rounded-full opacity-60 group-hover:opacity-80 transition-opacity duration-700"></div>
             
             <div className="relative flex items-center gap-1">
                {/* Speed Lines */}
                <div className="flex flex-col gap-1.5 mr-3 opacity-80">
                    <div className="w-12 h-1 bg-gradient-to-r from-transparent to-[#38b9fa] rounded-full"></div>
                    <div className="w-8 h-1 bg-gradient-to-r from-transparent to-[#38b9fa] rounded-full ml-auto"></div>
                    <div className="w-16 h-1 bg-gradient-to-r from-transparent to-[#38b9fa] rounded-full"></div>
                </div>

                {/* Text Logo */}
                <h1 className="text-6xl font-black tracking-tighter italic flex items-center">
                    <span className="text-[#38b9fa] drop-shadow-[0_0_15px_rgba(56,185,250,0.6)]">Roda</span>
                    <span className="text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]">VO</span>
                </h1>
             </div>
             
             {/* Underline */}
             <div className="w-full h-1 bg-gradient-to-r from-transparent via-[#38b9fa] to-transparent mt-2 opacity-50"></div>
          </div>
          
          <p className="text-[#888da8] text-xs font-bold tracking-[0.3em] uppercase mt-2">Logistics Command Center</p>
        </div>

        {/* Login Card */}
        <div className="bg-[#12141f]/85 backdrop-blur-md border border-[#2a2e42]/60 rounded-2xl p-1.5 shadow-2xl">
          {/* Tabs */}
          <div className="flex p-1 bg-black/40 rounded-xl mb-6 relative">
            <button className="flex-1 py-3.5 rounded-lg bg-[#38b9fa] text-[#05070e] shadow-lg shadow-[#38b9fa]/20 transition-all relative overflow-hidden group">
              <span className="relative z-10 text-xs font-bold tracking-[0.15em]">LOGIN</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
            </button>
            <button className="flex-1 py-3.5 rounded-lg text-[#888da8] hover:text-white hover:bg-white/5 transition-all">
              <span className="text-xs font-bold tracking-[0.15em]">REGISTER</span>
            </button>
          </div>

          <div className="px-4 pb-6 pt-1">
            <form onSubmit={handleLogin} className="flex flex-col gap-5">
              
              {/* Username */}
              <div className="space-y-2">
                <label className="text-[11px] font-bold tracking-widest text-[#888da8] uppercase ml-1">Agent Identity</label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none z-10">
                    <User size={20} className="text-[#888da8] group-focus-within:text-[#38b9fa] transition-colors duration-300" />
                  </div>
                  <input 
                    className="w-full bg-[#1c1f2e] border border-[#2a2e42] rounded-xl py-4 pl-12 pr-4 text-white placeholder:text-[#888da8]/30 focus:border-[#38b9fa] focus:ring-0 focus:shadow-[0_0_0_1px_rgba(56,185,250,1),0_0_15px_rgba(56,185,250,0.3)] transition-all duration-300 outline-none text-sm font-medium" 
                    placeholder="Username or Agent ID" 
                    type="text" 
                  />
                  <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-transparent group-focus-within:border-[#38b9fa]/50 transition-colors rounded-tr-xl pointer-events-none"></div>
                </div>
              </div>

              {/* Password */}
              <div className="space-y-2">
                <div className="flex justify-between items-end ml-1">
                  <label className="text-[11px] font-bold tracking-widest text-[#888da8] uppercase">Security Key</label>
                </div>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none z-10">
                    <Lock size={20} className="text-[#888da8] group-focus-within:text-[#38b9fa] transition-colors duration-300" />
                  </div>
                  <input 
                    className="w-full bg-[#1c1f2e] border border-[#2a2e42] rounded-xl py-4 pl-12 pr-12 text-white placeholder:text-[#888da8]/30 focus:border-[#38b9fa] focus:ring-0 focus:shadow-[0_0_0_1px_rgba(56,185,250,1),0_0_15px_rgba(56,185,250,0.3)] transition-all duration-300 outline-none text-sm font-medium" 
                    placeholder="••••••••••••" 
                    type={showPassword ? "text" : "password"} 
                  />
                  <button 
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-4 flex items-center text-[#888da8] hover:text-white transition-colors cursor-pointer"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                  <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-transparent group-focus-within:border-[#38b9fa]/50 transition-colors rounded-bl-xl pointer-events-none"></div>
                </div>
                <div className="flex justify-end pt-1">
                  <button 
                    type="button" 
                    onClick={onRecover}
                    className="text-xs text-[#38b9fa]/80 hover:text-[#38b9fa] transition-colors font-semibold tracking-wide border-b border-transparent hover:border-[#38b9fa]/50"
                  >
                    Recover Access?
                  </button>
                </div>
              </div>

              {/* Submit Button */}
              <button 
                type="submit"
                className="mt-2 w-full bg-[#38b9fa] hover:bg-[#2ca9e6] active:scale-[0.98] text-[#05070e] font-bold py-4 rounded-xl shadow-[0_0_15px_rgba(56,185,250,0.4)] relative overflow-hidden group transition-all duration-300 border border-white/10"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                <span className="flex items-center justify-center gap-2 tracking-wider text-sm font-black">
                  {loading ? 'AUTHENTICATING...' : 'INITIATE SESSION'}
                  {!loading && <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />}
                </span>
              </button>
            </form>

            <div className="relative flex py-6 items-center">
              <div className="flex-grow border-t border-[#2a2e42]"></div>
              <span className="flex-shrink-0 mx-3 text-[#888da8]/40 text-[10px] font-bold uppercase tracking-widest">System Link</span>
              <div className="flex-grow border-t border-[#2a2e42]"></div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <button className="flex items-center justify-center gap-2 py-3.5 rounded-lg bg-[#1c1f2e] border border-[#2a2e42] hover:border-[#888da8] hover:bg-[#1c1f2e]/80 text-white transition-all group active:scale-[0.98]">
                <Smartphone size={20} className="text-white/80 group-hover:scale-110 transition-transform" />
                <span className="text-xs font-bold tracking-wide">Google</span>
              </button>
              <button className="flex items-center justify-center gap-2 py-3.5 rounded-lg bg-[#1c1f2e] border border-[#2a2e42] hover:border-[#888da8] hover:bg-[#1c1f2e]/80 text-white transition-all group active:scale-[0.98]">
                <Star size={20} className="text-white/80 group-hover:scale-110 transition-transform" />
                <span className="text-xs font-bold tracking-wide">Apple ID</span>
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-auto pt-6 pb-2 text-center opacity-70">
          <p className="text-[10px] text-[#888da8] font-mono tracking-widest">
            ENCRYPTED CONNECTION <span className="text-[#38b9fa]">•</span> v2.0.4
          </p>
        </div>
      </main>
    </div>
  );
};