import React from 'react';
import { HashRouter, Routes, Route, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, MapPin, Database, BrainCircuit, Server } from 'lucide-react';
import Home from './Home';
import ProjectDetail from './ProjectDetail';

// Inline Brand Icon SVGs to bypass lucide-react brand removals
const GithubIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

function RoleGatekeeper() {
  const navigate = useNavigate();

  const roles = [
    { id: 'fullstack', title: 'Full Stack Software Engineer', icon: <Server size={32} /> },
    { id: 'ml', title: 'Machine Learning Engineer', icon: <BrainCircuit size={32} /> },
    { id: 'data', title: 'Data Scientist', icon: <Database size={32} /> }
  ];

  return (
    <div className="min-h-screen bg-primary flex flex-col items-center justify-center px-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
        className="max-w-2xl w-full bg-slate-900 border border-slate-800 p-10 rounded-lg shadow-2xl"
      >
        <h1 className="text-3xl font-extrabold text-white text-center mb-2">Select Context</h1>
        <p className="text-secondary text-center mb-8 font-mono text-sm">Initialize environment based on hiring requirements.</p>
        
        <div className="grid md:grid-cols-3 gap-4">
          {roles.map(role => (
            <button
              key={role.id}
              onClick={() => navigate(`/portfolio/${role.id}`)}
              className="flex flex-col items-center gap-4 p-6 bg-slate-800 border border-slate-700 rounded hover:bg-slate-700 hover:border-accent transition-all group"
            >
              <div className="text-secondary group-hover:text-accent transition-colors">
                {role.icon}
              </div>
              <span className="text-sm font-bold text-white text-center">{role.title}</span>
            </button>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default function App() {
  return (
    <HashRouter>
      <div className="min-h-screen flex flex-col font-sans bg-primary text-light">
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<RoleGatekeeper />} />
            <Route path="/portfolio/:role" element={<Home />} />
            <Route path="/project/:id" element={<ProjectDetail />} />
          </Routes>
        </main>
        
        <Routes>
          <Route path="/" element={null} />
          <Route path="*" element={
            <footer className="border-t border-slate-800 py-8 text-center text-secondary font-mono text-sm flex flex-col items-center">
              <div className="flex space-x-8 mb-4">
                <a href="https://github.com/yourgithub" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-accent transition-colors">
                  <GithubIcon size={20} /> GitHub
                </a>
                <a href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-accent transition-colors">
                  <LinkedinIcon size={20} /> LinkedIn
                </a>
                <a href="mailto:johndoe@example.com" className="flex items-center gap-2 hover:text-accent transition-colors">
                  <Mail size={20} /> Email
                </a>
                <span className="flex items-center gap-2 cursor-default text-slate-400">
                  <MapPin size={20} /> Dublin, Ireland
                </span>
              </div>
            </footer>
          } />
        </Routes>
      </div>
    </HashRouter>
  );
}