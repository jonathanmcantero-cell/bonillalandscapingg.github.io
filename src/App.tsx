/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  Menu, 
  X, 
  Fence, 
  HardHat, 
  Droplets, 
  Gamepad2, 
  Leaf, 
  Scissors, 
  Trees, 
  Waves, 
  Mountain, 
  Square,
  MessageCircle,
  ChevronRight,
  MapPin,
  Clock,
  CheckCircle2
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Translations ---
const translations = {
  en: {
    nav: { home: "Home", services: "Services", about: "About", contact: "Contact" },
    hero: { 
      title: "Professional Landscaping Services", 
      subtitle: "Quality work you can trust. Transforming your outdoor spaces into beautiful retreats.", 
      cta: "Call Now" 
    },
    services: {
      title: "Our Services",
      subtitle: "We offer a wide range of professional landscaping and hardscaping solutions.",
      items: [
        { name: "Fences", icon: Fence, desc: "Custom wood and metal fencing solutions." },
        { name: "Concrete", icon: HardHat, desc: "Patios, walkways, and structural concrete work." },
        { name: "Drain", icon: Droplets, desc: "Effective yard drainage and irrigation systems." },
        { name: "Playground", icon: Gamepad2, desc: "Safe and fun outdoor play areas for families." },
        { name: "Mulch", icon: Leaf, desc: "Premium mulching for healthy and vibrant gardens." },
        { name: "Trim", icon: Scissors, desc: "Professional tree and shrub trimming services." },
        { name: "Yard", icon: Trees, desc: "Complete yard maintenance and sod installation." },
        { name: "Pressure Washing", icon: Waves, desc: "Deep cleaning for driveways, decks, and siding." },
        { name: "Stone", icon: Mountain, desc: "Natural stone features and decorative rock work." },
        { name: "Brick, Etc.", icon: Square, desc: "Pavers, retaining walls, and custom brickwork." }
      ]
    },
    about: { 
      title: "About Bonilla Landscaping", 
      text: "We provide reliable and professional landscaping services, ensuring quality work and customer satisfaction. With years of experience, our team is dedicated to bringing your vision to life with precision and care.",
      features: ["Professional Team", "Quality Materials", "Reliable Service", "Customer Satisfaction"]
    },
    contact: { 
      title: "Contact Us", 
      subtitle: "Ready to start your project? Get in touch today!",
      name: "Full Name", 
      phone: "Phone Number", 
      message: "Your Message", 
      send: "Send Message", 
      callUs: "Call Us Now",
      whatsapp: "Chat on WhatsApp",
      success: "Message sent successfully!"
    },
    footer: { 
      rights: "All rights reserved",
      hours: "Mon - Sat: 7:00 AM - 6:00 PM"
    }
  },
  es: {
    nav: { home: "Inicio", services: "Servicios", about: "Nosotros", contact: "Contacto" },
    hero: { 
      title: "Servicios Profesionales de Jardinería", 
      subtitle: "Trabajo de calidad en el que puedes confiar. Transformamos sus espacios exteriores en hermosos retiros.", 
      cta: "Llamar Ahora" 
    },
    services: {
      title: "Nuestros Servicios",
      subtitle: "Ofrecemos una amplia gama de soluciones profesionales de jardinería y construcción exterior.",
      items: [
        { name: "Cercas", icon: Fence, desc: "Soluciones personalizadas de cercas de madera y metal." },
        { name: "Concreto", icon: HardHat, desc: "Patios, pasarelas y trabajos de concreto estructural." },
        { name: "Drenaje", icon: Droplets, desc: "Sistemas efectivos de drenaje e irrigación para su patio." },
        { name: "Área de juegos", icon: Gamepad2, desc: "Áreas de juego seguras y divertidas para familias." },
        { name: "Mantillo", icon: Leaf, desc: "Mantillo de primera calidad para jardines sanos y vibrantes." },
        { name: "Poda", icon: Scissors, desc: "Servicios profesionales de poda de árboles y arbustos." },
        { name: "Jardín / Patio", icon: Trees, desc: "Mantenimiento completo de patios e instalación de césped." },
        { name: "Lavado a presión", icon: Waves, desc: "Limpieza profunda para entradas, terrazas y revestimientos." },
        { name: "Piedra", icon: Mountain, desc: "Características de piedra natural y trabajos decorativos." },
        { name: "Ladrillo, etc.", icon: Square, desc: "Adoquines, muros de contención y ladrillo personalizado." }
      ]
    },
    about: { 
      title: "Sobre Bonilla Landscaping", 
      text: "Ofrecemos servicios de jardinería confiables y profesionales, garantizando calidad y satisfacción del cliente. Con años de experiencia, nuestro equipo se dedica a hacer realidad su visión con precisión y cuidado.",
      features: ["Equipo Profesional", "Materiales de Calidad", "Servicio Confiable", "Satisfacción del Cliente"]
    },
    contact: { 
      title: "Contáctenos", 
      subtitle: "¿Listo para empezar su proyecto? ¡Contáctenos hoy!",
      name: "Nombre Completo", 
      phone: "Número de Teléfono", 
      message: "Su Mensaje", 
      send: "Enviar Mensaje", 
      callUs: "Llámenos Ahora",
      whatsapp: "Chat por WhatsApp",
      success: "¡Mensaje enviado con éxito!"
    },
    footer: { 
      rights: "Todos los derechos reservados",
      hours: "Lun - Sáb: 7:00 AM - 6:00 PM"
    }
  }
};

const PHONE_NUMBER = "346-389-9435";
const PHONE_LINK = "tel:3463899435";
const WHATSAPP_LINK = "https://wa.me/13463899435";

export default function App() {
  const [lang, setLang] = useState<'en' | 'es'>('en');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const t = translations[lang];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLang = () => setLang(prev => prev === 'en' ? 'es' : 'en');

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');
    setTimeout(() => {
      setFormStatus('success');
      setTimeout(() => setFormStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-900 selection:bg-green-100 selection:text-green-900">
      {/* --- Header --- */}
      <header 
        className={`fixed top-0 z-50 w-full transition-all duration-300 ${
          scrolled ? 'bg-white/90 py-3 shadow-md backdrop-blur-md' : 'bg-transparent py-5'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div 
            className="flex cursor-pointer items-center gap-2"
            onClick={() => scrollTo('home')}
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-700 text-white shadow-lg">
              <Trees size={24} />
            </div>
            <h1 className={`text-xl font-bold tracking-tight sm:text-2xl ${scrolled ? 'text-green-800' : 'text-white'}`}>
              BONILLA <span className="font-light">LANDSCAPING</span>
            </h1>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-8 md:flex">
            {['home', 'services', 'about', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item)}
                className={`text-sm font-medium uppercase tracking-widest transition-colors hover:text-green-600 ${
                  scrolled ? 'text-stone-600' : 'text-white/90'
                }`}
              >
                {t.nav[item as keyof typeof t.nav]}
              </button>
            ))}
            <button
              onClick={toggleLang}
              className={`flex h-8 w-16 items-center justify-center rounded-full border text-xs font-bold transition-all hover:bg-green-700 hover:text-white ${
                scrolled ? 'border-stone-300 text-stone-600' : 'border-white/30 text-white'
              }`}
            >
              {lang === 'en' ? 'ES' : 'EN'}
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 md:hidden">
            <button
              onClick={toggleLang}
              className={`flex h-8 w-12 items-center justify-center rounded-full border text-xs font-bold ${
                scrolled ? 'border-stone-300 text-stone-600' : 'border-white/30 text-white'
              }`}
            >
              {lang === 'en' ? 'ES' : 'EN'}
            </button>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={scrolled ? 'text-stone-900' : 'text-white'}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute left-0 top-full w-full bg-white p-6 shadow-xl md:hidden"
            >
              <nav className="flex flex-col gap-4">
                {['home', 'services', 'about', 'contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollTo(item)}
                    className="text-left text-lg font-medium text-stone-800 hover:text-green-700"
                  >
                    {t.nav[item as keyof typeof t.nav]}
                  </button>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* --- Hero Section --- */}
      <section id="home" className="relative flex h-screen items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/landscaping1/1920/1080" 
            alt="Landscaped yard"
            className="h-full w-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-stone-900/80" />
        </div>

        <div className="relative z-10 mx-auto max-w-5xl px-4 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="mb-4 inline-block rounded-full bg-green-600/30 px-4 py-1 text-sm font-semibold tracking-widest uppercase text-green-400 backdrop-blur-sm">
              {lang === 'en' ? 'Expert Care' : 'Cuidado Experto'}
            </span>
            <h2 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
              {t.hero.title}
            </h2>
            <p className="mx-auto mb-10 max-w-2xl text-lg text-stone-200 sm:text-xl">
              {t.hero.subtitle}
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a 
                href={PHONE_LINK}
                className="group flex items-center gap-3 rounded-full bg-green-600 px-8 py-4 text-lg font-bold text-white shadow-xl transition-all hover:bg-green-700 hover:scale-105 active:scale-95"
              >
                <Phone size={20} className="animate-pulse" />
                {t.hero.cta}: {PHONE_NUMBER}
              </a>
              <button 
                onClick={() => scrollTo('services')}
                className="rounded-full bg-white/10 px-8 py-4 text-lg font-semibold text-white backdrop-blur-md transition-all hover:bg-white/20"
              >
                {lang === 'en' ? 'View Services' : 'Ver Servicios'}
              </button>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
        >
          <div className="h-10 w-6 rounded-full border-2 border-white/30 p-1">
            <div className="mx-auto h-2 w-1 rounded-full bg-white" />
          </div>
        </motion.div>
      </section>

      {/* --- Services Section --- */}
      <section id="services" className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
              {t.services.title}
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-stone-600">
              {t.services.subtitle}
            </p>
            <div className="mx-auto mt-4 h-1.5 w-20 rounded-full bg-green-600" />
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {t.services.items.map((service, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-sm transition-all hover:shadow-xl"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-green-50 text-green-700 transition-colors group-hover:bg-green-600 group-hover:text-white">
                  <service.icon size={32} />
                </div>
                <h3 className="mb-3 text-xl font-bold text-stone-900">{service.name}</h3>
                <p className="text-stone-600">{service.desc}</p>
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-green-600 transition-all duration-300 group-hover:w-full" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- About Section --- */}
      <section id="about" className="relative overflow-hidden bg-stone-900 py-24 text-white sm:py-32">
        {/* Abstract Background Elements */}
        <div className="absolute right-0 top-0 -translate-y-1/2 translate-x-1/2 opacity-10">
          <Trees size={400} />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div className="relative">
              <div className="aspect-square overflow-hidden rounded-3xl shadow-2xl">
                <img 
                  src="https://picsum.photos/seed/garden2/800/800" 
                  alt="Beautiful garden"
                  className="h-full w-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 hidden h-48 w-48 overflow-hidden rounded-2xl border-8 border-stone-900 shadow-2xl sm:block">
                <img 
                  src="https://picsum.photos/seed/fence1/400/400" 
                  alt="Fence work"
                  className="h-full w-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            <div>
              <span className="mb-4 inline-block text-sm font-bold tracking-widest uppercase text-green-500">
                {lang === 'en' ? 'Our Story' : 'Nuestra Historia'}
              </span>
              <h2 className="mb-8 text-3xl font-bold tracking-tight sm:text-5xl">
                {t.about.title}
              </h2>
              <p className="mb-8 text-lg leading-relaxed text-stone-400">
                {t.about.text}
              </p>
              
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {t.about.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="text-green-500" size={20} />
                    <span className="font-medium text-stone-200">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="mt-12 flex items-center gap-6">
                <div className="flex -space-x-4">
                  {[1, 2, 3].map(i => (
                    <img 
                      key={i}
                      src={`https://i.pravatar.cc/100?u=${i}`}
                      alt="Customer"
                      className="h-12 w-12 rounded-full border-2 border-stone-900"
                    />
                  ))}
                </div>
                <div>
                  <p className="text-sm font-medium text-stone-300">
                    {lang === 'en' ? 'Trusted by 500+ local families' : 'Con la confianza de más de 500 familias locales'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Contact Section --- */}
      <section id="contact" className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
                {t.contact.title}
              </h2>
              <p className="mb-10 text-lg text-stone-600">
                {t.contact.subtitle}
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-700">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-bold uppercase tracking-wider text-stone-500">{t.contact.callUs}</p>
                    <a href={PHONE_LINK} className="text-2xl font-bold text-stone-900 transition-colors hover:text-green-700">
                      {PHONE_NUMBER}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-700">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-bold uppercase tracking-wider text-stone-500">{lang === 'en' ? 'Location' : 'Ubicación'}</p>
                    <p className="text-xl font-medium text-stone-900">Serving Local Areas & Surrounding Communities</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-700">
                    <Clock size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-bold uppercase tracking-wider text-stone-500">{lang === 'en' ? 'Business Hours' : 'Horario de Atención'}</p>
                    <p className="text-xl font-medium text-stone-900">{t.footer.hours}</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 flex flex-wrap gap-4">
                <a 
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 font-bold text-white shadow-lg transition-transform hover:scale-105"
                >
                  <MessageCircle size={20} />
                  {t.contact.whatsapp}
                </a>
              </div>
            </div>

            <div className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="rounded-3xl bg-white p-8 shadow-xl sm:p-10">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-wider text-stone-500">{t.contact.name}</label>
                    <input 
                      required
                      type="text" 
                      className="w-full rounded-xl border border-stone-200 bg-stone-50 px-4 py-3 outline-none transition-all focus:border-green-600 focus:ring-2 focus:ring-green-600/20"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-wider text-stone-500">{t.contact.phone}</label>
                    <input 
                      required
                      type="tel" 
                      className="w-full rounded-xl border border-stone-200 bg-stone-50 px-4 py-3 outline-none transition-all focus:border-green-600 focus:ring-2 focus:ring-green-600/20"
                    />
                  </div>
                  <div className="space-y-2 sm:col-span-2">
                    <label className="text-sm font-bold uppercase tracking-wider text-stone-500">{t.contact.message}</label>
                    <textarea 
                      required
                      rows={4}
                      className="w-full rounded-xl border border-stone-200 bg-stone-50 px-4 py-3 outline-none transition-all focus:border-green-600 focus:ring-2 focus:ring-green-600/20"
                    />
                  </div>
                </div>
                <button 
                  disabled={formStatus !== 'idle'}
                  className={`mt-8 flex w-full items-center justify-center gap-2 rounded-xl py-4 text-lg font-bold text-white shadow-lg transition-all ${
                    formStatus === 'success' ? 'bg-green-500' : 'bg-green-700 hover:bg-green-800'
                  }`}
                >
                  {formStatus === 'idle' && (
                    <>
                      {t.contact.send}
                      <ChevronRight size={20} />
                    </>
                  )}
                  {formStatus === 'sending' && <div className="h-6 w-6 animate-spin rounded-full border-2 border-white border-t-transparent" />}
                  {formStatus === 'success' && (
                    <>
                      <CheckCircle2 size={24} />
                      {t.contact.success}
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* --- Footer --- */}
      <footer className="bg-stone-950 py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-8 border-b border-white/10 pb-12 md:flex-row">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-700 text-white">
                <Trees size={24} />
              </div>
              <h2 className="text-2xl font-bold tracking-tight">
                BONILLA <span className="font-light">LANDSCAPING</span>
              </h2>
            </div>
            
            <div className="flex gap-8">
              {['home', 'services', 'about', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollTo(item)}
                  className="text-sm font-medium text-stone-400 transition-colors hover:text-white"
                >
                  {t.nav[item as keyof typeof t.nav]}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-12 flex flex-col items-center justify-between gap-4 text-sm text-stone-500 md:flex-row">
            <p>© {new Date().getFullYear()} Bonilla Landscaping. {t.footer.rights}.</p>
            <div className="flex items-center gap-6">
              <a href={PHONE_LINK} className="flex items-center gap-2 transition-colors hover:text-white">
                <Phone size={16} />
                {PHONE_NUMBER}
              </a>
              <p>{t.footer.hours}</p>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Call Button for Mobile */}
      <a 
        href={PHONE_LINK}
        className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-green-600 text-white shadow-2xl transition-transform hover:scale-110 active:scale-95 md:hidden"
      >
        <Phone size={24} />
      </a>
    </div>
  );
}
