"use client"

import Link from "next/link"
import Typewriter from "typewriter-effect"
import { BiDownArrow } from "react-icons/bi"

export const Hero: React.FC = () => {
  return (
    <div className="hero-header bg-primary text-white py-6">
      <div className="info container-md mx-auto px-8">
        <h1 className="font-bold text-center text-6xl mb-2" data-aos="zoom-in">
          Bleed
        </h1>
        <h2 className="font-normal text-2xl text-justify" data-aos="zoom-in">
          <Typewriter
            options={{
              strings: "Tunisian clothing brand owned by a bleed for bleed people",
              autoStart: true,
              loop: false,
              delay: 15,
            }}
          />
        </h2>
        <Link href="about">
          <button className="px-4 py-2 rounded-md border-white border-2 btn-lg mt-4" data-aos="zoom-in">
            Read more
          </button>
        </Link>
        <br />
        <button className="mt-5 mx-auto">
          <BiDownArrow color="#fff" size={30} className="bounce" />
        </button>
      </div>
    </div>
  )
}
