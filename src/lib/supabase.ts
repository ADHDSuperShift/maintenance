import { createClient } from '@supabase/supabase-js';

// Replace these with your actual Supabase project credentials
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://your-project.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'your-anon-key';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Database types
export interface ContactSubmission {
  id?: string;
  name: string;
  email: string;
  phone?: string;
  message: string;
  created_at?: string;
}

export interface GalleryImage {
  id?: string;
  url: string;
  title?: string;
  description?: string;
  created_at?: string;
}
