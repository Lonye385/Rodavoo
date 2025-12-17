import React, { useState } from 'react';
import { X, Truck, Receipt, Lock, ArrowRight, Loader2 } from 'lucide-react';

interface ConfirmTransactionProps {
  item: {
    name: string;
    type: string;
    description: string;
    price: number;
    image: string;
  };
  onConfirm: () => void;
  onCancel: () => void;
}

export const ConfirmTransaction: React.FC<ConfirmTransactionProps> = ({ item, onConfirm, onCancel }) => {
  const [processing, setProcessing] = useState(false);

  const handleConfirm = () => {
    setProcessing(true);
    setTimeout(() => {
        setProcessing(false);
        onConfirm();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-[100] bg-[#191022] text-white flex flex-col font-sans animate-in fade-in duration-300">
      {/* Header */}
      <header className="flex items-center justify-between p-4 pb-2 z-10">
        <button 
          onClick={onCancel}
          className="flex w-10 h-10 items-center justify-center rounded-full hover:bg-white/5 text-white transition-colors"
        >
          <X size={24} />
        </button>
        <h2 className="text-white text-lg font-bold leading-tight tracking-wide uppercase flex-1 text-center pr-10 drop-shadow-md">
          Confirm Transaction
        </h2>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-4 pt-2 pb-32">
        {/* Item Card */}
        <div className="group relative mt-4 overflow-hidden rounded-2xl bg-[#2a1f36] shadow-lg ring-1 ring-white/10">
          {/* Glowing Effect */}
          <div className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-[#7f0df2]/20 blur-[60px]"></div>
          
          <div className="relative p-3">
            <div 
                className="w-full aspect-[4/3] rounded-xl bg-gray-800 bg-cover bg-center shadow-inner relative overflow-hidden" 
                style={{ backgroundImage: `url('${item.image}')` }}
            >
                <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full flex items-center gap-1.5">
                    <Truck size={16} className="text-[#7f0df2]" fill="currentColor" />
                    <span className="text-xs font-semibold tracking-wider text-white uppercase">{item.type}</span>
                </div>
            </div>
          </div>
          
          <div className="px-5 pb-6 pt-2">
            <h3 className="text-2xl font-bold leading-tight tracking-tight text-white mb-1">{item.name}</h3>
            <p className="text-white/60 text-sm font-normal leading-relaxed">{item.description}</p>
          </div>
        </div>

        {/* Headline */}
        <div className="mt-8 mb-4 px-1">
            <h3 className="text-white tracking-wide text-lg font-bold uppercase flex items-center gap-2">
                <Receipt className="text-[#7f0df2]" />
                Payment Summary
            </h3>
        </div>

        {/* Ledger */}
        <div className="rounded-xl bg-[#2a1f36]/50 p-5 ring-1 ring-white/5 backdrop-blur-sm">
            <div className="flex justify-between items-center py-3 border-b border-white/5">
                <span className="text-white/60 text-sm font-medium">Current Wallet</span>
                <div className="flex items-center gap-1.5">
                    <span className="text-white/80 text-base font-normal">12,500</span>
                    <span className="text-xs font-bold text-white/40 bg-white/10 px-1.5 py-0.5 rounded">R</span>
                </div>
            </div>
            <div className="flex justify-between items-center py-3 border-b border-white/5">
                <span className="text-white/60 text-sm font-medium">Item Cost</span>
                <div className="flex items-center gap-1.5">
                    <span className="text-red-400 text-base font-medium">-{item.price.toLocaleString()}</span>
                    <span className="text-xs font-bold text-white/40 bg-white/10 px-1.5 py-0.5 rounded">R</span>
                </div>
            </div>
            <div className="flex justify-between items-center pt-4 mt-1">
                <span className="text-[#7f0df2] text-sm font-bold uppercase tracking-wider">New Balance</span>
                <div className="flex items-center gap-2">
                    <span className="text-white text-xl font-bold tracking-tight">{(12500 - item.price).toLocaleString()}</span>
                    <span className="text-xs font-bold text-[#7f0df2] bg-[#7f0df2]/20 border border-[#7f0df2]/30 px-1.5 py-0.5 rounded">R</span>
                </div>
            </div>
        </div>

        {/* Secure Badge */}
        <div className="mt-8 flex justify-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/5">
                <Lock size={18} className="text-green-400" />
                <p className="text-white/40 text-xs font-medium tracking-wide uppercase">Secure Transaction via RodaVO</p>
            </div>
        </div>
      </main>

      {/* Footer Actions */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#191022] via-[#191022] to-transparent pt-12 pb-8 px-5 z-20">
          <button 
            onClick={handleConfirm}
            disabled={processing}
            className="w-full relative group overflow-hidden bg-[#7f0df2] hover:bg-[#7f0df2]/90 text-white font-bold text-lg py-4 rounded-xl shadow-[0_0_20px_-5px_rgba(127,13,242,0.5)] transition-all active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
          >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] animate-[shimmer_1.5s_infinite]"></div>
              <div className="flex items-center justify-center gap-2">
                  {processing ? (
                    <>
                        <Loader2 className="animate-spin" />
                        <span>Processing...</span>
                    </>
                  ) : (
                    <>
                        <span>Confirm Purchase</span>
                        <ArrowRight />
                    </>
                  )}
              </div>
          </button>
          
          <button 
            onClick={onCancel}
            disabled={processing}
            className="w-full mt-4 py-3 text-white/60 hover:text-white text-sm font-medium tracking-wide uppercase transition-colors"
          >
              Cancel Transaction
          </button>
      </div>
      
      <style>{`
        @keyframes shimmer {
            100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
};