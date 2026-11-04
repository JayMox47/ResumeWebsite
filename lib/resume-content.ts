import { BriefcaseBusiness, CodeXml, Camera } from 'lucide-react';
export const socials = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/jonathan-mox-900290435/',
    icon: BriefcaseBusiness,
  },
  { name: 'GitHub', url: 'https://github.com/JayMox47', icon: CodeXml },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/jaymox47/',
    icon: Camera,
  },
];
export const experience = [
  {
    company: 'Penn State University',
    role: 'Learning Assistant',
    date: 'Aug 2026 — Present',
    location: 'University Park, PA',
    arrangement: 'Part-time · On-site',
    bullets: [
      'Supported students during class activities, group work, and problem-solving.',
      'Explained course concepts and answered questions from a student’s perspective.',
      'Provided feedback and guidance while helping students develop independent problem-solving skills.',
    ],
  },
  {
    company: 'Central Integrations',
    role: 'Network Analyst',
    date: 'May 2024 — Present',
    location: 'Pittsburgh, PA',
    bullets: [
      'Supported device management, maintenance, and repair across 50+ schools and businesses.',
      'Maintained client device inventories and assisted with inventory audits.',
      'Helped install, document, and operate an imaging server, including creating and deploying client-specific device images.',
      'Trained new employees and provided ongoing technical and operational support.',
    ],
  },
  {
    company: 'Plexus Parc',
    role: 'Infrastructure Support Technician',
    date: 'Sep 2023 — Sep 2025',
    location: 'Pittsburgh, PA',
    bullets: [
      'Deployed production servers and maintained the data center to minimize its attack surface.',
      'Managed SSL/TLS certificates to help protect sensitive customer data.',
    ],
  },
  {
    company: 'Central Catholic High School',
    role: 'Junior IT Technician',
    date: 'Nov 2022 — May 2025',
    location: 'Pittsburgh, PA',
    bullets: [
      'Created and deployed device images for students and faculty.',
      'Maintained inventories of servers, laptops, and mobile devices, along with spreadsheets for incoming student information.',
      'Wrote documentation for essential IT functions and completed project tasks on time.',
    ],
  },
];
export const projects = [
  {
    name: 'WeekWise',
    description:
      'A student planner that brings Canvas assignments, class schedules, and personal tasks into one weekly view. A browser extension syncs assignments, while calendars and course progress rings help keep deadlines in sight.',
    url: 'https://tasks.jonathanmox.com',
    label: 'tasks.jonathanmox.com',
    image: '/assets/projects/weekwise.jpg',
    alt: 'WeekWise sample workspace with weekly course progress rings and an upcoming class.',
    width: 1280,
    height: 720,
  },
  {
    name: 'JobSpot',
    description:
      'A job and internship discovery app that brings live listings together and compares them with an editable skills and experience profile. It explains potential matches, supports focused searches, and keeps a shortlist of saved opportunities.',
    url: 'https://jobs.jonathanmox.com',
    label: 'jobs.jonathanmox.com',
    image: '/assets/projects/jobspot.jpg',
    alt: 'JobSpot dashboard with job discovery, profile matching, and saved jobs.',
    width: 1280,
    height: 720,
  },
  {
    name: 'NowSpinning',
    description:
      'A Spotify-connected album display designed for a screen or digital frame. It pairs album artwork with artist details and a track list, highlighting the song currently playing.',
    url: 'https://music.jonathanmox.com',
    label: 'music.jonathanmox.com',
    image: '/assets/projects/nowspinning.jpg',
    alt: 'NowSpinning displaying Mac Miller’s I Love Life, Thank You with album artwork and a track list.',
    width: 1600,
    height: 920,
  },
];
