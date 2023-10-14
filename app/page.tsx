import Navbar from '@/components/Navbar'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <img src={"../cover.jpg"}  />
    </main>
  )
}
