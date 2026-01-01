"use client";

import React, { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { FaBars, FaChevronDown } from 'react-icons/fa';
import GlassSurface from './GlassSurface';
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
    const pathname = usePathname();
    const router = useRouter();
    const [pageTitle, setPageTitle] = useState("HOME");

    const routes = [
        { name: "Home", path: "/" },
        { name: "Team", path: "/team" },
        { name: "Races", path: "/races" },
        { name: "Join Us", path: "https://one.illinois.edu/KartRacingIllini/club_signup" },
        { name: "Contact", path: "/contact" }
    ];

    useEffect(() => {
        const current = routes.find(r => r.path === pathname);
        if (current) {
            setPageTitle(current.name);
        } else {
            setPageTitle("MENU");
        }
    }, [pathname]);

    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const path = e.target.value;
        if (path) router.push(path);
    };

    return (
        <div className="fixed top-6 left-0 w-full flex md:justify-center justify-end z-50 px-4 pointer-events-none">

            <div className="md:hidden pointer-events-auto relative mx-auto w-full">
                <GlassSurface
                    width={320}
                    height={50}
                    borderRadius={25}
                    opacity={0.8}
                    backgroundOpacity={0.2}
                    className="mx-auto flex items-center w-full"
                >
                    <Image src="/logo.png" width="64" height="64" alt="KRI Logo" className="ml-2 mr-auto" />
                    <span className="text-white font-bold text-sm tracking-widest uppercase mr-0">{pageTitle}</span>
                    <FaChevronDown className="ml-2 text-xs text-illini-accent mr-2" />

                    <select
                        value={pathname}
                        onChange={handleSelectChange}
                        className="absolute inset-0 w-full h-full opacity-0 z-20 appearance-none cursor-pointer"
                    >
                        {routes.map((route) => (
                            <option key={route.path} value={route.path}>
                                {route.name}
                            </option>
                        ))}
                    </select>
                </GlassSurface>
            </div>

            <div className="hidden md:block pointer-events-auto w-full">
                <GlassSurface
                    width="100%"
                    height={60}
                    borderRadius={40}
                    opacity={0.6}
                    backgroundOpacity={0.1}
                    displace={5}
                    className="max-w-7xl mx-auto"
                    mixBlendMode="screen"
                >
                    <nav className="w-full flex justify-between items-center pl-4 pr-12 h-full">
                        <div className="text-sm font-bold tracking-widest uppercase text-white drop-shadow-md">
                            <Link href="/" className="flex items-center gap-4">
                                <Image src="/logo.png" width="64" height="64" alt="KRI Logo" />Kart Racing Illini
                            </Link>
                        </div>

                        <div className="flex gap-8 text-xs font-semibold tracking-widest text-gray-200">
                            <Link href="/team" className="hover:text-illini-accent transition-colors drop-shadow-sm">TEAM</Link>
                            <Link href="/races" className="hover:text-illini-accent transition-colors drop-shadow-sm">RACES</Link>
                            <Link href="https://one.illinois.edu/KartRacingIllini/club_signup" className="hover:text-illini-accent transition-colors drop-shadow-sm">JOIN US</Link>
                            <Link href="/contact" className="hover:text-illini-accent transition-colors drop-shadow-sm">CONTACT</Link>
                        </div>
                    </nav>
                </GlassSurface>
            </div>
        </div>
    );
};

export default Navbar;