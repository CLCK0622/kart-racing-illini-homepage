import React from 'react';
import { FaBars } from 'react-icons/fa';
import GlassSurface from './GlassSurface';
import Link from "next/dist/client/link"; // 确保这里的引用路径正确

const Navbar = () => {
    return (
        <div className="fixed top-6 left-0 w-full flex justify-center z-50 px-4">
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
                <nav className="w-full flex justify-between items-center px-6 md:px-12 h-full">
                    {/* Logo */}
                    <Link href="/" className="text-sm font-bold tracking-widest uppercase text-white drop-shadow-md">
                        Kart Racing Illini
                    </Link>

                    {/* Desktop Links */}
                    <div className="hidden md:flex gap-12 text-xs font-semibold tracking-widest text-gray-200">
                        <Link href="/team" className="hover:text-illini-accent transition-colors drop-shadow-sm">TEAM</Link>
                        <Link href="/races" className="hover:text-illini-accent transition-colors drop-shadow-sm">RACES</Link>
                        {/*<a href="#" className="hover:text-illini-accent transition-colors drop-shadow-sm">MERCH</a>*/}
                        <Link href="/contact" className="hover:text-illini-accent transition-colors drop-shadow-sm">CONTACT US</Link>
                    </div>

                    {/* Right Actions */}
                    {/*<div className="flex items-center gap-4">*/}
                    {/*    <div className="hidden md:block">*/}
                    {/*        <button className="w-full h-full text-xs font-bold uppercase hover:text-illini-accent transition-colors">*/}
                    {/*            Contact Us*/}
                    {/*        </button>*/}
                    {/*    </div>*/}
                    {/*    <FaBars className="md:hidden text-xl cursor-pointer" />*/}
                    {/*</div>*/}
                </nav>
            </GlassSurface>
        </div>
    );
};

export default Navbar;