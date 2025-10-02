import Button from "./Button";

const AboutSection = () => {
  return (
    <section className="section-content">

      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[58px]">
          <div className="">
            <div className="video-box position-relative">
              <div className="dot-bg"></div>
              <img src="img/section2-img.png" alt="Video" />
            </div>
          </div>
          <div className="">
            <h2 className="mb-3">We Strive to Offer Intelligent <span>Business Solutions</span></h2>
            <p className="fw-semibold">VISHAL PLASTIC INDUSTRIES is Founded by Mr. Harit Shah in 1993.</p>
            <p className="text-secondary">
              Mr. Shah is a Plastic Engineer having very good experience in the field of manufacturing
              Plastic Packaging Products for Pharma, Cosmetics, Healthcare and Food Industries.
            </p>
            <p>We undertake project right from</p>

            <ul className="services mb-4">
              <li>Product Conceptualization</li>
              <li>Designing</li>
              <li>Prototype and Mold Development</li>
              <li>Mfg. Finish Products</li>
            </ul>

            <div className="d-flex align-items-center gap-6">
             
              <Button productId={'about'}/>

              <div className="founder d-flex align-items-center">
                <img src="img/user.png" alt="Founder" className="me-2" />
                <div>
                  <strong>Mr. Harit Shah</strong><br />
                  <small className="text-secondary">Co, Founder</small>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
