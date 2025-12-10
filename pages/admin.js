
import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import { useRouter } from 'next/router';

export default function Admin() {
  const [user, setUser] = useState(null);
  const [profiles, setProfiles] = useState([]);
  const router = useRouter();

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      if (!data.session) return router.push('/login');
      setUser(data.session.user);
      checkAdmin(data.session.user);
    });
  }, []);

  const checkAdmin = async (u) => {
    const { data, error } = await supabase.from('profiles').select('*');
    if (error || !data) {
      alert('No autorizado');
      router.push('/');
    } else {
      setProfiles(data);
    }
  };

  return (
    <div style={{ padding: 24 }}>
      <h2>Panel Admin</h2>
      <h3>Perfiles</h3>
      <ul>
        {profiles.map(p => <li key={p.id}>{p.full_name} — {p.role}</li>)}
      </ul>
    </div>
  );
}
