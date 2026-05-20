import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Smartphone, 
  Globe, 
  Code2, 
  Terminal, 
  Database, 
  Briefcase, 
  Megaphone, 
  Lightbulb, 
  Users, 
  GitBranch, 
  Laptop, 
  Cloud, 
  PenTool, 
  Cpu
} from 'lucide-react';

type Skill = {
  name: string;
  level: number;
  icon: React.ReactNode;
  color: string;
};

type SkillCategories = {
  [key: string]: Skill[];
};

export const Skills = () => {
  const [activeCategory, setActiveCategory] = useState<'techniques' | 'transversales' | 'outils'>('techniques');

  const categories = [
    { id: 'techniques', label: 'Techniques' },
    { id: 'transversales', label: 'Transversales' },
    { id: 'outils', label: 'Outils' }
  ];

  const skillsData: SkillCategories = {
    techniques: [
      { name: "Flutter (Mobile)", level: 85, icon: <Smartphone className="w-6 h-6" />, color: "from-blue-600 to-cyan-400" },
      { name: "Applications Web (React / Vite)", level: 80, icon: <Globe className="w-6 h-6" />, color: "from-blue-600 to-indigo-500" },
      { name: "Python", level: 75, icon: <Terminal className="w-6 h-6" />, color: "from-yellow-500 to-amber-500" },
      { name: "C/C++", level: 70, icon: <Code2 className="w-6 h-6" />, color: "from-slate-500 to-slate-400" },
      { name: "SQL & Bases de données", level: 75, icon: <Database className="w-6 h-6" />, color: "from-emerald-500 to-teal-500" }
    ],
    transversales: [
      { name: "Gestion de Projet (Agile/Scrum)", level: 75, icon: <Briefcase className="w-6 h-6" />, color: "from-purple-500 to-indigo-500" },
      { name: "Marketing Digital", level: 80, icon: <Megaphone className="w-6 h-6" />, color: "from-pink-500 to-rose-500" },
      { name: "Résolution de Problèmes", level: 85, icon: <Lightbulb className="w-6 h-6" />, color: "from-amber-400 to-orange-500" },
      { name: "Travail en Équipe", level: 90, icon: <Users className="w-6 h-6" />, color: "from-teal-400 to-emerald-500" }
    ],
    outils: [
      { name: "Git & GitHub", level: 85, icon: <GitBranch className="w-6 h-6" />, color: "from-slate-700 to-slate-900" },
      { name: "VS Code & Android Studio", level: 90, icon: <Laptop className="w-6 h-6" />, color: "from-blue-500 to-sky-500" },
      { name: "Firebase & Supabase", level: 75, icon: <Cloud className="w-6 h-6" />, color: "from-orange-500 to-red-500" },
      { name: "Figma (UI/UX)", level: 70, icon: <PenTool className="w-6 h-6" />, color: "from-purple-600 to-pink-500" },
      { name: "SQLite", level: 80, icon: <Cpu className="w-6 h-6" />, color: "from-cyan-500 to-blue-500" }
    ]
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        type: 'spring' as const, 
        stiffness: 100, 
        damping: 15 
      } 
    }
  };

  return (
    <section id="competences" className="py-24 bg-transparent relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-1/4 left-10 w-[300px] h-[300px] bg-electric/5 rounded-full blur-[100px] pointer-events-none -z-10"></div>
      <div className="absolute bottom-1/4 right-10 w-[300px] h-[300px] bg-cyan-400/5 rounded-full blur-[100px] pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-400/10 border border-cyan-400/30 text-cyan-400 text-xs sm:text-sm font-bold uppercase tracking-wider mb-4">
              🎯 Expertise
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 text-glow-electric">
              Mes Compétences
            </h2>
            <div className="h-1.5 w-24 bg-gradient-to-r from-electric to-cyan-400 mx-auto rounded-full mb-6"></div>
            <p className="text-slate-400 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed font-medium">
              Découvrez mes compétences techniques, mes soft skills et les outils que j'utilise au quotidien pour concevoir des produits digitaux performants.
            </p>
          </motion.div>
        </div>

        {/* Tab Controls */}
        <div className="flex justify-center mb-12">
          <div className="bg-slate-900/60 p-1.5 rounded-2xl border border-slate-800/80 flex gap-2 backdrop-blur-md">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as any)}
                className={`relative px-6 py-3 rounded-xl text-sm font-bold tracking-wide transition-colors duration-300 cursor-pointer ${
                  activeCategory === cat.id 
                    ? 'text-white' 
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {activeCategory === cat.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-gradient-to-r from-electric to-cyan-500 rounded-xl -z-10 shadow-lg shadow-electric/25"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Panel */}
        <div className="min-h-[380px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              variants={containerVariants}
              initial="hidden"
              animate="show"
              exit={{ opacity: 0, y: -10, transition: { duration: 0.15 } }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto"
            >
              {skillsData[activeCategory].map((skill, index) => (
                <motion.div
                  key={skill.name}
                  variants={itemVariants}
                  className="bg-slate-900/30 backdrop-blur-xl border border-slate-800/80 hover:border-electric/40 rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-electric/5 group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-slate-950/60 border border-slate-850 text-cyan-400 group-hover:scale-115 group-hover:text-electric transition-all duration-300">
                        {skill.icon}
                      </div>
                      <h3 className="font-bold text-white text-base sm:text-lg group-hover:text-cyan-400 transition-colors duration-300">
                        {skill.name}
                      </h3>
                    </div>
                    <span className="text-sm font-extrabold text-cyan-400 bg-cyan-400/10 px-3 py-1 rounded-lg border border-cyan-400/20">
                      {skill.level}%
                    </span>
                  </div>

                  {/* Custom Progress Bar */}
                  <div className="w-full mt-4">
                    <div className="h-2.5 w-full bg-slate-950/80 rounded-full border border-slate-850 overflow-hidden relative">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1.2, ease: 'easeOut', delay: index * 0.05 }}
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full shadow-lg shadow-electric/20 relative`}
                      >
                        {/* Glow tip at the end of progress */}
                        <div className="absolute right-0 top-0 bottom-0 w-2 bg-white blur-[2px] opacity-70 rounded-full" />
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
export default Skills;
