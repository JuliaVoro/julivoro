import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for Julia Vorobiova\'s portfolio website',
}

export default function PrivacyPolicy() {
  return (
    <section className="pb-24 pt-40">
      <div className="container max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          Privacy Policy
        </h1>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          Last updated: May 27, 2025
        </p>

        <div className="prose mt-8 space-y-6 text-justify text-zinc-600 dark:text-zinc-400">
          <p>
            This personal webpage is operated by Iuliia Vorobiova. I respect your privacy and am committed to protecting any personal information you choose to share.
          </p>

          <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">1. Information I Collect</h2>
          
          <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mt-6">a) Contact Form</h3>
          <p>If you submit a message via the contact form, I collect:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Your name</li>
            <li>Your email address</li>
            <li>Your message</li>
          </ul>

          <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mt-6">b) Newsletter Subscription</h3>
          <p>If you subscribe to my newsletter, I collect:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Your email address</li>
          </ul>

          <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mt-8">2. How Your Information Is Used</h2>
          <p>I use your information to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Respond to inquiries sent via the contact form</li>
            <li>Send occasional newsletters and updates (if you subscribed)</li>
          </ul>
          <p className="mt-4">
            You can unsubscribe from the newsletter at any time by clicking the unsubscribe link in the email or contacting me directly.
          </p>
          <p>
            I do not sell, rent, or share your information with third parties.
          </p>

          <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">3. Data Storage</h2>
          <p>
            Messages submitted through the contact form and emails collected for the newsletter are handled via Resend, a third-party email platform. Your data may be temporarily stored on Resend's secure servers for processing and delivery.
          </p>
          <p className="mt-4">
            I take reasonable steps to keep your data secure, but please note that no method of transmission over the internet is completely secure.
          </p>

          <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">4. Your Rights</h2>
          <p>You have the right to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Request access to the personal data I hold about you</li>
            <li>Request correction or deletion of your data (from the contact form or newsletter list)</li>
          </ul>
          <p className="mt-4">
            To do so, please contact me at: contact@juliavorobiova.com
          </p>

          <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">5. Cookies & Analytics</h2>
          <p>
            This personal webpage does not use cookies or tracking tools unless otherwise stated.
          </p>

          <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">6. Contact</h2>
          <p>For any privacy-related questions, please contact:</p>
          <p className="mt-2">
            Iuliia Vorobiova<br />
            Email: contact@juliavorobiova.com
          </p>
        </div>
      </div>
    </section>
  )
}
