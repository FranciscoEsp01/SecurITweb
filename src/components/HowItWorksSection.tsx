import React from 'react';
import { motion } from 'framer-motion';
import { MousePointer2, Settings, BarChart3 } from 'lucide-react';

const steps = [
  {
    title: 'Captura de Paquetes',
    description: 'El motor intercepta el tráfico en crudo de la interfaz de red seleccionada mediante sniffing pasivo.',
    icon: MousePointer2
  },
  {
    title: 'Análisis e Inteligencia',
    description: 'Se procesan los protocolos y se comparan IPs/URLs con bases de datos de amenazas globales.',
    icon: Settings
  },
  {
    title: 'Visualización y Alertas',
    description: 'Los resultados se envían vía WebSockets al dashboard y se generan alertas en tiempo real.',
    icon: BarChart3
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2
    }
  }
};

const stepVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 1.2,
      ease: [0.22, 1, 0.36, 1] as any
    }
  }
};

const HowItWorksSection: React.FC = () => {
  return (
    <section id="architecture" className="py-24 bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <h3 className="text-3xl font-bold text-white mb-4">¿Cómo funciona SecurIT?</h3>
          <p className="text-slate-400">Un flujo de trabajo optimizado para la máxima eficiencia operativa.</p>
        </motion.div>

        <div className="relative">
          {/* Connector Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-emerald-500/0 via-emerald-500/20 to-emerald-500/0 -translate-y-1/2"></div>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative z-10"
          >
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={stepVariants}
                className="flex flex-col items-center text-center"
              >
                <div className="w-20 h-20 rounded-full bg-slate-950 border-2 border-emerald-500/30 flex items-center justify-center mb-8 relative">
                  <div className="absolute inset-0 rounded-full bg-emerald-500/5 animate-ping"></div>
                  <step.icon className="w-8 h-8 text-emerald-400" />
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-emerald-500 text-slate-950 font-bold flex items-center justify-center text-sm">
                    {index + 1}
                  </div>
                </div>
                <h4 className="text-xl font-bold text-white mb-4">{step.title}</h4>
                <p className="text-slate-400 text-sm max-w-xs mx-auto">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
