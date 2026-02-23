import React from 'react';
// IMPORTACIÓN DE IMÁGENES
import cafeKiloImg from '../assets/cafe-kilo.webp';
import cafe250gImg from '../assets/cafe-250g.webp';

const MenuModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const categories = [
    {
      title: "Cafés de Origen (En Taza)",
      items: [
        { name: "Espresso Quindío", price: "3.50€", desc: "Notas de chocolate negro y avellanas tostadas." },
        { name: "Latte de la Sierra", price: "5.20€", desc: "Leche cremosa con granos seleccionados de la Sierra Nevada." }
      ]
    },
    {
      title: "Café para Llevar (En Grano)",
      isProducts: true,
      items: [
        {
          name: "Bolsa Premium - 250g",
          price: "15.00€",
          desc: "Café de especialidad en grano, ideal para prensa francesa o métodos de filtro.",
          image: cafe250gImg
        },
        {
          name: "Saco Cosecha - 1kg",
          price: "38.00€",
          desc: "Formato ahorro para los amantes del café. 100% Arábica de altura.",
          image: cafeKiloImg
        }
      ]
    },
    {
      title: "Repostería Artesanal",
      items: [
        { name: "Almojábana", price: "2.50€", desc: "Pan de queso tradicional colombiano, siempre recién horneado." },
        { name: "Torta de Café Orion", price: "4.00€", desc: "Bizcocho esponjoso infusionado con nuestro mejor café de la casa." }
      ]
    }
  ];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 5px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: #001A3D; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #BF953F; border-radius: 10px; }
      `}</style>

      {/* Overlay oscuro con desenfoque */}
      <div className="absolute inset-0 bg-[#001A3D]/90 backdrop-blur-md" onClick={onClose}></div>

      {/* Ventana Modal */}
      <div className="relative bg-[#001A3D] border-2 border-[#BF953F] w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-[40px] p-6 md:p-12 shadow-[0_0_50px_rgba(191,149,63,0.2)] custom-scrollbar">

        {/* Botón Cerrar */}
        <button
          onClick={onClose}
          className="absolute top-6 right-8 text-white/50 hover:gold-text text-3xl transition-all z-10"
          aria-label="Cerrar menú"
        >
          ✕
        </button>

        <h2 className="text-4xl font-serif font-bold gold-text mb-12 text-center uppercase tracking-widest">
          Noestros Productos Premium
        </h2>

        <div className="space-y-16">
          {categories.map((cat, idx) => (
            <div key={idx}>
              <h3 className="text-[#BF953F] uppercase tracking-[0.3em] text-xs font-black border-b border-[#BF953F]/20 pb-2 mb-8">
                {cat.title}
              </h3>

              <div className={cat.isProducts ? "grid grid-cols-1 sm:grid-cols-2 gap-10" : "space-y-8"}>
                {cat.items.map((item, i) => (
                  <div key={i} className={`group flex flex-col ${cat.isProducts ? "bg-white/5 p-6 rounded-3xl border border-white/10 hover:border-[#BF953F]/50 transition-all h-full" : "justify-between"}`}>

                    {item.image && (
                      <div className="mb-6 flex justify-center bg-white/5 rounded-2xl p-4 h-64 items-center border border-white/5">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="max-h-full w-auto object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.5)] group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    )}

                    <div className={item.image ? "text-center flex flex-col flex-grow" : "pr-4 w-full"}>
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="font-serif font-bold text-xl group-hover:gold-text transition-colors">
                          {item.name}
                        </h4>
                        {!item.image && <span className="font-serif font-bold gold-text ml-4">{item.price}</span>}
                      </div>

                      <p className="text-white/50 text-sm leading-relaxed mb-6 italic">
                        {item.desc}
                      </p>

                      {item.image && (
                        <div className="mt-auto inline-block bg-gradient-to-r from-[#BF953F] to-[#AA771C] text-[#001A3D] px-8 py-2 rounded-full font-black text-lg shadow-lg self-center">
                          {item.price}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Botón Inferior */}
        <button
          onClick={onClose}
          className="mt-16 w-full py-4 rounded-full border-2 border-[#BF953F] text-white font-bold hover:bg-[#BF953F] hover:text-[#001A3D] transition-all shadow-lg uppercase tracking-widest gold-text"
        >
          Volver al inicio
        </button>
      </div>
    </div>
  );
};

export default MenuModal;
