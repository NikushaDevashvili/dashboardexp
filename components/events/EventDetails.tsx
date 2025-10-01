import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";

type Property = {
  key: string;
  value: string;
};

type EventDetailsProps = {
  eventId: string;
  eventType: string;
  eventName: string;
  properties: Property[];
};

export default function EventDetails({
  eventId,
  eventType,
  eventName,
  properties,
}: EventDetailsProps) {
  return (
    <div className="p-4 border">
      <div className="flex flex-row gap-2 items-center mb-4">
        <h1 className="text-md font-semibold">EVENT DETAILS</h1>
        <p className="text-sm text-gray-500">{eventId}</p>
      </div>

      <div className="space-y-4">
        {/* Event Info */}
        <div className="border p-4">
          <div className="flex flex-row gap-24">
            <div>
              <p className="text-sm text-gray-500">TYPE</p>
              <h1 className="font-medium">{eventType}</h1>
            </div>
            <div>
              <p className="text-sm text-gray-500">NAME</p>
              <h1 className="font-medium">{eventName}</h1>
            </div>
          </div>
        </div>

        {/* Properties */}
        <div className="p-4 border">
          <div className="flex flex-row gap-4 items-center mb-4">
            <h1 className="text-md font-semibold">Properties</h1>
            <p className="text-sm text-blue-600 hover:underline cursor-pointer">
              Show all properties
            </p>
          </div>
          <Separator />

          <ScrollArea className="h-[1000px] mt-4">
            <div className="flex flex-col gap-3">
              {properties.map((prop, index) => (
                <div key={index} className="flex flex-row gap-2">
                  <Badge
                    variant="secondary"
                    className="font-semibold min-w-fit"
                  >
                    {prop.key}
                  </Badge>
                  <p className="text-sm break-all">{prop.value}</p>
                </div>
              ))}
            </div>
          </ScrollArea>
        </div>
      </div>
    </div>
  );
}
