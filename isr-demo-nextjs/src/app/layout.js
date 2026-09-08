import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "NexShop ISR",
  description: "Démonstration de l'Incremental Static Regeneration avec Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <header className="site-header">
          <div className="top">
            <strong>🛍️ NexShop ISR</strong>
            <nav>
              <Link href="/">Produits</Link>
              <Link href="/users">Utilisateurs</Link>
            </nav>
          </div>
        </header>
        {children}
        <footer className="footer">
          NexShop ISR - Démonstration de l'Incremental Static Regeneration © 2026
        </footer>
      </body>
    </html>
  );
}
