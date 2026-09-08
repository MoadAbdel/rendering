import { users } from "@/lib/users";
import { notFound } from "next/navigation";
import Link from "next/link";

// SSG - Génère les pages statiques pour chaque utilisateur
export function generateStaticParams() {
  return users.map((user) => ({
    id: String(user.id),
  }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const user = users.find((u) => u.id === Number(id));
  if (!user) return { title: "Utilisateur non trouvé" };

  return { title: `${user.name} - NexShop` };
}

// SSG - Page profil utilisateur générée statiquement au build
export default async function UserPage({ params }) {
  const { id } = await params;
  const user = users.find((u) => u.id === Number(id));

  if (!user) {
    notFound();
  }

  return (
    <main>
      <Link href="/users">← Retour aux utilisateurs</Link>
      <p className="badge">⚡ Page statique SSG — Générée au build</p>

      <h1>{user.name}</h1>
      <p>Email : {user.email}</p>
      <p>Ville : {user.city}</p>
      <p>Société : {user.company}</p>
    </main>
  );
}
