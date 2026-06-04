// import React from 'react';
// import { motion } from 'framer-motion';
// import { Code, User, Mail, ExternalLink, Briefcase } from 'lucide-react';

// const fadeUp = {
//   hidden: { opacity: 0, y: 30 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
// };

// export default function App() {
//   return (
//     <div className="min-h-screen text-primary selection:bg-accent selection:text-white">
      
//       <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
//         <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">
//           <span className="text-xl font-bold tracking-tight">John Doe.</span>
//           <div className="hidden md:flex space-x-8 text-sm font-medium text-secondary">
//             <a href="#about" className="hover:text-accent transition-colors">About</a>
//             <a href="#experience" className="hover:text-accent transition-colors">Experience</a>
//             <a href="#projects" className="hover:text-accent transition-colors">Projects</a>
//             <a href="#contact" className="hover:text-accent transition-colors">Contact</a>
//           </div>
//         </div>
//       </nav>

//       <section className="h-screen flex items-center justify-center px-6 pt-20">
//         <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-4xl text-center">
//           <p className="text-accent font-mono mb-4 tracking-wide">Hello, my name is</p>
//           <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">Software Engineer.</h1>
//           <p className="text-lg md:text-xl text-secondary mb-10 max-w-2xl mx-auto leading-relaxed">
//             I specialize in architecting scalable backend systems and building elegant, accessible user interfaces.
//           </p>
//           <div className="flex justify-center gap-4">
//             <a href="#contact" className="bg-primary text-white px-8 py-3 rounded text-sm font-medium hover:bg-accent transition-colors">Get In Touch</a>
//             <a href="#projects" className="border border-gray-300 px-8 py-3 rounded text-sm font-medium hover:bg-gray-50 transition-colors">View Portfolio</a>
//           </div>
//         </motion.div>
//       </section>

//       <section id="about" className="py-32 bg-white px-6">
//         <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="max-w-4xl mx-auto">
//           <h2 className="text-3xl font-bold mb-8 flex items-center gap-4"><span className="w-8 h-[2px] bg-accent"></span> About Me</h2>
//           <div className="grid md:grid-cols-3 gap-12">
//             <div className="col-span-2 text-secondary leading-relaxed space-y-4">
//               <p>I am a detail-oriented developer with over 5 years of professional experience. I view software engineering as a craft, focusing heavily on clean code, test-driven development, and optimal system performance.</p>
//               <p>Recently, my core focus has been bridging the gap between highly complex data models and seamless end-user experiences.</p>
//             </div>
//             <div>
//               <h3 className="text-primary font-bold mb-4 border-b pb-2">Core Technologies</h3>
//               <ul className="space-y-2 font-mono text-sm text-secondary">
//                 {['JavaScript (ES6+)', 'TypeScript', 'React.js', 'Node.js', 'PostgreSQL', 'AWS'].map(skill => (
//                   <li key={skill} className="flex items-center gap-2"><span className="text-accent">▹</span> {skill}</li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         </motion.div>
//       </section>

//       <section id="experience" className="py-32 bg-gray-50 px-6">
//         <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="max-w-4xl mx-auto">
//           <h2 className="text-3xl font-bold mb-16 flex items-center gap-4"><span className="w-8 h-[2px] bg-accent"></span> Professional Experience</h2>
//           <div className="space-y-12 border-l border-gray-300 pl-8 ml-4">
//             {[
//               { role: "Senior Software Engineer", company: "FinTech Global", time: "2022 - Present", desc: "Led the migration of a monolithic architecture to Node.js microservices, reducing server response times by 40%." },
//               { role: "Full Stack Developer", company: "DataViz Inc.", time: "2019 - 2022", desc: "Developed highly interactive data dashboards using React and D3.js." }
//             ].map((job, idx) => (
//               <div key={idx} className="relative group">
//                 <div className="absolute -left-[49px] top-1 bg-white border-2 border-accent w-6 h-6 rounded-full group-hover:bg-accent transition-colors duration-300"></div>
//                 <h3 className="text-xl font-bold text-primary">{job.role}</h3>
//                 <p className="text-sm font-mono text-secondary mt-1 mb-4">{job.company}  //  {job.time}</p>
//                 <p className="text-secondary leading-relaxed">{job.desc}</p>
//               </div>
//             ))}
//           </div>
//         </motion.div>
//       </section>

//       <section id="projects" className="py-32 bg-white px-6">
//         <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="max-w-5xl mx-auto">
//           <h2 className="text-3xl font-bold mb-12 flex items-center gap-4"><span className="w-8 h-[2px] bg-accent"></span> Featured Work</h2>
//           <div className="grid md:grid-cols-2 gap-8">
//             {[
//               {
//                 id: 1,
//                 title: "Enterprise SaaS Portal",
//                 description: "A high-performance B2B platform facilitating real-time inventory management. Engineered strict role-based access control and scalable API gateways.",
//                 tech: ["React", "Express", "MongoDB"]
//               },
//               {
//                 id: 2,
//                 title: "AI-Powered Analytics Dashboard",
//                 description: "Real-time business intelligence platform with predictive analytics and automated reporting.",
//                 tech: ["Next.js", "Python", "PostgreSQL"]
//               },
//               {
//                 id: 3,
//                 title: "Fintech Payment Gateway",
//                 description: "Secure and scalable payment infrastructure supporting multiple currencies and fraud detection.",
//                 tech: ["TypeScript", "Node.js", "Redis"]
//               },
//               {
//                 id: 4,
//                 title: "Healthcare Management System",
//                 description: "Comprehensive solution for patient records, appointment scheduling, and telemedicine.",
//                 tech: ["React", "Django", "MySQL"]
//               }
//             ].map((project) => (
//               <motion.div
//                 key={project.id}
//                 whileHover={{ y: -8 }}
//                 transition={{ duration: 0.2 }}
//                 className="bg-gray-50 border border-gray-100 rounded p-8 shadow-sm hover:shadow-md transition-shadow"
//               >
//                 <div className="flex justify-between items-start mb-6">
//                   <div className="text-accent">
//                     <Briefcase size={32} strokeWidth={1.5} />
//                   </div>
//                   <a href="#" className="text-secondary hover:text-accent transition-colors">
//                     <ExternalLink size={20} />
//                   </a>
//                 </div>
                
//                 <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                
//                 <p className="text-secondary mb-6 text-sm leading-relaxed">
//                   {project.description}
//                 </p>
                
//                 <div className="flex gap-4 font-mono text-xs text-secondary">
//                   {project.tech.map((tech, i) => (
//                     <span key={i}>{tech}</span>
//                   ))}
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>
//       </section>

//       <section id="contact" className="py-32 bg-primary text-white px-6">
//         <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="max-w-2xl mx-auto text-center">
//           <h2 className="text-sm font-mono text-accent mb-4 tracking-widest uppercase">What's Next?</h2>
//           <h3 className="text-4xl font-bold mb-6">Get In Touch</h3>
//           <p className="text-gray-400 mb-10 leading-relaxed">I am currently open to exploring new engineering opportunities.</p>
//           <a href="mailto:contact@johndoe.com" className="inline-block border border-accent text-accent px-8 py-4 rounded font-medium hover:bg-accent hover:text-white transition-all duration-300">Send an Email</a>
//         </motion.div>
//       </section>
//     </div>
//   );
// }

import React from 'react';
import { HashRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import ProjectDetail from './ProjectDetail';
import { Code, User, Mail } from 'lucide-react';

export default function App() {
  return (
    <HashRouter>
      <div className="min-h-screen flex flex-col font-sans">
        <nav className="fixed w-full bg-primary/90 backdrop-blur-md z-50 border-b border-slate-800">
          <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">
            <Link to="/" className="text-xl font-bold text-light tracking-tight hover:text-accent transition-colors">
              JD.
            </Link>
            <div className="hidden md:flex space-x-8 text-sm font-medium text-secondary">
              <a href="/#about" className="hover:text-accent transition-colors">About</a>
              <a href="/#experience" className="hover:text-accent transition-colors">Experience</a>
              <a href="/#projects" className="hover:text-accent transition-colors">Projects</a>
            </div>
          </div>
        </nav>

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project/:id" element={<ProjectDetail />} />
          </Routes>
        </main>

        <footer className="border-t border-slate-800 py-8 text-center text-secondary font-mono text-sm flex flex-col items-center">
          <div className="flex space-x-6 mb-4">
            <Code size={20} className="hover:text-accent cursor-pointer transition-colors" />
            <User size={20} className="hover:text-accent cursor-pointer transition-colors" />
            <Mail size={20} className="hover:text-accent cursor-pointer transition-colors" />
          </div>
          <p>© 2026 Engineered with React & Tailwind.</p>
        </footer>
      </div>
    </HashRouter>
  );
}