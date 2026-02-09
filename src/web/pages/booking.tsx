import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, User, Mail, Phone, CheckCircle2, PartyPopper } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Footer } from "@/components/footer";

export default function Booking() {
    const [service, setService] = useState<string>("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    
    const [, setLocation] = useLocation();

    const services = [
        { id: "edu", name: "Education Guidance", price: "£50" },
        { id: "res", name: "Resource Course", price: "£100" },
        { id: "sup", name: "Support Group", price: "£30" },
    ];

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500));

        const bookingData = {
            id: Math.random().toString(36).substr(2, 9),
            service,
            date,
            time,
            name,
            email,
            phone,
            status: "Pending",
            createdAt: new Date().toISOString(),
        };

        // Store in localStorage
        const existingBookings = JSON.parse(localStorage.getItem("bookings") || "[]");
        localStorage.setItem("bookings", JSON.stringify([...existingBookings, bookingData]));

        setIsSubmitting(false);
        setIsSuccess(true);
    };

    if (isSuccess) {
        return (
            <main className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
                <div className="max-w-md w-full bg-white rounded-[2.5rem] p-12 text-center shadow-2xl shadow-charcoal/5 border border-gray-100">
                    <div className="w-20 h-20 bg-mustard rounded-full flex items-center justify-center mx-auto mb-8">
                        <PartyPopper className="text-charcoal size-10" />
                    </div>
                    <h1 className="text-3xl font-serif font-black text-charcoal mb-4">Booking Confirmed!</h1>
                    <p className="text-gray-600 mb-8 leading-relaxed">
                        Your booking request for {services.find(s => s.id === service)?.name} has been received. We will contact you shortly to confirm the details.
                    </p>
                    <Button 
                        onClick={() => setLocation("/")}
                        className="w-full bg-charcoal text-white hover:bg-charcoal/90 font-bold py-6 rounded-2xl"
                    >
                        Return Home
                    </Button>
                </div>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-gray-50">
            {/* Simple Header */}
            <nav className="bg-white border-b border-gray-100 py-6">
                <div className="container mx-auto px-6 flex items-center justify-between">
                    <Link href="/">
                        <a className="flex items-center gap-2 group">
                            <ArrowLeft className="size-5 group-hover:-translate-x-1 transition-transform" />
                            <span className="font-bold">Back to Home</span>
                        </a>
                    </Link>
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-mustard rounded-full flex items-center justify-center">
                            <Calendar className="text-charcoal size-4" />
                        </div>
                        <span className="text-charcoal font-serif font-bold">Afrobility Family CIC</span>
                    </div>
                    <div className="w-24 md:block hidden"></div>
                </div>
            </nav>

            <section className="py-20">
                <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">
                    {/* Left Column: Info */}
                    <div className="space-y-8">
                        <div className="inline-block px-4 py-2 bg-mustard/10 rounded-full text-mustard font-bold text-sm uppercase tracking-wider">
                            Book a Session
                        </div>
                        <h1 className="text-4xl md:text-6xl font-serif font-black text-charcoal leading-tight">
                            Professional Support <br />for Your Family
                        </h1>
                        <p className="text-xl text-gray-600 leading-relaxed">
                            Select a service and choose a time that works for you. Our team of specialists is ready to provide the guidance and support your family needs.
                        </p>

                        <div className="space-y-6 pt-4">
                            <div className="flex gap-4 items-start">
                                <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center shrink-0">
                                    <CheckCircle2 className="text-mustard size-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-charcoal text-lg">Expert Guidance</h4>
                                    <p className="text-gray-500">Access culturally sensitive support from experienced professionals.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start">
                                <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center shrink-0">
                                    <CheckCircle2 className="text-mustard size-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-charcoal text-lg">Flexible Scheduling</h4>
                                    <p className="text-gray-500">Choose dates and times that fit your busy family life.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start">
                                <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center shrink-0">
                                    <CheckCircle2 className="text-mustard size-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-charcoal text-lg">Safe Space</h4>
                                    <p className="text-gray-500">All sessions are conducted in a supportive, confidential environment.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Booking Form */}
                    <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl shadow-charcoal/5 border border-gray-100">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-charcoal font-bold mb-4">Select Service</label>
                                <div className="grid grid-cols-1 gap-3">
                                    {services.map((s) => (
                                        <button
                                            key={s.id}
                                            type="button"
                                            onClick={() => setService(s.id)}
                                            className={`p-4 rounded-2xl text-left transition-all border-2 flex justify-between items-center ${service === s.id ? "border-mustard bg-mustard/5" : "border-gray-100 hover:border-mustard/30"}`}
                                        >
                                            <span className={`font-bold ${service === s.id ? "text-mustard" : "text-charcoal"}`}>{s.name}</span>
                                            <span className="font-black text-lg text-charcoal">{s.price}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-charcoal font-bold mb-3">Preferred Date</label>
                                    <div className="relative">
                                        <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 size-5" />
                                        <input 
                                            type="date"
                                            required
                                            value={date}
                                            onChange={(e) => setDate(e.target.value)}
                                            className="w-full bg-gray-50 border-2 border-gray-100 focus:border-mustard focus:bg-white outline-none rounded-2xl py-4 pl-12 pr-4 font-bold text-charcoal transition-all"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-charcoal font-bold mb-3">Preferred Time</label>
                                    <div className="relative">
                                        <Clock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 size-5" />
                                        <input 
                                            type="time"
                                            required
                                            value={time}
                                            onChange={(e) => setTime(e.target.value)}
                                            className="w-full bg-gray-50 border-2 border-gray-100 focus:border-mustard focus:bg-white outline-none rounded-2xl py-4 pl-12 pr-4 font-bold text-charcoal transition-all"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <label className="block text-charcoal font-bold">Your Contact Details</label>
                                <div className="relative">
                                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 size-5" />
                                    <input 
                                        type="text"
                                        required
                                        placeholder="Full Name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        className="w-full bg-gray-50 border-2 border-gray-100 focus:border-mustard focus:bg-white outline-none rounded-2xl py-4 pl-12 pr-4 font-bold text-charcoal transition-all"
                                    />
                                </div>
                                <div className="relative">
                                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 size-5" />
                                    <input 
                                        type="email"
                                        required
                                        placeholder="Email Address"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full bg-gray-50 border-2 border-gray-100 focus:border-mustard focus:bg-white outline-none rounded-2xl py-4 pl-12 pr-4 font-bold text-charcoal transition-all"
                                    />
                                </div>
                                <div className="relative">
                                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 size-5" />
                                    <input 
                                        type="tel"
                                        required
                                        placeholder="Phone Number"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        className="w-full bg-gray-50 border-2 border-gray-100 focus:border-mustard focus:bg-white outline-none rounded-2xl py-4 pl-12 pr-4 font-bold text-charcoal transition-all"
                                    />
                                </div>
                            </div>

                            <Button 
                                type="submit"
                                disabled={isSubmitting || !service}
                                className="w-full bg-mustard text-charcoal hover:bg-mustard/90 font-black py-8 rounded-2xl text-xl mt-4"
                            >
                                {isSubmitting ? "Processing..." : "Confirm Booking"}
                            </Button>
                            
                            {!service && <p className="text-sm text-center text-red-500 font-bold">Please select a service to continue</p>}
                        </form>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
