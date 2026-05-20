import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';

export const Hero = () => {
  return (
    <section id="accueil" className="min-h-screen flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-b from-slate-950 to-slate-900 text-white">
      {/* Premium Animated Particle/Glow Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-15%] w-[60%] h-[60%] rounded-full bg-blue-600/20 blur-[130px] animate-float-slow" />
        <div className="absolute bottom-[-10%] right-[-15%] w-[60%] h-[60%] rounded-full bg-indigo-600/15 blur-[130px] animate-float-medium" />
        <div className="absolute top-[35%] left-[50%] w-[30%] h-[30%] rounded-full bg-blue-500/8 blur-[90px] animate-float-fast" />
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="space-y-5">
            <span className="inline-block py-1.5 px-4 rounded-full bg-blue-900/40 border border-blue-500/30 text-blue-300 font-semibold text-xs sm:text-sm tracking-wider uppercase backdrop-blur-sm shadow-inner">
              🎓 Portfolio Personnel
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight text-glow">
              Bonjour, je suis <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-300 to-indigo-300">
                Ibrahima Kalil Kante
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 max-w-lg leading-relaxed font-medium">
              Étudiant en 2ème année MIAGE à l'Université de Labé. Passionné par le développement d'applications mobiles et web de pointe.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-5">
            <a
              href="#contact"
              className="inline-flex justify-center items-center px-8 py-4 border border-transparent text-base font-bold rounded-full shadow-lg shadow-blue-500/20 text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 hover:shadow-blue-500/50 hover:scale-[1.03] transition-all duration-300 active:scale-95 group"
            >
              Me contacter
              <ArrowRight className="ml-2 -mr-1 h-5 w-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </a>
            <a
              href="/IBRAHIMA_KALIL_KANTE_CV.pdf"
              download
              className="inline-flex justify-center items-center px-8 py-4 border border-transparent text-base font-bold rounded-full shadow-lg shadow-blue-500/20 text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 hover:shadow-blue-500/50 hover:scale-[1.03] transition-all duration-300 active:scale-95 group"
            >
              Télécharger mon CV
              <ArrowRight className="ml-2 -mr-1 h-5 w-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative lg:ml-auto"
        >
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 mx-auto">
            {/* Decorative background shape */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-indigo-500 rounded-[2.5rem] transform rotate-6 scale-105 opacity-25 blur-sm animate-pulse"></div>
            
            {/* Profile Image container */}
            <div className="relative h-full w-full rounded-[2.5rem] overflow-hidden border-4 border-slate-800 shadow-2xl bg-slate-900 flex items-center justify-center group-hover:border-blue-500 transition-colors duration-500">
              <img
                src="/1000117028.png"
                alt="Ibrahima Kalil Kante"
                className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-700"
              />
            </div>
            
            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="absolute -bottom-6 -left-6 bg-slate-900/90 backdrop-blur-md p-4 rounded-2xl shadow-2xl border border-slate-800/80 flex items-center gap-3.5"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-900/40 text-blue-400 border border-blue-500/20 font-bold text-xl">
                2e
              </div>
              <div>
                <p className="text-sm font-bold text-white">Année MIAGE</p>
                <p className="text-xs text-slate-400 font-medium">Université de Labé</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
