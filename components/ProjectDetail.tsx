
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PROJECTS } from '../constants';
import { ArrowLeft, ExternalLink, ChevronRight } from 'lucide-react';

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

        {/* Hero Image */}
        <div className="aspect-video rounded-3xl overflow-hidden border-2 border-slate-900 shadow-[6px_6px_0px_0px_rgba(0,0,0,0.2)] mb-20 bg-slate-200">
          <img 
            src={project.previewImage} 
            alt={project.title} 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
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
                      <div className="aspect-video rounded-2xl overflow-hidden border-2 border-slate-900 bg-slate-100">
                        <img src={artifact.imageUrl} alt={artifact.label} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                      </div>
                      <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">{artifact.label} — {artifact.type}</p>
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
                    <p className="text-slate-900 font-medium">Product Owner</p>
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
