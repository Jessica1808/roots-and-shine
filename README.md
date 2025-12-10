# Roots & Shine — Proyecto para Vercel

Este paquete contiene un proyecto Next.js listo para desplegar en Vercel y conectar con Supabase.

### Qué incluye
- Frontend básico (Next.js)
- Login por email (magic link) para clientes
- Panel de cliente (dashboard)
- Panel de admin
- Estilo básico con la paleta: Gris oscuro (#1E1E1E), Dorado (#C5A253), Blanco (#FFFFFF)

### Credenciales provisionales (configurar en Supabase)
- Admin user: admin@rootsandshine.local
- Admin password: Roots18082813

### Variables de entorno (.env.local)

```
NEXT_PUBLIC_SUPABASE_URL=tu_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=tu_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=tu_supabase_service_role_key
NEXT_PUBLIC_SITE_NAME=Roots & Shine
NEXT_PUBLIC_PRIMARY_COLOR=#1E1E1E
NEXT_PUBLIC_ACCENT_COLOR=#C5A253
NEXT_PUBLIC_WHITE=#FFFFFF
```

### Instrucciones rápidas
1. Crear proyecto en Supabase y ejecutar el SQL (archivo `supabase.sql`).
2. Crear usuario admin en Supabase Auth con el email mostrado arriba y usar su UID para insertar en `profiles`.
3. Completar variables de entorno en Vercel o en `.env.local`.
4. Subir este repo a GitHub e importarlo en Vercel.
5. Desplegar.

Si quieres que yo prepare el repo en GitHub o te lo suba, dímelo y lo preparo.
