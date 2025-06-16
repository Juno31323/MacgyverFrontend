import { createClient } from '@supabase/supabase-js';

// Supabase 초기화
const SUPABASE_URL = 'https://xaayfpualnmhhgywhgyf.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhhYXlmcHVhbG5taGhneXdoZ3lmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ4ODcyOTgsImV4cCI6MjA2MDQ2MzI5OH0.ArO9tot97fc9N5LRV6PujBEo3QihFuqygQQUnT2Lb-w';
//const country = document.getElementById('country'); // 국산, 외제 선택

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);