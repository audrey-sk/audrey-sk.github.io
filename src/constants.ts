import { Project, Experience } from './types';

export const PERSONAL_INFO = {
  name: "Audrey Safikhani",
  title: "B.Sc. Computer Science Student",
  tagline: "I'm an undergraduate student studying Computer Science & Cognitive Science at SFU. \n I'm assionate about Machine Learning, HCI, and Software Development.",
  email: "psa159@sfu.ca",
  github: "https://github.com/audrey-sk",
  linkedin: "https://www.linkedin.com/in/audrey-safikhani/",  
  location: "Vancouver, BC, Canada"
};

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "CarbonLens",
    description: " A multi-platform tool that quantifies software carbon footprints using Azure.",
    technologies: ["Microsoft Ideathon 2025 Winner"],
    imageUrl: "Public/project-thumbnails/CL.jpg",
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    id: 2,
    title: "Chehre AI Pipeline",
    description: "Built end-to-end PyTorch pipelines for dataset ingestion, preprocessing, and model training to support emotion-analysis models for SFU Rosie Lab.",
    technologies: ["Python", "PyTorch", "Pandas", "OpenCV", "AWS"],
    imageUrl: "Public/project-thumbnails/chehre.jpeg",
    githubUrl: "https://github.com/audrey-sk/Chehre-preprocessing.git",
    liveUrl: "#"
  },
  {
    id: 3,
    title: "Plan A",
    description: "A cross-functional, clinician-facing tool recommending contraceptive alternatives based on patient symptoms with backend integration.",
    technologies: ["UBC nwHacks 2025", "React", "API Integration"],
    imageUrl: "Public/project-thumbnails/plan A.png",
    githubUrl: "#",
    liveUrl: "#"
  }
  
];

export const EXPERIENCE: Experience[] = [
  {
    id: 1,
    role: "Website Developer (Full Stack)",
    company: "The Peak Publications",
    period: "Aug 2025 – Present",
    description: [
      "Maintained and enhanced full-stack website infrastructure to improve platform reliability for 1,000+ monthly users.",
    ]
  },
  {
    id: 2,
    role: "HCI Research Assistant",
    company: "Tangent Lab (HCI Research Group)",
    period: "Sept 2025 – Present",
    description: [
      "Conducting mixed-method research on VR as an assistive tool for students with ADHD.",
    ]
  },
  {
    id: 3,
    role: "Website Developer",
    company: "Canadian Undergraduate Journal of Cognitive Science",
    period: "Mar 2025 – Jun 2025",
    description: [
      "Developed responsive features for the journal’s website using TypeScript and TailwindCSS.",
    ]
  },
  {
    id: 4,
    role: "Data and Machine Learning Engineer",
    company: "SFU Rosie Lab",
    period: "Jan 2025 – May 2025",
    description: [
      "Automated large-scale processing for 1,000+ AWS videos, implementing face masking and embedding extraction.",
    ]
  }
];

export const VOLUNTEER: Experience[] = [
  {
    id: 1,
    role: "Director of Marketing",
    company: "SFU Women in Computing Science (WiCS)",
    period: "May 2025 – Present",
    description: [
        "Lead digital campaigns promoting social, technical, mentorship, and networking events aimed at increasing women’s participation in computing."
    ]
      
  },

  {
    id: 2,
    role: "Calculus Tutor",
    company: "SFU Department of Mathematics",
    period: "Sep 2024 - Dec 2024",
    description: [
      "Assisted the TA team in conducting seminars for first-year calculus courses.",
      "Organized and led study sessions to help students prepare for midterms and finals."
    ]
  }
];

