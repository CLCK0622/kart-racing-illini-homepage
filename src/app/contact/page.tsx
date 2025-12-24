"use client";

import React, { useState } from "react";
import GlassSurface from "@/components/GlassSurface";
import { FaPaperPlane, FaEnvelope, FaMapMarkerAlt, FaDiscord, FaInstagram } from "react-icons/fa";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        type: "General Inquiry", // 默认值
        message: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const recipient = "andyz4@illinois.edu";
        const subject = encodeURIComponent(`[${formData.type}] Message from ${formData.name}`);

        const bodyContent = `
--- SENDER DETAILS ---
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone || "Not provided"}
Inquiry Type: ${formData.type}

--- MESSAGE ---
${formData.message}
    `.trim();

        const body = encodeURIComponent(bodyContent);

        window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
    };

    return (
        <main className="min-h-screen relative overflow-x-hidden selection:bg-illini-accent selection:text-black font-sans bg-illini-dark text-white flex flex-col">

            <div className="fixed inset-0 z-0 pointer-events-none bg-noise opacity-50 mix-blend-overlay"></div>
            <div className="fixed top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-[120px] pointer-events-none z-0"></div>
            <div className="fixed bottom-[10%] right-[-10%] w-[600px] h-[600px] bg-illini-accent/5 rounded-full blur-[150px] pointer-events-none z-0"></div>


            <div className="relative z-10 flex-1 flex items-center justify-center pt-32 pb-20 px-6">
                <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

                    <div className="flex flex-col space-y-8 pt-4">
                        <div>
                            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-2">
                                Let&#39;s Start <br />
                                <span className="text-illini-accent font-signature text-6xl md:text-7xl ml-2">The Engine</span>
                            </h1>
                            <p className="text-gray-400 mt-6 max-w-md leading-relaxed">
                                Whether you want to sponsor our next race, join the team as a driver or mechanic, or just say hello — we are ready to hear from you.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-illini-accent shrink-0 border border-white/10">
                                    <FaEnvelope />
                                </div>
                                <div>
                                    <h3 className="font-bold text-sm uppercase tracking-widest text-white">Email Us</h3>
                                    <p className="text-gray-400 text-sm mt-1">andyz4@illinois.edu</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-illini-accent shrink-0 border border-white/10">
                                    <FaMapMarkerAlt />
                                </div>
                                <div>
                                    <h3 className="font-bold text-sm uppercase tracking-widest text-white">Find Us</h3>
                                    <p className="text-gray-400 text-sm mt-1">University of Illinois at Urbana-Champaign<br/>Champaign, IL 61820</p>
                                </div>
                            </div>
                        </div>

                        <div className="pt-8 border-t border-white/10 flex gap-6">
                            <FaInstagram className="text-2xl text-gray-400 hover:text-white transition-colors cursor-pointer" />
                            <FaDiscord className="text-2xl text-gray-400 hover:text-white transition-colors cursor-pointer" />
                        </div>
                    </div>

                    <GlassSurface
                        width="100%"
                        borderRadius={24}
                        opacity={0.6}
                        backgroundOpacity={0.05}
                        borderWidth={1}
                        height="auto"
                        className="w-full"
                    >
                        <form onSubmit={handleSubmit} className="w-full p-8 md:p-10 flex flex-col gap-6">
                            <h2 className="text-2xl font-bold uppercase tracking-wider mb-2">Send a Message</h2>

                            <div className="flex flex-col gap-2">
                                <label htmlFor="name" className="text-xs font-bold uppercase tracking-widest text-gray-500">Full Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Lando Norris"
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-illini-accent/50 focus:bg-white/10 transition-all"
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-gray-500">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="lando@illinois.edu"
                                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-illini-accent/50 focus:bg-white/10 transition-all"
                                    />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="phone" className="text-xs font-bold uppercase tracking-widest text-gray-500">Phone (Optional)</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="+1 (xxx) xxx-xxxx"
                                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-illini-accent/50 focus:bg-white/10 transition-all"
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col gap-2">
                                <label htmlFor="type" className="text-xs font-bold uppercase tracking-widest text-gray-500">Inquiry Type</label>
                                <div className="relative">
                                    <select
                                        id="type"
                                        name="type"
                                        value={formData.type}
                                        onChange={handleChange}
                                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-illini-accent/50 focus:bg-white/10 transition-all appearance-none cursor-pointer"
                                    >
                                        <option className="bg-illini-dark text-white" value="General Inquiry">General Inquiry</option>
                                        <option className="bg-illini-dark text-white" value="Sponsor">Sponsorship Opportunity</option>
                                        <option className="bg-illini-dark text-white" value="Join Us">Join The Team</option>
                                    </select>
                                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400 text-xs">▼</div>
                                </div>
                            </div>

                            <div className="flex flex-col gap-2">
                                <label htmlFor="message" className="text-xs font-bold uppercase tracking-widest text-gray-500">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows={4}
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="How can we help you win?"
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-illini-accent/50 focus:bg-white/10 transition-all resize-none"
                                />
                            </div>

                            <button
                                type="submit"
                                className="group mt-2 w-full bg-white text-black font-bold uppercase tracking-widest py-4 rounded-lg hover:bg-illini-accent transition-colors duration-300 flex items-center justify-center gap-2"
                            >
                                Send Message
                                <FaPaperPlane className="text-sm" />
                            </button>

                        </form>
                    </GlassSurface>
                </div>
            </div>
        </main>
    );
}