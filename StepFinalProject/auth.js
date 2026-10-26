// Supabase project settings
const SUPABASE_URL = "https://tvjqsmdpeovgoghoshfc.supabase.co";
const SUPABASE_KEY = "sb_publishable_4p9xh5uCf6pLCEd4lHUSpw_giuwLvIl";

// Create the Supabase client
const supabaseClient = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_KEY
);