export const translations = {
  vi: {
    profile: {
      name: "Nguyên Anh",
    },
    nav: {
      about: "Giới thiệu",
      skills: "Kỹ năng",
      projects: "Dự án",
      education: "Học vấn",
      contact: "Liên hệ",
      viewCv: "Xem CV",
      downloadCv: "Tải CV",
      viewAndDownloadCv: "📄 Xem & Tải CV (2 trang)",
    },
    hero: {
      statusBadge: "Sẵn sàng nhận vị trí Intern / Fresher",
      greeting: "Xin chào, tôi là",
      roleTitle: "Frontend & Full-stack Developer",
      headline:
        "Phát triển các ứng dụng web hiệu năng cao, tối ưu trải nghiệm với React và Spring Boot.",
      shortBio:
        "Sinh viên ngành Kỹ thuật Phần mềm tại Đại học CMC. Thành thạo xây dựng giao diện web responsive với React và Tailwind CSS, cùng nền tảng vững chắc về Java Spring Boot, REST APIs và quy trình Agile/Scrum.",
      viewProjects: "Xem Dự án",
      contactMe: "Liên hệ ngay",
      quickHighlights: "Thông tin nổi bật",
      basedIn: "Địa điểm:",
    },
    stats: [
      { label: "Dự án hoàn thành", value: "4+" },
      { label: "Tiếng Anh", value: "IELTS 6.0" },
      { label: "Tech Stack chính", value: "React + Spring" },
      { label: "Định hướng", value: "Fullstack" },
    ],
    skills: {
      badge: "Năng lực chuyên môn",
      title: "Kỹ năng & Công nghệ",
      subtitle:
        "Các công nghệ và công cụ được phân loại mà tôi sử dụng để thiết kế, phát triển và triển khai ứng dụng web.",
      techSuffix: "công nghệ",
      categories: [
        {
          category: "Frontend Engineering",
          description:
            "Xây dựng giao diện người dùng responsive, component-driven và dễ mở rộng",
          skills: [
            "React.js",
            "JavaScript ES6+",
            "Tailwind CSS",
            "HTML5 / CSS3",
          ],
        },
        {
          category: "Backend & Database",
          description:
            "Phát triển REST APIs bảo mật, thiết kế cơ sở dữ liệu và backend services",
          skills: [
            "Java & Spring Boot 3",
            "C# / ASP.NET Core 8",
            "Spring Security & JWT",
            "MySQL & MS SQL Server",
          ],
        },
        {
          category: "DevOps & Collaboration",
          description:
            "Quản lý mã nguồn, quy trình phát triển Agile và công cụ lập trình",
          skills: [
            "Git & GitHub Flow",
            "Postman API Suite",
            "Agile / Scrum (Jira)",
            "VS Code / Visual Studio",
          ],
        },
      ],
    },
    projects: {
      badge: "Danh mục dự án",
      title: "Dự án nổi bật",
      subtitle:
        "Các dự án web thực tế thể hiện tư duy kiến trúc sạch, tính module hóa và kỹ năng giải quyết vấn đề.",
      viewAllGithub: "Xem tất cả repo trên GitHub",
      githubRepo: "GitHub Repo",
      liveDemo: "Live Demo",
      items: [
        {
          id: 1,
          category: "Full-Stack Web App",
          title: "Rikkei LMS - Hệ thống quản lý học tập & thi trực tuyến",
          problemSolution:
            "Kiến trúc hệ thống LMS toàn diện hỗ trợ phân quyền RBAC (Admin/Teacher/Student), lộ trình học tập tương tác, chấm điểm thi tự động và nhắn tin thời gian thực qua Spring WebSocket/STOMP. Xử lý tải câu hỏi hàng loạt từ Excel bằng Apache POI, bảo mật bằng Spring Security & JWT.",
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
          title: "HMS - Cổng đặt phòng & Quản trị vận hành khách sạn",
          problemSolution:
            "Xây dựng cổng đặt phòng khách sạn và bảng điều khiển quản trị bằng Angular 17 Standalone Components và RxJS. Tích hợp bộ lọc phòng linh hoạt, xác thực mã giảm giá, quy trình thanh toán và bảo vệ điều hướng bằng Functional Route Guards (Admin/Staff/Guest).",
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
          title: "SIMS - Hệ thống quản lý thông tin & học vụ sinh viên",
          problemSolution:
            "Phát triển nền tảng quản lý học vụ tập trung xử lý dữ liệu quan hệ phức tạp giữa khoa, môn học, thời khóa biểu và điểm số. Triển khai xác thực Cookie/Session, phân quyền người dùng và migrate schema với Entity Framework Core.",
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
      ],
    },
    liveApp: {
      badge: "Ứng dụng tương tác trực tiếp",
      title: "DevTools Suite — Bộ 8 tiện ích trình duyệt",
      subtitle:
        "Trải nghiệm trực tiếp bộ công cụ ngay bên dưới mà không cần rời trang Portfolio. Được xây dựng 100% Client-side với React 19, Vite và Web Audio API.",
      openFullApp: "Mở ứng dụng đầy đủ",
      githubRepo: "GitHub Repo",
      interacting: "Đang tương tác",
      lockScroll: "Khóa cuộn",
      isolatedScrollHint: "(Cuộn riêng biệt · Esc để mở khóa)",
      unlockScrollTitle: "Bấm để mở khóa cuộn trang Portfolio",
      lockScrollTitle: "Bấm để khóa cuộn & thao tác bên trong ứng dụng",
      fullscreen: "Phóng to",
      clickToInteract: "Nhấp để thao tác & cuộn bên trong",
      scrollAvoidHint: "Tránh bị trôi trang khi đang lướt Portfolio",
    },
    education: {
      badge: "Học vấn & Chứng chỉ",
      title: "Học vấn & Thành tựu",
      subtitle:
        "Quá trình đào tạo chính quy, chứng chỉ chuyên môn và kỹ năng ngoại ngữ.",
      items: [
        {
          id: 1,
          type: "education",
          title: "Cử nhân Công nghệ Thông tin & Truyền thông",
          institution: "Đại học CMC (CMC University)",
          period: "2023 - 2026 (Dự kiến)",
          description:
            "Chuyên ngành Kỹ thuật Phần mềm. Tiếp thu kiến thức nền tảng và thực tế về kiến trúc phần mềm, cấu trúc dữ liệu giải thuật, hệ thống cơ sở dữ liệu và quy trình phát triển ứng dụng web trọn vòng đời.",
          tags: ["Kỹ thuật Phần mềm", "Đại học CMC", "Web Development"],
        },
        {
          id: 2,
          type: "certification",
          title: "Chứng chỉ IELTS Academic — Overall 6.0",
          institution: "IDP / British Council",
          period: "Đã đạt chứng chỉ",
          description:
            "Khả năng giao tiếp chuyên nghiệp, đọc hiểu tài liệu kỹ thuật chuyên sâu và sẵn sàng làm việc trong môi trường quốc tế.",
          tags: ["IELTS 6.0", "Professional English", "Technical Reading"],
        },
      ],
    },
    contact: {
      badge: "Liên hệ",
      title: "Hãy cùng nhau hợp tác",
      subtitle:
        "Tôi đang tìm kiếm các cơ hội việc làm Frontend / Full-stack Developer (Intern / Fresher). Nếu bạn có cơ hội phù hợp hoặc muốn kết nối, hãy liên hệ với tôi nhé!",
      copyEmail: "Sao chép",
      copied: "Đã chép!",
      sendEmail: "Gửi Email",
      viewAndDownloadCv: "Xem & Tải CV (PDF)",
      emailCopiedToast: "Đã sao chép địa chỉ email vào clipboard!",
    },
    footer: {
      copyright: "Bản quyền thuộc về Nguyên Anh. Xây dựng với React, Tailwind CSS & Lucide React.",
      backToTop: "Lên đầu trang",
    },
    cvModal: {
      headerTitle: "Hồ sơ CV:",
      pageBadge: "2 trang",
      download: "Tải xuống",
      newTab: "Tab mới",
      closeTooltip: "Đóng (Esc)",
      statusText: "Bản CV hoàn chỉnh (2 trang)",
      downloadDirect: "Tải về máy",
      downloadingToast: "Đang tải xuống",
    },
  },
  en: {
    profile: {
      name: "Nguyen Anh",
    },
    nav: {
      about: "About",
      skills: "Skills",
      projects: "Projects",
      education: "Education",
      contact: "Contact",
      viewCv: "View CV",
      downloadCv: "Download CV",
      viewAndDownloadCv: "📄 View & Download CV (2 pages)",
    },
    hero: {
      statusBadge: "Open to Intern / Fresher Roles",
      greeting: "Hi, I'm",
      roleTitle: "Frontend & Full-stack Developer",
      headline:
        "Building robust, high-performance web applications with React and Spring Boot.",
      shortBio:
        "Software Engineering student at CMC University. Skilled in creating responsive web interfaces using React and Tailwind CSS, backed by a solid understanding of Java Spring Boot, REST APIs, and Agile/Scrum workflows.",
      viewProjects: "View Projects",
      contactMe: "Contact Me",
      quickHighlights: "Quick Highlights",
      basedIn: "Based in",
    },
    stats: [
      { label: "Completed Projects", value: "4+" },
      { label: "English", value: "IELTS 6.0" },
      { label: "Primary Stack", value: "React + Spring" },
      { label: "Core Focus", value: "Fullstack" },
    ],
    skills: {
      badge: "Technical Proficiency",
      title: "Skills & Tech Stack",
      subtitle:
        "Categorized technologies and tools I utilize to design, develop, and deploy production-ready web applications.",
      techSuffix: "Technologies",
      categories: [
        {
          category: "Frontend Engineering",
          description:
            "Building responsive, component-driven, and scalable user interfaces",
          skills: [
            "React.js",
            "JavaScript ES6+",
            "Tailwind CSS",
            "HTML5 / CSS3",
          ],
        },
        {
          category: "Backend & Database",
          description:
            "Developing robust REST APIs, data models, and backend services",
          skills: [
            "Java & Spring Boot 3",
            "C# / ASP.NET Core 8",
            "Spring Security & JWT",
            "MySQL & MS SQL Server",
          ],
        },
        {
          category: "DevOps & Collaboration",
          description:
            "Version control, agile delivery workflows, and productivity tools",
          skills: [
            "Git & GitHub Flow",
            "Postman API Suite",
            "Agile / Scrum (Jira)",
            "VS Code / Visual Studio",
          ],
        },
      ],
    },
    projects: {
      badge: "Portfolio Showcase",
      title: "Featured Projects",
      subtitle:
        "Real-world web projects demonstrating clean architecture, component modularity, and problem-solving skills.",
      viewAllGithub: "View all repos on GitHub",
      githubRepo: "GitHub Repo",
      liveDemo: "Live Demo",
      items: [
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
      ],
    },
    liveApp: {
      badge: "Live Interactive Application",
      title: "DevTools Suite — 8-in-1 Browser Utilities",
      subtitle:
        "Experience the live tool suite directly right below without leaving the portfolio. Built 100% client-side with React 19, Vite, and Web Audio API.",
      openFullApp: "Open Full App",
      githubRepo: "GitHub Repo",
      interacting: "Interacting Live",
      lockScroll: "Lock Scroll",
      isolatedScrollHint: "(Isolated scroll · Esc to unlock)",
      unlockScrollTitle: "Click to unlock portfolio page scrolling",
      lockScrollTitle: "Click to lock scroll & interact inside application",
      fullscreen: "Fullscreen",
      clickToInteract: "Click to interact & scroll inside",
      scrollAvoidHint: "Prevents page slipping while scrolling portfolio",
    },
    education: {
      badge: "Background & Qualifications",
      title: "Education & Achievements",
      subtitle:
        "Academic background, industry certifications, and language proficiency.",
      items: [
        {
          id: 1,
          type: "education",
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
          title: "IELTS Academic — Overall Band 6.0",
          institution: "IDP / British Council",
          period: "Certified",
          description:
            "Demonstrated effective professional communication skills, technical documentation reading, and international collaboration readiness.",
          tags: ["IELTS 6.0", "Professional English", "Technical Reading"],
        },
      ],
    },
    contact: {
      badge: "Get In Touch",
      title: "Let's Work Together",
      subtitle:
        "I am actively seeking Frontend / Full-stack Intern or Junior Software Engineer roles. If you have an opportunity or simply want to connect, feel free to reach out!",
      copyEmail: "Copy",
      copied: "Copied!",
      sendEmail: "Send",
      viewAndDownloadCv: "View & Download CV (PDF)",
      emailCopiedToast: "Email address copied to clipboard!",
    },
    footer: {
      copyright: "© Nguyen Anh. Built with React, Tailwind CSS & Lucide React.",
      backToTop: "Back to top",
    },
    cvModal: {
      headerTitle: "CV Document:",
      pageBadge: "2 pages",
      download: "Download",
      newTab: "New Tab",
      closeTooltip: "Close (Esc)",
      statusText: "Complete 2-page CV Document",
      downloadDirect: "Download File",
      downloadingToast: "Downloading",
    },
  },
};
