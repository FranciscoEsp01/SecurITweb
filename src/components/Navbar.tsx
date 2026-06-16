import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <img src="/SecurIT_logo.png" alt="SecurIT Logo" className="w-10 h-10 object-contain" />
            <span className="text-xl font-bold tracking-tight text-white">
              Secur<span className="text-emerald-400">IT</span>
            </span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#features" className="text-slate-300 hover:text-emerald-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">Características</a>
              <a href="#architecture" className="text-slate-300 hover:text-emerald-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">Arquitectura</a>
              <a href="#legal" className="text-slate-300 hover:text-emerald-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">Aviso Legal</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
