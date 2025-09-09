import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  MoreVertical,
  Pin,
  Settings,
  Share2,
  ShieldCheck,
  Trash,
  TriangleAlert,
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function StatisticCard13() {
  const total = 30;
  const passing = 25;

  return (
    <div className="">
      {/* Progress Bar */}
      <div className="flex gap-1.5">
        {[...Array(total)].map((_, i) => (
          <span
            key={i}
            className={cn(
              `inline-block w-4 h-16 rounded-none transition-colors`,
              i < passing ? "bg-green-700" : "bg-red-700 "
            )}
          />
        ))}
      </div>

      {/* Passing Checks */}
      <div className="flex items-center justify-between text-xs text-muted-foreground mt-1">
        <span>{passing}/16 checks passing</span>
        <span className="font-semibold text-foreground">
          {Math.round((passing / total) * 100)}% assigned
        </span>
      </div>
    </div>
  );
}
