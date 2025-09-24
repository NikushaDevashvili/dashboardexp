export interface User {
  id: string;
  name: string;
  email: string;
  role: "admin" | "user" | "moderator";
  status: "active" | "inactive" | "pending";
  lastLogin: string;
  avatar?: string;
  joinDate: string;
  department?: string;
  permissions?: string[];
}

export interface UserFilters {
  role?: User["role"];
  status?: User["status"];
  department?: string;
}

export interface UserActions {
  onView: (user: User) => void;
  onEdit: (user: User) => void;
  onDelete: (user: User) => void;
  onResetPassword: (user: User) => void;
}
