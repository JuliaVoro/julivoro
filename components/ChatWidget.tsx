'use client'
import { useState, useRef, useEffect } from 'react'

export default function ChatWidget() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      from: 'bot',
      text: 'Hi 👋, it’s my digital copy! You can ask me any question about my work, experience, or projects. I’m here to help you learn more about what I do! 😊'
    }
  ])
  const [input, setInput] = useState('')
  const bottomRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (open && bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [messages, open])

  async function sendMessage(e: React.FormEvent) {
    e.preventDefault()
    if (!input.trim()) return
    const userMessage = { from: 'user', text: input }
    setMessages(msgs => [...msgs, userMessage])
    setInput('')
    // Call your OpenAI backend API
    setMessages(msgs => [...msgs, { from: 'bot', text: '...' }])
    try {
      const chatHistory = [
        {
          role: 'system',
          content:
            'You are Julia, a digital copy of Iuliia Vorobiova, a service designer and product strategist. Respond as Julia.'
        },
        ...[...messages, userMessage].map(m => ({
          role: m.from === 'user' ? 'user' : 'assistant',
          content: m.text
        }))
      ]

      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: chatHistory })
      })
      const data = await res.json()
      setMessages(msgs => [
        ...msgs.slice(0, -1), // remove loading
        { from: 'bot', text: data.reply }
      ])
    } catch (err) {
      setMessages(msgs => [
        ...msgs.slice(0, -1),
        { from: 'bot', text: 'Sorry, there was an error connecting to Julia.' }
      ])
    }
  }

  return (
    <>
      {/* Chat head button */}
      <button
        aria-label='Open chat'
        className='fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-pink-400 to-indigo-500 shadow-lg hover:scale-105 transition-transform border-4 border-white dark:border-zinc-900'
        onClick={() => setOpen(v => !v)}
        style={{ boxShadow: '0 4px 16px rgba(0,0,0,0.18)' }}
        data-oid='c:tj54d'
      >
        {/* Cute little circle head */}
        <span
          className='relative block w-14 h-14 rounded-full bg-white overflow-hidden flex items-center justify-center'
          data-oid='5ywltca'
        >
          <img
            src='/images/aiavatar.png'
            alt='Chat avatar'
            className='object-cover w-full h-full rounded-full'
            data-oid='g::ji_u'
          />
        </span>
      </button>
      {/* Chat window */}
      {open && (
        <div
          className='fixed bottom-24 right-6 z-50 w-80 max-w-xs max-h-[70vh] rounded-2xl bg-white shadow-2xl border border-black flex flex-col overflow-hidden animate-fade-in font-sans'
          data-oid='5bwey_c'
        >
          <div
            className='p-4 border-b border-black bg-white flex items-center justify-between'
            data-oid='rr7jks:'
          >
            <span className='flex items-center gap-2' data-oid='z-78n:z'>
              <span
                className='relative block w-12 h-12 rounded-full bg-white overflow-hidden flex items-center justify-center'
                data-oid='idn.p81'
              >
                <img
                  src='/images/aiavatar.png'
                  alt='Chat avatar'
                  className='object-cover w-full h-full rounded-full'
                  data-oid='vm58ftf'
                />
              </span>
              <span
                className='font-serif text-lg font-bold text-black tracking-tight'
                data-oid='2ard4x8'
              >
                Julia
              </span>
            </span>
            <button
              aria-label='Close chat'
              className='text-black hover:text-zinc-700 p-1 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-400 transition'
              onClick={() => setOpen(false)}
              data-oid='7q__m3l'
            >
              <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                data-oid='9m3mf78'
              >
                <circle cx='12' cy='12' r='12' fill='#fff' data-oid='kvg23qe' />
                <path
                  d='M8 8L16 16M16 8L8 16'
                  stroke='#111'
                  strokeWidth='2'
                  strokeLinecap='round'
                  data-oid='8nbja_8'
                />
              </svg>
            </button>
          </div>
          <div
            className='flex-1 p-4 overflow-y-auto space-y-3 text-base'
            data-oid='ofgvikb'
          >
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}
                data-oid='fhh3t1-'
              >
                <span
                  className={`rounded-2xl px-4 py-2 max-w-[70%] whitespace-pre-line shadow-sm ${
                    msg.from === 'user'
                      ? 'bg-black text-white'
                      : 'bg-zinc-100 text-black'
                  }`}
                  data-oid='eb-7f4v'
                >
                  {msg.text}
                </span>
              </div>
            ))}
            <div ref={bottomRef} data-oid='-4awvst' />
          </div>
          <form
            onSubmit={sendMessage}
            className='flex border-t border-black bg-white'
            data-oid='17qq35b'
          >
            <input
              className='flex-1 p-3 bg-transparent outline-none text-black text-base placeholder:text-zinc-400'
              placeholder='Type your message...'
              value={input}
              onChange={e => setInput(e.target.value)}
              data-oid='gibtjo6'
            />

            <button
              type='submit'
              className='px-4 py-2 text-black font-bold hover:text-zinc-600 text-lg'
              disabled={!input.trim()}
              data-oid='pvdbqqx'
            >
              ➤
            </button>
          </form>
        </div>
      )}
    </>
  )
}
