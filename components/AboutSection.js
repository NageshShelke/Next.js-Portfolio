import React from "react"
import Image from "next/image"
import { socialLinks } from "../data/sociallinks"

export default function AboutSection() {
  return (
    <section className="relative overflow-hidden px-4 md:py-10">
      <div className="md:relative md:max-h-[1300px] md:py-10">
        <section className="flex flex-col md:flex-row md:items-center md:justify-between md:max-w-6xl md:mx-auto md:gap-8">
          {/* LEFT SECTION */}
          <div className="md:max-w-[60%]">
            <h2 className="text-2xl font-bold md:text-6xl md:font-medium md:leading-[60px] md:mt-28 md:mb-8">
              <p className="text-base font-normal mb-3 md:text-sm md:tracking-[1.4px] uppercase">
                KNOW ABOUT ME
              </p>
              <span className="font-instrument_serif">
                Full-Stack Developer and a little bit of{" "}
                <span className="italic bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-pink-500 to-blue-600 bg-[length:200%_200%]">
                  everything
                </span>
              </span>
            </h2>

            {/* ABOUT TEXT */}
            <div className="text-base md:text-lg md:font-light md:leading-7 md:max-w-[550px] md:space-y-6">
              <p>
                I'm Nagesh Shelke, a proactive frontend developer passionate
                about creating dynamic web experiences. From frontend to
                backend, I thrive on solving complex problems with clean,
                efficient code.
              </p>
              <p>
                When I'm not immersed in work, I'm exploring new ideas and
                staying curious. Life's about balance, and I love embracing
                every part of it.
              </p>
              <p>I believe in waking up each day eager to make a difference!</p>

              {/* SOCIAL LINKS */}
              <div className="flex gap-3 -mt-2">
                {socialLinks.map((link) => (
                  <a
                    key={link.id}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 hover:opacity-80 transition"
                  >
                    <Image
                      src={link.iconSrc}
                      alt={link.name}
                      width={20}
                      height={20}
                    />
                  </a>
                ))}
              </div>
            </div>

            {/* CTA */}
            <a
              href="/about#experience"
              className="flex items-center gap-2 mt-10 text-neutral-800 md:text-neutral-100"
            >
              Work Experience
              <div className="w-[25px] h-[25px] flex items-center justify-center rounded-full border border-neutral-300 md:border-neutral-700">
                <Image
                  src="https://c.animaapp.com/mfbwn9s8eMdF5x/assets/icon-25.svg"
                  alt="Arrow Icon"
                  width={14}
                  height={14}
                />
              </div>
            </a>
          </div>

          {/* RIGHT SECTION */}
          <div className="relative w-[300px] h-[300px] md:w-[500px] md:h-[500px] mt-10 md:mt-20">
            {/* Background Logo */}
            <Image
              src="https://c.animaapp.com/mfbwn9s8eMdF5x/assets/ab-icon-sq.986c7efa.svg"
              alt="AB Logo"
              fill
              className="object-contain"
              priority
            />
            {/* Profile Image */}
            <Image
              src="/Ns-Passport.jpeg"
              alt="Nagesh Shelke"
              fill
              className="object-cover rounded-[58px]"
              priority
            />
          </div>
        </section>
      </div>
    </section>
  )
}
