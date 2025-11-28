import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface TimelineItemProps {
  title: string;
  organization: string;
  period: string;
  description?: string;
}

export function TimelineItem({
  title,
  organization,
  period,
  description,
}: TimelineItemProps) {
  return (
    <div className="relative flex gap-6 pb-8 last:pb-0 group">
      {/* Timeline line and dot */}
      <div className="relative flex flex-col items-center w-4">
        <div className="w-4 h-4 rounded-full bg-primary ring-4 ring-card border-2 border-card z-10 shrink-0" />
        <div className="w-0.5 flex-1 bg-border mt-2" />
      </div>

      {/* Content */}
      <div className="flex-1 pb-2">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
          <div>
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="text-sm text-muted-foreground">{organization}</p>
          </div>
          <Badge variant="secondary" className="w-fit">
            {period}
          </Badge>
        </div>
      </div>
    </div>
  );
}

interface TimelineProps {
  items: TimelineItemProps[];
  title: string;
}

export function Timeline({ items, title }: TimelineProps) {
  return (
    <Card className="h-full gap-4">
      <CardHeader className="gap-0">
        <CardTitle className="text-2xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative">
          {items.map((item, index) => (
            <TimelineItem key={index} {...item} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
