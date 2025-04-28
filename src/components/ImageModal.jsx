import { motion } from 'framer-motion';
import { FiX, FiInstagram } from 'react-icons/fi';

export default function ImageModal({ item, onClose }) {
  return (
    <motion.div
      className="fixed inset-0 bg-[#5C2B1A]/90 flex items-center justify-center z-50 backdrop-blur-2xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      <motion.div
        className="relative bg-gradient-to-br from-[#FFF3D9]/97 to-[#F3D8A4]/95 rounded-2xl overflow-hidden shadow-2xl w-[90vw] max-w-4xl max-h-[90vh] flex flex-col border-2 border-[#FFF3D9]/20"
        initial={{ scale: 0.96, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.96, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 280, damping: 22 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header mejorado */}
        <div className="flex items-center justify-between p-5 border-b border-[#FFF3D9]/20 bg-gradient-to-r from-[#FFF3D9]/30 to-transparent backdrop-blur-sm">
          <div className="flex items-center space-x-4">
            <motion.div
              className="p-0.5 rounded-full bg-gradient-to-tr from-amber-400 to-rose-500 hover:from-amber-500 hover:to-rose-600 transition-all shadow-inner"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={item.src} // Ajuste de ruta
                alt="Profile"
                className="w-12 h-12 rounded-full object-cover border-2 border-white dark:border-gray-900 shadow-sm"
              />
            </motion.div>
            <div>
              <h3 className="font-bold text-gray-900 dark:text-gray-100 text-xl tracking-wide">Repostería García's</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 flex items-center gap-1.5">
                <FiInstagram className="w-4 h-4" />
                @reposteriagarci_as
              </p>
            </div>
          </div>
          <motion.button
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 rounded-full bg-gray-100/50 dark:bg-gray-800/50 hover:bg-gray-200/50 dark:hover:bg-gray-700/50 transition-colors shadow-sm"
            onClick={onClose}
          >
            <FiX className="w-6 h-6 text-gray-700 dark:text-gray-300" />
          </motion.button>
        </div>

        {/* Imagen principal con efecto parallax */}
        <motion.div
          className="flex-1 relative overflow-hidden flex items-center justify-center p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15 }}
        >
          <motion.div
            className="w-full h-full max-h-[65vh] transform origin-center"
            whileHover={{ scale: 1.03 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <img
              src={item.src} // Ajuste de ruta
              alt={item.alt}
              className="w-full h-full object-contain rounded-xl shadow-lg cursor-default"
              style={{ transform: 'translateZ(0)' }}
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/10 pointer-events-none" />
        </motion.div>

        {/* Footer con efecto vidrio esmerilado */}
        <div className="p-6 bg-gradient-to-t from-[#FFF3D9]/50 to-transparent border-t border-[#FFF3D9]/20 backdrop-blur-sm">
          <motion.a
            href="https://www.instagram.com/reposteriagarci_as/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center space-x-3 px-8 py-4 bg-gradient-to-r from-[#B8322E] to-[#9E4B2A] hover:from-[#B8774C] hover:to-[#B8322E] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <FiInstagram className="w-6 h-6 transform group-hover:scale-110 transition-transform" />
            <span className="text-lg tracking-wide">Ver en Instagram</span>
          </motion.a>
        </div>
      </motion.div>
    </motion.div>
  );
}