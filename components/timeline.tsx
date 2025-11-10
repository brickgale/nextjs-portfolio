import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface TimelineItemProps {
  title: string;
  organization: string;
  period: string;
  description: string;
  skills?: string[];
}

export function TimelineItem({
  title,
  organization,
  period,
  description,
  skills,
}: TimelineItemProps) {
  return (
    <div className="relative flex gap-6 pb-8 last:pb-0 group">
      {/* Timeline line and dot */}
      <div className="relative flex flex-col items-center">
        <div className="w-4 h-4 rounded-full bg-primary ring-4 ring-card border-2 border-card z-10" />
        <div className="w-0.5 h-full bg-border absolute top-4 last:hidden" />
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
        <p className="text-sm text-muted-foreground mb-3">{description}</p>
        {skills && skills.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {skill}
              </Badge>
            ))}
          </div>
        )}
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
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="text-3xl">{title}</CardTitle>
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
