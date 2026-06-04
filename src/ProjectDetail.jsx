import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Layers, Code2 } from 'lucide-react';
import { projects } from './data';

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) return <div className="h-screen flex items-center justify-center text-white font-mono">404: Not Found</div>;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
      className="min-h-screen bg-primary pt-32 pb-24 px-6 text-light"
    >
      <div className="max-w-4xl mx-auto">
        <Link to="/#projects" className="inline-flex items-center gap-2 text-accent font-mono text-sm hover:text-white transition-colors mb-12">
          <ArrowLeft size={16} /> Back to Repository
        </Link>
        
        <div className="mb-12">
          <span className="text-sm font-mono text-secondary uppercase tracking-widest">{project.category}</span>
          <h1 className="text-4xl md:text-5xl font-extrabold mt-4 mb-6 text-white">{project.title}</h1>
          <p className="text-lg text-secondary leading-relaxed border-l-2 border-accent pl-6 py-2">
            {project.summary}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 border-t border-slate-800 pt-12">
          <div className="md:col-span-2 space-y-6 text-slate-300 leading-relaxed">
            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
              <Layers className="text-accent" /> Implementation Details
            </h2>
            <ul className="list-disc pl-5 space-y-4 text-sm md:text-base">
              {project.details.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </div>
          
          <div className="bg-slate-800/30 border border-slate-800 rounded-lg p-8 h-fit">
            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-3">
              <Code2 className="text-accent" /> Stack
            </h3>
            <ul className="space-y-3 font-mono text-sm text-secondary">
              {project.tech.map(tech => (
                <li key={tech} className="flex items-center gap-2">
                  <span className="text-accent">▹</span> {tech}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}