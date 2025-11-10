import { Timeline } from "@/components/timeline";
import { Separator } from "@/components/ui/separator";
import { ModeToggle } from "@/components/mode-toggle";
import {
  AboutCard,
  SkillsCard,
  SocialsCard,
  ContactCard,
  StatsCard,
  SocialIcons,
  PlaceholderCard,
} from "@/components/bento-grid";

// Placeholder data for about section
const aboutData = {
  description:
    "Passionate about building scalable web applications and solving complex problems. I love working with modern technologies and contributing to open-source projects. Always eager to learn and explore new technologies.",
  location: "San Francisco, CA",
  yearsOfExperience: 6,
};

// Placeholder data for skills
const skillsData = {
  categories: [
    {
      name: "Frontend",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js"],
    },
    {
      name: "Backend",
      skills: ["Node.js", "Python", "PostgreSQL", "MongoDB", "REST APIs"],
    },
    {
      name: "DevOps",
      skills: ["Docker", "AWS", "CI/CD", "Kubernetes", "Linux"],
    },
  ],
};

// Placeholder data for socials
const socialsData = [
  {
    name: "GitHub",
    icon: SocialIcons.Github,
    url: "https://github.com/johndoe",
    username: "@johndoe",
  },
  {
    name: "LinkedIn",
    icon: SocialIcons.Linkedin,
    url: "https://linkedin.com/in/johndoe",
    username: "John Doe",
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
  email: "john.doe@example.com",
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
    title: "Senior Software Engineer",
    organization: "Tech Company Inc.",
    period: "2022 - Present",
    description:
      "Leading development of cloud-based applications and mentoring junior developers. Architected scalable microservices handling millions of requests daily.",
    skills: ["React", "Node.js", "TypeScript", "AWS", "PostgreSQL"],
  },
  {
    title: "Software Engineer",
    organization: "StartUp Solutions",
    period: "2020 - 2022",
    description:
      "Developed full-stack web applications using modern JavaScript frameworks. Collaborated with cross-functional teams to deliver high-quality products.",
    skills: ["JavaScript", "Python", "Docker", "MongoDB", "REST APIs"],
  },
  {
    title: "Junior Developer",
    organization: "Digital Agency",
    period: "2018 - 2020",
    description:
      "Built responsive websites and web applications for various clients. Gained experience in front-end development and UI/UX implementation.",
    skills: ["HTML", "CSS", "JavaScript", "jQuery", "WordPress"],
  },
];

const educationData = [
  {
    title: "Master of Science in Computer Science",
    organization: "University of Technology",
    period: "2016 - 2018",
    description:
      "Specialized in Software Engineering and Distributed Systems. Graduated with honors, GPA 3.9/4.0.",
    skills: ["Algorithms", "Machine Learning", "Cloud Computing"],
  },
  {
    title: "Bachelor of Science in Computer Science",
    organization: "State University",
    period: "2012 - 2016",
    description:
      "Completed comprehensive coursework in computer science fundamentals. Active member of the Programming Club and participated in hackathons.",
    skills: ["Data Structures", "OOP", "Database Systems"],
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Header with Theme Toggle */}
        <div className="mb-12 flex items-start justify-between gap-4">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              John Doe
            </h1>
            <p className="text-xl text-muted-foreground">
              Full Stack Developer & Software Engineer
            </p>
          </div>
          <ModeToggle />
        </div>

        {/* Bento Grid Layout - 6 columns (allows 1.5x sizing for timelines) */}
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 auto-rows-[minmax(160px,auto)] gap-4">
          {/* Row 1 - About, Stats, Contact (each 2 cols = 1/3 width) */}
          <div className="md:col-span-2 lg:col-span-2 lg:row-span-1">
            <AboutCard {...aboutData} />
          </div>
          
          <div className="md:col-span-2 lg:col-span-2 lg:row-span-1">
            <StatsCard {...statsData} />
          </div>

          <div className="md:col-span-2 lg:col-span-2 lg:row-span-1">
            <ContactCard {...contactData} />
          </div>

          {/* Row 2-3 - Experience Timeline (3 cols = 1.5x, rows 2-3) */}
          <div className="md:col-span-4 lg:col-span-3 lg:row-span-2 lg:col-start-1 lg:row-start-2">
            <Timeline items={experienceData} title="Experience" />
          </div>

          {/* Row 2 - Skills (2 cols, row 2) */}
          <div className="md:col-span-2 lg:col-span-2 lg:row-span-1 lg:col-start-4 lg:row-start-2">
            <SkillsCard {...skillsData} />
          </div>

          {/* Row 2 - Socials (1 col, row 2) */}
          <div className="md:col-span-2 lg:col-span-1 lg:row-span-1 lg:col-start-6 lg:row-start-2">
            <SocialsCard socials={socialsData} />
          </div>

          {/* Row 3 - Education Timeline (3 cols, rows 3-4) - positioned on right side */}
          <div className="md:col-span-4 lg:col-span-3 lg:row-span-2 lg:col-start-4 lg:row-start-3">
            <Timeline items={educationData} title="Education" />
          </div>

          {/* Row 4 - Placeholder (3 cols, row 4) - fills space below Experience */}
          <div className="md:col-span-2 lg:col-span-3 lg:row-span-1 lg:col-start-1 lg:row-start-4">
            <PlaceholderCard />
          </div>
        </div>
      </main>
    </div>
  );
}
