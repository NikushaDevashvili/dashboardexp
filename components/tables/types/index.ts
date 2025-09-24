// Export all data types
export type * from "./issue";
export type * from "./event";
export type * from "./user";

// Common types
export interface BaseEntity {
  id: string;
  createdAt: string;
  updatedAt: string;
}

export interface TableSorting {
  field: string;
  direction: "asc" | "desc";
}

export interface PaginationInfo {
  page: number;
  pageSize: number;
  total: number;
  totalPages: number;
}
