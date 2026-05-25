import { Karantina } from 'next/font/google'

const karantina = Karantina({
  weight: '400',
  subsets: ['latin'],
})

export default function About() {
  return (
    <div id="about" className="overflow-hidden bg-[url('/ss.jpg')] bg-cover bg-center min-h-dvh">
      
      {/* Title */}
      <h1 className="text-4xl md:text-7xl lg:text-9xl text-center pt-8 md:pt-12 text-white">About me</h1>

      {/* Main content */}
      <div className="w-full flex flex-col lg:flex-row px-6 md:px-12 lg:px-20 justify-between items-center mt-8 md:mt-16 gap-10">
        
        {/* Left — intro text */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          <h1 className="text-[24px] md:text-[32px] lg:text-[40px] text-amber-50">
            👋Hi I'm Alador,<br/> a frontend developer
          </h1>
          <h3 className="text-[16px] md:text-[18px] lg:text-[20px] text-amber-50 mt-2">
            from Addis Ababa, Ethiopia
          </h3>
          <a 
            href="#project" 
            className="bg-indigo-900 text-white text-[16px] md:text-[19px] rounded-3xl px-5 py-2 text-center font-bold mt-5 hover:bg-white hover:text-blue-900"
          >Projects</a>
        </div>

        {/* Center — photo and icons */}
        <div className="flex flex-col items-center">
          <img src="/ww.jpg" alt="" className="w-[150px] md:w-[200px] rounded-[16px]"/>
          <div className="flex flex-wrap justify-center my-4 gap-2">
            <img src="/icons8-js-48.png" alt="" className="w-[32px] h-[32px] md:w-[40px] md:h-[40px]"/>
            <img src="/icons8-nodejs-48.png" alt="" className="w-[32px] h-[32px] md:w-[40px] md:h-[40px]"/>
            <img src="/icons8-python-50.png" alt="" className="w-[32px] h-[32px] md:w-[40px] md:h-[40px]"/>
            <img src="/icons8-react-native-64.png" alt="" className="w-[32px] h-[32px] md:w-[40px] md:h-[40px]"/>
            <img src="/icons8-typescript-48.png" alt="" className="w-[32px] h-[32px] md:w-[40px] md:h-[40px]"/>
            <img src="/icons8-tailwindcss-48.png" alt="" className="w-[32px] h-[32px] md:w-[40px] md:h-[40px]"/>
          </div>
        </div>

        {/* Right — stats and bio */}
        <div className="flex flex-col items-center lg:items-start">
          <div className="flex justify-around w-full gap-10">
            <div className="text-center">
              <h1 className="text-white text-[36px] md:text-[50px]">2+</h1>
              <h2 className="text-white text-sm md:text-base text-center">MONTHS<br/>CODING</h2>
            </div>
            <div className="text-center">
              <h1 className="text-white text-[36px] md:text-[50px]">3+</h1>
              <h2 className="text-white text-sm md:text-base text-center">PROJECTS<br/>SHIPPED</h2>
            </div>
          </div>
          <p className="text-gray-400 max-w-xs mt-6 text-sm md:text-base text-center lg:text-left">
            I build fast, modern web applications using React, Next.js, and Tailwind CSS. Self-taught
            and driven by a genuine obsession with clean code and great user experiences.
          </p>
        </div>

      </div>

      {/* Marquee */}
      <div className="flex items-center overflow-hidden whitespace-nowrap animate-marquee text-amber-50 mt-12 md:mt-20">
        <span className={`${karantina.className} mx-6 text-[30px] md:text-[50px]`}>Javascript</span>
        <img src="/icons8-js-48.png" alt="" className="w-[30px] h-[30px] md:w-[40px] md:h-[40px] mx-2"/>
        <span className={`${karantina.className} mx-6 text-[30px] md:text-[50px]`}>React</span>
        <img src="/icons8-react-native-64.png" alt="" className="w-[30px] h-[30px] md:w-[40px] md:h-[40px] mx-2"/>
        <span className={`${karantina.className} mx-6 text-[30px] md:text-[50px]`}>Next.js</span>
        <span className={`${karantina.className} mx-6 text-[30px] md:text-[50px]`}>Tailwind</span>
        <img src="/icons8-tailwindcss-48.png" alt="" className="w-[30px] h-[30px] md:w-[40px] md:h-[40px] mx-2"/>
        <span className={`${karantina.className} mx-6 text-[30px] md:text-[50px]`}>TypeScript</span>
        <img src="/icons8-typescript-48.png" alt="" className="w-[30px] h-[30px] md:w-[40px] md:h-[40px] mx-2"/>
        <span className={`${karantina.className} mx-6 text-[30px] md:text-[50px]`}>Nodejs</span>
        <img src="/icons8-nodejs-48.png" alt="" className="w-[30px] h-[30px] md:w-[40px] md:h-[40px] mx-2"/>
        <span className={`${karantina.className} mx-6 text-[30px] md:text-[50px]`}>Python</span>
        <img src="/icons8-python-50.png" alt="" className="w-[30px] h-[30px] md:w-[40px] md:h-[40px] mx-2"/>
      </div>

    </div>
  )
}