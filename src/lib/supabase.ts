import { createClient } from '@supabase/supabase-js';

const rawUrl = (import.meta.env.VITE_SUPABASE_URL || import.meta.env.VITE_SUPABASE_UR) as string | undefined;
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined;
const url = rawUrl?.replace('/rest/v1/', '').replace('/rest/v1', '');

const createSupabaseClient = () => {
  if (!url || !anonKey) {
    return null;
  }

  return createClient(url, anonKey);
};

export const supabase = createSupabaseClient();
