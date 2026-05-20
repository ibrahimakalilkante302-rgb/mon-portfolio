import React from 'react';
const Github = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.24c3-.34 6-1.5 6-6.76a5.2 5.2 0 0 0-1.5-3.78 4.8 4.8 0 0 0-.15-3.72s-1.2-.38-3.9 1.44a13.2 13.2 0 0 0-7 0C4.7 2.1 3.5 2.48 3.5 2.48a4.8 4.8 0 0 0-.15 3.72 5.2 5.2 0 0 0-1.5 3.78c0 5.26 3 6.42 6 6.76a4.8 4.8 0 0 0-1 3.24v4" />
  </svg>
);

const Linkedin = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Twitter = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

export const Footer = () => {
  return (
    <footer className="bg-slate-950 py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
        <div className="mb-6 md:mb-0">
          <a href="#accueil" className="text-2xl font-bold text-white tracking-tighter">
            IKK<span className="text-blue-500">.</span>
          </a>
          <p className="text-slate-400 mt-2 text-sm max-w-xs">
            Conception et développement d'applications innovantes.
          </p>
        </div>

        <div className="flex space-x-6 mb-6 md:mb-0">
          <a href="#" className="text-slate-400 hover:text-white transition-colors p-2 bg-white/5 rounded-full hover:bg-white/10">
            <Github className="w-5 h-5" />
          </a>
          <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors p-2 bg-white/5 rounded-full hover:bg-white/10">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors p-2 bg-white/5 rounded-full hover:bg-white/10">
            <Twitter className="w-5 h-5" />
          </a>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 pt-8 border-t border-white/10 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
        <p>
          &copy; {new Date().getFullYear()} Ibrahima Kalil Kante. Tous droits réservés.
        </p>
        <p className="mt-2 md:mt-0">
          Fait avec <span className="text-red-500">❤️</span> en Guinée
        </p>
      </div>
    </footer>
  );
};
