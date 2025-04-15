export const resumeData = {
  personalInfo: {
    name: "John Doe",
    title: "Software Engineer",
    email: "john.doe@example.com",
    phone: "(123) 456-7890",
    location: "San Francisco, California",
    bio: "I specialize in building exceptional digital experiences with a focus on intuitive design and clean code. Currently focused on creating accessible, user-friendly web applications."
  },
  
  socialLinks: {
    github: "https://github.com/",
    linkedin: "https://linkedin.com/",
    twitter: "https://twitter.com/",
    medium: "https://medium.com/"
  },
  
  experiences: [
    {
      title: "Senior Developer",
      company: "Tech Innovations Inc.",
      location: "San Francisco, CA",
      period: "2020 - Present",
      bgColor: "bg-primary",
      dateColor: "text-blue-100",
      responsibilities: [
        "Led a team of 5 developers in building a new customer-facing portal that improved user engagement by 35%",
        "Implemented CI/CD pipelines that reduced deployment time by 40%",
        "Architected and developed RESTful APIs that serve over 1 million requests daily",
        "Mentored junior developers and conducted code reviews to ensure code quality"
      ],
      technologies: ["React", "Node.js", "AWS", "GraphQL"]
    },
    {
      title: "Frontend Developer",
      company: "WebSolutions Co.",
      location: "Los Angeles, CA",
      period: "2018 - 2020",
      bgColor: "bg-secondary",
      dateColor: "text-blue-100",
      responsibilities: [
        "Developed responsive web applications using React and Redux",
        "Improved website performance by 60% through code optimization and lazy loading",
        "Collaborated with UX/UI designers to implement pixel-perfect interfaces",
        "Integrated third-party APIs to enhance application functionality"
      ],
      technologies: ["React", "Redux", "SASS", "Webpack"]
    },
    {
      title: "Junior Developer",
      company: "StartUp Vision",
      location: "Seattle, WA",
      period: "2016 - 2018",
      bgColor: "bg-gray-700",
      dateColor: "text-gray-300",
      responsibilities: [
        "Built and maintained multiple client websites using HTML, CSS, and JavaScript",
        "Assisted in developing a company-wide design system",
        "Created custom WordPress themes and plugins for clients",
        "Conducted cross-browser testing and bug fixes"
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "WordPress"]
    }
  ],
  
  education: [
    {
      degree: "Master's Degree",
      field: "Computer Science",
      institution: "Stanford University",
      period: "2014 - 2016",
      bgColor: "bg-primary",
      dateColor: "text-blue-100",
      description: "Specialized in Artificial Intelligence and Machine Learning. Graduated with honors. Thesis: \"Implementing Neural Networks for Predictive Analysis in Healthcare\"",
      achievements: ["GPA: 3.9/4.0", "Dean's List"]
    },
    {
      degree: "Bachelor's Degree",
      field: "Software Engineering",
      institution: "University of California, Berkeley",
      period: "2010 - 2014",
      bgColor: "bg-secondary",
      dateColor: "text-blue-100",
      description: "Completed with a minor in Business Administration. Active member of the Coding Club and Web Development Society. Senior Project: \"E-commerce Platform with Real-time Inventory Management\"",
      achievements: ["GPA: 3.8/4.0", "Cum Laude"]
    }
  ],
  
  technicalSkills: [
    { name: "JavaScript", level: 95 },
    { name: "React.js", level: 90 },
    { name: "Node.js", level: 85 },
    { name: "HTML/CSS", level: 95 },
    { name: "SQL", level: 80 },
    { name: "Python", level: 75 }
  ],
  
  professionalSkills: [
    { name: "Team Leadership", icon: "fas fa-users", rating: 5 },
    { name: "Project Management", icon: "fas fa-tasks", rating: 4.5 },
    { name: "Communication", icon: "fas fa-comment-dots", rating: 5 },
    { name: "Problem Solving", icon: "fas fa-lightbulb", rating: 5 },
    { name: "Mentoring", icon: "fas fa-chalkboard-teacher", rating: 4.5 },
    { name: "Technical Writing", icon: "fas fa-edit", rating: 4 }
  ],
  
  projects: [
    {
      title: "E-commerce Platform",
      description: "A full-featured online store with product management, cart functionality, and payment processing.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      demoLink: "#",
      githubLink: "#"
    },
    {
      title: "Task Management App",
      description: "A collaborative task manager with real-time updates, drag-and-drop interface, and team assignments.",
      technologies: ["Vue.js", "Firebase", "Vuex", "Tailwind CSS"],
      demoLink: "#",
      githubLink: "#"
    },
    {
      title: "Fitness Tracker",
      description: "A mobile application for tracking workouts, nutrition, and fitness goals with data visualization.",
      technologies: ["React Native", "GraphQL", "D3.js", "Apollo"],
      demoLink: "#",
      githubLink: "#"
    }
  ]
};
