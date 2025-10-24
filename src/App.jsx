import React, { useState } from "react";
import { FaVenmo, FaPaypal, FaMoneyBillAlt } from "react-icons/fa";

const VENMO_URL = "https://venmo.com/noah04hunter";
const CASHAPP_URL = "https://cash.app/$NoahHunter04";
const PAYPAL_URL = "https://www.paypal.me/NoahHunter580";
const TRINITY_DONATION_LINK = "https://trinitybiblecollege.edu/give?donate_to=noah";

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const nav = [
    { id: "home", label: "Home" },
    { id: "about", label: "About Us" },
    { id: "mission", label: "Current Mission" },
    { id: "blog", label: "Blog & Updates" },
    { id: "future", label: "Future Projects" },
    { id: "support", label: "Support Us" },
    { id: "contact", label: "Contact" },
  ];

  const samplePosts = [
    {
      title: "Preparing Our Hearts for GO",
      date: "Oct 15, 2025",
      excerpt:
        "Prayer requests for our preparation, packing lists, and a short reflection as we raise the first deadline.",
    },
  ];

  function scrollToId(id) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  }

  function handleChange(e) {
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const subject = `Website Contact from ${form.name || "Friend"}`;
    const body = encodeURIComponent(form.message + "\n\nFrom: " + form.name + " (" + form.email + ")");
    window.location.href = `mailto:noahhunter@trinitybiblecollege.edu?subject=${encodeURIComponent(subject)}&body=${body}`;
    setSubmitted(true);
  }

  return (
    <div className="min-h-screen bg-white text-gray-800 antialiased">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-sm border-b">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="font-semibold text-xl">Hunters-GO</div>
            <div className="text-sm text-gray-500">Noah & Hanna Hunter</div>
          </div>
          <nav className="hidden md:flex gap-4 items-center">
            {nav.map((n) => (
              <button
                key={n.id}
                onClick={() => scrollToId(n.id)}
                className="text-sm hover:text-blue-700 transition"
              >
                {n.label}
              </button>
            ))}
            <a
              href="#support"
              className="ml-4 inline-block bg-blue-700 text-white px-4 py-2 rounded-md text-sm"
              onClick={() => scrollToId("support")}
            >
              Support Our Mission
            </a>
          </nav>

          <div className="md:hidden">
            <button
              aria-label="Open menu"
              onClick={() => setMobileMenuOpen((s) => !s)}
              className="p-2 rounded-md border"
            >
              {mobileMenuOpen ? "Close" : "Menu"}
            </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <main className="max-w-5xl mx-auto px-6 py-10">
        <section id="home" className="grid md:grid-cols-2 gap-8 items-center py-8">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Declaring Christ’s Love to the Nations
            </h1>
            <p className="mt-4 text-lg text-gray-700">
              Noah and Hanna Hunter — called to missions and serving through Trinity Bible College’s GO program.
              Join us as we serve, pray, and raise support for our Las Vegas outreach with Operation for Freedom.
            </p>

            <div className="mt-6 flex gap-3 flex-wrap">
              <button
                onClick={() => scrollToId("support")}
                className="bg-blue-700 text-white px-5 py-2 rounded-md"
              >
                Support Our Mission
              </button>
              <button
                onClick={() => scrollToId("blog")}
                className="border px-5 py-2 rounded-md text-sm"
              >
                Follow Our Journey
              </button>
            </div>

            <div className="mt-8">
              <blockquote className="border-l-4 pl-4 italic text-gray-600">
                “Go therefore and make disciples of all nations…” — <strong>Matthew 28:19-20</strong>
                <br />
                “How beautiful are the feet of those who bring good news.” — <strong>Romans 10:14-15</strong>
              </blockquote>
            </div>
          </div>

          <div className="rounded-xl overflow-hidden shadow-lg">
            <div className="h-64 bg-gradient-to-br from-yellow-50 to-blue-50 flex items-center justify-center">
              <div className="text-center p-6">
                <div className="font-semibold text-xl mt-2">Noah & Hanna on mission</div>
                <div className="text-xs text-gray-400 mt-2">Replace with your own photo later</div>
              </div>
            </div>
          </div>
        </section>

        {/* Support Section */}
        <section id="support" className="py-8">
          <h2 className="text-2xl font-semibold">Support Us</h2>
          <div className="mt-6 p-6 rounded-lg bg-white border">
            <div className="font-semibold mb-3">Give Now</div>
            <p className="text-sm text-gray-700 mb-4">
              Choose a method below and follow the link to complete your gift.
            </p>

            <div className="flex flex-col gap-3">
              <a
                href={TRINITY_DONATION_LINK}
                target="_blank"
                rel="noreferrer"
                className="block text-center px-4 py-2 bg-blue-700 text-white rounded-md"
              >
                Donate via Trinity
              </a>
              <div className="flex gap-2">
                <a
                  href={VENMO_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 text-center px-3 py-2 rounded-md border flex items-center justify-center gap-2"
                >
                  <FaVenmo className="text-blue-600 text-lg" /> Venmo
                </a>
                <a
                  href={CASHAPP_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 text-center px-3 py-2 rounded-md border flex items-center justify-center gap-2"
                >
                  <FaMoneyBillAlt className="text-green-600 text-lg" /> CashApp
                </a>
              </div>
              <a
                href={PAYPAL_URL}
                target="_blank"
                rel="noreferrer"
                className="block text-center px-4 py-2 rounded-md border flex items-center justify-center gap-2"
              >
                <FaPaypal className="text-blue-500 text-lg" /> PayPal
              </a>
            </div>

            <div className="mt-4 text-xs text-gray-500">
              Tip: Add a note “NOAH & HANNA — GO TRIP” when donating via Trinity.
            </div>
          </div>
        </section>
      </main>

      <footer className="mt-12 py-8 border-t text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Noah & Hanna Hunter — Hunters-GO.org
      </footer>
    </div>
  );
}
