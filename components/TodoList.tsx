"use client";
import { useState } from "react";
import { Card } from "./ui/card";
import { Checkbox } from "./ui/checkbox";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { ScrollArea } from "./ui/scroll-area";
import { Button } from "./ui/button";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { Calendar } from "./ui/calendar";

export default function TodoList() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [open, setOpen] = useState(false);
  return (
    <div className="">
      <h1 className="text-lg font-medium mb-4">Todo List</h1>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button className="w-full">
            <CalendarIcon />
            {date ? format(date, "PPP") : <span>Pick a date</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent>
          <Calendar
            mode="single"
            selected={date}
            onSelect={(date) => {
              setDate(date);
              setOpen(false);
            }}
            className="rounded-md border"
          />
        </PopoverContent>
      </Popover>
      {/* LIST */}
      <ScrollArea className="max-h-[400px] mt-4 overflow-y-auto">
        {/* LIST ITEM */}
        <div className="flex flex-col gap-4">
          <Card className="p-4 rounded-none">
            <div className="flex items-center gap-4">
              <Checkbox id="item1" />
              <label htmlFor="item1" className="text-sm text-muted-foreground">
                Tralalelo lalala
              </label>
            </div>
          </Card>
          {/* LIST ITEM */}
          <Card className="p-4 rounded-none">
            <div className="flex items-center gap-4">
              <Checkbox id="item1" />
              <label htmlFor="item1" className="text-sm text-muted-foreground">
                Tralalelo lalala
              </label>
            </div>
          </Card>
          {/* LIST ITEM */}
          <Card className="p-4 rounded-none">
            <div className="flex items-center gap-4">
              <Checkbox id="item1" />
              <label htmlFor="item1" className="text-sm text-muted-foreground">
                Tralalelo lalala
              </label>
            </div>
          </Card>
          {/* LIST ITEM */}
          <Card className="p-4 rounded-none">
            <div className="flex items-center gap-4">
              <Checkbox id="item1" />
              <label htmlFor="item1" className="text-sm text-muted-foreground">
                Tralalelo lalala
              </label>
            </div>
          </Card>
          {/* LIST ITEM */}
          <Card className="p-4 rounded-none">
            <div className="flex items-center gap-4">
              <Checkbox id="item1" />
              <label htmlFor="item1" className="text-sm text-muted-foreground">
                Tralalelo lalala
              </label>
            </div>
          </Card>
          {/* LIST ITEM */}
          <Card className="p-4 rounded-none">
            <div className="flex items-center gap-4">
              <Checkbox id="item1" />
              <label htmlFor="item1" className="text-sm text-muted-foreground">
                Tralalelo lalala
              </label>
            </div>
          </Card>
          {/* LIST ITEM */}
          <Card className="p-4 rounded-none">
            <div className="flex items-center gap-4">
              <Checkbox id="item1" />
              <label htmlFor="item1" className="text-sm text-muted-foreground">
                Tralalelo lalala
              </label>
            </div>
          </Card>
          {/* LIST ITEM */}
          <Card className="p-4 rounded-none">
            <div className="flex items-center gap-4">
              <Checkbox id="item1" />
              <label htmlFor="item1" className="text-sm text-muted-foreground">
                Tralalelo lalala
              </label>
            </div>
          </Card>
          {/* LIST ITEM */}
          <Card className="p-4 rounded-none">
            <div className="flex items-center gap-4">
              <Checkbox id="item1" />
              <label htmlFor="item1" className="text-sm text-muted-foreground">
                Tralalelo lalala
              </label>
            </div>
          </Card>
          {/* LIST ITEM */}
          <Card className="p-4 rounded-none">
            <div className="flex items-center gap-4">
              <Checkbox id="item1" />
              <label htmlFor="item1" className="text-sm text-muted-foreground">
                Tralalelo lalala
              </label>
            </div>
          </Card>
          {/* LIST ITEM */}
          <Card className="p-4 rounded-none">
            <div className="flex items-center gap-4">
              <Checkbox id="item1" />
              <label htmlFor="item1" className="text-sm text-muted-foreground">
                Tralalelo lalala
              </label>
            </div>
          </Card>
          {/* LIST ITEM */}
          <Card className="p-4 rounded-none">
            <div className="flex items-center gap-4">
              <Checkbox id="item1" />
              <label htmlFor="item1" className="text-sm text-muted-foreground">
                Tralalelo lalala
              </label>
            </div>
          </Card>
        </div>
      </ScrollArea>
    </div>
  );
}
