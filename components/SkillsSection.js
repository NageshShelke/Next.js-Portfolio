import React from 'react';
import { allSkills } from '../data/skills';

export default function SkillsShowcase() {
  return (
    <section className="relative box-border caret-transparent flex flex-col h-full outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth mt-10 mx-auto px-0 rounded-3xl md:px-10">
      <div className="relative box-border caret-transparent h-fit outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth w-fit overflow-hidden mx-auto">
        <div className="[mask-image:linear-gradient(rgba(0,0,0,0),rgb(0,0,0)_10%,rgb(0,0,0)_50%,rgba(0,0,0,0))] box-border caret-transparent outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth">
          <div className="relative box-border caret-transparent h-[300px] outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth w-[300px] mx-auto md:h-[380px] md:w-[380px]">
            <img alt="skills cover rotating image" src="https://c.animaapp.com/mfbwn9s8eMdF5x/assets/steel-flower.webp" className="box-border caret-transparent max-w-full opacity-65 outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth w-full z-10" />
          </div>
        </div>
      </div>
      
      <h2 className="relative text-5xl font-medium box-border caret-transparent h-full tracking-[-1.2px] leading-[48px] outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth text-center w-full z-30 md:text-6xl md:tracking-[-1.5px] md:leading-[60px]">
        <p className="text-[oklab(0.999994_0.0000455677_0.0000200868_/_0.7)] text-xs font-normal box-border caret-transparent tracking-[1.2px] leading-4 outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth uppercase mb-3 md:text-sm md:tracking-[1.4px] md:leading-5">My Skills</p>
        <span className="text-5xl box-border caret-transparent tracking-[-1.2px] leading-[48px] outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth font-instrument_serif md:text-6xl md:tracking-[-1.5px] md:leading-[60px]">
          <span className="text-5xl box-border caret-transparent tracking-[-1.2px] leading-[48px] outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth md:text-6xl md:tracking-[-1.5px] md:leading-[60px]">The Secret</span>
          <span className="text-5xl italic text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-pink-500 to-red-400 bg-size-[200%_200%] box-border caret-transparent tracking-[-1.2px] leading-[48px] outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth pr-2 md:text-6xl md:tracking-[-1.5px] md:leading-[60px]"> Sauce</span>
        </span>
      </h2>
      
      <div className="box-border caret-transparent gap-x-2 flex flex-wrap justify-center max-w-4xl outline-[oklab(0.556_0_0_/_0.5)] gap-y-2 scroll-smooth mx-auto md:gap-x-3 md:gap-y-3 mt-15">
        {allSkills.map((skill) => (
          <span key={skill.id} aria-label={skill.name} className="text-white text-sm items-center bg-[oklch(0.205_0_0)] box-border caret-transparent gap-x-2 flex shrink-0 justify-center leading-5 outline-[oklab(0.556_0_0_/_0.5)] gap-y-2 scroll-smooth text-nowrap w-fit border overflow-hidden px-3 py-1 rounded-[10px] border-solid border-[oklab(0.999994_0.0000455678_0.0000200868_/_0.14)] md:px-4 md:py-1.5">
            <img alt={skill.name} src={skill.iconSrc} className="aspect-[auto_18_/_18] box-border caret-transparent max-w-full outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth text-nowrap w-4" />
            <span className="box-border caret-transparent block outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth text-nowrap">{skill.name}</span>
          </span>
        ))}
      </div>
    </section>
  );
}
