// components/events/ChatMessage.tsx
import { Separator } from "@/components/ui/separator";
import { BotIcon, User as UserIcon } from "lucide-react";

type ChatMessageProps = {
  role: "user" | "assistant";
  text: string;
};

export default function ChatMessage({ role, text }: ChatMessageProps) {
  const Icon = role === "user" ? UserIcon : BotIcon;
  const roleLabel = role === "user" ? "User" : "Assistant";

  return (
    <div className="flex flex-row gap-2">
      <div className="border-1 p-4">
        <Icon />
      </div>
      <div className="flex flex-col">
        <p className="text-sm text-gray-400">{roleLabel}</p>
        <p className="text-md">{text}</p>
      </div>
    </div>
  );
}
