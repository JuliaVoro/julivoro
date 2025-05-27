interface ContactFormEmailProps {
  name: string
  email: string
  message: string
}

const ContactFormEmail: React.FC<Readonly<ContactFormEmailProps>> = ({
  name,
  email,
  message
}) => (
  <div data-oid='-a5qozl'>
    <h1 data-oid='15w4t0x'>Contact form submission</h1>
    <p data-oid='5_tb.69'>
      From <strong data-oid='5nb8b8u'>{name}</strong> at {email}
    </p>
    <h2 data-oid='7761ka.'>Message:</h2>
    <p data-oid='2x3o5h4'>{message}</p>
  </div>
)

export default ContactFormEmail
