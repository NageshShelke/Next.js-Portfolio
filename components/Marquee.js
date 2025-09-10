import React from 'react';

const marqueeItems = [
  { text: 'Accessible' },
  { text: 'Responsive' },
  { text: 'Dynamic' },
  { text: 'Scalable' },
  { text: 'Search Optimized' },
  { text: 'Interactive' },
  { text: 'Secure' },
  { text: 'Reliable' },
  { text: 'Engaging' }
] ;

export default function Marquee() {
  return (
    <section className="box-border caret-transparent outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth my-20 py-20">
      <div className="bg-[linear-gradient(to_right_in_oklab,rgb(103,153,254)_0px,rgb(2,85,251)_100%)] box-border caret-transparent opacity-60 outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth z-0 py-4 md:py-8"></div>
      <div className="items-center bg-[linear-gradient(to_right_in_oklab,rgb(103,153,254)_0px,rgb(2,85,251)_100%)] box-border caret-transparent flex justify-center outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth z-[2] overflow-hidden py-1.5 md:py-4">
        <div className="[mask-image:linear-gradient(90deg,rgba(0,0,0,0),rgb(0,0,0)_10%,rgb(0,0,0)_90%,rgba(0,0,0,0))] box-border caret-transparent outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth w-full overflow-hidden">
          <div className="box-border caret-transparent flex outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth translate-x-[127.5px] md:translate-x-[562px]">
            {marqueeItems.map((item, index) => (
              <div key={`${item.text}-${index}`} className="box-border caret-transparent shrink-0 outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth">
                <div className="items-center box-border caret-transparent inline-flex outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth">
                  <span className="text-[oklch(0.985_0.002_247.839)] text-sm font-semibold box-border caret-transparent block tracking-[0.7px] outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth uppercase text-nowrap font-instrument_serif md:text-xl md:tracking-[1px]">{item.text}</span>
                  <img alt="star" src="./star.svg" className="text-transparent aspect-[auto_28_/_28] box-border shrink-0 max-w-full outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth w-5 mx-4 md:w-7" />
                </div>
              </div>
            ))}
            {/* Repeat for seamless animation */}
            {marqueeItems.map((item, index) => (
              <div key={`repeat-${item.text}-${index}`} className={index < 2 ? "box-border caret-transparent shrink-0 outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth transform-none md:translate-x-[-2674px]" : "box-border caret-transparent shrink-0 outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth translate-x-[-2094px] md:translate-x-[-2734px]"}>
                <div className="items-center box-border caret-transparent inline-flex outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth">
                  <span className="text-[oklch(0.985_0.002_247.839)] text-sm font-semibold box-border caret-transparent block tracking-[0.7px] outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth uppercase text-nowrap font-instrument_serif md:text-xl md:tracking-[1px]">{item.text}</span>
                  <img alt="star" src="./star.svg" className="text-transparent aspect-[auto_28_/_28] box-border shrink-0 max-w-full outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth w-5 mx-4 md:w-7" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
