import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Anchor } from "lucide-react";
import { AppBarChart } from "@/components/AppBarChart";
import CardList from "@/components/CardList";

export default function Home() {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-4">
        <div className="bg-primary-foreground p-4 rounded-md">
          <AppBarChart />
        </div>
        <div className="bg-primary-foreground p-4 rounded-md">
          <CardList title="Latest Transactions" />
        </div>
        <div className="bg-primary-foreground p-4 rounded-md">Test3</div>
        <div className="bg-primary-foreground p-4 rounded-md">Test4</div>
        <div className="bg-primary-foreground p-4 rounded-md">
          <CardList title="Popular Content" />
        </div>
        <div className="bg-primary-foreground p-4 rounded-md">Test6</div>
      </div>
    </>
  );
}
