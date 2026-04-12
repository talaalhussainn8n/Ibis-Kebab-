/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Utensils, 
  Clock, 
  MapPin, 
  Star, 
  CheckCircle2, 
  Phone, 
  Instagram, 
  Facebook,
  ChevronRight,
  Menu as MenuIcon,
  X
} from "lucide-react";
import { useState } from "react";

const MENU_ITEMS = [
  { 
    name: "Kebab", 
    price: "6.50", 
    description: "Frisch gebackenes Brot, saftiges Fleisch, Salat & Sauce", 
    image: "https://images.unsplash.com/photo-1561651823-34feb02250e4?auto=format&fit=crop&w=800&q=80" 
  },
  { 
    name: "Dürüm", 
    price: "7.50", 
    description: "Hausgemachter Teigfladen mit frischen Zutaten", 
    image: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&w=800&q=80" 
  },
  { 
    name: "Kebab Box", 
    price: "6.00", 
    description: "Fleisch, Pommes oder Reis mit Sauce", 
    image: "https://images.unsplash.com/photo-1623653387945-2fd25214f8fc?auto=format&fit=crop&w=800&q=80" 
  },
  { 
    name: "Schnitzel Semmel", 
    price: "5.50", 
    description: "Knuspriges Schnitzel in einer frischen Semmel mit Salat", 
    image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=800&q=80" 
  },
  { 
    name: "Getränke 0.33l", 
    price: "2.50", 
    description: "Cola, Fanta, Sprite, Eistee", 
    image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=800&q=80" 
  },
  { 
    name: "Ayran", 
    price: "2.00", 
    description: "Erfrischendes Joghurtgetränk", 
    image: "https://images.unsplash.com/photo-1571115177098-24ec42ed2bb4?auto=format&fit=crop&w=800&q=80" 
  },
];

const HIGHLIGHTS = [
  { icon: <Utensils className="w-6 h-6" />, title: "Selbstgemachtes Brot", desc: "Täglich frisch vor Ort gebacken für maximalen Geschmack." },
  { icon: <CheckCircle2 className="w-6 h-6" />, title: "Österreichisches Fleisch", desc: "Wir setzen auf regionale Qualität und Transparenz." },
  { icon: <Star className="w-6 h-6" />, title: "Top Preis-Leistung", desc: "Beste Qualität zu fairen Preisen für unsere Kunden." },
  { icon: <Clock className="w-6 h-6" />, title: "Schneller Service", desc: "Frisch zubereitet ohne lange Wartezeiten." },
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen selection:bg-brand-orange selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-brand-beige/80 backdrop-blur-md border-b border-brand-dark/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-brand-red rounded-xl flex items-center justify-center text-white font-bold text-xl">I</div>
              <span className="text-2xl font-display font-bold tracking-tight">Ibis Kebab</span>
            </div>
            
            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#uber-uns" className="text-sm font-medium hover:text-brand-orange transition-colors">Über uns</a>
              <a href="#speisekarte" className="text-sm font-medium hover:text-brand-orange transition-colors">Speisekarte</a>
              <a href="#highlights" className="text-sm font-medium hover:text-brand-orange transition-colors">Highlights</a>
              <a href="#kontakt" className="bg-brand-dark text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-brand-red transition-all active:scale-95">
                Jetzt vorbeikommen
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <MenuIcon />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-brand-beige border-b border-brand-dark/5 px-4 py-6 flex flex-col gap-4"
          >
            <a href="#uber-uns" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">Über uns</a>
            <a href="#speisekarte" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">Speisekarte</a>
            <a href="#highlights" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">Highlights</a>
            <a href="#kontakt" onClick={() => setIsMenuOpen(false)} className="bg-brand-dark text-white px-6 py-3 rounded-xl text-center font-semibold">
              Jetzt vorbeikommen
            </a>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-brand-orange/10 text-brand-orange px-4 py-2 rounded-full text-sm font-bold mb-6">
                <Star className="w-4 h-4 fill-current" />
                <span>4.7 Sterne Bewertung in Hainburg</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-display font-bold leading-[1.1] mb-6">
                Der beste Kebab in <span className="text-brand-red">Hainburg</span>
              </h1>
              <p className="text-lg lg:text-xl text-brand-dark/70 mb-10 max-w-lg leading-relaxed">
                Selbstgemachtes Brot, österreichisches Fleisch und top Qualität zu fairen Preisen. Erlebe den Unterschied.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#kontakt" className="bg-brand-red text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-brand-orange transition-all hover:shadow-xl hover:shadow-brand-red/20 active:scale-95 flex items-center justify-center gap-2">
                  Jetzt vorbeikommen <ChevronRight className="w-5 h-5" />
                </a>
                <a href="#speisekarte" className="bg-white border-2 border-brand-dark/5 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-brand-dark hover:text-white transition-all active:scale-95 flex items-center justify-center">
                  Speisekarte ansehen
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl rotate-2">
                <img 
                  src="https://picsum.photos/seed/kebab/800/800" 
                  alt="Frischer Kebab" 
                  className="w-full aspect-square object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-brand-orange rounded-full flex items-center justify-center text-white font-bold text-center p-4 -rotate-12 shadow-lg z-20">
                Täglich frisch!
              </div>
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-brand-red/10 rounded-full blur-3xl -z-10"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section id="uber-uns" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-5xl mb-8">Qualität, die man schmeckt</h2>
            <p className="text-xl text-brand-dark/70 leading-relaxed italic">
              „Ibis Kebab steht für Qualität, Frische und Geschmack. Unser Brot ist hausgemacht, das Fleisch stammt aus Österreich, und wir legen großen Wert auf freundliche Bedienung.“
            </p>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="speisekarte" className="py-24 bg-brand-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-4xl lg:text-5xl mb-4">Unsere Speisekarte</h2>
              <p className="text-brand-dark/60 text-lg">Frisch zubereitet mit den besten Zutaten aus der Region.</p>
            </div>
            <div className="bg-brand-orange/10 text-brand-orange px-6 py-3 rounded-2xl font-bold flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>Mo - Fr bis 19:00 Uhr</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {MENU_ITEMS.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-[2rem] shadow-sm border border-brand-dark/5 hover:shadow-md transition-all group overflow-hidden flex flex-col sm:flex-row"
              >
                <div className="w-full sm:w-40 h-40 shrink-0 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-6 flex-grow flex flex-col justify-center">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold group-hover:text-brand-red transition-colors">{item.name}</h3>
                    <span className="text-xl font-bold text-brand-orange">€{item.price}</span>
                  </div>
                  <p className="text-brand-dark/60 text-sm leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section id="highlights" className="py-24 bg-brand-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {HIGHLIGHTS.map((h, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex flex-col gap-4"
              >
                <div className="w-12 h-12 bg-brand-orange rounded-2xl flex items-center justify-center">
                  {h.icon}
                </div>
                <h3 className="text-xl">{h.title}</h3>
                <p className="text-white/60 leading-relaxed">{h.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-beige rounded-[3rem] p-8 md:p-16 relative">
            <div className="max-w-2xl">
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-brand-orange text-brand-orange" />
                ))}
              </div>
              <blockquote className="text-2xl md:text-4xl font-display font-bold leading-tight mb-8">
                „Das beste Kebab in Hainburg! Gute Qualität zu günstigem Preis. Ich komme immer zufrieden nach Hause.“
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-dark/10 flex items-center justify-center font-bold">M</div>
                <div>
                  <div className="font-bold">Zufriedener Kunde</div>
                  <div className="text-sm text-brand-dark/50">Google Rezension</div>
                </div>
              </div>
            </div>
            <div className="absolute top-1/2 -right-20 -translate-y-1/2 hidden lg:block">
              <div className="w-64 h-64 bg-brand-orange/20 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-24 bg-brand-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl mb-12 text-center">Impressionen</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-brand-dark/5">
              <img src="https://picsum.photos/seed/hainburg-town/600/800" alt="Hainburg an der Donau" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
            </div>
            <div className="aspect-square rounded-3xl overflow-hidden bg-brand-dark/5 md:mt-12">
              <img src="https://picsum.photos/seed/kebab-stand/600/600" alt="Ibis Kebabstand" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
            </div>
            <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-brand-dark/5">
              <img src="https://picsum.photos/seed/donau-river/600/800" alt="Donauufer Hainburg" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Footer */}
      <footer id="kontakt" className="bg-brand-dark text-white pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 mb-24">
            <div>
              <h2 className="text-4xl lg:text-6xl mb-8">Besuche uns in Hainburg</h2>
              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-brand-orange shrink-0" />
                  <div>
                    <div className="font-bold text-xl">Standort</div>
                    <p className="text-white/60">Landstraße 122, 2410 Hainburg an der Donau</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-brand-orange shrink-0" />
                  <div>
                    <div className="font-bold text-xl mb-2">Öffnungszeiten</div>
                    <div className="text-white/60 space-y-1 text-sm">
                      <div className="flex justify-between gap-8"><span>Mo - Fr:</span> <span>10:00 - 19:00</span></div>
                      <div className="flex justify-between gap-8"><span>Samstag:</span> <span>10:00 - 18:30</span></div>
                      <div className="text-brand-orange font-medium pt-1">Sonntag & Feiertag geschlossen</div>
                    </div>
                  </div>
                </div>
              </div>
              <a 
                href="https://www.google.com/maps/search/Ibis+Kebab+Hainburg" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-brand-dark px-8 py-4 rounded-2xl font-bold hover:bg-brand-orange hover:text-white transition-all active:scale-95"
              >
                Route auf Google Maps öffnen <MapPin className="w-5 h-5" />
              </a>
            </div>
            
            <div className="bg-white/5 p-8 md:p-12 rounded-[2.5rem] border border-white/10">
              <h3 className="text-2xl mb-6">Folge uns</h3>
              <p className="text-white/60 mb-8">Bleib auf dem Laufenden über Angebote und Neuigkeiten.</p>
              <div className="flex gap-4">
                <a href="#" className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center hover:bg-brand-orange transition-colors">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center hover:bg-brand-orange transition-colors">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="tel:+43123456789" className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center hover:bg-brand-orange transition-colors">
                  <Phone className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-12 flex flex-col md:flex-row justify-between items-center gap-6 text-white/40 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-brand-red rounded flex items-center justify-center text-white font-bold text-xs">I</div>
              <span>© 2026 Ibis Kebab Hainburg. Alle Rechte vorbehalten.</span>
            </div>
            <div className="flex gap-8">
              <a href="#" className="hover:text-white transition-colors">Impressum</a>
              <a href="#" className="hover:text-white transition-colors">Datenschutz</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

