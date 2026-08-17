-- Migration: create contact_submissions table (Postgres / Supabase)
-- Run this in Supabase SQL editor or via psql

CREATE TABLE IF NOT EXISTS public.contact_submissions (
  id bigserial PRIMARY KEY,
  inquiry_type text NOT NULL,
  name text NOT NULL,
  email text,
  phone text NOT NULL,
  grade text NOT NULL,
  message text,
  created_at timestamptz NOT NULL DEFAULT now()
);

-- Optional index for faster retrieval by created_at
CREATE INDEX IF NOT EXISTS idx_contact_submissions_created_at ON public.contact_submissions (created_at DESC);
