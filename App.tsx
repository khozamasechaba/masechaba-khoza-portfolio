
import React from 'react';
import Navbar from './components/Navbar';
import ProjectCard from './components/ProjectCard';
import { PROJECTS, SKILLS } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white">
        {/* Subtle Background Elements */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-brand-50 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-teal-50 rounded-full blur-[140px] -z-10 -translate-x-1/4 translate-y-1/4"></div>

        <div className="max-w-7xl mx-auto px-6 py-20 w-full grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div>
              <span className="inline-block px-4 py-1.5 bg-brand-100 text-brand-700 rounded-full text-sm font-semibold mb-6">
                Available for new opportunities
              </span>
              <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 leading-tight">
                Masechaba <span className="text-brand">Khoza</span>
              </h1>
              <h2 className="text-2xl lg:text-3xl font-medium text-slate-600 mt-4 italic">
                Product Owner
              </h2>
            </div>
            
            <p className="text-xl text-slate-600 leading-relaxed max-w-xl">
              Driving measurable impact through data-driven product decisions. 
              Specializing in <span className="text-brand-600 font-semibold underline decoration-brand-200 decoration-2 underline-offset-4">Fintech</span> and <span className="text-brand-600 font-semibold underline decoration-brand-200 decoration-2 underline-offset-4">eCommerce</span> ecosystems.
            </p>

            <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-slate-500">
               <div className="flex items-center bg-white px-4 py-2 rounded-lg shadow-sm border border-slate-100">
                 <span className="text-brand font-bold mr-2">8.8%</span> conversion rates
               </div>
               <div className="flex items-center bg-white px-4 py-2 rounded-lg shadow-sm border border-slate-100">
                 <span className="text-brand font-bold mr-2">60-min</span> refund processing
               </div>
               <div className="flex items-center bg-white px-4 py-2 rounded-lg shadow-sm border border-slate-100">
                 <span className="text-brand font-bold mr-2">6-hour</span> process automation
               </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a 
                href="#projects" 
                className="bg-brand text-white px-8 py-4 rounded-xl font-bold text-center hover:bg-brand-700 transition-all shadow-xl hover:shadow-brand/20 active:scale-95"
              >
                View Projects
              </a>
              <a 
                href="#contact" 
                className="bg-white text-slate-700 border-2 border-slate-200 px-8 py-4 rounded-xl font-bold text-center hover:border-brand transition-all active:scale-95"
              >
                Get in Touch
              </a>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="w-full aspect-[4/5] rounded-[2.5rem] bg-slate-100 overflow-hidden shadow-2xl relative group transition-all duration-700 hover:shadow-brand/10">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1288&auto=format&fit=crop" 
                alt="Masechaba Khoza" 
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-60 group-hover:opacity-30 transition-all"></div>
            </div>
            {/* Float Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 animate-bounce transition-all z-20">
                <div className="flex items-center gap-3">
                  <div className="bg-brand/10 p-2 rounded-full text-brand">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase">CSPO Certified</p>
                    <p className="text-sm font-bold text-slate-800">Product Leader</p>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <div className="inline-block">
                <h2 className="text-3xl font-bold text-slate-900 border-b-4 border-brand-200 pb-2">Professional Profile</h2>
              </div>
              <p className="text-lg text-slate-700 leading-relaxed">
                Product Owner with 2+ years driving product development in <span className="font-semibold text-brand-700">Payments and eCommerce</span>. 
                Specialized in leveraging data insights to optimize user experiences and streamline complex business processes.
              </p>
              
              <div className="grid gap-6">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-white rounded-xl shadow-sm border border-brand-100 flex items-center justify-center text-brand">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Education</h4>
                    <p className="text-slate-600">BSc Computer Science & Engineering</p>
                    <p className="text-sm text-slate-400">University of Cape Town</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-white rounded-xl shadow-sm border border-brand-100 flex items-center justify-center text-brand">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04 inter-4.016 11.955 11.955 0 01-1.885 8.187 11.954 11.954 0 004.57 3.633l1.157.458a12.042 12.042 0 0011.546 0l1.157-.458a11.954 11.954 0 004.57-3.633 11.955 11.955 0 01-1.885-8.187z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Certification</h4>
                    <p className="text-slate-600">Certified Scrum Product Owner (CSPO)</p>
                    <p className="text-sm text-slate-400">Scrum Alliance</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-white rounded-xl shadow-sm border border-brand-100 flex items-center justify-center text-brand">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Data & Analytics</h4>
                    <p className="text-slate-600">Google Analytics Certification</p>
                    <p className="text-sm text-slate-400">Google</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 text-center space-y-2 translate-y-6">
                <p className="text-4xl font-extrabold text-brand">2+</p>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Years Experience</p>
              </div>
              <div className="bg-brand p-8 rounded-3xl shadow-xl text-center space-y-2 text-white">
                <p className="text-4xl font-extrabold">15+</p>
                <p className="text-xs font-bold opacity-70 uppercase tracking-widest">Projects Led</p>
              </div>
              <div className="bg-slate-900 p-8 rounded-3xl shadow-xl text-center space-y-2 text-white col-span-2">
                <p className="text-4xl font-extrabold text-brand-300">363%</p>
                <p className="text-xs font-bold opacity-70 uppercase tracking-widest">Max Conversion Increase</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4 tracking-tight">Featured Projects</h2>
            <p className="text-slate-500">
              A selection of products and features where data-driven strategies led to exponential growth and efficiency.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {PROJECTS.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/3">
              <h2 className="text-4xl font-bold text-slate-900 mb-6 tracking-tight">Core Expertise</h2>
              <p className="text-slate-600 leading-relaxed mb-8">
                Blending business strategy, user-centric design, and technical feasibility to build products that scale.
              </p>
              <div className="p-6 bg-brand-50 rounded-2xl border border-brand-100">
                <h4 className="font-bold text-brand-800 mb-2 italic">Product Philosophy</h4>
                <p className="text-sm text-brand-700">"Build the right thing first, then build it right. Never guess when you can measure."</p>
              </div>
            </div>

            <div className="lg:w-2/3 grid sm:grid-cols-2 gap-8">
              {SKILLS.map((skillGroup) => (
                <div key={skillGroup.category} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:border-brand-200 transition-all group">
                  <h3 className="text-lg font-bold text-slate-800 mb-6 flex items-center">
                    <span className="w-1.5 h-6 bg-brand mr-3 rounded-full"></span>
                    {skillGroup.category}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {skillGroup.items.map(skill => (
                      <span 
                        key={skill} 
                        className="px-4 py-2 bg-slate-50 text-slate-600 rounded-lg text-sm font-medium border border-slate-100 group-hover:bg-brand-50 group-hover:text-brand-700 group-hover:border-brand-100 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-slate-900 rounded-[3rem] p-12 lg:p-20 relative overflow-hidden shadow-2xl">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand rounded-full blur-[100px] opacity-20 translate-x-1/2 -translate-y-1/2"></div>
            
            <div className="grid lg:grid-cols-2 gap-16 relative z-10">
              <div>
                <h2 className="text-4xl font-bold text-white mb-6">Let's build the future together.</h2>
                <p className="text-slate-400 text-lg mb-10 max-w-md">
                  Currently based in Cape Town, South Africa. Open to collaborative opportunities and full-time roles.
                </p>

                <div className="space-y-6">
                  <a href="mailto:masechaba.c.khoza@gmail.com" className="flex items-center gap-4 text-white group">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-brand transition-colors">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <span className="text-lg font-medium group-hover:text-brand transition-colors">masechaba.c.khoza@gmail.com</span>
                  </a>

                  <a href="https://www.linkedin.com/in/masechabakhoza/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-white group">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-brand transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </div>
                    <span className="text-lg font-medium group-hover:text-brand transition-colors">linkedin.com/in/masechabakhoza</span>
                  </a>

                  <div className="flex items-center gap-4 text-white">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <span className="text-lg font-medium">Cape Town, South Africa</span>
                  </div>
                </div>
              </div>

              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-4">
                  <input type="text" placeholder="Full Name" className="bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-brand w-full" />
                  <input type="email" placeholder="Email Address" className="bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-brand w-full" />
                </div>
                <input type="text" placeholder="Subject" className="bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-brand w-full" />
                <textarea placeholder="Your Message" rows={4} className="bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-brand w-full resize-none"></textarea>
                <button className="bg-brand text-white w-full py-4 rounded-xl font-bold hover:bg-brand-700 transition-all shadow-xl active:scale-95">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 text-center text-slate-400 text-sm border-t border-slate-100">
        <p>&copy; {new Date().getFullYear()} Masechaba Khoza. Built with React & Tailwind CSS.</p>
      </footer>
    </div>
  );
};

export default App;
