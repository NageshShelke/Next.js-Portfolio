"use client"

import React, { useState } from 'react';
import Link from "next/link"; 

const navigationItems = [
  { id: 'home', label: 'Home', href: '/' },
  { id: 'about', label: 'About', href: '/about' },
  { id: 'work', label: 'Work', href: '/work' },
  { id: 'blog', label: 'Blog', href: '/blog' }
];


export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="relative box-border caret-transparent outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth z-[5000]">
      <nav className="fixed items-center box-border caret-transparent flex justify-between max-w-screen-xl outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth w-full pl-6 pr-4 py-1.5 left-1/2 -translate-x-1/2 top-2.5 md:top-4">
        <Link aria-label="Homepage" href="/" className="box-border caret-transparent hidden h-8 min-h-0 min-w-0 outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth w-8 p-1 md:block md:h-9 md:min-h-[auto] md:min-w-[auto] md:w-9">
          NS
        </Link>
        
        <div className="relative box-border caret-transparent flex justify-center outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth mx-auto">
          <ul className="relative items-center backdrop-blur-2xl bg-[oklab(0.999994_0.0000455678_0.0000200868_/_0.1)] shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_20px_25px_-5px,rgba(0,0,0,0.1)_0px_8px_10px_-6px] box-border caret-transparent flex justify-center list-none min-h-10 outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth border p-1 rounded-[22px] border-solid border-[oklab(0.999994_0.0000455678_0.0000200868_/_0.1)]">
            <div className="[align-items:normal] box-content caret-black block min-h-0 min-w-0 outline-black scroll-auto md:items-center md:aspect-auto md:box-border md:caret-transparent md:flex md:blur-0 md:min-h-[auto] md:min-w-[auto] md:outline-[oklab(0.556_0_0_/_0.5)] md:overscroll-x-auto md:overscroll-y-auto md:scroll-smooth md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
              {navigationItems.map((item) => (
                <li key={item.id} className="static box-content caret-black min-h-0 min-w-0 outline-black scroll-auto text-left md:relative md:aspect-auto md:box-border md:caret-transparent md:min-h-[auto] md:min-w-[auto] md:outline-[oklab(0.556_0_0_/_0.5)] md:overscroll-x-auto md:overscroll-y-auto md:scroll-smooth md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                  <Link href={item.href} className="text-black text-base font-normal box-content caret-black inline leading-[normal] outline-black scroll-auto p-0 md:text-[oklab(0.999994_0.0000455677_0.0000200868_/_0.7)] md:text-sm md:font-light md:aspect-auto md:box-border md:caret-transparent md:block md:leading-5 md:outline-[oklab(0.556_0_0_/_0.5)] md:overscroll-x-auto md:overscroll-y-auto md:scroll-smooth md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:px-4 md:py-1.5 md:scroll-m-0 md:scroll-p-[auto]">{item.label}</Link>
                  {item.id === 'home' && (
                    <span className="static bg-transparent box-content caret-black inline outline-black scroll-auto w-auto z-auto rounded-none inset-auto md:absolute md:aspect-auto md:bg-[oklab(0.999994_0.0000455678_0.0000200868_/_0.1)] md:box-border md:caret-transparent md:block md:outline-[oklab(0.556_0_0_/_0.5)] md:overscroll-x-auto md:overscroll-y-auto md:scroll-smooth md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:-z-10 md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:rounded-[3.35544e+07px] md:inset-0">
                      <div className="static bg-transparent box-content caret-black h-auto outline-black scroll-auto w-auto rounded-t-none left-auto top-auto md:absolute md:aspect-auto md:bg-[oklch(0.922_0_0)] md:box-border md:caret-transparent md:h-1 md:outline-[oklab(0.556_0_0_/_0.5)] md:overscroll-x-auto md:overscroll-y-auto md:scroll-smooth md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:top-[-9px] md:w-8 md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:rounded-t-[3.35544e+07px] md:left-2/4">
                        <div className="static bg-transparent box-content caret-black h-auto outline-black scroll-auto w-auto rounded-none left-auto top-auto md:absolute md:aspect-auto md:bg-[oklab(0.922_0_0_/_0.2)] md:box-border md:caret-transparent md:blur-md md:h-6 md:outline-[oklab(0.556_0_0_/_0.5)] md:overscroll-x-auto md:overscroll-y-auto md:scroll-smooth md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-12 md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:rounded-[3.35544e+07px] md:-left-2 md:-top-2"></div>
                        <div className="static bg-transparent box-content caret-black h-auto outline-black scroll-auto w-auto rounded-none top-auto md:absolute md:aspect-auto md:bg-[oklab(0.922_0_0_/_0.2)] md:box-border md:caret-transparent md:blur-md md:h-6 md:outline-[oklab(0.556_0_0_/_0.5)] md:overscroll-x-auto md:overscroll-y-auto md:scroll-smooth md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-8 md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:rounded-[3.35544e+07px] md:-top-1"></div>
                        <div className="static bg-transparent box-content caret-black h-auto outline-black scroll-auto w-auto rounded-none left-auto top-auto md:absolute md:aspect-auto md:bg-[oklab(0.922_0_0_/_0.2)] md:box-border md:caret-transparent md:blur md:h-4 md:outline-[oklab(0.556_0_0_/_0.5)] md:overscroll-x-auto md:overscroll-y-auto md:scroll-smooth md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-4 md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:rounded-[3.35544e+07px] md:left-2 md:top-0"></div>
                      </div>
                    </span>
                  )}
                </li>
              ))}
              
              <li className="static box-content caret-black min-h-0 min-w-0 outline-black scroll-auto text-left md:relative md:aspect-auto md:box-border md:caret-transparent md:min-h-[auto] md:min-w-[auto] md:outline-[oklab(0.556_0_0_/_0.5)] md:overscroll-x-auto md:overscroll-y-auto md:scroll-smooth md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                <nav aria-label="Main" className="static [align-items:normal] box-content caret-black block basis-auto grow-0 justify-normal max-w-none outline-black scroll-auto md:relative md:items-center md:aspect-auto md:box-border md:caret-transparent md:flex md:basis-[0%] md:grow md:justify-center md:max-w-max md:outline-[oklab(0.556_0_0_/_0.5)] md:overscroll-x-auto md:overscroll-y-auto md:scroll-smooth md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                  <div className="static box-content caret-black min-h-0 min-w-0 outline-black scroll-auto md:relative md:aspect-auto md:box-border md:caret-transparent md:min-h-[auto] md:min-w-[auto] md:outline-[oklab(0.556_0_0_/_0.5)] md:overscroll-x-auto md:overscroll-y-auto md:scroll-smooth md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                    <ul className="[align-items:normal] box-content caret-black gap-x-[normal] block basis-auto grow-0 justify-normal outline-black gap-y-[normal] scroll-auto pl-10 md:items-center md:aspect-auto md:box-border md:caret-transparent md:gap-x-1 md:flex md:basis-[0%] md:grow md:justify-center md:outline-[oklab(0.556_0_0_/_0.5)] md:overscroll-x-auto md:overscroll-y-auto md:gap-y-1 md:scroll-smooth md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:pl-0 md:scroll-m-0 md:scroll-p-[auto]">
                      <li className="static box-content caret-black min-h-0 min-w-0 outline-black scroll-auto md:relative md:aspect-auto md:box-border md:caret-transparent md:min-h-[auto] md:min-w-[auto] md:outline-[oklab(0.556_0_0_/_0.5)] md:overscroll-x-auto md:overscroll-y-auto md:scroll-smooth md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                        <button className="text-black text-[13.3333px] font-normal [align-items:normal] bg-zinc-100 caret-black inline-block leading-[normal] outline-black scroll-auto text-center px-1.5 py-px rounded-none md:text-[oklab(0.999994_0.0000455677_0.0000200868_/_0.7)] md:text-sm md:font-light md:items-center md:aspect-auto md:bg-transparent md:caret-transparent md:flex md:leading-5 md:outline-[oklab(0.556_0_0_/_0.5)] md:overscroll-x-auto md:overscroll-y-auto md:scroll-smooth md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:px-4 md:py-1.5 md:scroll-m-0 md:scroll-p-[auto] md:rounded-[3.35544e+07px]">More</button>
                      </li>
                    </ul>
                  </div>
                  <div className="static box-content caret-black block isolation-auto justify-normal outline-black scroll-auto z-auto left-auto top-auto md:absolute md:aspect-auto md:box-border md:caret-transparent md:flex md:isolate md:justify-center md:outline-[oklab(0.556_0_0_/_0.5)] md:overscroll-x-auto md:overscroll-y-auto md:scroll-smooth md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:z-50 md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:left-2/4 md:top-full"></div>
                </nav>
              </li>
              
              <li className="box-content caret-black min-h-0 min-w-0 outline-black scroll-auto text-left ml-0 md:aspect-auto md:box-border md:caret-transparent md:min-h-[auto] md:min-w-[auto] md:outline-[oklab(0.556_0_0_/_0.5)] md:overscroll-x-auto md:overscroll-y-auto md:scroll-smooth md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:ml-1 md:scroll-m-0 md:scroll-p-[auto]">
                <button className="static text-black text-[13.3333px] font-normal [align-items:normal] bg-zinc-100 shadow-none caret-black gap-x-[normal] shrink h-auto justify-normal leading-[normal] outline-black gap-y-[normal] scroll-auto text-center text-wrap px-1.5 py-px rounded-none md:relative md:text-[oklab(0.999994_0.0000455677_0.0000200868_/_0.7)] md:text-sm md:font-light md:items-center md:aspect-auto md:bg-[oklab(0.999994_0.0000455678_0.0000200868_/_0.1)] md:shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.05)_0px_1px_2px_0px] md:caret-transparent md:gap-x-2 md:shrink-0 md:h-full md:justify-center md:leading-5 md:outline-[oklab(0.556_0_0_/_0.5)] md:overscroll-x-auto md:overscroll-y-auto md:gap-y-2 md:scroll-smooth md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:[mask-position:0%] md:bg-left-top md:px-4 md:py-1.5 md:scroll-m-0 md:scroll-p-[auto] md:rounded-[3.35544e+07px]">
                  Book a Call
                  <div className="static bg-transparent box-content caret-black h-auto opacity-100 outline-black scroll-auto text-wrap w-auto rounded-none bottom-auto md:absolute md:aspect-auto md:bg-white md:box-border md:caret-transparent md:blur md:h-[33.3333%] md:opacity-30 md:outline-[oklab(0.556_0_0_/_0.5)] md:overscroll-x-auto md:overscroll-y-auto md:scroll-smooth md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:rounded-[3.35544e+07px] md:bottom-0"></div>
                </button>
              </li>
            </div>
          </ul>
        </div>
        
        <div className="items-center box-border caret-transparent gap-x-2 hidden min-h-0 min-w-0 outline-[oklab(0.556_0_0_/_0.5)] gap-y-2 scroll-smooth md:flex md:min-h-[auto] md:min-w-[auto]">
          <button 
            aria-label="Close menu" 
            className="text-sm font-medium items-center bg-transparent caret-transparent gap-x-2 inline-flex shrink-0 h-9 justify-center leading-5 min-h-0 min-w-0 outline-[oklab(0.556_0_0_/_0.5)] gap-y-2 scroll-smooth text-center text-nowrap w-9 p-0 rounded-2xl md:flex md:min-h-[auto] md:min-w-[auto]"
            onClick={toggleMenu}
          > <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-command mx-0 hidden size-5 md:block" aria-hidden="true"><path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3"></path></svg>
          </button>
        </div>
      </nav>
    </header>
  );
}
