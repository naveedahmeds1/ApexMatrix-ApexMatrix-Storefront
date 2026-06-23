'use client';

import React, { useState, useEffect } from 'react';

// === PREMIUM PRODUCTION SCHEMAS ===
interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

interface AdvancedOrderMetadata {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  postalCode: string;
  country: string;
  paymentMethod: 'card' | 'crypto' | 'cod';
  cardNumber: string;
  cardExpiry: string;
  cardCvc: string;
  cryptoWallet: string;
}

// === PREMIUM DATA STORAGE MATRIX ===
const ECOM_PRODUCTS = [
  { id: 'p1', name: 'AeroGlide Mechanical Keyboard', category: 'Peripherals', price: 149.00, img: '⌨️', desc: 'Gasket-mounted hot-swappable tactile deck.' },
  { id: 'p2', name: 'QuantumCore ANC Headphones', category: 'Audio', price: 299.50, img: '🎧', desc: 'Hybrid active noise cancellation with hi-res audio.' },
  { id: 'p3', name: 'LuminaDesk Ergonomic Mouse', category: 'Peripherals', price: 89.00, img: '🖱️', desc: 'Precision tracking with magnetic infinite scroll.' },
  { id: 'p4', name: 'ApexMatrix 4K Pro Monitor', category: 'Displays', price: 549.00, img: '🖥️', desc: 'Mini-LED 144Hz ultra-wide color spectrum monitor.' },
];

export default function StandaloneEcommerceHub() {
  // Application Window Router: storefront | checkout | tracking
  const [activeApp, setActiveApp] = useState<'storefront' | 'checkout' | 'tracking'>('storefront');
  const [checkoutStep, setCheckoutStep] = useState<1 | 2 | 3>(1);

  // --- Operational State Managers ---
  const [ecomCart, setEcomCart] = useState<CartItem[]>([]);
  const [notification, setNotification] = useState<string | null>(null);
  const [couponCode, setCouponCode] = useState('');
  const [appliedDiscount, setAppliedDiscount] = useState(0);

  // --- Form Matrix States ---
  const [formValues, setFormValues] = useState<AdvancedOrderMetadata>({
    fullName: '', email: '', phone: '', address: '', postalCode: '', country: 'Pakistan (PK)',
    paymentMethod: 'card', cardNumber: '', cardExpiry: '', cardCvc: '', cryptoWallet: ''
  });

  // --- Live Logistics Streams ---
  const [trackingEta, setTrackingEta] = useState(45);
  const [trackingStatus, setTrackingStatus] = useState<'processing' | 'clearing' | 'transit' | 'delivered'>('processing');
  const [telemetryLogs, setTelemetryLogs] = useState<string[]>([]);

  // Telemetry real-time generator loop
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (activeApp === 'tracking') {
      setTelemetryLogs(['[SYSTEM]: Initializing secure routing nodes...', '[PAYMENT]: Hash token validated successfully.']);
      timer = setInterval(() => {
        setTrackingEta((prev) => {
          if (prev <= 1) {
            setTrackingStatus('delivered');
            setTelemetryLogs(l => [...l, '[SUCCESS]: Package securely dispatched to target address layer.']);
            clearInterval(timer);
            return 0;
          }
          if (prev === 30) {
            setTrackingStatus('clearing');
            setTelemetryLogs(l => [...l, '[LOGISTICS]: Customs and routing clearance verification complete.']);
          }
          if (prev === 15) {
            setTrackingStatus('transit');
            setTelemetryLogs(l => [...l, '[COUPLER]: Handed over to autonomous delivery node matrix.']);
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [activeApp]);

  const triggerNotification = (msg: string) => {
    setNotification(msg);
    setTimeout(() => setNotification(null), 4500);
  };

  // --- Mutation Business Logic ---
  const addToCartEngine = (item: { id: string; name: string; price: number }) => {
    setEcomCart(prev => {
      const exists = prev.find(i => i.id === item.id);
      if (exists) return prev.map(i => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i);
      return [...prev, { id: item.id, name: item.name, price: item.price, quantity: 1 }];
    });
    triggerNotification(`Added ${item.name} to standard data ledger buffers.`);
  };

  const updateQuantityEngine = (id: string, delta: number) => {
    setEcomCart(prev => prev.map(i => i.id === id ? { ...i, quantity: i.quantity + delta } : i).filter(i => i.quantity > 0));
  };

  // --- Enterprise Calculation Pipeline ---
  const subtotal = ecomCart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const shippingFee = subtotal > 300 || subtotal === 0 ? 0 : 25.00;
  const internationalTax = subtotal * 0.12; // 12% Standard International Customs Premium
  const grandTotal = subtotal + shippingFee + internationalTax - appliedDiscount;

  const applyPromoCode = () => {
    if (couponCode.toUpperCase() === 'VELOCE30') {
      setAppliedDiscount(subtotal * 0.30);
      triggerNotification("🎉 Code Verified: 30% System Discount Node Activated!");
    } else {
      triggerNotification("⚠️ Invalid validation sequence string.");
    }
  };

  const startCheckoutFlow = () => {
    if (ecomCart.length === 0) {
      triggerNotification("⚠️ Process aborted: Awaiting buffer population parameters.");
      return;
    }
    setCheckoutStep(1);
    setActiveApp('checkout');
  };

  return (
    <div className="min-h-screen bg-black text-white relative font-sans antialiased overflow-x-hidden">
      
      {/* Top Banner Toast Interface */}
      {notification && (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-md bg-zinc-950 border border-purple-500/40 text-purple-400 font-mono text-[11px] p-4 rounded-xl shadow-2xl flex items-center justify-between backdrop-blur-md">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-ping" />
            <span>{notification}</span>
          </div>
          <button onClick={() => setNotification(null)} className="text-zinc-500 hover:text-white font-bold ml-2">×</button>
        </div>
      )}

      {/* ================= MODULE 01: HIGH CONVERSION STOREFRONT ================= */}
      {activeApp === 'storefront' && (
        <main className="min-h-screen max-w-5xl mx-auto px-4 py-12 text-left">
          <div className="w-full flex justify-between items-center mb-10 bg-zinc-950 border border-zinc-900 p-4 rounded-xl shadow-xl">
            <span className="text-sm font-bold bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent tracking-tight">ApexMatrix Hub</span>
            <span className="text-xs font-mono text-zinc-400">
              Cart Value: <span className="text-emerald-400 font-bold">${subtotal.toFixed(2)}</span>
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <div className="border-b border-zinc-900 pb-4">
                <span className="text-[9px] font-mono font-bold tracking-widest text-blue-400 bg-blue-500/10 px-2.5 py-1 rounded border border-blue-500/20 uppercase">PRODUCTION MATRIX ENTERPRISE</span>
                <h1 className="text-3xl font-black tracking-tight mt-3">Next-Gen Hardware Matrix</h1>
                <p className="text-zinc-500 text-xs mt-1">High conversion lightning fast storefront simulation architecture ($1K+ Premium Template)</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {ECOM_PRODUCTS.map((prod) => (
                  <div key={prod.id} className="bg-zinc-950 border border-zinc-900 rounded-2xl p-5 flex flex-col justify-between hover:border-zinc-800 transition-all duration-300 group">
                    <div>
                      <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-2xl mb-4 group-hover:scale-105 transition-transform">{prod.img}</div>
                      <span className="text-[10px] font-mono font-bold text-zinc-500 uppercase">{prod.category}</span>
                      <h3 className="text-base font-bold text-white mt-0.5">{prod.name}</h3>
                      <p className="text-xs text-zinc-400 mt-2 leading-relaxed">{prod.desc}</p>
                    </div>
                    <div className="flex justify-between items-center mt-6 pt-3 border-t border-zinc-900/60">
                      <span className="text-sm font-mono font-bold text-emerald-400">${prod.price.toFixed(2)}</span>
                      <button onClick={() => addToCartEngine(prod)} className="bg-blue-600 hover:bg-blue-500 text-white font-bold text-[10px] px-3 py-1.5 rounded-lg transition-colors">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dynamic Module Cart */}
            <div className="bg-zinc-950 border border-zinc-900 rounded-2xl p-5 h-fit font-mono">
              <h2 className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-4 pb-2 border-b border-zinc-900">Real-Time Core Matrix</h2>
              {ecomCart.length === 0 ? (
                <p className="text-[10px] text-zinc-600 text-center py-10">Cart node matrix is completely vacant.</p>
              ) : (
                <div className="space-y-3 mb-6 max-h-[260px] overflow-y-auto pr-1">
                  {ecomCart.map(item => (
                    <div key={item.id} className="bg-black border border-zinc-900 p-3 rounded-xl flex flex-col gap-2">
                      <div className="flex justify-between text-xs text-zinc-200 font-sans font-bold">
                        <span className="truncate max-w-[130px]">{item.name}</span>
                        <span className="text-emerald-400 font-mono">${(item.price * item.quantity).toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-[10px] text-zinc-500">${item.price.toFixed(2)} each</span>
                        <div className="flex items-center gap-1.5 bg-zinc-900 border border-zinc-800 p-0.5 rounded">
                          <button onClick={() => updateQuantityEngine(item.id, -1)} className="text-zinc-500 hover:text-white px-1">-</button>
                          <span className="text-[11px] text-zinc-300 font-bold px-1">{item.quantity}</span>
                          <button onClick={() => updateQuantityEngine(item.id, 1)} className="text-zinc-500 hover:text-white px-1">+</button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              <button onClick={startCheckoutFlow} className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-[11px] font-black py-3.5 rounded-xl uppercase tracking-widest shadow-xl shadow-blue-600/10">
                Execute Secure Pipeline
              </button>
            </div>
          </div>
        </main>
      )}

      {/* ================= MODULE 02: ELITE CHECKOUT ENGINE ================= */}
      {activeApp === 'checkout' && (
        <main className="min-h-screen bg-zinc-950 text-white px-4 py-16 font-sans">
          <div className="max-w-5xl mx-auto text-left">
            <button onClick={() => setActiveApp('storefront')} className="text-xs font-mono text-zinc-500 hover:text-white mb-8 block transition-colors">
              ← DISCONNECT INTERFACE CHAIN
            </button>

            {/* Stepper Pipeline Architecture Progress Bar */}
            <div className="grid grid-cols-3 gap-4 mb-10 font-mono text-[10px] text-zinc-500 uppercase tracking-wider text-center">
              <div className={`pb-2 border-b-2 transition-all ${checkoutStep >= 1 ? 'border-purple-500 text-purple-400 font-bold' : 'border-zinc-800'}`}>01 / Shipping Topology</div>
              <div className={`pb-2 border-b-2 transition-all ${checkoutStep >= 2 ? 'border-purple-500 text-purple-400 font-bold' : 'border-zinc-800'}`}>02 / Payment Gateway</div>
              <div className={`pb-2 border-b-2 transition-all ${checkoutStep >= 3 ? 'border-purple-500 text-purple-400 font-bold' : 'border-zinc-800'}`}>03 / Authentication Review</div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
              {/* Core Forms Framework Step System */}
              <div className="lg:col-span-3 bg-black border border-zinc-900 rounded-2xl p-6 shadow-2xl">
                
                {checkoutStep === 1 && (
                  <div className="space-y-4">
                    <h3 className="text-lg font-bold tracking-tight text-white mb-4">International Customer Delivery Nodes</h3>
                    <div>
                      <label className="block text-[10px] font-mono text-zinc-500 uppercase mb-1">Legal Full Name *</label>
                      <input type="text" required value={formValues.fullName} onChange={e => setFormValues({...formValues, fullName: e.target.value})} placeholder="Alex Mercer" className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-3 text-xs text-white outline-none focus:border-purple-500 transition-all" />
                    </div>
                    <div>
                      <label className="block text-[10px] font-mono text-zinc-500 uppercase mb-1">Communication Contact Email *</label>
                      <input type="email" required value={formValues.email} onChange={e => setFormValues({...formValues, email: e.target.value})} placeholder="alex@matrix-node.io" className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-3 text-xs text-white outline-none focus:border-purple-500 transition-all" />
                    </div>
                    <div>
                      <label className="block text-[10px] font-mono text-zinc-500 uppercase mb-1">Mobile Contact Payload *</label>
                      <input type="tel" required value={formValues.phone} onChange={e => setFormValues({...formValues, phone: e.target.value})} placeholder="+92 300 1234567" className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-3 text-xs text-white outline-none focus:border-purple-500 transition-all" />
                    </div>
                    <div>
                      <label className="block text-[10px] font-mono text-zinc-500 uppercase mb-1">Physical Street Destination Address *</label>
                      <input type="text" required value={formValues.address} onChange={e => setFormValues({...formValues, address: e.target.value})} placeholder="Suite 404, Cyber Tower Node Alpha" className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-3 text-xs text-white outline-none focus:border-purple-500 transition-all" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[10px] font-mono text-zinc-500 uppercase mb-1">Postal Node ZIP</label>
                        <input type="text" value={formValues.postalCode} onChange={e => setFormValues({...formValues, postalCode: e.target.value})} placeholder="75500" className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-3 text-xs text-white outline-none focus:border-purple-500 transition-all" />
                      </div>
                      <div>
                        <label className="block text-[10px] font-mono text-zinc-500 uppercase mb-1">Geopolitical Region Country</label>
                        <select value={formValues.country} onChange={e => setFormValues({...formValues, country: e.target.value})} className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-3 text-xs text-zinc-400 outline-none">
                          <option>Pakistan (PK)</option>
                          <option>United States (US)</option>
                          <option>United Kingdom (UK)</option>
                        </select>
                      </div>
                    </div>
                    <button onClick={() => { if(formValues.fullName && formValues.address && formValues.email) setCheckoutStep(2); else triggerNotification("⚠️ Required metrics coordinates validation missing."); }} className="w-full mt-4 bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs py-3.5 rounded-xl uppercase tracking-wider transition-all">Proceed to Gateway Allocation</button>
                  </div>
                )}

                {checkoutStep === 2 && (
                  <div className="space-y-4">
                    <h3 className="text-lg font-bold tracking-tight text-white mb-4">Enterprise Payment Protocol Interface</h3>
                    <div className="grid grid-cols-3 gap-2">
                      {([['card','💳 CARD'], ['crypto','🪙 CRYPTO'], ['cod','💵 MATRIX COD']] as const).map(([type, label]) => (
                        <button key={type} onClick={() => setFormValues({...formValues, paymentMethod: type})} className={`p-3 text-[10px] font-mono font-bold rounded-xl border transition-all text-center ${formValues.paymentMethod === type ? 'bg-purple-600/10 border-purple-500 text-purple-400' : 'bg-zinc-950 border-zinc-900 text-zinc-500'}`}>
                          {label}
                        </button>
                      ))}
                    </div>

                    {formValues.paymentMethod === 'card' && (
                      <div className="space-y-3 pt-2">
                        <div>
                          <label className="block text-[9px] font-mono text-zinc-500 uppercase mb-1">Global Card Number</label>
                          <input type="text" value={formValues.cardNumber} onChange={e => setFormValues({...formValues, cardNumber: e.target.value})} placeholder="4242 4242 4242 4242" className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-3 text-xs text-white font-mono outline-none focus:border-purple-500" />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-[9px] font-mono text-zinc-500 uppercase mb-1">Expiry Matrix</label>
                            <input type="text" value={formValues.cardExpiry} onChange={e => setFormValues({...formValues, cardExpiry: e.target.value})} placeholder="MM/YY" className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-3 text-xs text-white font-mono outline-none focus:border-purple-500" />
                          </div>
                          <div>
                            <label className="block text-[9px] font-mono text-zinc-500 uppercase mb-1">CVC Verification Node</label>
                            <input type="password" maxLength={3} value={formValues.cardCvc} onChange={e => setFormValues({...formValues, cardCvc: e.target.value})} placeholder="•••" className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-3 text-xs text-white font-mono outline-none focus:border-purple-500" />
                          </div>
                        </div>
                      </div>
                    )}

                    {formValues.paymentMethod === 'crypto' && (
                      <div className="pt-2">
                        <label className="block text-[9px] font-mono text-zinc-500 uppercase mb-1">Autonomous Web3 Crypto Wallet Address</label>
                        <input type="text" value={formValues.cryptoWallet} onChange={e => setFormValues({...formValues, cryptoWallet: e.target.value})} placeholder="0x71C...3A90" className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-3 text-xs text-white font-mono outline-none focus:border-purple-500" />
                      </div>
                    )}

                    <div className="flex gap-2 pt-4">
                      <button onClick={() => setCheckoutStep(1)} className="w-1/3 bg-zinc-900 text-zinc-400 text-xs py-3.5 rounded-xl font-bold uppercase border border-zinc-800">Back</button>
                      <button onClick={() => setCheckoutStep(3)} className="w-2/3
