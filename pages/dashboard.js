
import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import { useRouter } from 'next/router';

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [propsData, setPropsData] = useState([]);
  const router = useRouter();

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      if (!data.session) {
        router.push('/login');
      } else {
        setUser(data.session.user);
        loadProperties();
      }
    });
  }, []);

  const loadProperties = async () => {
    const { data, error } = await supabase.from('properties').select('*');
    if (error) console.error(error);
    else setPropsData(data || []);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push('/');
  };

  return (
    <div style={{ padding: 24 }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2>Mi panel</h2>
        <div>
          <button onClick={handleLogout} style={{ marginRight: 8 }}>Cerrar sesión</button>
        </div>
      </header>

      <section>
        <h3>Propiedades</h3>
        {propsData.length === 0 && <p>No tienes propiedades registradas.</p>}
        <ul>
          {propsData.map(p => (
            <li key={p.id}>
              <strong>{p.nombre}</strong> — {p.direccion}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
