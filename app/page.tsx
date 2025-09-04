import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Anchor } from "lucide-react";

export default function Home() {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-4">
        <div className="bg-primary-foreground p-4 rounded-md">Test1</div>
        <div className="bg-primary-foreground p-4 rounded-md">Test2</div>
        <div className="bg-primary-foreground p-4 rounded-md">Test3</div>
        <div className="bg-primary-foreground p-4 rounded-md">Test4</div>
        <div className="bg-primary-foreground p-4 rounded-md">Test5</div>
        <div className="bg-primary-foreground p-4 rounded-md">Test6</div>
      </div>
    </>
  );
}
