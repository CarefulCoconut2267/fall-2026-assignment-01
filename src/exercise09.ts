// Define AdminUser type with properties adminId and permissions
export type AdminUser = {
  adminId: string;
  permissions: string[];
};

// Define GuestUser type with properties guestToken and expiresAt
export type GuestUser = {
  guestToken: string;
  expiresAt: Date;
};

// Type guard function to check if a user is an AdminUser
export function isAdmin(user: AdminUser | GuestUser): user is AdminUser {
  return 'adminId' in user;
}

// Function to extract AdminUser instances from an array of users
export function extractAdmins(
  users: Array<AdminUser | GuestUser>,
): AdminUser[] {
  return users.filter(isAdmin);
}
