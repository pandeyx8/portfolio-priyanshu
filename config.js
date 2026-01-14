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
            demo: "#"
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
            title: "DSA Practice Tracker",
            description: "A simple web app to track solved DSA problems and progress across platforms like LeetCode and CodeChef.",
            image: "/projects/project-3.webp",
            technologies: ["JavaScript", "React"],
            github: "#",
            demo: "#"
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
            { name: "C++", level: "Intermediate", hot: true },
            { name: "Data Structures & Algorithms", level: "Intermediate", hot: true },
            { name: "STL", level: "Intermediate" }
            ]
        },
        {
            title: "Web Development",
            icon: <HiDatabase />,
            description: "Frontend technologies",
            bgClass: "bg-emerald-500/10",
            iconClass: "text-emerald-500",
            skills: [
            { name: "HTML", level: "Advanced", hot: true },
            { name: "CSS", level: "Advanced" },
            { name: "JavaScript", level: "Intermediate" },
            { name: "React", level: "Beginner" }
            ]
        },
        {
            title: "Tools",
            icon: <HiCube />,
            description: "Development tools",
            bgClass: "bg-orange-500/10",
            iconClass: "text-orange-500",
            skills: [
            { name: "Git & GitHub", level: "Intermediate", hot: true },
            { name: "VS Code", level: "Advanced" }
            ]
        }
    ],
    experiences: [
        {
            position: "Campus Ambassador → Technical Intern",
            company: "TakeUForward (TUF)",
            period: "Jul 2025 – Oct 2025",
            location: "Remote",
            description:
            "Completed a 3-month internship where I transitioned from a Campus Ambassador role into a technical contributor, working closely with the core TUF team.",
            responsibilities: [
            "Conducted pan-India online workshops and preparation sessions on Data Structures and Algorithms",
            "Hosted interactive preparation sessions with the core TUF team to guide students nationwide",
            "Mentored peers on solution design, code optimization, and competitive programming strategies",
            "Contributed to technical presentations, hackathons, and developer outreach initiatives",
            "Drove student engagement and promoted structured DSA learning pathways"
            ],
            technologies: ["DSA", "Competitive Programming", "Workshops", "Mentorship", "Developer Outreach"]
        },
        {
            position: "Outreach Coordinator (Formerly Event Manager)",
            company: "Arunoday Club, IIIT Bhopal",
            period: "Dec 2023 – Present",
            location: "Bhopal, India",
            description:
            "Led outreach, planning, and execution of large-scale social and technical events at the institute level.",
            responsibilities: [
            "Spearheaded planning and execution of social and technical events with 200+ participants",
            "Managed logistics, volunteer teams, and event operations",
            "Handled outreach and coordination to ensure smooth event execution",
            "Demonstrated leadership, teamwork, and public speaking skills"
            ],
            technologies: ["Leadership", "Event Management", "Public Speaking", "Team Coordination"]
        }
    ],
    codingProfiles: [
        {
            id: 1,
            platform: "LeetCode",
            username: "pandeyxd",
            rating: "1700+",
            stats: "",
            link: "https://leetcode.com/u/pandeyxd/"
        },
        {
            id: 2,
            platform: "CodeForces",
            username: "pandey_x8",
            rating: "1100+",
            stats: "",
            link: "https://codeforces.com/profile/pandey_x8"
        },
        {
            id: 3,
            platform: "Code Chef",
            username: "pandeyxd",
            rating: "1700+",
            stats: "",
            link: "https://www.codechef.com/users/pandeyxd"
        },
        {
            id: 4,
            platform: "Codolio",
            username: "pandeyxd",
            rating: "",
            stats: "600+ Problems Solved",
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