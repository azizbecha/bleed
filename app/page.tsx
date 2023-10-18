import Navbar from '@/components/Navbar'
import AOSWrapper from '@/components/AOSWrapper'
import { Hero } from '@/components/Hero'
import { Title } from '@/components/Title'
import { Divider } from '@/components/Divider'
import { ProductsRow } from '@/components/ProductsRow'

import { IoMdArrowDropright } from "react-icons/io"

export default function Home() {
  return (
    <AOSWrapper>
      <div className="bg-blue-500 text-white text-center py-2">
        <div className="scrolling-text">

        We provide ship orders over all Tunisia. Please don't hesitate to reach out to us if you have any questions. Our customer support is available 24/7.        </div>
      </div>
      <Navbar />
      <Hero />

      <div className='mx-auto max-w-screen-xl mt-5 px-5 py-6 sm:px-6 lg:px-8'>
        <div className="flex justify-center text-center">
          <div className="text-white">
            <div id='#about' data-aos="zoom-out">
              <Title title='Who are We' />
              <h1 className='mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi inventore eligendi quam quasi iure? At laudantium natus praesentium et id perspiciatis ad alias aliquam ipsam in tempore cumque, itaque atque.</h1>
            
              <button className='flex items-center font-mono px-4 py-2 mt-5 hover:underline border-2 border-white mx-auto text-center'>
                Learn More
                <IoMdArrowDropright size={19} className='ml-2' />
              </button>
            </div>

            <Divider />
            
            <div className="mt-5" id="products">
              <Title title='Products' />

              <ProductsRow />

              <p className='text-left cursor-pointer mt-2 hover:underline font-mono text-lg'>More products &#8250;</p>
            </div>

          </div>
        </div>
      </div>
    </AOSWrapper>
  )
}
