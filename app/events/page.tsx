"use client";
import StatisticCard from "@/components/StatisticsCard";
import DataTable from "@/components/tables/DataTable";
import { eventsTableConfig } from "@/lib/table-configs/events-config";
import {
  MessageSquareTextIcon,
  MousePointerClick,
  UsersIcon,
} from "lucide-react";
import { EventActions } from "@/data/types";
import { createEventColumns } from "@/components/tables/columns/event-columns";
import { mockEvents } from "@/data/mock/events";

export default function EventsPage() {
  // Define your actions inside the component
  const eventActions: EventActions = {
    onView: (event) => console.log("View event:", event),
    onExport: (event) => console.log("Export event:", event),
    onViewLogs: (event) => console.log("View logs for event:", event),
  };

  // Create the columns inside the component
  const eventColumns = createEventColumns({ actions: eventActions });

  const handleRowClick = (event: Event) => {
    console.log("Clicked event:", event);
    // Navigate to event details, open modal, etc.
    // router.push(`/events/${event.id}`);
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
    </>
  );
}
