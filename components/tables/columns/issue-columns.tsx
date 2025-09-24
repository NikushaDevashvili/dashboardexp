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
import { ArrowUpDown, MoreHorizontal, User } from "lucide-react";
import type { Issue, IssueActions } from "@/data/types";

interface IssueColumnsProps {
  actions?: IssueActions;
}

export const createIssueColumns = ({
  actions,
}: IssueColumnsProps = {}): ColumnDef<Issue>[] => [
  {
    accessorKey: "type",
    header: "Type",
    cell: ({ row }) => (
      <Badge variant="outline">
        <div className="font-semibold text-sm">{row.getValue("type")}</div>
      </Badge>
    ),
  },
  {
    accessorKey: "level",
    header: "Level",
    cell: ({ row }) => {
      const status = row.getValue("level") as string;
      return (
        <Badge
          className={
            status === "low"
              ? "bg-green-700 dark:text-white"
              : status === "medium"
              ? "bg-yellow-600 dark:text-white"
              : status === "critical"
              ? "bg-red-700 dark:text-white"
              : "bg-gray-50"
          }
        >
          {status}
        </Badge>
      );
    },
  },
  {
    accessorKey: "time",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Time
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => <div className="lowercase">{row.getValue("time")}</div>,
  },
  {
    accessorKey: "users",
    header: "Affected Users",
    cell: ({ row }) => (
      <div className="flex flex-row items-center space-x-1">
        <User className="w-4" />
        <div className="font-medium">{row.getValue("users")}</div>
      </div>
    ),
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const issue = row.original;
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
              onClick={() => navigator.clipboard.writeText(issue.id)}
            >
              Copy issue ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            {actions?.onView && (
              <DropdownMenuItem onClick={() => actions.onView(issue)}>
                View details
              </DropdownMenuItem>
            )}
            {actions?.onEdit && (
              <DropdownMenuItem onClick={() => actions.onEdit(issue)}>
                Edit issue
              </DropdownMenuItem>
            )}
            {actions?.onDelete && (
              <DropdownMenuItem
                onClick={() => actions.onDelete(issue)}
                className="text-red-600"
              >
                Delete issue
              </DropdownMenuItem>
            )}
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
