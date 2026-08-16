import React, { useState, useEffect, useRef } from "react";
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
  Maximize2,
  MousePointerClick,
  Lock,
  Unlock,
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

const PROFILE_DATA = {
  name: "Nguyen Anh",
  brandLogo: "<NguyenAnh>",
  roleTitle: "Frontend & Full-stack Developer",
  statusBadge: "Open to Intern / Fresher Roles",
  email: "daonguyenanhprivate@gmail.com",
  location: "Ha Noi, Vietnam",
  githubUrl: "https://github.com/hiimnanh-gh",
  cvFileName: "Nguyen_Anh_Resume_Frontend_Developer.pdf",
  headline:
    "Building robust, high-performance web applications with React and Spring Boot.",
  shortBio:
    "Software Engineering student at CMC University. Skilled in creating responsive web interfaces using React and Tailwind CSS, backed by a solid understanding of Java Spring Boot, REST APIs, and Agile/Scrum workflows.",
};

const STATS_DATA = [
  { label: "Completed Projects", value: "4+" },
  { label: "English", value: "IELTS 6.0" },
  { label: "Primary Stack", value: "React + Spring" },
  { label: "Core Focus", value: "Fullstack" },
];

const SKILLS_DATA = [
  {
    category: "Frontend Engineering",
    icon: Code2,
    color: "from-indigo-500 to-cyan-500",
    description:
      "Building responsive, component-driven, and scalable user interfaces",
    skills: [
      { name: "React.js", level: "Proficient" },
      { name: "Angular 17", level: "Proficient" },
      { name: "TypeScript / JavaScript ES6+", level: "Proficient" },
      { name: "Tailwind CSS", level: "Proficient" },
      { name: "HTML5 / CSS3", level: "Proficient" },
      { name: "Redux Toolkit / RxJS", level: "Intermediate" },
    ],
  },
  {
    category: "Backend & Database",
    icon: Database,
    color: "from-cyan-500 to-teal-500",
    description:
      "Developing robust REST APIs, data models, and enterprise services",
    skills: [
      { name: "Java & Spring Boot 3", level: "Proficient" },
      { name: "C# / ASP.NET Core 8", level: "Intermediate" },
      { name: "Spring Security & JWT", level: "Intermediate" },
      { name: "MySQL & MS SQL Server", level: "Intermediate" },
      { name: "Entity Framework / JPA", level: "Intermediate" },
      { name: "WebSocket & STOMP", level: "Intermediate" },
    ],
  },
  {
    category: "DevOps & Collaboration",
    icon: Wrench,
    color: "from-violet-500 to-indigo-500",
    description:
      "Version control, agile delivery workflows, and productivity tools",
    skills: [
      { name: "Git & GitHub Flow", level: "Proficient" },
      { name: "Agile / Scrum Methodology", level: "Intermediate" },
      { name: "Jira Software", level: "Intermediate" },
      { name: "Postman API Suite", level: "Proficient" },
      { name: "VS Code / IntelliJ / Visual Studio", level: "Proficient" },
      { name: "Vercel / Netlify", level: "Intermediate" },
    ],
  },
];

const PROJECTS_DATA = [
  {
    id: 1,
    category: "Full-Stack Web App",
    title: "Rikkei LMS - Online Learning & Exam Management System",
    problemSolution:
      "Architected a comprehensive LMS supporting RBAC (Admin/Teacher/Student), interactive learning roadmaps, automated quiz grading, and real-time messaging via Spring WebSocket/STOMP. Implemented bulk Excel question parsing using Apache POI, secured with Spring Security & JWT.",
    techStack: [
      "React 19",
      "Tailwind CSS",
      "Redux Toolkit",
      "Spring Boot 3",
      "Spring Security",
      "WebSocket",
      "MySQL",
    ],
    githubUrl: "https://github.com/hiimnanh-gh/Rikkei-Project-LMS",
    featured: true,
  },
  {
    id: 2,
    category: "Frontend Web Application",
    title: "HMS - Hotel Reservation & Operations Management",
    problemSolution:
      "Engineered an enterprise hotel booking portal and operations dashboard using Angular 17 Standalone Components and RxJS. Features dynamic room availability filtering, coupon validation, checkout flows, and route protection via Functional Route Guards (Admin/Staff/Guest).",
    techStack: [
      "Angular 17",
      "TypeScript",
      "RxJS",
      "Tailwind CSS",
      "Angular Router & Guards",
      "REST APIs",
    ],
    githubUrl: "https://github.com/hiimnanh-gh",
    featured: true,
  },
  {
    id: 3,
    category: "Enterprise System",
    title: "SIMS - Student Information & Academic System",
    problemSolution:
      "Developed a centralized academic management platform managing complex relational entities across faculties, courses, class schedules, and grading. Implemented Cookie/Session authentication, role workflows, and schema migrations via Entity Framework Core.",
    techStack: [
      "ASP.NET Core 8.0",
      "C# (.NET 8)",
      "Entity Framework Core",
      "MS SQL Server",
      "Razor Views",
      "Bootstrap 5",
    ],
    githubUrl: "https://github.com/hiimnanh-gh",
    featured: true,
  },
];

const TIMELINE_DATA = [
  {
    id: 1,
    type: "education",
    icon: GraduationCap,
    title: "Bachelor of Information & Communications Technology",
    institution: "CMC University",
    period: "2023 - 2026 (Expected)",
    description:
      "Major in Software Engineering. Gained foundational and practical knowledge in software architecture, algorithms, database systems, and full-lifecycle web application development.",
    tags: ["Software Engineering", "CMC University", "Web Development"],
  },
  {
    id: 2,
    type: "certification",
    icon: Award,
    title: "IELTS Academic - Overall Band 6.0",
    institution: "IDP / British Council",
    period: "Certified",
    description:
      "Demonstrated effective professional communication skills, technical documentation reading, and international collaboration readiness.",
    tags: ["IELTS 6.0", "Professional English", "Technical Reading"],
  },
];

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [isDemoActive, setIsDemoActive] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const demoContainerRef = useRef(null);

  // Click outside or press Escape to release iframe interaction / close modal
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        demoContainerRef.current &&
        !demoContainerRef.current.contains(event.target)
      ) {
        setIsDemoActive(false);
      }
    };
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsDemoActive(false);
        setIsModalOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

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
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-indigo-500 selection:text-white relative overflow-x-clip">
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

          {/* Hero Copy + Card — 2 column layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left: Hero Copy */}
            <div className="lg:col-span-7 space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15]">
                Hi, I'm <span className="text-white">{PROFILE_DATA.name}</span>
                <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-400">
                  {PROFILE_DATA.roleTitle}
                </span>
              </h1>

              <p className="text-indigo-200/90 text-lg sm:text-xl font-medium leading-relaxed">
                {PROFILE_DATA.headline}
              </p>

              <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
                {PROFILE_DATA.shortBio}
              </p>

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

            {/* Right: Quick Highlights Card */}
            <div className="lg:col-span-5">
              <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-xl shadow-2xl relative overflow-hidden group hover:border-slate-700 transition">
                <div className="absolute top-0 right-0 p-4 text-indigo-500/10 group-hover:text-indigo-500/20 transition pointer-events-none">
                  <Sparkles className="w-24 h-24 -mr-8 -mt-8" />
                </div>
                <h3 className="text-xs uppercase tracking-wider font-bold text-indigo-400 mb-4 flex items-center gap-2">
                  <Cpu className="w-4 h-4" /> Quick Highlights
                </h3>

                <div className="grid grid-cols-2 gap-3">
                  {STATS_DATA.map((stat, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/60 hover:border-indigo-500/30 transition"
                    >
                      <div className="text-xl font-extrabold text-white leading-tight whitespace-nowrap">
                        {stat.value}
                      </div>
                      <div className="text-xs text-slate-400 mt-1.5 leading-snug">
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
                          {typeof skill === "string" ? skill : skill.name}
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
                    {project.liveDemoUrl && (
                      <a
                        href={project.liveDemoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition group/link"
                      >
                        Live Demo
                        <ExternalLink className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 3.1. INTERACTIVE LIVE APPLICATION SHOWCASE (DEVTOOLS SUITE) */}
        <section className="space-y-6 scroll-mt-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 text-indigo-400 text-sm font-semibold tracking-wider uppercase">
                <Sparkles className="w-4 h-4" /> Live Interactive Application
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                DevTools Suite — 8-in-1 Browser Utilities
              </h2>
              <p className="text-slate-400 text-base max-w-2xl">
                Experience the live tool suite directly right below without
                leaving the portfolio. Built 100% client-side with React 19,
                Vite, and Web Audio API.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
              <a
                href="https://github.com/hiimnanh-gh/devtools-suite"
                target="_blank"
                rel="noreferrer"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white text-xs font-semibold transition"
              >
                <GithubIcon className="w-4 h-4" /> GitHub Repo
              </a>
              <a
                href="https://devtools-suite-lac.vercel.app"
                target="_blank"
                rel="noreferrer"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold transition shadow-lg shadow-indigo-600/20 active:scale-95"
              >
                Open Full App <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Embedded Browser Window with Isolated Scroll & Focus Control */}
          <div
            ref={demoContainerRef}
            className={`rounded-2xl bg-slate-900/80 border transition-all duration-300 overflow-hidden shadow-2xl ${
              isDemoActive
                ? "border-indigo-500/80 ring-2 ring-indigo-500/20 shadow-indigo-950/60"
                : "border-slate-800 shadow-indigo-950/40 hover:border-slate-700"
            }`}
          >
            {/* macOS Browser Navigation Bar */}
            <div className="h-11 bg-slate-950 border-b border-slate-800/80 px-3 sm:px-4 flex items-center justify-between gap-2 sm:gap-3">
              <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
                <span className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-rose-500/80" />
                <span className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-amber-500/80" />
                <span className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-emerald-500/80" />
              </div>

              {/* URL Address Bar with Live Indicator */}
              <div className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 rounded-md bg-slate-900 border border-slate-800 text-[11px] sm:text-xs font-mono text-slate-400 max-w-xs sm:max-w-md w-full justify-center truncate">
                <span
                  className={`w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full shrink-0 ${
                    isDemoActive
                      ? "bg-emerald-400 animate-pulse"
                      : "bg-slate-500"
                  }`}
                ></span>
                <span className="truncate">devtools-suite-lac.vercel.app</span>
                {isDemoActive && (
                  <span className="hidden md:inline text-[10px] text-emerald-400/90 font-sans ml-1">
                    (Cuộn riêng biệt · Esc để mở khóa)
                  </span>
                )}
              </div>

              {/* Top Bar Action Controls */}
              <div className="flex items-center gap-1.5 shrink-0">
                <button
                  onClick={() => setIsDemoActive(!isDemoActive)}
                  className={`text-[11px] sm:text-xs px-2.5 py-1 rounded-lg border transition flex items-center gap-1 cursor-pointer ${
                    isDemoActive
                      ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400 font-medium"
                      : "bg-slate-900 border-slate-800 text-slate-400 hover:text-white"
                  }`}
                  title={
                    isDemoActive
                      ? "Bấm để mở khóa cuộn trang Portfolio"
                      : "Bấm để khóa cuộn & thao tác bên trong ứng dụng"
                  }
                >
                  {isDemoActive ? (
                    <>
                      <Unlock className="w-3 h-3 text-emerald-400" />
                      <span className="hidden sm:inline">Đang tương tác</span>
                    </>
                  ) : (
                    <>
                      <Lock className="w-3 h-3 text-slate-400" />
                      <span className="hidden sm:inline">Khóa cuộn</span>
                    </>
                  )}
                </button>

                <button
                  onClick={() => setIsModalOpen(true)}
                  className="text-[11px] sm:text-xs p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 border border-transparent hover:border-slate-800 transition flex items-center gap-1 cursor-pointer"
                  title="Phóng to toàn màn hình (Fullscreen)"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span className="hidden md:inline">Phóng to</span>
                </button>
              </div>
            </div>

            {/* Embedded Iframe Container with Isolated Scroll */}
            <div
              className="w-full h-[540px] sm:h-[620px] lg:h-[700px] bg-slate-950 relative"
              style={{ overscrollBehavior: "contain" }}
            >
              <iframe
                src="https://devtools-suite-lac.vercel.app"
                title="DevTools Suite Live Demo"
                className={`w-full h-full border-0 block transition-opacity duration-200 ${
                  isDemoActive
                    ? "pointer-events-auto"
                    : "pointer-events-none opacity-85"
                }`}
                allow="clipboard-read; clipboard-write; fullscreen"
                loading="lazy"
              />

              {/* Click to Interact Overlay when inactive */}
              {!isDemoActive && (
                <div
                  onClick={() => setIsDemoActive(true)}
                  className="absolute inset-0 bg-slate-950/40 backdrop-blur-[1px] hover:backdrop-blur-0 flex flex-col items-center justify-center gap-3 cursor-pointer group transition-all duration-300"
                >
                  <div className="px-5 py-3 rounded-2xl bg-slate-900/95 border border-indigo-500/40 text-white text-xs sm:text-sm font-semibold flex items-center gap-2.5 shadow-2xl shadow-indigo-950/90 group-hover:scale-105 group-hover:bg-indigo-600 transition-all">
                    <MousePointerClick className="w-4 h-4 text-indigo-400 group-hover:text-white" />
                    <span>Nhấp để thao tác & cuộn bên trong</span>
                  </div>
                  <span className="text-[11px] text-slate-400 bg-slate-950/80 px-3 py-1 rounded-full border border-slate-800/80">
                    Tránh bị trôi trang khi đang lướt Portfolio
                  </span>
                </div>
              )}
            </div>
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
            <div className="max-w-xl mx-auto p-2 sm:p-2.5 sm:pl-5 rounded-2xl bg-slate-950/80 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-inner">
              <div className="flex items-center gap-3 text-left w-full sm:w-auto min-w-0 flex-1 px-2 sm:px-0">
                <Mail className="w-5 h-5 text-indigo-400 shrink-0" />
                <span className="text-sm font-medium text-slate-200 truncate">
                  {PROFILE_DATA.email}
                </span>
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto shrink-0">
                <button
                  onClick={handleCopyEmail}
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-xs font-semibold text-slate-200 transition border border-slate-700 active:scale-95 cursor-pointer"
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
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-xs font-semibold text-white transition shadow-md shadow-indigo-600/20 active:scale-95"
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
                href={`mailto:${PROFILE_DATA.email}`}
                className="flex items-center gap-2 text-slate-400 hover:text-white transition text-sm font-medium"
              >
                <Mail className="w-4 h-4 text-indigo-400" /> Email Me
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
      {/* Fullscreen Expand Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-2 sm:p-6 lg:p-8"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="w-full max-w-6xl h-[90vh] rounded-2xl bg-slate-900 border border-slate-700 shadow-2xl shadow-black flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="h-12 bg-slate-950 border-b border-slate-800 px-4 flex items-center justify-between gap-3 shrink-0">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="w-3 h-3 rounded-full bg-rose-500 hover:bg-rose-600 transition cursor-pointer"
                  title="Đóng (Esc)"
                  aria-label="Đóng"
                />
                <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
              </div>
              <div className="flex-1 max-w-md mx-auto flex items-center justify-center gap-2 px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300 truncate">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0"></span>
                <span className="truncate">devtools-suite-lac.vercel.app</span>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href="https://devtools-suite-lac.vercel.app"
                  target="_blank"
                  rel="noreferrer"
                  className="p-1.5 px-2.5 rounded-lg bg-indigo-600/10 hover:bg-indigo-600/20 text-indigo-400 border border-indigo-500/30 text-xs font-medium flex items-center gap-1"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Mở tab mới</span>
                </a>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition cursor-pointer"
                  title="Đóng (Esc)"
                  aria-label="Đóng"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
            <div className="flex-1 w-full h-full bg-slate-950">
              <iframe
                src="https://devtools-suite-lac.vercel.app"
                title="DevTools Suite Fullscreen"
                className="w-full h-full border-0"
                allow="clipboard-read; clipboard-write; fullscreen"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
