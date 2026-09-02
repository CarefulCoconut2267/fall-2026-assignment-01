// Define the RemoteUser type with properties id, name, and email
export type RemoteUser = {
  id: number;
  name: string;
  email: string;
};

// Function to fetch user emails from a remote API and return them as an array of strings
export async function fetchUserEmails(): Promise<string[]> {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = (await response.json()) as RemoteUser[];
  return users.map((user) => user.email);
}
