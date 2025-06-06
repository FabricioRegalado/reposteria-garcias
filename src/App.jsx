import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Gallery from './components/Gallery';
import logo from './assets/logo.png';

const items = [
  { src: 'images/1.jpg', alt: '' },
  { src: 'images/2.jpg', alt: '' },
  { src: 'images/3.jpg', alt: '' },
  { src: 'images/4.jpg', alt: '' },
  { src: 'images/5.jpg', alt: '' },
  { src: 'images/6.jpg', alt: '' },
  { src: 'images/7.jpg', alt: '' },
  { src: 'images/8.jpg', alt: '' },
  { src: 'images/9.jpg', alt: '' },
  { src: 'images/10.jpg', alt: '' },
  { src: 'images/11.jpg', alt: '' },
  { src: 'images/12.jpg', alt: '' },
  { src: 'images/13.jpg', alt: '' },
  { src: 'images/14.jpg', alt: '' },
  { src: 'images/15.jpg', alt: '' },
  { src: 'images/16.jpg', alt: '' },
  { src: 'images/17.jpg', alt: '' },
  { src: 'images/18.jpg', alt: '' },
  { src: 'images/19.jpg', alt: '' },
  { src: 'images/20.jpg', alt: '' },
  { src: 'images/21.jpg', alt: '' },
  { src: 'images/22.jpg', alt: '' },
  { src: 'images/23.jpg', alt: '' },
  { src: 'images/24.jpg', alt: '' },
  { src: 'images/25.jpg', alt: '' },
  { src: 'images/26.jpg', alt: '' },
  { src: 'images/27.jpg', alt: '' },
  { src: 'images/28.jpg', alt: '' }
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