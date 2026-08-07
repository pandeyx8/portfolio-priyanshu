import { FaDiscord, FaGithub, FaMapPin } from "react-icons/fa";
import { HiCode, HiCube, HiDatabase, HiMail, HiBriefcase } from "react-icons/hi";

export const config = {
    developer: {
        name: "Priyanshu Pandey",
    },
    social: {
        github: "pandeyx8",
        discord: null
    },
    NAV_ITEMS: [
        { href: '/contact', label: 'Contact' }
    ],
    recentTracks: true, // Enable/disable Spotify recent tracks
    projects: [
        {
            id: 1,
            title: "E-Commerce Frontend Clone",
            description: "A fully responsive e-commerce frontend project built using HTML, CSS, and JavaScript with product listing, cart management, and order total calculation. Features add-to-cart functionality, cart quantity updates, and persistent cart data using JavaScript.",
            image: "/projects/project-1.png",
            technologies: ["HTML", "CSS", "JavaScript"],
            github: "https://github.com/pandeyx8/frontend-clone--amazon-",
            demo: "https://pandeyx8.github.io/frontend-clone--amazon-/",

        },
        {
            id: 2,
            title: "Rock Paper Scissors Game",
            description: "A browser-based Rock Paper Scissors game with interactive UI and game logic implemented using JavaScript.",
            image: "/projects/project-2.png",
            technologies: ["HTML", "CSS", "JavaScript"],
            github: "https://github.com/pandeyx8/rock-paper-scissor-game",
            demo: "https://pandeyx8.github.io/rock-paper-scissor-game/"
        },
        {
            id: 3,
            title: "Color Change Game",
            description: "A fun browser game where players quickly match changing color prompts, testing reaction speed and focus with smooth interactive gameplay.",
            image: "/projects/color-change.png",
            technologies: ["HTML", "CSS", "JavaScript"],
            github: "https://github.com/pandeyx8/change-color-game",
            demo: "https://color-change-game.vercel.app/",

        },
        {
            id: 4,
            title: "Finance Role-Based Management System",
            description: "Built a secure backend implementing RBAC for Viewer, Analyst, and Admin roles with JWT-based authentication. Developed financial record and dashboard APIs with user-scoped data access, and enforced ownership-based authorization.",
            technologies: ["Node.js", "Express.js", "MongoDB", "JWT"],
            github: "https://github.com/pandeyx8/finance-rbac-backend",
            demo: "#"
        },
        {
            id: 5,
            title: "Loan Management System",
            description: "Architected a full-stack loan processing platform supporting 6 operational roles. Implemented a server-side Business Rule Engine (BRE) validating eligibility criteria and engineered REST APIs for the complete loan lifecycle.",
            technologies: ["Next.js", "Express.js", "TypeScript", "MongoDB", "JWT"],
            github: "https://github.com/pandeyx8/LMS",
            demo: "https://lms-gold-kappa.vercel.app",
            pinned: true
        }
    ],
    skills: [
        {
            title: "Programming & DSA",
            icon: <HiCode />,
            description: "Problem solving & core concepts",
            bgClass: "bg-blue-500/10",
            iconClass: "text-blue-500",
            skills: [
                { name: "C", level: "Advanced", hot: true },
                { name: "C++", level: "Advanced", hot: true },
                { name: "Python", level: "Intermediate" },
                { name: "HTML/CSS", level: "Advanced" },
                { name: "JavaScript", level: "Advanced", hot: true },
                { name: "Data Structures & Algorithms", level: "Advanced", hot: true }
            ]
        },
        {
            title: "Web Development",
            icon: <HiDatabase />,
            description: "Frontend & Backend technologies",
            bgClass: "bg-emerald-500/10",
            iconClass: "text-emerald-500",
            skills: [
                { name: "React.js", level: "Intermediate", hot: true },
                { name: "Next.js", level: "Intermediate", hot: true },
                { name: "Node.js", level: "Intermediate", hot: true },
                { name: "Express.js", level: "Intermediate" },
                { name: "Tailwind CSS", level: "Intermediate" },
                { name: "MongoDB", level: "Intermediate" },
                { name: "MySQL", level: "Intermediate" },
                { name: "PostgreSQL", level: "Intermediate" },
                { name: "REST APIs", level: "Intermediate", hot: true },
                { name: "JWT Auth & RBAC", level: "Intermediate" }
            ]
        },
        {
            title: "Tools",
            icon: <HiCube />,
            description: "Development & Deployment tools",
            bgClass: "bg-orange-500/10",
            iconClass: "text-orange-500",
            skills: [
                { name: "Git", level: "Intermediate", hot: true },
                { name: "GitHub", level: "Intermediate", hot: true },
                { name: "Postman", level: "Intermediate" },
                { name: "Vercel", level: "Intermediate" },
                { name: "Render", level: "Intermediate" },
                { name: "Netlify", level: "Intermediate" }
            ]
        }
    ],
    experiences: [
        {
            position: "Intern",
            company: "TakeUForward (TUF)",
            period: "Jul 2025 – Oct 2025",
            location: "Remote",
            description:
                "Worked as a technical intern, developing and optimizing problems for structured learning tracks.",
            responsibilities: [
                "Developed and optimized 100+ DSA problems for structured learning tracks at TakeUForward.",
                "Designed 20+ edge-case test scenarios and validated solutions to ensure correctness and robustness.",
                "Delivered an All-India hackathon session demonstrating how DSA improves solution design and optimization."
            ],
            technologies: ["DSA", "Competitive Programming", "Problem Setting", "Testing", "Solution Design"]
        },
        {
            position: "Outreach Lead (Former Event Manager)",
            company: "Arunoday Club, IIIT Bhopal",
            period: "Jul 2025 – Present",
            location: "Bhopal, India",
            description:
                "Led outreach and promotions for various events and workshops.",
            responsibilities: [
                "Led outreach and promotions for 4+ events and workshops, increasing student participation and engagement.",
                "Spearheaded planning and execution of social and technical events with 200+ participants.",
                "Managed logistics, volunteer teams, and event operations."
            ],
            technologies: ["Leadership", "Event Management", "Outreach", "Team Coordination"]
        },
        {
            position: "Content Lead",
            company: "IIIT Bhopal Magazine Team",
            period: "Dec 2025 – Present",
            location: "Bhopal, India",
            description:
                "Led content planning, editing, and publication of the institute magazine.",
            responsibilities: [
                "Led content planning, editing, and publication of 2 institute magazine editions."
            ],
            technologies: ["Content Strategy", "Editing", "Publication", "Leadership"]
        }
    ],
    codingProfiles: [
        {
            id: 1,
            platform: "LeetCode",
            username: "pandeyxd",
            rating: "Rank 405/30,000+",
            stats: "Solved 700+ DSA problems",
            link: "https://leetcode.com/u/pandeyxd/"
        },
        {
            id: 2,
            platform: "CodeForces",
            username: "pandey_x8",
            rating: "Pupil (1200+)",
            stats: "",
            link: "https://codeforces.com/profile/pandey_x8"
        },
        {
            id: 3,
            platform: "Code Chef",
            username: "pandeyxd",
            rating: "3-Star (1750+)",
            stats: "Global Rank 73/24,000+ in Starters",
            link: "https://www.codechef.com/users/pandeyxd"
        },
        {
            id: 4,
            platform: "Codolio",
            username: "pandeyxd",
            rating: "Tech Fellowship",
            stats: "Qualified AlgoUniversity 2024 (Top 1000/20000)",
            link: "https://codolio.com/profile/pandeyxd"
        },
        {
            id: 5,
            platform: "LinkedIn",
            username: "",
            rating: "",
            stats: "Professional profile",
            link: "https://www.linkedin.com/in/priyanshu-pandey-958376290/"
        },
        {
            id: 6,
            platform: "GitHub",
            username: "pandeyx8",
            rating: "",
            stats: "Open source and repos",
            link: "https://github.com/pandeyx8"
        }
    ],
    contactInfo: [

        {
            icon: <FaGithub className="w-5 h-5" />,
            label: "GitHub",
            value: "@pandeyx8",
            link: `https://github.com/pandeyx8`
        },
        {
            icon: <HiMail className="w-5 h-5" />,
            label: "Email",
            value: "pandeypriyanshu4556@gmail.com",
            link: "mailto:pandeypriyanshu4556@gmail.com"
        },
        {
            icon: <FaMapPin className="w-5 h-5" />,
            label: "Location",
            value: "Bhopal, MP, India",
            link: null
        }
    ]
}