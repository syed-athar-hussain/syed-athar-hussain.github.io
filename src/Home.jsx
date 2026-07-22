import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { Briefcase, ChevronRight, Download, ArrowLeft } from 'lucide-react';
import { profile, experience, education, projects } from './data';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export default function Home() {
  const { role } = useParams();

  // Route mapping logic
  const roleConfig = {
    backend: {
      title: "Backend Software Engineering.",
      categories: ["Java Projects"],
      resume: "Backend_Java"
    },
    ml: {
      title: "Machine Learning Operations.",
      categories: ["ML Projects", "Data Science"],
      resume: "Machine_Learning"
    },
    data: {
      title: "Distributed Data Systems.",
      categories: ["Data Science", "ML Projects"],
      resume: "Data_Science"
    }
  };

  const currentRole = roleConfig[role] || roleConfig.backend;
  const filteredProjects = projects.filter(p => currentRole.categories.includes(p.category));

  const handleDownload = () => {
    alert(`Initiating download for: ${currentRole.resume} Resume`);
    // window.open(`/resumes/${currentRole.resume}_Resume.pdf`, '_blank');
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully.");
    e.target.reset();
  };

  return (
    <div className="bg-primary text-light selection:bg-accent selection:text-white pb-20">
      
      {/* Navigation - Added back button to change role */}
      <nav className="fixed w-full bg-primary/90 backdrop-blur-md z-50 border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 text-sm font-mono text-secondary hover:text-accent transition-colors">
            <ArrowLeft size={16} /> Re-initialize Context
          </Link>
          <div className="hidden md:flex space-x-8 text-sm font-medium text-secondary">
            <a href="#about" className="hover:text-accent transition-colors">About</a>
            <a href="#experience" className="hover:text-accent transition-colors">Experience</a>
            <a href="#projects" className="hover:text-accent transition-colors">Deployments</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-20">
        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-4xl text-center">
          <p className="text-accent font-mono mb-4 tracking-wide">Hello, I am {profile.name}. I specialize in:</p>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-8">
            {currentRole.title}
          </h1>
          <div className="flex justify-center gap-4">
            <button onClick={handleDownload} className="flex items-center gap-2 bg-accent text-primary px-8 py-3 rounded text-sm font-bold hover:bg-white transition-colors">
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

      {/* Tailored Projects Grid */}
      <section id="projects" className="py-24 px-6 border-t border-slate-800">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold flex items-center gap-4 text-white mb-12">
            <span className="w-8 h-[2px] bg-accent"></span> Relevant System Deployments
          </h2>

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