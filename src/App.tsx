import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Download, ChevronRight, Terminal, MapPin, Calendar, Briefcase, Heart } from 'lucide-react';
import Navbar from './components/Navbar';
import { PERSONAL_INFO, PROJECTS, EXPERIENCE, VOLUNTEER } from './constants';

const App: React.FC = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const roles = [
    "Software Developer",
    "Machine Learning Engineer",
    "HCI Researcher",
    "CS Student @ SFU"
  ];

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % roles.length;
      const fullText = roles[i];

      setText(isDeleting 
        ? fullText.substring(0, text.length - 1) 
        : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 30 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1500); // Pause at end
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, roles]);

  return (
    <div className="min-h-screen bg-dark text-slate-200 selection:bg-primary/30 selection:text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* Animated Background Blobs */}
        <div className="absolute top-0 -left-4 w-72 h-72 bg-primary/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-secondary/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-600/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">{PERSONAL_INFO.name}</span>
          </h1>

          <div className="h-10 md:h-12 mb-8">
            <p className="text-2xl md:text-4xl font-mono text-slate-300">
              I am a <span className="text-primary">{text}</span>
              <span className="animate-pulse border-r-2 border-primary ml-1">&nbsp;</span>
            </p>
          </div>
          
          <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mb-10 leading-relaxed">
            {PERSONAL_INFO.tagline}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#projects" className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-gradient-to-r from-primary to-secondary hover:opacity-90 rounded-full transition-all hover:scale-105 shadow-lg shadow-primary/25">
              View Projects
              <ChevronRight className="ml-2 w-4 h-4" />
            </a>
            <a 
            href={`mailto:${PERSONAL_INFO.email}`}
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-primary to-secondary rounded-full transition-transform hover:scale-105 shadow-lg shadow-primary/25"
          >
            <Mail className="w-5 h-5 mr-2" />
            Say Hello
          </a>
          </div>

          <div className="mt-16 flex items-center gap-6 text-slate-400">
            <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-primary transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

     

      {/* Experience Section */}
      <section id="experience" className="py-24 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Work Experience</h2>
          <div className="max-w-3xl mx-auto space-y-12">
            {EXPERIENCE.map((exp) => (
              <div key={exp.id} className="relative pl-8 border-l border-slate-700">
                <div className="absolute -left-3 top-0 p-1 bg-dark rounded-full border border-slate-700">
                  <div className="w-4 h-4 bg-primary rounded-full"></div>
                </div>
                <div className="mb-1 text-sm text-primary font-medium flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {exp.period}
                </div>
                <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>
                <div className="text-slate-400 mb-4 flex items-center gap-2">
                  <Briefcase className="w-4 h-4" />
                  {exp.company}
                </div>
                <ul className="list-disc list-inside space-y-2 text-slate-300 text-sm leading-relaxed">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer Section */}
      <section id="volunteer" className="py-24 bg-dark/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Community & Leadership</h2>
          <div className="max-w-3xl mx-auto">
             {VOLUNTEER.map((vol) => (
               <div key={vol.id} className="bg-slate-800 rounded-2xl p-8 border border-slate-700 hover:border-secondary/50 transition-colors">
                 <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                   <div>
                     <h3 className="text-xl font-bold text-white">{vol.role}</h3>
                     <p className="text-secondary flex items-center gap-2 mt-1">
                       <Heart className="w-4 h-4" />
                       {vol.company}
                     </p>
                   </div>
                   <span className="inline-block mt-2 md:mt-0 px-3 py-1 bg-slate-700 rounded-full text-xs text-slate-300">
                     {vol.period}
                   </span>
                 </div>
                 <ul className="space-y-2 text-slate-300">
                    {vol.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="mt-2 w-1.5 h-1.5 bg-secondary rounded-full flex-shrink-0 mr-1" />
                        <span>{item}</span>
                      </li>
                    ))}
                 </ul>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Featured Projects</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Selected works.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project) => (
              <div key={project.id} className="group bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 hover:border-primary/50 transition-all hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-dark/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                    <a href={project.githubUrl} className="p-2 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-primary transition-colors">
                      <Github className="w-5 h-5" />
                    </a>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-slate-400 text-sm mb-4 line-clamp-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="text-xs px-2 py-1 rounded-full bg-slate-700 text-primary-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Footer */}
      <footer className="py-8 bg-slate-900 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
          </p>
          <p className="text-slate-600 text-sm flex items-center gap-1">
            Built with <span className="text-primary">React</span>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;