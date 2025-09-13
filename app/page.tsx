"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
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
import { columns, Payment } from "./issues/columns";
import { DataTable } from "./issues/data-table";
import { ScrollArea } from "@/components/ui/scroll-area";
import TableData from "@/components/DataTable";

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

const getData = (): Payment[] => {
  return [
    {
      id: "728ed521",
      amount: 134,
      status: "pending",
      username: "John Doe",
      email: "johndoe@gmail.com",
    },
    {
      id: "728ed522",
      amount: 124,
      status: "success",
      username: "Jane Doe",
      email: "janedoe@gmail.com",
    },
    {
      id: "728ed523",
      amount: 167,
      status: "success",
      username: "Mike Galloway",
      email: "mikegalloway@gmail.com",
    },
    {
      id: "728ed524",
      amount: 156,
      status: "failed",
      username: "Minerva Robinson",
      email: "minerbarobinson@gmail.com",
    },
    {
      id: "728ed525",
      amount: 145,
      status: "success",
      username: "Mable Clayton",
      email: "mableclayton@gmail.com",
    },
    {
      id: "728ed526",
      amount: 189,
      status: "pending",
      username: "Nathan McDaniel",
      email: "nathanmcdaniel@gmail.com",
    },
    {
      id: "728ed527",
      amount: 178,
      status: "success",
      username: "Myrtie Lamb",
      email: "myrtielamb@gmail.com",
    },
    {
      id: "728ed528",
      amount: 190,
      status: "success",
      username: "Leona Bryant",
      email: "leonabryant@gmail.com",
    },
    {
      id: "728ed529",
      amount: 134,
      status: "failed",
      username: "Aaron Willis",
      email: "aaronwillis@gmail.com",
    },
    {
      id: "728ed52a",
      amount: 543,
      status: "success",
      username: "Joel Keller",
      email: "joelkeller@gmail.com",
    },
    {
      id: "728ed52b",
      amount: 234,
      status: "pending",
      username: "Daniel Ellis",
      email: "danielellis@gmail.com",
    },
    {
      id: "728ed52c",
      amount: 345,
      status: "success",
      username: "Gordon Kennedy",
      email: "gordonkennedy@gmail.com",
    },
    {
      id: "728ed52d",
      amount: 335,
      status: "failed",
      username: "Emily Hoffman",
      email: "emilyhoffman@gmail.com",
    },
    {
      id: "728ed52e",
      amount: 664,
      status: "pending",
      username: "Jeffery Garrett",
      email: "jefferygarrett@gmail.com",
    },
    {
      id: "728ed52f",
      amount: 332,
      status: "success",
      username: "Ralph Baker",
      email: "ralphbaker@gmail.com",
    },
    {
      id: "728ed52g",
      amount: 413,
      status: "failed",
      username: "Seth Fields",
      email: "sethfields@gmail.com",
    },
    {
      id: "728ed52h",
      amount: 345,
      status: "pending",
      username: "Julia Webb",
      email: "juliawebb@gmail.com",
    },
    {
      id: "728ed52i",
      amount: 754,
      status: "success",
      username: "Gary Banks",
      email: "garybanks@gmail.com",
    },
    {
      id: "728ed52j",
      amount: 643,
      status: "failed",
      username: "Flora Chambers",
      email: "florachambers@gmail.com",
    },
    {
      id: "728ed52k",
      amount: 543,
      status: "pending",
      username: "Steve Hanson",
      email: "stevehanson@gmail.com",
    },
    {
      id: "728ed52l",
      amount: 324,
      status: "success",
      username: "Lola Robinson",
      email: "lolarobinson@gmail.com",
    },
    {
      id: "728ed52m",
      amount: 123,
      status: "pending",
      username: "Ethel Waters",
      email: "ethelwaters@gmail.com",
    },
    {
      id: "728ed52n",
      amount: 422,
      status: "failed",
      username: "Grace Edwards",
      email: "graceedwards@gmail.com",
    },
    {
      id: "728ed52o",
      amount: 712,
      status: "success",
      username: "Sallie Wong",
      email: "salliewong@gmail.com",
    },
    {
      id: "728ed52p",
      amount: 360,
      status: "success",
      username: "Bryan Gutierrez",
      email: "bryangutierrez@gmail.com",
    },
    {
      id: "728ed52q",
      amount: 454,
      status: "pending",
      username: "Erik Rice",
      email: "erikrice@gmail.com",
    },
    {
      id: "728ed52r",
      amount: 382,
      status: "success",
      username: "Jordan Atkins",
      email: "jordanatkins@gmail.com",
    },
    {
      id: "728ed52s",
      amount: 328,
      status: "failed",
      username: "Bill Brewer",
      email: "billbrewer@gmail.com",
    },
    {
      id: "728ed52t",
      amount: 250,
      status: "success",
      username: "Edwin Morris",
      email: "edwinmorris@gmail.com",
    },
    {
      id: "728ed52u",
      amount: 658,
      status: "success",
      username: "Harold Becker",
      email: "haroldbecker@gmail.com",
    },
    {
      id: "728ed52v",
      amount: 691,
      status: "success",
      username: "Hannah Rodriguez",
      email: "hannahrodriguez@gmail.com",
    },
    {
      id: "728ed52w",
      amount: 969,
      status: "success",
      username: "Zachary Beck",
      email: "zacharybeck@gmail.com",
    },
    {
      id: "728ed52x",
      amount: 617,
      status: "failed",
      username: "Frances Potter",
      email: "francespotter@gmail.com",
    },
    {
      id: "728ed52y",
      amount: 173,
      status: "success",
      username: "Raymond Murray",
      email: "raymondmurray@gmail.com",
    },
    {
      id: "728ed52z",
      amount: 843,
      status: "success",
      username: "Adam Sherman",
      email: "adamsherman@gmail.com",
    },
    {
      id: "728ed521f",
      amount: 914,
      status: "pending",
      username: "Anne Cruz",
      email: "annecruz@gmail.com",
    },
  ];
};

export default function Home() {
  const [position, setPosition] = React.useState("developermode");

  // Maps dropdown values to display names
  const getDisplayName = (value: string) => {
    const names = {
      developermode: "Developer Mode",
      productmode: "Product Mode",
      uxmode: "UX mode",
    };
    return names[value as keyof typeof names] || "Developer Mode";
  };

  const data = getData();

  return (
    <>
      <div className="flex flex-row justify-between items-center">
        <div className="p-4">
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
        <h1 className="font-semibold py-6">All System Alerts</h1>
        <ScrollArea className="h-200 w-auto rounded-md border">
          {/* <div className="mb-8 px-4 py-2 bg-secondary rounded-md">
            <h1 className="font-semibold">All System Alerts</h1>
          </div> */}
          {/* <DataTable columns={columns} data={data} /> */}
          <TableData />
        </ScrollArea>
      </div>
    </>
  );
}
