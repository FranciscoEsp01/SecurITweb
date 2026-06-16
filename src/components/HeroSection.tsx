import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, ChevronRight } from 'lucide-react';

const TerminalLine: React.FC<{ children: React.ReactNode; delay?: number }> = ({ children, delay = 0 }) => {
  const [displayedText, setDisplayedText] = useState('');
  const text = typeof children === 'string' ? children : '';

  useEffect(() => {
    if (!text) return;
    
    const timeout = setTimeout(() => {
      let i = 0;
      const interval = setInterval(() => {
        setDisplayedText(text.slice(0, i + 1));
        i++;
        if (i >= text.length) clearInterval(interval);
      }, 30);
      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timeout);
  }, [text, delay]);

  if (typeof children !== 'string') return <>{children}</>;

  return <span>{displayedText}</span>;
};

const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden min-h-screen flex items-center">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-emerald-500/10 blur-[120px] rounded-full animate-float-slow"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-cyan-500/10 blur-[120px] rounded-full animate-float-slower"></div>
        
        {/* Animated Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-emerald-400/30 rounded-full"
              initial={{ 
                x: Math.random() * 100 + "%", 
                y: Math.random() * 100 + "%",
                opacity: Math.random() 
              }}
              animate={{ 
                y: [null, "-20%", "120%"],
                opacity: [0, 1, 0]
              }}
              transition={{ 
                duration: Math.random() * 10 + 10, 
                repeat: Infinity, 
                ease: "linear",
                delay: Math.random() * 10
              }}
            />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 1.2, 
              ease: [0.22, 1, 0.36, 1] as any
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-6"
            >
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
              SISTEMA DE ANÁLISIS ACTIVO
            </motion.div>
            <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight mb-6">
              SecurIT <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Ciberseguridad avanzada</span>
            </h1>
            <p className="text-slate-400 text-lg mb-10 max-w-xl leading-relaxed">
              SecurIT es el motor de intercepción de red definitivo. Detecta amenazas en tiempo real, analiza tráfico a bajo nivel y protege tu infraestructura contra ataques de red avanzados.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button 
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-slate-950 px-8 py-4 rounded-xl font-bold transition-all shadow-[0_0_20px_rgba(74,222,128,0.3)] group"
              >
                Ver Documentación
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 1.5, 
              ease: [0.22, 1, 0.36, 1] as any,
              delay: 0.3
            }}
            className="relative"
          >
            <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
              <div className="flex items-center justify-between px-4 py-3 bg-slate-800/50 border-b border-slate-700">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/50"></div>
                </div>
                <div className="text-xs font-mono text-slate-400">securit-engine --sniff</div>
              </div>
              <div className="p-6 font-mono text-sm leading-relaxed">
                <div className="flex gap-3 mb-2">
                  <span className="text-emerald-400">[OK]</span>
                  <span className="text-slate-300">
                    <TerminalLine delay={500}>Inicializando motor de intercepción...</TerminalLine>
                  </span>
                </div>
                <div className="flex gap-3 mb-2">
                  <span className="text-emerald-400">[OK]</span>
                  <span className="text-slate-300">
                    <TerminalLine delay={2000}>Interfaz eth0 activa (Modo Promiscuo)</TerminalLine>
                  </span>
                </div>
                <div className="flex gap-3 mb-2">
                  <span className="text-cyan-400">[INFO]</span>
                  <span className="text-slate-300">
                    <TerminalLine delay={3500}>Conectando a bases de datos URLhaus...</TerminalLine>
                  </span>
                </div>
                <div className="flex gap-3 mb-4">
                  <span className="text-emerald-400">[OK]</span>
                  <span className="text-slate-300">
                    <TerminalLine delay={5000}>Base de datos de amenazas actualizada.</TerminalLine>
                  </span>
                </div>
                
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 7000 }}
                  className="space-y-1 animate-pulse border-l-2 border-emerald-500/30 pl-4 ml-2"
                >
                  <div className="text-emerald-400/80">CAPTURING: 192.168.1.45 {'->'} 104.26.12.31</div>
                  <div className="text-slate-500 text-xs">TCP [SYN] LEN=60 TTL=64 ID=43209</div>
                  <div className="text-emerald-400/80">CAPTURING: 192.168.1.12 {'->'} 8.8.8.8</div>
                  <div className="text-slate-500 text-xs">UDP [DNS] LEN=72 TTL=64 ID=12903</div>
                  <div className="text-amber-400 font-bold">ALERTA: Posible ARP Spoofing detectado en 00:0C:29:4F:8B:12</div>
                </motion.div>
                <div className="mt-4 flex items-center gap-2">
                  <span className="text-emerald-400">$</span>
                  <span className="w-2 h-5 bg-emerald-400 animate-[bounce_1s_infinite]"></span>
                </div>
              </div>
            </div>
            
            {/* Overlay badge */}
            <div className="absolute -bottom-6 -right-6 bg-emerald-500 text-slate-950 px-6 py-3 rounded-xl font-bold flex items-center gap-3 shadow-xl">
              <ShieldCheck className="w-6 h-6" />
              <span>Protección Activa</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
