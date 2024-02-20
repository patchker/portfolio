import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'XXX';
const supabaseAnonKey = 'XXX';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
