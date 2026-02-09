import { Button } from "@/components/ui/button";
import { Heart, Menu, X } from "lucide-react";
import { useState } from "react";
import { Footer } from "@/components/footer";
import { Link } from "wouter";
import { MissionModal } from "@/components/mission-modal";

function Navbar() {
        const [isOpen, setIsOpen] = useState(false);

        return (
                <nav className="fixed top-0 left-0 right-0 z-50 bg-charcoal/80 backdrop-blur-md border-b border-white/5">
                        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                        <div className="w-10 h-10 bg-mustard rounded-full flex items-center justify-center">
                                                <Heart className="text-charcoal fill-charcoal size-6" />
                                        </div>
                                        <span className="text-white font-serif text-xl font-bold tracking-tight">Afrobility</span>
                                </div>

                                <div className="hidden lg:flex items-center gap-8 text-white/70 font-medium">
                                        <a href="#services" className="hover:text-mustard transition-colors">Services</a>
                                        <a href="#blog" className="hover:text-mustard transition-colors">Insights</a>
                                        <a href="#events" className="hover:text-mustard transition-colors">Events</a>
                                        <Link href="/booking" className="hover:text-mustard transition-colors text-white/70 font-medium">Book</Link>
                                        <Link href="/donate" className="hover:text-mustard transition-colors text-white/70 font-medium">Donate</Link>
                                </div>

                                <div className="hidden lg:block">
                                        <Link href="/donate">
                                                <Button variant="secondary" className="hover:bg-mustard/90 font-bold px-6 py-5 rounded-full text-base text-charcoal">
                                                        Get Involved
                                                </Button>
                                        </Link>
                                </div>

                                <button 
                                        className="lg:hidden text-white p-2"
                                        onClick={() => setIsOpen(!isOpen)}
                                >
                                        {isOpen ? <X size={32} /> : <Menu size={32} />}
                                </button>
                        </div>

                        {/* Mobile Menu */}
                        {isOpen && (
                                <div className="lg:hidden fixed inset-0 bg-charcoal z-[100] flex flex-col animate-in fade-in duration-300">
                                        <div className="container mx-auto px-6 h-20 flex items-center justify-between border-b border-white/5">
                                                <div className="flex items-center gap-2">
                                                        <div className="w-10 h-10 bg-mustard rounded-full flex items-center justify-center">
                                                                <Heart className="text-charcoal fill-charcoal size-6" />
                                                        </div>
                                                        <span className="text-white font-serif text-xl font-bold tracking-tight">Afrobility</span>
                                                </div>
                                                <button 
                                                        className="text-white p-2"
                                                        onClick={() => setIsOpen(false)}
                                                >
                                                        <X size={32} />
                                                </button>
                                        </div>
                                        
                                        <div className="flex-1 flex flex-col p-6 justify-center space-y-12">
                                                <div className="flex flex-col space-y-8 text-4xl font-serif font-black text-white">
                                                        <a href="#services" onClick={() => setIsOpen(false)} className="hover:text-mustard transition-colors">Services</a>
                                                        <a href="#blog" onClick={() => setIsOpen(false)} className="hover:text-mustard transition-colors">Insights</a>
                                                        <a href="#events" onClick={() => setIsOpen(false)} className="hover:text-mustard transition-colors">Events</a>
                                                        <Link href="/booking" onClick={() => setIsOpen(false)} className="hover:text-mustard transition-colors">Book</Link>
                                                        <Link href="/donate" onClick={() => setIsOpen(false)} className="hover:text-mustard transition-colors">Donate</Link>
                                                </div>
                                                <Link href="/donate" onClick={() => setIsOpen(false)}>
                                                        <Button variant="secondary" className="hover:bg-mustard/90 font-bold py-8 rounded-2xl text-2xl w-full mt-4 text-charcoal">
                                                                Get Involved
                                                        </Button>
                                                </Link>
                                        </div>
                                </div>
                        )}
                </nav>
        );
}

function Hero({ onOpenMission }: { onOpenMission: () => void }) {
        return (
                <section className="relative min-h-screen pt-20 flex items-center bg-charcoal overflow-hidden">
                        {/* Decorative elements */}
                        <div className="absolute top-0 right-0 w-1/3 h-full bg-mustard/5 skew-x-12 transform translate-x-1/2" />
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-mustard/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />

                        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
                                <div className="space-y-8">
                                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-mustard/10 border border-mustard/20 text-mustard text-sm font-bold tracking-wider uppercase">
                                                <span className="relative flex h-2 w-2">
                                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-mustard opacity-75"></span>
                                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-mustard"></span>
                                                </span>
                                                United in Care
                                        </div>

                                        <h1 className="text-5xl md:text-7xl font-serif font-black text-white leading-[1.1]">
                                                United in <span className="text-mustard italic">Care</span>
                                        </h1>

                                        <p className="text-xl md:text-2xl text-white/70 max-w-lg leading-relaxed font-light">
                                                Emotional and practical support for families navigating the journey of disability with dignity and strength.
                                        </p>

                                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                                <Link href="/donate">
                                                        <Button size="lg" variant="secondary" className="hover:bg-mustard/90 font-bold h-14 px-8 rounded-xl text-lg group text-charcoal w-full sm:w-auto">
                                                                Get Involved
                                                                <Heart className="ml-2 group-hover:scale-110 transition-transform fill-charcoal" />
                                                        </Button>
                                                </Link>
                                                <Button 
                                                        size="lg" 
                                                        className="bg-[#E49B0F] text-white hover:bg-[#E49B0F]/90 font-bold h-14 px-8 rounded-xl text-lg"
                                                        onClick={onOpenMission}
                                                >
                                                        Our Mission
                                                </Button>
                                        </div>
                                </div>

                                <div className="relative">
                                        <div className="absolute -inset-4 bg-mustard/20 rounded-3xl blur-2xl animate-pulse" />
                                        <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                                                <img
                                                        src="/family-support-hero-IVI9GMjm3KFRdtT_mImzv.png"
                                                        alt="Family Support"
                                                        className="w-full h-full object-cover aspect-[4/5] md:aspect-square"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
                                                <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10">
                                                        <p className="text-white font-medium italic">"Afrobility has been a lifeline for our family. We're finally not alone."</p>
                                                        <p className="text-mustard text-sm mt-2">— Sarah K., Community Member</p>
                                                </div>
                                        </div>
                                </div>
                        </div>
                </section>
        );
}

function Services() {
        const services = [
                {
                        title: "Education Guidance",
                        price: "£50",
                        description: "Expert advice on navigating the education system, EHCP applications, and securing the right support for your child.",
                        icon: <Heart className="size-6 text-mustard" />,
                        image: "/education-guidance-service-rBFezIU6DteY1mI0Vs-sh.png"
                },
                {
                        title: "Resource Course",
                        price: "£100",
                        description: "Comprehensive multi-week course providing deep-dive resources, legal frameworks, and practical toolkits for families.",
                        icon: <Heart className="size-6 text-mustard" />,
                        image: "/blog-resources-imagery-_fSiTZ8rOC7KbuWE3A8Dq.png"
                },
                {
                        title: "Support Group",
                        price: "£30",
                        description: "Safe, facilitated spaces for emotional connection, shared experiences, and community-led mutual support.",
                        icon: <Heart className="size-6 text-mustard" />,
                        image: "/community-gathering-rlDZnMusC-ZMbWGFTmEBf.png"
                }
        ];

        return (
                <section id="services" className="py-32 bg-white">
                        <div className="container mx-auto px-6">
                                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                                        <div className="max-w-2xl">
                                                <h2 className="text-mustard font-bold uppercase tracking-widest text-sm mb-4">Our Services</h2>
                                                <h3 className="text-4xl md:text-5xl font-serif font-black text-charcoal leading-tight">
                                                        Tailored Support for <br />Every Step of the Journey
                                                </h3>
                                        </div>
                                        <p className="text-gray-500 max-w-sm">
                                                We provide practical and emotional resources designed to empower families and build lasting resilience.
                                        </p>
                                </div>

                                <div className="grid md:grid-cols-3 gap-8">
                                        {services.map((service, index) => (
                                                <div key={index} className="group relative bg-white border border-gray-100 rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-mustard/10 transition-all duration-500 hover:-translate-y-2">
                                                        <div className="aspect-[16/10] overflow-hidden relative">
                                                                <img 
                                                                        src={service.image} 
                                                                        alt={service.title} 
                                                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                                                                />
                                                                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full font-bold text-charcoal shadow-lg">
                                                                        {service.price}
                                                                </div>
                                                        </div>
                                                        
                                                        <div className="p-8">
                                                                <div className="w-12 h-12 bg-mustard/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-mustard group-hover:rotate-12 transition-all duration-500">
                                                                        <div className="group-hover:text-white transition-colors">
                                                                                {service.icon}
                                                                        </div>
                                                                </div>
                                                                
                                                                <h4 className="text-2xl font-serif font-bold text-charcoal mb-3">{service.title}</h4>
                                                                <p className="text-gray-600 mb-8 line-clamp-3">
                                                                        {service.description}
                                                                </p>
                                                                
                                                                <Link href="/booking">
                                                                        <Button className="w-full bg-charcoal text-white hover:bg-mustard hover:text-charcoal font-bold py-6 rounded-xl transition-all duration-300">
                                                                                Book Now
                                                                        </Button>
                                                                </Link>
                                                        </div>
                                                </div>
                                        ))}
                                </div>
                        </div>
                </section>
        );
}

function Blog() {
        const articles = [
                {
                        title: "Navigating Disability Support: A Guide for African Families",
                        category: "Support Guide",
                        views: "1.2k",
                        likes: 84,
                        image: "/education-guidance-service-rBFezIU6DteY1mI0Vs-sh.png"
                },
                {
                        title: "Building Community: Emotional Support",
                        category: "Community",
                        views: "850",
                        likes: 120,
                        image: "/community-gathering-rlDZnMusC-ZMbWGFTmEBf.png"
                },
                {
                        title: "Culturally Sensitive Resources for Caribbean Families",
                        category: "Resources",
                        views: "2.1k",
                        likes: 156,
                        image: "/blog-resources-imagery-_fSiTZ8rOC7KbuWE3A8Dq.png"
                }
        ];

        return (
                <section id="blog" className="py-32 bg-charcoal text-white">
                        <div className="container mx-auto px-6">
                                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                                        <div className="max-w-2xl">
                                                <h2 className="text-mustard font-bold uppercase tracking-widest text-sm mb-4">Our Insights</h2>
                                                <h3 className="text-4xl md:text-5xl font-serif font-black leading-tight">
                                                        Knowledge Shared is <br />Community Empowered
                                                </h3>
                                        </div>
                                        <a href="#blog">
                                                <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 rounded-full">
                                                        View All Articles
                                                </Button>
                                        </a>
                                </div>

                                <div className="grid md:grid-cols-3 gap-8">
                                        {articles.map((article, index) => (
                                                <div key={index} className="group relative aspect-[4/5] rounded-3xl overflow-hidden cursor-pointer">
                                                        <img 
                                                                src={article.image} 
                                                                alt={article.title} 
                                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                                                        />
                                                        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                                                        
                                                        <div className="absolute inset-0 p-8 flex flex-col justify-end">
                                                                <span className="text-mustard font-bold text-sm uppercase tracking-wider mb-4">{article.category}</span>
                                                                <h4 className="text-2xl font-serif font-bold mb-6 leading-snug group-hover:text-mustard transition-colors">
                                                                        {article.title}
                                                                </h4>
                                                                
                                                                <div className="flex items-center gap-6 text-white/60 text-sm">
                                                                        <div className="flex items-center gap-2">
                                                                                <Heart className="size-4" />
                                                                                {article.likes}
                                                                        </div>
                                                                        <div className="flex items-center gap-2">
                                                                                <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                                                                </svg>
                                                                                {article.views}
                                                                        </div>
                                                                </div>
                                                        </div>
                                                </div>
                                        ))}
                                </div>
                        </div>
                </section>
        );
}

function Events() {
        const events = [
                {
                        date: "Oct 15",
                        year: "2024",
                        title: "Annual Family Gathering",
                        description: "Join us for a day of celebration, connection, and community building at our annual flagship event.",
                        location: "Community Center, London",
                        time: "10:00 AM - 4:00 PM"
                },
                {
                        date: "Nov 02",
                        year: "2024",
                        title: "Workshop: EHCP Mastery",
                        description: "A deep dive into the EHCP process with legal experts and experienced advocates.",
                        location: "Online (Zoom)",
                        time: "6:30 PM - 8:30 PM"
                },
                {
                        date: "Dec 12",
                        year: "2024",
                        title: "Cultural Holiday Meetup",
                        description: "Celebrating our diverse heritages while sharing experiences of navigating the festive season with disability.",
                        location: "Civic Hall, London",
                        time: "2:00 PM - 6:00 PM"
                }
        ];

        return (
                <section id="events" className="py-32 bg-white">
                        <div className="container mx-auto px-6">
                                <div className="text-center max-w-3xl mx-auto mb-20">
                                        <h2 className="text-mustard font-bold uppercase tracking-widest text-sm mb-4">Upcoming Events</h2>
                                        <h3 className="text-4xl md:text-5xl font-serif font-black text-charcoal leading-tight">
                                                Connect, Learn, and Grow with Our Community
                                        </h3>
                                </div>

                                <div className="grid md:grid-cols-1 gap-6 max-w-4xl mx-auto">
                                        {events.map((event, index) => (
                                                <div key={index} className="group flex flex-col md:flex-row gap-8 items-center bg-gray-50 p-8 rounded-[2.5rem] hover:bg-white hover:shadow-xl transition-all duration-500 border border-transparent hover:border-gray-100">
                                                        <div className="flex-shrink-0 w-32 h-32 bg-mustard rounded-3xl flex flex-col items-center justify-center text-charcoal shadow-lg group-hover:scale-110 transition-transform">
                                                                <span className="text-3xl font-black font-serif leading-none">{event.date.split(' ')[1]}</span>
                                                                <span className="text-sm font-bold uppercase tracking-wider">{event.date.split(' ')[0]}</span>
                                                                <span className="text-xs font-medium opacity-60 mt-1">{event.year}</span>
                                                        </div>

                                                        <div className="flex-grow space-y-3 text-center md:text-left">
                                                                <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm text-gray-500 font-medium">
                                                                        <span className="flex items-center gap-1">
                                                                                <svg className="size-4 text-mustard" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                                                </svg>
                                                                                {event.time}
                                                                        </span>
                                                                        <span className="flex items-center gap-1">
                                                                                <svg className="size-4 text-mustard" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                                                </svg>
                                                                                {event.location}
                                                                        </span>
                                                                </div>
                                                                <h4 className="text-2xl font-serif font-bold text-charcoal">{event.title}</h4>
                                                                <p className="text-gray-600 max-w-xl">{event.description}</p>
                                                        </div>

                                                        <Link href="/donate">
                                                                <Button className="flex-shrink-0 bg-white border border-gray-200 text-charcoal hover:bg-mustard hover:border-mustard hover:text-charcoal font-bold px-8 py-6 rounded-2xl transition-all">
                                                                        Register Now
                                                                </Button>
                                                        </Link>
                                                </div>
                                        ))}
                                </div>

                                <div className="mt-16 text-center">
                                        <p className="text-gray-500 mb-6">Want to host an event with us?</p>
                                        <Button variant="link" className="text-mustard font-bold text-lg hover:text-charcoal transition-colors">
                                                Partner With Afrobility →
                                        </Button>
                                </div>
                        </div>
                </section>
        );
}

export default function Index() {
        const [isMissionOpen, setIsMissionOpen] = useState(false);

        return (
                <main className="min-h-screen bg-white">
                        <Navbar />
                        <Hero onOpenMission={() => setIsMissionOpen(true)} />
                        <Services />
                        <Blog />
                        <Events />
                        <Footer />

                        <MissionModal 
                                isOpen={isMissionOpen} 
                                onOpenChange={setIsMissionOpen} 
                        />
                </main>
        );
}
