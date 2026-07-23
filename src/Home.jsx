import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { Briefcase, ChevronRight, Download, X } from 'lucide-react';
import { roleData, education, projects, profile as globalProfile } from './data';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export default function Home() {
  const { role } = useParams();
  const [isResumeModalOpen, setResumeModalOpen] = useState(false);

  const currentRoleKey = roleData[role] ? role : 'fullstack';
  const profile = roleData[currentRoleKey];
  const filteredProjects = projects.filter(p => p.roles.includes(currentRoleKey));

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownload = ({currentRole}) => {
    // Native HTML5 download trigger
    const fileName = "";
    if (currentRole == "fullstack"){
      fileName = "java-fullstack-resume.pdf";
    }
    else if (currentRole == "ml"){
      fileName = "ml-resume.pdf";
    }
    else{
      fileName = "data-scientist-resume.pdf";
    }
    const link = document.createElement('a');
    link.href = `/resumes/${fileName}`;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setResumeModalOpen(false);
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    
    // Construct mailto link with encoded parameters
    const subject = encodeURIComponent(`Contact Inquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\nSender Email: ${email}`);
    
    // Redirect to mail client
    window.location.href = `mailto:johndoe@example.com?subject=${subject}&body=${body}`;
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
                <h3 className="text-xl font-bold text-white">Select Formatting</h3>
                <button onClick={() => setResumeModalOpen(false)} className="text-secondary hover:text-white transition-colors"><X size={20} /></button>
              </div>
              <p className="text-sm text-secondary mb-6">Fetch the resume format matching your specific hiring criteria.</p>
              <div className="space-y-3 font-mono text-sm">
                <button onClick={() => handleDownload('java-fullstack-resume.pdf')} className="w-full text-left px-4 py-3 bg-slate-800 hover:bg-accent hover:text-primary transition-colors rounded border border-slate-700">Full Stack Software Engineer</button>
                <button onClick={() => handleDownload('ml-resume.pdf')} className="w-full text-left px-4 py-3 bg-slate-800 hover:bg-accent hover:text-primary transition-colors rounded border border-slate-700">Machine Learning Engineer</button>
                <button onClick={() => handleDownload('data-scientist-resume.pdf')} className="w-full text-left px-4 py-3 bg-slate-800 hover:bg-accent hover:text-primary transition-colors rounded border border-slate-700">Data Scientist</button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Navigation */}
      <nav className="fixed w-full bg-primary/90 backdrop-blur-md z-50 border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">
          <Link to={`/portfolio/${currentRoleKey}`} className="flex items-center gap-2 text-xl font-extrabold text-white hover:text-accent transition-colors">
            {globalProfile.name}.
          </Link>
          <div className="hidden md:flex space-x-8 text-sm font-medium text-secondary">
            <button onClick={() => scrollToSection('about')} className="hover:text-accent transition-colors">Overview</button>
            <button onClick={() => scrollToSection('experience')} className="hover:text-accent transition-colors">Experience</button>
            <button onClick={() => scrollToSection('projects')} className="hover:text-accent transition-colors">Deployments</button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-accent transition-colors">Contact</button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-20">
        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-4xl text-center">
          <p className="text-accent font-mono mb-4 tracking-wide">Hello, I am Syed Athar Hussain and I specialised in:</p>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-8">
            {profile.title}
          </h1>
          <div className="flex justify-center gap-4">
            <button onClick={() => handleDownload(currentRoleKey) } className="flex items-center gap-2 bg-accent text-primary px-8 py-3 rounded text-sm font-bold hover:bg-white transition-colors">
              <Download size={16} /> Download Resume
            </button>
            <button onClick={() => scrollToSection('projects')} className="border border-slate-700 text-white px-8 py-3 rounded text-sm font-bold hover:bg-slate-800 transition-colors">
              View Projects
            </button>
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
              {profile.experience.map((job, idx) => (
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
            <span className="w-8 h-[2px] bg-accent"></span> Relevant Deployments
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
              <input type="text" name="name" id="name" required className="w-full bg-slate-800 border border-slate-700 rounded p-3 text-white focus:outline-none focus:border-accent transition-colors" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-mono text-secondary mb-2">Email</label>
              <input type="email" name="email" id="email" required className="w-full bg-slate-800 border border-slate-700 rounded p-3 text-white focus:outline-none focus:border-accent transition-colors" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-mono text-secondary mb-2">Message Payload</label>
              <textarea name="message" id="message" required rows="4" className="w-full bg-slate-800 border border-slate-700 rounded p-3 text-white focus:outline-none focus:border-accent transition-colors"></textarea>
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