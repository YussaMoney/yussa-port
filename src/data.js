// All site copy lives here. Edit this file to change what the site says.

export const profile = {
  name: 'Yusuf Abdulazeez',
  short: 'Yussa',
  role: 'Frontend Developer',
  location: 'Lagos, Nigeria',
  timezone: 'Africa/Lagos',
  email: 'azeezyusufolamilekan159@gmail.com',
  cv: '/Yusuf_Abdulazeez_CV.pdf',
  available: true,
  intro:
    'I design and build fast, considered websites with React, for businesses across Africa. I also lead digital adoption for 24 universities and polytechnics, so I know what it takes for people to actually use what gets built.',
}

export const socials = [
  { label: 'GitHub', href: 'https://github.com/YussaMoney' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/yussamoney' },
  { label: 'X / Twitter', href: 'https://x.com/0xyussa' },
]

export const stats = [
  { value: 24, suffix: '', label: 'Higher institutions I coordinate across South West Nigeria' },
  { value: 5, suffix: '', label: 'Production websites and apps shipped for real users' },
  { value: 100, suffix: 's', label: 'Of staff trained in digital skills and ICDL modules' },
]

export const marquee = [
  'React',
  'JavaScript',
  'Tailwind CSS',
  'Node.js',
  'Express',
  'MongoDB',
  'SQL',
  'REST APIs',
  'Vite',
  'UI / UX',
  'Git',
  'Accessibility',
]

export const projects = [
  {
    id: 'growthill',
    title: 'Growthill Africa',
    kind: 'Website redesign',
    year: '2026',
    summary:
      'A new website for an Abuja real estate developer building energy-efficient homes. Monospace type, a visible column grid, a giant wordmark and the client’s own photography.',
    role: 'Design & frontend',
    stack: ['React', 'Tailwind CSS v4', 'Vite'],
    image: '/images/work-growthill.webp',
    imageSm: '/images/work-growthill-sm.webp',
    status: 'Launching soon',
    links: [],
    tone: '#2d4a46',
  },
  {
    id: 'bnh',
    title: 'Brains & Hammers',
    kind: 'Website redesign',
    year: '2026',
    summary:
      'Redesign for one of Nigeria’s largest real estate developers, active since 2006. Communities, mortgage and insights sections, an on-site chat assistant, and tests for accessibility and every screen size.',
    role: 'Design & frontend',
    stack: ['React', 'React Router', 'Vitest', 'Playwright', 'Cloudflare Pages'],
    image: '/images/work-bnh.webp',
    imageSm: '/images/work-bnh-sm.webp',
    status: 'Launching soon',
    links: [],
    tone: '#2b3a3d',
  },
  {
    id: 'amen',
    title: 'AMEN Awards',
    kind: 'Freelance · Web platform',
    year: '2026',
    summary:
      'Frontend work on a continent-wide awards platform celebrating African Christian creatives. I built admin dashboard features and the multi-stage nomination verification flow.',
    role: 'Frontend developer',
    stack: ['React', 'TypeScript', 'REST APIs'],
    image: '/images/work-amen.webp',
    imageSm: '/images/work-amen-sm.webp',
    status: 'Live',
    links: [{ label: 'Visit site', href: 'https://awards.amen.africa' }],
    tone: '#1d2410',
  },
  {
    id: 'etech',
    title: 'E-Tech Complete Solutions',
    kind: 'Company website',
    year: '2026',
    summary:
      'Website for a Nigerian ICT company and the Local Operating Partner for ICDL Africa. Six pages that tell the story, explain three practices and walk visitors through ICDL certification.',
    role: 'Design & frontend',
    stack: ['React', 'React Router', 'Vite'],
    image: '/images/work-etech.webp',
    imageSm: '/images/work-etech-sm.webp',
    status: 'Launching soon',
    links: [],
    tone: '#3b1414',
  },
  {
    id: 'finpulse',
    title: 'FinPulse',
    kind: 'Full-stack app',
    year: '2026',
    summary:
      'A personal finance dashboard. Sign in, track income and expenses, see spending by category, convert between five currencies and switch themes. Data is stored in MongoDB.',
    role: 'Full-stack developer',
    stack: ['React', 'Express', 'MongoDB', 'Recharts'],
    image: '/images/work-finpulse.webp',
    imageSm: '/images/work-finpulse-sm.webp',
    status: 'Live',
    links: [
      { label: 'Live demo', href: 'https://finpulse-teal.vercel.app' },
      { label: 'Code', href: 'https://github.com/YussaMoney/finPulse' },
    ],
    tone: '#0f2a2c',
  },
]

export const earlierWork = [
  { title: 'Weather App', stack: 'JavaScript · Weather API', href: 'https://yussamoney.github.io/Weather-App/' },
  { title: 'Linktree Clone', stack: 'React · Redux', href: 'https://linktree-yussamoney.vercel.app' },
  { title: 'Library', stack: 'JavaScript', href: 'https://github.com/YussaMoney/Library' },
  { title: 'Rock Paper Scissors', stack: 'JavaScript', href: 'https://github.com/YussaMoney/Project-Rock-Paper-Scissors' },
  { title: 'Tic Tac Toe', stack: 'JavaScript · CSS', href: 'https://github.com/YussaMoney/Tic_Tac_Toe-Game' },
]

export const services = [
  {
    title: 'Websites & redesigns',
    body: 'Marketing sites and redesigns that load fast, read clearly and look like the business they belong to. Design, build and deploy.',
  },
  {
    title: 'Web apps & dashboards',
    body: 'React frontends for dashboards, admin tools and multi-step flows, connected to REST APIs, with auth and real data.',
  },
  {
    title: 'Digital adoption & training',
    body: 'Rolling out platforms to people who did not ask for them: onboarding, workshops, evaluation frameworks and clear reporting.',
  },
]

export const experience = [
  {
    role: 'Zonal Coordinator, South West',
    org: 'E-Tech Complete Solutions · ICDL / TETFund Projects',
    period: 'Nov 2025 — Present',
    points: [
      'Main advisory contact for 24 higher education institutions on a TETFund digital transformation programme.',
      'Run onboarding and user adoption on the ICDL Skillsbox platform for hundreds of institutional staff.',
      'Design standard evaluation and certification frameworks used across participating institutions.',
      'Troubleshoot platform issues and set up escalation channels that keep the programme running.',
      'Manage technical and financial bid proposals, including bid coordination for Gorton Consult System Ltd.',
    ],
  },
  {
    role: 'ICDL Master Trainer',
    org: 'E-Tech Complete Solutions',
    period: 'Nov 2025 — Present',
    points: [
      'Deliver digital skills workshops in Computer and Online Essentials to academic and admin staff nationwide.',
      'Track KPIs and certification outcomes and report them to institutional stakeholders.',
    ],
  },
  {
    role: 'Frontend Developer',
    org: 'Freelance',
    period: 'Ongoing',
    points: [
      'Design and build websites and web apps for clients, from real estate developers to non-profits.',
      'Shipped work for AMEN Awards, Growthill Africa, Brains & Hammers and E-Tech Complete Solutions.',
    ],
  },
  {
    role: 'Assistant Operator (SIWES)',
    org: 'Federal Airports Authority of Nigeria · MMIA Terminal 2',
    period: 'Jan 2024 — Mar 2024',
    points: [
      'Logged data for 12+ commercial flights a shift and 900+ passengers a day.',
      'Took part in wildlife-strike risk assessments and reviewed incident response workflows.',
    ],
  },
  {
    role: 'Tour Guide · Hospitality Trainee',
    org: 'University of Ibadan Zoo · UI Hotel',
    period: 'Sep 2023 — Dec 2023',
    points: [
      'Led educational tours and co-designed a gamified visitor experience.',
      'Ran front-desk operations and logistics for large institutional events.',
    ],
  },
]

export const education = [
  { title: 'B.Sc. Wildlife and Ecotourism Management', meta: 'University of Ibadan · 2025' },
  { title: 'ICDL Cyber Security 3.0', meta: 'Certified · Nov 2026' },
  { title: 'ICDL Computer & Online Essentials', meta: 'Certified · Oct 2026' },
  { title: 'The Odin Project', meta: 'JavaScript, React, Git' },
  { title: 'NYSC', meta: 'Completed' },
]
