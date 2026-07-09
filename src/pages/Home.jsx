import Hero from '../components/Hero'
import TrustBar from '../components/TrustBar'
import Stats from '../components/Stats'
import Pillars from '../components/Pillars'
import Services from '../components/Services'
import Process from '../components/Process'
import WhyUs from '../components/WhyUs'
import Testimonials from '../components/Testimonials'
import FAQ from '../components/FAQ'
import CTA from '../components/CTA'
import Feature from '../components/Feature'
import Slider1 from '../components/Slider1'
import Pillars2 from '../components/Pillars2'
import Services2 from '../components/Services2'
import FAQs from '../components/FAQs'

export default function HomePage() {
  return (
    <>
    {/* <Slider1/> */}
      <Hero />
      <Stats />
      <Pillars2/>
      <Feature/>
      {/* <Pillars /> */}
      <TrustBar />
      <Services2/>
      <Testimonials />
      {/* <Services /> */}
      <FAQs/>
      {/* <Process /> */}
      <WhyUs />
      {/* <FAQ /> */}
      <CTA />
    </>
  )
}
