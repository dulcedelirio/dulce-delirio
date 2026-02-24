import React, { useState, useEffect } from 'react';
import fleur from './assets/fleur.jpg';
import fleur1 from './assets/fleur1.jpg';
import fleur2 from './assets/fleur2.jpg';
import fleur3 from './assets/fleur3.jpg';
import img3d  from './assets/3d.jpg';
import img3d1 from './assets/3d1.jpg';
import img3d2 from './assets/3d2.jpg';
import img3d3 from './assets/3d3.jpg';
import img3d4 from './assets/3d4.jpg';
import img3d5 from './assets/3d5.jpg';

const PRODUCTS = [
  { id: 1, name: "Rosa Tridimensional",  price: 126000, description: "Rosa 100% comestible con 6 pétalos articulados en capas. Cada flor es única.", img: img3d,  badge: "Best Seller" },
  { id: 2, name: "Mariposa Cristal",     price: 99000,  description: "Alas translúcidas con degradé natural de colores. Efecto jelly luminoso.",    img: img3d4, badge: null },
  { id: 3, name: "Corazón Brillante",    price: 81000,  description: "Corazón bicolor con relleno de crema y efecto espejo en la superficie.",      img: img3d5, badge: "San Valentín" },
  { id: 4, name: "Fresa Hiperrealista",  price: 90000,  description: "Detalle de semillas y textura exterior idéntica a la fruta real.",             img: img3d3, badge: null },
  { id: 5, name: "Orquídea Exótica",     price: 153000, description: "Orquídea de 3 piezas con degradado morado-blanco hecho a mano.",               img: img3d1, badge: null },
  { id: 6, name: "Bouquet Nupcial",      price: 382000, description: "Set de 7 flores mixtas en caja regalo. Perfecto para bodas y eventos.",         img: img3d2, badge: "Exclusivo" },
];

const fmt = (n) => n.toLocaleString('es-CO');
const WHATSAPP = "573053356415";

function Navbar({ onOpenMenu, cartCount, onOpenCart }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      padding: scrolled ? '10px 20px' : '22px 40px',
      background: scrolled ? 'rgba(0,10,30,0.93)' : 'transparent',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(191,149,63,0.2)' : 'none',
      transition: 'all 0.4s ease',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    }}>
      <span className="gold-text-complete" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.4rem', fontWeight: 700, letterSpacing: '0.05em' }}>GelArte 3D</span>
      <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
        <button onClick={onOpenCart} style={{
          position: 'relative', background: 'rgba(191,149,63,0.1)',
          border: '1px solid rgba(191,149,63,0.35)', borderRadius: '50px',
          padding: '8px 15px', cursor: 'pointer', color: 'white',
          display: 'flex', alignItems: 'center', gap: '8px',
        }}>
          🛒 {cartCount > 0 && <span>{cartCount}</span>}
        </button>
        <button onClick={onOpenMenu} className="gold-button-shiny" style={{
          border: 'none', borderRadius: '50px', padding: '8px 16px', cursor: 'pointer',
          fontFamily: "'Inter', sans-serif", fontSize: '0.65rem',
          fontWeight: 700, color: '#E65FA5',
        }}>MENÚ</button>
      </div>
    </nav>
  );
}

function GelCard({ product, onAddToCart }) {
  const { name, price, description, img, badge } = product;
  const [hovered, setHovered] = useState(false);
  const [added, setAdded]     = useState(false);
  const handleAdd = () => { onAddToCart(product); setAdded(true); setTimeout(() => setAdded(false), 1500); };
  return (
    <div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} style={{
      background: 'rgba(255,255,255,0.03)', backdropFilter: 'blur(20px)',
      border: '1px solid rgba(191,149,63,0.15)', borderRadius: '28px',
      padding: '0 0 28px 0', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center',
      transform: hovered ? 'translateY(-10px) scale(1.02)' : 'translateY(0) scale(1)',
      transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
      boxShadow: hovered ? '0 40px 80px -20px rgba(191,149,63,0.2)' : '0 8px 32px -8px rgba(0,0,0,0.4)',
      position: 'relative', overflow: 'hidden', height: '100%'
    }}>
      {badge && (
        <span style={{
          position: 'absolute', top: '16px', right: '16px',
          background: 'linear-gradient(135deg, #BF953F, #FCF6BA)',
          color: '#E65FA5', borderRadius: '20px', padding: '4px 12px',
          fontSize: '0.6rem', fontWeight: 900, fontFamily: "'Inter', sans-serif", zIndex: 2,
        }}>{badge}</span>
      )}
      <div style={{ width: '100%', height: '200px', overflow: 'hidden', borderRadius: '28px 28px 0 0', marginBottom: '20px' }}>
        <img src={img} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover', transform: hovered ? 'scale(1.08)' : 'scale(1)', transition: 'transform 0.5s ease' }} />
      </div>
      <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.3rem', color: 'white', marginBottom: '8px', fontWeight: 700, padding: '0 20px' }}>{name}</h3>
      <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', marginBottom: '20px', padding: '0 20px', flexGrow: 1 }}>{description}</p>
      <div className="gold-text-complete" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.5rem', fontWeight: 700, marginBottom: '20px' }}>$ {fmt(price)}</div>
      <button onClick={handleAdd} style={{
        border: 'none', borderRadius: '50px', padding: '12px 28px', cursor: 'pointer',
        fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase',
        color: added ? 'white' : '#E65FA5',
        background: added ? 'linear-gradient(135deg, #4CAF50, #2E7D32)' : 'linear-gradient(135deg, #BF953F 0%, #FCF6BA 50%, #B38728 100%)',
        transition: 'all 0.3s ease',
      }}>{added ? '✓ Añadido' : '+ Añadir'}</button>
    </div>
  );
}

function MenuModal({ isOpen, onClose, onAddToCart }) {
  const categories = [
    { cat: "Flores & Botánica", items: PRODUCTS.slice(0, 3) },
    { cat: "Frutos & Postres",  items: PRODUCTS.slice(3, 6) },
  ];
  if (!isOpen) return null;
  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 200, background: 'rgba(0,10,30,0.75)', backdropFilter: 'blur(14px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }} onClick={onClose}>
      <div style={{ background: '#000D1F', borderRadius: '32px', maxWidth: '700px', width: '100%', maxHeight: '85vh', overflowY: 'auto', border: '1px solid rgba(191,149,63,0.3)', padding: '40px 20px' }} onClick={e => e.stopPropagation()}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '36px' }}>
          <h2 className="gold-text-complete" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '2rem' }}>Catálogo</h2>
          <button onClick={onClose} style={{ background: 'none', border: 'none', color: '#BF953F', fontSize: '1.5rem', cursor: 'pointer' }}>✕</button>
        </div>
        {categories.map(cat => (
          <div key={cat.cat} style={{ marginBottom: '32px' }}>
            <h3 style={{ color: '#BF953F', fontSize: '0.8rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '16px' }}>{cat.cat}</h3>
            {cat.items.map(item => (
              <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 0', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <span style={{ fontSize: '0.9rem' }}>{item.name}</span>
                <button onClick={() => { onAddToCart(item); onClose(); }} className="gold-button-shiny" style={{ border: 'none', borderRadius: '50px', padding: '5px 15px', cursor: 'pointer', fontSize: '0.6rem', color: '#E65FA5' }}>+ AGREGAR</button>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function CartModal({ isOpen, onClose, cart, onRemove, onUpdateQty }) {
  if (!isOpen) return null;
  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const sendWhatsApp = () => {
    const lines = cart.map(i => `• ${i.name} x${i.qty}`).join('%0A');
    window.open(`https://wa.me/${WHATSAPP}?text=🌟Pedido GelArte 3D🌟%0A%0A${lines}%0A%0ATOTAL: $${fmt(total)}`, '_blank');
  };
  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 300, background: 'rgba(0,5,20,0.85)', backdropFilter: 'blur(18px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }} onClick={onClose}>
      <div style={{ background: '#000D1F', borderRadius: '32px', maxWidth: '560px', width: '100%', maxHeight: '90vh', overflowY: 'auto', border: '1px solid rgba(191,149,63,0.35)', padding: '40px 24px' }} onClick={e => e.stopPropagation()}>
        <h2 className="gold-text-complete" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '2rem', marginBottom: '30px' }}>Mi Carrito</h2>
        {cart.map(item => (
          <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px', borderBottom: '1px solid rgba(191,149,63,0.1)', paddingBottom: '10px' }}>
            <div>
                <div>{item.name}</div>
                <div style={{ fontSize: '0.8rem', opacity: 0.6 }}>$ {fmt(item.price)}</div>
            </div>
            <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <button onClick={() => onUpdateQty(item.id, item.qty - 1)} style={{ background: 'none', border: '1px solid #BF953F', color: 'white', borderRadius: '50%', width: '25px' }}>-</button>
                <span>{item.qty}</span>
                <button onClick={() => onUpdateQty(item.id, item.qty + 1)} style={{ background: 'none', border: '1px solid #BF953F', color: 'white', borderRadius: '50%', width: '25px' }}>+</button>
            </div>
          </div>
        ))}
        <div style={{ marginTop: '30px', textAlign: 'center' }}>
          <div style={{ fontSize: '1.5rem', marginBottom: '20px' }}>Total: $ {fmt(total)}</div>
          <button onClick={sendWhatsApp} className="gold-button-shiny" style={{ width: '100%', padding: '15px', borderRadius: '50px', border: 'none', fontWeight: 900, color: '#E65FA5' }}>PEDIR POR WHATSAPP</button>
        </div>
      </div>
    </div>
  );
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cart, setCart]             = useState([]);
  useEffect(() => { document.title = "GelArte 3D | Gelatinas Artísticas Premium"; }, []);
  const addToCart = (product) => {
    setCart(prev => {
      const exists = prev.find(i => i.id === product.id);
      if (exists) return prev.map(i => i.id === product.id ? { ...i, qty: i.qty + 1 } : i);
      return [...prev, { ...product, qty: 1 }];
    });
  };
  const removeFromCart = (id) => setCart(prev => prev.filter(i => i.id !== id));
  const updateQty = (id, qty) => { if (qty <= 0) return removeFromCart(id); setCart(prev => prev.map(i => i.id === id ? { ...i, qty } : i)); };
  const cartCount   = cart.reduce((s, i) => s + i.qty, 0);
  const whatsappMsg = encodeURIComponent("Hola GelArte 3D, me gustaría obtener más información.");

  return (
    <div style={{ minHeight: '100vh', background: '#000D1F', fontFamily: "'Inter', sans-serif", color: 'white', overflowX: 'hidden' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&family=Cormorant+Garamond:wght@700&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        .gold-text-complete {
          background: linear-gradient(to right, #BF953F 0%, #FCF6BA 25%, #B38728 50%, #FBF5B7 75%, #AA771C 100%);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          background-size: 200% auto; animation: shine 4s linear infinite;
        }
        @keyframes shine { to { background-position: 200% center; } }
        .gold-button-shiny {
          background: linear-gradient(135deg, #BF953F 0%, #FCF6BA 50%, #B38728 100%);
          position: relative; overflow: hidden; transition: all 0.3s ease;
        }
        .gold-button-shiny::after {
          content: ""; position: absolute; top: -50%; left: -60%;
          width: 25%; height: 200%; background: rgba(255,255,255,0.4);
          transform: rotate(30deg); animation: reflection 3s infinite;
        }
        @keyframes reflection { 0%{left:-60%} 30%{left:120%} 100%{left:120%} }
        @keyframes spin-slow { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
        @keyframes float1 { 0%,100%{transform:translate(0,0) scale(1)} 50%{transform:translate(20px,-30px) scale(1.05)} }
        @keyframes fadeInUp { from{opacity:0;transform:translateY(40px)} to{opacity:1;transform:translateY(0)} }
        .hero-title { animation: fadeInUp 0.9s ease both; }
      `}</style>

      {/* BACKGROUND ELEMENTS */}
      <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0 }}>
        <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: '600px', height: '600px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(191,149,63,0.07) 0%, transparent 70%)', animation: 'float1 8s infinite' }} />
      </div>

      <Navbar onOpenMenu={() => setIsMenuOpen(true)} cartCount={cartCount} onOpenCart={() => setIsCartOpen(true)} />
      <MenuModal isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} onAddToCart={addToCart} />
      <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} cart={cart} onRemove={removeFromCart} onUpdateQty={updateQty} />

      <main>
        {/* HERO SECTION */}
        <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '100px 20px', position: 'relative' }}>
          <img src={fleur} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.1 }} alt="" />

          <div style={{ position: 'relative', zIndex: 2 }}>
             {/* LE CERCLE QUI TOURNE (L'élément que j'avais supprimé) */}
             <div style={{ width: 'min(500px, 80vw)', height: 'min(500px, 80vw)', borderRadius: '50%', border: '1px solid rgba(191,149,63,0.1)', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', animation: 'spin-slow 40s linear infinite' }}>
                {[img3d, img3d1, img3d2, img3d3, img3d4, img3d5].map((src, i) => (
                    <div key={i} style={{ position: 'absolute', top: `${50 - 48 * Math.cos(i * Math.PI / 3)}%`, left: `${50 + 48 * Math.sin(i * Math.PI / 3)}%`, transform: 'translate(-50%,-50%)' }}>
                        <img src={src} style={{ width: '50px', height: '50px', borderRadius: '50%', objectFit: 'cover', border: '2px solid #BF953F' }} alt="" />
                    </div>
                ))}
             </div>

             <div className="hero-title">
                <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(3rem, 10vw, 6rem)', margin: 0 }}>GelArte 3D</h1>
                <h2 className="gold-text-complete" style={{ fontStyle: 'italic', fontSize: 'clamp(1.5rem, 5vw, 3rem)' }}>Arte Comestible</h2>
                <button onClick={() => setIsMenuOpen(true)} className="gold-button-shiny" style={{ marginTop: '40px', border: 'none', borderRadius: '50px', padding: '15px 40px', cursor: 'pointer', fontWeight: 900, color: '#E65FA5' }}>EXPLORAR</button>
             </div>
          </div>
        </section>

        {/* PRODUCTS GRID (Optimisée pour Mobile) */}
        <section id="productos" style={{ padding: '80px 20px', maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '30px' }}>
            {PRODUCTS.map(p => <GelCard key={p.id} product={p} onAddToCart={addToCart} />)}
          </div>
        </section>

        {/* PROCESS SECTION */}
        <section id="proceso" style={{ padding: '80px 20px', textAlign: 'center' }}>
            <h2 className="gold-text-complete" style={{ fontSize: '2.5rem', marginBottom: '50px' }}>Nuestro Proceso</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
                {['Diseño', 'Elaboración', 'Curado', 'Entrega'].map((step, i) => (
                    <div key={i} style={{ flex: '1 1 200px', background: 'rgba(255,255,255,0.02)', padding: '30px', borderRadius: '20px', border: '1px solid rgba(191,149,63,0.2)' }}>
                        <div style={{ fontSize: '1.5rem', color: '#BF953F', marginBottom: '10px' }}>0{i+1}</div>
                        <h3>{step}</h3>
                    </div>
                ))}
            </div>
        </section>

        {/* CONTACT SECTION (Exactement la tienne, avec flex-wrap pour mobile) */}
        <section id="contacto" style={{ padding: '80px 24px 100px', maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ background: 'rgba(255,255,255,0.02)', backdropFilter: 'blur(24px)', border: '1px solid rgba(191,149,63,0.15)', borderRadius: '40px', overflow: 'hidden', display: 'flex', flexWrap: 'wrap', boxShadow: '0 40px 80px -20px rgba(0,0,0,0.5)' }}>
            <div style={{ flex: '1 1 300px', padding: '56px 48px', borderRight: '1px solid rgba(191,149,63,0.1)' }}>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.65rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#BF953F', fontWeight: 700, marginBottom: '8px' }}>Visítanos</p>
              <h3 className="gold-text-complete" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.8rem', fontWeight: 700, marginBottom: '32px' }}>Encuéntranos</h3>
              <div style={{ marginBottom: '28px' }}>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#BF953F', fontWeight: 700, marginBottom: '6px' }}>Horario</div>
                {[['Lun – Vie','09:00 – 19:00'],['Sábados','09:00 – 21:00'],['Domingos','10:00 – 16:00 ✨']].map(([d,h]) => (
                  <div key={d} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid rgba(255,255,255,0.04)', fontFamily: "'Inter', sans-serif", fontSize: '0.85rem', color: 'rgba(255,255,255,0.65)' }}>
                    <span style={{ opacity: 0.6 }}>{d}</span><span style={{ fontWeight: 600 }}>{h}</span>
                  </div>
                ))}
              </div>
              <div>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#BF953F', fontWeight: 700, marginBottom: '8px' }}>Dirección</div>
                <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.1rem', color: 'rgba(255,255,255,0.8)', lineHeight: 1.6 }}>Calle Córdoba, 12<br />03178 Benijófar, Alicante</p>
              </div>
              <a href={`https://wa.me/${WHATSAPP}?text=${whatsappMsg}`} target="_blank" rel="noopener noreferrer" className="gold-button-shiny" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', marginTop: '36px', borderRadius: '50px', padding: '14px 30px', textDecoration: 'none', fontFamily: "'Inter', sans-serif", fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#E65FA5' }}>
                💬 WhatsApp
              </a>
            </div>
            <div style={{ flex: '1 1 300px', minHeight: '400px' }}>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3141.5!2d-0.7!3d38.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6395!2sCalle%20C%C3%B3rdoba%2C%2012%2C%2003178%20Benij%C3%B3far%2C%20Alicante!5e0!3m2!1ses!2ses!4v1700000000000" style={{ width: '100%', height: '100%', minHeight: '400px', border: 0, filter: 'grayscale(100%) invert(92%) contrast(83%)' }} allowFullScreen="" loading="lazy" title="Localización GelArte 3D" />
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer style={{ background: '#000D1F', padding: '60px 24px', textAlign: 'center', borderTop: '1px solid rgba(191,149,63,0.1)' }}>
        <p className="gold-text-complete" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '2rem', fontWeight: 700, marginBottom: '12px' }}>GelArte 3D Premium</p>
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.65rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.15)' }}>© 2026 · Arte Comestible Artesanal · Colombia</p>
        <div style={{ display: 'flex', gap: '24px', justifyContent: 'center', marginTop: '24px' }}>
          {['Instagram','TikTok','Pinterest'].map(s => (
            <span key={s} style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(191,149,63,0.35)', cursor: 'pointer' }}>{s}</span>
          ))}
        </div>
      </footer>
    </div>
  );
}

export default App;
