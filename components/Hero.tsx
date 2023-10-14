"use client"

import Link from "next/link"
import Typewriter from "typewriter-effect"
import { BiSolidDownArrow } from "react-icons/bi"

export const Hero: React.FC = () => {
  return (
    <div className="hero-header bg-primary text-white py-6">
      <div className="info container-md mx-auto px-8">

        <div className="flex text-center">
            <div className="mx-auto flex space-x-6" data-aos="zoom-in">
                <img src="../blue fire.png" className="h-14" />
                <h1 className="font-bold text-center text-6xl mb-2">
                    Bleed
                </h1>
                <img src="../blue fire.png" className="h-14" />
            </div>
        </div>

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
        {/* <Link href="about">
          <button className="px-4 py-2 rounded-md bg-primary border-primary border-2 mt-4" data-aos="zoom-in">
            Read more
          </button>
        </Link> */}
        <br />
        <button className="mt-3 mx-auto" data-aos="zoom-in">
          <BiSolidDownArrow color="#fff" size={35} className="bounce" />
        </button>
      </div>
    </div>
  )
}
