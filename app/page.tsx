import Navbar from '@/components/Navbar'
import AOSWrapper from '@/components/AOSWrapper'
import { Hero } from '@/components/Hero'
import { Title } from '@/components/Title'

export default function Home() {
  return (
    <AOSWrapper>
      <Navbar />
      <Hero />
      <div className='mx-auto max-w-screen-xl px-5 py-6 sm:px-6 lg:px-8'>
        <div className="flex justify-center">
          <div className="text-center text-white">
            <Title title='Who are We' />
            <h1 className='mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi inventore eligendi quam quasi iure? At laudantium natus praesentium et id perspiciatis ad alias aliquam ipsam in tempore cumque, itaque atque.</h1>
          </div>
        </div>
      </div>
    </AOSWrapper>
  )
}
