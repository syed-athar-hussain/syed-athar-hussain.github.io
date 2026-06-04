import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Briefcase, ChevronRight, Download, X } from 'lucide-react';
import { profile, experience, education, projects } from './data';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export default function Home() {
  const [filter, setFilter] = useState('All');
  const [headlineIdx, setHeadlineIdx] = useState(0);
  const [isResumeModalOpen, setResumeModalOpen] = useState(false);
  
  const categories = ['All', 'Java Projects', 'Data Science', 'ML Projects'];
  const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeadlineIdx((prev) => (prev + 1) % profile.headlines.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const handleDownload = (role) => {
    // In production, replace alert with actual file logic: window.open(`/resumes/${role}_Resume.pdf`, '_blank');
    alert(`Initiating download for: ${role} Resume`);
    setResumeModalOpen(false);
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully.");
    e.target.reset();
  };

  return (
    <div className="bg-primary text-light selection:bg-accent selection:text-white pb-20">
      
      {/* Resume Download Modal */}
      <AnimatePresence>
        {isResumeModalOpen && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 backdrop-blur-sm px-4">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }}
              className="bg-slate-900 border border-slate-700 p-6 rounded-lg w-full max-w-md shadow-2xl"
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-white">Select the Role</h3>
                <button onClick={() => setResumeModalOpen(false)} className="text-secondary hover:text-white transition-colors"><X size={20} /></button>
              </div>
              <p className="text-sm text-secondary mb-6">Which role you are hiring for?</p>
              <div className="space-y-3 font-mono text-sm">
                <button onClick={() => handleDownload('Machine_Learning')} className="w-full text-left px-4 py-3 bg-slate-800 hover:bg-accent hover:text-primary transition-colors rounded border border-slate-700">Machine Learning Engineer</button>
                <button onClick={() => handleDownload('Backend_Java')} className="w-full text-left px-4 py-3 bg-slate-800 hover:bg-accent hover:text-primary transition-colors rounded border border-slate-700">Backend / Java Engineer</button>
                <button onClick={() => handleDownload('Data_Science')} className="w-full text-left px-4 py-3 bg-slate-800 hover:bg-accent hover:text-primary transition-colors rounded border border-slate-700">Data Scientist</button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-20">
        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-4xl text-center">
          <p className="text-accent font-mono mb-4 tracking-wide">Hello, I am {profile.name}. I specialize in:</p>
          <div className="h-24 md:h-32 flex items-center justify-center overflow-hidden mb-6">
            <AnimatePresence mode="wait">
              <motion.h1 
                key={headlineIdx}
                initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -40, opacity: 0 }} transition={{ duration: 0.5 }}
                className="text-4xl md:text-6xl font-extrabold tracking-tight text-white"
              >
                {profile.headlines[headlineIdx]}
              </motion.h1>
            </AnimatePresence>
          </div>
          <div className="flex justify-center gap-4 mt-8">
            <button onClick={() => setResumeModalOpen(true)} className="flex items-center gap-2 bg-accent text-primary px-8 py-3 rounded text-sm font-bold hover:bg-white transition-colors">
              <Download size={16} /> Fetch Resume
            </button>
            <a href="#projects" className="border border-slate-700 text-white px-8 py-3 rounded text-sm font-bold hover:bg-slate-800 transition-colors">
              View Architecture
            </a>
          </div>
        </motion.div>
      </section>

      {/* About & Tech Stack */}
      <section id="about" className="py-24 border-t border-slate-800 px-6">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-4 text-white">
              <span className="w-8 h-[2px] bg-accent"></span> Overview
            </h2>
            <p className="text-secondary leading-relaxed mb-8">{profile.about}</p>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-4 text-white">
              <span className="w-8 h-[2px] bg-accent"></span> Tech Stack
            </h2>
            <ul className="space-y-4 font-mono text-sm text-secondary">
              {profile.skills.map((skill, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-accent mt-1"><ChevronRight size={16} /></span> 
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </section>

      {/* Education & Experience */}
      <section id="experience" className="py-24 bg-slate-900/50 px-6">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-bold mb-12 flex items-center gap-4 text-white">
              <span className="w-8 h-[2px] bg-accent"></span> Education
            </h2>
            <div className="space-y-10 border-l border-slate-700 pl-8 ml-4">
              {education.map((edu, idx) => (
                <div key={idx} className="relative group">
                  <div className="absolute -left-[41px] top-1 bg-primary border-2 border-accent w-4 h-4 rounded-full group-hover:bg-accent transition-colors duration-300"></div>
                  <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                  <p className="text-sm font-mono text-accent mt-1 mb-3">{edu.institution}  //  {edu.time}</p>
                  <p className="text-secondary text-sm leading-relaxed">{edu.details}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-12 flex items-center gap-4 text-white">
              <span className="w-8 h-[2px] bg-accent"></span> Experience
            </h2>
            <div className="space-y-10 border-l border-slate-700 pl-8 ml-4">
              {experience.map((job, idx) => (
                <div key={idx} className="relative group">
                  <div className="absolute -left-[41px] top-1 bg-primary border-2 border-accent w-4 h-4 rounded-full group-hover:bg-accent transition-colors duration-300"></div>
                  <h3 className="text-xl font-bold text-white">{job.role}</h3>
                  <p className="text-sm font-mono text-accent mt-1 mb-4">{job.company}  //  {job.time}</p>
                  <ul className="list-disc pl-4 space-y-2 text-secondary text-sm">
                    {job.desc.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Projects Grid (Keep existing from previous turn) */}
      <section id="projects" className="py-24 px-6 border-t border-slate-800">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <h2 className="text-3xl font-bold flex items-center gap-4 text-white">
              <span className="w-8 h-[2px] bg-accent"></span> System Deployments
            </h2>
            <div className="flex flex-wrap gap-2 font-mono text-sm">
              {categories.map(cat => (
                <button 
                  key={cat} onClick={() => setFilter(cat)}
                  className={`px-4 py-2 rounded transition-colors ${filter === cat ? 'bg-accent text-primary font-bold' : 'bg-slate-800 text-secondary hover:text-white'}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <Link to={`/project/${project.id}`} key={project.id}>
                <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.2 }} className="bg-slate-800/50 border border-slate-700 rounded-lg p-8 h-full flex flex-col hover:border-accent/50 transition-colors cursor-pointer group">
                  <div className="flex justify-between items-start mb-6">
                    <Briefcase size={28} className="text-accent" strokeWidth={1.5} />
                    <span className="text-xs font-mono px-2 py-1 bg-slate-900 rounded text-secondary group-hover:text-accent transition-colors">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-accent transition-colors">{project.title}</h3>
                  <p className="text-secondary text-sm leading-relaxed mb-6 flex-grow">{project.summary}</p>
                  <div className="flex flex-wrap gap-3 font-mono text-xs text-slate-400">
                    {project.tech.slice(0, 3).map(t => <span key={t}>{t}</span>)}
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-24 bg-slate-900/50 px-6">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="max-w-xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 flex items-center justify-center gap-4 text-white text-center">
            <span className="w-8 h-[2px] bg-accent"></span> Initialize Contact
          </h2>
          <form onSubmit={handleContactSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-mono text-secondary mb-2">Name</label>
              <input type="text" id="name" required className="w-full bg-slate-800 border border-slate-700 rounded p-3 text-white focus:outline-none focus:border-accent transition-colors" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-mono text-secondary mb-2">Email</label>
              <input type="email" id="email" required className="w-full bg-slate-800 border border-slate-700 rounded p-3 text-white focus:outline-none focus:border-accent transition-colors" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-mono text-secondary mb-2">Message Payload</label>
              <textarea id="message" required rows="4" className="w-full bg-slate-800 border border-slate-700 rounded p-3 text-white focus:outline-none focus:border-accent transition-colors"></textarea>
            </div>
            <button type="submit" className="w-full bg-accent text-primary font-bold py-3 rounded hover:bg-white transition-colors">
              Transmit
            </button>
          </form>
        </motion.div>
      </section>
    </div>
  );
}