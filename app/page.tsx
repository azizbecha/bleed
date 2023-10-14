import AOSWrapper from '@/components/AOSWrapper'
import { Hero } from '@/components/Hero'
import Navbar from '@/components/Navbar'

export default function Home() {
  return (
    <AOSWrapper>
      <Navbar />
      <Hero />
    </AOSWrapper>
  )
}
