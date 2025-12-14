import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://oiuegwtttiefhvpceaqh.supabase.co'
const supabaseAnonKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9pdWVnd3R0dGllZmh2cGNlYXFoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjU2OTA0MzAsImV4cCI6MjA4MTI2NjQzMH0.8TNnZpSbEkEfb-NjUZx7VPS_pAthd_thO2XpMtUQp3k'

export const supabase = createClient(
  supabaseUrl,
  supabaseAnonKey
)
