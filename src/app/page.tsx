import Footer from '@/component/Footer'
import HeroSection from '@/component/Landigpage/HeroSection'
import OurProducts from '@/component/Landigpage/OurProducts'
import WhyUs from '@/component/Landigpage/WhyUs'
import TopNavbar from '@/component/TopNavbar'
import Image from 'next/image'

export default function Home() {

  return (
    <main>
      <TopNavbar />
      <HeroSection />
      <OurProducts/>
      <WhyUs />
      <Footer />
    </main>
  )
}
