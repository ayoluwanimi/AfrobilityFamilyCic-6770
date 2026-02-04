import { Footer } from "@/components/footer";
import { Heart, ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function PrivacyPolicy() {
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
                                        <h1 className="text-4xl md:text-6xl font-serif font-black text-charcoal mb-8">Privacy Policy</h1>
                                        <p className="text-gray-500 mb-12 italic">Last updated: October 2024</p>

                                        <div className="prose prose-lg prose-charcoal max-w-none space-y-12">
                                                <section className="space-y-4">
                                                        <h2 className="text-2xl font-bold text-charcoal">1. Introduction</h2>
                                                        <p className="text-gray-600 leading-relaxed">
                                                                Afrobility Family CIC ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services. We comply with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
                                                        </p>
                                                </section>

                                                <section className="space-y-4">
                                                        <h2 className="text-2xl font-bold text-charcoal">2. Information We Collect</h2>
                                                        <p className="text-gray-600 leading-relaxed">
                                                                We may collect information about you in a variety of ways. The information we may collect on the Site includes:
                                                        </p>
                                                        <ul className="list-disc pl-6 space-y-2 text-gray-600">
                                                                <li><strong>Personal Data:</strong> Personally identifiable information, such as your name, shipping address, email address, and telephone number, that you voluntarily give to us when you register with the Site, make a donation, or book a service.</li>
                                                                <li><strong>Financial Data:</strong> Financial information, such as data related to your payment method (e.g. valid credit card number, card brand, expiration date) that we may collect when you donate or book services. All financial data is stored by our payment processor, Stripe, and you should review their privacy policy.</li>
                                                                <li><strong>Derivative Data:</strong> Information our servers automatically collect when you access the Site, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the Site.</li>
                                                        </ul>
                                                </section>

                                                <section className="space-y-4">
                                                        <h2 className="text-2xl font-bold text-charcoal">3. Use of Your Information</h2>
                                                        <p className="text-gray-600 leading-relaxed">
                                                                Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:
                                                        </p>
                                                        <ul className="list-disc pl-6 space-y-2 text-gray-600">
                                                                <li>Process donations and service bookings.</li>
                                                                <li>Send you email confirmations and receipts.</li>
                                                                <li>Deliver newsletters, marketing materials, and other information regarding our activities.</li>
                                                                <li>Respond to product and customer service requests.</li>
                                                                <li>Improve the efficiency and operation of the Site.</li>
                                                                <li>Monitor and analyze usage and trends to improve your experience.</li>
                                                        </ul>
                                                </section>

                                                <section className="space-y-4">
                                                        <h2 className="text-2xl font-bold text-charcoal">4. Disclosure of Your Information</h2>
                                                        <p className="text-gray-600 leading-relaxed">
                                                                We may share information we have collected about you in certain situations. Your information may be disclosed as follows:
                                                        </p>
                                                        <ul className="list-disc pl-6 space-y-2 text-gray-600">
                                                                <li><strong>By Law or to Protect Rights:</strong> If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others.</li>
                                                                <li><strong>Third-Party Service Providers:</strong> We may share your information with third parties that perform services for us or on our behalf, including payment processing, data analysis, email delivery, hosting services, and customer service.</li>
                                                        </ul>
                                                </section>

                                                <section className="space-y-4">
                                                        <h2 className="text-2xl font-bold text-charcoal">5. Your Rights (GDPR)</h2>
                                                        <p className="text-gray-600 leading-relaxed">
                                                                Under the GDPR, you have the following rights:
                                                        </p>
                                                        <ul className="list-disc pl-6 space-y-2 text-gray-600">
                                                                <li><strong>Right to Access:</strong> The right to request copies of your personal data.</li>
                                                                <li><strong>Right to Rectification:</strong> The right to request that we correct any information you believe is inaccurate or complete information you believe is incomplete.</li>
                                                                <li><strong>Right to Erasure:</strong> The right to request that we erase your personal data, under certain conditions.</li>
                                                                <li><strong>Right to Restrict Processing:</strong> The right to request that we restrict the processing of your personal data, under certain conditions.</li>
                                                                <li><strong>Right to Data Portability:</strong> The right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.</li>
                                                        </ul>
                                                </section>

                                                <section className="space-y-4">
                                                        <h2 className="text-2xl font-bold text-charcoal">6. Contact Us</h2>
                                                        <p className="text-gray-600 leading-relaxed">
                                                                If you have questions or comments about this Privacy Policy, please contact us at:
                                                        </p>
                                                        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                                                                <p className="font-bold text-charcoal">Afrobility Family CIC</p>
                                                                <p className="text-gray-600">123 Community Lane, London, SE1 7PB</p>
                                                                <p className="text-gray-600">Email: hello@afrobility.org</p>
                                                        </div>
                                                </section>
                                        </div>
                                </div>
                        </section>

                        <Footer />
                </main>
        );
}
