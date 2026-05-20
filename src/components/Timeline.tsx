import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Code2, Layers, Rocket } from 'lucide-react';
import { ThreeDCard } from './ThreeDCard';

export const Timeline = () => {
  const steps = [
    {
      year: "2024 - 2025",
      title: "1ère Année MIAGE",
      subtitle: "Bases & Fondations",
      institution: "Université de Labé, Guinée",
      icon: <Code2 className="w-5 h-5 text-cyan-400" />,
      color: "border-cyan-400/30 shadow-glow-cyan/10 text-cyan-400",
      description: "Acquisition des fondamentaux de l'informatique et de la gestion d'entreprise.",
      skills: ["Algorithmique & C/C++", "Modélisation de Données (SQL)", "Systèmes d'Information", "Économie & Comptabilité", "Architecture des Ordinateurs"],
      status: "completed"
    },
    {
      year: "2025 - 2026 (En cours)",
      title: "2ème Année MIAGE",
      subtitle: "Spécialisation Web & Mobile",
      institution: "Université de Labé, Guinée",
      icon: <Layers className="w-5 h-5 text-electric" />,
      color: "border-electric/30 shadow-glow-electric/10 text-electric",
      description: "Développement d'applications complexes et intégration des technologies modernes.",
      skills: ["Développement Mobile (Flutter)", "Développement Web (React/Vite)", "Programmation Orientée Objet", "Marketing Digital", "Recherche Opérationnelle"],
      status: "current"
    },
    {
      year: "2026 - 2027 (Perspectives)",
      title: "3ème Année MIAGE",
      subtitle: "Ingénierie & Professionnalisation",
      institution: "Université de Labé, Guinée",
      icon: <Rocket className="w-5 h-5 text-indigo-400" />,
      color: "border-indigo-400/30 text-indigo-400",
      description: "Conduite de projets d'envergure, architectures logicielles et immersion professionnelle.",
      skills: ["Gestion de Projet Agile", "Génie Logiciel & DevOps", "Systèmes Décisionnels (BI)", "Sécurité des SI", "Stage de Fin d'Études (6 mois)"],
      status: "future"
    }
  ];

  return (
    <section id="parcours" className="py-24 bg-transparent relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-electric/5 rounded-full blur-[140px] pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-electric/10 border border-electric/30 text-electric text-xs sm:text-sm font-bold uppercase tracking-wider mb-4">
            <GraduationCap className="w-4 h-4 animate-bounce" />
            Cursus Universitaire
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 text-glow-electric">
            Ma Formation MIAGE
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-electric to-cyan-400 mx-auto rounded-full mb-6"></div>
          <p className="text-slate-400 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed font-medium">
            Méthodes Informatiques Appliquées à la Gestion des Entreprises. L'alliance parfaite entre le développement technologique et la gestion stratégique d'entreprise.
          </p>
        </motion.div>

        {/* Timeline wrapper */}
        <div className="relative max-w-4xl mx-auto mt-16">
          {/* Main vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-800 transform md:-translate-x-1/2">
            <motion.div 
              initial={{ height: 0 }}
              whileInView={{ height: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="w-full h-full bg-gradient-to-b from-cyan-400 via-electric to-slate-800"
            />
          </div>

          {/* Steps list */}
          <div className="space-y-12 relative">
            {steps.map((step, idx) => {
              const isEven = idx % 2 === 0;
              
              return (
                <div key={idx} className="flex flex-col md:flex-row items-stretch md:justify-between relative">
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 top-6 transform -translate-x-[9px] md:-translate-x-1/2 z-10 flex items-center justify-center">
                    <motion.div 
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: "spring", stiffness: 200, delay: idx * 0.3 }}
                      className={`w-[20px] h-[20px] rounded-full border-4 bg-slate-950 flex items-center justify-center ${
                        step.status === 'current' 
                          ? 'border-electric shadow-[0_0_12px_rgba(0,82,255,0.8)]' 
                          : step.status === 'completed'
                          ? 'border-cyan-400'
                          : 'border-slate-700'
                      }`}
                    >
                      {step.status === 'current' && (
                        <span className="absolute w-[28px] h-[28px] rounded-full border border-electric/40 animate-ping"></span>
                      )}
                    </motion.div>
                  </div>

                  {/* Spacer for MD screens to push the card to one side */}
                  <div className={`hidden md:block w-[45%] ${isEven ? 'order-1' : 'order-2'}`}></div>

                  {/* Timeline Card */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: idx * 0.2 }}
                    className={`w-full md:w-[45%] pl-12 md:pl-0 ${isEven ? 'order-2 md:order-1' : 'order-1 md:order-2'}`}
                  >
                    <ThreeDCard>
                      <div className={`p-6 sm:p-8 rounded-3xl border bg-slate-900/40 backdrop-blur-xl transition-all duration-300 hover:shadow-2xl ${
                        step.status === 'current'
                          ? 'border-electric/30 hover:border-electric/50 shadow-glow-electric/5'
                          : step.status === 'completed'
                          ? 'border-cyan-400/20 hover:border-cyan-400/40 shadow-glow-cyan/5'
                          : 'border-slate-800/80 hover:border-indigo-400/30 shadow-2xl'
                      }`}>
                        {/* Header card details */}
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                          <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-slate-950/60 border ${step.color}`}>
                            <Calendar className="w-3.5 h-3.5" />
                            {step.year}
                          </span>
                          
                          {step.status === 'current' && (
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-electric/10 text-electric border border-electric/20 animate-pulse">
                              Actuel
                            </span>
                          )}
                        </div>

                        <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">{step.title}</h3>
                        <p className="text-sm font-bold text-gradient bg-clip-text bg-gradient-to-r from-electric to-cyan-400 text-transparent mb-1">{step.subtitle}</p>
                        <p className="text-xs text-slate-400 font-semibold mb-4">{step.institution}</p>

                        <p className="text-slate-300 text-sm leading-relaxed mb-6 font-medium">
                          {step.description}
                        </p>

                        {/* Program skills/topics list */}
                        <div className="border-t border-slate-800/80 pt-4">
                          <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Enseignements clés :</span>
                          <div className="flex flex-wrap gap-2">
                            {step.skills.map((skill, sIdx) => (
                              <span 
                                key={sIdx} 
                                className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-slate-950/40 border border-slate-800 hover:border-electric/30 text-slate-300 hover:text-white transition-colors"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </ThreeDCard>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Timeline;
