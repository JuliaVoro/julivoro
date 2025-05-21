'use client';
import { useState } from 'react';

const offers = [
  {
    title: 'Integrating GenUI into Your Design Process',
    description:
      'Accelerate innovation by embedding generative UI tools and AI-driven workflows into your product or service design.',
    image: '/images/posts/introduction-to-nextjs.webp',
  },
  {
    title: 'Business Idea Validation Workshop',
    description:
      'Test and refine your business concept with expert guidance, user research, and actionable feedback.',
    image: '/images/posts/introduction-to-mdx.webp',
  },
  {
    title: 'Individual Mentoring Session',
    description:
      'Get personalized advice and support on service design, product strategy, or career growth.',
    image: '/images/posts/post1.webp',
  },
];

export default function Collaborate() {
  const [openIdx, setOpenIdx] = useState<number | null>(1); // Open second by default (like screenshot)

  return (
    <section className="py-16">
      <h2 className="title mb-10">Ways to Collaborate</h2>
      <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-8 max-w-6xl mx-auto items-start">
        {/* Accordion */}
        <div className="divide-y-2 divide-black">
          {offers.map((offer, idx) => (
            <div key={offer.title}>
              <button
                className={`w-full flex items-center justify-between px-6 py-5 text-left text-lg transition focus:outline-none ${openIdx === idx ? 'font-bold' : 'font-normal'}`}
                aria-expanded={openIdx === idx}
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
              >
                <span>{offer.title}</span>
                <span className="ml-2 text-2xl font-light">
                  {openIdx === idx ? '×' : '+'}
                </span>
              </button>
              {openIdx === idx && (
  <div className="px-6 pb-4 animate-fade-in">
    <p className="text-sm text-muted-foreground">{offer.description}</p>
  </div>
)}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
