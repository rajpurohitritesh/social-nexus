import { CTASection } from '../sections/CTASection.jsx'
import { CoreServices } from '../sections/CoreServices.jsx'
import { Hero } from '../sections/Hero.jsx'
import { Industries } from '../sections/Industries.jsx'
import { WhyChoose } from '../sections/WhyChoose.jsx'
import { WhoWeAre } from '../sections/WhoWeAre.jsx'

export function Home() {
  return (
    <>
      <Hero />
      <WhoWeAre />
      <CoreServices />
      <WhyChoose />
      <Industries />
      <CTASection />
    </>
  )
}

