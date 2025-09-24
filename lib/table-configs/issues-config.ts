import type { DataTableProps } from "@/components/tables/DataTable";
import type { Issue } from "@/data/types";

export const issuesTableConfig: Partial<DataTableProps<Issue, any>> = {
  filterColumn: "type",
  filterPlaceholder: "Filter issues (e.g: overspend, latency)",
  enableSorting: true,
  enableColumnVisibility: true,
  enablePagination: true,
  pageSize: 10,
  height: "h-96",
  title: "Issues",
  description: "Monitor and manage system issues",
};
