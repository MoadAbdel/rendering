import { getUsers } from "@/lib/users";
import Link from "next/link";

export const metadata = { title: "NexShop ISR - Utilisateurs" };

export const revalidate = 30;

export default async function UsersPage() {
  const users = await getUsers();
  const buildTime = new Date().toISOString();

  return (
    <main>
      <h1>👥 Utilisateurs</h1>
      <p className="badge">
        🔄 Dernier rendu : {new Date(buildTime).toLocaleTimeString("fr-FR")} — Revalidation ISR
        toutes les 30s
      </p>

      <div className="users-grid">
        {users.map((user) => (
          <Link key={user.id} href={`/users/${user.id}`}>
            <strong>{user.name}</strong>
            <p>{user.email}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
