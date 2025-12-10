
import Link from 'next/link';

export default function NavBar() {
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: 16 }}>
      <div style={{ fontWeight: 'bold', color: '#1E1E1E' }}>Roots & Shine</div>
      <div>
        <Link href="/"><a style={{ marginRight: 12 }}>Inicio</a></Link>
        <Link href="/login"><a style={{ marginRight: 12 }}>Área Clientes</a></Link>
        <Link href="/admin"><a>Admin</a></Link>
      </div>
    </nav>
  );
}
