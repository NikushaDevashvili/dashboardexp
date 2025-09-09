import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Anchor, Monitor, MonitorCogIcon } from "lucide-react";
import { AppBarChart } from "@/components/AppBarChart";
import CardList from "@/components/CardList";
import TodoList from "@/components/TodoList";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Badge } from "@/components/ui/badge";
import StatisticCard13 from "@/components/statistic-card-13";

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
  return (
    <>
      <div className="p-4">
        <h1 className="text-xl">OpenStatus API</h1>
        <p className="text-gray-500 pt-">https://api.openstatus.dev</p>
      </div>
      {/* <div className="flex flex-row items-center pt-6 pb-2">
        <Badge className="h-3 min-w-3 rounded-full px-1 font-mono tabular-nums bg-orange-700"></Badge>
        <h1 className="pl-2">Technical & System Performance</h1>
      </div> */}
      <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4">
        <div className=" p-6  border-1 border-r-0 flex flex-row items-center justify-between">
          <Tooltip>
            <TooltipTrigger className="flex flex-col items-start">
              <h1 className="pb-1">Latency (ms)</h1>
              <span className="text-xl">120</span>
            </TooltipTrigger>
            <TooltipContent>
              <p>Average time to start processing a request</p>
            </TooltipContent>
          </Tooltip>
          <div className="border-1 p-4">
            <MonitorCogIcon />
          </div>
        </div>
        <div className=" p-6  border-1 border-r-0 flex flex-row items-center justify-between">
          <div className="">
            <Tooltip>
              <TooltipTrigger className="flex flex-col items-start">
                <h1 className="pb-1">TTFT (ms)</h1>
                <span className="text-xl">95</span>
              </TooltipTrigger>
              <TooltipContent>
                <p>time until first token returned</p>
              </TooltipContent>
            </Tooltip>
          </div>
          <div className="border-1 p-4">
            <MonitorCogIcon />
          </div>
        </div>
        <div className=" p-6  border-1 border-r-0 flex flex-row items-center justify-between">
          <div className="">
            <Tooltip>
              <TooltipTrigger className="flex flex-col items-start">
                <h1 className="pb-1">Uptime & Availability</h1>
                <span className="text-xl">99.95%</span>
              </TooltipTrigger>
              <TooltipContent>
                <p>time until first token returned</p>
              </TooltipContent>
            </Tooltip>
          </div>
          <div className="border-1 p-4">
            <MonitorCogIcon />
          </div>
        </div>
        <div className=" p-6 border-1  items-center flex flex-row justify-between">
          <div className="">
            <Tooltip>
              <TooltipTrigger className="flex flex-col items-start">
                <h1 className="pb-1">Cost Per Request</h1>
                <span className="text-xl">$0.004</span>
              </TooltipTrigger>
              <TooltipContent>
                <p>Average Request Cost</p>
              </TooltipContent>
            </Tooltip>
          </div>
          <div className="border-1 p-4">
            <MonitorCogIcon />
          </div>
        </div>
        <div className=" p-6 col-span-2 border-1  items-center flex flex-row justify-between">
          <div className="">
            <span className="text-xl">Uptime</span>
            <div className="flex flex-row gap-8 justify-between">
              <h1 className="pb-1">Uptime across all the regions</h1>
              <div className="flex flex-row gap-2">
                <Badge className="bg-green-100 rounded-none">
                  <p className=" text-green-500">OK</p>
                </Badge>
                <Badge className="bg-green-100 rounded-none">
                  <p className="text-green-500">OK</p>
                </Badge>
                <Badge className="bg-green-600 rounded-none">hey</Badge>
              </div>
            </div>
            <div className="py-4">
              <StatisticCard13 />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
