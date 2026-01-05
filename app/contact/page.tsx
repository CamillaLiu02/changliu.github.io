import { Metadata } from 'next';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';
import PageTransition from '@/components/ui/PageTransition';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with me',
};

export default function ContactPage() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-accent-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-display font-bold text-gray-900 mb-4">
              Let's Connect
            </h1>
            <p className="text-xl text-gray-600">
              I'm always open to discussing new opportunities, projects, or just
              chatting about design and tech!
            </p>
          </div>

          {/* Contact Methods */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 max-w-2xl mx-auto">
            <a
              href="mailto:changliu5101@gmail.com"
              className="bg-white rounded-xl p-8 text-center shadow-md hover:shadow-xl transition-all duration-200 border border-gray-200 group"
            >
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-600 transition-colors">
                <FaEnvelope className="text-2xl text-primary-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Email</h3>
              <p className="text-gray-600 text-sm">changliu5101@gmail.com</p>
            </a>

            <a
              href="https://www.linkedin.com/in/chang-l-276423314"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-xl p-8 text-center shadow-md hover:shadow-xl transition-all duration-200 border border-gray-200 group"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600 transition-colors">
                <FaLinkedin className="text-2xl text-blue-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">LinkedIn</h3>
              <p className="text-gray-600 text-sm">/in/chang-l-276423314</p>
            </a>
          </div>

          {/* Contact Form Placeholder */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Send a Message
            </h2>
            <form
              action="mailto:changliu5101@gmail.com"
              method="GET"
              encType="text/plain"
              className="space-y-6"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="body"
                  rows={6}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Tell me about your project or opportunity..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-4 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors"
              >
                Send Message
              </button>

              <p className="text-sm text-gray-500 text-center">
                This form uses mailto. For a better experience, integrate with{' '}
                <a
                  href="https://formspree.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-600 hover:underline"
                >
                  Formspree
                </a>
                ,{' '}
                <a
                  href="https://getform.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-600 hover:underline"
                >
                  Getform
                </a>
                , or similar service.
              </p>
            </form>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
