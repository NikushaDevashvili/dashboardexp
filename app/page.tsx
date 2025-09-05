import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Anchor, Monitor, MonitorCogIcon } from "lucide-react";
import { AppBarChart } from "@/components/AppBarChart";
import CardList from "@/components/CardList";
import TodoList from "@/components/TodoList";

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
      <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4">
        <div className=" p-6  border-1 border-r-0 flex flex-row items-center justify-between">
          <div className="">
            <h1 className="pb-1">Uptime</h1>
            <span className="text-xl">99.99%</span>
          </div>
          <div className="border-1 p-4">
            <MonitorCogIcon />
          </div>
        </div>
        <div className=" p-6  border-1 border-r-0 flex flex-row items-center justify-between">
          <div className="">
            <h1 className="pb-1">Uptime</h1>
            <span className="text-xl">99.99%</span>
          </div>
          <div className="border-1 p-4">
            <MonitorCogIcon />
          </div>
        </div>
        <div className=" p-6  border-1 border-r-0 flex flex-row items-center justify-between">
          <div className="">
            <h1 className="pb-1">Uptime</h1>
            <span className="text-xl">99.99%</span>
          </div>
          <div className="border-1 p-4">
            <MonitorCogIcon />
          </div>
        </div>
        <div className=" p-6  border-1  items-center justify-between">
          <TodoList />
        </div>
      </div>
    </>
  );
}
