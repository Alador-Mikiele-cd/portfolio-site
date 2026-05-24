'use client'
import { Akshar } from 'next/font/google'

const akshar = Akshar({
  weight: '400',
  subsets: ['latin'],
})

export default function Nav() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <div className="w-full max-w-[1200px] m-auto flex justify-around items-center sticky top-0 z-51 bg-black">
        <h1 className="text-white text-[36px] font-iosevka">ALADOR</h1>
        <ul className="flex bg-[#d9d9d954] rounded-[4px] p-[4px] text-[#d9c3f9]">
          <li className="mx-[20px]"><button onClick={() => scrollTo('home')} className='hover:text-[#ffffff]'>HOME</button></li>
          <li className="mx-[20px]"><button onClick={() => scrollTo('about')} className='hover:text-[#ffffff]'>ABOUT</button></li>
          <li className="mx-[20px]"><button onClick={() => scrollTo('project')} className='hover:text-[#ffffff]'>PROJECT</button></li>
        </ul>
        <button onClick={() => scrollTo('contact')} className={`bg-white text-[24px] rounded-[24px] px-[20px] ${akshar.className}`}>CONTACT</button>
      </div>
    </>
  )
}