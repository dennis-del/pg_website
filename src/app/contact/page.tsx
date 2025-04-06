import React from 'react';

export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6 text-center">Contact Us</h1>

      {/* Google Map */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Our Location</h2>
        <div className="w-full h-64 mb-4">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.283092040981!2d75.78041257477372!3d11.258753949106756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba65c6f97b1e9d7%3A0x6f53e3c2a16aa63b!2sKozhikode%2C%20Kerala!5e0!3m2!1sen!2sin!4v1712483321314!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

      {/* Contact Details */}
      <section className="space-y-4 text-gray-700">
        <div>
          <h2 className="text-2xl font-semibold mb-2">Get in Touch</h2>
          <p>
            <strong>Phone / WhatsApp:</strong>{' '}
            <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
              +91 98765 43210
            </a>
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Address</h2>
          <p>
            Kozhikode PG,<br />
            XYZ Street,<br />
            Near ABC Bus Stop,<br />
            Kozhikode, Kerala - 673001
          </p>
        </div>
      </section>
    </div>
  );
}
