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
    imageUrl: "public/project-thumbnails/CL.jpg",
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    id: 2,
    title: "Chehre AI Pipeline",
    description: "Built end-to-end PyTorch pipelines for dataset ingestion, preprocessing, and model training to support emotion-analysis models for SFU Rosie Lab.",
    technologies: ["Python", "PyTorch", "Pandas", "OpenCV", "AWS"],
    imageUrl: "public/project-thumbnails/chehre.jpeg",
    githubUrl: "https://github.com/audrey-sk/Chehre-preprocessing.git",
    liveUrl: "#"
  },
  {
    id: 3,
    title: "Plan A",
    description: "A cross-functional, clinician-facing tool recommending contraceptive alternatives based on patient symptoms.",
    technologies: ["UBC nwHacks 2025", "React"],
    imageUrl: "public/project-thumbnails/plan A.png",
    githubUrl: "https://devpost.com/software/plan-a-2064j9",
    liveUrl: "#"
  },
  {
    id: 4,
    title: "Endangered Animal Detector",
    description: "This system is designed to track and assess the vulnerability of endangered species based on image input. It identifies the animal in the image by using a CNN to classify it into one of 10 known categories using a custom-trained Convolutional Neural Network (CNN).",
    technologies: ["Python", "TensorFlow/Keras", "ResNet50", "Pandas", "Transfer Learning"],
    imageUrl: "public/project-thumbnails/endangeredAnimals.png",
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    id: 5,
    title: "2Cents",
    description: "An AI financial advisor using Gemini API and Plaid API to fetch and visualize real-time banking transactions.",
    technologies: ["React", "Plaid API", "Gemini Api", "Jest"],
    imageUrl: "public/project-thumbnails/2cents.png",
    githubUrl: "https://github.com/CMPT-276-SPRING-2025/final-project-14-clouds",
    liveUrl: "#"
  },
  {
    id: 6,
    title: "Never gonna let you browse",
    description: "Just for fun!",
    technologies: ["Mountain Madness 2025 Winner", "Chrome Extension", "JavaScript"],
    imageUrl: "public/project-thumbnails/nglub.png",
    githubUrl: "https://devpost.com/software/never-gonna-let-you-browse",
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
    role: "Frontend Developer",
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

