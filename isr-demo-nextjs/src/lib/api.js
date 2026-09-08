// URL de l'API JSON Server
const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";

// Fonction utilitaire pour fetch
export async function fetchAPI(endpoint) {
  const res = await fetch(`${API_URL}${endpoint}`, {
    // ISR : Next.js revalide ce fetch selon `export const revalidate` de la page
    next: { revalidate: 30 },
  });
  if (!res.ok) throw new Error("Erreur API");
  return res.json();
}
