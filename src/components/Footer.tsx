import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img src="/SecurIT_logo.png" alt="SecurIT Logo" className="w-8 h-8 object-contain" />
              <span className="text-lg font-bold text-white">SecurIT Ciberseguridad avanzada</span>
            </div>
            <p className="text-slate-400 text-sm max-w-xs">
              Protegiendo infraestructuras digitales con monitoreo de red avanzado y detección de amenazas en tiempo real.
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#features" className="hover:text-emerald-400 transition-colors">Características</a></li>
              <li><a href="#architecture" className="hover:text-emerald-400 transition-colors">Arquitectura</a></li>
              <li><a href="#legal" className="hover:text-emerald-400 transition-colors">Aviso Legal</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Documentación</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contacto</h3>
            <div className="space-y-2 text-sm text-slate-400">
              <p className="hover:text-emerald-400 transition-colors">espinozafrancisco.v@gmail.com</p>
              <p className="hover:text-emerald-400 transition-colors">securit@gmail.com</p>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-xs text-center md:text-left">
            © {new Date().getFullYear()} SecurIT. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-slate-500 text-xs font-mono">Sistema de Protección Activo</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
