"use client";

import React from "react";
import Image from "next/image";
import { FaMapMarkerAlt, FaTrophy, FaCalendarAlt } from "react-icons/fa";

interface RaceEvent {
    id: number;
    name: string;
    date: string;
    location: string;
    rank: string | string[];
    image: string;
    gapScale: number;
}

const pastRaces: RaceEvent[] = [
    {
        id: 1,
        name: "KCA 4h Endurance",
        date: "APR 27, 2025",
        location: "Joliet, IL",
        rank: "P3",
        image: "/tracks/MidStateKartClub.webp",
        gapScale: 1
    },
    {
        id: 2,
        name: "MSKC #4",
        date: "MAY 18, 2025",
        location: "Dawson, IL",
        rank: ["P1", "P3"],
        image: "/races/250518MSKC.JPG",
        gapScale: 2
    },
    {
        id: 3,
        name: "CRKC 8h Endurance",
        date: "JUL 27, 2025",
        location: "Shanghai, CN",
        rank: "P31",
        image: "/races/250727CRKC.JPG",
        gapScale: 1
    },
    {
        id: 4,
        name: "SIRA #4",
        date: "AUG 24, 2025",
        location: "Yorktown, IN",
        rank: "P1",
        image: "/races/250824SIRA.JPG",
        gapScale: 0.5
    },
    {
        id: 5,
        name: "KRA #11",
        date: "AUG 30, 2025",
        location: "New Castle, IN",
        rank: "DNS",
        image: "/races/250830NCMP.JPG",
        gapScale: 0.5
    },
    {
        id: 6,
        name: "MSKC #11",
        date: "SEP 07, 2025",
        location: "Dawson, IL",
        rank: "P2",
        image: "/races/250907MSKC.JPG",
        gapScale: 0.5
    },
    {
        id: 7,
        name: "MSKC #13",
        date: "SEP 14, 2025",
        location: "Dawson, IL",
        rank: "P1",
        image: "/races/250914MSKC.JPG",
        gapScale: 1.5
    },
    {
        id: 8,
        name: "KRA #13",
        date: "OCT 10, 2025",
        location: "New Castle, IN",
        rank: ["P13 (KA)", "P21 (206)"],
        image: "/races/251012NCMP.jpg",
        gapScale: 1
    },
    {
        id: 9,
        name: "KRA #14",
        date: "OCT 26, 2025",
        location: "New Castle, IN",
        rank: ["DNF (KA)", "P14 (206)"],
        image: "/races/251026NCMP.jpg",
        gapScale: 1
    },
    {
        id: 10,
        name: "SIKC #1", // 20251228 SIKC
        date: "DEC 28, 2025",
        location: "Shanghai, CN",
        rank: "P6",
        image: "/races/251228SIKC.jpg",
        gapScale: 2
    }
];

const getRankStyle = (r: string) => {
    if (r === 'P1' || r.includes('Winner')) return 'bg-illini-accent text-black';
    if (r.includes('DNF') || r.includes('DNS')) return 'bg-red-500/90 text-white';
    if (r.includes('Fastest')) return 'bg-purple-500/90 text-white';
    return 'bg-black/60 text-white backdrop-blur-md border border-white/20';
};

export default function RacesPage() {
    const races = [...pastRaces].reverse();
    return (
        <main className="min-h-screen relative overflow-x-hidden selection:bg-illini-accent selection:text-black font-sans text-white flex flex-col">

            <div className="fixed inset-0 z-0 pointer-events-none bg-noise opacity-50 mix-blend-overlay"></div>
            <div className="fixed top-[10%] left-[50%] -translate-x-1/2 w-[800px] h-[800px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none z-0"></div>

            <div className="relative z-10 flex-1 flex flex-col items-center pt-32 pb-32 px-4 md:px-0">

                <div className="text-center mb-10">
                    <h1 className="text-4xl md:text-7xl font-bold tracking-tight mb-2">
                        Race <span className="text-illini-accent font-signature text-6xl md:text-8xl ml-2">History</span>
                    </h1>
                    <p className="text-gray-400 text-sm uppercase tracking-widest mt-4">
                        Races we have competed before
                    </p>
                </div>

                <div className="relative w-full max-w-5xl flex flex-col items-center">

                    <div className="absolute top-4 bottom-0 w-[2px] bg-gradient-to-b from-illini-accent via-white/20 to-transparent left-4 md:left-1/2 md:-translate-x-1/2 z-0"></div>

                    {races.map((race, index) => {
                        const isEven = index % 2 === 0;
                        const marginTop = `${race.gapScale * 4}rem`;

                        const ranks = Array.isArray(race.rank) ? race.rank : [race.rank];

                        return (
                            <div
                                key={race.id}
                                className={`relative w-full flex items-center md:justify-between pl-12 md:pl-0 ${!isEven ? 'md:flex-row-reverse' : ''}`}
                                style={{ marginTop: index === 0 ? '0' : marginTop }}
                            >

                                <div className="w-full md:w-[45%] group">
                                    <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 hover:border-white/20 transition-all duration-300 shadow-lg">

                                        <div className="relative h-72 w-full overflow-hidden">
                                            <Image
                                                src={race.image}
                                                alt={race.name}
                                                fill
                                                className="object-cover group-hover:scale-105 transition-transform duration-700"
                                            />
                                            <div className="absolute top-4 right-4 flex flex-col gap-2 items-end">
                                                {ranks.map((r, i) => (
                                                    <div key={i} className={`px-3 py-1 rounded-full text-sm font-bold shadow-md ${getRankStyle(r)}`}>
                                                        {(r === 'P1' || r.includes('Winner')) ? `🏆 ${r}` : r}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="p-6">
                                            <div className="flex items-center gap-2 text-illini-accent text-xs font-bold uppercase tracking-wider mb-2">
                                                <FaCalendarAlt />
                                                {race.date}
                                            </div>
                                            <h3 className="text-2xl font-bold text-white mb-3 leading-tight group-hover:text-illini-accent transition-colors">
                                                {race.name}
                                        </h3>
                                        <div className="flex items-center gap-2 text-gray-400 text-sm">
                                            <FaMapMarkerAlt />
                                            {race.location}
                                        </div>
                                    </div>

                                </div>
                            </div>

                        <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-8 h-8 flex items-center justify-center z-10">
                            <div className="absolute w-full h-full bg-illini-accent/20 rounded-full animate-pulse"></div>
                            <div className="w-3 h-3 bg-illini-accent rounded-full shadow-[0_0_10px_rgba(250,204,21,0.8)]"></div>
                        </div>

                        <div className="hidden md:block w-[45%]"></div>

                    </div>
                    );
                    })}

                    <div className="mt-20 text-xs text-gray-600 font-mono uppercase tracking-widest">

                    </div>

                </div>
            </div>
        </main>
    );
}