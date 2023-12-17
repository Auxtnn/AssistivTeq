import React from 'react'
import Hero from '@/components/mainWebsite/Hero';
import Products from '@/components/mainWebsite/Products';
import AboutUs from '@/components/mainWebsite/AboutUs';
import FeaturedProducts from '@/components/mainWebsite/FeaturedProducts';

function page() {
  return (
    <main className=''>
      <Hero />
      <Products />
      <AboutUs />
      <FeaturedProducts />
    </main>
  )
}

export default page
