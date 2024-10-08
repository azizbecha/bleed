"use client"

import { RefObject } from 'react'

import Link from 'next/link'

import Navbar from '@/components/Navbar'
import AOSWrapper from '@/components/AOSWrapper'
import { Hero } from '@/components/Hero'
import { Title } from '@/components/Title'
import { Divider } from '@/components/Divider'
import { ProductsRow } from '@/components/ProductsRow'
import { Container } from '@/components/Container'
import { Footer } from '@/components/Footer'
import { NoteSlider } from '@/components/NoteSlider'
import { ScrollToTopButton } from '@/components/ScrollToTopButton'

import { IoMdArrowDropright } from "react-icons/io"

import CountUp from 'react-countup'
import VisibilitySensor from 'react-visibility-sensor'

export default function Home() {
  return (
    <AOSWrapper>
      <NoteSlider />
      <Navbar />
      <Hero />
      <ScrollToTopButton />
      
      <Container>
        <div className="flex justify-center text-center">
          <div className="text-black">
            <div id="products">
              <Title title='Products' />
              <p className="text-center text-md font-mono mt-2 mb-5">
                Check out our wide selection of products
              </p>

              <ProductsRow />

              <Link href={"products"}>
                <p className='text-left cursor-pointer mt-2 hover:underline font-mono text-lg'>
                  More products &#8250;
                </p>
              </Link>
            </div>

            <Divider />

            <div id='about'>
              <Title title='About Us' />

              <h1 className='text-center px-10 mt-4' data-aos="zoom-out">
                Founded in Summer 2022 by YBA, BLEED is a rising Tunisian clothing brand selling unique wearings across the world.
                more creative general description goes here bla bla bla bla xD
              </h1>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 mt-2 sm:mt-8">
                <div className="text-center text-white bg-primary rounded-lg items-center h-auto py-5 border-b-2 md:border-x-2 md:border-b-0 border-r-0" data-aos="zoom-in">
                  <img src="../BLEEDMAN IN LOVE.png" className='w-32 h-32 mx-auto relative overflow-hidden transform transition-transform hover:scale-125' alt="" />
                  <CountUp duration={3} start={0} end={69} redraw={true}>
                    {({ countUpRef, start }) => (
                      <VisibilitySensor onChange={start} delayedCall>
                        <h3 className="text-5xl font-mono font-extrabold mt-4 mb-2" ref={countUpRef as RefObject<HTMLHeadingElement>}></h3>
                      </VisibilitySensor>
                    )}
                  </CountUp>
                  <p className='mb-4 font-medium'>Satisfied customer</p>
                </div>

                <div className="text-center text-white bg-primary rounded-lg items-center h-auto py-5 border-b-2 md:border-r-2 md:border-b-0 border-r-0" data-aos="zoom-in">
                  <img src="../VERIFIED.png" className='w-36 h-36  mx-auto relative overflow-hidden transform transition-transform hover:scale-125' alt="" />
                  <CountUp duration={2} start={0} end={100} redraw={true}>
                      {({ countUpRef, start }) => (
                        <VisibilitySensor onChange={start} delayedCall>
                          <h3 className="text-5xl font-mono font-extrabold mt-2 mb-2">
                            <span ref={countUpRef as RefObject<HTMLHeadingElement>}></span>%
                          </h3>
                        </VisibilitySensor>
                      )}
                    </CountUp>
                  <p className='mb-4 font-medium'>Creativity</p>
                </div>

                <div className="text-center text-white bg-primary rounded-lg items-center h-auto py-5 border-b-2 md:border-r-2 md:border-b-0 border-r-0" data-aos="zoom-in">
                  <img src="../cap2.png" className='w-36 h-36 mx-auto relative overflow-hidden transform transition-transform hover:scale-125' alt="" />
                  <CountUp duration={3} start={0} end={5} redraw={true}>
                    {({ countUpRef, start }) => (
                      <VisibilitySensor onChange={start} delayedCall>
                        <h3 className="text-5xl font-mono font-extrabold mt-1 mb-2" ref={countUpRef as RefObject<HTMLHeadingElement>}></h3>
                      </VisibilitySensor>
                    )}
                  </CountUp>
                  <p className='mb-4 font-medium'>Products</p>
                </div>
              </div>

              <button className='flex text-center mx-auto border-2 border-primary px-4 py-2 mt-4 items-center font-mono hover:underline'>
                Read more
                <IoMdArrowDropright size={19} className='ml-2' />
              </button>
            </div>

            <Divider />

            <section className="bg-white flex rounded-lg">
              <div className="grid grid-cols-3 gap-2">
                <div className="py-8 px-4 text-start sm:col-span-2 col-span-3 w-full sm:py-10 lg:px-6">
                  <div className="w-full">
                      <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Subscribe to our Newsletter</h2>
                      <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">Subscribe to our mailing list to be among the first ones who get updated about our new products and offers.</p>
                      <input type="email" placeholder='Please enter your email' className="w-full mb-4 px-4 py-4 border-2 text-black rounded-md border-gray-700 focus:border-primary" />
                      <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
                          <a href="#" className="bg-primary inline-flex items-center justify-center px-4 py-2.5 text-base font-medium text-center text-white bg-primary-700 rounded-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                              Subscribe
                          </a>
                      </div>
                  </div>
                </div>
                <div className="col-span-1 hidden sm:flex items-center justify-content">
                  <img src="../Handshake Emoji BLEED 1.png" className='w-3/4 mx-auto m-0' alt="" />
                </div>
              </div>
            </section>
          </div>
        </div>
      </Container>
      <Footer />
    </AOSWrapper>
  )
}
