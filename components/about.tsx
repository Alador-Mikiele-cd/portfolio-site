import { Karantina } from 'next/font/google'
import { motion } from 'framer-motion'

const karantina = Karantina({
  weight: '400',
  subsets: ['latin'],
})
export default function About() {
  return (
    
    <div id="about" className="overflow-hidden bg-[url('/ss.jpg')] bg-cover bg-center h-dvh">
    <h1 className="text-9xl text-center">About me</h1>
    <div className="w-full    flex  px-25  justify-between items-center mt-25">
        <div className=" flex flex-col">
           
            <h1 className="text-[40px] text-amber-50">👋Hi I'm Alador,<br/>  a frontend developer</h1>
            <h3 className=" text-[20px] text-amber-50"> from Addis Ababa, Ethiopia</h3>
            <a href="#project" className="bg-indigo-900 text-white text-[19px] rounded-3xl px-5 w-[45%] text-center font-bold ml-auto mt-5 hover:bg-white hover:text-blue-900"  >Projects</a>

        </div>
        <div className="flex flex-col items-center ">
           <img src="/ww.jpg" alt="" className=" w-[200px] rounded-[16px]"/>
           <div className=" flex my-[20px] ">
            <img src="/icons8-js-48.png" alt="" className=" w-[40px] h-[40px] mx-[10px]"/>
           <img src="/icons8-nodejs-48.png" alt="" className="w-[40px] h-[40px]  mx-[10px]"/>
           <img src="/icons8-python-50.png" alt="" className=" w-[40px] h-[40px]   mx-[10px]"/>
           <img src="/icons8-react-native-64.png" alt="" className="w-[40px] h-[40px]  mx-[10px]"/>
           <img src="/icons8-typescript-48.png" alt="" className="w-[40px] h-[40px]   mx-[10px]"/>
           <img src="/icons8-tailwindcss-48.png" alt="" className="w-[40px] h-[40px]   mx-[10px]"/>
           </div>
           
        </div>
        <div className="  ">
          <div className=" flex justify-around">
             <h1 className="text-white text-[50px]">2+</h1>
             <h1 className="text-white text-[50px]">15+</h1>
          </div>
          <div className=" flex justify-around ">
             
             <h1 className="text-white text-center">YEARS <br /> CODING</h1>
             <h1 className="text-white text-center">PROJECT<br/> SHIPED</h1>
          </div>
             <p className="text-gray-400 w-full max-w-xs mt-[30px] " >I build fast, modern web applications using React, Next.js, and Tailwind CSS. Self-taught 
              and driven by a genuine obsession with clean code and great user experiences.
             </p>
        </div>
    </div>
    <div className="flex items-center animate-marquee text-amber-50 mt-[120px]">
      <span className={`${karantina.className} mx-8 text-[50px]`}>Javascript</span>
        <img src="/icons8-js-48.png" alt="" className=" w-[40px] h-[40px] mx-[10px]"/>
    <span className={`${karantina.className} mx-8 text-[50px]`}>React</span>
     <img src="/icons8-react-native-64.png" alt="" className="w-[40px] h-[40px]  mx-[10px]"/>
    <span className={`${karantina.className} mx-8 text-[50px]`}>Next.js</span>
    <span className={`${karantina.className} mx-8 text-[50px]`}>Tailwind</span>
     <img src="/icons8-tailwindcss-48.png" alt="" className="w-[40px] h-[40px]   mx-[10px]"/>
    <span className={`${karantina.className} mx-8 text-[50px]`}>TypeScript</span>
    <img src="/icons8-typescript-48.png" alt="" className="w-[40px] h-[40px]   mx-[10px]"/>
    <span className={`${karantina.className} mx-8 text-[50px]`}>Nodejs</span>
     <img src="/icons8-nodejs-48.png" alt="" className="w-[40px] h-[40px]  mx-[10px]"/>
     <span className={`${karantina.className} mx-8 text-[50px]`}>Python</span>
      <img src="/icons8-python-50.png" alt="" className=" w-[40px] h-[40px]   mx-[10px]"/>
    
    <span className={`${karantina.className} mx-8 text-[50px]`}>Tailwind</span>
     <img src="/icons8-tailwindcss-48.png" alt="" className="w-[40px] h-[40px]   mx-[10px]"/>
    <span className={`${karantina.className} mx-8 text-[50px]`}>TypeScript</span>
    <img src="/icons8-typescript-48.png" alt="" className="w-[40px] h-[40px]   mx-[10px]"/>
    <span className={`${karantina.className} mx-8 text-[50px]`}>Python</span>
      <img src="/icons8-python-50.png" alt="" className=" w-[40px] h-[40px]   mx-[10px]"/>
  </div>
    </div>

  );
}
