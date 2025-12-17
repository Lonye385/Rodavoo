import React, { useState } from 'react';
import { ArrowLeft, Crosshair, Edit2, Map as MapIcon, X, Plus, ArrowRight } from 'lucide-react';

interface RouteManifestProps {
  onBack: () => void;
}

export const RouteManifest: React.FC<RouteManifestProps> = ({ onBack }) => {
  return (
    <div className="bg-[#f6f8f7] dark:bg-[#050a07] font-spline antialiased overflow-hidden h-screen flex flex-col text-slate-900 dark:text-white relative">
        
        {/* Background Pattern */}
        <div className="absolute inset-0 pointer-events-none opacity-20" style={{
            backgroundImage: 'radial-gradient(#1a3324 1px, transparent 1px)',
            backgroundSize: '24px 24px'
        }}></div>

        {/* Header */}
        <header className="flex-none pt-4 px-4 pb-2 z-10 bg-[#f6f8f7] dark:bg-[#050a07] border-b border-gray-200 dark:border-white/5">
            <div className="flex items-center justify-between mb-4">
                <button 
                    onClick={onBack}
                    className="text-slate-900 dark:text-white hover:text-[#30e87a] transition-colors flex size-10 shrink-0 items-center justify-center rounded-full bg-white dark:bg-[#112117] border border-gray-200 dark:border-white/10"
                >
                    <ArrowLeft size={20} />
                </button>
                <h2 className="text-lg font-bold leading-tight tracking-[-0.015em] uppercase">Route Manifest</h2>
                <div className="size-10"></div>
            </div>
            
            {/* Progress */}
            <div className="flex w-full flex-row items-center justify-between gap-2 py-2">
                <div className="h-1 flex-1 rounded-full bg-[#30e87a] shadow-[0_0_10px_rgba(48,232,122,0.5)]"></div>
                <div className="h-1 flex-1 rounded-full bg-[#30e87a]"></div>
                <div className="h-1 flex-1 rounded-full bg-gray-200 dark:bg-[#1a3324]"></div>
                <div className="h-1 flex-1 rounded-full bg-gray-200 dark:bg-[#1a3324]"></div>
            </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto relative z-10">
            <div className="pt-6 pb-2 px-6">
                <h1 className="tracking-tight text-3xl font-bold leading-tight mb-2">Define Route</h1>
                <p className="text-gray-500 dark:text-gray-400 text-sm font-normal leading-relaxed">Add mandatory stops for rigorous calculation optimization.</p>
            </div>

            <div className="px-4 py-4 flex flex-col gap-4">
                
                {/* Origin */}
                <div className="relative group">
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#30e87a] rounded-l-xl opacity-100 shadow-[0_0_8px_rgba(48,232,122,0.8)]"></div>
                    <div className="bg-white dark:bg-[#112117] rounded-r-xl rounded-l-md p-4 border border-gray-200 dark:border-white/5 flex items-center gap-3 shadow-sm">
                        <div className="flex flex-col flex-1">
                            <label className="text-[#30e87a] text-xs font-bold uppercase tracking-wider mb-1">Origin Point</label>
                            <div className="flex items-center gap-2">
                                <Crosshair size={14} className="text-[#30e87a]" />
                                <span className="font-medium text-lg">Current Location</span>
                            </div>
                            <span className="text-gray-500 text-xs mt-1 truncate">34.0522° N, 118.2437° W (Los Angeles, CA)</span>
                        </div>
                        <button className="p-2 text-gray-400 hover:text-white transition-colors">
                            <Edit2 size={18} />
                        </button>
                    </div>
                </div>

                {/* Waypoint 1 */}
                <div className="relative group">
                    <div className="absolute -top-6 left-[18px] w-0.5 h-6 bg-gradient-to-b from-[#30e87a] to-[#1a3324] -z-10"></div>
                    <div className="bg-white dark:bg-[#112117] rounded-xl p-1 border border-gray-200 dark:border-white/10 focus-within:border-[#30e87a]/50 focus-within:shadow-[0_0_15px_rgba(48,232,122,0.1)] transition-all duration-200">
                        <div className="flex items-center gap-2 pl-3">
                            <div className="size-6 rounded-full bg-gray-100 dark:bg-[#1a3324] border border-gray-200 dark:border-white/10 flex items-center justify-center text-xs font-bold text-gray-500 dark:text-gray-400 font-mono">
                                01
                            </div>
                            <input 
                                className="bg-transparent border-none text-slate-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 focus:ring-0 w-full h-12 text-base font-normal outline-none" 
                                placeholder="Enter address or coordinates" 
                                type="text" 
                            />
                            <button className="size-10 flex items-center justify-center text-gray-400 hover:text-[#30e87a] transition-colors rounded-full hover:bg-white/5 mr-1">
                                <MapIcon size={18} />
                            </button>
                            <button className="size-10 flex items-center justify-center text-red-400 hover:text-red-300 transition-colors rounded-full hover:bg-white/5 mr-1">
                                <X size={18} />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Waypoint 2 */}
                <div className="relative group">
                    <div className="absolute -top-6 left-[18px] w-0.5 h-6 bg-gray-300 dark:bg-[#1a3324] -z-10"></div>
                    <div className="bg-white dark:bg-[#112117] rounded-xl p-1 border border-gray-200 dark:border-white/10 focus-within:border-[#30e87a]/50 focus-within:shadow-[0_0_15px_rgba(48,232,122,0.1)] transition-all duration-200">
                        <div className="flex items-center gap-2 pl-3">
                            <div className="size-6 rounded-full bg-gray-100 dark:bg-[#1a3324] border border-gray-200 dark:border-white/10 flex items-center justify-center text-xs font-bold text-gray-500 dark:text-gray-400 font-mono">
                                02
                            </div>
                            <input 
                                className="bg-transparent border-none text-slate-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 focus:ring-0 w-full h-12 text-base font-normal outline-none" 
                                placeholder="Enter address or coordinates" 
                                type="text" 
                            />
                            <button className="size-10 flex items-center justify-center text-gray-400 hover:text-[#30e87a] transition-colors rounded-full hover:bg-white/5 mr-1">
                                <MapIcon size={18} />
                            </button>
                            <button className="size-10 flex items-center justify-center text-red-400 hover:text-red-300 transition-colors rounded-full hover:bg-white/5 mr-1">
                                <X size={18} />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Add Button */}
                <div className="relative pt-2">
                    <div className="absolute -top-4 left-[18px] w-0.5 h-6 bg-gray-300 dark:bg-[#1a3324] -z-10"></div>
                    <button className="group w-full flex items-center justify-center gap-2 h-14 rounded-xl border border-dashed border-gray-300 dark:border-white/20 bg-white/50 dark:bg-white/5 hover:bg-white hover:dark:bg-white/10 hover:border-[#30e87a]/50 transition-all active:scale-[0.99]">
                        <Plus size={20} className="text-gray-400 group-hover:text-[#30e87a] transition-colors" />
                        <span className="text-gray-500 dark:text-gray-300 font-medium group-hover:text-slate-900 dark:group-hover:text-white">Add Waypoint</span>
                    </button>
                </div>

            </div>
            
            <div className="h-28"></div>
        </main>

        {/* Footer */}
        <footer className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-white via-white dark:from-[#050a07] dark:via-[#050a07] to-transparent z-20">
            <div className="flex items-center justify-between gap-4">
                <div className="flex flex-col pl-2">
                    <span className="text-xs text-gray-500 uppercase tracking-widest font-semibold">Total Est.</span>
                    <span className="font-mono text-xl font-bold">45.2 <span className="text-[#30e87a] text-sm">KM</span></span>
                </div>
                <button 
                    onClick={onBack}
                    className="flex-1 bg-[#30e87a] hover:bg-[#2bd16d] text-[#050a07] h-14 rounded-full font-bold text-lg flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(48,232,122,0.3)] hover:shadow-[0_0_30px_rgba(48,232,122,0.5)] transition-all active:translate-y-0.5"
                >
                    <span>Confirm Route</span>
                    <ArrowRight size={24} />
                </button>
            </div>
            <div className="h-5 w-full"></div>
        </footer>

    </div>
  );
};