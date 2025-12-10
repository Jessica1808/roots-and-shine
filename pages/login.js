
import { useState } from 'react';
import { supabase } from '../lib/supabaseClient';

export default function Login() {
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    const { error } = await supabase.auth.signInWithOtp({ email });
    if (error) setMsg('Error: ' + error.message);
    else setMsg('Revisa tu correo para acceder (link enviado).');
  };

  return (
    <div style={{ padding: 24 }}>
      <h2>Acceso Clientes</h2>
      <p>Tu espacio exclusivo para gestionar tus propiedades con Roots & Shine</p>
      <form onSubmit={handleLogin}>
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Tu correo" style={{ padding: 8, width: 300 }} />
        <button type="submit" style={{ marginLeft: 8, padding: '8px 12px', background:'#C5A253', color:'#fff', border:'none' }}>Enviar link</button>
      </form>
      <p>{msg}</p>
    </div>
  );
}
