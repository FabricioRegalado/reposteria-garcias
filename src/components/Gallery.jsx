import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ImageModal from './ImageModal';

export default function Gallery({ items }) {
  const [selected, setSelected] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF3D9] to-[#F3D8A4]">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          className="grid gap-6 grid-cols-auto-fit-minmax"
          style={{
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(320px, 100%), 1fr))',
            gridAutoRows: 'masonry'
          }}
          layout
        >
          {items.map((item, i) => (
            <motion.div
              key={`item-${i}`}
              className="relative group bg-[#FFF3D9] rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col transform hover:-translate-y-1.5 before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-tr from-[#B8322E]/20 to-[#9E4B2A]/20 before:blur-lg before:opacity-0 group-hover:before:opacity-100"
              layout
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Contenedor de imagen con efecto parallax */}
              <div className="relative flex-1 overflow-hidden">
                <motion.div
                  className="w-full h-full transform origin-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <motion.img
                    src={`${process.env.PUBLIC_URL}${item.src}`} // Ajuste de ruta
                    alt={item.alt}
                    className="w-full h-full object-cover cursor-pointer"
                    loading="lazy"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    onMouseEnter={() => setHoveredIndex(i)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    style={{ transform: 'translateZ(0)' }} // Optimización GPU
                  />
                </motion.div>

                <AnimatePresence>
                  {hoveredIndex === i && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    />
                  )}
                </AnimatePresence>
              </div>

              {/* Sección inferior con efecto vidrio esmerilado */}
              <div className="p-4 bg-[#F3D8A4]/80 backdrop-blur-sm border-t border-[#FFF3D9]/20">
                <motion.button
                  onClick={() => setSelected(item)}
                  className="w-full flex items-center justify-center px-5 py-3 bg-gradient-to-r from-[#9E4B2A] via-[#B8322E] to-[#5C2B1A] hover:from-[#B8774C] hover:via-[#B8322E] hover:to-[#9E4B2A] transition-all rounded-xl group shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.span
                    className="text-sm font-bold text-white tracking-wide flex space-x-1"
                    initial="hidden"
                    animate="visible"
                    variants={{
                      hidden: { opacity: 0 },
                      visible: {
                        opacity: 1,
                        transition: {
                          staggerChildren: 0.05,
                        },
                      },
                    }}
                  >
                    {"Ver".split("").map((char, index) => (
                      <motion.span
                        key={index}
                        variants={{
                          hidden: { opacity: 0, y: 10 },
                          visible: { opacity: 1, y: 0 },
                        }}
                      >
                        {char}
                      </motion.span>
                    ))}
                  </motion.span>
                  <motion.svg
                    className="w-6 h-6 text-white group-hover:text-gray-200 transition-colors ml-2"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    initial={{ x: -5 }}
                    animate={{ x: 0 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </motion.svg>
                </motion.button>
              </div>

              {/* Efecto de brillo en hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none overflow-hidden">
                <div className="absolute -inset-12 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent)]" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {selected && (
          <ImageModal
            item={selected}
            onClose={() => setSelected(null)}
            backdropClass="backdrop-blur-xl bg-[#5C2B1A]/85"
            modalClass="rounded-2xl overflow-hidden bg-[#FFF3D9] max-w-4xl shadow-2xl"
          />
        )}
      </AnimatePresence>
    </div>
  );
}