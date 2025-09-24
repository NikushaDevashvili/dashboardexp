export interface Event {
  id: string;
  name: string;
  type: "user_action" | "system_event" | "error" | "performance";
  status: "active" | "completed" | "failed" | "pending";
  timestamp: string;
  duration: string;
  userCount: number;
  description: string;
  metadata?: Record<string, any>;
}

export interface EventFilters {
  type?: Event["type"];
  status?: Event["status"];
  dateRange?: {
    start: string;
    end: string;
  };
}

export interface EventActions {
  onView: (event: Event) => void;
  onExport: (event: Event) => void;
  onViewLogs: (event: Event) => void;
}
