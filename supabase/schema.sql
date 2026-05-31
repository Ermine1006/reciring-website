-- Reciring waitlist table.
-- Run this in the Supabase SQL editor (Dashboard → SQL → New query).

create table if not exists public.waitlist (
  id          uuid primary key default gen_random_uuid(),
  created_at  timestamptz not null default now(),
  name        text,
  email       text,
  school      text,
  program     text,
  linkedin    text,
  looking_for text[],
  source      text
);

-- Avoid duplicate signups for the same email.
create unique index if not exists waitlist_email_key
  on public.waitlist (lower(email));

-- Row Level Security: the public anon key may INSERT, but never read others' rows.
alter table public.waitlist enable row level security;

drop policy if exists "anon can join waitlist" on public.waitlist;
create policy "anon can join waitlist"
  on public.waitlist
  for insert
  to anon
  with check (
    email is not null
    and char_length(email) < 320
    and char_length(coalesce(name, '')) < 200
  );

-- No SELECT policy is created, so the anon key cannot read the list.
-- View signups from the Supabase dashboard (Table editor) or the service role.
