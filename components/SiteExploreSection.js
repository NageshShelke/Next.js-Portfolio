import React from 'react';
import { siteFeatures } from '../data/sesectiondata';

export default function SiteExploreSection() {
  return (
    <div className="relative box-border caret-transparent max-w-screen-xl outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth mx-auto px-4 py-10">
      <h2 className="relative text-5xl font-medium box-border caret-transparent tracking-[-1.2px] leading-[48px] max-w-xl outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth text-center z-[2] mb-4 mx-auto md:text-6xl md:tracking-[-1.5px] md:leading-[60px]">
        <p className="text-[oklab(0.999994_0.0000455677_0.0000200868_/_0.7)] text-xs font-normal box-border caret-transparent tracking-[1.2px] leading-4 outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth uppercase mb-3 md:text-sm md:tracking-[1.4px] md:leading-5">My Site</p>
        <span className="text-5xl box-border caret-transparent tracking-[-1.2px] leading-[48px] outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth font-instrument_serif md:text-6xl md:tracking-[-1.5px] md:leading-[60px]">
          <span className="text-5xl box-border caret-transparent tracking-[-1.2px] leading-[48px] outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth md:text-6xl md:tracking-[-1.5px] md:leading-[60px]">Explore, experiment</span>
          <span className="text-5xl italic text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-pink-500 to-red-400 bg-size-[200%_200%] box-border caret-transparent tracking-[-1.2px] leading-[48px] outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth pr-2 md:text-6xl md:tracking-[-1.5px] md:leading-[60px]"><br/>&& say hello</span>
        </span>
      </h2>
      
      <div className="box-border caret-transparent gap-x-3 grid grid-cols-[repeat(1,minmax(0px,1fr))] outline-[oklab(0.556_0_0_/_0.5)] gap-y-3 scroll-smooth mt-20 md:grid-cols-[repeat(12,minmax(0px,1fr))]">
        {siteFeatures.map((feature, index) => (
          <div key={feature.id} className={index === 0 ? "relative box-border caret-transparent flex flex-col col-end-[span_12] col-start-[span_12] row-end-auto row-start-auto h-[300px] justify-between outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth rounded-[14px] md:col-end-[span_4] md:col-start-[span_4] md:row-end-[span_6] md:row-start-[span_6]" : index === 1 ? "relative box-border caret-transparent col-end-[span_12] col-start-[span_12] row-end-auto row-start-auto h-[300px] outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth w-full md:col-end-[span_4] md:col-start-[span_4] md:row-end-[span_6] md:row-start-[span_6]" : "relative shadow-[rgba(255,255,255,0.12)_0px_-20px_80px_-20px_inset] box-border caret-transparent flex flex-col col-end-[span_12] col-start-[span_12] row-end-auto row-start-auto h-[300px] justify-between outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth w-full border overflow-hidden rounded-[14px] border-solid border-white/10 md:col-end-[span_4] md:col-start-[span_4] md:row-end-[span_6] md:row-start-[span_6]"}>
            {index === 0 ? (
              <a href={feature.href} className="relative box-border caret-transparent flex flex-col col-end-[span_12] col-start-[span_12] row-end-auto row-start-auto h-[300px] justify-between outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth rounded-[14px] md:col-end-[span_4] md:col-start-[span_4] md:row-end-[span_6] md:row-start-[span_6]">
                <div className="relative shadow-[rgba(255,255,255,0.12)_0px_-20px_80px_-20px_inset] box-border caret-transparent flex flex-col h-full justify-between outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth w-full border overflow-hidden rounded-[14px] border-solid border-white/10">
                  <div className="box-border caret-transparent h-full outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth w-full">
                    <div className="absolute bg-[linear-gradient(to_right_in_oklab,rgba(0,0,0,0)_0px,rgba(0,0,0,0)_100%)] box-border caret-transparent outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth w-1/5 z-20 left-0 inset-y-0"></div>
                    <div className="absolute bg-[linear-gradient(to_left_in_oklab,rgba(0,0,0,0)_0px,rgba(0,0,0,0)_100%)] box-border caret-transparent outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth w-1/5 z-20 right-0 inset-y-0"></div>
                    <div className="items-center box-border caret-transparent gap-x-3 flex justify-center outline-[oklab(0.556_0_0_/_0.5)] gap-y-3 scroll-smooth mt-10 md:mt-12">
                      {feature.tools?.map((tool, toolIndex) => (
                        <div key={tool.name} className="box-border caret-transparent outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth text-center">
                          <div className={toolIndex === 2 ? "box-border caret-transparent h-[110px] outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth w-[110px] p-2 rounded-[20px] border-2 border-solid border-[oklch(1_0_0_/_0.1)] md:h-[130px] md:w-[130px]" : "box-border caret-transparent h-[90px] outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth w-[90px] p-2 rounded-[20px] border-2 border-solid border-[oklch(1_0_0_/_0.1)] md:h-[110px] md:w-[110px]"}>
                            <div className="items-center bg-zinc-900 shadow-[rgba(165,174,184,0.32)_0px_2px_1.5px_0px_inset] box-border caret-transparent grid h-full justify-items-center outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth border-[oklab(0.483531_-0.00294966_-0.012518_/_0.0121569)] rounded-[14px] border-2 border-solid">
                              <img alt={tool.name} src={tool.iconSrc} className="box-border caret-transparent h-10 max-w-full outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth w-10" />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="box-border caret-transparent gap-x-1 flex flex-col outline-[oklab(0.556_0_0_/_0.5)] gap-y-1 scroll-smooth z-10 p-6">
                    <h3 className="text-[oklch(0.708_0_0)] box-border caret-transparent max-w-lg outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth">{feature.title}</h3>
                    <p className="text-[oklch(0.87_0_0)] text-xl font-semibold box-border caret-transparent tracking-[0.5px] leading-7 outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth font-instrument_serif">{feature.description}</p>
                  </div>
                  <div className="absolute box-border caret-transparent outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth inset-0"></div>
                </div>
              </a>
            ) : index === 1 ? (
              <a href={feature.href} className="relative box-border caret-transparent flex flex-col col-end-[span_6] col-start-[span_6] h-full justify-between outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth w-full rounded-[14px]">
                <div className="relative shadow-[rgba(255,255,255,0.12)_0px_-20px_80px_-20px_inset] box-border caret-transparent flex flex-col h-full justify-between outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth w-full border overflow-hidden rounded-[14px] border-solid border-white/10">
                  <div className="box-border caret-transparent h-full outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth w-full">
                    <div className="[mask-image:radial-gradient(50%_50%,rgb(0,0,0)_70%,rgba(0,0,0,0)_100%)] absolute bg-[radial-gradient(rgb(51,51,51)_1px,rgba(0,0,0,0)_0px)] bg-size-[16px_16px] box-border caret-transparent h-full outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth w-full bottom-0"></div>
                    <img src="https://c.animaapp.com/mfbwn9s8eMdF5x/assets/icon-27.svg" alt="Icon" className="absolute box-border caret-transparent outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth translate-y-[-15px] rotate-[-7.999994819856548deg] w-48 top-0" />
                    <img src="https://c.animaapp.com/mfbwn9s8eMdF5x/assets/icon-28.svg" alt="Icon" className="absolute box-border caret-transparent outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth translate-y-[-5px] rotate-[7.999994819856548deg] w-56 -right-5 top-8 md:right-0 md:top-0" />
                  </div>
                  <div className="box-border caret-transparent gap-x-1 flex flex-col outline-[oklab(0.556_0_0_/_0.5)] gap-y-1 scroll-smooth z-10 p-6">
                    <h3 className="text-[oklch(0.708_0_0)] box-border caret-transparent max-w-lg outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth">{feature.title}</h3>
                    <p className="text-[oklch(0.87_0_0)] text-xl font-semibold box-border caret-transparent tracking-[0.5px] leading-7 outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth font-instrument_serif">{feature.description}</p>
                  </div>
                  <div className="absolute box-border caret-transparent outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth inset-0"></div>
                </div>
              </a>
            ) : (
              <div className="box-border caret-transparent h-full outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth w-full">
                <div className="absolute bg-[url('https://i.scdn.co/image/ab67616d0000b273131830d267848232447ba5d5')] bg-cover box-border caret-transparent blur-[2px] opacity-20 outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth bg-center inset-0"></div>
                <div className="relative box-border caret-transparent h-full outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth p-6">
                  <div className="items-center box-border caret-transparent gap-x-2 flex outline-[oklab(0.556_0_0_/_0.5)] gap-y-2 scroll-smooth">
                    <img src="https://c.animaapp.com/mfbwn9s8eMdF5x/assets/icon-29.svg" alt="Icon" className="box-border caret-transparent h-6 outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth w-6" />
                    <h2 className="text-xl font-medium box-border caret-transparent tracking-[0.5px] leading-7 outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth font-instrument_serif">Recent Favorite</h2>
                  </div>
                  <p className="text-[oklch(0.871_0.006_286.286)] font-extralight box-border caret-transparent flow-root tracking-[0.4px] max-h-[150px] outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth overflow-hidden mt-2">
                    I'm listening to
                    <a href="https://open.spotify.com/track/7k5TW0wfpXnb39IhRwoSq7" className="text-[oklab(0.999994_0.0000455677_0.0000200868_/_0.8)] font-medium box-border caret-transparent outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth">Another Story</a>
                    by
                    <a href="https://open.spotify.com/artist/6S9bLkEZSVIcY18RNcNG50" className="text-[oklab(0.999994_0.0000455677_0.0000200868_/_0.8)] font-medium box-border caret-transparent outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth">Nicholas Hooper</a>
                    from the album
                    <a href="https://open.spotify.com/album/5TEFNL3l7ELSJCq8tq4PNy" className="text-[oklab(0.999994_0.0000455677_0.0000200868_/_0.8)] font-medium box-border caret-transparent outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth">Harry Potter And The Order Of The Phoenix</a>
                  </p>
                  <div className="absolute box-border caret-transparent outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth left-2/4 bottom-0">
                    <img src="https://c.animaapp.com/mfbwn9s8eMdF5x/assets/icon-30.svg" alt="Icon" className="box-border caret-transparent h-[171px] outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth w-[179px]" />
                  </div>
                  <a href="https://open.spotify.com/track/7k5TW0wfpXnb39IhRwoSq7" className="absolute box-border caret-transparent block outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth left-2/4 -bottom-28">
                    <div className="bg-[url('https://i.scdn.co/image/ab67616d0000b273131830d267848232447ba5d5')] bg-cover shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_20px_25px_-5px,rgba(0,0,0,0.1)_0px_8px_10px_-6px] box-border caret-transparent h-[210px] outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth w-[210px] bg-center rounded-md"></div>
                  </a>
                </div>
              </div>
            )}
            {index === 2 && <div className="absolute box-border caret-transparent outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth inset-0"></div>}
          </div>
        ))}
      </div>
    </div>
  );
}
