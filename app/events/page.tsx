import StatisticCard from "@/components/StatisticsCard";
import {
  MessageSquareTextIcon,
  MousePointerClick,
  UsersIcon,
} from "lucide-react";

export default function EventsPage() {
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
      </div>
    </>
  );
}
