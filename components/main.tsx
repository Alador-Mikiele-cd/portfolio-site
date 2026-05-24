'use client'

import { motion } from 'framer-motion'


export default function Main({karantina}:{karantina : string}){
    return(
        <div className="bg-[url('/bg.jfif')] bg-cover bg-center h-dvh" id='home'>
        <motion.img
  initial={{opacity:0,x:-100}} 
  animate={{opacity:1,x:0}} 
  transition={{duration:0.6,delay:0.8}} src="11.jpg" alt=""  className="rounded-[20%] text-2xl absolute top-[50px] left-[200px] w-[300px] z-[0]" />
            <div className="w-full max-w-[1200px] m-auto flex flex-col items-center">
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-[#D3D3D3] font-iosevka text-[200px] mt-[140px] leading-none"
              >ALADOR</motion.h1>

              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className={`${karantina} text-[#D3D3D3] text-[200px] leading-none`}
              >FRONTEND</motion.h1>

              <motion.h3
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className='text-gray-400'
              >DEVELOPER</motion.h3>

              <motion.p
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className='text-gray-400'
              >I build fast, modern web apps for businesses</motion.p>
             <div className="">
                 <motion.button
               initial={{opacity: 0 , x:40}}
               animate={{opacity: 1 , x:0}}
               transition={{ duration: 0.6, delay: 0.8 }}
               className="mx-[20px] mt-[20px] bg-transparent hover:bg-[#6b5dd3] text-white font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-4xl"
               
              >  <a href="#contact">Hire me</a>  </motion.button>
              <motion.button
               initial={{opacity: 0 , x:40}}
               animate={{opacity: 1 , x:0}}
               transition={{ duration: 0.6, delay: 0.8 }}
               className="mx-[20px] bg-[#6b5dd3] hover:bg-[#6b5dd3] text-white font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-4xl"
              >Download CV </motion.button>
             </div>
              
            </div>
            <div className="overflow-hidden whitespace-nowrap">
  
</div> 
 
  <motion.img
  initial={{opacity:0,x:100}} 
  animate={{opacity:1,x:0}} 
  transition={{duration:0.6,delay:0.8}}
  src="22.jpg" alt="" className=" rounded-[20%]  text-2xl absolute w-[300px] top-[550px] left-[1230px]" 
  />    
        </div>
    )
}