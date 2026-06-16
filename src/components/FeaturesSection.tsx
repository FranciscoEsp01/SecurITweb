import React from 'react';
import { motion } from 'framer-motion';
import { Search, Globe, AlertTriangle, FileText, Cpu, Zap } from 'lucide-react';

const features = [
  {
    title: 'Sniffing Avanzado',
    description: 'Análisis profundo de paquetes y tráfico de red a bajo nivel para identificar patrones sospechosos.',
    icon: Search,
    color: 'emerald'
  },
  {
    title: 'Inteligencia de Amenazas',
    description: 'Integración nativa con URLhaus y otras fuentes para detectar conexiones a hosts maliciosos en tiempo real.',
    icon: Globe,
    color: 'cyan'
  },
  {
    title: 'Detección de Anomalías',
    description: 'Algoritmos especializados para identificar ataques de ARP Spoofing y envenenamiento de red.',
    icon: AlertTriangle,
    color: 'amber'
  },
  {
    title: 'Reportes de Auditoría',
    description: 'Exportación detallada de registros de seguridad en formatos PDF y CSV para cumplimiento y análisis.',
    icon: FileText,
    color: 'blue'
  },
  {
    title: 'Motor de Alta Velocidad',
    description: 'Procesamiento paralelo optimizado para manejar grandes volúmenes de tráfico sin latencia.',
    icon: Cpu,
    color: 'indigo'
  },
  {
    title: 'Alertas WebSockets',
    description: 'Notificaciones instantáneas al dashboard mediante conexiones persistentes de baja latencia.',
    icon: Zap,
    color: 'yellow'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1] as any
    }
  }
};

const FeaturesSection: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-emerald-400 font-mono text-sm font-bold tracking-widest uppercase mb-3">Capacidades del Motor</h2>
          <h3 className="text-4xl lg:text-5xl font-bold text-white mb-4">Seguridad Defensiva de Nueva Generación</h3>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Herramientas integradas diseñadas para administradores de sistemas y expertos en ciberseguridad que buscan visibilidad total.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.4, ease: "easeOut" }
              }}
              className="group p-8 bg-slate-900/50 border border-slate-800 rounded-2xl hover:border-emerald-500/50 transition-colors duration-300 hover:shadow-[0_0_30px_rgba(74,222,128,0.1)]"
            >
              <motion.div
                whileHover={{ rotate: 15 }}
                transition={{ type: "spring", stiffness: 300 }}
                className={`w-12 h-12 rounded-lg bg-${feature.color}-500/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-${feature.color}-500/20 transition-all duration-300`}
              >
                <feature.icon className={`w-6 h-6 text-${feature.color}-400 group-hover:drop-shadow-[0_0_8px_rgba(var(--color-${feature.color}-400),0.8)]`} />
              </motion.div>
              <h4 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">{feature.title}</h4>
              <p className="text-slate-400 text-sm leading-relaxed leading-relaxed group-hover:text-slate-300 transition-colors">
                {feature.description}
              </p>
              
              {/* Decorative line */}
              <div className="mt-6 w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-emerald-500 to-transparent transition-all duration-500"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
