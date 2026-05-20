import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

export const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-slate-900 to-slate-950 text-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[110px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-glow">Me Contacter</h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full mb-6"></div>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
            N'hésitez pas à me contacter pour une collaboration ou simplement pour échanger.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-10"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Informations de contact</h3>
            
            <div className="flex items-center space-x-6 group">
              <div className="w-14 h-14 bg-blue-950/40 border border-blue-500/20 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:border-blue-500/40 transition-all duration-300">
                <Phone className="text-blue-400 w-6 h-6" />
              </div>
              <div>
                <p className="text-slate-400 text-sm font-semibold mb-1">Téléphone</p>
                <p className="text-xl font-bold text-white">+224 629 020 550</p>
              </div>
            </div>

            <div className="flex items-center space-x-6 group">
              <div className="w-14 h-14 bg-blue-950/40 border border-blue-500/20 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:border-blue-500/40 transition-all duration-300">
                <Mail className="text-blue-400 w-6 h-6" />
              </div>
              <div>
                <p className="text-slate-400 text-sm font-semibold mb-1">Email</p>
                <a href="mailto:ibrahimakalilkante302@gmail.com" className="text-lg sm:text-xl font-bold text-white hover:text-blue-400 transition-colors break-all">
                  ibrahimakalilkante302<br className="sm:hidden"/>@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-6 group">
              <div className="w-14 h-14 bg-blue-950/40 border border-blue-500/20 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:border-blue-500/40 transition-all duration-300">
                <MapPin className="text-blue-400 w-6 h-6" />
              </div>
              <div>
                <p className="text-slate-400 text-sm font-semibold mb-1">Adresse</p>
                <p className="text-xl font-bold text-white">Université de Labé, Guinée</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-slate-900/30 p-8 sm:p-10 rounded-3xl border border-slate-800/80 shadow-2xl hover:border-blue-500/20 transition-all duration-300"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-slate-300 mb-2">Nom complet</label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-slate-950/40 border border-slate-800/80 rounded-xl px-4 py-3.5 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all duration-300 focus:bg-slate-950/80 shadow-inner"
                  placeholder="Votre nom"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-bold text-slate-300 mb-2">Adresse email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-slate-950/40 border border-slate-800/80 rounded-xl px-4 py-3.5 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all duration-300 focus:bg-slate-950/80 shadow-inner"
                  placeholder="votre@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-bold text-slate-300 mb-2">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full bg-slate-950/40 border border-slate-800/80 rounded-xl px-4 py-3.5 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all duration-300 focus:bg-slate-950/80 shadow-inner resize-none"
                  placeholder="Comment puis-je vous aider ?"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full flex justify-center items-center px-8 py-4 border border-transparent text-base font-bold rounded-xl text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-500/20 active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 cursor-pointer"
              >
                Envoyer le message
                <Send className="ml-2 w-5 h-5" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
