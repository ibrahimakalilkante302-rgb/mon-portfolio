import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Smartphone, Download } from 'lucide-react';
import { ThreeDCard } from './ThreeDCard';

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    width="20"
    height="20"
    stroke="currentColor"
    strokeWidth="2.2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const SmartBizMockup = () => {
  return (
    <div className="w-48 sm:w-52 h-[280px] sm:h-[300px] bg-slate-950 border-4 border-slate-800/90 rounded-[2rem] shadow-2xl relative overflow-hidden flex flex-col mx-auto select-none pointer-events-none group-hover:border-electric/50 transition-colors duration-500">
      {/* Top speaker & camera notch */}
      <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-16 h-3 bg-slate-800 rounded-full z-20 flex items-center justify-center">
        <div className="w-6 h-0.5 bg-slate-700 rounded-full mr-1.5"></div>
        <div className="w-1 h-1 bg-slate-900 rounded-full"></div>
      </div>
      
      {/* StatusBar */}
      <div className="h-7 pt-2 px-5 flex justify-between items-center text-[9px] text-slate-500 font-bold shrink-0">
        <span>09:41</span>
        <div className="flex gap-1.5 items-center">
          <div className="w-3 h-1.5 border border-slate-500 rounded-sm p-[1px] flex">
            <div className="w-full h-full bg-slate-500 rounded-[1px]"></div>
          </div>
        </div>
      </div>

      {/* App Header */}
      <div className="px-3.5 py-1.5 flex justify-between items-center border-b border-slate-900 shrink-0">
        <span className="text-[10px] font-black text-transparent bg-clip-text bg-gradient-to-r from-electric to-cyan-400">SmartBiz</span>
        <div className="w-1.5 h-1.5 rounded-full bg-electric animate-pulse"></div>
      </div>

      {/* Main Screen Content */}
      <div className="p-2.5 flex-1 overflow-hidden space-y-2.5 flex flex-col justify-start">
        {/* Balance Card */}
        <div className="bg-slate-900/80 border border-slate-850 p-2 rounded-lg space-y-0.5">
          <span className="text-[7px] text-slate-500 font-bold block">REVENUS CE MOIS</span>
          <div className="flex justify-between items-center">
            <span className="text-[9px] font-extrabold text-white">12 450 000 FG</span>
            <span className="text-[7px] font-black text-emerald-400 bg-emerald-950/50 px-1 py-0.2 rounded border border-emerald-900/20">+14%</span>
          </div>
        </div>

        {/* Mini Chart */}
        <div className="bg-slate-900/80 border border-slate-850 p-2 rounded-lg space-y-1.5 flex-1 flex flex-col justify-between">
          <span className="text-[7px] text-slate-500 font-bold block">FLUX DE CAISSE</span>
          <div className="flex items-end justify-between h-14 px-0.5">
            <div className="w-2.5 bg-gradient-to-t from-electric to-cyan-400 rounded-t h-8"></div>
            <div className="w-2.5 bg-gradient-to-t from-electric to-cyan-400 rounded-t h-11"></div>
            <div className="w-2.5 bg-gradient-to-t from-electric to-cyan-400 rounded-t h-6"></div>
            <div className="w-2.5 bg-gradient-to-t from-electric to-cyan-400 rounded-t h-12"></div>
            <div className="w-2.5 bg-gradient-to-t from-electric to-cyan-400 rounded-t h-9"></div>
          </div>
        </div>

        {/* Quick actions/alerts */}
        <div className="bg-slate-900/80 border border-slate-850 p-1.5 rounded-lg flex items-center justify-between text-[7px] font-bold">
          <span className="text-slate-400">Stock Critique</span>
          <span className="text-amber-400 bg-amber-950/30 px-1 py-0.2 rounded border border-amber-900/20">2 alertes</span>
        </div>
      </div>
      
      {/* Home Indicator */}
      <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-12 h-0.5 bg-slate-800 rounded-full"></div>
    </div>
  );
};

const GesContactMockup = () => {
  return (
    <div className="w-48 sm:w-52 h-[280px] sm:h-[300px] bg-slate-950 border-4 border-slate-800/90 rounded-[2rem] shadow-2xl relative overflow-hidden flex flex-col mx-auto select-none pointer-events-none group-hover:border-cyan-400/50 transition-colors duration-500">
      {/* Top speaker & camera notch */}
      <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-16 h-3 bg-slate-800 rounded-full z-20 flex items-center justify-center">
        <div className="w-6 h-0.5 bg-slate-700 rounded-full mr-1.5"></div>
        <div className="w-1 h-1 bg-slate-900 rounded-full"></div>
      </div>

      {/* StatusBar */}
      <div className="h-7 pt-2 px-5 flex justify-between items-center text-[9px] text-slate-500 font-bold shrink-0">
        <span>09:41</span>
        <div className="flex gap-1.5 items-center">
          <div className="w-3 h-1.5 border border-slate-500 rounded-sm p-[1px] flex">
            <div className="w-full h-full bg-slate-500 rounded-[1px]"></div>
          </div>
        </div>
      </div>

      {/* App Header */}
      <div className="px-3.5 py-1.5 flex justify-between items-center border-b border-slate-900 shrink-0">
        <span className="text-[10px] font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">GesContact</span>
        <span className="text-[8px] font-black text-cyan-400 bg-cyan-950/40 px-1 py-0.2 rounded border border-cyan-900/20">+ Ajouter</span>
      </div>

      {/* Main Screen Content */}
      <div className="p-2.5 flex-1 overflow-hidden space-y-1.5 flex flex-col justify-start">
        {/* Search bar */}
        <div className="bg-slate-900 border border-slate-850 p-1 rounded-md text-[7px] text-slate-500 font-bold">
          Rechercher un contact...
        </div>

        {/* Contacts list */}
        <div className="space-y-1 flex-1 overflow-hidden">
          {/* Contact 1 */}
          <div className="bg-slate-900/80 border border-slate-850 p-1.5 rounded-lg flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-blue-600 to-cyan-400 flex items-center justify-center text-[7px] font-extrabold text-white">AD</div>
              <div className="flex flex-col">
                <span className="text-[8px] font-extrabold text-white">Amadou Diallo</span>
                <span className="text-[5px] text-slate-500 font-bold">Professionnel</span>
              </div>
            </div>
            <div className="w-3.5 h-3.5 rounded bg-cyan-950/40 border border-cyan-900/20 flex items-center justify-center">
              <span className="text-[6px] text-cyan-400">📞</span>
            </div>
          </div>

          {/* Contact 2 */}
          <div className="bg-slate-900/80 border border-slate-850 p-1.5 rounded-lg flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-purple-600 to-pink-500 flex items-center justify-center text-[7px] font-extrabold text-white">KB</div>
              <div className="flex flex-col">
                <span className="text-[8px] font-extrabold text-white">Kadiatou Barry</span>
                <span className="text-[5px] text-slate-500 font-bold">Famille</span>
              </div>
            </div>
            <div className="w-3.5 h-3.5 rounded bg-emerald-950/40 border border-emerald-900/20 flex items-center justify-center">
              <span className="text-[6px] text-emerald-400">💬</span>
            </div>
          </div>

          {/* Contact 3 */}
          <div className="bg-slate-900/80 border border-slate-850 p-1.5 rounded-lg flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-amber-500 to-orange-500 flex items-center justify-center text-[7px] font-extrabold text-white">MS</div>
              <div className="flex flex-col">
                <span className="text-[8px] font-extrabold text-white">Mamadou Sylla</span>
                <span className="text-[5px] text-slate-500 font-bold">Personnel</span>
              </div>
            </div>
            <div className="w-3.5 h-3.5 rounded bg-cyan-950/40 border border-cyan-900/20 flex items-center justify-center">
              <span className="text-[6px] text-cyan-400">📞</span>
            </div>
          </div>
        </div>
      </div>

      {/* Home Indicator */}
      <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-12 h-0.5 bg-slate-800 rounded-full"></div>
    </div>
  );
};

export const Projects = () => {
  const projectsList = [
    {
      title: "SmartBiz Guinée",
      subtitle: "Application de gestion d'entreprise",
      badge: "Flutter & SQLite",
      mockup: <SmartBizMockup />,
      glowColor: "group-hover:shadow-electric/15",
      borderColor: "hover:border-electric/30",
      description: "Une solution complète conçue pour aider les PME guinéennes à gérer efficacement leurs employés, produits, dépenses et inventaire. L'application offre un tableau de bord en temps réel et des fonctionnalités de notification intelligentes.",
      features: [
        "Gestion sécurisée avec authentification multi-utilisateurs",
        "Tableau de bord statistique interactif",
        "Suivi des stocks avec alertes automatiques",
        "Mode hors-ligne avec base de données locale"
      ],
      apkLink: "/downloads/smartbiz_guinee.apk",
      githubLink: "https://github.com/ibrahimakalilkante302-rgb/smartbiz-guinee"
    },
    {
      title: "GesContact",
      subtitle: "Application de gestion de contacts",
      badge: "Flutter & SQLite",
      mockup: <GesContactMockup />,
      glowColor: "group-hover:shadow-cyan/15",
      borderColor: "hover:border-cyan-400/30",
      description: "Une application mobile fluide et moderne conçue pour organiser, catégoriser et gérer vos contacts professionnels et personnels en toute sécurité, avec des fonctionnalités de recherche intelligente et d'intégration d'appels directs.",
      features: [
        "Catégorisation intelligente (Professionnel, Personnel, etc.)",
        "Recherche instantanée et filtrage avancé",
        "Appels, SMS et emails directs depuis l'application",
        "Sauvegarde et restauration faciles des données"
      ],
      apkLink: "/downloads/gescontact.apk",
      githubLink: "https://github.com/ibrahimakalilkante302-rgb/gescontact"
    }
  ];

  return (
    <section id="projets" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-electric/5 blur-[120px] -z-10 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] rounded-full bg-cyan-400/5 blur-[140px] -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-electric/10 border border-electric/30 text-electric text-xs sm:text-sm font-bold uppercase tracking-wider mb-4">
            💼 Réalisations
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 text-glow-electric">
            Mes Projets Réalisés
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-electric to-cyan-400 mx-auto rounded-full mb-6"></div>
          <p className="text-slate-400 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed font-medium">
            Découvrez les applications phares que j'ai conçues et développées pour résoudre des problèmes concrets.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {projectsList.map((project, idx) => (
            <div key={idx} className="h-full">
              <ThreeDCard className="h-full">
                <div className={`bg-slate-900/30 backdrop-blur-xl rounded-3xl overflow-hidden border border-slate-800/80 shadow-2xl transition-all duration-500 flex flex-col h-full group ${project.borderColor} ${project.glowColor}`}>
                  
                  {/* Interactive Smartphone Container Area */}
                  <div className="h-80 bg-slate-950/40 border-b border-slate-850 p-6 flex items-center justify-center relative overflow-hidden shrink-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900/30"></div>
                    {/* Glowing mesh background */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-electric/10 rounded-full blur-[60px] pointer-events-none group-hover:scale-125 transition-transform duration-500"></div>
                    
                    {/* Live Mobile Mockup */}
                    <div className="relative z-10 transform group-hover:scale-105 group-hover:-translate-y-1 transition-all duration-500">
                      {project.mockup}
                    </div>
                  </div>

                  {/* Description & Features */}
                  <div className="p-8 sm:p-10 flex flex-col flex-1">
                    <div className="flex items-center gap-3.5 mb-5">
                      <span className="inline-block px-3 py-1 rounded-full bg-slate-950/60 border border-slate-800 text-cyan-400 text-xs font-bold uppercase tracking-wider">
                        {project.badge}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                        {project.title}
                      </h3>
                    </div>
                    
                    <p className="text-slate-300 mb-6 leading-relaxed flex-1 text-sm sm:text-base font-medium">
                      {project.description}
                    </p>

                    <h4 className="font-bold text-slate-200 mb-3.5 text-sm sm:text-base">Fonctionnalités clés :</h4>
                    <ul className="space-y-3 mb-8">
                      {project.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start text-slate-300 text-sm sm:text-base font-medium">
                          <ChevronRight className="w-5 h-5 text-cyan-400 mr-2 shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Action buttons (APK & GitHub) */}
                    <div className="pt-6 border-t border-slate-800/80 mt-auto flex flex-col sm:flex-row gap-4">
                      <a
                        href={project.apkLink}
                        download
                        className="flex-1 inline-flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-2xl text-white font-bold text-sm bg-gradient-to-r from-electric to-cyan-500 hover:opacity-90 hover:scale-[1.02] active:scale-95 shadow-lg shadow-electric/15 hover:shadow-electric/30 transition-all duration-300 group text-center cursor-pointer"
                      >
                        <Smartphone className="w-4.5 h-4.5 group-hover:-translate-y-0.5 transition-transform" />
                        Télécharger l'APK
                        <Download className="w-4 h-4 ml-0.5 animate-pulse" />
                      </a>
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-2xl border border-slate-800 hover:border-cyan-400/40 text-slate-300 hover:text-white font-bold text-sm bg-slate-950/60 hover:bg-slate-900/80 hover:scale-[1.02] active:scale-95 shadow-md transition-all duration-300 text-center cursor-pointer"
                      >
                        <GithubIcon className="w-4.5 h-4.5" />
                        Code sur GitHub
                      </a>
                    </div>
                  </div>

                </div>
              </ThreeDCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Projects;
