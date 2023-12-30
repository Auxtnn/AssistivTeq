import React from 'react'
import Hero from '@/components/mainWebsite/Hero';
import Products from '@/components/mainWebsite/Products';
import AboutUs from '@/components/mainWebsite/AboutUs';
import FeaturedProducts from '@/components/mainWebsite/FeaturedProducts';
import Testimonial from '@/components/mainWebsite/Testimonial';
import Partnership from '@/components/mainWebsite/Partnership';
import CTApartner from '@/components/mainWebsite/CTApartner';
import Footer from '@/components/mainWebsite/Footer';
import Nav from '@/components/mainWebsite/Nav';

function page() {
  return (
    <main className=''>
      <Nav />
      <Hero />
      <Products />
      <AboutUs />
      <FeaturedProducts />
      <Testimonial />
      <Partnership />
      <CTApartner />
      <Footer />
    </main>
  )
}

export default page
