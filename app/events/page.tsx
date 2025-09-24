"use client";
import StatisticCard from "@/components/StatisticsCard";
import DataTable from "@/components/tables/DataTable";
import { eventsTableConfig } from "@/lib/table-configs/events-config";
import {
  DownloadIcon,
  Link,
  MessageSquareTextIcon,
  MousePointerClick,
  UsersIcon,
} from "lucide-react";
import { EventActions, Event } from "@/data/types";
import { createEventColumns } from "@/components/tables/columns/event-columns";
import { mockEvents } from "@/data/mock/events";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function EventsPage() {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  // Define your actions
  const eventActions: EventActions = {
    onView: (event) => {
      setSelectedEvent(event);
      setIsSheetOpen(true);
    },
    onExport: (event) => console.log("Export event:", event),
    onViewLogs: (event) => console.log("View logs for event:", event),
  };

  // Create the columns
  const eventColumns = createEventColumns({ actions: eventActions });

  const handleRowClick = (event: Event) => {
    setSelectedEvent(event);
    setIsSheetOpen(true);
  };

  return (
    <>
      <div className="mx-4">
        <h1 className="text-2xl pb-6">Events</h1>
        <div className="grid grid-cols-3">
          <StatisticCard
            title="EVENTS"
            value="215"
            tooltip="number of events detected"
            icon={<MousePointerClick />}
          />
          <StatisticCard
            title="USERS"
            value="7"
            tooltip="number of events detected"
            icon={<UsersIcon />}
          />
          <StatisticCard
            title="CONVERSATIONS"
            value="2"
            tooltip="number of events detected"
            icon={<MessageSquareTextIcon />}
          />
        </div>
        <DataTable
          {...eventsTableConfig}
          columns={eventColumns}
          data={mockEvents}
          onRowClick={handleRowClick}
        />
      </div>

      <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
        <SheetContent className="!w-[1200px] max-w-[1200px]">
          <SheetHeader>
            <div className="flex flex-row justify-between">
              {" "}
              <SheetTitle>Event Details</SheetTitle>
              <p className="text-sm">chat_1758621645089_i5l3xqtvb</p>
              <div className="px-8">
                <Button variant="outline" className="">
                  <DownloadIcon />
                </Button>
                <Button variant="outline" className="">
                  <Link />
                </Button>
              </div>
            </div>

            <SheetDescription>
              Detailed information about the selected event
            </SheetDescription>
          </SheetHeader>
          {selectedEvent && (
            <div className="mt-6 space-y-4 mx-4">
              <div className="flex flex-row gap-2">
                <Badge variant="secondary" className="font-semibold">
                  Event Name
                </Badge>
                <p className="text-sm">{selectedEvent.name}</p>
              </div>
              <div className="flex flex-row gap-4">
                <Badge variant="secondary" className="font-semibold">
                  cacheHit
                </Badge>
                <p className="text-sm">true</p>
              </div>
              <div className="flex flex-row gap-4">
                <Badge variant="secondary" className="font-semibold">
                  completionTokens
                </Badge>
                <p className="text-sm">89</p>
              </div>
              <div className="flex flex-row gap-4">
                <Badge variant="secondary" className="font-semibold">
                  component
                </Badge>
                <p className="text-sm">CharInterface</p>
              </div>
              <div className="flex flex-row gap-4">
                <Badge variant="secondary" className="font-semibold">
                  confidence
                </Badge>
                <p className="text-sm">0.7961046509534678</p>
              </div>
              <div className="flex flex-row gap-4">
                <Badge variant="secondary" className="font-semibold">
                  session_duration
                </Badge>
                <p className="text-sm">3931131</p>
              </div>
            </div>
          )}
        </SheetContent>
      </Sheet>
    </>
  );
}
