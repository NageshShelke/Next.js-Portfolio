import React from 'react';
import { footerLinks, socialLinks } from '../data/footerdata';

export default function Footer() {
  return (
    <footer className="box-border caret-transparent max-w-6xl outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth mx-auto my-6 px-4 md:px-0">
      <div className="relative items-center backdrop-blur-lg bg-[oklab(0.999994_0.0000455678_0.0000200868_/_0.02)] shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_1px_3px_0px,rgba(0,0,0,0.1)_0px_1px_2px_-1px] box-border caret-transparent gap-x-6 flex flex-col outline-[oklab(0.556_0_0_/_0.5)] gap-y-6 scroll-smooth mx-auto px-4 py-10 rounded-3xl md:flex-row">
        <div className="items-start box-border caret-transparent gap-x-4 flex basis-[0%] flex-col grow outline-[oklab(0.556_0_0_/_0.5)] gap-y-4 scroll-smooth px-0 md:gap-x-10 md:flex-row md:gap-y-10 md:px-8">
          <div className="box-border caret-transparent hidden flex-col min-h-0 min-w-0 outline-[oklab(0.556_0_0_/_0.5)] gap-y-6 scroll-smooth w-auto md:flex md:min-h-[auto] md:min-w-[auto] md:w-6/12">
            <a href="/" className="box-border caret-transparent inline-block min-h-0 min-w-0 outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth md:block md:min-h-[auto] md:min-w-[auto]">
              <img src="https://c.animaapp.com/mfbwn9s8eMdF5x/assets/icon-33.svg" alt="Icon" className="box-border caret-transparent h-10 outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth w-10" />
            </a>
            <p className="text-[oklch(0.872_0.01_258.338)] text-sm box-border caret-transparent leading-5 min-h-0 min-w-0 outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth w-60 md:min-h-[auto] md:min-w-[auto]">
              I'm Aayush - a full-stack developer, freelancer & problem solver. 
              Thanks for checking out my site!
            </p>
          </div>
          
          <div className="items-start box-border caret-transparent gap-x-6 flex flex-col justify-between outline-[oklab(0.556_0_0_/_0.5)] gap-y-6 scroll-smooth w-auto mx-0 md:gap-x-16 md:flex-row md:gap-y-16 md:w-6/12 md:mx-4">
            {footerLinks.map((section) => (
              <div key={section.title} className="box-border caret-transparent gap-x-2 flex flex-col outline-[oklab(0.556_0_0_/_0.5)] gap-y-2 scroll-smooth md:gap-x-4 md:gap-y-4">
                <h4 className="text-white box-border caret-transparent outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth">{section.title}</h4>
                <ul className="text-[oklch(0.87_0_0)] text-sm items-start box-border caret-transparent gap-x-4 flex flex-row flex-wrap leading-5 list-none outline-[oklab(0.556_0_0_/_0.5)] gap-y-2 scroll-smooth pl-0 md:flex-col md:gap-y-3">
                  {section.links.map((link) => (
                    <li key={link.text} className={link.text === 'Attribution' ? "box-border caret-transparent opacity-50 outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth text-left" : "box-border caret-transparent outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth text-left"}>
                      <a href={link.href} className="relative box-border caret-transparent outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth after:accent-auto after:bg-[oklch(0.922_0_0)] after:box-border after:caret-transparent after:text-[oklch(0.87_0_0)] after:block after:text-sm after:not-italic after:normal-nums after:font-normal after:h-px after:tracking-[normal] after:leading-5 after:list-outside after:list-none after:absolute after:text-left after:indent-[0px] after:normal-case after:origin-[100%_100%] after:visible after:w-full after:border-separate after:left-0 after:bottom-0 after:font-outfit">{link.text}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="text-[oklch(0.708_0_0)] text-sm items-center box-border caret-transparent gap-x-4 flex flex-col justify-between leading-5 outline-[oklab(0.556_0_0_/_0.5)] gap-y-4 scroll-smooth mt-4 px-0 md:flex-row md:px-8">
        <div className="items-center box-border caret-transparent gap-x-3 flex flex-col outline-[oklab(0.556_0_0_/_0.5)] gap-y-3 scroll-smooth md:gap-x-6 md:flex-row md:gap-y-6">
          <p className="box-border caret-transparent outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth text-nowrap">
            © 2025
            <a href="/" className="box-border caret-transparent outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth text-nowrap">Aayush Bharti</a>
            . All rights reserved
          </p>
          <div className="items-center box-border caret-transparent gap-x-4 flex justify-center outline-[oklab(0.556_0_0_/_0.5)] gap-y-4 scroll-smooth md:gap-x-6 md:gap-y-6">
            <a href="/legal/privacy" className="box-border caret-transparent block outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth text-nowrap">Privacy Policy</a>
            <a href="/legal/terms" className="box-border caret-transparent block outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth text-nowrap">Terms & Conditions</a>
          </div>
        </div>
        
        <div className="items-center box-border caret-transparent gap-x-4 flex flex-col justify-normal outline-[oklab(0.556_0_0_/_0.5)] gap-y-4 scroll-smooth md:flex-row md:justify-end">
          <fieldset aria-label="Select a theme" className="items-center bg-[oklch(0.205_0_0)] box-border caret-transparent flex outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth border p-0 rounded-[3.35544e+07px] border-solid border-[oklch(0.269_0_0)]">
            <div className="box-border caret-transparent outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth">
              <label title="Switch to light theme" className="text-[oklch(0.556_0_0)] items-center box-border caret-transparent flex justify-center outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth p-1.5 rounded-[3.35544e+07px]">
                <img src="https://c.animaapp.com/mfbwn9s8eMdF5x/assets/icon-34.svg" alt="Icon" className="box-border caret-transparent h-4 outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth w-4" />
              </label>
            </div>
            <div className="box-border caret-transparent outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth">
              <label title="Switch to dark theme" className="text-[oklch(0.97_0_0)] items-center bg-[oklch(0.371_0_0)] shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_1px_3px_0px,rgba(0,0,0,0.1)_0px_1px_2px_-1px] box-border caret-transparent flex justify-center outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth p-1.5 rounded-[3.35544e+07px]">
                <img src="https://c.animaapp.com/mfbwn9s8eMdF5x/assets/icon-35.svg" alt="Icon" className="box-border caret-transparent h-4 outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth w-4" />
              </label>
            </div>
            <div className="box-border caret-transparent outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth">
              <label title="Switch to system theme" className="text-[oklch(0.556_0_0)] items-center box-border caret-transparent flex justify-center outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth p-1.5 rounded-[3.35544e+07px]">
                <img src="https://c.animaapp.com/mfbwn9s8eMdF5x/assets/icon-36.svg" alt="Icon" className="box-border caret-transparent h-4 outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth w-4" />
              </label>
            </div>
          </fieldset>
          
          <div className="box-border caret-transparent gap-x-3 flex outline-[oklab(0.556_0_0_/_0.5)] gap-y-3 scroll-smooth">
            {socialLinks.slice(0, 3).map((social) => (
              <button key={social.id} className="bg-transparent caret-transparent block outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth text-center p-0">
                <a href={social.href} className="text-[oklch(0.87_0_0)] box-border caret-transparent outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth">
                  <img src={social.footerIconSrc || social.iconSrc} alt="Icon" className="box-border caret-transparent h-5 outline-[oklab(0.556_0_0_/_0.5)] scroll-smooth w-5" />
                </a>
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
