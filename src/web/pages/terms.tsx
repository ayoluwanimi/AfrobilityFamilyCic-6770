import { Footer } from "@/components/footer";
import { Heart, ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function TermsOfService() {
        return (
                <main className="min-h-screen bg-white">
                        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
                                <div className="container mx-auto px-6 h-20 flex items-center justify-between">
                                        <Link href="/">
                                                <a className="flex items-center gap-2 group">
                                                        <ArrowLeft className="size-5 group-hover:-translate-x-1 transition-transform" />
                                                        <span className="font-bold text-charcoal">Back to Home</span>
                                                </a>
                                        </Link>
                                        <div className="flex items-center gap-2">
                                                <div className="w-10 h-10 bg-mustard rounded-full flex items-center justify-center">
                                                        <Heart className="text-charcoal fill-charcoal size-6" />
                                                </div>
                                                <span className="text-charcoal font-serif text-xl font-bold tracking-tight">Afrobility</span>
                                        </div>
                                        <div className="w-24 md:block hidden"></div>
                                </div>
                        </nav>

                        <section className="pt-40 pb-20">
                                <div className="container mx-auto px-6 max-w-4xl">
                                        <h1 className="text-4xl md:text-6xl font-serif font-black text-charcoal mb-8">Terms of Service</h1>
                                        <p className="text-gray-500 mb-12 italic">Last updated: October 2024</p>

                                        <div className="prose prose-lg prose-charcoal max-w-none space-y-12">
                                                <section className="space-y-4">
                                                        <h2 className="text-2xl font-bold text-charcoal">1. Agreement to Terms</h2>
                                                        <p className="text-gray-600 leading-relaxed">
                                                                By accessing our website and using our services, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you are prohibited from using our site and services.
                                                        </p>
                                                </section>

                                                <section className="space-y-4">
                                                        <h2 className="text-2xl font-bold text-charcoal">2. Donation Terms</h2>
                                                        <p className="text-gray-600 leading-relaxed">
                                                                All donations made to Afrobility Family CIC are voluntary. We are a registered Community Interest Company (CIC) in England and Wales. 
                                                        </p>
                                                        <ul className="list-disc pl-6 space-y-2 text-gray-600">
                                                                <li><strong>One-time Donations:</strong> These are processed immediately and are generally non-refundable unless required by law.</li>
                                                                <li><strong>Recurring Donations:</strong> You can cancel your monthly donation at any time through your account or by contacting us directly.</li>
                                                                <li><strong>Tax Receipts:</strong> We provide email receipts for all donations which can be used for tax purposes where applicable.</li>
                                                        </ul>
                                                </section>

                                                <section className="space-y-4">
                                                        <h2 className="text-2xl font-bold text-charcoal">3. Service Booking Terms</h2>
                                                        <p className="text-gray-600 leading-relaxed">
                                                                When booking services (Education Guidance, Resource Courses, Support Groups):
                                                        </p>
                                                        <ul className="list-disc pl-6 space-y-2 text-gray-600">
                                                                <li><strong>Payment:</strong> Payment must be made in full at the time of booking.</li>
                                                                <li><strong>Cancellations:</strong> Cancellations made more than 48 hours before the service date are eligible for a full refund. Cancellations made within 48 hours may be subject to a cancellation fee.</li>
                                                                <li><strong>Rescheduling:</strong> We will do our best to accommodate rescheduling requests made at least 24 hours in advance.</li>
                                                        </ul>
                                                </section>

                                                <section className="space-y-4">
                                                        <h2 className="text-2xl font-bold text-charcoal">4. Intellectual Property Rights</h2>
                                                        <p className="text-gray-600 leading-relaxed">
                                                                Unless otherwise indicated, the Site and its original content, features, and functionality are owned by Afrobility Family CIC and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
                                                        </p>
                                                </section>

                                                <section className="space-y-4">
                                                        <h2 className="text-2xl font-bold text-charcoal">5. Limitation of Liability</h2>
                                                        <p className="text-gray-600 leading-relaxed">
                                                                In no event shall Afrobility Family CIC, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.
                                                        </p>
                                                </section>

                                                <section className="space-y-4">
                                                        <h2 className="text-2xl font-bold text-charcoal">6. Governing Law</h2>
                                                        <p className="text-gray-600 leading-relaxed">
                                                                These Terms shall be governed and construed in accordance with the laws of England and Wales, without regard to its conflict of law provisions.
                                                        </p>
                                                </section>

                                                <section className="space-y-4">
                                                        <h2 className="text-2xl font-bold text-charcoal">7. Changes to Terms</h2>
                                                        <p className="text-gray-600 leading-relaxed">
                                                                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will provide notice of any changes by posting the new Terms on this page.
                                                        </p>
                                                </section>
                                        </div>
                                </div>
                        </section>

                        <Footer />
                </main>
        );
}
