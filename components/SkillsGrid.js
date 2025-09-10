import React from 'react';
import { frontendSkills, backendSkills, toolsSkills } from '../data/skills';
import TechSkillsMarquee from "./ui/TechSkillsMarquee"

export default function SkillsGrid() {
  return (
    <div className="box-border caret-transparent max-w-screen-xl outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth w-full px-4">
      <div className="box-border caret-transparent gap-x-4 grid auto-rows-auto grid-cols-[repeat(6,minmax(0px,1fr))] max-w-none outline-[oklab(0.556_0_0_/_0.5)] gap-y-4 scroll-smooth w-full mt-0 mb-20 mx-auto md:auto-rows-[304px] md:max-w-full md:mt-20">
        {/* Collaboration Card */}
        <div className="relative shadow-[rgba(255,255,255,0.12)_0px_-20px_80px_-20px_inset] box-border caret-transparent flex flex-col col-end-[span_6] col-start-[span_6] h-[336px] justify-between outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth w-full border overflow-hidden rounded-[14px] border-solid border-white/10 md:col-end-[span_4] md:col-start-[span_4] md:h-full">
          <div className="box-border caret-transparent h-full outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth w-full">
            <div className="absolute box-border caret-transparent flex flex-col h-[300px] outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth w-full">
              <div className="[mask-image:linear-gradient(90deg,rgba(0,0,0,0),rgb(0,0,0)_40%,rgb(0,0,0)_60%,rgba(0,0,0,0))] relative box-border caret-transparent h-full outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth">
                <img src="https://c.animaapp.com/mfbwn9s8eMdF5x/assets/icon-9.svg" alt="Icon" className="[mask-image:linear-gradient(90deg,rgba(0,0,0,0),rgb(0,0,0)_20%,rgb(0,0,0)_90%,rgba(0,0,0,0))] absolute box-border caret-transparent h-[250px] outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth w-[704px] left-1/5 top-0" />
                <span className="absolute box-border caret-transparent block outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth left-1/2 top-2.5">
                  <div className="relative box-border caret-transparent outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth mt-9">
                    <img src="https://c.animaapp.com/mfbwn9s8eMdF5x/assets/icon-10.svg" alt="Icon" className="box-border caret-transparent h-[148px] outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth w-[148px] mx-auto" />
                    <img alt="Aayush Bharti picture" src="https://c.animaapp.com/mfbwn9s8eMdF5x/assets/aayush.webp" className="absolute box-border caret-transparent h-[100px] max-w-full outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth w-[100px] rounded-[3.35544e+07px] left-1/6 top-1/6" />
                  </div>
                </span>
                <span className="box-border caret-transparent hidden outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth md:block"></span>
                <span className="box-border caret-transparent inline outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth md:hidden">
                  <div className="absolute bg-zinc-800 box-border caret-transparent h-10 outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth w-10 border p-1 rounded-[3.35544e+07px] border-solid border-[oklab(0.999994_0.0000455678_0.0000200868_/_0.05)] left-4 top-6">
                    <img alt="Connection" src="https://randomuser.me/api/portraits/men/32.jpg" className="box-border caret-transparent max-w-full outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth rounded-[3.35544e+07px]" />
                  </div>
                  <div className="absolute bg-zinc-800 box-border caret-transparent h-9 outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth w-9 border p-1 rounded-[3.35544e+07px] border-solid border-[oklab(0.999994_0.0000455678_0.0000200868_/_0.05)] left-[72px] bottom-24">
                    <img alt="Connection" src="https://randomuser.me/api/portraits/men/7.jpg" className="box-border caret-transparent max-w-full outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth rounded-[3.35544e+07px]" />
                  </div>
                  <div className="absolute bg-zinc-800 box-border caret-transparent h-14 outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth w-14 border p-1 rounded-[3.35544e+07px] border-solid border-[oklab(0.999994_0.0000455678_0.0000200868_/_0.05)] right-16 top-4">
                    <img alt="Connection" src="https://randomuser.me/api/portraits/women/24.jpg" className="box-border caret-transparent max-w-full outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth rounded-[3.35544e+07px]" />
                  </div>
                  <div className="absolute bg-zinc-800 box-border caret-transparent h-11 outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth w-11 border p-1 rounded-[3.35544e+07px] border-solid border-[oklab(0.999994_0.0000455678_0.0000200868_/_0.05)] right-4 bottom-20">
                    <img alt="Connection" src="https://randomuser.me/api/portraits/women/35.jpg" className="box-border caret-transparent max-w-full outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth rounded-[3.35544e+07px]" />
                  </div>
                </span>
              </div>
            </div>
          </div>
          <div className="box-border caret-transparent gap-x-1 flex flex-col outline-[oklab(0.556_0_0_/_0.5)] gap-y-1 scroll-smooth z-10 p-6">
            <img src="https://c.animaapp.com/mfbwn9s8eMdF5x/assets/icon-11.svg" alt="Icon" className="text-[oklch(0.371_0_0)] box-border caret-transparent h-12 outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth origin-[0px_50%] w-12" />
            <h3 className="text-[oklch(0.708_0_0)] box-border caret-transparent max-w-lg outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth">Collaboration</h3>
            <p className="text-[oklch(0.87_0_0)] text-xl font-semibold box-border caret-transparent tracking-[0.5px] leading-7 outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth font-instrument_serif">I prioritize client collaboration, fostering open communication</p>
          </div>
          <div className="absolute box-border caret-transparent outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth inset-0"></div>
        </div>

        {/* Tech Skills Card */}
        <div className="relative shadow-[rgba(255,255,255,0.12)_0px_-20px_80px_-20px_inset] box-border caret-transparent flex flex-col col-end-[span_6] col-start-[span_6] row-end-auto row-start-auto h-full justify-between min-h-[560px] outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth w-full border overflow-hidden rounded-[14px] border-solid border-white/10 md:col-end-[span_2] md:col-start-[span_2] md:row-end-[span_2] md:row-start-[span_2] md:min-h-[auto]">
          <div className="box-border caret-transparent h-full outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth w-full">
            <div className="absolute box-border caret-transparent outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth inset-0">
              <div className="relative box-border caret-transparent h-full outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth w-full">
                <h3 className="absolute text-transparent text-3xl font-bold bg-clip-text bg-[linear-gradient(in_oklab,rgb(237,239,253)_0px,rgb(218,123,218)_100%)] box-border tracking-[0.75px] leading-[30px] outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth text-center w-full px-4 top-10 font-instrument_serif">Passionate about cutting-edge technologies</h3>
                <div className="relative items-center box-border caret-transparent flex flex-col h-full justify-end outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth">
                  <div className="absolute bg-[oklch(0.827_0.119_306.383)] box-border caret-transparent blur-3xl h-48 outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth w-48 rounded-[3.35544e+07px] -bottom-32"></div>
                  <div className="box-border caret-transparent flex flex-col outline-[oklab(0.556_0_0_/_0.5)] gap-y-10 scroll-smooth z-20 mb-8 md:mb-16">
                    <TechSkillsMarquee skills={frontendSkills} />
                    <TechSkillsMarquee skills={backendSkills} />
                    <TechSkillsMarquee skills={toolsSkills} />
                  </div>
                  
                  {/* Animated circles */}
                  <div className="absolute items-center box-border caret-transparent flex justify-center outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth z-10 bottom-0">
                    <div className="absolute box-border caret-transparent h-0 outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth w-0 border rounded-[3.35544e+07px] border-solid border-[oklch(0.371_0_0)] left-1/2"></div>
                    <div className="absolute box-border caret-transparent h-16 opacity-90 outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth w-16 border rounded-[3.35544e+07px] border-solid border-[oklch(0.371_0_0)] left-2/4"></div>
                    <div className="absolute box-border caret-transparent h-32 opacity-80 outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth w-32 border rounded-[3.35544e+07px] border-solid border-[oklch(0.371_0_0)] left-2/4"></div>
                    <div className="absolute box-border caret-transparent h-48 opacity-70 outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth w-48 border rounded-[3.35544e+07px] border-solid border-[oklch(0.371_0_0)] left-2/4"></div>
                    <div className="absolute box-border caret-transparent h-64 opacity-60 outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth w-64 border rounded-[3.35544e+07px] border-solid border-[oklch(0.371_0_0)] left-2/4"></div>
                    <div className="absolute box-border caret-transparent h-80 opacity-50 outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth w-80 border rounded-[3.35544e+07px] border-solid border-[oklch(0.371_0_0)] left-2/4"></div>
                    <div className="absolute box-border caret-transparent h-96 opacity-40 outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth w-96 border rounded-[3.35544e+07px] border-solid border-[oklch(0.371_0_0)] left-2/4"></div>
                    <div className="absolute box-border caret-transparent h-[448px] opacity-30 outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth w-[448px] border rounded-[3.35544e+07px] border-solid border-[oklch(0.371_0_0)] left-2/4"></div>
                    <div className="absolute box-border caret-transparent h-[512px] opacity-20 outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth w-[512px] border rounded-[3.35544e+07px] border-solid border-[oklch(0.371_0_0)] left-2/4"></div>
                    <div className="absolute box-border caret-transparent h-[576px] opacity-10 outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth w-[576px] border rounded-[3.35544e+07px] border-solid border-[oklch(0.371_0_0)] left-2/4"></div>
                  </div>
                  
                  <div className="relative box-border caret-transparent h-44 outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth w-56 z-20 overflow-hidden rounded-t-lg border-l border-r border-t border-solid border-[oklch(0.269_0_0)] bottom-0">
                    <div className="relative items-center bg-[oklch(0.269_0_0)] box-border caret-transparent gap-x-1 flex h-3 justify-start outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth w-full z-30 px-2">
                      <div className="bg-[oklch(0.637_0.237_25.331)] box-border caret-transparent h-1.5 outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth w-1.5 rounded-[3.35544e+07px]"></div>
                      <div className="bg-[oklch(0.869_0.022_252.894)] box-border caret-transparent h-1.5 outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth w-1.5 rounded-[3.35544e+07px]"></div>
                      <div className="bg-[oklch(0.723_0.219_149.579)] box-border caret-transparent h-1.5 outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth w-1.5 rounded-[3.35544e+07px]"></div>
                    </div>
                    <div className="relative items-center bg-[oklch(0.205_0_0)] box-border caret-transparent flex basis-[0%] flex-col grow h-full outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth">
                      <div className="items-center bg-[oklch(0.439_0_0)] box-border caret-transparent flex h-4 justify-end outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth w-16 mt-2 px-1 rounded-[3.35544e+07px]">
                        <div className="bg-[oklch(0.205_0_0)] box-border caret-transparent h-2 outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth w-2 rounded-[3.35544e+07px]"></div>
                      </div>
                      <div className="box-border caret-transparent outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth mt-6">
                        <p className="relative text-transparent font-bold bg-clip-text bg-[linear-gradient(oklch(0.968_0.007_247.896)_0px,oklch(0.704_0.04_256.788)_100%)] box-border outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth text-center z-20">
                          Websites that stand out <br className="box-border outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth" />
                          and make a difference
                        </p>
                        <div className="box-border caret-transparent gap-x-2 flex justify-center outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth mt-4">
                          <button className="text-white text-[6px] bg-transparent bg-[linear-gradient(to_right_bottom,oklch(0.627_0.265_303.9)_0px,oklch(0.511_0.262_276.966)_100%)] caret-transparent block leading-[9px] outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth text-center w-14 px-0 py-1 rounded-md">Get started</button>
                          <button className="text-white text-[6px] bg-transparent caret-transparent block leading-[9px] outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth text-center w-14 border px-0 py-1 rounded-md border-solid border-[oklch(0.446_0.043_257.281)]">Read More</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute box-border caret-transparent outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth inset-0"></div>
        </div>

        {/* Time Zone Card */}
        <div className="relative shadow-[rgba(255,255,255,0.12)_0px_-20px_80px_-20px_inset] box-border caret-transparent flex flex-col col-end-[span_6] col-start-[span_6] row-end-auto row-start-auto h-[512px] justify-between outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth w-full border overflow-hidden rounded-[14px] border-solid border-white/10 md:col-end-[span_2] md:col-start-[span_2] md:row-end-[span_2] md:row-start-[span_2] md:h-full">
          <div className="box-border caret-transparent h-full outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth w-full">
            <h3 className="text-transparent text-3xl font-bold bg-clip-text bg-[linear-gradient(in_oklab,rgb(237,239,253)_0px,rgb(123,156,218)_100%)] box-border tracking-[0.75px] leading-[30px] outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth text-center w-full mt-6 px-4 font-instrument_serif md:mt-12">I'm very flexible with time zone communications</h3>
            <div className="[mask-image:linear-gradient(rgb(0,0,0),rgba(0,0,0,0)_80%)] absolute box-border caret-transparent outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth w-96 left-1/126 -bottom-28 md:-bottom-8">
              <div className="text-xs box-border caret-transparent gap-x-2 flex flex-wrap justify-center leading-4 outline-[oklab(0.556_0_0_/_0.5)] gap-y-2 scroll-smooth mx-auto">
                <button className="relative text-[oklab(0.999994_0.0000455677_0.0000200868_/_0.8)] text-[9px] items-center bg-[oklab(0.999994_0.0000455678_0.0000200868_/_0.1)] caret-transparent gap-x-1 flex leading-3 outline-[oklab(0.556_0_0_/_0.5)] gap-y-1 scroll-smooth text-center z-50 px-2 py-0.5 rounded-[3px]">
                  <span className="box-border caret-transparent block outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth">🇬🇧</span>
                  <div className="box-border caret-transparent outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth">UK</div>
                </button>
                <button className="relative text-[oklch(0.623_0.214_259.815)] text-[9px] items-center bg-[oklab(0.623_-0.0378409_-0.210628_/_0.15)] caret-transparent gap-x-1 flex leading-3 outline-[oklab(0.556_0_0_/_0.5)] gap-y-1 scroll-smooth text-center z-50 px-2 py-0.5 rounded-[3px]">
                  <span className="box-border caret-transparent block outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth">🇮🇳</span>
                  <div className="box-border caret-transparent outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth">India</div>
                </button>
                <button className="relative text-[oklab(0.999994_0.0000455677_0.0000200868_/_0.8)] text-[9px] items-center bg-[oklab(0.999994_0.0000455678_0.0000200868_/_0.1)] caret-transparent gap-x-1 flex leading-3 outline-[oklab(0.556_0_0_/_0.5)] gap-y-1 scroll-smooth text-center z-50 px-2 py-0.5 rounded-[3px]">
                  <span className="box-border caret-transparent block outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth">🇺🇸</span>
                  <div className="box-border caret-transparent outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth">USA</div>
                </button>
              </div>
              <div className="relative aspect-square box-border caret-transparent max-w-2xl outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth w-full mx-auto">
                <img src="https://c.animaapp.com/mfbwn9s8eMdF5x/assets/image-2.png" className="aspect-[auto_768_/_768] box-border caret-transparent h-full max-w-full outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth w-full" />
              </div>
            </div>
          </div>
          <div className="box-border caret-transparent gap-x-1 flex flex-col outline-[oklab(0.556_0_0_/_0.5)] gap-y-1 scroll-smooth z-10 p-6">
            <img src="https://c.animaapp.com/mfbwn9s8eMdF5x/assets/icon-13.svg" alt="Icon" className="text-[oklch(0.371_0_0)] box-border caret-transparent h-12 outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth origin-[0px_50%] w-12" />
            <h3 className="text-[oklch(0.708_0_0)] box-border caret-transparent max-w-lg outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth">Remote</h3>
            <p className="text-[oklch(0.87_0_0)] text-xl font-semibold box-border caret-transparent tracking-[0.5px] leading-7 outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth font-instrument_serif">India</p>
          </div>
          <div className="absolute box-border caret-transparent outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth inset-0"></div>
        </div>

        {/* Contact Card */}
        <div className="relative shadow-[rgba(255,255,255,0.12)_0px_-20px_80px_-20px_inset] box-border caret-transparent flex flex-col col-end-[span_6] col-start-[span_6] h-[304px] justify-between outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth w-full border overflow-hidden rounded-[14px] border-solid border-white/10 md:col-end-[span_2] md:col-start-[span_2] md:h-full">
          <div className="box-border caret-transparent h-full outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth w-full">
            <div className="items-center bg-cover box-border caret-transparent flex flex-col h-full justify-center outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth w-full bg-center">
              <div className="[mask-image:linear-gradient(rgb(0,0,0)_40%,rgba(0,0,0,0)_100%)] absolute bg-[oklab(0.145_0_0_/_0.8)] box-border caret-transparent h-[150px] outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth w-full z-[-1] overflow-hidden inset-0">
                <img alt="crumpled paper texture" sizes="100vw" src="https://c.animaapp.com/mfbwn9s8eMdF5x/assets/14.avif" className="absolute text-transparent box-border h-full max-w-full mix-blend-overlay object-cover outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth w-full z-[-1] inset-0" />
              </div>
              <div className="relative box-border caret-transparent outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth mt-2">
                <img alt="wings" src="https://c.animaapp.com/mfbwn9s8eMdF5x/assets/wings.svg" className="box-border caret-transparent max-w-full outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth" />
                <img src="https://c.animaapp.com/mfbwn9s8eMdF5x/assets/icon-14.svg" alt="Icon" className="absolute box-border caret-transparent outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth w-8 z-50 left-2/4 top-2/4 md:w-10" />
              </div>
              <span className="[mask-image:linear-gradient(-75deg,oklch(0.922_0_0)_calc(-80%),rgba(0,0,0,0)_calc(-70%),oklch(0.922_0_0)_calc(0%))] relative text-white/90 text-3xl font-bold box-border caret-transparent block leading-9 max-w-xs outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth text-center w-full py-2 font-instrument_serif md:[mask-image:linear-gradient(-75deg,oklch(0.922_0_0)_calc(-78.7359%),rgba(0,0,0,0)_calc(-68.7359%),oklch(0.922_0_0)_calc(1.2641%))]">Let's work together on your next project</span>
              <div className="relative box-border caret-transparent flex outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth">
                <button type="button" className="text-[oklab(0.999994_0.0000455678_0.0000200868_/_0.75)] font-light items-center bg-[oklab(0.999994_0.0000455678_0.0000200868_/_0.1)] shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(255,255,255,0.247)_0px_3px_10px_0px_inset] caret-transparent gap-x-2 flex justify-center outline-[oklab(0.556_0_0_/_0.5)] gap-y-2 scroll-smooth text-center w-full px-8 py-3 rounded-lg">
                  <img src="https://c.animaapp.com/mfbwn9s8eMdF5x/assets/icon-8.svg" alt="Icon" className="box-border caret-transparent h-5 outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth w-5" />
                  hello@aayushbharti.in
                </button>
              </div>
            </div>
          </div>
          <div className="absolute box-border caret-transparent outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth inset-0"></div>
        </div>

        {/* Services Card */}
        <div className="relative shadow-[rgba(255,255,255,0.12)_0px_-20px_80px_-20px_inset] box-border caret-transparent flex flex-col col-end-[span_6] col-start-[span_6] h-[336px] justify-between outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth w-full border overflow-hidden rounded-[14px] border-solid border-white/10 md:col-end-[span_4] md:col-start-[span_4] md:h-full">
          <div className="box-border caret-transparent h-full outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth w-full">
            <div className="[mask-image:linear-gradient(rgb(0,0,0),rgba(0,0,0,0)_60%)] absolute box-border caret-transparent gap-x-4 flex outline-[oklab(0.556_0_0_/_0.5)] gap-y-4 scroll-smooth overflow-hidden p-2 top-10 font-instrument_serif">
              <div className="box-border caret-transparent gap-x-4 flex shrink-0 justify-around outline-[oklab(0.556_0_0_/_0.5)] gap-y-4 scroll-smooth">
                {Array.from({ length: 5 }).map((_, index) => (
                  <figure key={index} className="relative bg-[oklab(0.985_-0.00075442_-0.00185226_/_0.1)] box-border caret-transparent blur-[1px] outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth w-32 border border-[oklab(0.985_-0.00075442_-0.00185226_/_0.1)] overflow-hidden p-4 rounded-[14px] border-solid">
                    <div className="items-center box-border caret-transparent gap-x-2 flex outline-[oklab(0.556_0_0_/_0.5)] gap-y-2 scroll-smooth">
                      <div className="box-border caret-transparent flex flex-col outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth">
                        <figcaption className="text-white text-sm font-medium box-border caret-transparent leading-5 outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth">
                          {index === 0 && "Payment System Architecture"}
                          {index === 1 && "Monitoring & Analytics Infrastructure"}
                          {index === 2 && "Design System & UI Consistency"}
                          {index === 3 && "API Gateway & Documentation"}
                          {index === 4 && "User Onboarding Flow Design"}
                        </figcaption>
                      </div>
                    </div>
                    <blockquote className="text-xs box-border caret-transparent leading-4 outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth mt-2">
                      {index === 0 && "Handles recurring payments, upgrades, downgrades, and cancellations seamlessly to enhance user experience."}
                      {index === 1 && "Provides real-time insights into user behavior, system performance, and key business metrics."}
                      {index === 2 && "Unified design assets, including logos and themes, ensuring consistent branding across the platform."}
                      {index === 3 && "Guides developers to integrate with the SaaS platform efficiently, offering examples and best practices."}
                      {index === 4 && "Step-by-step guides and interactive tutorials to help users get started and maximize platform benefits."}
                    </blockquote>
                  </figure>
                ))}
              </div>
              {/* Repeat for animation effect */}
              <div className="box-border caret-transparent gap-x-4 flex shrink-0 justify-around outline-[oklab(0.556_0_0_/_0.5)] gap-y-4 scroll-smooth">
                {Array.from({ length: 5 }).map((_, index) => (
                  <figure key={`repeat-${index}`} className="relative bg-[oklab(0.985_-0.00075442_-0.00185226_/_0.1)] box-border caret-transparent blur-[1px] outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth w-32 border border-[oklab(0.985_-0.00075442_-0.00185226_/_0.1)] overflow-hidden p-4 rounded-[14px] border-solid">
                    <div className="items-center box-border caret-transparent gap-x-2 flex outline-[oklab(0.556_0_0_/_0.5)] gap-y-2 scroll-smooth">
                      <div className="box-border caret-transparent flex flex-col outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth">
                        <figcaption className="text-white text-sm font-medium box-border caret-transparent leading-5 outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth">
                          {index === 0 && "Payment System Architecture"}
                          {index === 1 && "Monitoring & Analytics Infrastructure"}
                          {index === 2 && "Design System & UI Consistency"}
                          {index === 3 && "API Gateway & Documentation"}
                          {index === 4 && "User Onboarding Flow Design"}
                        </figcaption>
                      </div>
                    </div>
                    <blockquote className="text-xs box-border caret-transparent leading-4 outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth mt-2">
                      {index === 0 && "Handles recurring payments, upgrades, downgrades, and cancellations seamlessly to enhance user experience."}
                      {index === 1 && "Provides real-time insights into user behavior, system performance, and key business metrics."}
                      {index === 2 && "Unified design assets, including logos and themes, ensuring consistent branding across the platform."}
                      {index === 3 && "Guides developers to integrate with the SaaS platform efficiently, offering examples and best practices."}
                      {index === 4 && "Step-by-step guides and interactive tutorials to help users get started and maximize platform benefits."}
                    </blockquote>
                  </figure>
                ))}
              </div>
              <div className="box-border caret-transparent gap-x-4 flex shrink-0 justify-around outline-[oklab(0.556_0_0_/_0.5)] gap-y-4 scroll-smooth">
                {Array.from({ length: 5 }).map((_, index) => (
                  <figure key={`repeat2-${index}`} className="relative bg-[oklab(0.985_-0.00075442_-0.00185226_/_0.1)] box-border caret-transparent blur-[1px] outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth w-32 border border-[oklab(0.985_-0.00075442_-0.00185226_/_0.1)] overflow-hidden p-4 rounded-[14px] border-solid">
                    <div className="items-center box-border caret-transparent gap-x-2 flex outline-[oklab(0.556_0_0_/_0.5)] gap-y-2 scroll-smooth">
                      <div className="box-border caret-transparent flex flex-col outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth">
                        <figcaption className="text-white text-sm font-medium box-border caret-transparent leading-5 outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth">
                          {index === 0 && "Payment System Architecture"}
                          {index === 1 && "Monitoring & Analytics Infrastructure"}
                          {index === 2 && "Design System & UI Consistency"}
                          {index === 3 && "API Gateway & Documentation"}
                          {index === 4 && "User Onboarding Flow Design"}
                        </figcaption>
                      </div>
                    </div>
                    <blockquote className="text-xs box-border caret-transparent leading-4 outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth mt-2">
                      {index === 0 && "Handles recurring payments, upgrades, downgrades, and cancellations seamlessly to enhance user experience."}
                      {index === 1 && "Provides real-time insights into user behavior, system performance, and key business metrics."}
                      {index === 2 && "Unified design assets, including logos and themes, ensuring consistent branding across the platform."}
                      {index === 3 && "Guides developers to integrate with the SaaS platform efficiently, offering examples and best practices."}
                      {index === 4 && "Step-by-step guides and interactive tutorials to help users get started and maximize platform benefits."}
                    </blockquote>
                  </figure>
                ))}
              </div>
              <div className="box-border caret-transparent gap-x-4 flex shrink-0 justify-around outline-[oklab(0.556_0_0_/_0.5)] gap-y-4 scroll-smooth">
                {Array.from({ length: 5 }).map((_, index) => (
                  <figure key={`repeat3-${index}`} className="relative bg-[oklab(0.985_-0.00075442_-0.00185226_/_0.1)] box-border caret-transparent blur-[1px] outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth w-32 border border-[oklab(0.985_-0.00075442_-0.00185226_/_0.1)] overflow-hidden p-4 rounded-[14px] border-solid">
                    <div className="items-center box-border caret-transparent gap-x-2 flex outline-[oklab(0.556_0_0_/_0.5)] gap-y-2 scroll-smooth">
                      <div className="box-border caret-transparent flex flex-col outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth">
                        <figcaption className="text-white text-sm font-medium box-border caret-transparent leading-5 outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth">
                          {index === 0 && "Payment System Architecture"}
                          {index === 1 && "Monitoring & Analytics Infrastructure"}
                          {index === 2 && "Design System & UI Consistency"}
                          {index === 3 && "API Gateway & Documentation"}
                          {index === 4 && "User Onboarding Flow Design"}
                        </figcaption>
                      </div>
                    </div>
                    <blockquote className="text-xs box-border caret-transparent leading-4 outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth mt-2">
                      {index === 0 && "Handles recurring payments, upgrades, downgrades, and cancellations seamlessly to enhance user experience."}
                      {index === 1 && "Provides real-time insights into user behavior, system performance, and key business metrics."}
                      {index === 2 && "Unified design assets, including logos and themes, ensuring consistent branding across the platform."}
                      {index === 3 && "Guides developers to integrate with the SaaS platform efficiently, offering examples and best practices."}
                      {index === 4 && "Step-by-step guides and interactive tutorials to help users get started and maximize platform benefits."}
                    </blockquote>
                  </figure>
                ))}
              </div>
            </div>
          </div>
          <div className="box-border caret-transparent gap-x-1 flex flex-col outline-[oklab(0.556_0_0_/_0.5)] gap-y-1 scroll-smooth z-10 p-6">
            <img src="https://c.animaapp.com/mfbwn9s8eMdF5x/assets/icon-15.svg" alt="Icon" className="text-[oklch(0.371_0_0)] box-border caret-transparent h-12 outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth origin-[0px_50%] w-12" />
            <h3 className="text-[oklch(0.708_0_0)] box-border caret-transparent max-w-lg outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth">The Inside Scoop</h3>
            <p className="text-[oklch(0.87_0_0)] text-xl font-semibold box-border caret-transparent tracking-[0.5px] leading-7 outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth font-instrument_serif">Currently building a Saas Application</p>
          </div>
          <div className="absolute box-border caret-transparent outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth inset-0"></div>
        </div>
      </div>
    </div>
  );
}
