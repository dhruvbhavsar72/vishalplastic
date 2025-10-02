import React from 'react'
import Banner from '../components/Banner'
import AboutSection from '../components/AboutSection'
import ProductsSection from '../components/ProductsSection' 
import ServicesSlider from '../components/ServicesSlider'
import ChooseSection from '../components/ChooseSection'
import HowItWorks from '../components/HowItWorks'
import TeamSection from '../components/TeamSection'
import NewsSection from '../components/NewsSection'
const Home: React.FC = () => {
  return (
    <>
      <Banner />
      <AboutSection/>
      <ProductsSection/>
      <ServicesSlider/>
      <ChooseSection/>
      <HowItWorks/>
      <TeamSection/>
      <NewsSection/>
    </>
  )
}

export default Home
