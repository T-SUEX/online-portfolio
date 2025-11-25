import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { TrainingSection } from './components/Training';
import { Contact } from './components/Contact';
import { ChatWidget } from './components/ChatWidget';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-slate-50">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <TrainingSection />
        <Contact />
      </main>
      <ChatWidget />
    </div>
  );
};

export default App;