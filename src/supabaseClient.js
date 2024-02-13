import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://kvggwazzsklknpkyimrr.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt2Z2d3YXp6c2tsa25wa3lpbXJyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDY5OTc3NzIsImV4cCI6MjAyMjU3Mzc3Mn0._pxRNgREBIGzEqn-tmT9JVg4ahXuKctzTmygKAeOIVw';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
