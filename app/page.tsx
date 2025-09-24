"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import DataTable from "@/components/tables/DataTable";
import { createEventColumns } from "@/components/tables/columns/event-columns";
import { eventsTableConfig } from "@/lib/table-configs/events-config";
import { mockEvents } from "@/data/mock/events";
import type { EventActions, IssueActions } from "@/data/types";
import {
  Activity,
  Anchor,
  BatteryMedium,
  BookCheck,
  ChevronDown,
  Monitor,
  MonitorCogIcon,
  Server,
  Shredder,
  SquarePercent,
  Timer,
  Zap,
} from "lucide-react";
import { AppBarChart } from "@/components/AppBarChart";
import CardList from "@/components/CardList";
import TodoList from "@/components/TodoList";
import { Badge } from "@/components/ui/badge";
import StatisticCard13 from "@/components/statistic-card-13";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import React from "react";
import StatisticCard from "@/components/StatisticsCard";

import { ScrollArea } from "@/components/ui/scroll-area";
import { createIssueColumns } from "@/components/tables/columns/issue-columns";
import { mockIssues } from "./data/mock/issues";

// function StatisticCard({ subtitle, title }) {
//   return (
//     <div className=" p-6  border-1 border-r-0 flex flex-row items-center justify-between">
//       <div className="">
//         <h1 className="pb-1">{subtitle}</h1>
//         <span className="text-xl">{title}</span>
//       </div>
//     </div>
//   );
// }

export default function Home() {
  const [position, setPosition] = React.useState("developermode");

  // Define your actions
  const issueActions: IssueActions = {
    onView: (event) => console.log("View event:", event),
    onExport: (event) => console.log("Export event:", event),
    onViewLogs: (event) => console.log("View logs for event:", event),
  };

  // Create the columns
  const issueColumns = createIssueColumns({ actions: issueActions });

  // Maps dropdown values to display names
  const getDisplayName = (value: string) => {
    const names = {
      developermode: "Developer Mode",
      productmode: "Product Mode",
      uxmode: "UX mode",
    };
    return names[value as keyof typeof names] || "Developer Mode";
  };

  return (
    <>
      <div className="mx-4">
        <div className="flex flex-row justify-between items-center">
          <div className="py-4">
            <h1 className="text-xl">OpenStatus API</h1>
            <p className="text-gray-500 pt-">https://api.openstatus.dev</p>
          </div>
          <div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">
                  {getDisplayName(position)}
                  <ChevronDown />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-64" align="end">
                <DropdownMenuLabel>Change Data Display Mode</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup
                  value={position}
                  onValueChange={setPosition}
                >
                  <DropdownMenuRadioItem
                    value="developermode"
                    defaultChecked={true}
                  >
                    Developer Mode
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="productmode">
                    Product Mode
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="uxmode">
                    UX mode
                  </DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        {/* <div className="flex flex-row items-center pt-6 pb-2">
        <Badge className="h-3 min-w-3 rounded-full px-1 font-mono tabular-nums bg-orange-700"></Badge>
        <h1 className="pl-2">Technical & System Performance</h1>
      </div> */}
        <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4">
          <StatisticCard
            title="Latency (ms)"
            value="120"
            tooltip="Average time to start processing a request"
            icon={<Zap />}
          />
          <StatisticCard
            title="TTFT (ms)"
            value="95"
            tooltip="time until first token returned"
            icon={<Timer />}
          />
          <StatisticCard
            title="Uptime & Availability"
            value="99.95%"
            tooltip="time until first token returned"
            icon={<Activity />}
          />
          <StatisticCard
            title="Cost Per Request"
            value="$0.004"
            tooltip="Average Request Cost"
            icon={<SquarePercent />}
          />
          <StatisticCard
            title="Completeness"
            value="95%"
            tooltip="Responses fully address the query"
            icon={<BookCheck />}
          />
          <StatisticCard
            title="Context Retention"
            value="85%"
            tooltip="Multi tool conversation memory"
            icon={<BatteryMedium />}
          />
          <StatisticCard
            title="Hallucination Rate"
            value="3%"
            tooltip="Fabricated or incorrect info"
            icon={<Shredder />}
          />
          <StatisticCard
            title="5xx Errors"
            value="0.8%"
            tooltip="Server errors detected"
            icon={<Server />}
          />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4">
          <div className=" p-6 col-span-2 border-1  items-center flex flex-row justify-between">
            <div className="">
              <span className="text-xl">Uptime</span>
              <div className="flex flex-row gap-8 justify-between">
                <h1 className="pb-1">Uptime across all the regions</h1>
                <div className="flex flex-row gap-2">
                  <Badge className="bg-green-100 rounded-none">
                    <p className=" text-green-700">Ok</p>
                  </Badge>
                  <Badge className="bg-yellow-100 rounded-none">
                    <p className="text-yellow-700">Error</p>
                  </Badge>
                  <Badge className="bg-red-100 rounded-none">
                    <p className="text-red-700">Degraded</p>
                  </Badge>
                </div>
              </div>
              <div className="py-4">
                <StatisticCard13 />
              </div>
            </div>
          </div>
          <div className=" p-6 col-span-2 border-1  items-center flex flex-row justify-between">
            <div className="">
              <span className="text-xl">Uptime</span>
              <div className="flex flex-row gap-8 justify-between">
                <h1 className="pb-1">Uptime across all the regions</h1>
                <div className="flex flex-row gap-2">
                  <Badge className="bg-green-100 rounded-none">
                    <p className=" text-green-700">Ok</p>
                  </Badge>
                  <Badge className="bg-yellow-100 rounded-none">
                    <p className="text-yellow-700">Error</p>
                  </Badge>
                  <Badge className="bg-red-100 rounded-none">
                    <p className="text-red-700">Degraded</p>
                  </Badge>
                </div>
              </div>
              <div className="py-4">
                <StatisticCard13 />
              </div>
            </div>
          </div>
        </div>
        <div className="py-6">
          <h1 className="font-semibold text-lg pt-6">All System Alerts</h1>
          <div className="rounded-none ">
            {/* <div className="mb-8 px-4 py-2 bg-secondary rounded-md">
            <h1 className="font-semibold">All System Alerts</h1>
          </div> */}
            {/* <DataTable columns={columns} data={data} /> */}
            <DataTable
              {...eventsTableConfig}
              columns={issueColumns}
              data={mockIssues}
            />
          </div>
        </div>
      </div>
    </>
  );
}
