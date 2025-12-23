import React from 'react';
import { FaBars } from 'react-icons/fa';
import GlassSurface from './GlassSurface'; // 确保这里的引用路径正确

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
                    <div className="text-sm font-bold tracking-widest uppercase text-white drop-shadow-md">
                        Kart Racing Illini
                    </div>

                    {/* Desktop Links */}
                    <div className="hidden md:flex gap-8 text-xs font-semibold tracking-widest text-gray-200">
                        <a href="#" className="hover:text-illini-accent transition-colors drop-shadow-sm">TEAM</a>
                        <a href="#" className="hover:text-illini-accent transition-colors drop-shadow-sm">CIRCUITS</a>
                        <a href="#" className="hover:text-illini-accent transition-colors drop-shadow-sm">MERCH</a>
                        <a href="#" className="hover:text-illini-accent transition-colors drop-shadow-sm">CONTACT US</a>
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