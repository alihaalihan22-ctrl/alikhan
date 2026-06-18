create table if not exists public.profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  email text,
  display_name text,
  created_at timestamptz not null default now(),
  last_login_at timestamptz not null default now()
);

create table if not exists public.game_saves (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null default auth.uid() references auth.users (id) on delete cascade,
  slot text not null default 'default',
  data jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now(),
  unique (user_id, slot)
);

create table if not exists public.ai_help_logs (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null default auth.uid() references auth.users (id) on delete cascade,
  question text not null,
  answer text,
  created_at timestamptz not null default now()
);

alter table public.profiles enable row level security;
alter table public.game_saves enable row level security;
alter table public.ai_help_logs enable row level security;

drop policy if exists "read own profile" on public.profiles;
drop policy if exists "upsert own profile" on public.profiles;
drop policy if exists "update own profile" on public.profiles;
drop policy if exists "read own saves" on public.game_saves;
drop policy if exists "insert own saves" on public.game_saves;
drop policy if exists "update own saves" on public.game_saves;
drop policy if exists "delete own saves" on public.game_saves;
drop policy if exists "read own ai logs" on public.ai_help_logs;
drop policy if exists "insert own ai logs" on public.ai_help_logs;

create policy "read own profile"
  on public.profiles for select
  using (auth.uid() = id);

create policy "upsert own profile"
  on public.profiles for insert
  with check (auth.uid() = id);

create policy "update own profile"
  on public.profiles for update
  using (auth.uid() = id)
  with check (auth.uid() = id);

create policy "read own saves"
  on public.game_saves for select
  using (auth.uid() = user_id);

create policy "insert own saves"
  on public.game_saves for insert
  with check (auth.uid() = user_id);

create policy "update own saves"
  on public.game_saves for update
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

create policy "delete own saves"
  on public.game_saves for delete
  using (auth.uid() = user_id);

create policy "read own ai logs"
  on public.ai_help_logs for select
  using (auth.uid() = user_id);

create policy "insert own ai logs"
  on public.ai_help_logs for insert
  with check (auth.uid() = user_id);
