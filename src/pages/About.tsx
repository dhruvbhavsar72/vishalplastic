import React from 'react'
import NewsSection from '../components/NewsSection'
import TeamSection from '../components/TeamSection'
import CertificationSection from '../components/CertificationSection'
import ImageText from '../components/ImageText'
import Counter from '../components/Counter'
import Process from '../components/Process'
import SimpleBanner from '../components/SimpleBanner'
import Owner from '../components/Owner'

const About: React.FC = () => {
  return (
    <>
      <SimpleBanner bannerTitle="About Us" />
      <Owner
        imageUrl="img/about-image.jpg"
        title="Business Solutions"
        subtitle="We Strive to Offer Intelligent"
        description=" Established in 1993, Vishal Plastic Industries has over
 27 years of experience in manufacturing high-quality pharma plastic products and plastic oil spouts. With
 decades of expertise, we specialize in providing durable,
 reliable, and innovative plastic solutions tailored to
 meet the needs of the pharmaceutical and oil industries.
 Our state-of-the-art manufacturing facility is equipped
 with the latest technology to ensure precision,
 efficiency, and high standards of production. We follow
 stringent quality control measures at every stage to
 guarantee the best products for our clients. Our team of
 highly skilled professionals continuously works towards
 improving our product range, integrating the latest
 advancements in plastic manufacturing.
 Committed to sustainability, we prioritize eco-friendly
 production processes and use recyclable materials
 wherever possible. Our mission is to provide world-class
 plastic solutions while maintaining a strong focus on
 customer satisfaction, innovation, and environmental
 responsibility.
 We have a well-established supply chain network that
 ensures the timely delivery of products to our clients
 worldwide. Our extensive industry experience, coupled
 with a customer-centric approach, allows us to cater to
 the unique demands of pharmaceutical and industrial
 clients. At Vishal Plastic Industries, we believe in
 continuous improvement, embracing the latest
 advancements to provide superior products and
 services."
      />
      <Process />
      <Counter />
      <ImageText />
      <CertificationSection />
      <TeamSection />
      <NewsSection />
    </>
  )
}

export default About
