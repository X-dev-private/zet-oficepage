// pages/ContactPage.tsx
import { motion } from 'framer-motion'
import { FiMail, FiMapPin, FiPhone, FiSend, FiClock, FiLinkedin, FiTwitter } from 'react-icons/fi'
import { SectionHeader } from '../components/SectionHeader'

const ContactPage = () => {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-900 text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Get in Touch
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              We'd love to hear from you. Reach out to start a conversation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="Contact Information"
            description="Multiple ways to connect with our team"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 border border-gray-700 rounded-xl p-8 hover:shadow-xl transition-shadow"
              >
                <div className="w-14 h-14 bg-indigo-500/10 rounded-lg flex items-center justify-center mb-6">
                  <method.icon className="text-indigo-400 text-2xl" />
                </div>
                <h3 className="text-xl font-bold mb-3">{method.title}</h3>
                <p className="text-gray-400 mb-4">{method.description}</p>
                {method.details && (
                  <div className="space-y-2">
                    {method.details.map((detail, i) => (
                      <p key={i} className="text-gray-300">{detail}</p>
                    ))}
                  </div>
                )}
                {method.link && (
                  <a 
                    href={method.link.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block mt-4 text-indigo-400 hover:text-indigo-300 transition"
                  >
                    {method.link.text}
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form + Map Section */}
      <section className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
              <p className="text-gray-300 mb-8">
                Have a question or want to discuss a project? Fill out the form below and we'll get back to you as soon as possible.
              </p>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-gray-300 mb-2">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="What's this about?"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                  <textarea 
                    id="message" 
                    rows={5}
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="flex items-center px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg font-medium hover:opacity-90 transition"
                >
                  <FiSend className="mr-2" />
                  Send Message
                </button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-xl font-bold mb-4">Our Location</h3>
                <div className="h-64 bg-gray-700 rounded-xl overflow-hidden">
                  {/* Map Embed - Replace with your actual map embed code */}
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215573291865!2d-73.9878449241646!3d40.74844047138962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1712345678901!5m2!1sen!2sus" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    className="filter grayscale(50%) contrast(1.2)"
                  ></iframe>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4">Business Hours</h3>
                <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
                  <div className="space-y-4">
                    {businessHours.map((hour, index) => (
                      <div key={index} className="flex justify-between">
                        <span className="text-gray-300">{hour.day}</span>
                        <span className="text-gray-400">{hour.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a 
                    href="#" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gray-700 hover:bg-gray-600 rounded-lg flex items-center justify-center transition"
                  >
                    <FiTwitter className="text-blue-400 text-xl" />
                  </a>
                  <a 
                    href="#" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gray-700 hover:bg-gray-600 rounded-lg flex items-center justify-center transition"
                  >
                    <FiLinkedin className="text-blue-500 text-xl" />
                  </a>
                  <a 
                    href="#" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gray-700 hover:bg-gray-600 rounded-lg flex items-center justify-center transition"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="Frequently Asked Questions"
            description="Quick answers to common questions"
          />

          <div className="max-w-3xl mx-auto mt-16 space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:shadow-xl transition-shadow"
              >
                <h3 className="text-lg font-bold mb-2">{faq.question}</h3>
                <p className="text-gray-400">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

// Contact Methods Data
const contactMethods = [
  {
    icon: FiMail,
    title: "Email Us",
    description: "Send us an email and we'll get back to you within 24 hours.",
    details: [
      "info@zeroeleven.com",
      "support@zeroeleven.com"
    ],
    link: {
      text: "View all email addresses",
      url: "#"
    }
  },
  {
    icon: FiPhone,
    title: "Call Us",
    description: "Available Monday to Friday from 9am to 5pm.",
    details: [
      "+1 (555) 123-4567",
      "+1 (555) 765-4321"
    ]
  },
  {
    icon: FiMapPin,
    title: "Visit Us",
    description: "Come say hello at our headquarters.",
    details: [
      "123 Tech Street",
      "San Francisco, CA 94107",
      "United States"
    ],
    link: {
      text: "Get directions",
      url: "#"
    }
  }
]

// Business Hours Data
const businessHours = [
  {
    day: "Monday - Friday",
    hours: "9:00 AM - 5:00 PM"
  },
  {
    day: "Saturday",
    hours: "10:00 AM - 2:00 PM"
  },
  {
    day: "Sunday",
    hours: "Closed"
  }
]

// FAQ Data
const faqs = [
  {
    question: "How quickly can you respond to my inquiry?",
    answer: "We typically respond to all inquiries within 24 hours during business days. For urgent matters, please call our support line."
  },
  {
    question: "Do you offer 24/7 support?",
    answer: "Our standard support hours are Monday to Friday, 9am to 5pm. For enterprise clients, we offer extended support options."
  },
  {
    question: "What information should I include in my project inquiry?",
    answer: "Please include details about your project goals, timeline, budget, and any specific requirements you may have. The more details you provide, the better we can assist you."
  },
  {
    question: "Do you work with international clients?",
    answer: "Yes, we work with clients worldwide. Our team is distributed across multiple time zones to better serve our global clientele."
  },
  {
    question: "How do I get started with a new project?",
    answer: "Simply reach out through our contact form or schedule a consultation call. We'll discuss your requirements and provide a proposal outlining the next steps."
  }
]

export default ContactPage