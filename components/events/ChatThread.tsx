// components/events/ChatThread.tsx
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import ChatMessage from "./ChatMessage";

type ChatTurn = {
  timestamp: string;
  messages: { role: "user" | "assistant"; text: string }[];
};

type ChatThreadProps = {
  models?: string[];
  turns: ChatTurn[];
};

export default function ChatThread({ models = [], turns }: ChatThreadProps) {
  return (
    <div className="p-4 border">
      <h1 className="text-md font-semibold pb-1">Chat Messages</h1>
      {models.length > 0 && (
        <div className="flex flex-row gap-2">
          <p className="text-sm">Models Used:</p>
          <div className="gap-1 flex flex-wrap">
            {models.map((m) => (
              <Badge key={m} variant="outline">
                {m}
              </Badge>
            ))}
          </div>
        </div>
      )}

      <ScrollArea className="h-[1100px] pt-4">
        <div className="flex flex-col gap-4">
          {turns.map((turn, idx) => (
            <div key={idx} className="p-4 border bg-primary-foreground">
              <p className="text-sm pb-3">{turn.timestamp}</p>
              <Separator />
              <div className="pt-3 flex flex-col gap-4">
                {turn.messages.map((m, i) => (
                  <div key={i}>
                    <ChatMessage role={m.role} text={m.text} />
                    {i < turn.messages.length - 1 && (
                      <Separator className="my-4" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
