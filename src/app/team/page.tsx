"use client";

import React from "react";
import Image from "next/image";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";

interface TeamMember {
    name: string;
    role: string;
    image: string;
    email?: string;
    linkedin?: string;
}

const teamMembers: TeamMember[] = [
    {
        name: "Andy",
        role: "President",
        image: "/team/AndyZ.jpg",
        email: "andyz4@illinois.edu",
        // linkedin: "https://linkedin.com/in/andy"
    },
    {
        name: "Bruce",
        role: "Vice President",
        image: "/team/Bruce.jpg",
        email: "zerenl2@illinois.edu"
    },
    {
        name: "Brian",
        role: "Treasurer",
        image: "/team/Brian.jpg",
        email: "bzheng10@illinois.edu"
    },
    {
        name: "Pam",
        role: "Secretary",
        image: "/team/Pam.jpg",
        // linkedin: "https://linkedin.com/in/pam",
        email: "lizilin2@illinois.edu"
    },
    {
        name: "Jason",
        role: "Membership Director",
        image: "/team/Jason.png",
        email: "yz132@illinois.edu"
    },
];

const MemberCard = ({ member }: { member: TeamMember }) => (
    <div className="group relative w-full max-w-sm p-8 flex flex-col items-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl transition-colors duration-300 hover:border-white/20 hover:bg-white/10">

        <div className="relative w-32 h-32 md:w-40 md:h-40 mb-6 rounded-full overflow-hidden border-2 border-white/10 group-hover:border-illini-accent transition-colors duration-300 shadow-xl">
            <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
        </div>

        <h3 className="text-2xl font-bold text-white mb-1 tracking-wide">{member.name}</h3>
        <div className="text-xs font-bold text-illini-accent uppercase tracking-widest mb-4">
            {member.role}
        </div>

        <div className="w-12 h-[1px] bg-white/20 mb-6 group-hover:w-full transition-all duration-300" />

        <div className="flex gap-4 text-gray-400 min-h-[24px]">
            {member.email && (
                <a href={`mailto:${member.email}`} className="hover:text-white transition-colors">
                    <FaEnvelope size={20} />
                </a>
            )}
            {member.linkedin && (
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-[#0077b5] transition-colors">
                    <FaLinkedin size={20} />
                </a>
            )}
        </div>
    </div>
);

export default function TeamPage() {
    const executives = teamMembers.slice(0, 2);
    const directors = teamMembers.slice(2);

    return (
        <main className="min-h-screen relative overflow-x-hidden selection:bg-illini-accent selection:text-black font-sans text-white flex flex-col">

            <div className="fixed inset-0 z-0 pointer-events-none bg-noise opacity-50 mix-blend-overlay"></div>
            <div className="fixed top-[-20%] left-[20%] w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[140px] pointer-events-none z-0"></div>
            <div className="fixed bottom-[-10%] right-[10%] w-[700px] h-[700px] bg-illini-accent/5 rounded-full blur-[160px] pointer-events-none z-0"></div>

            <div className="relative z-10 flex-1 flex flex-col items-center pt-32 pb-20 px-6">

                <div className="text-center mb-16 md:mb-20">
                    <h1 className="text-4xl md:text-7xl font-bold tracking-tight mb-4">
                        Meet The <br className="md:hidden"/>
                        <span className="text-illini-accent font-signature text-6xl md:text-8xl ml-3">Crew</span>
                    </h1>
                    <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
                        <span className="font-semibold">The minds and drivers behind the wheel.</span><br /> We are a group of passionate students <br /> dedicated to pushing the limits of speed at UIUC.
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-8 w-full max-w-5xl mb-8">
                    {executives.map((member, index) => (
                        <MemberCard key={index} member={member} />
                    ))}
                </div>

                <div className="flex flex-wrap justify-center gap-8 w-full max-w-7xl">
                    {directors.map((member, index) => (
                        <MemberCard key={index} member={member} />
                    ))}
                </div>

                <div className="mt-20 text-center">
                    <p className="text-white text-sm uppercase tracking-widest mb-6">Want to be on this list?</p>
                    <a href="/contact">
                        <button className="px-8 py-3 rounded-full border border-white/20 text-white font-bold text-sm uppercase hover:bg-white hover:text-black hover:scale-105 transition-all duration-300">
                            Join The Team
                        </button>
                    </a>
                </div>
            </div>
        </main>
    );
}