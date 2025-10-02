const ServicesSlider = () => {
  const slides = [
    {
      title: "Clean room plant",
      description: `At Vishal Plastic Industries, we operate a state-of-the-art Clean Room Plant designed to meet the
        highest industry standards for pharmaceutical-grade plastic manufacturing. Our clean room
        facility ensures a contaminant-free production environment, adhering to stringent regulatory
        requirements`,
      features: [
        "Features of Our Clean Room Plant:",
        "HEPA & ULPA Filtration Systems to maintain air purity and prevent particulate contamination.",
        "Temperature & Humidity Control to ensure stable and precise production conditions.",
        "Automated Production Lines to minimize human intervention and reduce contamination risks.",
        "GMP & FDA-Compliant Operations to meet pharmaceutical regulatory requirements.",
        "Sterile Packaging & Sealing Units to ensure product integrity and extend shelf life.",
        "Strict Quality Monitoring & Auditing for compliance with international safety standards.",
        "Our clean room facility is a key factor in our ability to manufacture high-quality pharma plastic packaging, bottles, caps, closures, and measuring devices that meet the most demanding industry requirements. This facility allows us to supply products that are free from microbial contamination, ensuring safe usage for pharmaceutical applications."
      ],
      image: "img/product-img.png",
      alt: "Clean Room Plant",
    },
  ];

  return (
    <section className="slider-section">
      <div className="container">
        <div className="slider-wrapper-section">
          <div className="slider-wrapper">
            <div id="cleanRoomCarousel" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                {slides.map((slide, index) => (
                  <div
                    key={index}
                    className={`carousel-item ${index === 0 ? "active" : ""}`}
                  >
                    <section className="slider-section">
                      <div className="grid grid-cols-1 lg:grid-cols-2">
                        <div className="lg:p-12 p-6 slider-content">
                          <h6>Services and Solutions</h6>
                          <h2>{slide.title}</h2>
                          <p>{slide.description}</p>
                          <ul className="slider-list">
                            {slide.features.map((feature, i) => (
                              <li key={i}>{feature}</li>
                            ))}
                          </ul>
                          <a href="#" className="btn-explore white-btn">
                            Explore More <span><img src="img/white-btn.png" alt="Explore" /></span>
                          </a>
                        </div>
                        <div className="slider-image">
                          <img src={slide.image} alt={slide.alt} />
                        </div>
                      </div>
                    </section>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* <div className="carousel-control-wrapper">
            <button className="carousel-control-prev" type="button" data-bs-target="#cleanRoomCarousel" data-bs-slide="prev">
              <svg xmlns="http://www.w3.org/2000/svg" width="38" height="28" viewBox="0 0 38 28" fill="none">
                <path d="M36.3599 13.1807H37.4435V15.3479H36.3599V13.1807ZM1.7978 15.3479C1.19935 15.3479 0.714216 14.8628 0.714216 14.2643C0.714216 13.6659 1.19935 13.1807 1.7978 13.1807V15.3479ZM14.0073 1.90039V0.816802H16.1745V1.90039H14.0073ZM2.42164 15.1064C1.88795 15.3771 1.23581 15.164 0.965059 14.6303C0.694311 14.0966 0.907473 13.4444 1.44118 13.1737L2.42164 15.1064ZM16.1746 26.504V27.5875H14.0074V26.504H16.1746ZM36.3599 15.3479H1.93152V13.1807H36.3599V15.3479ZM1.93152 15.3479H1.7978V13.1807H1.93152V15.3479ZM16.1745 1.90039C16.1745 3.69488 15.1331 5.40918 13.8498 6.87408C12.5388 8.37064 10.8196 9.78199 9.14356 10.9865C7.46048 12.1962 5.78303 13.2241 4.52967 13.9482C3.90195 14.3109 3.3781 14.5989 3.00988 14.7968C2.82572 14.8958 2.68033 14.9723 2.58017 15.0245C2.53009 15.0507 2.4913 15.0707 2.46461 15.0844C2.45127 15.0913 2.44095 15.0966 2.43376 15.1002C2.43016 15.1021 2.42734 15.1035 2.42532 15.1045C2.42431 15.105 2.42349 15.1055 2.42288 15.1058C2.42258 15.1059 2.42227 15.1061 2.42211 15.1062C2.42185 15.1063 2.42164 15.1064 1.93141 14.14C1.44118 13.1737 1.44107 13.1737 1.44101 13.1738C1.44105 13.1738 1.44105 13.1738 1.44114 13.1737C1.44132 13.1736 1.44171 13.1734 1.44229 13.1731C1.44346 13.1725 1.44541 13.1715 1.44814 13.1701C1.4536 13.1674 1.46215 13.163 1.47371 13.157C1.49682 13.1452 1.53192 13.127 1.57822 13.1029C1.67083 13.0546 1.80817 12.9823 1.98384 12.8879C2.33528 12.699 2.83952 12.4219 3.44549 12.0718C4.65955 11.3703 6.27198 10.3815 7.87878 9.22672C9.49265 8.06682 11.0633 6.76599 12.2197 5.44602C13.4038 4.09438 14.0073 2.88778 14.0073 1.90039H16.1745ZM1.93152 14.2643C2.31272 13.25 2.31301 13.2501 2.31335 13.2502C2.31353 13.2503 2.31392 13.2504 2.31428 13.2506C2.315 13.2508 2.31593 13.2512 2.31705 13.2516C2.3193 13.2525 2.32233 13.2536 2.32615 13.2551C2.3338 13.258 2.34457 13.2621 2.35838 13.2674C2.38598 13.278 2.42572 13.2934 2.47677 13.3136C2.57887 13.3538 2.72632 13.413 2.91266 13.4904C3.28517 13.6451 3.81398 13.8732 4.44716 14.1697C5.71069 14.7612 7.40352 15.6314 9.1037 16.7415C10.7973 17.8474 12.54 19.2183 13.8693 20.8231C15.1984 22.4276 16.1746 24.3414 16.1746 26.504H14.0074C14.0074 25.0195 13.3387 23.5798 12.2004 22.2056C11.0623 20.8316 9.51513 19.5985 7.91885 18.5561C6.32915 17.5181 4.73211 16.696 3.52822 16.1324C2.9277 15.8512 2.42842 15.6359 2.08127 15.4917C1.90778 15.4197 1.7725 15.3654 1.68183 15.3297C1.63651 15.3118 1.60235 15.2986 1.58016 15.29C1.56906 15.2858 1.56096 15.2827 1.55595 15.2808C1.55345 15.2798 1.55172 15.2792 1.55078 15.2788C1.55031 15.2786 1.55003 15.2785 1.54995 15.2785C1.54991 15.2785 1.55001 15.2785 1.54999 15.2785C1.55013 15.2786 1.55032 15.2786 1.93152 14.2643Z" fill="#1F2029"></path>
              </svg>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#cleanRoomCarousel" data-bs-slide="next">
              <svg xmlns="http://www.w3.org/2000/svg" width="37" height="28" viewBox="0 0 37 28" fill="none">
                <path d="M1.27832 13.1807H0.194731V15.3479H1.27832V13.1807ZM35.8404 15.3479C36.4389 15.3479 36.924 14.8628 36.924 14.2643C36.924 13.6659 36.4389 13.1807 35.8404 13.1807V15.3479ZM23.6309 1.90039V0.816802H21.4637V1.90039H23.6309ZM35.2166 15.1064C35.7503 15.3771 36.4024 15.164 36.6732 14.6303C36.9439 14.0966 36.7308 13.4444 36.1971 13.1737L35.2166 15.1064ZM21.4636 26.504V27.5875H23.6308V26.504H21.4636ZM1.27832 15.3479H35.7067V13.1807H1.27832V15.3479ZM35.7067 15.3479H35.8404V13.1807H35.7067V15.3479ZM21.4637 1.90039C21.4637 3.69488 22.5051 5.40918 23.7884 6.87408C25.0995 8.37064 26.8187 9.78199 28.4947 10.9865C30.1778 12.1962 31.8552 13.2241 33.1086 13.9482C33.7363 14.3109 34.2601 14.5989 34.6284 14.7968C34.8125 14.8958 34.9579 14.9723 35.0581 15.0245C35.1082 15.0507 35.1469 15.0707 35.1736 15.0844C35.187 15.0913 35.1973 15.0966 35.2045 15.1002C35.2081 15.1021 35.2109 15.1035 35.2129 15.1045C35.2139 15.105 35.2148 15.1055 35.2154 15.1058C35.2157 15.1059 35.216 15.1061 35.2161 15.1062C35.2164 15.1063 35.2166 15.1064 35.7068 14.14C36.1971 13.1737 36.1972 13.1737 36.1972 13.1738C36.1972 13.1738 36.1972 13.1738 36.1971 13.1737C36.1969 13.1736 36.1965 13.1734 36.196 13.1731C36.1948 13.1725 36.1928 13.1715 36.1901 13.1701C36.1846 13.1674 36.1761 13.163 36.1645 13.157C36.1414 13.1452 36.1063 13.127 36.06 13.1029C35.9674 13.0546 35.8301 12.9823 35.6544 12.8879C35.303 12.699 34.7987 12.4219 34.1928 12.0718C32.9787 11.3703 31.3663 10.3815 29.7595 9.22672C28.1456 8.06682 26.5749 6.76599 25.4186 5.44602C24.2345 4.09438 23.6309 2.88778 23.6309 1.90039H21.4637ZM35.7067 14.2643C35.3255 13.25 35.3252 13.2501 35.3249 13.2502C35.3247 13.2503 35.3243 13.2504 35.324 13.2506C35.3232 13.2508 35.3223 13.2512 35.3212 13.2516C35.3189 13.2525 35.3159 13.2536 35.3121 13.2551C35.3044 13.258 35.2937 13.2621 35.2799 13.2674C35.2523 13.278 35.2125 13.2934 35.1615 13.3136C35.0594 13.3538 34.9119 13.413 34.7256 13.4904C34.3531 13.6451 33.8243 13.8732 33.1911 14.1697C31.9276 14.7612 30.2347 15.6314 28.5345 16.7415C26.8409 17.8474 25.0982 19.2183 23.7689 20.8231C22.4398 22.4276 21.4636 24.3414 21.4636 26.504H23.6308C23.6308 25.0195 24.2995 23.5798 25.4379 22.2056C26.5759 20.8316 28.1231 19.5985 29.7194 18.5561C31.3091 17.5181 32.9061 16.696 34.11 16.1324C34.7105 15.8512 35.2098 15.6359 35.557 15.4917C35.7305 15.4197 35.8657 15.3654 35.9564 15.3297C36.0017 15.3118 36.0359 15.2986 36.0581 15.29C36.0692 15.2858 36.0773 15.2827 36.0823 15.2808C36.0848 15.2798 36.0865 15.2792 36.0875 15.2788C36.0879 15.2786 36.0882 15.2785 36.0883 15.2785C36.0883 15.2785 36.0882 15.2785 36.0883 15.2785C36.0881 15.2786 36.0879 15.2786 35.7067 14.2643Z" fill="#1F2029"></path>
              </svg>
            </button>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default ServicesSlider;
