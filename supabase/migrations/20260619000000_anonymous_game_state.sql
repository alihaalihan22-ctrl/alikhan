create table if not exists public.anonymous_game_profiles (
  player_key text primary key,
  display_name text,
  settings jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.anonymous_game_saves (
  id uuid primary key default gen_random_uuid(),
  player_key text not null references public.anonymous_game_profiles (player_key) on delete cascade,
  slot text not null default 'default',
  progress jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (player_key, slot)
);

create table if not exists public.game_events (
  id uuid primary key default gen_random_uuid(),
  player_key text,
  event_name text not null,
  payload jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists set_anonymous_game_profiles_updated_at on public.anonymous_game_profiles;
create trigger set_anonymous_game_profiles_updated_at
  before update on public.anonymous_game_profiles
  for each row execute function public.set_updated_at();

drop trigger if exists set_anonymous_game_saves_updated_at on public.anonymous_game_saves;
create trigger set_anonymous_game_saves_updated_at
  before update on public.anonymous_game_saves
  for each row execute function public.set_updated_at();

alter table public.anonymous_game_profiles enable row level security;
alter table public.anonymous_game_saves enable row level security;
alter table public.game_events enable row level security;

drop policy if exists "anonymous profiles are usable" on public.anonymous_game_profiles;
drop policy if exists "anonymous saves are usable" on public.anonymous_game_saves;
drop policy if exists "anonymous game events insert" on public.game_events;

create policy "anonymous profiles are usable"
  on public.anonymous_game_profiles
  for all
  using (true)
  with check (player_key <> '');

create policy "anonymous saves are usable"
  on public.anonymous_game_saves
  for all
  using (true)
  with check (player_key <> '' and slot <> '');

create policy "anonymous game events insert"
  on public.game_events
  for insert
  with check (event_name <> '');
