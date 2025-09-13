
import AboutCompanyn from '@/components/About_page/AboutCompany'
import AboutFAQPage from '@/components/About_page/AboutFaq'
import AboutHero from '@/components/About_page/AboutHero'
import AboutProgressSection from '@/components/About_page/AboutProgress'
import AboutTestimonialsSlider from '@/components/About_page/AboutTestimonial'
import AboutWhyHireUs from '@/components/About_page/AboutWhyHire'
import React from 'react'

const page = () => {
  return (
    <div>
      <AboutHero />
      <AboutCompanyn />
      <AboutTestimonialsSlider />
      <AboutProgressSection />
      <AboutWhyHireUs />
      <AboutFAQPage />
    </div>
  )
}

export default page