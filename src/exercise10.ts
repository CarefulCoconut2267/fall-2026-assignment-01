// Define the UserAccount type with properties id, createdAt, email, passwordHash, and profile
type UserAccount = {
  id: string;
  createdAt: Date;
  email: string;
  passwordHash: string;
  profile: {
    bio: string;
    avatarUrl: string;
  };
};

// Define the UserRegistry class to manage user accounts
export class UserRegistry {
  // Private property to store user accounts in a Map, where the key is the user id and the value is the UserAccount object
  private readonly users = new Map<string, UserAccount>();

  // Method to register a new user account, generating a unique id and setting the createdAt timestamp
  public registerUser(
    data: Omit<UserAccount, 'id' | 'createdAt'>,
  ): UserAccount {
    const user: UserAccount = {
      id: crypto.randomUUID(),
      createdAt: new Date(),
      ...data,
    };

    this.users.set(user.id, user);
    return user;
  }

  // Method to retrieve a read-only view of a user account by id, returning only the id, email, and profile properties
  public getUserView(
    id: string,
  ): Readonly<Pick<UserAccount, 'id' | 'email' | 'profile'>> | undefined {
    const user = this.users.get(id);

    if (!user) {
      return undefined;
    }

    const view = Object.freeze({
      id: user.id,
      email: user.email,
      profile: Object.freeze({ ...user.profile }),
    });

    return view;
  }
}
