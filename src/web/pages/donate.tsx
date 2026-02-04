import { Button } from "@/components/ui/button";
import { Heart, ArrowLeft, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";

export default function Donate() {
	const [amount, setAmount] = useState<string | null>(null);
	const [customAmount, setCustomAmount] = useState("");
	const [frequency, setFrequency] = useState<"one-time" | "monthly">("one-time");

	const tiers = ["10", "25", "50", "100"];

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
							<Heart className="text-charcoal fill-charcoal size-4" />
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
							Your Support Matters
						</div>
						<h1 className="text-4xl md:text-6xl font-serif font-black text-charcoal leading-tight">
							Help Us Build a <br />More Inclusive World
						</h1>
						<p className="text-xl text-gray-600 leading-relaxed">
							At Afrobility Family CIC, our mission is to empower families navigating disability with culturally sensitive support, resources, and community. Your donation directly funds our advocacy work and community programs.
						</p>

						<div className="space-y-6 pt-4">
							<div className="flex gap-4 items-start">
								<div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center shrink-0">
									<CheckCircle2 className="text-mustard size-6" />
								</div>
								<div>
									<h4 className="font-bold text-charcoal text-lg">Direct Impact</h4>
									<p className="text-gray-500">Every pound goes toward supporting families in need of urgent educational guidance.</p>
								</div>
							</div>
							<div className="flex gap-4 items-start">
								<div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center shrink-0">
									<CheckCircle2 className="text-mustard size-6" />
								</div>
								<div>
									<h4 className="font-bold text-charcoal text-lg">Transparent Funding</h4>
									<p className="text-gray-500">We are a Community Interest Company, committed to reinvesting all profits into our mission.</p>
								</div>
							</div>
							<div className="flex gap-4 items-start">
								<div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center shrink-0">
									<CheckCircle2 className="text-mustard size-6" />
								</div>
								<div>
									<h4 className="font-bold text-charcoal text-lg">Sustained Growth</h4>
									<p className="text-gray-500">Monthly donations help us plan long-term support programs for our community.</p>
								</div>
							</div>
						</div>
					</div>

					{/* Right Column: Donation Form */}
					<div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl shadow-charcoal/5 border border-gray-100 sticky top-32">
						<div className="flex bg-gray-100 p-1 rounded-2xl mb-10">
							<button 
								onClick={() => setFrequency("one-time")}
								className={`flex-1 py-3 rounded-xl font-bold transition-all ${frequency === "one-time" ? "bg-white text-charcoal shadow-sm" : "text-gray-500 hover:text-charcoal"}`}
							>
								One-time
							</button>
							<button 
								onClick={() => setFrequency("monthly")}
								className={`flex-1 py-3 rounded-xl font-bold transition-all ${frequency === "monthly" ? "bg-white text-charcoal shadow-sm" : "text-gray-500 hover:text-charcoal"}`}
							>
								Monthly
							</button>
						</div>

						<div className="space-y-8">
							<div>
								<label className="block text-charcoal font-bold mb-4">Select an Amount</label>
								<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
									{tiers.map((t) => (
										<button
											key={t}
											onClick={() => { setAmount(t); setCustomAmount(""); }}
											className={`py-4 rounded-2xl font-black text-xl transition-all border-2 ${amount === t ? "border-mustard bg-mustard/5 text-mustard" : "border-gray-100 hover:border-mustard/30 text-gray-400"}`}
										>
											£{t}
										</button>
									))}
								</div>
							</div>

							<div>
								<label className="block text-charcoal font-bold mb-4">Or Enter Custom Amount</label>
								<div className="relative">
									<span className="absolute left-6 top-1/2 -translate-y-1/2 text-2xl font-bold text-gray-400">£</span>
									<input 
										type="number"
										value={customAmount}
										onChange={(e) => { setCustomAmount(e.target.value); setAmount(null); }}
										placeholder="Other amount"
										className="w-full bg-gray-50 border-2 border-gray-100 focus:border-mustard focus:bg-white outline-none rounded-2xl py-5 px-12 text-2xl font-bold text-charcoal transition-all"
									/>
								</div>
							</div>

							<div className="pt-4">
								<Button className="w-full bg-mustard text-charcoal hover:bg-mustard/90 font-black text-xl py-8 rounded-2xl shadow-lg shadow-mustard/20 transition-all hover:-translate-y-1">
									Donate £{amount || customAmount || "0"} {frequency === "monthly" ? "/ Month" : "Now"}
								</Button>
								<p className="text-center text-gray-400 text-sm mt-6">
									Secure payment powered by Stripe. You can cancel monthly donations at any time.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}
