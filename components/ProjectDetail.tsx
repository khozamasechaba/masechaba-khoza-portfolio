
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PROJECTS } from '../constants';
import { ArrowLeft, ExternalLink, ChevronRight, GitMerge, PenTool, Layout, Gauge, PieChart, FileText } from 'lucide-react';
import * as Icons from 'lucide-react';

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = PROJECTS.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-brand-sand">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Project Not Found</h1>
          <Link to="/" className="text-brand font-bold hover:underline">Return Home</Link>
        </div>
      </div>
    );
  }

  // @ts-ignore - dynamic icon access
  const HeroIcon = Icons[project.icon] || Icons.Briefcase;

  const getArtifactIcon = (type: string) => {
    switch (type) {
      case 'process-flow': return <GitMerge size={48} className="text-brand" />;
      case 'sketch': return <PenTool size={48} className="text-brand" />;
      case 'wireframe': return <Layout size={48} className="text-brand" />;
      case 'dashboard': return <Gauge size={48} className="text-brand" />;
      case 'analysis': return <PieChart size={48} className="text-brand" />;
      default: return <FileText size={48} className="text-brand" />;
    }
  };

  return (
    <div className="min-h-screen bg-brand-sand pt-32 pb-24">
      <div className="max-w-5xl mx-auto px-6">
        <Link to="/" className="inline-flex items-center text-slate-500 hover:text-brand transition-colors mb-12 group">
          <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Work
        </Link>
        
        {/* Header */}
        <header className="mb-16">
          <p className="text-brand font-bold uppercase tracking-widest mb-4">{project.company}</p>
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-8 leading-tight">
            {project.title}
          </h1>
          <div className="flex flex-wrap gap-3">
            {project.tags.map(tag => (
              <span key={tag} className="px-4 py-1.5 bg-white border-2 border-slate-900 rounded-full text-sm font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                {tag}
              </span>
            ))}
          </div>
        </header>

        {/* Hero Illustration */}
        <div className="aspect-video rounded-3xl overflow-hidden border-2 border-slate-900 shadow-[6px_6px_0px_0px_rgba(249,115,22,0.2)] mb-20 bg-brand-50 flex items-center justify-center p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand opacity-5 rounded-full -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand opacity-5 rounded-full -ml-32 -mb-32"></div>
          <div className="text-center relative z-10">
            <div className="w-32 h-32 bg-brand rounded-[40px] mx-auto mb-8 flex items-center justify-center text-white shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
               <HeroIcon size={64} strokeWidth={2.5} />
            </div>
            <p className="text-3xl font-black text-slate-900 uppercase tracking-[0.2em]">{project.title}</p>
            <div className="w-24 h-1.5 bg-brand mx-auto mt-4 rounded-full"></div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-3 gap-16">
          {/* Main Content */}
          <div className="md:col-span-2 space-y-20">
            {/* Summary & Value */}
            <section>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Summary & Value</h2>
              <div className="space-y-4">
                <p className="text-xl text-slate-700 leading-relaxed">{project.summary}</p>
                <div className="p-6 bg-brand-100 rounded-2xl border-2 border-brand-200">
                  <p className="text-brand-900 font-bold italic">"{project.value}"</p>
                </div>
              </div>
            </section>

            {/* Problem */}
            <section>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">The Problem</h2>
              <p className="text-lg text-slate-600 leading-relaxed">{project.problem}</p>
            </section>

            {/* Discovery */}
            <section>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Discovery & Research</h2>
              <p className="text-lg text-slate-600 leading-relaxed">{project.discovery}</p>
            </section>

            {/* Solution */}
            <section>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">The Solution</h2>
              <p className="text-lg text-slate-600 leading-relaxed">{project.solution}</p>
            </section>

            {/* Implementation */}
            <section>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Implementation</h2>
              <p className="text-lg text-slate-600 leading-relaxed">{project.implementation}</p>
            </section>

            {/* Results */}
            <section>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Results</h2>
              <p className="text-lg text-slate-600 leading-relaxed">{project.results}</p>
            </section>

            {/* Artifacts */}
            {project.artifacts.length > 0 && (
              <section>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Artifacts</h2>
                <div className="grid gap-8">
                  {project.artifacts.map((artifact, i) => (
                    <div key={i} className="space-y-4">
                      <div className="aspect-video rounded-2xl overflow-hidden border-2 border-slate-900 bg-white flex items-center justify-center group">
                        <div className="text-center p-8 transition-transform group-hover:scale-110">
                           {getArtifactIcon(artifact.type)}
                           <p className="mt-4 text-brand font-black text-xl uppercase tracking-widest">{artifact.type.replace('-', ' ')}</p>
                        </div>
                      </div>
                      <p className="text-sm font-bold text-slate-500 uppercase tracking-widest italic">{artifact.label}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Backlog */}
            <section>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Future Enhancements</h2>
              <ul className="space-y-4">
                {project.backlog.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <ChevronRight className="w-5 h-5 text-brand mr-2 mt-1 flex-shrink-0" />
                    <span className="text-lg text-slate-600">{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-12">
            <div className="sticky top-32 space-y-12">
              {project.link && (
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-full bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-slate-800 transition-all shadow-xl"
                >
                  Visit Project <ExternalLink className="w-5 h-5 ml-2" />
                </a>
              )}

              <div className="p-8 bg-white rounded-3xl border-2 border-slate-900 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)]">
                <h4 className="font-bold text-slate-900 mb-4 uppercase tracking-widest text-sm">Project Details</h4>
                <div className="space-y-6">
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase mb-1">Role</p>
                    <p className="text-slate-900 font-medium">Product Manager</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase mb-1">Company</p>
                    <p className="text-slate-900 font-medium">{project.company}</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase mb-1">Industry</p>
                    <p className="text-slate-900 font-medium">Fintech / eCommerce</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
