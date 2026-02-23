import React from 'react';

export default function Navbar({ onOpenMenu }) {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-[80] w-[95%] max-w-5xl">
      <div className="bg-[#001A3D]/60 backdrop-blur-2xl border border-[#BF953F]/30 rounded-full px-4 md:px-10 py-3 flex justify-between items-center shadow-[0_10px_40px_rgba(0,0,0,0.3)]">

        {/* LOGO - Le clic sur le logo sert désormais de retour en haut (standard UX) */}
        <a href="#" className="text-xl md:text-2xl font-serif font-bold tracking-tighter cursor-pointer">
          <span className="gold-text">CAFÉ</span>
          <span className="text-white ml-1">ORION</span>
        </a>

        {/* LIENS DE NAVIGATION ÉPURÉS */}
        <div className="hidden md:flex gap-12 text-[10px] uppercase tracking-[0.3em] font-black items-center">

          {/* PRODUCTOS : Déclenche le Modal */}
          <button
            onClick={onOpenMenu}
            className="text-white hover:gold-text transition-all uppercase tracking-[0.3em] cursor-pointer outline-none"
          >
            Ver Productos
          </button>

          {/* CONTACTO : Scroll vers la section map/horaires */}
          <a href="#contacto" className="text-white hover:gold-text transition-all">
            Contacto
          </a>
        </div>

        {/* BOUTON ACTION (Relié au Modal) */}
        <button
          onClick={onOpenMenu}
          className="gold-button-shiny text-[#001A3D] px-6 py-2.5 rounded-full font-black text-[10px] uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-lg cursor-pointer"
        >
          Ver Productos
        </button>
      </div>
    </nav>
  );
}
