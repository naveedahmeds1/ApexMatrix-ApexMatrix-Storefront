"use client";

import React, { useState, useEffect } from 'react';

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
  const [cartCount, setCartCount] = useState(0);
  const [activeTab, setActiveTab] = useState('shop');
  const [notification, setNotification] = useState<string | null>(null);
  const [formData, setFormData] = useState({ name: '', email: '', address: '' });
  const [terminalLogs, setTerminalLogs] = useState<string[]>([]);

  const triggerNotification = (message: string) => {
    setNotification(message);
    setTimeout(() => setNotification(null), 3000);
  };

  const addToCart = (productName: string) => {
    setCartCount(prev => prev + 1);
    triggerNotification(`Successfully added ${productName} to secure vault.`);
  };

  useEffect(() => {
    if (activeTab === 'tracking') {
      setTerminalLogs(["[SYSTEM] Initializing secure telemetry connection...", "[OK] Node connection secured via Dublin-1."]);
      const phrases = [
        "[INFO] Routing package through encrypted global pipeline.",
        "[LIVE] Border clearing verification status: APPROVED.",
        "[SUCCESS] Package handoff to regional autonomous delivery drone.",
        "[ONLINE] Real-time tracking telemetry heartbeat: STABLE."
      ];
      let i = 0;
      const interval = setInterval(() => {
        if (i < phrases.length) {
          setTerminalLogs(prev => [...prev, phrases[i]]);
          i++;
        } else {
          clearInterval(interval);
        }
      }, 1500);
      return () => clearInterval(interval);
    }
  }, [activeTab]);

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-zinc-800 selection:text-emerald-400 relative">
      
      {notification && (
        <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 bg-zinc-900/90 backdrop-blur-md border border-emerald-500/30 text-emerald-400 px-6 py-3 rounded-xl text-sm font-mono flex items-center gap-3 shadow-lg">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
          {notification}
        </div>
      )}

      <header className="sticky top-0 z-40 bg-black/70 backdrop-blur-md border-b border-zinc-800/80 px-4 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-zinc-700 flex items-center justify-center font-bold text-black">Ω</div>
          <span className="font-mono text-base font-bold tracking-widest text-zinc-200">APEX//MATRIX</span>
        </div>
        
        <nav className="flex bg-zinc-900/50 border border-zinc-800 p-1 rounded-xl">
          <button onClick={() => setActiveTab('shop')} className={`px-3 py-1 rounded-lg text-xs font-mono ${activeTab === 'shop' ? 'bg-zinc-800 text-white' : 'text-zinc-400'}`}>Storefront</button>
          <button onClick={() => setActiveTab('checkout')} className={`px-3 py-1 rounded-lg text-xs font-mono ${activeTab === 'checkout' ? 'bg-zinc-800 text-white' : 'text-zinc-400'}`}>Checkout</button>
          <button onClick={() => setActiveTab('tracking')} className={`px-3 py-1 rounded-lg text-xs font-mono ${activeTab === 'tracking' ? 'bg-zinc-800 text-white' : 'text-zinc-400'}`}>Tracking</button>
        </nav>

        <div className="relative bg-zinc-900 border border-zinc-800 p-2 rounded-xl flex items-center justify-center">
          <span className="text-sm">🛒</span>
          {cartCount > 0 && (
            <span className="absolute -top-1.5 -right-1.5 bg-white text-black font-mono text-[10px] font-black w-4 h-4 rounded-full flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-12">
        {activeTab === 'shop' && (
          <div>
            <div className="text-center max-w-xl mx-auto mb-12">
              <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-2 bg-gradient-to-r from-zinc-100 to-zinc-500 bg-clip-text text-transparent">Architectural Hardware Stacks</h1>
              <p className="text-zinc-400 text-xs font-mono">Engineered for continuous operations. Zero friction.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {PRODUCTS.map((product) => (
                <div key={product.id} className="bg-zinc-950 border border-zinc-800 rounded-2xl p-6 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="bg-zinc-900 text-zinc-400 px-2 py-0.5 rounded text-[10px] font-mono">{product.tag}</span>
                      <span className="text-lg font-mono font-bold text-zinc-200">{product.price}</span>
                    </div>
                    <h3 className="text-xl font-bold text-zinc-100 mb-2">{product.name}</h3>
                    <p className="text-zinc-400 text-sm mb-4">{product.description}</p>
                    <ul className="space-y-1 mb-6 border-t border-zinc-900 pt-3">
                      {product.specs.map((spec, index) => (
                        <li key={index} className="text-xs text-zinc-500 font-mono flex items-center gap-2">
                          <span className="w-1 h-1 rounded-full bg-zinc-600"></span>{spec}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <button onClick={() => addToCart(product.name)} className="w-full bg-zinc-100 hover:bg-white text-black font-bold text-xs py-2.5 rounded-xl transition-all">
                    Deploy to Infrastructure
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'checkout' && (
          <div className="max-w-md mx-auto bg-zinc-950 border border-zinc-800 rounded-2xl p-6">
            <h2 className="text-lg font-bold text-zinc-200 mb-1">Secure Protocol Checkout</h2>
            <p className="text-xs text-zinc-500 font-mono mb-4">Multi-sig end-to-end encrypted link.</p>
            <form onSubmit={(e) => { e.preventDefault(); triggerNotification("Routing order..."); setActiveTab('tracking'); }} className="space-y-4">
              <input type="text" required placeholder="Operator Name" className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-3 py-2 text-xs text-zinc-200 focus:outline-none" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} />
              <input type="email" required placeholder="Secure Email Router" className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-3 py-2 text-xs text-zinc-200 focus:outline-none" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
              <textarea required rows={3} placeholder="Terminal Coordinates (Address)" className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-3 py-2 text-xs text-zinc-200 focus:outline-none resize-none" value={formData.address} onChange={(e) => setFormData({...formData, address: e.target.value})} />
              <button type="submit" className="w-full bg-gradient-to-r from-zinc-200 to-zinc-400 text-black font-bold text-xs py-3 rounded-xl">Execute Vault Clearance</button>
            </form>
          </div>
        )}

        {activeTab === 'tracking' && (
          <div className="max-w-xl mx-auto">
            <h2 className="text-xs font-mono text-zinc-400 uppercase tracking-widest mb-3">Live Pipeline Telemetry</h2>
            <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-5 font-mono text-[11px] text-zinc-300 min-h-[220px]">
              <div className="space-y-2">
                {terminalLogs.map((log, index) => (
                  <p key={index} className={log.includes('[OK]') || log.includes('[SUCCESS]') ? 'text-emerald-400' : 'text-zinc-300'}>
                    &gt; {log}
                  </p>
                ))}
                <div className="w-1.5 h-3 bg-zinc-500 animate-pulse inline-block"></div>
              </div>
            </div>
          </div>
        )}
      </main>

      <footer className="py-8 text-center border-t border-zinc-900 mt-12">
        <p className="text-[10px] font-mono text-zinc-600 tracking-wider">&copy; 2026 APEXMATRIX LABS. QUANTUM CORE STACKS SECURED.</p>
      </footer>

    </div>
  );
                      }
