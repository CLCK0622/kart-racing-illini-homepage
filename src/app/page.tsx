import GlassSurface from "@/components/GlassSurface";
import Image from "next/image";
import {FaArrowRight, FaBars, FaInstagram, FaDiscord} from "react-icons/fa";
import ChromaGrid from "@/components/ChromaGrid";
import CardSwap, {Card} from "@/components/CardSwap";
import Link from "next/dist/client/link";

const stats = [
    {title: "Next Race", subtitle: "SIKC Club Race | Dec 28", id: 1, href: "/races"},
    {title: "Join The Team", subtitle: "Recruitment Open", id: 2, href: "/contact"},
    {title: "Club Ranking", subtitle: "The Only Kart Racing Club at UIUC", id: 3, href: "/team"},
    {title: "Weekly Meet", subtitle: "TBD", id: 4, href: "/contact"},
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

const cars = [
    {
        image: "/cars/KartRepublic+BriggsLo206(rank3).jpg",
        title: "Kart Republic",
        subtitle: "IAME Ka100",
        // handle: "Rank 3",
        borderColor: "#F97316", // KR Orange
        gradient: "linear-gradient(180deg, #F97316, #000)",
        url: "#"
    },
    {
        image: "/cars/KartRepublic+IAMEKa100(rank1).jpg",
        title: "Kart Republic",
        subtitle: "Briggs Lo206",
        // handle: "Rank 1",
        borderColor: "#F97316", // KR Orange
        gradient: "linear-gradient(180deg, #F97316, #000)",
        url: "#"
    },
    {
        image: "/cars/Kosmic+BriggsLo206(rank4).JPG",
        title: "Kosmic (For Sale)",
        subtitle: "Briggs Lo206",
        // handle: "Rank 4",
        borderColor: "#8B5CF6", // Kosmic Purple/Blue
        gradient: "linear-gradient(180deg, #8B5CF6, #000)",
        url: "#"
    },
    {
        image: "/cars/TonyKart+BriggsLo206(rank5).JPG",
        title: "Tony Kart",
        subtitle: "Briggs Lo206",
        // handle: "Rank 5",
        borderColor: "#15803D", // Tony Kart Green
        gradient: "linear-gradient(180deg, #15803D, #000)",
        url: "#"
    },
    {
        image: "/cars/DAP+ROKSV(rank6).JPG",
        title: "DAP",
        subtitle: "ROK SV",
        // handle: "Rank 6",
        borderColor: "#DC2626", // Historic DAP Red
        gradient: "linear-gradient(180deg, #DC2626, #000)",
        url: "#"
    },
    {
        image: "/cars/TonyKart+RotaxDD2(rank7).jpg",
        title: "Tony Kart",
        subtitle: "Rotax DD2",
        // handle: "Rank 7",
        borderColor: "#15803D", // Tony Kart Green
        gradient: "linear-gradient(180deg, #15803D, #000)",
        url: "#"
    }
];

export default function Home() {
    return (
        <main
            className="min-h-screen flex flex-col relative overflow-x-hidden selection:bg-illini-accent selection:text-black font-sans">

            <div className="fixed inset-0 z-0 pointer-events-none bg-noise opacity-50 mix-blend-overlay"></div>

            <section className="relative w-full pb-16 pt-32 md:pb-24 px-6 md:px-12 flex flex-col items-center text-center z-10">
                <div className="relative z-10 flex flex-col items-center">
                    <h1 className="text-3xl md:text-7xl font-bold leading-tight tracking-tight text-white mb-2 drop-shadow-2xl">
                        Defying Limits,<br />One Lap at a Time.
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
                className="w-full px-6 md:px-12 mb-12 z-20">

                <div className="text-gray-400 text-sm font-semibold mb-6">The Season It All Began</div>
                <section
                    className="py-8 border-t border-white/10 border-b border-white/10 bg-illini-dark/50 backdrop-blur-sm">
                    <div
                        className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-white/10">
                        {stats.map((stat) => (
                            <Link key={stat.id} href={stat.href}
                                 className="group flex items-center justify-between md:block py-4 md:py-0 md:px-6 cursor-pointer first:pl-0">
                                <div className="flex flex-col">
                                <span
                                    className="text-white text-lg group-hover:text-illini-accent group-hover:font-bold transition-all">{stat.title}</span>
                                    <span
                                        className="text-gray-500 text-xs uppercase tracking-wider mt-1">{stat.subtitle}</span>
                                </div>
                                <FaArrowRight
                                    className="text-gray-600 group-hover:text-illini-accent transform -rotate-45 md:rotate-0 md:mt-4 transition-all"/>
                            </Link>
                        ))}
                    </div>
                </section>
            </section>

            <section className="mx-auto px-6 md:px-12 relative mb-12 w-full">
                <div className="border-b border-white/10 mx-auto pb-12">
                    <ChromaGrid items={cars} className="mx-auto max-w-7xl" />
                </div>
            </section>

            <section className="w-full px-6 md:px-12 pb-36 z-20 relative overflow-y-hidden">
                <div className="relative h-150 mx-24 flex flex-row items-center">
                    <div className="w-full flex-8 mx-auto text-center pr-120 text-2xl">
                        <span className="font-bold text-5xl">Tracks</span> we have raced on:
                    </div>
                    <div className="flex-4 translate-y-64 -translate-x-60">
                        <CardSwap
                            cardDistance={60}
                            verticalDistance={70}
                            delay={4000}
                            pauseOnHover={false}
                        >
                            <Card>
                                <div className="flex flex-col h-full w-full p-6 items-center justify-between">
                                    <h3 className="text-2xl font-bold text-white tracking-wider uppercase text-center">
                                        Kart Circuit Autobahn
                                    </h3>
                                    <div className="w-full h-[1px] bg-white/20 my-4" />
                                    <div className="relative w-full h-full min-h-0">
                                        <Image
                                            src="/tracks/KartCircuitAutobahn.png"
                                            alt="Kart Circuit Autobahn"
                                            fill
                                            className="object-contain drop-shadow-lg"
                                            sizes="(max-width: 768px) 100vw, 33vw"
                                        />
                                    </div>
                                </div>
                            </Card>

                            <Card>
                                <div className="flex flex-col h-full w-full p-6 items-center justify-between">
                                    <h3 className="text-2xl font-bold text-white tracking-wider uppercase text-center">
                                        New Castle Motorsports Park
                                    </h3>
                                    <div className="w-full h-[1px] bg-white/20 my-4" />
                                    <div className="relative w-full h-full min-h-0">
                                        <Image
                                            src="/tracks/NewCastleMotorsportsPark.webp"
                                            alt="New Castle Motorsports Park"
                                            fill
                                            className="object-contain drop-shadow-lg"
                                            sizes="(max-width: 768px) 100vw, 33vw"
                                        />
                                    </div>
                                </div>
                            </Card>

                            <Card>
                                <div className="flex flex-col h-full w-full p-6 items-center justify-between">
                                    <h3 className="text-2xl font-bold text-white tracking-wider uppercase text-center">
                                        Gateway Kartplex
                                    </h3>
                                    <div className="w-full h-[1px] bg-white/20 my-4" />
                                    <div className="relative w-full h-full min-h-0">
                                        <Image
                                            src="/tracks/GatewayKartplex.png"
                                            alt="Gateway Kartplex"
                                            fill
                                            className="object-contain drop-shadow-lg"
                                            sizes="(max-width: 768px) 100vw, 33vw"
                                        />
                                    </div>
                                </div>
                            </Card>

                            <Card>
                                <div className="flex flex-col h-full w-full p-6 items-center justify-between">
                                    <h3 className="text-2xl font-bold text-white tracking-wider uppercase text-center">
                                        Mid-State Kart Club
                                    </h3>
                                    <div className="w-full h-[1px] bg-white/20 my-4" />
                                    <div className="relative w-full h-full min-h-0">
                                        <Image
                                            src="/tracks/MidStateKartClub.webp"
                                            alt="Mid-State Kart Club"
                                            fill
                                            className="object-contain drop-shadow-lg"
                                            sizes="(max-width: 768px) 100vw, 33vw"
                                        />
                                    </div>
                                </div>
                            </Card>

                            <Card>
                                <div className="flex flex-col h-full w-full p-6 items-center justify-between">
                                    <h3 className="text-2xl font-bold text-white tracking-wider uppercase text-center">
                                        K1 Circuit Whiteland
                                    </h3>
                                    <div className="w-full h-[1px] bg-white/20 my-4" />
                                    <div className="relative w-full h-full min-h-0">
                                        <Image
                                            src="/tracks/K1_whiteland.webp"
                                            alt="K1 Circuit Whiteland"
                                            fill
                                            className="object-contain drop-shadow-lg"
                                            sizes="(max-width: 768px) 100vw, 33vw"
                                        />
                                    </div>
                                </div>
                            </Card>

                            <Card>
                                <div className="flex flex-col h-full w-full p-6 items-center justify-between">
                                    <h3 className="text-2xl font-bold text-white tracking-wider uppercase text-center">
                                        Norway Motorsports Park
                                    </h3>
                                    <div className="w-full h-[1px] bg-white/20 my-4" />
                                    <div className="relative w-full h-full min-h-0">
                                        <Image
                                            src="/tracks/NorwayMotorsports.png"
                                            alt="Norway Motorsports Park"
                                            fill
                                            className="object-contain drop-shadow-lg"
                                            sizes="(max-width: 768px) 100vw, 33vw"
                                        />
                                    </div>
                                </div>
                            </Card>

                            <Card>
                                <div className="flex flex-col h-full w-full p-6 items-center justify-between">
                                    <h3 className="text-2xl font-bold text-white tracking-wider uppercase text-center">
                                        Shanghai International Karting Circuit
                                    </h3>
                                    <div className="w-full h-[1px] bg-white/20 my-4" />
                                    <div className="relative w-full h-full min-h-0">
                                        <Image
                                            src="/tracks/SIKC.png"
                                            alt="SIKC"
                                            fill
                                            className="object-contain drop-shadow-lg"
                                            sizes="(max-width: 768px) 100vw, 33vw"
                                        />
                                    </div>
                                </div>
                            </Card>

                            <Card>
                                <div className="flex flex-col h-full w-full p-6 items-center justify-between">
                                    <h3 className="text-2xl font-bold text-white tracking-wider uppercase text-center">
                                        KF1 Karting Circuit
                                    </h3>
                                    <div className="w-full h-[1px] bg-white/20 my-4" />
                                    <div className="relative w-full h-full min-h-0">
                                        <Image
                                            src="/tracks/KF1.webp"
                                            alt="KF1"
                                            fill
                                            className="object-contain drop-shadow-lg"
                                            sizes="(max-width: 768px) 100vw, 33vw"
                                        />
                                    </div>
                                </div>
                            </Card>
                        </CardSwap>
                    </div>
                </div>
            </section>
        </main>
    );
}