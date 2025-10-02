import React from 'react';

const CertificationSection: React.FC = () => {
  // Static array of certifications
  const certifications = [
    { imgSrc: 'img/logo1.png', altText: 'GMP' },
    { imgSrc: 'img/logo2.png', altText: 'MSME' },
    { imgSrc: 'img/logo3.png', altText: 'ISO 9001' },
    { imgSrc: 'img/logo4.png', altText: 'IEC' },
    { imgSrc: 'img/logo5.png', altText: 'Zed Bronze' },
    { imgSrc: 'img/logo6.png', altText: 'ISO 15378' }
  ];

  return (
    <section className="certification-section">
      <div className="container">

        <div className="heading-wrapper">
          <h6>Certification</h6>
          <h2>Our <span>Certification</span></h2>
          <p>We take pride in adhering to the highest standards of quality, reliability, and compliance. Our certifications reflect our commitment to providing exceptional products and services. We are proud to be recognized by several esteemed organizations and regulatory bodies:</p>
        </div>

        <div className="grid justify-center md:grid-cols-6 grid-cols-2 gap-7 mx-auto max-w-[1150px]">
          {/* Dynamically render each certification logo */}
          {certifications.map((cert, index) => (
            <div key={index} className="certification-logo justify-center items-center flex">
              <img src={cert.imgSrc} alt={cert.altText} className="img-fluid" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationSection;
