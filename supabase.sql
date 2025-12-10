-- SQL para Supabase: tablas y políticas RLS

create table profiles (
  id uuid primary key default auth.uid(),
  full_name text,
  phone text,
  role text default 'cliente'
);

create table properties (
  id uuid primary key default gen_random_uuid(),
  cliente_id uuid references profiles(id) on delete cascade,
  nombre text,
  direccion text,
  tipo text,
  notas text,
  created_at timestamptz default now()
);

create table limpiezas (
  id uuid primary key default gen_random_uuid(),
  propiedad_id uuid references properties(id) on delete cascade,
  fecha timestamptz,
  tipo text,
  check_realizado text,
  fotos text[],
  observaciones text,
  created_at timestamptz default now()
);

create table facturacion (
  id uuid primary key default gen_random_uuid(),
  propiedad_id uuid references properties(id) on delete cascade,
  servicio text,
  precio numeric,
  estado_pago text,
  fecha_pago date,
  notas text,
  created_at timestamptz default now()
);

alter table profiles enable row level security;
alter table properties enable row level security;
alter table limpiezas enable row level security;
alter table facturacion enable row level security;

create policy "Profiles: authenticated users can select their profile" on profiles
for select using (auth.uid() = id);

create policy "Profiles: admins can manage" on profiles
for all using (exists (select 1 from profiles p where p.id = auth.uid() and p.role = 'admin'));

create policy "Properties: clientes select" on properties
for select using (cliente_id = auth.uid() or exists (select 1 from profiles p where p.id = auth.uid() and p.role = 'admin'));

create policy "Properties: clientes insert" on properties
for insert with check (cliente_id = auth.uid() or exists (select 1 from profiles p where p.id = auth.uid() and p.role = 'admin'));

create policy "Properties: admins full" on properties
for all using (exists (select 1 from profiles p where p.id = auth.uid() and p.role = 'admin'));

create policy "Limpiezas: clientes select" on limpiezas
for select using (
  exists (
    select 1 from properties pr where pr.id = limpiezas.propiedad_id and (pr.cliente_id = auth.uid() or exists (select 1 from profiles p where p.id = auth.uid() and p.role = 'admin'))
  )
);

create policy "Limpiezas: admins full" on limpiezas
for all using (exists (select 1 from profiles p where p.id = auth.uid() and p.role = 'admin'));

create policy "Facturacion: clientes select" on facturacion
for select using (
  exists (
    select 1 from properties pr where pr.id = facturacion.propiedad_id and (pr.cliente_id = auth.uid() or exists (select 1 from profiles p where p.id = auth.uid() and p.role = 'admin'))
  )
);

create policy "Facturacion: admins full" on facturacion
for all using (exists (select 1 from profiles p where p.id = auth.uid() and p.role = 'admin'));
