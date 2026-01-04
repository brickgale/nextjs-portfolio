import { Timeline } from "@/components/timeline";
import { Badge } from "@/components/ui/badge";
import { ModeToggle } from "@/components/mode-toggle";
import Image from "next/image";
import {
  AboutCard,
  SkillsCard,
  SocialsCard,
  ContactCard,
  StatsCard,
  SocialIcons,
} from "@/components/bento-grid";
import { MapPin } from "lucide-react";

const profileData = {
  name: "Mericel N. Monsales",
  title: "Virtual Assistant | CSR | TSR",
  location: "Tagbilaran City, Bohol, Philippines",
  yearsOfExperience: 8,
};

// Placeholder data for about section
const aboutData = {
  description:
    "With extensive experience as a Customer Service Representative and Virtual Assistant, I specialize in providing responsive, detail-oriented support that enhances client satisfaction and operational efficiency. I’m skilled in managing communications, handling inquiries, and performing administrative tasks with accuracy and professionalism. My focus is always on delivering timely solutions and maintaining a positive customer experience across every interaction.",
};

// Placeholder data for skills
const skillsData = {
  categories: [
    {
      name: "Management",
      skills: ["Team Leadership", "Project Management", "Customer Relations", "Conflict Resolution", "Time Management", "Technical Support"],
    },
    {
      name: "Tools",
      skills: ["Canva", "Capcut", "MS Excel", "MS Word", "MS PowerPoint", "ChatGPT"],
    },
    {
      name: "Others",
      skills: ["Social Media Management", "Advertising", "Marketing", "Email Campaigns", "Content Creation"],
    },
  ],
};

const socialsData = [
  {
    name: "LinkedIn",
    icon: SocialIcons.Linkedin,
    url: "https://www.linkedin.com/in/mericel-monsales-b81b45122/",
    username: "Mericel Monsales",
  },
  {
    name: "Twitter",
    icon: SocialIcons.Twitter,
    url: "https://twitter.com/johndoe",
    username: "@johndoe",
  },
];

// Placeholder data for contact
const contactData = {
  email: "mericelmonsales@gmail.com",
  availability: "Available for freelance work",
};

// Placeholder data for stats
const statsData = {
  stats: [
    { label: "Projects Completed", value: "50+" },
    { label: "Happy Clients", value: "30+" },
    { label: "GitHub Stars", value: "1.2K" },
    { label: "Contributions", value: "500+" },
  ],
};

// Placeholder data
const experienceData = [
  {
    title: "Customer Service Representative",
    organization: "TaskUs",
    period: "Jan 2024 - Aug 2025",
    description:
      "Leading development of cloud-based applications and mentoring junior developers. Architected scalable microservices handling millions of requests daily.",
  },
  {
    title: "Store Supervisor",
    organization: "Estrella Bakery",
    period: "Aug 2022 - Apr 2023",
    description:
      "Developed full-stack web applications using modern JavaScript frameworks. Collaborated with cross-functional teams to deliver high-quality products.",
  },
  {
    title: "TSR | Sales Auditor",
    organization: "Alorica Philippines, Inc.",
    period: "Feb 2016 - Apr 2018",
    description:
      "Built responsive websites and web applications for various clients. Gained experience in front-end development and UI/UX implementation.",
  },
  {
    title: "Direct Marketing Executive",
    organization: "Camella Communities",
    period: "Feb 2014 - Feb 2015",
    description:
      "Built responsive websites and web applications for various clients. Gained experience in front-end development and UI/UX implementation.",
  },
  {
    title: "Sales Representative",
    organization: "Save n Earn",
    period: "Feb 2013 - Feb 2014",
    description:
      "Built responsive websites and web applications for various clients. Gained experience in front-end development and UI/UX implementation.",
  },
];

const educationData = [
  {
    title: "Hotel and Restaurant Management (Undergraduate)",
    organization: "Holy Name University",
    period: "2009 - 2013",
  },
  {
    title: "Highschool Diploma",
    organization: "Holy Name University",
    period: "2005 - 2009",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Header with Theme Toggle */}
        <div className="mb-8 flex items-start justify-between gap-4">
          <div className="flex items-center gap-6">
            <Image
              src="/profile_pic.png"
              alt="Profile Picture"
              width={100}
              height={100}
              className="rounded-sm ring-2 ring-primary/20"
              priority
            />
            <div className="space-y-2">
              <h1 className="text-2xl mb-0 font-bold tracking-tight sm:text-3xl">
                {profileData.name}
              </h1>
              <p className="text-xl mb-1 text-muted-foreground tracking-tight">
                {profileData.title}
              </p>
              
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>{profileData.location}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Badge variant="secondary">{profileData.yearsOfExperience}+ years experience</Badge>
              </div>
            </div>
          </div>
          {/* Theme toggle - visible on sm and above */}
          <div className="fixed bottom-6 right-6 z-50 sm:relative sm:bottom-0 sm:right-0">
            <ModeToggle />
          </div>
        </div>

        {/* Bento Grid Layout - 6 columns (allows 1.5x sizing for timelines) */}
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 auto-rows-[minmax(160px,auto)] gap-4">
          {/* Row 1 - About, Stats, Contact (each 2 cols = 1/3 width) */}
          <div className="md:col-span-2 lg:col-span-2 lg:row-span-1">
            <AboutCard {...aboutData} />
          </div>
          
          <div className="md:col-span-2 lg:col-span-2 lg:row-span-1">
            <SkillsCard {...skillsData} />
          </div>

          <div className="md:col-span-2 lg:col-span-2 lg:row-span-1">
            <ContactCard {...contactData} />
          </div>

          {/* Row 2-3 - Experience Timeline (3 cols = 1.5x, rows 2-3) */}
          <div className="md:col-span-4 lg:col-span-3 lg:row-span-2 lg:col-start-1 lg:row-start-2">
            <Timeline items={experienceData} title="Experience" />
          </div>

          {/* Row 2 - Stats (2 cols, row 2) */}
          <div className="md:col-span-2 lg:col-span-2 lg:row-span-1 lg:col-start-4 lg:row-start-2">
            <StatsCard {...statsData} />
          </div>

          {/* Row 2 - Socials (1 col, row 2) */}
          <div className="md:col-span-2 lg:col-span-1 lg:row-span-1 lg:col-start-6 lg:row-start-2">
            <SocialsCard socials={socialsData} />
          </div>

          {/* Row 3 - Education Timeline (3 cols, rows 3-4) - positioned on right side */}
          <div className="md:col-span-4 lg:col-span-3 lg:row-span-1 lg:col-start-4 lg:row-start-3">
            <Timeline items={educationData} title="Education" />
          </div>
        </div>
      </main>
    </div>
  );
}
