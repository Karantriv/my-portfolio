import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Mail, ExternalLink, ChevronDown } from 'lucide-react';

const GithubIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);
import '@fontsource/inter';

const App = () => {
  // Custom Cursor state
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      if (['A', 'BUTTON'].includes(e.target.tagName) || e.target.closest('a') || e.target.closest('button')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  const fadeUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  return (
    <div className={`relative min-h-screen font-sans bg-obsidian text-gray-200 selection:bg-neonTeal selection:text-obsidian ${isHovering ? 'cursor-hover' : ''}`}>
      
      {/* Custom Cursor */}
      <div 
        className="custom-cursor-dot hidden md:block"
        style={{ left: `${cursorPos.x}px`, top: `${cursorPos.y}px` }}
      />
      <div 
        className="custom-cursor-glow hidden md:block"
        style={{ left: `${cursorPos.x}px`, top: `${cursorPos.y}px` }}
      />

      {/* Sticky Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-obsidian/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#" className="text-xl font-bold tracking-tighter text-white">
            K<span className="text-neonTeal">.</span>
          </a>
          <div className="hidden md:flex gap-8 text-sm font-medium">
            <a href="#about" className="hover:text-neonTeal transition-colors">About</a>
            <a href="#projects" className="hover:text-neonTeal transition-colors">Projects</a>
            <a href="#experience" className="hover:text-neonTeal transition-colors">Experience</a>
            <a href="#contact" className="hover:text-neonTeal transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Main Content Container */}
      <main className="max-w-6xl mx-auto px-6 pt-32 pb-24 space-y-40">
        
        {/* Hero Section */}
        <section id="hero" className="min-h-[80vh] flex flex-col justify-center items-start">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <p className="text-neonTeal font-medium mb-4 tracking-wide">Hi, I'm</p>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
              Karan. <br />
              <span className="text-gray-500">I build intelligent systems.</span>
            </h1>
            
            <div className="text-lg md:text-xl text-gray-400 mb-10 h-16">
              <TypeAnimation
                sequence={[
                  'Final-year CSE (IoT) student.',
                  1000,
                  'Qualified GATE DA 2026.',
                  1000,
                  'AI/ML Developer.',
                  1000,
                  '500+ LeetCode Challenges Conquered.',
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </div>

            <div className="flex flex-wrap gap-4">
              <a href="#projects" className="px-6 py-3 bg-neonTeal text-obsidian font-semibold rounded-none hover:bg-white transition-colors duration-300">
                View Work
              </a>
              <a href="/Karan_Trivedi_resume.pdf" target="_blank" rel="noreferrer" className="px-6 py-3 border border-gray-600 text-gray-300 hover:border-neonTeal hover:text-neonTeal transition-colors duration-300">
                Download Resume
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute bottom-10 left-6 animate-bounce"
          >
            <a href="#about" className="text-gray-500 hover:text-neonTeal transition-colors">
              <ChevronDown size={24} />
            </a>
          </motion.div>
        </section>

        {/* About Section */}
        <motion.section 
          id="about" 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUpVariant}
          className="grid grid-cols-1 md:grid-cols-12 gap-12 pt-20"
        >
          <div className="md:col-span-5">
            <h2 className="text-sm font-bold tracking-widest text-gray-500 uppercase mb-4">01. About Me</h2>
            <h3 className="text-3xl font-bold text-white mb-6">Bridging hardware and intelligence.</h3>
          </div>
          <div className="md:col-span-7 space-y-6 text-gray-300 leading-relaxed">
            <p>
              I'm a final-year Computer Science Engineering student specializing in IoT. I am passionate about the intersection of artificial intelligence and physical systems, building everything from fraud detection algorithms to smart IoT applications.
            </p>
            <p>
              When I'm not training models or debugging React components, I'm constantly exploring new ways to make software more intuitive and impactful.
            </p>
            
            <div className="pt-6 flex flex-wrap gap-2">
              {['Python', 'Java', 'React', 'SQL', 'PyTorch', 'AWS', 'Firebase', 'Machine Learning'].map(skill => (
                <span key={skill} className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm font-medium hover:border-neonTeal hover:text-neonTeal transition-colors">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Projects Section */}
        <motion.section 
          id="projects"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUpVariant}
          className="pt-20"
        >
          <div className="mb-16">
            <h2 className="text-sm font-bold tracking-widest text-gray-500 uppercase mb-4">02. Selected Work</h2>
            <h3 className="text-3xl font-bold text-white">Things I've built.</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Project 1 - Phoenix: Multi-Model AI Chatbot */}
            <div className="group relative bg-white/5 p-8 border border-white/10 hover:border-neonTeal/50 transition-all duration-500 hover:-translate-y-2">
              <div className="absolute inset-0 bg-neonTeal/0 group-hover:bg-neonTeal/5 transition-colors duration-500 pointer-events-none"></div>
              <div className="flex justify-between items-start mb-6">
                <h4 className="text-2xl font-bold text-white group-hover:text-neonTeal transition-colors">Phoenix: AI Chatbot</h4>
                <div className="flex gap-4">
                  <a href="https://github.com/Karantriv/phoeniX" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white"><GithubIcon size={20} /></a>
                  <a href="https://kphoenix.vercel.app/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white"><ExternalLink size={20} /></a>
                </div>
              </div>
              <p className="text-gray-400 mb-6 line-clamp-3">
                Multi-model AI chatbot integrating LLM providers (Gemini) with model switching and chat history using React + Firebase + Python API. Recorded <span className="text-white font-medium">31% voice</span> and <span className="text-white font-medium">18% image inputs</span> across 213 sessions.
              </p>
              <div className="flex flex-wrap gap-3 text-xs font-medium text-gray-500">
                <span>React</span>
                <span>Firebase</span>
                <span>Python</span>
                <span>Gemini API</span>
              </div>
            </div>

            {/* Project 2 - Automated OS Voice Assistant */}
            <div className="group relative bg-white/5 p-8 border border-white/10 hover:border-neonTeal/50 transition-all duration-500 hover:-translate-y-2 md:mt-16">
              <div className="absolute inset-0 bg-neonTeal/0 group-hover:bg-neonTeal/5 transition-colors duration-500 pointer-events-none"></div>
              <div className="flex justify-between items-start mb-6">
                <h4 className="text-2xl font-bold text-white group-hover:text-neonTeal transition-colors">OS Voice Assistant</h4>
                <a href="https://github.com/Karantriv/partner" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white"><GithubIcon size={20} /></a>
              </div>
              <p className="text-gray-400 mb-6 line-clamp-3">
                A modular voice assistant automating <span className="text-white font-medium">10+ OS commands</span> (app launch, file ops, scheduling, API calls) using a command registry pattern with structured exception handling and pytest coverage.
              </p>
              <div className="flex flex-wrap gap-3 text-xs font-medium text-gray-500">
                <span>Python</span>
                <span>pytest</span>
                <span>OS Modules</span>
              </div>
            </div>

            {/* Project 3 - TeamTask Manager */}
            <div className="group relative bg-white/5 p-8 border border-white/10 hover:border-neonTeal/50 transition-all duration-500 hover:-translate-y-2">
              <div className="absolute inset-0 bg-neonTeal/0 group-hover:bg-neonTeal/5 transition-colors duration-500 pointer-events-none"></div>
              <div className="flex justify-between items-start mb-6">
                <h4 className="text-2xl font-bold text-white group-hover:text-neonTeal transition-colors">TeamTask Manager</h4>
                <div className="flex gap-4">
                  <a href="https://github.com/Karantriv/TEAMTASK" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white"><GithubIcon size={20} /></a>
                  <a href="https://teamtask.up.railway.app/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white"><ExternalLink size={20} /></a>
                </div>
              </div>
              <p className="text-gray-400 mb-6 line-clamp-3">
                A high-performance MERN task management platform featuring a real-time dashboard, local-first analytics, and client-side asset compression.
              </p>
              <div className="flex flex-wrap gap-3 text-xs font-medium text-gray-500">
                <span>React</span>
                <span>Express.js</span>
                <span>MongoDB</span>
                <span>Zustand</span>
              </div>
            </div>

            {/* Project 4 - Credit Card Fraud Detection Pipeline */}
            <div className="group relative bg-white/5 p-8 border border-white/10 hover:border-neonTeal/50 transition-all duration-500 hover:-translate-y-2 md:mt-16">
              <div className="absolute inset-0 bg-neonTeal/0 group-hover:bg-neonTeal/5 transition-colors duration-500 pointer-events-none"></div>
              <div className="flex justify-between items-start mb-6">
                <h4 className="text-2xl font-bold text-white group-hover:text-neonTeal transition-colors">Credit Card Fraud Detection</h4>
                <a href="https://github.com/Karantriv" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white"><GithubIcon size={20} /></a>
              </div>
              <p className="text-gray-400 mb-6 line-clamp-3">
                End-to-end ML pipeline for highly imbalanced transaction classification. Achieved <span className="text-white font-medium">AUPRC 0.073</span> (36× lift) and <span className="text-white font-medium">ROC-AUC 0.962</span> with tuned threshold reaching fraud recall 82% at precision 79%.
              </p>
              <div className="flex flex-wrap gap-3 text-xs font-medium text-gray-500">
                <span>Python</span>
                <span>Scikit-Learn</span>
                <span>Pandas</span>
                <span>NumPy</span>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Experience Section */}
        <motion.section 
          id="experience"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUpVariant}
          className="max-w-3xl pt-20"
        >
          <div className="mb-12">
            <h2 className="text-sm font-bold tracking-widest text-gray-500 uppercase mb-4">03. Experience</h2>
          </div>

          <div className="relative border-l border-white/10 pl-8 ml-4 space-y-12">
            {/* Outlier.ai */}
            <div className="relative">
              <span className="absolute -left-[41px] top-1 w-5 h-5 rounded-full border-4 border-obsidian bg-neonTeal"></span>
              <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
                <h4 className="text-xl font-bold text-white">AI Data Evaluator & Model Trainer <span className="text-neonTeal">@ Outlier AI</span></h4>
                <span className="text-sm text-gray-500 font-medium">Oct 2024 - Jan 2025</span>
              </div>
              <ul className="list-none space-y-2 text-gray-400 mt-4">
                <li className="relative pl-4 before:content-['▹'] before:absolute before:left-0 before:text-neonTeal">
                  Maintained a consistent <span className="text-white font-medium">95% QA score</span> by strictly adhering to gold-standard evaluation benchmarks for LLMs.
                </li>
                <li className="relative pl-4 before:content-['▹'] before:absolute before:left-0 before:text-neonTeal">
                  Enhanced model training outcomes by providing precise annotations and structured feedback on reasoning quality, correctness, and instruction adherence.
                </li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* Skills Section */}
        <motion.section 
          id="skills"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUpVariant}
          className="pt-20"
        >
          <div className="mb-12">
            <h2 className="text-sm font-bold tracking-widest text-gray-500 uppercase mb-4">04. Technical Arsenal</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h4 className="text-white font-semibold border-b border-white/10 pb-2">Languages & Concepts</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Python, Java, JavaScript</li>
                <li>SQL, HTML/CSS</li>
                <li>OOPs, DBMS, SDLC</li>
                <li>API Integration</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-white font-semibold border-b border-white/10 pb-2">Frameworks & Cloud</h4>
              <ul className="space-y-2 text-gray-400">
                <li>React, Tailwind CSS</li>
                <li>PyTorch, Pandas, NumPy</li>
                <li>AWS, Firebase</li>
                <li>MySQL Workbench</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-white font-semibold border-b border-white/10 pb-2">Certifications</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>Agentic AI (LangGraph/Langchain)</li>
                <li>Generative AI Productivity</li>
                <li>Salesforce AI Agentforce</li>
                <li>Microsoft/LinkedIn AI Skills</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-white font-semibold border-b border-white/10 pb-2">Education</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="text-white font-medium">B.Tech in CSE [IoT]</li>
                <li>PSIT Kanpur (AKTU)</li>
                <li className="text-neonTeal">CGPA: 8.2</li>
                
              </ul>
            </div>
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section 
          id="contact"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUpVariant}
          className="text-center max-w-2xl mx-auto pt-40 pb-10"
        >
          <h2 className="text-sm font-bold tracking-widest text-neonTeal uppercase mb-4">05. What's Next?</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">Get In Touch</h3>
          <p className="text-gray-400 mb-10">
            Currently looking for new opportunities as a Software Engineer or AI Developer. 
            Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          <a href="mailto:trivedikaran896@gmail.com" className="inline-block px-8 py-4 border border-neonTeal text-neonTeal hover:bg-neonTeal/10 transition-colors duration-300 font-medium">
            Say Hello
          </a>

          <div className="mt-20 flex justify-center gap-6">
            <a href="https://github.com/Karantriv" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-neonTeal transition-colors"><GithubIcon size={24} /></a>
            <a href="https://linkedin.com/in/karan-trivedi1105" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-neonTeal transition-colors"><LinkedinIcon size={24} /></a>
            <a href="https://leetcode.com/u/Karan_Trivedi/" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-neonTeal transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 16H4a2 2 0 0 1-2-2V6" />
                <path d="M16.5 9.4 7.55 4.24" />
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
              </svg>
            </a>
            <a href="mailto:trivedikaran896@gmail.com" className="text-gray-500 hover:text-neonTeal transition-colors"><Mail size={24} /></a>
          </div>
          <p className="mt-8 text-sm text-gray-600 font-mono">
            Designed & Built by Karan
          </p>
        </motion.section>
      </main>
    </div>
  );
};

export default App;
