import { motion } from 'framer-motion';

export default function Header({ logoSrc }) {
  return (
    <header className="sticky top-0 z-50 bg-[#F3D8A4] border-b border-[#B8774C]/80 backdrop-blur-sm">
      <div className="flex items-center justify-between px-4 h-20 max-w-5xl mx-auto">
        {/* Text Section */}
        <motion.div
          className="flex flex-col ml-auto"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="font-playfair text-2xl font-semibold text-[#5C2B1A] leading-tight">
            Repostería
          </span>
          <span className="font-playfair text-3xl font-bold text-[#9E4B2A] leading-tight">
            Garcia's
          </span>
        </motion.div>

        {/* Logo Section */}
        {logoSrc && (
          <motion.div
            className="relative group mr-auto"
            whileHover="hover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-[#9E4B2A]/20 to-[#B8774C]/30 rounded-full blur-sm group-hover:blur-lg group-hover:scale-110 transition-all duration-300" />
            <motion.img
              src={logoSrc}
              alt="Garcia's Logo"
              className="relative h-14 w-14 rounded-full border-2 border-[#9E4B2A]/80 shadow-lg hover:shadow-2xl transition-all"
              whileHover={{ scale: 1.1, rotate: 8 }}
            />
          </motion.div>
        )}
      </div>
    </header>
  );
}