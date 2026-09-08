import { fetchAPI } from "./api";

export async function getUsers() {
  try {
    return await fetchAPI("/users");
  } catch {
    return [];
  }
}

export async function getUserById(id) {
  const users = await getUsers();
  return users.find((u) => String(u.id) === String(id)) || null;
}
