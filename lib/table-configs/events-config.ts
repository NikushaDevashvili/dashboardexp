import type { DataTableProps } from "@/components/tables/DataTable";
import type { Event } from "@/data/types";

export const eventsTableConfig: Partial<DataTableProps<Event, any>> = {
  filterColumn: "name",
  filterPlaceholder: "Filter events...",
  enableSorting: true,
  enableColumnVisibility: true,
  enablePagination: false,
  pageSize: 15,
  height: "h-auto",
  title: "Events",
  description: "Track system and user events",
};
