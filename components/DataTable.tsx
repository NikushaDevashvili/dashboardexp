"use client";
import * as React from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import {
  ArrowUpDown,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  MoreHorizontal,
  User,
} from "lucide-react";
import { ScrollArea } from "./ui/scroll-area";
type Issue = {
  type: string;
  level: "low" | "medium" | "critical";
  time: string;
  users: string;
};
const data: Issue[] = [
  {
    type: "overspend",
    level: "critical",
    time: "14/9/2025 - 3:18 PM",
    users: "8.72%",
  },
  {
    type: "latency_spike",
    level: "medium",
    time: "14/9/2025 - 2:55 PM",
    users: "12.31%",
  },
  {
    type: "provider_outage",
    level: "critical",
    time: "14/9/2025 - 2:40 PM",
    users: "100%",
  },
  {
    type: "token_spike",
    level: "low",
    time: "14/9/2025 - 2:22 PM",
    users: "4.15%",
  },
  {
    type: "high_error_rate",
    level: "critical",
    time: "14/9/2025 - 1:59 PM",
    users: "23.48%",
  },
  {
    type: "rate_limit_hit",
    level: "medium",
    time: "14/9/2025 - 1:41 PM",
    users: "6.02%",
  },
  {
    type: "output_flood",
    level: "low",
    time: "14/9/2025 - 1:20 PM",
    users: "3.87%",
  },
  {
    type: "cache_miss",
    level: "medium",
    time: "14/9/2025 - 12:58 PM",
    users: "9.76%",
  },
  {
    type: "inefficient_model",
    level: "low",
    time: "14/9/2025 - 12:34 PM",
    users: "2.11%",
  },
  {
    type: "timeouts",
    level: "critical",
    time: "14/9/2025 - 12:05 PM",
    users: "15.64%",
  },
  {
    type: "output_flood",
    level: "low",
    time: "14/9/2025 - 1:20 PM",
    users: "3.87%",
  },
  {
    type: "cache_miss",
    level: "medium",
    time: "14/9/2025 - 12:58 PM",
    users: "9.76%",
  },
  {
    type: "inefficient_model",
    level: "low",
    time: "14/9/2025 - 12:34 PM",
    users: "2.11%",
  },
  {
    type: "timeouts",
    level: "critical",
    time: "14/9/2025 - 12:05 PM",
    users: "15.64%",
  },
];

const columns: ColumnDef<Issue>[] = [
  {
    accessorKey: "type",
    header: "Type",
    cell: ({ row }) => (
      <Badge variant={"outline"}>
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
      const payment = row.original;
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
              onClick={() => navigator.clipboard.writeText(payment.id)}
            >
              Copy payment ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
export default function TableData() {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});
  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });
  return (
    <div className="w-full  mx-auto p-6">
      <div className="flex items-center py-4">
        <Input
          placeholder="Filter issues (e.g: overspend, latency)"
          value={(table.getColumn("type")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("type")?.setFilterValue(event.target.value)
          }
          className="max-w-sm rounded-none"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline rounded-none" className="ml-auto">
              Columns <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                );
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="rounded-none border">
        <ScrollArea className="w-auto h-156">
          <Table>
            <TableHeader className="sticky top-0 z-10 bg-secondary">
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => {
                    return (
                      <TableHead key={header.id}>
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                      </TableHead>
                    );
                  })}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow
                    key={row.id}
                    data-state={row.getIsSelected() && "selected"}
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={columns.length}
                    className="h-24 text-center"
                  >
                    No results.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </ScrollArea>
      </div>

      <div className="flex items-center justify-between pt-4">
        <div className="text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
      </div>
    </div>
  );
}
