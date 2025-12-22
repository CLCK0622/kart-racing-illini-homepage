import GlassSurface from "@/components/GlassSurface";
import Image from "next/image";
import {FaArrowRight, FaBars, FaInstagram, FaDiscord} from "react-icons/fa";

const stats = [
    {title: "Next Race", subtitle: "Chambana GP, Oct 24", id: 1},
    {title: "Join The Team", subtitle: "Recruitment Open", id: 2},
    {title: "Club Ranking", subtitle: "Top 5 in Midwest", id: 3},
    {title: "Weekly Meet", subtitle: "Thursdays 7PM", id: 4},
];

const cards = [
    {
        id: 1,
        title: "The Iconic Yellow Helmet",
        desc: "Simple yet unforgettable, the yellow, green, and blue helmet stood as a beacon of Senna's unmatched legacy on and off the track.",
        img: "https://images.unsplash.com/photo-1757262981737-34d0413b6f2a?q=80&w=987&auto=format&fit=crop"
    },
    {
        id: 2,
        title: "Monaco 1984 Arrival of a Star",
        desc: "Monaco 1984 marked Senna's arrival — a fearless rookie in the rain, charging through the field and proving a legend was born.",
        img: "https://images.unsplash.com/photo-1683290843440-170cb27c3a66?q=80&w=1040&auto=format&fit=crop"
    },
    {
        id: 3,
        title: "The Yellow Lotus Era",
        desc: "With the Camel-sponsored yellow Lotus, Senna's legend grew as he pushed the limits of speed, precision, and control.",
        img: "https://images.unsplash.com/photo-1747805688489-c66c26751510?q=80&w=987&auto=format&fit=crop"
    },
];

export default function Home() {
    return (
        <main
            className="min-h-screen flex flex-col relative overflow-x-hidden selection:bg-illini-accent selection:text-black font-sans">

            <div className="fixed inset-0 z-0 pointer-events-none bg-noise opacity-50 mix-blend-overlay"></div>

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
                        <div className="text-sm font-bold tracking-widest uppercase text-white drop-shadow-md">
                            Kart Racing Illini
                        </div>

                        <div className="hidden md:flex gap-8 text-xs font-semibold tracking-widest text-gray-200">
                            <a href="#" className="hover:text-illini-accent transition-colors drop-shadow-sm">TEAM</a>
                            <a href="#"
                               className="hover:text-illini-accent transition-colors drop-shadow-sm">CIRCUITS</a>
                            <a href="#" className="hover:text-illini-accent transition-colors drop-shadow-sm">MERCH</a>
                            <a href="#" className="hover:text-illini-accent transition-colors drop-shadow-sm">JOIN
                                US</a>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="hidden md:block">
                                <button
                                    className="w-full h-full text-xs font-bold uppercase hover:text-illini-accent transition-colors">
                                    Contact Us
                                </button>
                            </div>
                            <FaBars className="md:hidden text-xl"/>
                        </div>
                    </nav>
                </GlassSurface>
            </div>

            <section className="relative w-full pb-16 pt-32 md:pb-24 px-6 md:px-12 flex flex-col items-center text-center z-10">
                <div className="relative z-10 flex flex-col items-center">
                    <h1 className="text-3xl md:text-7xl font-bold leading-tight tracking-tight text-white mb-2 drop-shadow-2xl">
                        Adrenaline Lives On <br /> Through Speed
                    </h1>
                    <div className="relative w-full flex justify-center items-center mt-2 md:-mt-8 mb-8 md:mb-10">
            <span className="font-signature text-illini-accent text-5xl md:text-6xl md:text-[9rem] transform z-20 whitespace-nowrap drop-shadow-lg">
              Kart Racing Illini
            </span>
                    </div>

                    <GlassSurface
                        width={200}
                        height={60}
                        borderRadius={30}
                        displace={5}
                        backgroundOpacity={0.1}
                        blur={50}
                        borderWidth={1}
                        className="relative z-30 cursor-pointer hover:scale-105 transition-transform duration-300"
                    >
                        <button className="w-full h-full flex items-center justify-center text-white text-sm font-bold uppercase tracking-wider">
                            View The Race
                        </button>
                    </GlassSurface>
                </div>

                <div className="relative w-full max-w-4xl mt-12 md:-mt-88 -z-10 pointer-events-none">
                    <div className="relative">
                        <Image
                            src="https://images.unsplash.com/photo-1652451991281-e637ec408bec?q=80&w=2533&auto=format&fit=crop"
                            alt="Go Kart on track"
                            width={1200}
                            height={800}
                            className="w-full h-auto object-cover"
                        />
                    </div>
                </div>
            </section>

            <section
                className="w-full px-6 md:px-12 mb-16 z-20">

                <div className="text-gray-400 text-sm font-semibold mb-6">A Season We&#39;ll Never Forget</div>
                <section
                    className="py-8 border-t border-white/10 border-b border-white/10 bg-illini-dark/50 backdrop-blur-sm">
                    <div
                        className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-white/10">
                        {stats.map((stat) => (
                            <div key={stat.id}
                                 className="group flex items-center justify-between md:block py-4 md:py-0 md:px-6 cursor-pointer first:pl-0">
                                <div className="flex flex-col">
                                <span
                                    className="text-white text-lg group-hover:text-illini-accent group-hover:font-bold transition-all">{stat.title}</span>
                                    <span
                                        className="text-gray-500 text-xs uppercase tracking-wider mt-1">{stat.subtitle}</span>
                                </div>
                                <FaArrowRight
                                    className="text-gray-600 group-hover:text-illini-accent transform -rotate-45 md:rotate-0 md:mt-4 transition-all"/>
                            </div>
                        ))}
                    </div>
                </section>
            </section>

            <section className="w-full px-6 md:px-12 pb-24 z-20 relative">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
                    {cards.map((card) => (
                        <div key={card.id} className="flex flex-col">
                            <div
                                className="relative w-full aspect-[4/3] mb-8 overflow-hidden rounded-sm bg-illini-gray/20">
                                <Image
                                    src={card.img}
                                    alt={card.title}
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-500"
                                />
                            </div>

                            <div className="flex flex-col -mt-13 md:-mt-14 z-20 px-4">
                                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                                    {card.title.split(' ').map((word, i, arr) => (
                                        <span key={i}>
                                            {word} {i < arr.length - 1 && i == 1 ? <br/> : ' '}
                                        </span>
                                    ))}
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed pr-4">
                                    {card.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <footer
                className="w-full py-8 px-6 md:px-12 border-t border-white/10 flex justify-between items-center text-gray-500 text-xs z-20 relative">
                <p>&copy; {new Date().getFullYear()} Kart Racing Illini. All rights reserved.</p>
                <div className="flex gap-4 text-lg">
                    <FaInstagram className="hover:text-white cursor-pointer transition-colors"/>
                    <FaDiscord className="hover:text-white cursor-pointer transition-colors"/>
                </div>
            </footer>

        </main>
    );
}