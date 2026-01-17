export const RESUME_PATH = "/My_Assets/Siddarood_Resume_Latest.pdf";
export const MY_IMAGE_PATH = "/My_Assets/Siddarood_Image.jpg";

export const WORK_HISTORY = [
    {
        company: "Infosys",
        role: "Operations Executive",
        startDate: "2021-11-25",
        endDate: "2022-12-25",
    },
    {
        company: "Caliber",
        role: "Software Engineer",
        startDate: "2023-11-20",
        endDate: null,
    }
];

export const STATS_TEMPLATE = [
    {
        id: 'experience',
        icon: 'bi-briefcase-fill',
        color: 'var(--primary)', // Link to your theme!
        label: 'Years Experience'
    },
    {
        id: 'awards',
        icon: 'bi-trophy-fill',
        color: '#ffc107',
        text: 'Hackathon Winner'
    },
    {
        id: 'automation',
        icon: 'bi-cpu-fill',
        color: '#2ea043',
        text: '60% Manual Effort Automated'
    }
];

export const EXPERIENCES = [
    {
        company: "Caliber Technologies",
        role: "Software Engineer",
        duration: "Nov 2023 - Present", // [cite: 15, 19]
        description: "Contributing to the migration of the legacy VB.NET system to .NET Core (C#) improving maintainability, scalability, and performance.", // [cite: 20]
        highlights: [
            "Reduced patch deployment time by over 60% using automated DACPAC deployments.", // [cite: 22]
            "Cut manual effort by 80% through automated bash and shell scripts.", // [cite: 23]
            "Won 1st place in company-wide hackathon with an automated user transaction mailing system (1 Lakh prize).", // [cite: 29, 30]
            "Deployed IIS-hosted applications to AWS Linux for cloud-based scalability." // [cite: 27]
        ]
    },
    {
        company: "Infosys",
        role: "Operations Executive",
        duration: "Nov 2021 - Dec 2022", // [cite: 31, 32]
        description: "Managed financial process accuracy and client transaction resolutions while upskilling in Full Stack .NET technologies.", // [cite: 35, 36]
        highlights: [
            "Interacted with clients to resolve payment and transaction-related issues.", // [cite: 33]
            "Ensured data accuracy and compliance with internal standards.", // [cite: 35]
            "Successfully transitioned into software development via self-learning." // [cite: 36]
        ]
    }
];


export const SKILLCATEGORIES = [
    {
        title: "Backend Development",
        icon: "bi-layers-half",
        skills: ["C#", ".NET Core", "ASP.NET Web API", "EF Core", "LINQ", "Dapper", "ADO.NET"]
    },
    {
        title: "Frontend & UI",
        icon: "bi-window-sidebar",
        skills: ["React.js", "JavaScript (ES6+)", "Bootstrap", "HTML5 & CSS3", "jQuery"]
    },
    {
        title: "Database & Cloud",
        icon: "bi-database-fill-check",
        skills: ["SQL Server", "T-SQL", "Query Optimization", "DACPAC", "AWS (EC2, S3)", "Docker"]
    }
];
