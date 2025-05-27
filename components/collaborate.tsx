'use client'
import { useState } from 'react'

const offers = [
  {
    title: 'Integrating GenUI into Your Design Process',
    description:
      'Accelerate innovation by embedding generative UI tools and AI-driven workflows into your product or service design.',
    image: '/images/posts/introduction-to-nextjs.webp'
  },
  {
    title: 'Business Idea Validation Workshop',
    description:
      'Test and refine your business concept with expert guidance, user research, and actionable feedback.',
    image: '/images/posts/introduction-to-mdx.webp'
  },
  {
    title: 'Individual Mentoring Session',
    description:
      'Get personalized advice and support on service design, product strategy, or career growth.',
    image: '/images/posts/post1.webp'
  }
]

export default function Collaborate() {
  const [openIdx, setOpenIdx] = useState<number | null>(1) // Open second by default (like screenshot)

  return (
    <section className='py-16' data-oid='sptgb41'>
      <h2 className='title mb-10' data-oid='53-zew:'>
        Ways to Collaborate
      </h2>
      <div
        className='grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-8 max-w-6xl mx-auto items-start'
        data-oid='n40fz-k'
      >
        {/* Accordion */}
        <div className='divide-y-2 divide-black' data-oid='kbk8z7f'>
          {offers.map((offer, idx) => (
            <div key={offer.title} data-oid='1-bjydu'>
              <button
                className={`w-full flex items-center justify-between px-6 py-5 text-left text-lg transition focus:outline-none ${openIdx === idx ? 'font-bold' : 'font-normal'}`}
                aria-expanded={openIdx === idx}
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                data-oid='00bob.q'
              >
                <span data-oid='l:6xk8m'>{offer.title}</span>
                <span className='ml-2 text-2xl font-light' data-oid='nnw.5lz'>
                  {openIdx === idx ? '×' : '+'}
                </span>
              </button>
              {openIdx === idx && (
                <div className='px-6 pb-4 animate-fade-in' data-oid='e.-a1h_'>
                  <p
                    className='text-sm text-muted-foreground'
                    data-oid='277n4aq'
                  >
                    {offer.description}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
