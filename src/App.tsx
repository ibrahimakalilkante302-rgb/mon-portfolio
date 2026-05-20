import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Timeline } from './components/Timeline';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ParticleBackground } from './components/ParticleBackground';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 font-sans selection:bg-electric selection:text-white text-slate-100 overflow-x-hidden relative">
      <ParticleBackground />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
    }

export default App;
