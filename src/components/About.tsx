import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, User, BookOpen } from 'lucide-react';

export const About = () => {
  const details = [
    {
      icon: <User className="w-6 h-6 text-blue-500" />,
      title: "Identité",
      desc: "Ibrahima Kalil Kante"
    },
    {
      icon: <GraduationCap className="w-6 h-6 text-blue-500" />,
      title: "Formation",
      desc: "Étudiant 2ème année MIAGE"
    },
    {
      icon: <MapPin className="w-6 h-6 text-blue-500" />,
      title: "Localisation",
      desc: "Université de Labé, Guinée"
    },
    {
      icon: <BookOpen className="w-6 h-6 text-blue-500" />,
      title: "Passions",
      desc: "Tech, Code, Marketing Digital"
    }
  ];

  return (
    <section id="apropos" className="py-24 bg-gradient-to-b from-slate-900 to-slate-950 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-blue-600/5 blur-[120px] -z-10 -translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-glow">À propos de moi</h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-slate-300 space-y-6 text-base sm:text-lg leading-relaxed"
          >
            <p>
              Je suis <strong className="text-white">Ibrahima Kalil Kante</strong>, actuellement étudiant en deuxième année de MIAGE (Méthodes Informatiques Appliquées à la Gestion des Entreprises) à l'Université de Labé en Guinée.
            </p>
            <p>
              Passionné par les nouvelles technologies, je me spécialise dans la création d'applications modernes, tant sur mobile (avec Flutter) que sur le web. Mon objectif est d'utiliser mes compétences pour concevoir des solutions logicielles qui répondent aux besoins réels des entreprises et des utilisateurs.
            </p>
            <p>
              En plus de la programmation pure (Python, C/C++), j'ai un fort intérêt pour le Marketing Digital, ce qui me permet d'avoir une vision globale du cycle de vie d'un produit numérique.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {details.map((item, index) => (
              <div key={index} className="bg-slate-900/40 p-6 sm:p-8 rounded-3xl border border-slate-800/80 hover:border-blue-500/40 hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-300 hover:-translate-y-1 group">
                <div className="bg-blue-950/40 border border-blue-500/20 w-12 h-12 rounded-2xl flex items-center justify-center shadow-inner mb-5 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="font-bold text-white text-lg mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
