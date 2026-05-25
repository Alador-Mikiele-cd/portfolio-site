'use client'

import { motion } from 'framer-motion'

export default function Main({ karantina }: { karantina: string }) {
  return (
    <div className="bg-[url('/bg.jfif')] bg-cover bg-center min-h-dvh relative overflow-hidden" id='home'>
      
      {/* Left decorative image - hidden on mobile */}
      <motion.img
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        src="11.jpg"
        alt=""
        className="rounded-[20%] absolute top-[50px] left-[20px] lg:left-[200px] w-[80px] md:w-[140px] lg:w-[300px] z-[0] hidden md:block"
      />

      {/* Main content */}
      <div className="w-full max-w-[1200px] mx-auto flex flex-col items-center px-4 relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[#D3D3D3] font-iosevka text-[60px] md:text-[120px] lg:text-[200px] mt-[80px] md:mt-[140px] leading-none text-center"
        >ALADOR</motion.h1>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className={`${karantina} text-[#D3D3D3] text-[60px] md:text-[120px] lg:text-[200px] leading-none text-center`}
        >FRONTEND</motion.h1>

        <motion.h3
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className='text-gray-400 text-lg md:text-2xl'
        >DEVELOPER</motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className='text-gray-400 text-sm md:text-base text-center mt-2 px-4'
        >I build fast, modern web apps for businesses</motion.p>

        <div className="flex flex-wrap justify-center gap-4 mt-6">
          <motion.button
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="bg-transparent hover:bg-[#6b5dd3] text-white font-semibold py-2 px-6 border border-blue-500 hover:border-transparent rounded-full"
          >
            <a href="#contact">Hire me</a>
          </motion.button>

          <motion.button
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="bg-[#6b5dd3] text-white font-semibold py-2 px-6 border border-blue-500 hover:border-transparent rounded-full"
          >Download CV</motion.button>
        </div>
      </div>

      {/* Right decorative image - hidden on mobile */}
      <motion.img
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        src="22.jpg"
        alt=""
        className="rounded-[20%] absolute w-[80px] md:w-[140px] lg:w-[300px] top-[50px] right-[20px] lg:right-[0px] hidden md:block"
      />
    </div>
  )
}