import React from 'react'
import Products from '../components/mainWebsite/Products';
import AboutUs from '../components/mainWebsite/AboutUs';
import FeaturedProducts from '../components/mainWebsite/FeaturedProducts';
import Partnership from '../components/mainWebsite/Partnership';
import CTApartner from '../components/mainWebsite/CTApartner';
import Footer from '../components/mainWebsite/Footer';
import Nav from '../components/mainWebsite/Nav';
import Hero from '../components/mainWebsite/Hero';

function page() {
  return (
    <main className=''>
      <Nav />
      <Hero />
      <Products />
      <AboutUs />
      <FeaturedProducts />
      
      <Partnership />
      <CTApartner />
      <Footer />
    </main>
  )
}

export default page
