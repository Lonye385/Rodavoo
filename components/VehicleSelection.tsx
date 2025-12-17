import React, { useState } from 'react';
import { ArrowLeft, CheckCircle2, Circle, ArrowRight } from 'lucide-react';

interface VehicleSelectionProps {
  onBack: () => void;
}

export const VehicleSelection: React.FC<VehicleSelectionProps> = ({ onBack }) => {
  const [selectedGroup, setSelectedGroup] = useState<'A' | 'B'>('A');

  return (
    <div className="bg-[#f5f6f8] dark:bg-[#101422] font-display antialiased min-h-screen flex flex-col relative overflow-x-hidden text-slate-900 dark:text-white">
        
        {/* Background Decoration */}
        <div className="fixed inset-0 pointer-events-none z-0 opacity-20 dark:opacity-10 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#0d46f2] via-transparent to-transparent"></div>

        {/* Top App Bar */}
        <header className="sticky top-0 z-50 bg-[#f5f6f8]/90 dark:bg-[#101422]/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
            <div className="flex items-center justify-between p-4 pb-2">
                <button 
                    onClick={onBack}
                    className="flex size-12 shrink-0 items-center justify-center rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
                >
                    <ArrowLeft size={24} />
                </button>
                {/* Indicators */}
                <div className="flex flex-row items-center justify-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-gray-400 dark:bg-gray-600"></div>
                    <div className="h-1.5 w-6 rounded-full bg-[#0d46f2] shadow-[0_0_20px_rgba(13,70,242,0.25)]"></div>
                    <div className="h-1.5 w-1.5 rounded-full bg-gray-400 dark:bg-gray-600"></div>
                    <div className="h-1.5 w-1.5 rounded-full bg-gray-400 dark:bg-gray-600"></div>
                </div>
                <div className="size-12"></div>
            </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 flex flex-col px-4 pt-6 pb-24 z-10 max-w-md mx-auto w-full">
            <div className="mb-6">
                <h1 className="text-3xl font-bold leading-tight tracking-tight mb-2 uppercase">Select Vehicle Class</h1>
                <p className="text-gray-500 dark:text-gray-400 text-base font-normal leading-relaxed">Optimize your route based on vehicle capabilities and cargo size.</p>
            </div>

            {/* Selection Cards */}
            <div className="flex flex-col gap-4">
                
                {/* Group A */}
                <label className="group relative cursor-pointer" onClick={() => setSelectedGroup('A')}>
                    <input type="radio" name="vehicle_group" className="peer sr-only" checked={selectedGroup === 'A'} readOnly />
                    <div className={`relative overflow-hidden rounded-2xl bg-white dark:bg-[#1b1e27] border-2 transition-all duration-300 shadow-lg ${selectedGroup === 'A' ? 'border-[#0d46f2] dark:shadow-[0_0_15px_rgba(13,70,242,0.15)]' : 'border-gray-200 dark:border-gray-700 opacity-60 hover:opacity-100'}`}>
                        {/* Indicator */}
                        <div className={`absolute top-4 right-4 z-10 ${selectedGroup === 'A' ? 'text-[#0d46f2]' : 'text-gray-300 dark:text-gray-600'}`}>
                            {selectedGroup === 'A' ? <CheckCircle2 size={24} fill="currentColor" className="text-white" /> : <Circle size={24} />}
                        </div>

                        <div className="flex flex-row items-stretch h-32">
                            {/* Image */}
                            <div className="w-32 shrink-0 bg-gray-100 dark:bg-gray-900 relative">
                                <img 
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_sGP4pK02SWRBMeDSv-vTHEOtFrOwOGtQzsgSHbYpgzTvod4Ua6LPwHP0xHG73Jk3nhT4BMK0hwbFvTmDbGQXqMifMFvbrGzFvEyBs3jQ8TYnYqqqoKOl8wi0hco_GHe9FxIbAj3TGc7YFyp9C2Re6a8r2V9MDk6kx4nc4wkU1cMGZ12P0UkRzk8JuKUfe7jE2V-owbyA5UVtVV64QhLVIufWSEj3cZTahiYMxaP4e7cIfGulo7ZNBqSL0WIn09RHAM1gQAWyuwg" 
                                    alt="Truck" 
                                    className="w-full h-full object-cover opacity-80 mix-blend-overlay"
                                />
                                <div className="absolute inset-0 bg-[#0d46f2]/10"></div>
                            </div>
                            
                            {/* Content */}
                            <div className="flex-1 p-4 flex flex-col justify-center">
                                <h3 className="text-lg font-bold tracking-tight mb-1">GRUPO A</h3>
                                <p className="text-gray-500 dark:text-gray-400 text-sm font-medium mb-3">Truck • Bus • RV</p>
                                <div className="mt-auto flex items-center justify-between">
                                    <span className="text-[#0d46f2] text-xl font-bold">14,99€ <span className="text-xs font-normal text-gray-500 dark:text-gray-400">/ mo</span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </label>

                {/* Group B */}
                <label className="group relative cursor-pointer" onClick={() => setSelectedGroup('B')}>
                    <input type="radio" name="vehicle_group" className="peer sr-only" checked={selectedGroup === 'B'} readOnly />
                    <div className={`relative overflow-hidden rounded-2xl bg-white dark:bg-[#1b1e27] border-2 transition-all duration-300 shadow-lg ${selectedGroup === 'B' ? 'border-[#0d46f2] dark:shadow-[0_0_15px_rgba(13,70,242,0.15)]' : 'border-gray-200 dark:border-gray-700 opacity-60 hover:opacity-100'}`}>
                        {/* Indicator */}
                        <div className={`absolute top-4 right-4 z-10 ${selectedGroup === 'B' ? 'text-[#0d46f2]' : 'text-gray-300 dark:text-gray-600'}`}>
                            {selectedGroup === 'B' ? <CheckCircle2 size={24} fill="currentColor" className="text-white" /> : <Circle size={24} />}
                        </div>

                        <div className="flex flex-row items-stretch h-32">
                            {/* Image */}
                            <div className="w-32 shrink-0 bg-gray-100 dark:bg-gray-900 relative grayscale">
                                <img 
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCa4beoREK0T_SaFJFsc-AE9iX504z9b8_fgTJeG9SV_TcAQAh9yCbv9ew2jaUj8r1yb9WqsEar6qdMP7TVGrBFfabSaZ680nasdK5Ml1E7H5bw3TrPYC2dLIRVMqSy_ARGvRhdtKwpR-yIS6tRNRFu0wnYmNdxiG57Af54QuhaXt7N9gYf2xiIP8y3IGptI8BFTsD7B6tQh0czk6AQppPGpBH5DAnJ5JmWaaLKQl_pyLV6SRh9XgNzDU0NprKoS6LhJSV63aI6PrE" 
                                    alt="Car" 
                                    className="w-full h-full object-cover opacity-60"
                                />
                            </div>
                            
                            {/* Content */}
                            <div className="flex-1 p-4 flex flex-col justify-center">
                                <h3 className="text-lg font-bold tracking-tight mb-1">GRUPO B</h3>
                                <p className="text-gray-500 dark:text-gray-400 text-sm font-medium mb-3">Car • Moto</p>
                                <div className="mt-auto flex items-center justify-between">
                                    <span className="text-slate-900 dark:text-white text-xl font-bold">4,99€ <span className="text-xs font-normal text-gray-500 dark:text-gray-400">/ mo</span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </label>

            </div>
        </main>

        {/* Footer */}
        <footer className="fixed bottom-0 left-0 w-full z-50 bg-[#f5f6f8]/95 dark:bg-[#101422]/95 backdrop-blur-lg border-t border-gray-200 dark:border-gray-800 pb-safe">
            <div className="p-4 max-w-md mx-auto w-full">
                <button 
                    onClick={onBack}
                    className="w-full bg-[#0d46f2] hover:bg-blue-600 text-white font-bold py-4 px-6 rounded-xl shadow-[0_4px_14px_0_rgba(13,70,242,0.39)] hover:shadow-[0_6px_20px_rgba(13,70,242,0.23)] hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2"
                >
                    <span>CONFIRM LOADOUT</span>
                    <ArrowRight size={20} />
                </button>
            </div>
            <div className="h-1 w-full bg-transparent"></div>
        </footer>

    </div>
  );
};