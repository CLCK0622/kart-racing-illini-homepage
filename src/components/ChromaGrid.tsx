"use client";

import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

export interface ChromaItem {
  image: string;
  title: string;
  subtitle: string;
  handle?: string;
  location?: string;
  borderColor?: string;
  gradient?: string;
  url?: string;
}

export interface ChromaGridProps {
  items?: ChromaItem[];
  className?: string;
  radius?: number;
  damping?: number;
  fadeOut?: number;
  ease?: string;
}

type SetterFn = (v: number | string) => void;

const ChromaGrid: React.FC<ChromaGridProps> = ({
                                                 items,
                                                 className = '',
                                                 radius = 750,
                                                 damping = 0.05,
                                                 fadeOut = 0.1,
                                                 ease = 'power2.out'
                                               }) => {
  const rootRef = useRef<HTMLDivElement>(null);

  const radiusVal = useRef({ v: 0 });
  const setRadius = useRef<SetterFn | null>(null);

  const setX = useRef<SetterFn | null>(null);
  const setY = useRef<SetterFn | null>(null);
  const pos = useRef({ x: 0, y: 0 });

  const demo: ChromaItem[] = [
    {
      image: 'https://i.pravatar.cc/300?img=8',
      title: 'Alex Rivera',
      subtitle: 'Full Stack Developer',
      handle: '@alexrivera',
      borderColor: '#4F46E5',
      gradient: 'linear-gradient(145deg,#4F46E5,#000)',
      url: 'https://github.com/'
    },
    {
      image: 'https://i.pravatar.cc/300?img=11',
      title: 'Jordan Chen',
      subtitle: 'DevOps Engineer',
      handle: '@jordanchen',
      borderColor: '#10B981',
      gradient: 'linear-gradient(210deg,#10B981,#000)',
      url: 'https://linkedin.com/in/'
    },
    {
      image: 'https://i.pravatar.cc/300?img=3',
      title: 'Morgan Blake',
      subtitle: 'UI/UX Designer',
      handle: '@morganblake',
      borderColor: '#F59E0B',
      gradient: 'linear-gradient(165deg,#F59E0B,#000)',
      url: 'https://dribbble.com/'
    },
    {
      image: 'https://i.pravatar.cc/300?img=16',
      title: 'Casey Park',
      subtitle: 'Data Scientist',
      handle: '@caseypark',
      borderColor: '#EF4444',
      gradient: 'linear-gradient(195deg,#EF4444,#000)',
      url: 'https://kaggle.com/'
    },
    {
      image: 'https://i.pravatar.cc/300?img=25',
      title: 'Sam Kim',
      subtitle: 'Mobile Developer',
      handle: '@thesamkim',
      borderColor: '#8B5CF6',
      gradient: 'linear-gradient(225deg,#8B5CF6,#000)',
      url: 'https://github.com/'
    },
    {
      image: 'https://i.pravatar.cc/300?img=60',
      title: 'Tyler Rodriguez',
      subtitle: 'Cloud Architect',
      handle: '@tylerrod',
      borderColor: '#06B6D4',
      gradient: 'linear-gradient(135deg,#06B6D4,#000)',
      url: 'https://aws.amazon.com/'
    }
  ];

  const data = items?.length ? items : demo;

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;

    setX.current = gsap.quickSetter(el, '--x', 'px') as SetterFn;
    setY.current = gsap.quickSetter(el, '--y', 'px') as SetterFn;
    setRadius.current = gsap.quickSetter(el, '--r', 'px') as SetterFn;

    const { width, height } = el.getBoundingClientRect();
    pos.current = { x: width / 2, y: height / 2 };

    setX.current(pos.current.x);
    setY.current(pos.current.y);

    gsap.set(radiusVal.current, { v: 0 });
    setRadius.current(0);

  }, []);

  const moveTo = (x: number, y: number) => {
    gsap.to(pos.current, {
      x,
      y,
      duration: damping,
      ease,
      onUpdate: () => {
        setX.current?.(pos.current.x);
        setY.current?.(pos.current.y);
      },
      overwrite: true
    });
  };

  const handleMove = (e: React.PointerEvent) => {
    const r = rootRef.current!.getBoundingClientRect();
    moveTo(e.clientX - r.left, e.clientY - r.top);

    gsap.to(radiusVal.current, {
      v: radius,
      duration: 0.2,
      ease: 'power2.out',
      onUpdate: () => setRadius.current?.(radiusVal.current.v),
      overwrite: true
    });
  };

  const handleLeave = () => {
    gsap.to(radiusVal.current, {
      v: 0,
      duration: fadeOut,
      ease: 'power2.inOut',
      onUpdate: () => setRadius.current?.(radiusVal.current.v),
      overwrite: true
    });
  };

  const handleCardClick = (url?: string) => {
    if (url) window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleCardMove: React.MouseEventHandler<HTMLElement> = e => {
    const c = e.currentTarget as HTMLElement;
    const rect = c.getBoundingClientRect();
    c.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
    c.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
  };

  return (
      <div
          ref={rootRef}
          onPointerMove={handleMove}
          onPointerLeave={handleLeave}
          className={`relative w-full flex flex-wrap justify-center items-start gap-6 p-4 ${className}`}
          style={
            {
              '--x': '50%',
              '--y': '50%'
            } as React.CSSProperties
          }
      >
        {data.map((c, i) => (
            <article
                key={i}
                onMouseMove={handleCardMove}
                onClick={() => handleCardClick(c.url)}
                className="group relative flex flex-col w-[400px] h-[335px] rounded-[20px] overflow-hidden border-1 border-[color:var(--card-border)] bg-zinc-900/50 transition-transform duration-300 cursor-pointer shadow-lg"
                style={
                  {
                    '--card-border': c.borderColor || 'transparent',
                    background: (c.borderColor + 'AA'),
                    '--spotlight-color': 'rgba(255,255,255,0.2)'
                  } as React.CSSProperties
                }
            >
              <div
                  className="hidden md:block absolute inset-0 pointer-events-none transition-opacity duration-500 z-20 opacity-0 group-hover:opacity-100 mix-blend-soft-light"
                  style={{
                    background:
                        'radial-gradient(circle at var(--mouse-x) var(--mouse-y), var(--spotlight-color), transparent 60%)'
                  }}
              />

              <div className="relative z-10 p-2 box-border h-64 shrink-0">
                <img src={c.image} alt={c.title} loading="lazy" className="w-full h-full object-cover rounded-[16px]" />
              </div>

              <footer className="relative z-10 p-4 pt-2 text-white font-sans flex flex-col gap-1 flex-1 justify-start">
                <div className="flex justify-between items-baseline">
                  <h3 className="m-0 text-lg font-bold tracking-tight leading-tight">{c.title}</h3>
                  {c.handle && <span className="text-xs opacity-60 font-mono text-right ml-2 uppercase">{c.handle}</span>}
                </div>
                <div className="flex justify-between items-start mt-1">
                  <p className="m-0 text-sm opacity-80 font-medium text-gray-300 leading-snug line-clamp-2">{c.subtitle}</p>
                  {c.location && <span className="text-[10px] opacity-50 text-right whitespace-nowrap ml-2 mt-0.5">{c.location}</span>}
                </div>
              </footer>
            </article>
        ))}

        <div
            className="hidden md:block absolute inset-0 pointer-events-none z-30 rounded-[inherit]"
            style={{
              backdropFilter: 'grayscale(1)',
              WebkitBackdropFilter: 'grayscale(1)',
              background: 'transparent',
              maskImage:
                  'radial-gradient(circle var(--r) at var(--x) var(--y), transparent 0%, rgba(0,0,0,0.8) 50%, black 100%)',
              WebkitMaskImage:
                  'radial-gradient(circle var(--r) at var(--x) var(--y), transparent 0%, rgba(0,0,0,0.8) 50%, black 100%)'
            }}
        />
      </div>
  );
};

export default ChromaGrid;