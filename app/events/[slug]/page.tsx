import ChatThread from "@/components/events/ChatThread";
import StatisticCard from "@/components/StatisticsCard";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { BotIcon, MousePointerClick, User } from "lucide-react";
import { UsersIcon } from "lucide-react";
import { MessageSquareTextIcon } from "lucide-react";

const models = [
  "gpt-4o",
  "claude-3-5-sonnet",
  "gemini-2.0-flash",
  "gemini-2.0-flash-lite",
];

const turns = [
  {
    timestamp: "1:48 PM, Sep 23 2025",
    messages: [
      {
        role: "user",
        text: "We’re struggling to keep employee onboarding organized—too many emails, docs, and tasks get lost.",
      },
      {
        role: "assistant",
        text: "You’re not alone! With our HR platform, onboarding is fully automated: contracts sent, IT tasks assigned, welcome kits tracked—all in one dashboard.",
      },
    ],
  },
  {
    timestamp: "2:10 PM, Sep 23 2025",
    messages: [
      {
        role: "user",
        text: "Can we customize the onboarding steps by department?",
      },
      {
        role: "assistant",
        text: "Yes. You can define templates per department and auto-assign tasks.",
      },
    ],
  },
  {
    timestamp: "2:10 PM, Sep 23 2025",
    messages: [
      {
        role: "user",
        text: "Can we customize the onboarding steps by department?",
      },
      {
        role: "assistant",
        text: "Yes. You can define templates per department and auto-assign tasks.",
      },
    ],
  },
  {
    timestamp: "2:10 PM, Sep 23 2025",
    messages: [
      {
        role: "user",
        text: "Can we customize the onboarding steps by department?",
      },
      {
        role: "assistant",
        text: "Yes. You can define templates per department and auto-assign tasks.",
      },
    ],
  },
  {
    timestamp: "2:10 PM, Sep 23 2025",
    messages: [
      {
        role: "user",
        text: "Can we customize the onboarding steps by department?",
      },
      {
        role: "assistant",
        text: "Yes. You can define templates per department and auto-assign tasks.",
      },
    ],
  },
];

export default function EventPage() {
  return (
    <>
      <div className="mx-4">
        <h1 className="text-2xl pb-6">Events</h1>
        <div className="grid sm:grid-cols-4">
          <StatisticCard
            title="USER"
            value="User user_123"
            tooltip="User ID"
            icon={<MousePointerClick />}
          />
          <StatisticCard
            title="LAST EVENT"
            value="6 days ago"
            tooltip="Last event time"
            icon={<UsersIcon />}
          />
          <StatisticCard
            title="TOTAL EVENTS"
            value="288"
            tooltip="number of events detected"
            icon={<MessageSquareTextIcon />}
          />
          <StatisticCard
            title="CONVERSATION ID"
            value="CN_18761"
            tooltip="Chat/Converastion ID"
            icon={<MessageSquareTextIcon />}
          />
        </div>
        <div className="mt-4 grid grid-cols-2">
          <ChatThread models={models} turns={turns} />
          <div className="p-4 border">
            <div className="flex flex-row gap-2 items-center">
              <h1 className="text-md font-semibold">EVENT DETAILS</h1>
              <p className="text-sm text-gray-500">
                chat_1758620893323_nom22e1ah
              </p>
            </div>
            <div className="pt-4">
              <div className="border p-4">
                <div className="flex flex-row gap-24">
                  <div className="">
                    <p>USER</p>
                    <h1>Analytics event: user_typing</h1>
                  </div>
                  <div className="">
                    <p>USER</p>
                    <h1>Analytics event: user_typing</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
