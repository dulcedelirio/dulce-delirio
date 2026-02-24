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
  { id: 5, name: "Orquídea Exótica",     price: 153000, description: "Orquídea de 3 piezas con degradado morado-blanco hecho a mano.",                img: img3d1, badge: null },
  { id: 6, name: "Bouquet Nupcial",      price: 382000, description: "Set de 7 flores mixtas en caja regalo. Perfecto para bodas y eventos.",         img: img3d2, badge: "Exclusivo" },
];

const fmt = (n) => n.toLocaleString('es-CO');
const WHATSAPP = "573053356415";

// --- COMPONENTES ---

function Navbar({ cartCount, onOpenCart }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      padding: scrolled ? '15px 24px' : '30px 40px',
      background: scrolled ? 'rgba(0,13,31,0.95)' : 'transparent',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(191,149,63,0.1)' : 'none',
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    }}>
      <span className="gold-text-complete" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.8rem', fontWeight: 700 }}>GelArte 3D</span>
      <button onClick={onOpenCart} style={{
        position: 'relative', background: 'rgba(255,255,255,0.05)',
        border: '1px solid rgba(191,149,63,0.3)', borderRadius: '50px',
        padding: '10px 24px', cursor: 'pointer', color: 'white',
        fontFamily: "'Inter', sans-serif", fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em'
      }}>
        CARRITO ({cartCount})
      </button>
    </nav>
  );
}

function CartModal({ isOpen, onClose, cart, onUpdateQty }) {
  if (!isOpen) return null;
  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const sendWhatsApp = () => {
    const msg = encodeURIComponent(`✨ *Nuevo Pedido GelArte 3D*\n\n${cart.map(i => `• ${i.name} (x${i.qty})`).join('\n')}\n\n*Total: $ ${fmt(total)} COP*`);
    window.open(`https://wa.me/${WHATSAPP}?text=${msg}`);
  };
  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 1000, background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(10px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }} onClick={onClose}>
      <div style={{ background: '#000D1F', borderRadius: '32px', maxWidth: '500px', width: '100%', padding: '40px', border: '1px solid rgba(191,149,63,0.3)' }} onClick={e => e.stopPropagation()}>
        <h2 className="gold-text-complete" style={{ fontFamily: "'Cormorant Garamond', serif", marginBottom: '30px' }}>Tu Selección</h2>
        {cart.length === 0 ? <p style={{ opacity: 0.5 }}>No hay productos.</p> : (
          <>
            <div style={{ maxHeight: '40vh', overflowY: 'auto', marginBottom: '30px' }}>
                {cart.map(item => (
                  <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', padding: '15px 0', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                    <span style={{ fontSize: '0.9rem' }}>{item.name}</span>
                    <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                        <button onClick={() => onUpdateQty(item.id, item.qty - 1)} style={{ background: 'none', border: '1px solid #BF953F', color: '#BF953F', borderRadius: '50%', width: '24px', height: '24px' }}>-</button>
                        <span>{item.qty}</span>
                        <button onClick={() => onUpdateQty(item.id, item.qty + 1)} style={{ background: 'none', border: '1px solid #BF953F', color: '#BF953F', borderRadius: '50%', width: '24px', height: '24px' }}>+</button>
                    </div>
                  </div>
                ))}
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '1.5rem', marginBottom: '20px' }}>Total: $ {fmt(total)}</div>
              <button onClick={sendWhatsApp} className="gold-button-shiny" style={{ width: '100%', padding: '16px', borderRadius: '50px', border: 'none', fontWeight: 900, color: '#E65FA5', cursor: 'pointer' }}>PEDIR POR WHATSAPP</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

// --- MAIN APP ---

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const whatsappMsg = encodeURIComponent("Hola GelArte 3D, me gustaría pedir información sobre sus productos.");

  const addToCart = (p) => {
    setCart(prev => {
      const exists = prev.find(i => i.id === p.id);
      if (exists) return prev.map(i => i.id === p.id ? { ...i, qty: i.qty + 1 } : i);
      return [...prev, { ...p, qty: 1 }];
    });
  };

  const updateQty = (id, qty) => {
    if (qty <= 0) return setCart(prev => prev.filter(i => i.id !== id));
    setCart(prev => prev.map(i => i.id === id ? { ...i, qty } : i));
  };

  return (
    <div style={{ background: '#000D1F', color: 'white', minHeight: '100vh', fontFamily: "'Inter', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;900&family=Cormorant+Garamond:wght@700&display=swap');
        .gold-text-complete { background: linear-gradient(to right, #BF953F, #FCF6BA, #B38728, #FBF5B7); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-size: 200% auto; animation: shine 4s linear infinite; }
        @keyframes shine { to { background-position: 200% center; } }
        .gold-button-shiny { background: linear-gradient(135deg, #BF953F, #FCF6BA, #B38728); transition: 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275); }
        .gold-button-shiny:hover { transform: translateY(-3px) scale(1.02); }
      `}</style>

      <Navbar cartCount={cart.reduce((s,i)=>s+i.qty,0)} onOpenCart={() => setIsCartOpen(true)} />
      <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} cart={cart} onUpdateQty={updateQty} />

      <main>
        {/* HERO */}
        <section style={{ height: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
          <img src={fleur} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.1 }} alt="" />
          <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', padding: '0 20px' }}>
            <p style={{ letterSpacing: '0.5em', textTransform: 'uppercase', fontSize: '0.7rem', color: '#BF953F', marginBottom: '20px' }}>Experiencia Gourmet</p>
            <h1 className="gold-text-complete" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(3rem, 12vw, 6rem)', lineHeight: 1, margin: 0 }}>GelArte 3D</h1>
          </div>
        </section>

        {/* PRODUCTS */}
        <section style={{ padding: '60px 20px', maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '32px' }}>
            {PRODUCTS.map(p => (
              <div key={p.id} style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(191,149,63,0.1)', borderRadius: '32px', overflow: 'hidden', paddingBottom: '30px', textAlign: 'center' }}>
                <img src={p.img} style={{ width: '100%', height: '240px', objectFit: 'cover' }} alt={p.name} />
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.5rem', margin: '20px 0 10px' }}>{p.name}</h3>
                <div className="gold-text-complete" style={{ fontWeight: 700, fontSize: '1.2rem', marginBottom: '20px' }}>$ {fmt(p.price)}</div>
                <button onClick={() => addToCart(p)} className="gold-button-shiny" style={{ padding: '12px 30px', borderRadius: '50px', border: 'none', fontWeight: 900, color: '#E65FA5', cursor: 'pointer' }}>AGREGAR</button>
              </div>
            ))}
          </div>
        </section>

        {/* --- TA PARTIE FINALE EXACTE --- */}
        <section id="contacto" style={{ padding: '80px 24px 100px', maxWidth: '1000px', margin: '0 auto' }}>
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
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3141.4!2d-0.7!3d38.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzjCsDAwJzAwLjAiTiAwwrA0MicwMC4wIlc!5e0!3m2!1ses!2ses!4v1" style={{ width: '100%', height: '100%', border: 0, filter: 'grayscale(100%) invert(92%) contrast(83%)' }} allowFullScreen="" loading="lazy" title="Localización GelArte 3D" />
            </div>
          </div>
        </section>
      </main>

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
