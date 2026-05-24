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
        console.log('FAIL status:', err?.status)
        console.log('FAIL text:', err?.text)
        console.log('FAIL full:', JSON.stringify(err))
        setStatus('error')
    }
}

    return (
        <div className="h-dvh bg " style={{ background: '#080810' }} id='contact'>
            
            <div style={{ boxShadow: '0 0 40px rgba(127, 119, 221, 0.3), 0 0 80px rgba(127, 119, 221, 0.1)' }} className="text-white rounded-2xl px-6 py-20 hover:border-[#7f77dd] hover:-translate-y-1 transition-all relative overflow-hidden absolute z-50 flex w-full max-w-[800px] m-auto mt-[20px]">

                <div className="ml-[30px]">
                    <h1 className="text-[20px] font-semibold mb-[30px]">Get in touch</h1>
                    <p>I'm very approachable and would love to speak to you. Feel free to call, send me an email, follow me on social media or simply complete the form.</p>
                    <div className="mt-[30px]">
                        <span className="flex items-center">
                            <img src="/p.png" alt="" className="w-[30px] h-[30px]" />
                            <h3>+251971918535</h3>
                        </span>
                        <span className="flex items-center">
                            <img src="/e.png" alt="" className="w-[30px] h-[30px]" />
                            <h3>aladormikiele.my20@gmail.com</h3>
                        </span>
                    </div>
                </div>

                <div>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <h1 className="text-[20px] font-semibold mb-[30px]">Send me a message</h1>

                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            required
                            className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/50 outline-none focus:border-[#7f77dd] transition-all w-full my-[20px]"
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            required
                            className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/50 outline-none focus:border-[#7f77dd] transition-all w-full my-[20px]"
                        />
                        <input
                            type="text"
                            name="subject"
                            placeholder="Subject"
                            className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/50 outline-none focus:border-[#7f77dd] transition-all w-full my-[20px]"
                        />
                        <textarea
                            name="message"
                            placeholder="Your message"
                            required
                            className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/50 outline-none focus:border-[#7f77dd] transition-all w-full"
                        />

                        <button
                            type="submit"
                            disabled={status === 'sending'}
                            className="mt-[20px] px-8 py-3 rounded-xl text-white font-medium transition-all hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed"
                            style={{
                                background: 'linear-gradient(135deg, #7f77dd, #4a3f8a)',
                                boxShadow: '0 0 20px rgba(127, 119, 221, 0.5), 0 0 60px rgba(127, 119, 221, 0.2)',
                            }}
                        >
                            {status === 'sending' ? 'Sending...' : 'Send Message'}
                        </button>

                        {status === 'success' && (
                            <p className="mt-4 text-green-400 font-medium">✅ Message sent! I'll get back to you soon.</p>
                        )}
                        {status === 'error' && (
                            <p className="mt-4 text-red-400 font-medium">❌ Something went wrong. Please try again.</p>
                        )}
                    </form>
                </div>
            </div>
            
        </div>
    )
}