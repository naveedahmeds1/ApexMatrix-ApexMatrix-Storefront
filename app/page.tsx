"use client";

import React, { useState, useEffect } from 'react';

const PRODUCTS = [
  {
    id: 1,
    name: "Apex Quantum Dropper v4",
    tagline: "The speed of light. Now enterprise grade.",
    price: "$1,299",
    description: "Our most advanced automated high-frequency liquidity router. Engineered with surgical precision for flawless financial telemetry and zero-friction execution.",
    specs: ["99.999% Guaranteed Network Uptime", "Zero-Latency Custom Fiber Routing", "Multi-Layer Silicon-Level Encryption"],
    badge: "Pro Edition"
  },
  {
    id: 2,
    name: "Matrix Core Node Pro",
    tagline: "Neural computing. Decentralized.",
    price: "$2,450",
    description: "A liquid-cooled hardware computation stack built explicitly for deep learning, local artificial intelligence nodes, and complex algorithmic clustering.",
    specs: ["256 Terahashes/s Neural Processor", "Sintered Ceramic Liquid-Cooled Chassis", "Instant Out-of-the-Box API Integration"],
    badge: "Limited Drop"
  }
];

export default function LuxuryStorefront() {
  const [cartCount, setCartCount] = useState(0);
  const [activeTab, setActiveTab] = useState('shop');
  const [notification, setNotification] = useState<string | null>(null);
  const [formData, setFormData] = useState({ name: '', email: '', address: '' });
  const [terminalLogs, setTerminalLogs] = useState<string[]>([]);

  const triggerNotification = (message: string) => {
    setNotification(message);
    setTimeout(() => setNotification(null), 3500);
  };

  const addToCart = (productName: string) => {
    setCartCount(prev => prev + 1);
    triggerNotification(`Added ${productName} to secure allocation.`);
  };

  useEffect(() => {
    if (activeTab === 'tracking') {
      setTerminalLogs(["[SYSTEM] Connecting to global logistics telemetry...", "[OK] Secure handshake established via Dublin-1 Node."]);
      const phrases = [
        "[PIPELINE] Package verified at primary distribution hub.",
        "[LOGISTICS] Customs authorization cleared successfully.",
        "[ROUTE] Dispatching autonomous delivery drone vector.",
        "[STATUS] Telemetry link stable. Estimated drop imminent."
      ];
      let i = 0;
      const interval = setInterval(() => {
        if (i < phrases.length) {
          setTerminalLogs(prev => [...prev, phrases[i]]);
          i++;
        } else {
          clearInterval(interval);
        }
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [activeTab]);

  return (
    <div className="min-h-screen bg-[#000000] text-[#f5f5f7] font-sans antialiased tracking-tight selection:bg-zinc-800 selection:text-white">
      
      {/* Dynamic Minimalist Apple Toast */}
      {notification && (
        <div className="fixed top-8 left-1/2 -translate-x-1/2 z-50 bg-zinc-900/80 backdrop-blur-2xl border border-zinc-800/60 text-white px-6 py-3 rounded-full text-xs font-medium tracking-wide shadow-[0_25px_60px_rgba(0,0,0,0.8)] transition-all flex items-center gap-3">
          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
          {notification}
        </div>
      )}

      {/* Luxury Glassmorphic Navigation Bar */}
      <header className="sticky top-0 z-40 bg-black/70 backdrop-blur-xl border-b border-zinc-900/50 px-6 lg:px-16 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-5 h-5 rounded-full bg-gradient-to-b from-zinc-100 to-zinc-400 flex items-center justify-center text-[10px] font-black text-black">
            ✦
          </div>
          <span className="font-mono text-xs font-bold tracking-[0.3em] text-zinc-400 uppercase">APEX//MATRIX</span>
        </div>
        
        {/* Apple Style Smooth Control Tabs */}
        <nav className="flex bg-zinc-900/40 border border-zinc-800/60 p-1 rounded-full">
          <button onClick={() => setActiveTab('shop')} className={`px-5 py-1.5 rounded-full text-xs transition-all duration-300 ${activeTab === 'shop' ? 'bg-white text-black font-semibold shadow-sm' : 'text-zinc-400 hover:text-zinc-200'}`}>Store</button>
          <button onClick={() => setActiveTab('checkout')} className={`px-5 py-1.5 rounded-full text-xs transition-all duration-300 ${activeTab === 'checkout' ? 'bg-white text-black font-semibold shadow-sm' : 'text-zinc-400 hover:text-zinc-200'}`}>Checkout</button>
          <button onClick={() => setActiveTab('tracking')} className={`px-5 py-1.5 rounded-full text-xs transition-all duration-300 ${activeTab === 'tracking' ? 'bg-white text-black font-semibold shadow-sm' : 'text-zinc-400 hover:text-zinc-200'}`}>Telemetry</button>
        </nav>

        {/* System Bag Icon */}
        <div className="relative bg-zinc-900/60 border border-zinc-800/80 w-9 h-9 rounded-full flex items-center justify-center hover:bg-zinc-800 transition-all cursor-pointer">
          <span className="text-xs text-zinc-300">⚡</span>
          {cartCount > 0 && (
            <span className="absolute -top-0.5 -right-0.5 bg-white text-black font-mono text-[9px] font-black w-4 h-4 rounded-full flex items-center justify-center shadow-md">
              {cartCount}
            </span>
          )}
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-5xl mx-auto px-6 py-20 lg:py-28">
        
        {/* APPLE ISH HIGH-END PRODUCT SHOWCASE */}
        {activeTab === 'shop' && (
          <div>
            <div className="text-center max-w-2xl mx-auto mb-24">
              <h1 className="text-4xl lg:text-6xl font-semibold tracking-tight text-white mb-6 leading-[1.1]">
                Tomorrow's Hardware. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-b from-zinc-100 via-zinc-400 to-zinc-600">
                  Available for allocation today.
                </span>
              </h1>
              <p className="text-zinc-500 text-sm max-w-md mx-auto leading-relaxed font-normal">
                Surgically built computing devices designed for high-performance networks, continuous operation, and absolute luxury interfaces.
              </p>
            </div>

            {/* $1k Premium Product Grid */}
            <div className="grid md:grid-cols-2 gap-10 lg:gap-14">
              {PRODUCTS.map((product) => (
                <div key={product.id} className="bg-gradient-to-b from-zinc-950 to-black border border-zinc-900 rounded-[2.5rem] p-8 lg:p-10 flex flex-col justify-between hover:border-zinc-800 transition-all duration-500 group shadow-2xl relative">
                  <div>
                    <div className="flex items-center justify-between mb-8">
                      <span className="text-[9px] font-mono font-semibold tracking-widest uppercase text-zinc-400 bg-zinc-900 px-3 py-1 rounded-full border border-zinc-800/50">
                        {product.badge}
                      </span>
                      <span className="text-sm font-mono text-zinc-400 font-medium">{product.price}</span>
                    </div>
                    
                    <h3 className="text-2xl lg:text-3xl font-medium text-white tracking-tight mb-1">
                      {product.name}
                    </h3>
                    <p className="text-xs text-zinc-500 font-mono tracking-wide mb-5 uppercase">{product.tagline}</p>
                    
                    <p className="text-zinc-400 text-sm leading-relaxed mb-8 font-light">
                      {product.description}
                    </p>
                    
                    <div className="border-t border-zinc-900 pt-6 mb-10">
                      <ul className="space-y-3">
                        {product.specs.map((spec, index) => (
                          <li key={index} className="text-xs text-zinc-500 flex items-center gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-zinc-700"></span>
                            {spec}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <button 
                    onClick={() => addToCart(product.name)} 
                    className="w-full bg-[#f5f5f7] hover:bg-white text-black font-medium text-xs py-4 rounded-2xl transition-all duration-300 active:scale-[0.98] shadow-md"
                  >
                    Request Allocation
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ULTRA-CLEAN LUXURY CHECKOUT */}
        {activeTab === 'checkout' && (
          <div className="max-w-md mx-auto bg-zinc-950 border border-zinc-900 rounded-[2rem] p-8 lg:p-10 shadow-2xl">
            <div className="mb-8">
              <h2 className="text-2xl font-normal text-white tracking-tight">System Initialization</h2>
              <p className="text-xs text-zinc-500 mt-1">Provide secure terminal data for logistics pipeline clearance.</p>
            </div>
            
            <form onSubmit={(e) => { e.preventDefault(); triggerNotification("Routing telemetry package..."); setActiveTab('tracking'); }} className="space-y-4">
              <input type="text" required placeholder="Full Name" className="w-full bg-zinc-900/30 border border-zinc-900 focus:border-zinc-700 rounded-2xl px-4 py-3.5 text-xs text-zinc-200 placeholder-zinc-600 focus:outline-none transition-all" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} />
              <input type="email" required placeholder="Network Routing Email" className="w-full bg-zinc-900/30 border border-zinc-900 focus:border-zinc-700 rounded-2xl px-4 py-3.5 text-xs text-zinc-200 placeholder-zinc-600 focus:outline-none transition-all" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
              <textarea required rows={3} placeholder="Terminal Delivery Coordinates" className="w-full bg-zinc-900/30 border border-zinc-900 focus:border-zinc-700 rounded-2xl px-4 py-3.5 text-xs text-zinc-200 placeholder-zinc-600 focus:outline-none resize-none transition-all" value={formData.address} onChange={(e) => setFormData({...formData, address: e.target.value})} />
              <button type="submit" className="w-full bg-white hover:bg-[#f5f5f7] text-black font-semibold text-xs py-4 rounded-2xl mt-2 transition-all shadow-lg active:scale-[0.98]">
                Authorize Secure Link
              </button>
            </form>
          </div>
        )}

        {/* LOGISTICS RADAR TERMINAL */}
        {activeTab === 'tracking' && (
          <div className="max-w-xl mx-auto">
            <div className="flex items-center justify-between mb-5 px-1">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping"></span>
                <h2 className="text-xs font-mono tracking-widest text-zinc-400 uppercase">Live Pipeline Telemetry</h2>
              </div>
              <span className="text-[10px] font-mono text-zinc-600">UPLINK ENCRYPTED</span>
            </div>

            <div className="bg-zinc-950/80 backdrop-blur-md border border-zinc-900 rounded-2xl p-6 font-mono text-xs text-zinc-300 min-h-[250px] shadow-2xl">
              <div className="space-y-3.5">
                {terminalLogs.map((log, index) => (
                  <p key={index} className={`animate-fade-in ${log.includes('[OK]') || log.includes('[STATUS]') ? 'text-zinc-200 font-medium' : 'text-zinc-500'}`}>
                    &gt; {log}
                  </p>
                ))}
                <div className="w-1.5 h-3.5 bg-zinc-600 animate-pulse inline-block align-middle"></div>
              </div>
            </div>
          </div>
        )}

      </main>

      {/* Premium Apple Fine-Print Footer */}
      <footer className="py-16 border-t border-zinc-950 text-center">
        <p className="text-[10px] font-mono text-zinc-600 tracking-[0.2em] uppercase">
          &copy; 2026 APEXMATRIX LABS INC. QUANTUM HARDWARE DESIGNED IN CALIFORNIA.
        </p>
      </footer>

    </div>
  );
              }
