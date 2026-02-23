// components/CoffeeCard.jsx
export default function CoffeeCard({ name, price, description, icon }) {
  return (
    <div className="group bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-[30px] transition-all duration-500 hover:-translate-y-4 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] flex flex-col items-center text-center h-full">

      {/* Icône avec effet de brillance au survol */}
      <div className="text-5xl mb-8 transform group-hover:scale-125 transition-transform duration-500 filter drop-shadow-[0_0_8px_rgba(191,149,63,0.3)]">
        {icon}
      </div>

      {/* Titre utilisant la police Serif et l'effet Gold au survol */}
      <h4 className="text-2xl font-serif font-bold mb-4 text-white uppercase tracking-tight group-hover:gold-text transition-colors duration-500">
        {name}
      </h4>

      {/* Description avec opacité réduite pour le look Premium */}
      <p className="text-white/50 font-light leading-relaxed mb-8 min-h-[60px] italic">
        "{description}"
      </p>

      {/* Prix utilisant l'Or Orion du site */}
      <div className="mt-auto">
        <span className="gold-text text-3xl font-serif font-bold">
          {price}€
        </span>
      </div>

      {/* Barre décorative synchronisée avec le dégradé Or */}
      <div className="w-0 group-hover:w-20 h-[2px] bg-gradient-to-r from-[#BF953F] to-[#FCF6BA] mt-6 transition-all duration-700 ease-in-out"></div>
    </div>
  )
}
