"use client";

import React, { useState, useEffect } from 'react';

// Mock Product Data
const PRODUCTS = [
  {
    id: 1,
    name: "Apex Quantum Dropper v4",
    price: "$1,299",
    description: "Enterprise-grade automated high-frequency liquidity router.",
    specs: ["99.99% Uptime", "Zero-Latency Routing", "End-to-End Encrypted"],
    tag: "Best Seller"
  },
  {
    id: 2,
    name: "Matrix Core Node Pro",
    price: "$2,450",
    description: "Decentralized hardware computation stack optimized for neural networks.",
    specs: ["256 Terahashes/s", "Liquid Cooled Chassis", "Plug-and-Play SaaS"],
    tag: "High Performance"
  }
];

export default function PremiumStorefront() {
  // States
  const [cartCount, setCartCount] = useState(0);
  const [activeTab, setActiveTab] = useState('shop'); // 'shop' | 'tracking' | 'checkout'
  const [notification, setNotification] = useState<string | null>(null);
  
  // Checkout Form States
  const [formData, setFormData] = useState({ name: '', email: '', address: '' });
  
  // Terminal Logs for Tracking Page
  const [terminalLogs, setTerminalLogs] = useState<string[]>([]);

  // Trigger professional toast notifications
  const triggerNotification = (message: string) => {
    setNotification(message);
    setTimeout(() => setNotification(null), 3000);
  };

  // Add to cart handler
  const addToCart = (productName: string) => {
    setCartCount(prev => prev + 1);
    triggerNotification(`Successfully added ${productName} to secure vault.`);
  };

  // Simulate Live Logistics Logs when on Tracking Page
  useEffect(() => {
    if (activeTab === 'tracking') {
      setTerminalLogs(["[SYSTEM] Initializing secure telemetry connection...", "[OK] Node connection secured via Dublin-1."]);
      
      const phrases = [
        "[INFO] Routing package through encrypted global pipeline.",
        "[LIVE] Border clearing verification status: APPROVED.",
        "[SUCCESS] Package handoff to regional autonomous delivery drone.",
        "[ONLINE] Real-time tracking telemetry heartbeat: STABLE."
      ];

      let currentPhraseIndex = 0;
      const interval = setInterval(() => {
        if (currentPhraseIndex < phrases.length) {
          setTerminalLogs(prev => [...prev, phrases[currentPhraseIndex]]);
          currentPhraseIndex++;
        } else {
          clearInterval(interval);
        }
      }, 2000);

      return () => clearInterval(interval);
    }
  }, [activeTab]);

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-zinc-800 selection:text-emerald-400">
      
      {/* Top Banner Toast Interface */}
      {notification && (
        <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 bg-zinc-900/90 backdrop-blur-md border border-emerald-500/30 text-emerald-400 px-6 py-3 rounded-xl shadow-[0_0_20px_rgba(16,185,129,0.1)] text-sm font-mono tracking-wide flex items-center gap-3 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
          {notification}
        </div>
      )}

      {/* Main Navigation Header */}
      <header className="sticky top-0 z-40 bg-black/70 backdrop-blur-md border-b border-zinc-800/80 px-4 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-zinc-700 to-zinc-400 flex items-center justify-center font-bold text-black tracking-tighter">
            Ω
          </div>
          <span className="font-mono text-lg font-bold tracking-widest text-zinc-200">APEX//MATRIX</span>
        </div>
        
        {/* Navigation Tabs */}
        <nav className="flex bg-zinc-900/50 border border-zinc-800 p-1 rounded-xl">
          <button 
            onClick={() => setActiveTab('shop')} 
            className={`px-4 py-1.5 rounded-lg text-xs font-medium tracking-wide transition-all ${activeTab === 'shop' ? 'bg-zinc-800 text-white shadow-inner' : 'text-zinc-400 hover:text-zinc-200'}`}
          >
            Storefront
          </button>
          <button 
            onClick={() => setActiveTab('checkout')} 
            className={`px-4 py-1.5 rounded-lg text-xs font-medium tracking-wide transition-all ${activeTab === 'checkout' ? 'bg-zinc-800 text-white shadow-inner' : 'text-zinc-400 hover:text-zinc-200'}`}
          >
            Checkout
          </button>
          <button 
            onClick={() => setActiveTab('tracking')} 
            className={`px-4 py-1.5 rounded-lg text-xs font-medium tracking-wide transition-all ${activeTab === 'tracking' ? 'bg-zinc-800 text-white shadow-inner' : 'text-zinc-400 hover:text-zinc-200'}`}
          >
            Live Tracking
          </button>
        </nav>

        {/* Dynamic Cart Icon Counter */}
        <div className="relative bg-zinc-900 border border-zinc-800 p-2.5 rounded-xl flex items-center justify-center hover:border-zinc-700 transition-colors">
          <svg className="w-5 h-5 text-zinc-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
          </svg>
          {cartCount > 0 && (
            <span className="absolute -top-1.5 -right-1.5 bg-white text-black font-mono text-[10px] font-black w-5 h-5 rounded-full flex items-center justify-center animate-pulse">
              {cartCount}
            </span>
          )}
        </div>
      </header>

      {/* Main Content Body */}
      <main className="max-w-7xl mx-auto px-4 lg:px-8 py-12">
        
        {/* TAB 1: PREMIUM STOREFRONT */}
        {activeTab === 'shop' && (
          <div>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 via-zinc-300 to-zinc-500 mb-4">
                Next-Gen Architectural Hardware Stacks
              </h1>
              <p className="text-zinc-400 text-sm tracking-wide font-mono">
                Engineered for continuous operation. Zero friction. Maximum terminal velocity.
              </p>
            </div>

            {/* Product Grid Layout */}
            <div className="grid md:grid-cols-2 gap-8">
              {PRODUCTS.map((product) => (
                <div key={product.id} className="bg-gradient-to-b from-zinc-900/40 to-zinc-950 border border-zinc-800/80 rounded-2xl p-6 lg:p-8 flex flex-col justify-between hover:border-zinc-700/60 hover:shadow-[0_0_30px_rgba(255,255,255,0.02)] transition-all group">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="bg-zinc-900 text-zinc-400 border border-zinc-800 rounded-full px-3 py-1 text-[10px] font-mono tracking-widest uppercase">
                        {product.tag}
                      </span>
                      <span className="text-xl font-mono font-bold tracking-tight text-zinc-200">{product.price}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-zinc-100 tracking-tight mb-2 group-hover:text-white transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                      {product.description}
                    </p>
                    <div className="border-t border-zinc-900 pt-4 mb-8">
                      <ul className="space-y-2">
                        {product.specs.map((spec, index) => (
                          <li key={index} className="text-xs text-zinc-500 font-mono flex items-center gap-2">
                            <span className="w-1 h-1 rounded-full bg-zinc-600"></span>
                            {spec}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <button 
                    onClick={() => addToCart(product.name)}
                    className="w-full bg-zinc-100 hover:bg-white text-black font-semibold text-sm tracking-wide py-3 px-4 rounded-xl transition-all shadow-md active:scale-[0.98]"
                  >
                    Deploy to Infrastructure
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 2: HIGH-END ENTERPRISE CHECKOUT */}
        {activeTab === 'checkout' && (
          <div className="max-w-xl mx-auto bg-zinc-950 border border-zinc-800 rounded-2xl p-6 lg:p-8">
            <div className="mb-8 border-b border-zinc-900 pb-4 flex justify-between items-center">
              <div>
                <h2 className="text-xl font-bold tracking-tight text-zinc-200">Secure Protocol Checkout</h2>
                <p className="text-xs text-zinc-500 font-mono mt-0.5">All transactions are multi-sig end-to-end encrypted.</p>
              </div>
              <span className="font-mono text-xs text-zinc-400 bg-zinc-900 px-2.5 py-1 rounded-lg border border-zinc-800">
                Items: {cartCount}
              </span>
            </div>

            {/* Form Fields */}
            <form onSubmit={(e) => { e.preventDefault(); triggerNotification("Order routing requested successfully."); setActiveTab('tracking'); }} className="space-y-5">
              <div>
                <label className="block text-xs font-mono text-zinc-400 tracking-wider uppercase mb-2">Operator Name</label>
                <input 
                  type="text" 
                  required 
                  placeholder="e.g., Captain Maverick"
                  className="w-full bg-zinc-900/60 border border-zinc-800 focus:border-zinc-600 rounded-xl px-4 py-3 text-sm text-zinc-200 placeholder-zinc-600 focus:outline-none transition-colors"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-xs font-mono text-zinc-400 tracking-wider uppercase mb-2">Secure Email Router</label>
                <input 
                  type="email" 
                  required 
                  placeholder="operator@domain.com"
                  className="w-full bg-zinc-900/60 border border-zinc-800 focus:border-zinc-600 rounded-xl px-4 py-3 text-sm text-zinc-200 placeholder-zinc-600 focus:outline-none transition-colors"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-xs font-mono text-zinc-400 tracking-wider uppercase mb-2">Terminal Coordinates (Delivery Address)</label>
                <textarea 
                  required 
                  rows={3}
                  placeholder="Physical drop-off location or localized facility logistics station details..."
                  className="w-full bg-zinc-900/60 border border-zinc-800 focus:border-zinc-600 rounded-xl px-4 py-3 text-sm text-zinc-200 placeholder-zinc-600 focus:outline-none transition-colors resize-none"
                  value={formData.address}
                  onChange={(e) => setFormData({...formData, address: e.target.value})}
                />
              </div>
              <button 
                type="submit"
                className="w-full mt-2 bg-gradient-to-r from-zinc-200 to-zinc-400 hover:from-white hover:to-zinc-200 text-black font-bold text-sm tracking-wider py-3.5 px-4 rounded-xl transition-all shadow-lg shadow-zinc-950/50"
              >
                Execute Vault Clearance & Pay
              </button>
            </form>
          </div>
        )}

        {/* TAB 3: MATRIX LIVE LOGISTICS LOGS TERMINAL */}
        {activeTab === 'tracking' && (
          <div className="max-w-2xl mx-auto">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"></span>
                <h2 className="text-sm font-mono tracking-widest text-zinc-400 uppercase">Live Pipeline Telemetry</h2>
              </div>
              <span className="text-[10px] font-mono text-zinc-600">ID: APX-9821-SYS</span>
            </div>

            {/* Command Line Terminal Window */}
            <div className="bg-zinc-950 border border-zinc-800/80 rounded-2xl p-6 font-mono text-xs leading-relaxed text-zinc-300 shadow-2xl overflow-hidden min-h-[280px]">
              <div className="flex items-center gap-1.5 border-b border-zinc-900 pb-3 mb-4">
                <div className="w-2.5 h-2.5 rounded-full bg-zinc-800"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-zinc-800"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-zinc-800"></div>
                <span className="text-[10px] text-zinc-600 ml-2">secure_telemetry_agent.sh</span>
              </div>
              
              <div className="space-y-2.5">
                {terminalLogs.map((log, index) => (
                  <div key={index} className="flex items-start gap-2 animate-fade-in">
                    <span className="text-zinc-600 select-none">&gt;</span>
                    <p className={log.includes('[OK]') || log.includes('[SUCCESS]') ? 'text-emerald-400' : log.includes('[SYSTEM]') ? 'text-zinc-400 font-bold' : 'text-zinc-300'}>
                      {log}
                    </p>
                  </div>
                ))}
                <div className="w-1.5 h-4 bg-zinc-400 animate-pulse inline-block mt-1"></div>
              </div>
            </div>
            <p className="text-center text-[10px] text-zinc-600 font-mono mt-4">
              Updates stream automatically in real-time. Do not close connection tunnel.
            </p>
          </div>
        )}

      </main>

      {/* Footer Branding Statement */}
      <footer className="border-t border-zinc-900 py-8 mt-20 text-center">
        <p className="text-[11px] font-mono text-zinc-600 tracking-widest">
          &copy; 2026 APEXMATRIX LABS. QUANTUM COMPUTATION SYSTEMS SECURED INDEFINITELY.
        </p>
      </footer>

    </div>
  );
                  }
