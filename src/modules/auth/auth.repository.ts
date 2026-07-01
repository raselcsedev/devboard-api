export interface UserRecord {
  id: string;
  name: string;
  email: string;
}

export async function findByEmail(
  email: string,
): Promise<UserRecord | null> {
  console.log("🗄️ Repository: Searching user...");

  if (email === "rasel@test.com") {
    return {
      id: "user-1",
      name: "Md. Rasel",
      email,
    };
  }

  return null;
}