import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Gallery from './components/Gallery';
import logo from './assets/logo.png';

const items = [
  { src: `${process.env.PUBLIC_URL}./images/1.jpeg`, alt: '' },
  { src: `${process.env.PUBLIC_URL}/images/2.jpeg`, alt: '' },
  { src: `${process.env.PUBLIC_URL}/images/3.jpeg`, alt: '' },
  { src: `${process.env.PUBLIC_URL}/images/4.jpeg`, alt: '' },
  { src: `${process.env.PUBLIC_URL}/images/5.jpeg`, alt: '' },
  { src: `${process.env.PUBLIC_URL}/images/6.jpeg`, alt: '' },
  { src: `${process.env.PUBLIC_URL}/images/7.jpeg`, alt: '' },
  { src: `${process.env.PUBLIC_URL}/images/8.jpeg`, alt: '' },
  { src: `${process.env.PUBLIC_URL}/images/9.jpeg`, alt: '' },
  { src: `${process.env.PUBLIC_URL}/images/10.jpeg`, alt: '' },
  { src: `${process.env.PUBLIC_URL}/images/11.jpeg`, alt: '' },
  { src: `${process.env.PUBLIC_URL}/images/12.jpeg`, alt: '' },
  { src: `${process.env.PUBLIC_URL}/images/13.jpeg`, alt: '' },
  { src: `${process.env.PUBLIC_URL}/images/14.jpeg`, alt: '' },
  { src: `${process.env.PUBLIC_URL}/images/15.jpeg`, alt: '' },
  { src: `${process.env.PUBLIC_URL}/images/16.jpeg`, alt: '' },
  { src: `${process.env.PUBLIC_URL}/images/17.jpeg`, alt: '' },
  { src: `${process.env.PUBLIC_URL}/images/18.jpeg`, alt: '' },
  { src: `${process.env.PUBLIC_URL}/images/19.jpeg`, alt: '' },
  { src: `${process.env.PUBLIC_URL}/images/20.jpeg`, alt: '' },
  { src: `${process.env.PUBLIC_URL}/images/21.jpeg`, alt: '' },
  { src: `${process.env.PUBLIC_URL}/images/22.jpeg`, alt: '' },
  { src: `${process.env.PUBLIC_URL}/images/23.jpeg`, alt: '' },
  { src: `${process.env.PUBLIC_URL}/images/24.jpeg`, alt: '' },
  { src: `${process.env.PUBLIC_URL}/images/25.jpeg`, alt: '' },
  { src: `${process.env.PUBLIC_URL}/images/26.jpeg`, alt: '' },
  { src: `${process.env.PUBLIC_URL}/images/27.jpeg`, alt: '' },
  { src: `${process.env.PUBLIC_URL}/images/28.jpeg`, alt: '' }
];

export default function App() {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 200); // Muestra el botón después de 200px de scroll
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Desplazamiento suave al inicio
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FFF3D9' }}>
      <Header 
        logoSrc={logo} 
        title="reposteriagarci_as" // Nombre de usuario estilo Instagram
      />
      
      <Gallery items={items} />

      {/* Botón flotante estilo Instagram */}
      <AnimatePresence>
        {showScrollButton && (
          <motion.button 
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-gradient-to-tr from-[#B8774C] via-[#B8322E] to-[#9E4B2A] shadow-xl flex items-center justify-center text-white hover:scale-105 transition-transform z-50"
            initial={{ opacity: 0, scale: 0.8 }} // Animación de entrada
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }} // Animación de salida
            transition={{ duration: 0.3 }}
          >
            <svg 
              className="w-6 h-6 animate-bounce" // Animación en loop
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M5 15l7-7 7 7" // Flecha hacia arriba
              />
            </svg>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}