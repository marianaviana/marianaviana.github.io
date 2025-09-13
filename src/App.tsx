// src/App.tsx
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyles } from './styles/globalStyles';
import { Header } from './components/layout/Header';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { Differentials } from './pages/Differentials';
import { Process } from './pages/Process';
import { Skills } from './pages/Skills';
import { TimelineComponent } from './components/ui/Timeline';
import { Projects } from './pages/Projects';
import { Feedbacks } from './pages/Feedbacks';
import { Contact } from './pages/Contact';
import { Footer } from './components/layout/Footer';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div className='App'>
        <Header />
        <Home />
        <About />
        <Services />
        <Differentials />
        <Process />
        <Skills />
        <TimelineComponent />
        <Projects />
        <Feedbacks />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;