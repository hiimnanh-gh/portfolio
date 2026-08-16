import React, { useState } from "react";
import {
  Mail,
  ExternalLink,
  Code2,
  Briefcase,
  GraduationCap,
  ArrowRight,
  Download,
  Check,
  Copy,
  Sparkles,
  Terminal,
  Database,
  Wrench,
  Award,
  Menu,
  X,
  ArrowUp,
  MapPin,
  CheckCircle2,
  Layers,
  Cpu,
} from "lucide-react";

// Brand Icon Helpers
const GithubIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
    />
  </svg>
);

const LinkedinIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.74a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28z" />
  </svg>
);

const PROFILE_DATA = {
  name: "Nguyen Anh",
  brandLogo: "<NguyenAnh>",
  roleTitle: "Frontend & Full-stack Developer",
  statusBadge: "Open to Intern / Junior Roles",
  email: "daonguyenanhprivate@gmail.com",
  location: "Ha Noi, Vietnam",
  githubUrl: "https://github.com/hiimnanh-gh",
  linkedinUrl: "https://linkedin.com/in/nguyenanhm18",
  cvFileName: "Nguyen_Anh_Resume_Frontend_Developer.pdf",
  headline:
    "Crafting modern, high-performance web applications with precision & passion.",
  shortBio:
    "Software Engineering student specializing in building responsive, accessible, and pixel-perfect web experiences using React, TypeScript, and modern CSS architecture.",
};

const STATS_DATA = [
  { label: "Featured Projects", value: "3+" },
  { label: "GPA Score", value: "3.6 / 4.0" },
  { label: "Code Commits", value: "250+" },
  { label: "Core Focus", value: "React & Web APIs" },
];

const SKILLS_DATA = [
  {
    category: "Frontend Engineering",
    icon: Code2,
    color: "from-indigo-500 to-cyan-500",
    description: "Building responsive, modern, and accessible UIs",
    skills: [
      { name: "React.js", level: "Advanced" },
      { name: "JavaScript (ES6+)", level: "Advanced" },
      { name: "TypeScript", level: "Intermediate" },
      { name: "Tailwind CSS", level: "Advanced" },
      { name: "HTML5 & CSS3", level: "Advanced" },
      { name: "Redux / Context API", level: "Intermediate" },
    ],
  },
  {
    category: "Backend & Database",
    icon: Database,
    color: "from-cyan-500 to-teal-500",
    description: "Architecting solid web APIs & data management",
    skills: [
      { name: "Node.js", level: "Intermediate" },
      { name: "Express.js", level: "Intermediate" },
      { name: "RESTful APIs", level: "Advanced" },
      { name: "SQL (PostgreSQL/MySQL)", level: "Intermediate" },
      { name: "MongoDB Basics", level: "Basic" },
      { name: "Spring Boot Basics", level: "Basic" },
    ],
  },
  {
    category: "Tools & Dev Workflow",
    icon: Wrench,
    color: "from-violet-500 to-indigo-500",
    description: "Industry-standard tooling & version control",
    skills: [
      { name: "Git & GitHub", level: "Advanced" },
      { name: "VS Code", level: "Advanced" },
      { name: "Vite & NPM", level: "Advanced" },
      { name: "Postman API", level: "Intermediate" },
      { name: "Figma (UI Specs)", level: "Intermediate" },
      { name: "Vercel / Netlify", level: "Intermediate" },
    ],
  },
];

const PROJECTS_DATA = [
  {
    id: 1,
    category: "Full-Stack Web App",
    title: "DevPulse - Developer Activity Analytics",
    problemSolution:
      "Engineered a real-time developer dashboard that aggregates GitHub activity, commit streaks, and project build health into visual metrics. Solved API rate limiting using intelligent client-side caching.",
    techStack: ["React", "Tailwind CSS", "Node.js", "REST API", "Recharts"],
    githubUrl: "https://github.com",
    liveDemoUrl: "https://demo.com",
    featured: true,
  },
  {
    id: 2,
    category: "Frontend Application",
    title: "CloudDesk - Agile Kanban Collaboration Board",
    problemSolution:
      "Designed and built an interactive task management application supporting drag-and-drop workflows, custom column filters, and local persistence. Achieved 100% Lighthouse accessibility score.",
    techStack: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Zustand",
      "Lucide Icons",
    ],
    githubUrl: "https://github.com",
    liveDemoUrl: "https://demo.com",
    featured: true,
  },
  {
    id: 3,
    category: "E-Commerce / UI UX",
    title: "ShopSphere - Next-Gen Storefront UI",
    problemSolution:
      "Created a high-converting e-commerce web app featuring instant product filtering, dynamic shopping cart drawer, and sleek dark checkout flow optimized for sub-second page loads.",
    techStack: ["React", "Tailwind CSS", "Context API", "Vite", "REST API"],
    githubUrl: "https://github.com",
    liveDemoUrl: "https://demo.com",
    featured: true,
  },
];

const TIMELINE_DATA = [
  {
    id: 1,
    type: "education",
    icon: GraduationCap,
    title: "Bachelor of Science in Information Technology",
    institution: "University of Science & Technology",
    period: "2022 - 2026 (Expected)",
    description:
      "Major in Software Engineering. Maintained a 3.6 / 4.0 GPA while serving as top 5% Honor Student. Specialized in Web Systems & UI Architecture.",
    tags: ["GPA: 3.6/4.0", "Dean's List", "Software Engineering"],
  },
  {
    id: 2,
    type: "certification",
    icon: Award,
    title: "Meta Frontend Developer Specialization",
    institution: "Coursera / Meta",
    period: "2024",
    description:
      "Completed intensive certification covering advanced React patterns, state management, web performance optimization, and responsive design principles.",
    tags: ["React Advanced", "UX Principles", "JavaScript ES6+"],
  },
  {
    id: 3,
    type: "extracurricular",
    icon: Briefcase,
    title: "Technical Lead - University IT Club",
    institution: "IT Student Community",
    period: "2023 - Present",
    description:
      "Led workshops on Git, React, and CSS architecture for over 50+ junior students. Collaborated on building the official community event platform.",
    tags: ["Mentorship", "Workshop Host", "Git Collaboration"],
  },
];

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage("");
    }, 3000);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PROFILE_DATA.email);
    setCopiedEmail(true);
    showToast("Email address copied to clipboard!");
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleDownloadCV = () => {
    showToast(`Downloading ${PROFILE_DATA.cvFileName}...`);
  };

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-indigo-500 selection:text-white relative overflow-x-hidden">
      {/* Background Ambient Glow Effects */}
      <div className="fixed top-0 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse"></div>
      <div className="fixed top-1/3 right-10 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="fixed bottom-10 left-10 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none -z-10"></div>

      {/* Floating Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-4 py-3 rounded-xl bg-slate-900 border border-indigo-500/40 text-indigo-200 shadow-2xl shadow-indigo-950/50 backdrop-blur-md transition-all duration-300 animate-bounce">
          <CheckCircle2 className="w-5 h-5 text-indigo-400 shrink-0" />
          <span className="text-sm font-medium">{toastMessage}</span>
        </div>
      )}

      {/* Header / Navbar */}
      <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-slate-950/80 border-b border-slate-800/80 transition-all">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("hero");
            }}
            className="text-xl font-bold tracking-tight text-white group flex items-center gap-2"
          >
            <span className="p-1.5 rounded-lg bg-indigo-600/20 text-indigo-400 border border-indigo-500/30 group-hover:border-indigo-400 transition">
              <Terminal className="w-5 h-5" />
            </span>
            <span className="bg-gradient-to-r from-white via-slate-200 to-indigo-300 bg-clip-text text-transparent">
              {PROFILE_DATA.brandLogo}
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-sm font-medium text-slate-300 hover:text-indigo-400 transition"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="text-sm font-medium text-slate-300 hover:text-indigo-400 transition"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-sm font-medium text-slate-300 hover:text-indigo-400 transition"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("education")}
              className="text-sm font-medium text-slate-300 hover:text-indigo-400 transition"
            >
              Education
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-sm font-medium text-slate-300 hover:text-indigo-400 transition"
            >
              Contact
            </button>
          </nav>

          {/* Social Links & Download CV Action */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href={PROFILE_DATA.githubUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub Profile"
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-900 border border-transparent hover:border-slate-800 transition"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
            <a
              href={PROFILE_DATA.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-900 border border-transparent hover:border-slate-800 transition"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>
            <button
              onClick={handleDownloadCV}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-sm transition shadow-lg shadow-indigo-600/20 active:scale-95"
            >
              <Download className="w-4 h-4" /> Download CV
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={handleDownloadCV}
              className="p-2 rounded-lg bg-indigo-600 text-white text-xs font-medium flex items-center gap-1"
            >
              <Download className="w-3.5 h-3.5" /> CV
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-900 border border-slate-800"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-slate-800 bg-slate-950/95 backdrop-blur-xl px-4 pt-2 pb-6 space-y-3">
            <button
              onClick={() => scrollToSection("hero")}
              className="block w-full text-left py-2.5 px-3 rounded-lg text-slate-200 hover:bg-slate-900 hover:text-indigo-400 transition"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="block w-full text-left py-2.5 px-3 rounded-lg text-slate-200 hover:bg-slate-900 hover:text-indigo-400 transition"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="block w-full text-left py-2.5 px-3 rounded-lg text-slate-200 hover:bg-slate-900 hover:text-indigo-400 transition"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("education")}
              className="block w-full text-left py-2.5 px-3 rounded-lg text-slate-200 hover:bg-slate-900 hover:text-indigo-400 transition"
            >
              Education & Achievements
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left py-2.5 px-3 rounded-lg text-slate-200 hover:bg-slate-900 hover:text-indigo-400 transition"
            >
              Contact
            </button>

            <div className="pt-3 border-t border-slate-800 flex items-center justify-around">
              <a
                href={PROFILE_DATA.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-sm text-slate-400 hover:text-white"
              >
                <GithubIcon className="w-4 h-4" /> GitHub
              </a>
              <a
                href={PROFILE_DATA.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-sm text-slate-400 hover:text-white"
              >
                <LinkedinIcon className="w-4 h-4" /> LinkedIn
              </a>
              <a
                href={`mailto:${PROFILE_DATA.email}`}
                className="flex items-center gap-2 text-sm text-slate-400 hover:text-white"
              >
                <Mail className="w-4 h-4" /> Email
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Main Content Area */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-28 py-12">
        {/* 1. HERO SECTION */}
        <section id="hero" className="pt-6 space-y-8">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm font-medium backdrop-blur-md shadow-sm shadow-emerald-950">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400"></span>
            </span>
            <span>{PROFILE_DATA.statusBadge}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Hero Copy */}
            <div className="lg:col-span-8 space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15]">
                Hi, I'm <span className="text-white">{PROFILE_DATA.name}</span>
                <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-400">
                  {PROFILE_DATA.roleTitle}
                </span>
              </h1>

              <p className="text-slate-300 text-lg sm:text-xl leading-relaxed max-w-2xl">
                {PROFILE_DATA.shortBio}
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => scrollToSection("projects")}
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 font-semibold transition text-white shadow-xl shadow-indigo-600/25 active:scale-95 group"
                >
                  <Briefcase className="w-5 h-5" />
                  View Projects
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={() => scrollToSection("contact")}
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 font-semibold transition text-slate-200 border border-slate-800 hover:border-slate-700 active:scale-95"
                >
                  <Mail className="w-5 h-5 text-indigo-400" />
                  Contact Me
                </button>

                <button
                  onClick={handleDownloadCV}
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl text-slate-400 hover:text-white hover:bg-slate-900 border border-transparent hover:border-slate-800 transition text-sm font-medium"
                >
                  <Download className="w-4 h-4" /> Download Resume
                </button>
              </div>
            </div>

            {/* Metrics & Highlights Card */}
            <div className="lg:col-span-4">
              <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-xl shadow-2xl relative overflow-hidden group hover:border-slate-700 transition">
                <div className="absolute top-0 right-0 p-4 text-indigo-500/20 group-hover:text-indigo-500/30 transition">
                  <Sparkles className="w-24 h-24 -mr-8 -mt-8" />
                </div>
                <h3 className="text-xs uppercase tracking-wider font-bold text-indigo-400 mb-4 flex items-center gap-2">
                  <Cpu className="w-4 h-4" /> Quick Highlights
                </h3>

                <div className="grid grid-cols-2 gap-4">
                  {STATS_DATA.map((stat, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800/60"
                    >
                      <div className="text-2xl sm:text-3xl font-extrabold text-white">
                        {stat.value}
                      </div>
                      <div className="text-xs text-slate-400 mt-1">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-4 pt-4 border-t border-slate-800/80 flex items-center gap-2 text-xs text-slate-400">
                  <MapPin className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                  <span>Based in {PROFILE_DATA.location}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. TECHNICAL SKILLS SECTION */}
        <section id="skills" className="space-y-8 scroll-mt-24">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-indigo-400 text-sm font-semibold tracking-wider uppercase">
              <Code2 className="w-4 h-4" /> Technical Proficiency
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Skills & Tech Stack
            </h2>
            <p className="text-slate-400 text-base max-w-2xl">
              Categorized technologies and tools I utilize to design, develop,
              and deploy production-ready web applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SKILLS_DATA.map((col, idx) => {
              const CategoryIcon = col.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-indigo-500/40 transition-all duration-300 flex flex-col justify-between group hover:shadow-xl hover:shadow-indigo-950/30"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="p-3 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 group-hover:scale-110 transition-transform">
                        <CategoryIcon className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                        {col.skills.length} Technologies
                      </span>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                        {col.category}
                      </h3>
                      <p className="text-xs text-slate-400 mt-1">
                        {col.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {col.skills.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-300 text-xs font-medium hover:border-indigo-500/50 hover:text-white transition flex items-center gap-1.5"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
                          {skill.name}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* 3. FEATURED PROJECTS SECTION */}
        <section id="projects" className="space-y-8 scroll-mt-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 text-indigo-400 text-sm font-semibold tracking-wider uppercase">
                <Briefcase className="w-4 h-4" /> Portfolio Showcase
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                Featured Projects
              </h2>
              <p className="text-slate-400 text-base max-w-2xl">
                Real-world web projects demonstrating clean architecture,
                component modularity, and problem-solving skills.
              </p>
            </div>
            <a
              href={PROFILE_DATA.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-400 hover:text-indigo-300 transition"
            >
              View all repos on GitHub <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PROJECTS_DATA.map((project) => (
              <div
                key={project.id}
                className="rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-indigo-500/50 transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:-translate-y-1 hover:shadow-2xl hover:shadow-indigo-950/50"
              >
                <div className="p-6 space-y-4">
                  {/* Category Pill */}
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                      {project.category}
                    </span>
                    <Layers className="w-4 h-4 text-slate-600 group-hover:text-indigo-400 transition-colors" />
                  </div>

                  {/* Title & Problem-Solution */}
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed line-clamp-4">
                      {project.problemSolution}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2 space-y-4">
                  {/* Tech Stack Badges */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-xs px-2.5 py-1 rounded bg-slate-950 text-indigo-300 border border-slate-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Links */}
                  <div className="flex items-center justify-between pt-4 border-t border-slate-800/80">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-400 hover:text-white transition"
                    >
                      <GithubIcon className="w-4 h-4 text-slate-300" />
                      GitHub Repo
                    </a>
                    <a
                      href={project.liveDemoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition group/link"
                    >
                      Live Demo
                      <ExternalLink className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 4. EDUCATION & ACHIEVEMENTS TIMELINE */}
        <section id="education" className="space-y-8 scroll-mt-24">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-indigo-400 text-sm font-semibold tracking-wider uppercase">
              <GraduationCap className="w-4 h-4" /> Background & Qualifications
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Education & Achievements
            </h2>
            <p className="text-slate-400 text-base max-w-2xl">
              Academic background, industry certifications, and leadership
              experience.
            </p>
          </div>

          <div className="relative pl-6 sm:pl-8 border-l-2 border-slate-800 space-y-10">
            {TIMELINE_DATA.map((item) => {
              const ItemIcon = item.icon;
              return (
                <div key={item.id} className="relative group">
                  {/* Timeline Dot Icon */}
                  <div className="absolute -left-[31px] sm:-left-[39px] top-0 p-2 rounded-full bg-slate-950 border-2 border-indigo-500/60 text-indigo-400 group-hover:border-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-all shadow-md">
                    <ItemIcon className="w-4 h-4" />
                  </div>

                  {/* Content Box */}
                  <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-slate-700 transition space-y-3">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <h3 className="text-xl font-bold text-white flex items-center gap-2">
                        {item.title}
                      </h3>
                      <span className="text-xs font-semibold px-2.5 py-1 rounded bg-slate-800 text-indigo-300 w-fit">
                        {item.period}
                      </span>
                    </div>

                    <div className="text-sm font-medium text-slate-400">
                      {item.institution}
                    </div>

                    <p className="text-slate-300 text-sm leading-relaxed">
                      {item.description}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-1">
                      {item.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-xs px-2.5 py-0.5 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* 5. CONTACT SECTION */}
        <section id="contact" className="scroll-mt-24">
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-slate-900/90 to-slate-950 border border-indigo-500/30 text-center space-y-8 relative overflow-hidden shadow-2xl">
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="space-y-3 max-w-2xl mx-auto">
              <span className="px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-semibold uppercase tracking-wider">
                Get In Touch
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
                Let's Work Together
              </h2>
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                I am actively seeking Frontend / Full-stack Intern or Junior
                Software Engineer roles. If you have an opportunity or simply
                want to connect, feel free to reach out!
              </p>
            </div>

            {/* Email Card & Copy CTA */}
            <div className="max-w-md mx-auto p-4 rounded-2xl bg-slate-950/80 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-inner">
              <div className="flex items-center gap-3 text-left w-full sm:w-auto px-2">
                <Mail className="w-5 h-5 text-indigo-400 shrink-0" />
                <span className="text-sm font-medium text-slate-200 truncate">
                  {PROFILE_DATA.email}
                </span>
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <button
                  onClick={handleCopyEmail}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200 transition border border-slate-700 active:scale-95"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" /> Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" /> Copy
                    </>
                  )}
                </button>
                <a
                  href={`mailto:${PROFILE_DATA.email}`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-xs font-semibold text-white transition shadow-md shadow-indigo-600/20 active:scale-95"
                >
                  <Mail className="w-3.5 h-3.5" /> Send
                </a>
              </div>
            </div>

            {/* Social Channels */}
            <div className="flex items-center justify-center gap-6 pt-2">
              <a
                href={PROFILE_DATA.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-slate-400 hover:text-white transition text-sm font-medium"
              >
                <GithubIcon className="w-4 h-4" /> GitHub
              </a>
              <span className="text-slate-700">•</span>
              <a
                href={PROFILE_DATA.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-slate-400 hover:text-white transition text-sm font-medium"
              >
                <LinkedinIcon className="w-4 h-4" /> LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-slate-900 bg-slate-950 py-8 mt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} {PROFILE_DATA.name}. Built with React,
            Tailwind CSS & Lucide React.
          </div>
          <button
            onClick={() => scrollToSection("hero")}
            className="inline-flex items-center gap-1.5 text-slate-400 hover:text-indigo-400 transition"
          >
            Back to top <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </footer>
    </div>
  );
}
