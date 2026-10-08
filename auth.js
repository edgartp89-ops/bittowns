// Configuración global de Supabase
const SUPABASE_URL = 'https://cxpsktskbvrkwtkolrpl.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN4cHNrdHNrYnZya3d0a29scnBsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTE0NTc1MjUsImV4cCI6MjEwNzAzMzUyNX0.9RJAEUxalZ3oI9DVWDr8x9s4QPpxWXZwMQBRm9lwVq0';

let supabaseClient;

if (typeof supabase !== 'undefined') {
    supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
}

// Función global para obtener la sesión actual
async function getActiveSession() {
    if (!supabaseClient) return null;
    const { data: { session } } = await supabaseClient.auth.getSession();
    return session;
}

// Función global para cerrar sesión desde cualquier página
async function logoutUser() {
    if (supabaseClient) {
        await supabaseClient.auth.signOut();
        window.location.href = 'index.html';
    }
}
