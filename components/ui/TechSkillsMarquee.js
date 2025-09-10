import React from 'react';

export default function TechSkillsMarquee({ skills }) {
  return (
    <div className="box-border caret-transparent gap-x-4 flex outline-[oklab(0.556_0_0_/_0.5)] gap-y-4 scroll-smooth overflow-hidden p-2">
      {Array.from({ length: 4 }).map((_, rowIndex) => (
        <div
          key={rowIndex}
          className="box-border caret-transparent gap-x-4 flex shrink-0 justify-around outline-[oklab(0.556_0_0_/_0.5)] gap-y-4 scroll-smooth"
        >
          {skills.map((skill) => (
            <span
              key={`${skill.id}-${rowIndex}`}
              aria-label={skill.name}
              className="text-white text-sm items-center bg-[oklch(0.205_0_0)] box-border caret-transparent gap-x-2 flex shrink-0 justify-center leading-5 outline-[oklab(0.556_0_0_/_0.5)] gap-y-2 scroll-smooth text-nowrap w-fit border overflow-hidden px-3 py-1 rounded-[10px] border-solid border-[oklab(0.999994_0.0000455678_0.0000200868_/_0.14)]"
            >
              <img
                alt={skill.name}
                src={skill.iconSrc}
                className="aspect-[auto_14_/_14] box-border caret-transparent max-w-full outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth text-nowrap w-4"
              />
              <span className="box-border caret-transparent block outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth text-nowrap">
                {skill.name}
              </span>
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}
