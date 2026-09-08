import { users } from "@/lib/users";
import Link from "next/link";

export const metadata = {
  title: "NexShop - Utilisateurs",
};

export default function UsersPage() {
  return (
    <main>
      <h1>👥 Utilisateurs</h1>
      <p className="badge">⚡ Page statique SSG — Générée au build</p>

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
