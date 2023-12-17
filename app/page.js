import React from 'react'
import Hero from '@/components/mainWebsite/Hero';
import Products from '@/components/mainWebsite/Products';
import AboutUs from '@/components/mainWebsite/AboutUs';
import FeaturedProducts from '@/components/mainWebsite/FeaturedProducts';
import Testimonial from '@/components/mainWebsite/Testimonial';
import Partnership from '@/components/mainWebsite/Partnership';



function page() {
  return (
    <main className=''>
      <Hero />
      <Products />
      <AboutUs />
      <FeaturedProducts />
      <Testimonial />
      <Partnership />
    </main>
  )
}

export default page
