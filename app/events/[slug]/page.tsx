import StatisticCard from "@/components/StatisticsCard";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { BotIcon, MousePointerClick, User } from "lucide-react";
import { UsersIcon } from "lucide-react";
import { MessageSquareTextIcon } from "lucide-react";

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
        <div className="p-4 border">
          <h1 className="text-md font-semibold pb-1">Chat Messages</h1>
          <div className="flex flex-row gap-2">
            {" "}
            <p className="text-sm">Models Used: </p>
            <div className="gap-1 flex">
              <Badge variant="outline">gpt-4o</Badge>
              <Badge variant="outline">claude-3-5-sonnet</Badge>
              <Badge variant="outline">gemini-2.0-flash</Badge>
              <Badge variant="outline">gemini-2.0-flash-lite</Badge>
            </div>
          </div>
          <div className="pt-4 flex flex-col gap-4">
            {/* ONE EVENT */}

            <div className="p-4 border bg-accent">
              <p className="text-sm pb-3">1:48 PM, Sep 23 2025</p>
              <Separator />
              {/* CHAT USER MESSAGE */}
              <div className="pt-3 flex flex-col gap-4">
                <div className="flex flex-row gap-2">
                  <div className="border-1 p-4 ">
                    <User />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-sm text-gray-400">User</p>
                    <p className="text-md">
                      {" "}
                      We’re struggling to keep employee onboarding organized—too
                      many emails, docs, and tasks get lost.
                    </p>
                  </div>
                </div>
                <Separator />
                {/* CHAT ASSISTANT MESSAGE */}
                <div className="flex flex-row gap-2">
                  <div className="border-1 p-4 ">
                    <BotIcon />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-sm text-gray-400">Assistant</p>
                    <p className="text-md">
                      {" "}
                      You’re not alone! With our HR platform, onboarding is
                      fully automated: contracts sent for e-signature, IT tasks
                      assigned, welcome kits tracked—all in one dashboard.
                      Nothing slips through.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* SECOND EVENT */}

            <div className="p-4 border bg-accent">
              <p className="text-sm pb-3">1:48 PM, Sep 23 2025</p>
              <Separator />
              {/* CHAT USER MESSAGE */}
              <div className="pt-3 flex flex-col gap-4">
                <div className="flex flex-row gap-2">
                  <div className="border-1 p-4 ">
                    <User />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-sm text-gray-400">User</p>
                    <p className="text-md">
                      {" "}
                      We’re struggling to keep employee onboarding organized—too
                      many emails, docs, and tasks get lost.
                    </p>
                  </div>
                </div>
                <Separator />
                {/* CHAT ASSISTANT MESSAGE */}
                <div className="flex flex-row gap-2">
                  <div className="border-1 p-4 ">
                    <BotIcon />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-sm text-gray-400">Assistant</p>
                    <p className="text-md">
                      {" "}
                      You’re not alone! With our HR platform, onboarding is
                      fully automated: contracts sent for e-signature, IT tasks
                      assigned, welcome kits tracked—all in one dashboard.
                      Nothing slips through.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* SECOND EVENT */}

            <div className="p-4 border bg-accent">
              <p className="text-sm pb-3">1:48 PM, Sep 23 2025</p>
              <Separator />
              {/* CHAT USER MESSAGE */}
              <div className="pt-3 flex flex-col gap-4">
                <div className="flex flex-row gap-2">
                  <div className="border-1 p-4 ">
                    <User />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-sm text-gray-400">User</p>
                    <p className="text-md">
                      {" "}
                      We’re struggling to keep employee onboarding organized—too
                      many emails, docs, and tasks get lost.
                    </p>
                  </div>
                </div>
                <Separator />
                {/* CHAT ASSISTANT MESSAGE */}
                <div className="flex flex-row gap-2">
                  <div className="border-1 p-4 ">
                    <BotIcon />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-sm text-gray-400">Assistant</p>
                    <p className="text-md">
                      {" "}
                      You’re not alone! With our HR platform, onboarding is
                      fully automated: contracts sent for e-signature, IT tasks
                      assigned, welcome kits tracked—all in one dashboard.
                      Nothing slips through.
                    </p>
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
