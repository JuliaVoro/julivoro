import React from 'react';

export default function CV() {
  return (
    <section className="max-w-2xl mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold mb-2">Iuliia Vorobiova — CV</h1>
      <p className="text-lg text-muted-foreground mb-6">Service Designer & Product Strategist</p>
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-1">Contact</h2>
        <ul className="text-base">
          <li>Email: <span className="underline">iuliia.vorobiova@gmail.com</span></li>
          <li>LinkedIn: <a href="https://www.linkedin.com/in/iuliiavorobiova/" target="_blank" rel="noopener noreferrer" className="underline">/iuliiavorobiova</a></li>
        </ul>
      </div>
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-1">Experience</h2>
        <ul className="list-disc pl-5">
          <li><b>Freelance Service Designer & Consultant</b> (2022–present)<br/>Helping startups and SMEs with digital transformation, service design, and product strategy.</li>
          <li><b>UX/UI Lead, Startup Company</b> (2020–2022)<br/>Led the integration of AI into UX & UI processes for a fast-growing SaaS business.</li>
          <li><b>Service Designer, Agency</b> (2018–2020)<br/>Worked with international clients on customer journey mapping, prototyping, and business innovation.</li>
        </ul>
      </div>
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-1">Education</h2>
        <ul className="list-disc pl-5">
          <li><b>MSc, Service Design</b> — Politecnico di Milano, Italy</li>
          <li><b>Bachelor, Design</b> — Kyiv National University of Culture and Arts</li>
        </ul>
      </div>
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-1">Skills</h2>
        <ul className="list-disc pl-5">
          <li>Service Design, Product Strategy, UX/UI Design, Workshop Facilitation</li>
          <li>AI for UX, Customer Research, Prototyping, Journey Mapping</li>
        </ul>
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-1">Languages</h2>
        <ul className="list-disc pl-5">
          <li>English (fluent), Italian (fluent), Ukrainian (native), Russian (fluent)</li>
        </ul>
      </div>
    </section>
  );
}
