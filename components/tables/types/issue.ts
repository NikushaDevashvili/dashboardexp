export interface Issue {
  id: string;
  type: string;
  level: "low" | "medium" | "critical";
  time: string;
  users: string;
  description?: string;
  createdAt: string;
  updatedAt: string;
}

export interface IssueFilters {
  level?: Issue["level"];
  type?: string;
  dateRange?: {
    start: string;
    end: string;
  };
}

export interface IssueActions {
  onView: (issue: Issue) => void;
  onEdit: (issue: Issue) => void;
  onDelete: (issue: Issue) => void;
}
