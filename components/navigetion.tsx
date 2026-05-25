'use client'
import { Akshar } from 'next/font/google'
import { useState } from 'react'

const akshar = Akshar({
  weight: '400',
  subsets: ['latin'],
})

export default function Nav() {
  const [open, setOpen] = useState(false)

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <div className="w-full sticky top-0 z-50 bg-black">
      <div className="max-w-[1200px] mx-auto flex justify-between items-center px-4 py-3">
        
        <h1 className="text-white text-[24px] md:text-[36px] font-iosevka">ALADOR</h1>

        {/* Desktop nav */}
        <ul className="hidden md:flex bg-[#d9d9d954] rounded-[4px] p-[4px] text-[#d9c3f9]">
          <li className="mx-[20px]"><button onClick={() => scrollTo('home')} className='hover:text-white'>HOME</button></li>
          <li className="mx-[20px]"><button onClick={() => scrollTo('about')} className='hover:text-white'>ABOUT</button></li>
          <li className="mx-[20px]"><button onClick={() => scrollTo('project')} className='hover:text-white'>PROJECT</button></li>
        </ul>

        <button onClick={() => scrollTo('contact')} className={`hidden md:block bg-white text-[20px] rounded-[24px] px-[20px] ${akshar.className}`}>
          CONTACT
        </button>

        {/* Hamburger button */}
        <button className="md:hidden text-white text-[28px]" onClick={() => setOpen(!open)}>
          {open ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-black flex flex-col items-center gap-6 py-6 text-[#d9c3f9]">
          <button onClick={() => scrollTo('home')} className='hover:text-white text-[18px]'>HOME</button>
          <button onClick={() => scrollTo('about')} className='hover:text-white text-[18px]'>ABOUT</button>
          <button onClick={() => scrollTo('project')} className='hover:text-white text-[18px]'>PROJECT</button>
          <button onClick={() => scrollTo('contact')} className={`bg-white text-black text-[18px] rounded-[24px] px-[20px] py-1 ${akshar.className}`}>
            CONTACT
          </button>
        </div>
      )}
    </div>
  )
}