'use client'
import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null)
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const result = await emailjs.sendForm(
        'service_8t36n3i',
        'template_uqdqsni',
        formRef.current!,
        'EwttMLBD1BnEQq0Qo'
      )
      console.log('SUCCESS:', result.status, result.text)
      setStatus('success')
      formRef.current?.reset()
    } catch (err: any) {
      setStatus('error')
    }
  }

  return (
    <div className="min-h-dvh flex items-center justify-center px-4 py-16" style={{ background: '#080810' }} id='contact'>

      <div
        className="text-white rounded-2xl w-full max-w-[800px] flex flex-col lg:flex-row gap-10 p-6 md:p-10"
        style={{ boxShadow: '0 0 40px rgba(127, 119, 221, 0.3), 0 0 80px rgba(127, 119, 221, 0.1)' }}
      >
        {/* Left — contact info */}
        <div className="flex flex-col gap-4 lg:w-[40%]">
          <h1 className="text-[20px] md:text-[24px] font-semibold">Get in touch</h1>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed">
            I'm very approachable and would love to speak to you. Feel free to call, send me an email, or simply complete the form.
          </p>
          <div className="flex flex-col gap-3 mt-4">
            <span className="flex items-center gap-3">
              <img src="/p.png" alt="" className="w-[28px] h-[28px]" />
              <p className="text-sm md:text-base">+251971918535</p>
            </span>
            <span className="flex items-center gap-3">
              <img src="/e.png" alt="" className="w-[28px] h-[28px]" />
              <p className="text-sm md:text-base break-all">aladormikiele.my20@gmail.com</p>
            </span>
          </div>
        </div>

        {/* Right — form */}
        <div className="flex-1">
          <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-4">
            <h1 className="text-[20px] md:text-[24px] font-semibold">Send me a message</h1>

            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/50 outline-none focus:border-[#7f77dd] transition-all w-full"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/50 outline-none focus:border-[#7f77dd] transition-all w-full"
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/50 outline-none focus:border-[#7f77dd] transition-all w-full"
            />
            <textarea
              name="message"
              placeholder="Your message"
              required
              rows={4}
              className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/50 outline-none focus:border-[#7f77dd] transition-all w-full resize-none"
            />

            <button
              type="submit"
              disabled={status === 'sending'}
              className="px-8 py-3 rounded-xl text-white font-medium transition-all hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed"
              style={{
                background: 'linear-gradient(135deg, #7f77dd, #4a3f8a)',
                boxShadow: '0 0 20px rgba(127, 119, 221, 0.5), 0 0 60px rgba(127, 119, 221, 0.2)',
              }}
            >
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>

            {status === 'success' && (
              <p className="text-green-400 font-medium">✅ Message sent! I'll get back to you soon.</p>
            )}
            {status === 'error' && (
              <p className="text-red-400 font-medium">❌ Something went wrong. Please try again.</p>
            )}
          </form>
        </div>
      </div>
    </div>
  )
}