"use client";
import { ColumnDef } from "@tanstack/react-table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  ArrowUpDown,
  MoreHorizontal,
  Calendar,
  Clock,
  Activity,
} from "lucide-react";
import type { Event, EventActions } from "@/data/types";

interface EventColumnsProps {
  actions?: EventActions;
}

export const createEventColumns = ({
  actions,
}: EventColumnsProps = {}): ColumnDef<Event>[] => [
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Event Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="flex items-center space-x-2">
        <Activity className="h-4 w-4" />
        <div className="font-medium">{row.getValue("name")}</div>
      </div>
    ),
  },
  {
    accessorKey: "type",
    header: "Type",
    cell: ({ row }) => {
      const type = row.getValue("type") as string;
      return (
        <Badge
          variant="outline"
          className={
            type === "user_action"
              ? "bg-blue-100 text-blue-800"
              : type === "system_event"
              ? "bg-purple-100 text-purple-800"
              : type === "error"
              ? "bg-red-100 text-red-800"
              : "bg-green-100 text-green-800"
          }
        >
          {type}
        </Badge>
      );
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status") as string;
      return (
        <Badge
          className={
            status === "active"
              ? "bg-green-700 dark:text-white"
              : status === "completed"
              ? "bg-blue-700 dark:text-white"
              : status === "failed"
              ? "bg-red-700 dark:text-white"
              : "bg-yellow-600 dark:text-white"
          }
        >
          {status}
        </Badge>
      );
    },
  },
  {
    accessorKey: "timestamp",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          <Calendar className="mr-2 h-4 w-4" />
          Timestamp
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="text-sm">{row.getValue("timestamp")}</div>
    ),
  },
  {
    accessorKey: "duration",
    header: "Duration",
    cell: ({ row }) => (
      <div className="flex items-center space-x-1">
        <Clock className="h-4 w-4" />
        <span className="text-sm">{row.getValue("duration")}</span>
      </div>
    ),
  },
  {
    accessorKey: "userCount",
    header: "Users",
    cell: ({ row }) => (
      <div className="text-center">
        <span className="font-medium">{row.getValue("userCount")}</span>
      </div>
    ),
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const event = row.original;
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(event.id)}
            >
              Copy event ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            {actions?.onView && (
              <DropdownMenuItem onClick={() => actions.onView(event)}>
                View event details
              </DropdownMenuItem>
            )}
            {actions?.onViewLogs && (
              <DropdownMenuItem onClick={() => actions.onViewLogs(event)}>
                View logs
              </DropdownMenuItem>
            )}
            {actions?.onExport && (
              <DropdownMenuItem onClick={() => actions.onExport(event)}>
                Export data
              </DropdownMenuItem>
            )}
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
