
import Link from 'next/link';

export default function Home() {
  return (
    <main style={{ padding: 24, fontFamily: 'Inter, sans-serif' }}>
      <header style={{ textAlign: 'center' }}>
        <h1 style={{ color: '#1E1E1E', fontSize: 44 }}>Roots & Shine</h1>
        <h3 style={{ color: '#C5A253' }}>Limpieza & Mantenimiento Profesional en Málaga</h3>
        <p style={{ maxWidth: 720, margin: '12px auto' }}>
          Excelencia, puntualidad y confianza para tu hogar o propiedad.
        </p>
        <div style={{ marginTop: 16 }}>
          <Link href="/login"><button style={{ background: '#C5A253', color: '#fff', border: 'none', padding: '12px 20px', borderRadius: 6 }}>Acceso Clientes</button></Link>
        </div>
      </header>

      <section style={{ marginTop: 40 }}>
        <h2 style={{ color: '#1E1E1E' }}>Nuestros servicios</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, maxWidth: 900 }}>
          <div style={{ padding: 16, border: '1px solid #eee', borderRadius: 8 }}>
            <h4>Limpieza Profesional</h4>
            <ul>
              <li>Pisos turísticos</li>
              <li>Hogares</li>
              <li>Oficinas</li>
              <li>Limpieza profunda</li>
              <li>Limpieza de obra</li>
              <li>Trasteros</li>
              <li>Cambio de ropa de cama</li>
              <li>Lavandería</li>
              <li>Terrazas</li>
              <li>Limpieza de fin de estancia</li>
            </ul>
          </div>
          <div style={{ padding: 16, border: '1px solid #eee', borderRadius: 8 }}>
            <h4>Mantenimiento (Diego)</h4>
            <ul>
              <li>Pintura</li>
              <li>Arreglos menores</li>
              <li>Silicona y juntas</li>
              <li>Reparaciones básicas</li>
              <li>Mantenimiento general</li>
              <li>Montajes simples</li>
            </ul>
          </div>
        </div>
      </section>

      <section style={{ marginTop: 40 }}>
        <h2>Contacto</h2>
        <p>Teléfonos: 697 89 62 42 · 674 736 042</p>
        <p>Email: rootsandshine@gmail.com</p>
      </section>

      <footer style={{ marginTop: 40, padding: 20, background: '#1E1E1E', color: '#fff' }}>
        <p>© 2025 Roots & Shine — Limpieza & Mantenimiento en Málaga</p>
      </footer>
    </main>
  );
}
