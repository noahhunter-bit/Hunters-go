import React, { useState } from "react";
import { FaVenmo, FaPaypal, FaDollarSign } from "react-icons/fa";

const VENMO_URL = "https://venmo.com/noah04hunter";
const CASHAPP_URL = "https://cash.app/$NoahHunter04";
const PAYPAL_URL = "https://www.paypal.me/NoahHunter580";
const TRINITY_DONATION_LINK =
  "https://trinitybiblecollege.edu/give?donate_to=noah";

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const nav = [
    { id: "home", label: "Home" },
    { id: "about", label: "About Us" },
    { id: "mission", label: "Current Mission" },
    { id: "support", label: "Support Us" },
    { id: "contact", label: "Contact" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Navbar */}
      <nav className="bg-white shadow sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-4 py-3">
          <h1 className="text-2xl font-bold text-blue-700">Hunters-GO</h1>
          <button
            className="md:hidden text-2xl"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            ☰
          </button>
          <ul className="hidden md:flex space-x-6">
            {nav.map((n) => (
              <li key={n.id}>
                <a href={`#${n.id}`} className="hover:text-blue-600 font-medium">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        {mobileMenuOpen && (
          <ul className="md:hidden flex flex-col bg-white px-4 pb-4 space-y-2">
            {nav.map((n) => (
              <li key={n.id}>
                <a
                  href={`#${n.id}`}
                  className="block hover:text-blue-600 font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </nav>

      {/* Home */}
      <section id="home" className="text-center py-16 px-4">
        <h2 className="text-3xl font-bold mb-4 text-blue-700">
          “Go therefore and make disciples of all nations…”
        </h2>
        <p className="text-gray-700 mb-6 italic">
          — Matthew 28:19-20
        </p>
        <p className="text-lg max-w-3xl mx-auto">
          Welcome to our missions and fundraising hub! We’re Noah & Hanna Hunter,
          students at Trinity Bible College with a shared calling to reach the
          nations—starting with our next Global Opportunity Trip.
        </p>
      </section>

      {/* About */}
      <section id="about" className="py-16 bg-white px-4 text-center">
        <h2 className="text-3xl font-semibold mb-4">About Us</h2>
        <p className="max-w-3xl mx-auto text-gray-700 leading-relaxed">
          Hanna and I both had missions on our hearts before we started schooling.
          I (Noah) felt a direct calling to serve in South Sudan. We both attend
          <strong> Trinity Bible College & Graduate School </strong> pursuing our
          bachelor’s degrees as we prepare for long-term missions.  
          This website serves as our information and fundraising hub to keep you
          connected and informed about our work, calling, and upcoming trips.
        </p>
      </section>

      {/* Current Mission */}
      <section id="mission" className="py-16 px-4 text-center bg-gray-50">
        <h2 className="text-3xl font-semibold mb-4 text-blue-700">
          Current Mission: Las Vegas GO Trip 2025
        </h2>
        <p className="max-w-3xl mx-auto mb-4 text-gray-700">
          Our next Global Opportunity Trip takes us to Las Vegas, working alongside{" "}
          <strong>Operation for Freedom</strong> — an organization dedicated to
          ending sex trafficking and bringing restoration and hope to those trapped
          in exploitation.
        </p>
        <p className="max-w-3xl mx-auto text-gray-700">
          “Operation for Freedom exists to end sex trafficking and commercial sexual
          exploitation by equipping, engaging, and empowering vulnerable
          communities. Based in Las Vegas, their team mobilizes volunteer groups,
          delivers training and outreach, and partners with local professionals and
          organizations to bring hope and freedom.”  
          <a
            href="https://operationforfreedom.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            Learn more ↗
          </a>
        </p>

        <p className="mt-8 max-w-2xl mx-auto text-gray-700">
          We’re currently raising $1800 each ($3600 total) for this trip.  
          Our next deadlines: $500 each by Nov 12 → $500 each by Dec 4 → remaining $800 by March.
        </p>
      </section>

      {/* Support Us */}
      <section id="support" className="py-16 bg-white text-center px-4">
        <h2 className="text-3xl font-semibold mb-4">Support Our Mission</h2>
        <p className="max-w-2xl mx-auto text-gray-700 mb-6">
          Your generosity helps us reach the nations. Every prayer and gift makes
          a difference. Thank you for partnering with us!
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          <a
            href={VENMO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 bg-blue-600 text-white px-5 py-3 rounded-xl shadow hover:bg-blue-700 transition"
          >
            <FaVenmo size={24} /> <span>Venmo</span>
          </a>
          <a
            href={CASHAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 bg-green-500 text-white px-5 py-3 rounded-xl shadow hover:bg-green-600 transition"
          >
            <FaDollarSign size={24} /> <span>Cash App</span>
          </a>
          <a
            href={PAYPAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 bg-blue-500 text-white px-5 py-3 rounded-xl shadow hover:bg-blue-600 transition"
          >
            <FaPaypal size={24} /> <span>PayPal</span>
          </a>
          <a
            href={TRINITY_DONATION_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 bg-indigo-600 text-white px-5 py-3 rounded-xl shadow hover:bg-indigo-700 transition"
          >
            🎓 <span>Donate via Trinity</span>
          </a>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 bg-gray-50 text-center px-4">
        <h2 className="text-3xl font-semibold mb-4">Contact Us</h2>
        {!submitted ? (
          <form
            onSubmit={handleSubmit}
            className="max-w-md mx-auto flex flex-col space-y-4"
          >
            <input
              type="text"
              placeholder="Your Name"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="border rounded-lg p-3 w-full"
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="border rounded-lg p-3 w-full"
            />
            <textarea
              placeholder="Your Message"
              required
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="border rounded-lg p-3 w-full h-32"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Send
            </button>
          </form>
        ) : (
          <p className="text-green-600 font-medium">
            Thank you for reaching out! We’ll be in touch soon.
          </p>
        )}

        <div className="mt-8 text-gray-700">
          <p>📞 (605) 777-3113</p>
          <p>
            📧 
            <a
              href="mailto:noahhunter@trinitybiblecollege.edu"
              className="text-blue-600 underline"
            >
              noahhunter@trinitybiblecollege.edu
            </a>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-6 text-center text-gray-600 text-sm">
        <p>
          “How beautiful are the feet of those who bring good news.” — Romans 10:14-15
        </p>
        <p className="mt-2">&copy; {new Date().getFullYear()} Noah & Hanna Hunter | All Rights Reserved</p>
      </footer>
    </div>
  );
}
