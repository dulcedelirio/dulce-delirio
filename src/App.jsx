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
      padding: scrolled ? '10px 40px' : '22px 40px',
      background: scrolled ? 'rgba(0,10,30,0.93)' : 'transparent',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(191,149,63,0.2)' : 'none',
      transition: 'all 0.4s ease',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    }}>
      <span className="gold-text-complete" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.6rem', fontWeight: 700, letterSpacing: '0.05em' }}>GelArte 3D</span>
      <div style={{ display: 'flex', gap: '28px', alignItems: 'center' }}>
        {[['#productos','Creaciones'],['#proceso','Proceso'],['#contacto','Contacto']].map(([href, label]) => (
          <a key={href} href={href} style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.65)', textDecoration: 'none' }}>{label}</a>
        ))}
        <button onClick={onOpenCart} style={{
          position: 'relative', background: 'rgba(191,149,63,0.1)',
          border: '1px solid rgba(191,149,63,0.35)', borderRadius: '50px',
          padding: '9px 20px', cursor: 'pointer', color: 'white',
          fontFamily: "'Inter', sans-serif", fontSize: '0.75rem',
          fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase',
          display: 'flex', alignItems: 'center', gap: '8px',
        }}>
          🛒 Carrito
          {cartCount > 0 && (
            <span style={{
              position: 'absolute', top: '-8px', right: '-8px',
              background: 'linear-gradient(135deg, #BF953F, #FCF6BA)',
              color: '#E65FA5', borderRadius: '50%', width: '20px', height: '20px',
              fontSize: '0.65rem', fontWeight: 900, display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>{cartCount}</span>
          )}
        </button>
        <button onClick={onOpenMenu} className="gold-button-shiny" style={{
          border: 'none', borderRadius: '50px', padding: '10px 24px', cursor: 'pointer',
          fontFamily: "'Inter', sans-serif", fontSize: '0.75rem',
          fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#E65FA5',
        }}>Ver Menú</button>
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
      boxShadow: hovered ? '0 40px 80px -20px rgba(191,149,63,0.2), 0 0 0 1px rgba(191,149,63,0.3)' : '0 8px 32px -8px rgba(0,0,0,0.4)',
      position: 'relative', overflow: 'hidden',
    }}>
      {badge && (
        <span style={{
          position: 'absolute', top: '16px', right: '16px',
          background: 'linear-gradient(135deg, #BF953F, #FCF6BA)',
          color: '#E65FA5', borderRadius: '20px', padding: '4px 12px',
          fontSize: '0.6rem', fontWeight: 900, letterSpacing: '0.1em', textTransform: 'uppercase',
          fontFamily: "'Inter', sans-serif", zIndex: 2,
        }}>{badge}</span>
      )}
      <div style={{ width: '100%', height: '200px', overflow: 'hidden', borderRadius: '28px 28px 0 0', marginBottom: '20px' }}>
        <img src={img} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover', transform: hovered ? 'scale(1.08)' : 'scale(1)', transition: 'transform 0.5s ease' }} />
      </div>
      <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.3rem', color: 'white', marginBottom: '8px', fontWeight: 700, padding: '0 20px' }}>{name}</h3>
      <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', marginBottom: '20px', lineHeight: 1.6, padding: '0 20px' }}>{description}</p>
      <div className="gold-text-complete" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.5rem', fontWeight: 700, marginBottom: '20px' }}>$ {fmt(price)} COP</div>
      <button onClick={handleAdd} style={{
        border: 'none', borderRadius: '50px', padding: '12px 28px', cursor: 'pointer',
        fontFamily: "'Inter', sans-serif", fontSize: '0.75rem', fontWeight: 700,
        letterSpacing: '0.15em', textTransform: 'uppercase',
        color: added ? 'white' : '#E65FA5',
        background: added ? 'linear-gradient(135deg, #4CAF50, #2E7D32)' : 'linear-gradient(135deg, #BF953F 0%, #FCF6BA 50%, #B38728 100%)',
        boxShadow: added ? '0 8px 24px -4px rgba(76,175,80,0.4)' : '0 12px 32px -8px rgba(191,149,63,0.4)',
        transition: 'all 0.3s ease', position: 'relative', overflow: 'hidden',
      }}>{added ? '✓ Añadido al carrito' : '+ Añadir al carrito'}</button>
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
      <div style={{ background: '#000D1F', borderRadius: '32px', maxWidth: '700px', width: '100%', maxHeight: '85vh', overflowY: 'auto', border: '1px solid rgba(191,149,63,0.3)', boxShadow: '0 60px 120px -20px rgba(0,0,0,0.7)', padding: '48px 40px' }} onClick={e => e.stopPropagation()}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '36px' }}>
          <h2 className="gold-text-complete" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '2rem', fontWeight: 700 }}>Catálogo Completo</h2>
          <button onClick={onClose} style={{ background: 'rgba(191,149,63,0.1)', border: '1px solid rgba(191,149,63,0.3)', borderRadius: '50%', width: '44px', height: '44px', cursor: 'pointer', fontSize: '1.1rem', color: '#BF953F', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>✕</button>
        </div>
        {categories.map(cat => (
          <div key={cat.cat} style={{ marginBottom: '32px' }}>
            <h3 style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.65rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#BF953F', fontWeight: 700, marginBottom: '16px', paddingBottom: '8px', borderBottom: '1px solid rgba(191,149,63,0.2)' }}>{cat.cat}</h3>
            {cat.items.map(item => (
              <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '14px 0', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <img src={item.img} alt={item.name} style={{ width: '56px', height: '56px', borderRadius: '14px', objectFit: 'cover', border: '1px solid rgba(191,149,63,0.3)', flexShrink: 0 }} />
                  <div>
                    <div style={{ fontFamily: "'Cormorant Garamond', serif", color: 'white', fontWeight: 600, fontSize: '1rem' }}>{item.name}</div>
                    <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)' }}>{item.description}</div>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexShrink: 0, marginLeft: '16px' }}>
                  <span className="gold-text-complete" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.1rem', fontWeight: 700 }}>$ {fmt(item.price)}</span>
                  <button onClick={() => { onAddToCart(item); onClose(); }} className="gold-button-shiny" style={{ border: 'none', borderRadius: '50px', padding: '8px 16px', cursor: 'pointer', fontFamily: "'Inter', sans-serif", fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#E65FA5' }}>+ Añadir</button>
                </div>
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
    if (cart.length === 0) return;
    const lines = cart.map(i => `• ${i.name} x${i.qty} = $ ${fmt(i.price * i.qty)} COP`).join('%0A');
    const msg = `🌟 *Pedido GelArte 3D* 🌟%0A%0A${lines}%0A%0A━━━━━━━━━━━━━━%0A*TOTAL: $ ${fmt(total)} COP*%0A━━━━━━━━━━━━━━%0A%0AMe gustaría confirmar este pedido. ¡Gracias!`;
    window.open(`https://wa.me/${WHATSAPP}?text=${msg}`, '_blank');
  };
  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 300, background: 'rgba(0,5,20,0.85)', backdropFilter: 'blur(18px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }} onClick={onClose}>
      <div style={{ background: '#000D1F', borderRadius: '32px', maxWidth: '560px', width: '100%', maxHeight: '90vh', overflowY: 'auto', border: '1px solid rgba(191,149,63,0.35)', boxShadow: '0 60px 120px -20px rgba(0,0,0,0.8)', padding: '48px 36px' }} onClick={e => e.stopPropagation()}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
          <h2 className="gold-text-complete" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '2rem', fontWeight: 700 }}>🛒 Mi Carrito</h2>
          <button onClick={onClose} style={{ background: 'rgba(191,149,63,0.1)', border: '1px solid rgba(191,149,63,0.3)', borderRadius: '50%', width: '44px', height: '44px', cursor: 'pointer', fontSize: '1.1rem', color: '#BF953F', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>✕</button>
        </div>
        {cart.length === 0 && (
          <div style={{ textAlign: 'center', padding: '56px 0' }}>
            <div style={{ fontSize: '3.5rem', marginBottom: '20px' }}>🛒</div>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.3rem', color: 'rgba(255,255,255,0.3)' }}>Tu carrito está vacío</p>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.8rem', color: 'rgba(255,255,255,0.2)', marginTop: '8px' }}>Añade productos desde el catálogo</p>
          </div>
        )}
        {cart.map(item => (
          <div key={item.id} style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '16px 0', borderBottom: '1px solid rgba(191,149,63,0.08)' }}>
            <img src={item.img} alt={item.name} style={{ width: '64px', height: '64px', borderRadius: '16px', objectFit: 'cover', border: '1px solid rgba(191,149,63,0.25)', flexShrink: 0 }} />
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", color: 'white', fontSize: '1.05rem', fontWeight: 600, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{item.name}</div>
              <div className="gold-text-complete" style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.82rem', fontWeight: 700 }}>$ {fmt(item.price)} c/u</div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0 }}>
              <button onClick={() => onUpdateQty(item.id, item.qty - 1)} style={{ width: '30px', height: '30px', borderRadius: '50%', background: 'rgba(191,149,63,0.12)', border: '1px solid rgba(191,149,63,0.3)', color: '#BF953F', cursor: 'pointer', fontSize: '1.1rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>−</button>
              <span style={{ fontFamily: "'Inter', sans-serif", color: 'white', fontWeight: 900, minWidth: '22px', textAlign: 'center' }}>{item.qty}</span>
              <button onClick={() => onUpdateQty(item.id, item.qty + 1)} style={{ width: '30px', height: '30px', borderRadius: '50%', background: 'rgba(191,149,63,0.12)', border: '1px solid rgba(191,149,63,0.3)', color: '#BF953F', cursor: 'pointer', fontSize: '1.1rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>+</button>
            </div>
            <div style={{ fontFamily: "'Cormorant Garamond', serif", color: 'rgba(255,255,255,0.55)', fontSize: '0.95rem', minWidth: '100px', textAlign: 'right', flexShrink: 0 }}>$ {fmt(item.price * item.qty)}</div>
            <button onClick={() => onRemove(item.id)} style={{ background: 'rgba(255,80,80,0.08)', border: '1px solid rgba(255,80,80,0.2)', borderRadius: '50%', width: '32px', height: '32px', cursor: 'pointer', color: '#ff6b6b', fontSize: '0.8rem', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>✕</button>
          </div>
        ))}
        {cart.length > 0 && (
          <div style={{ marginTop: '28px', paddingTop: '24px', borderTop: '1px solid rgba(191,149,63,0.15)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '28px' }}>
              <span style={{ fontFamily: "'Inter', sans-serif", color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.15em' }}>Total ({cart.reduce((s,i)=>s+i.qty,0)} productos)</span>
              <span className="gold-text-complete" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '2rem', fontWeight: 700 }}>$ {fmt(total)} <span style={{ fontSize: '0.85rem', fontFamily: "'Inter', sans-serif" }}>COP</span></span>
            </div>
            <button onClick={sendWhatsApp} className="gold-button-shiny" style={{ width: '100%', border: 'none', borderRadius: '50px', padding: '18px 32px', cursor: 'pointer', fontFamily: "'Inter', sans-serif", fontSize: '0.85rem', fontWeight: 900, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#E65FA5', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
              💬 Enviar pedido por WhatsApp
            </button>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.7rem', color: 'rgba(255,255,255,0.25)', textAlign: 'center', marginTop: '12px' }}>Se abrirá WhatsApp con tu pedido completo listo para enviar</p>
          </div>
        )}
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
    <div style={{ minHeight: '100vh', background: '#E65FA5', fontFamily: "'Inter', sans-serif", color: 'white', overflowX: 'hidden' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&family=Cormorant+Garamond:wght@700&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        .gold-text-complete {
          background: linear-gradient(to right, #BF953F 0%, #FCF6BA 25%, #B38728 50%, #FBF5B7 75%, #AA771C 100%);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          background-size: 200% auto; animation: shine 4s linear infinite;
          text-shadow: 0.8px 0px 0px rgba(191,149,63,0.4), -0.8px 0px 0px rgba(191,149,63,0.4), 0px 0.5px 0px rgba(0,0,0,0.2);
        }
        @keyframes shine { to { background-position: 200% center; } }
        .gold-button-shiny {
          background: linear-gradient(135deg, #BF953F 0%, #FCF6BA 50%, #B38728 100%);
          position: relative; overflow: hidden; transition: all 0.3s ease;
          box-shadow: 0 15px 35px -10px rgba(191,149,63,0.4);
        }
        .gold-button-shiny::after {
          content: ""; position: absolute; top: -50%; left: -60%;
          width: 25%; height: 200%; background: rgba(255,255,255,0.4);
          transform: rotate(30deg); animation: reflection 3s infinite;
        }
        .gold-button-shiny:hover { transform: scale(1.06) translateY(-2px); box-shadow: 0 20px 48px -8px rgba(191,149,63,0.55) !important; }
        @keyframes reflection { 0%{left:-60%} 30%{left:120%} 100%{left:120%} }
        .gold-card-wrap {
          padding: 1px;
          background: linear-gradient(to bottom, rgba(191,149,63,0.5), transparent);
          border-radius: 30px; transition: transform 0.3s ease;
        }
        .gold-card-wrap:hover { transform: translateY(-4px); }
        @keyframes float1 { 0%,100%{transform:translate(0,0) scale(1)} 50%{transform:translate(20px,-30px) scale(1.05)} }
        @keyframes float2 { 0%,100%{transform:translate(0,0)} 50%{transform:translate(-25px,20px) scale(0.95)} }
        @keyframes float3 { 0%,100%{transform:translate(0,0)} 50%{transform:translate(15px,25px)} }
        @keyframes spin-slow { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
        @keyframes fadeInUp { from{opacity:0;transform:translateY(40px)} to{opacity:1;transform:translateY(0)} }
        .hero-title { animation: fadeInUp 0.9s ease both; }
        .hero-sub   { animation: fadeInUp 0.9s 0.2s ease both; }
        .hero-btns  { animation: fadeInUp 0.9s 0.4s ease both; }
        .step-card:hover .step-num { box-shadow: 0 0 40px rgba(191,149,63,0.4); }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #001020; }
        ::-webkit-scrollbar-thumb { background: rgba(191,149,63,0.3); border-radius: 3px; }
      `}</style>

      <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0, overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: '600px', height: '600px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(191,149,63,0.07) 0%, transparent 70%)', animation: 'float1 8s ease-in-out infinite' }} />
        <div style={{ position: 'absolute', bottom: '20%', left: '-8%', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(191,149,63,0.05) 0%, transparent 70%)', animation: 'float2 10s ease-in-out infinite' }} />
        <div style={{ position: 'absolute', top: '50%', left: '40%', width: '300px', height: '300px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(232,100,154,0.04) 0%, transparent 70%)', animation: 'float3 7s ease-in-out infinite' }} />
      </div>

      <Navbar onOpenMenu={() => setIsMenuOpen(true)} cartCount={cartCount} onOpenCart={() => setIsCartOpen(true)} />
      <MenuModal isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} onAddToCart={addToCart} />
      <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} cart={cart} onRemove={removeFromCart} onUpdateQty={updateQty} />

      <main style={{ position: 'relative', zIndex: 1 }}>

        <section style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '120px 24px 80px', position: 'relative' }}>
          <div style={{ position: 'absolute', inset: 0, zIndex: 0, overflow: 'hidden' }}>
            <img src={fleur} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.14 }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,26,61,0.5) 0%, rgba(0,26,61,0.55) 60%, #E65FA5 100%)' }} />
          </div>
          <img src={fleur1} alt="" style={{ position: 'absolute', left: 0, top: '50%', transform: 'translateY(-50%)', width: '20%', maxWidth: '260px', borderRadius: '0 50% 50% 0', opacity: 0.45, objectFit: 'cover', height: '400px', zIndex: 1 }} />
          <img src={fleur2} alt="" style={{ position: 'absolute', right: 0, top: '55%', transform: 'translateY(-50%)', width: '20%', maxWidth: '260px', borderRadius: '50% 0 0 50%', opacity: 0.45, objectFit: 'cover', height: '400px', zIndex: 1 }} />

          <div style={{ position: 'relative', zIndex: 2, width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ position: 'absolute', width: '520px', height: '520px', borderRadius: '50%', border: '1px solid rgba(191,149,63,0.12)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', animation: 'spin-slow 30s linear infinite' }}>
              {[img3d, img3d1, img3d2, img3d3, img3d4, img3d5].map((src, i) => (
                <div key={i} style={{ position: 'absolute', top: `${50 - 48 * Math.cos(i * Math.PI / 3)}%`, left: `${50 + 48 * Math.sin(i * Math.PI / 3)}%`, transform: 'translate(-50%,-50%)', animation: 'spin-slow 30s linear infinite reverse' }}>
                  <img src={src} alt="" style={{ width: '52px', height: '52px', borderRadius: '50%', objectFit: 'cover', border: '2px solid rgba(191,149,63,0.5)', boxShadow: '0 4px 16px rgba(191,149,63,0.3)' }} />
                </div>
              ))}
            </div>

            <div style={{ position: 'relative', maxWidth: '800px' }}>
              <div className="hero-title" style={{ display: 'inline-block', background: 'rgba(191,149,63,0.08)', border: '1px solid rgba(191,149,63,0.3)', borderRadius: '50px', padding: '6px 20px', marginBottom: '28px', fontFamily: "'Inter', sans-serif", fontSize: '0.7rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#BF953F', fontWeight: 700 }}>✦ Arte Comestible ✦</div>
              <h1 className="hero-title" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2.8rem, 7vw, 5.5rem)', fontWeight: 700, lineHeight: 1.1, color: 'white', marginBottom: '12px' }}>Gelatinas 3D</h1>
              <h1 className="hero-title gold-text-complete" style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontSize: 'clamp(2.8rem, 7vw, 5.5rem)', fontWeight: 700, lineHeight: 1.1, marginBottom: '32px', display: 'block' }}>que son obras de arte</h1>
              <p className="hero-sub" style={{ fontFamily: "'Inter', sans-serif", fontSize: '1rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.8, marginBottom: '48px' }}>
                Creaciones artesanales en gelatina tridimensional · Flores, figuras y diseños exclusivos<br />para tus momentos más especiales
              </p>
              <div className="hero-btns" style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <button onClick={() => setIsMenuOpen(true)} className="gold-button-shiny" style={{ border: 'none', borderRadius: '50px', padding: '18px 40px', cursor: 'pointer', fontFamily: "'Inter', sans-serif", fontSize: '0.8rem', fontWeight: 900, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#E65FA5' }}>Ver Catálogo</button>
                <button onClick={() => setIsCartOpen(true)} style={{ background: 'rgba(255,255,255,0.04)', backdropFilter: 'blur(12px)', color: 'white', borderRadius: '50px', padding: '18px 36px', fontFamily: "'Inter', sans-serif", fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', border: '1px solid rgba(191,149,63,0.3)', cursor: 'pointer', transition: 'all 0.3s ease' }}>
                  🛒 Mi Carrito {cartCount > 0 && `(${cartCount})`}
                </button>
              </div>
            </div>
          </div>
        </section>

        <div style={{ width: '240px', height: '2px', background: 'linear-gradient(to right, transparent, #BF953F, transparent)', margin: '0 auto' }} />

        <section id="productos" style={{ padding: '80px 24px 100px', maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '72px' }}>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.7rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#BF953F', fontWeight: 700, marginBottom: '12px' }}>✦ Nuestras Creaciones ✦</p>
            <h2 className="gold-text-complete" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700 }}>Las Más Deseadas</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            {PRODUCTS.map(p => (
              <div key={p.id} className="gold-card-wrap">
                <GelCard product={p} onAddToCart={addToCart} />
              </div>
            ))}
          </div>
        </section>

        <section id="proceso" style={{ padding: '80px 24px 100px', background: 'linear-gradient(180deg, transparent 0%, rgba(191,149,63,0.03) 50%, transparent 100%)' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center', marginBottom: '64px' }}>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.7rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#BF953F', fontWeight: 700, marginBottom: '12px' }}>✦ Nuestro Arte ✦</p>
            <h2 className="gold-text-complete" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, marginBottom: '40px' }}>Del Concepto a la Mesa</h2>
            <div style={{ width: '220px', height: '220px', borderRadius: '50%', overflow: 'hidden', margin: '0 auto 48px', border: '3px solid rgba(191,149,63,0.25)', boxShadow: '0 20px 60px -10px rgba(191,149,63,0.18)' }}>
              <img src={fleur3} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </div>
          <div style={{ maxWidth: '900px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '32px' }}>
            {[
              { n: '01', t: 'Diseño', d: 'Tú eliges el motivo o nos inspiras. Cada pieza se boceta antes de empezar.', e: '✏️' },
              { n: '02', t: 'Elaboración', d: 'Capas inyectadas a mano con agujas de precisión. 8–24h de trabajo artesanal.', e: '🎨' },
              { n: '03', t: 'Curado', d: 'Reposo en frío controlado para lograr la textura y el brillo perfectos.', e: '❄️' },
              { n: '04', t: 'Entrega', d: 'Embalaje premium refrigerado. Recoge en tienda o envío a domicilio.', e: '🎁' },
            ].map(step => (
              <div key={step.n} className="step-card" style={{ background: 'rgba(255,255,255,0.02)', backdropFilter: 'blur(12px)', border: '1px solid rgba(191,149,63,0.15)', borderRadius: '24px', padding: '32px 24px', textAlign: 'center' }}>
                <div className="step-num" style={{ width: '56px', height: '56px', borderRadius: '50%', background: 'rgba(191,149,63,0.08)', border: '1px solid rgba(191,149,63,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px', fontFamily: "'Cormorant Garamond', serif", fontSize: '1.2rem', color: '#BF953F', fontWeight: 700, transition: 'box-shadow 0.3s ease' }}>{step.n}</div>
                <div style={{ fontSize: '2rem', marginBottom: '12px' }}>{step.e}</div>
                <h4 style={{ fontFamily: "'Cormorant Garamond', serif", color: 'white', fontSize: '1.1rem', fontWeight: 700, marginBottom: '8px' }}>{step.t}</h4>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)', lineHeight: 1.7 }}>{step.d}</p>
              </div>
            ))}
          </div>
        </section>

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
