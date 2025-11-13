import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, Twitter, ExternalLink } from "lucide-react";

// About Card
interface AboutCardProps {
  description: string;
}

export function AboutCard({ description }: AboutCardProps) {
  return (
    <Card className="h-full gap-2">
      <CardHeader>
        <CardTitle className="flex items-center">
          <span>About</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-1">
        <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  );
}

// Skills Card
interface SkillsCardProps {
  categories: {
    name: string;
    skills: string[];
  }[];
}

export function SkillsCard({ categories }: SkillsCardProps) {
  return (
    <Card className="h-full gap-2">
      <CardHeader>
        <CardTitle>Skills</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {categories.map((category, index) => (
          <div key={index} className="space-y-1.5">
            <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">{category.name}</h4>
            <div className="flex flex-wrap gap-1.5">
              {category.skills.map((skill, skillIndex) => (
                <Badge key={skillIndex} variant="outline" className="text-xs">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

// Socials Card
interface Social {
  name: string;
  icon: React.ReactNode;
  url: string;
  username: string;
}

interface SocialsCardProps {
  socials: Social[];
}

export function SocialsCard({ socials }: SocialsCardProps) {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Connect</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {socials.map((social, index) => (
          <a
            key={index}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-2 rounded-md hover:bg-accent transition-colors group"
          >
            <div className="flex items-center gap-3">
              {social.icon}
              <div>
                <p className="text-sm font-medium">{social.name}</p>
                <p className="text-xs text-muted-foreground">{social.username}</p>
              </div>
            </div>
            <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
        ))}
      </CardContent>
    </Card>
  );
}

// Contact Card
interface ContactCardProps {
  email: string;
  availability: string;
}

export function ContactCard({ email, availability }: ContactCardProps) {
  return (
    <Card className="h-full">
      <CardHeader className="pb-3">
        <CardTitle>Get in Touch</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2.5">
        <a
          href={`mailto:${email}`}
          className="flex items-center gap-2.5 p-2.5 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
        >
          <Mail className="h-4 w-4" />
          <span className="text-sm font-medium">{email}</span>
        </a>
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
          <span>{availability}</span>
        </div>
      </CardContent>
    </Card>
  );
}

// Stats Card
interface StatsCardProps {
  stats: {
    label: string;
    value: string;
  }[];
}

export function StatsCard({ stats }: StatsCardProps) {
  return (
    <Card className="h-full">
      <CardHeader className="pb-3">
        <CardTitle>Highlights</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-3">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-xl font-bold text-primary">{stat.value}</div>
              <div className="text-xs text-muted-foreground mt-0.5">{stat.label}</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

// Icon exports for easy use
export const SocialIcons = {
  Github: <Github className="h-5 w-5" />,
  Linkedin: <Linkedin className="h-5 w-5" />,
  Twitter: <Twitter className="h-5 w-5" />,
  Mail: <Mail className="h-5 w-5" />,
};
