import express from "express";

const app = express();
const PORT = 3000;

app.get("/", async (req, res) => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();

    const html = `
<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>SSR Demo</title>
  </head>
  <body>
    <h1>✅ Server-Side Rendering (SSR)</h1>
    <p>Données déjà intégrées dans le HTML !</p>

    <h2>Liste des utilisateurs</h2>
    ${users.map((user) => `
    <div class="user-card">
      <strong>${user.name}</strong> — ${user.email}
      <small>Ville : ${user.address.city} | Société : ${user.company.name}</small>
    </div>
    `).join("")}
  </body>
</html>
    `;

    res.send(html);
  } catch (error) {
    res.status(500).send("<h1>Erreur serveur</h1>");
  }
});

app.listen(PORT, () => {
  console.log(`✅ SSR : http://localhost:${PORT}`);
});
