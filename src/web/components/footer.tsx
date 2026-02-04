import { Heart, Facebook, Twitter, Instagram, Linkedin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export function Footer() {
        return (
                <footer className="bg-charcoal pt-24 pb-12 text-white/60 font-sans">
                        <div className="container mx-auto px-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
                                        {/* Brand Column */}
                                        <div className="space-y-8 col-span-1 lg:col-span-1">
                                                <Link href="/">
                                                        <div className="flex items-center gap-2 cursor-pointer group">
                                                                <div className="w-10 h-10 bg-mustard rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform">
                                                                        <Heart className="text-charcoal fill-charcoal size-6" />
                                                                </div>
                                                                <span className="text-white font-serif text-2xl font-bold tracking-tight">Afrobility</span>
                                                        </div>
                                                </Link>
                                                <p className="leading-relaxed text-lg max-w-xs">
                                                        Empowering families navigating disability with culturally sensitive support and community-led resources.
                                                </p>
                                                <div className="flex gap-4">
                                                        <a href="https://facebook.com" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-mustard hover:text-charcoal hover:border-mustard transition-all duration-300">
                                                                <Facebook size={20} />
                                                        </a>
                                                        <a href="https://twitter.com" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-mustard hover:text-charcoal hover:border-mustard transition-all duration-300">
                                                                <Twitter size={20} />
                                                        </a>
                                                        <a href="https://instagram.com" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-mustard hover:text-charcoal hover:border-mustard transition-all duration-300">
                                                                <Instagram size={20} />
                                                        </a>
                                                        <a href="https://linkedin.com" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-mustard hover:text-charcoal hover:border-mustard transition-all duration-300">
                                                                <Linkedin size={20} />
                                                        </a>
                                                </div>
                                        </div>

                                        {/* Quick Links */}
                                        <div className="lg:ml-auto">
                                                <h5 className="text-white font-bold text-lg mb-8">Navigation</h5>
                                                <ul className="space-y-4 text-lg">
                                                        <li><Link href="/"><a className="hover:text-mustard transition-colors">Home</a></Link></li>
                                                        <li><a href="#services" className="hover:text-mustard transition-colors">Services</a></li>
                                                        <li><a href="#blog" className="hover:text-mustard transition-colors">Insights</a></li>
                                                        <li><a href="#events" className="hover:text-mustard transition-colors">Events</a></li>
                                                        <li><Link href="/donate"><a className="hover:text-mustard transition-colors">Donate</a></Link></li>
                                                </ul>
                                        </div>

                                        {/* Contact Info */}
                                        <div className="lg:ml-auto">
                                                <h5 className="text-white font-bold text-lg mb-8">Contact Us</h5>
                                                <ul className="space-y-6 text-lg">
                                                        <li className="flex gap-4">
                                                                <div className="text-mustard shrink-0">
                                                                        <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                                        </svg>
                                                                </div>
                                                                <span>123 Community Lane, London, SE1 7PB</span>
                                                        </li>
                                                        <li className="flex gap-4">
                                                                <div className="text-mustard shrink-0">
                                                                        <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                                        </svg>
                                                                </div>
                                                                <a href="mailto:hello@afrobility.org" className="hover:text-mustard transition-colors">hello@afrobility.org</a>
                                                        </li>
                                                        <li className="flex gap-4">
                                                                <div className="text-mustard shrink-0">
                                                                        <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                                                        </svg>
                                                                </div>
                                                                <a href="tel:+442071234567" className="hover:text-mustard transition-colors">+44 20 7123 4567</a>
                                                        </li>
                                                </ul>
                                        </div>

                                        {/* Newsletter */}
                                        <div className="space-y-8">
                                                <h5 className="text-white font-bold text-lg">Newsletter</h5>
                                                <p className="text-base leading-relaxed">
                                                        Stay updated with our latest resources and community events.
                                                </p>
                                                <div className="relative">
                                                        <input 
                                                                type="email" 
                                                                placeholder="Your email address"
                                                                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-6 pr-14 outline-none focus:border-mustard focus:ring-1 focus:ring-mustard transition-all text-white placeholder:text-white/20"
                                                        />
                                                        <button className="absolute right-2 top-2 bottom-2 w-10 bg-mustard rounded-xl flex items-center justify-center text-charcoal hover:scale-105 active:scale-95 transition-all">
                                                                <Send size={18} />
                                                        </button>
                                                </div>
                                        </div>
                                </div>

                                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-base">
                                        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
                                                <p>© 2024 Afrobility Family CIC. All rights reserved.</p>
                                                <p className="text-white/30 hidden md:block">|</p>
                                                <p className="italic">Registered CIC in England & Wales</p>
                                        </div>
                                        <div className="flex gap-10">
                                                <Link href="/privacy">
                                                        <a className="hover:text-mustard transition-colors">Privacy Policy</a>
                                                </Link>
                                                <Link href="/terms">
                                                        <a className="hover:text-mustard transition-colors">Terms of Service</a>
                                                </Link>
                                        </div>
                                </div>
                        </div>
                </footer>
        );
}
