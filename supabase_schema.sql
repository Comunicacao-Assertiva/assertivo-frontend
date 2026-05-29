-- Execute no SQL Editor do Supabase (Dashboard > SQL Editor > New query)

create table if not exists public.scores (
  id            uuid        primary key default gen_random_uuid(),
  player_name   text        not null default 'Anônimo',
  total_score   integer     not null,
  classification text        not null,
  phase_scores  integer[]   not null default '{}',
  correct_count integer     not null default 0,
  partial_count integer     not null default 0,
  wrong_count   integer     not null default 0,
  created_at    timestamptz not null default now()
);

create index if not exists scores_total_score_idx
  on public.scores (total_score desc);

-- Leitura e inserção via anon key — igual ao padrão do Roesel Transportes
alter table public.scores enable row level security;

create policy "Leitura pública"  on public.scores for select using (true);
create policy "Inserção pública" on public.scores for insert with check (true);
