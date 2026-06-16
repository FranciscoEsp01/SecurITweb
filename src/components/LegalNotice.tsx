import React from 'react';
import { ShieldAlert, Info } from 'lucide-react';

const LegalNotice: React.FC = () => {
  return (
    <section id="legal" className="py-24 bg-slate-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-red-500/5 border border-red-500/20 rounded-2xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <ShieldAlert className="w-32 h-32 text-red-500" />
          </div>
          
          <div className="flex items-center gap-3 mb-6 text-red-400 font-bold uppercase tracking-wider text-sm">
            <ShieldAlert className="w-5 h-5" />
            Aviso Legal y Uso Ético
          </div>
          
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
            Compromiso de Responsabilidad
          </h3>
          
          <div className="space-y-4 text-slate-400 leading-relaxed">
            <p>
              Viernes Security Engine es una herramienta diseñada estrictamente para fines de <span className="text-white font-semibold">educación, investigación de seguridad y administración de redes defensiva</span>.
            </p>
            <p>
              El uso de este motor de intercepción en redes de las cuales no se posee autorización explícita puede constituir un delito bajo las leyes de delitos informáticos. Los desarrolladores no se hacen responsables del uso indebido o daños causados por esta herramienta.
            </p>
            <div className="flex items-start gap-3 bg-slate-900/50 p-4 rounded-lg mt-8 border border-slate-800">
              <Info className="w-5 h-5 text-emerald-400 mt-1 shrink-0" />
              <p className="text-xs">
                Al utilizar este software, usted acepta cumplir con todas las normativas locales e internacionales relacionadas con la privacidad de datos y la seguridad informática.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LegalNotice;
