
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProjectCard from './components/ProjectCard';
import ProjectDetail from './components/ProjectDetail';
import AllProjectsPage from './components/AllProjectsPage';
import { PROJECTS, EXPERIENCE, SKILLS, JOY, CERTIFICATIONS } from './constants';
import { motion } from 'motion/react';
import { Mail, Linkedin, Briefcase, Heart, User, Award, ChevronRight } from 'lucide-react';

const HomePage: React.FC = () => {
  // Hand-picked featured projects for a diverse showcase
  const featuredProjects = React.useMemo(() => {
    const featuredIds = ['ucook-signup', 'ozow-refunds', 'thrift-yours-ai', 'ozow-bulk'];
    return featuredIds
      .map(id => PROJECTS.find(p => p.id === id))
      .filter((p): p is typeof PROJECTS[0] => p !== undefined);
  }, []);

  return (
    <div className="min-h-screen bg-brand-sand">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-20 w-full grid lg:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <div className="space-y-4">
              <h1 className="text-7xl lg:text-9xl font-extrabold text-slate-900 leading-none tracking-tighter">
                Masechaba <br />
                <span className="text-brand">Khoza</span>
              </h1>
              <p className="text-2xl lg:text-3xl font-medium text-slate-600 italic">
                Product Owner
              </p>
            </div>
            
            <div className="space-y-6">
              <p className="text-2xl lg:text-3xl text-slate-800 leading-tight font-medium max-w-xl">
                Hi, I am Masechaba. <br />
                <span className="text-brand-700">I drive measurable impact</span> through data-driven product decisions.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 pt-4">
                <a 
                  href="#work" 
                  className="bg-brand text-white px-10 py-4 rounded-2xl font-bold text-center hover:bg-brand-700 transition-all shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] active:scale-95 text-xl"
                >
                  View Projects
                </a>
                <a 
                  href="#contact" 
                  className="bg-white text-slate-900 border-2 border-slate-900 px-10 py-4 rounded-2xl font-bold text-center hover:bg-slate-50 transition-all shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] active:scale-95 text-xl"
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="space-y-4 max-w-xs ml-auto">
              <div className="bg-brand-200 p-6 rounded-[30px] border-2 border-slate-900 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)] rotate-3 hover:rotate-0 transition-transform duration-500">
                <p className="text-3xl font-black text-slate-900">2+ Years</p>
                <p className="text-xs font-bold text-slate-700 uppercase tracking-widest">Experience</p>
              </div>
              <div className="bg-brand-400 p-6 rounded-[30px] border-2 border-slate-900 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)] -rotate-6 hover:rotate-0 transition-transform duration-500 ml-12">
                <p className="text-3xl font-black text-slate-900">15+</p>
                <p className="text-xs font-bold text-slate-700 uppercase tracking-widest">Projects Led</p>
              </div>
              <div className="bg-brand-300 p-6 rounded-[30px] border-2 border-slate-900 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)] rotate-2 hover:rotate-0 transition-transform duration-500 ml-6">
                <p className="text-xl font-black text-slate-900 leading-tight">Fintech & eCommerce</p>
                <p className="text-xs font-bold text-slate-700 uppercase tracking-widest">Core Industries</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
            <div>
              <h2 className="text-6xl font-black text-slate-900 mb-6 tracking-tighter">Featured Work</h2>
              <p className="text-xl text-slate-500 max-w-2xl">
                A selection of products and features where data-driven strategies led to exponential growth and efficiency.
              </p>
            </div>
            <Link 
              to="/all-projects" 
              className="inline-flex items-center gap-2 text-xl font-bold text-brand hover:text-brand-700 transition-colors group"
            >
              View All Projects
              <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 bg-brand-sand">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-20">
            <h2 className="text-6xl font-black text-slate-900 mb-6 tracking-tighter">Experience</h2>
            <p className="text-xl text-slate-500 max-w-2xl">
              Building impactful products across leading fintech and eCommerce platforms.
            </p>
          </div>

          <div className="space-y-12">
            {EXPERIENCE.map((exp) => (
              <div key={exp.id} className="bg-white p-12 rounded-[40px] border-2 border-slate-900 shadow-[6px_6px_0px_0px_rgba(0,0,0,0.2)] hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,0.2)] transition-all">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
                  <div>
                    <div className="flex items-center gap-4 mb-1">
                      <h3 className="text-4xl font-black text-slate-900">{exp.company}</h3>
                      {exp.isPassionProject && (
                        <span className="px-3 py-1 bg-brand-100 text-brand-700 text-xs font-black uppercase tracking-widest rounded-full border border-brand-200">
                          Passion Project
                        </span>
                      )}
                    </div>
                    <p className="text-xl font-bold text-brand">{exp.role}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold text-slate-500">{exp.period}</p>
                    <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">{exp.industry}</p>
                  </div>
                </div>
                <div className="grid md:grid-cols-3 gap-12">
                  <div className="md:col-span-2">
                    <p className="text-lg text-slate-600 leading-relaxed">{exp.description}</p>
                  </div>
                  <div className="bg-brand-50 p-6 rounded-2xl border-2 border-brand-200">
                    <p className="text-xs font-bold text-brand-700 uppercase mb-2 tracking-widest">Focus Area</p>
                    <p className="text-brand-900 font-bold">{exp.focusArea}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-20">
            <h2 className="text-6xl font-black text-slate-900 mb-6 tracking-tighter">Skills</h2>
            <p className="text-xl text-slate-500 max-w-2xl">
              Relevant product skills and certifications that drive measurable results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {SKILLS.map((skill) => (
              <div key={skill.name} className="p-8 bg-brand-sand rounded-3xl border-2 border-slate-900 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)]">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-white rounded-xl border-2 border-slate-900 flex items-center justify-center">
                    <Briefcase className="w-6 h-6 text-brand" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">{skill.name}</h3>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{skill.category}</p>
                  </div>
                </div>
                <p className="text-slate-600 leading-relaxed">{skill.description}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {CERTIFICATIONS.map((cert) => (
              <div key={cert.name} className="flex items-center gap-6 p-8 bg-slate-900 text-white rounded-3xl border-2 border-slate-900 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)]">
                <div className="w-16 h-16 bg-brand rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-1">{cert.name}</h4>
                  <p className="text-slate-400 font-medium">{cert.issuer} • {cert.year}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Joy Section */}
      <section id="joy" className="py-32 bg-brand-sand">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-20">
            <h2 className="text-6xl font-black text-slate-900 mb-6 tracking-tighter">Joy</h2>
            <p className="text-xl text-slate-500 max-w-2xl">
              Things I do outside of work that keep me inspired and creative.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {JOY.map((item) => (
              <div key={item.title} className="group">
                <div className="aspect-square rounded-3xl overflow-hidden border-2 border-slate-900 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] mb-6 bg-white">
                  <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-12">
              <h2 className="text-6xl font-black text-slate-900 tracking-tighter">About Me</h2>
              <div className="space-y-6 text-xl text-slate-700 leading-relaxed">
                <p>
                  I'm a Product Owner with a passion for building products that solve real problems. 
                  My approach is rooted in data, empathy, and a relentless focus on measurable impact.
                </p>
                <p>
                  With over 2 years of experience in Fintech and eCommerce, I've led projects that 
                  significantly improved conversion rates, automated complex manual processes, and 
                  delivered seamless user experiences.
                </p>
                <p>
                  I believe in building the right thing first, then building it right. 
                  My background in Computer Science allows me to bridge the gap between 
                  business strategy and technical execution effectively.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 px-6 py-3 bg-brand-50 rounded-full border-2 border-brand-200 text-brand-900 font-bold">
                  <User className="w-5 h-5" />
                  Product Owner
                </div>
                <div className="flex items-center gap-2 px-6 py-3 bg-brand-50 rounded-full border-2 border-brand-200 text-brand-900 font-bold">
                  <Briefcase className="w-5 h-5" />
                  Fintech & eCommerce
                </div>
                <div className="flex items-center gap-2 px-6 py-3 bg-brand-50 rounded-full border-2 border-brand-200 text-brand-900 font-bold">
                  <Heart className="w-5 h-5" />
                  User-Centric
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-[60px] overflow-hidden border-2 border-slate-900 shadow-[10px_10px_0px_0px_rgba(249,115,22,0.5)]">
                <img 
                  src="https://picsum.photos/seed/pencil-sketch-profile/800/800?grayscale" 
                  alt="Masechaba Khoza" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-3xl border-2 border-slate-900 shadow-xl max-w-xs">
                <p className="text-brand font-black text-2xl mb-2 italic">"Never guess when you can measure."</p>
                <p className="text-slate-500 font-bold">— Product Philosophy</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-6xl font-black mb-8 tracking-tighter">Let's build something <span className="text-brand">impactful</span>.</h2>
          <p className="text-2xl text-slate-400 mb-12 max-w-2xl mx-auto">
            Whether you have a project in mind or just want to say hi, I'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=masechaba.c.khoza@gmail.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-2xl font-bold hover:text-brand transition-colors">
              <Mail className="w-8 h-8" />
              Email Me
            </a>
            <a href="https://www.linkedin.com/in/masechabakhoza/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-2xl font-bold hover:text-brand transition-colors">
              <Linkedin className="w-8 h-8" />
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      <footer className="py-12 bg-slate-900 border-t border-slate-800 text-center text-slate-500 font-bold">
        <p>© {new Date().getFullYear()} Masechaba Khoza. Built with passion & data.</p>
      </footer>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
        <Route path="/all-projects" element={<AllProjectsPage />} />
      </Routes>
    </Router>
  );
};

export default App;
