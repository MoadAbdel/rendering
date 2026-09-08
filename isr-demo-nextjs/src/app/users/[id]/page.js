import { getUserById, getUsers } from "@/lib/users";
import { notFound } from "next/navigation";
import Link from "next/link";

export const revalidate = 30;

export async function generateStaticParams() {
  const users = await getUsers();
  return users.map((user) => ({ id: String(user.id) }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const user = await getUserById(id);
  if (!user) return { title: "Utilisateur non trouvé" };
  return { title: `${user.name} - NexShop ISR` };
}

export default async function UserPage({ params }) {
  const { id } = await params;
  const user = await getUserById(id);

  if (!user) {
    notFound();
  }

  return (
    <main>
      <Link href="/users">← Retour aux utilisateurs</Link>
      <p className="badge">🔄 Page ISR — revalidée toutes les 30s</p>

      <h1>{user.name}</h1>
      <p>Email : {user.email}</p>
      <p>Ville : {user.city}</p>
      <p>Société : {user.company}</p>
    </main>
  );
}
