
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from 'react';

const newsData = [
  {
    id: 1,
    title: 'Green packaging: A huge responsibility',
    date: 'Jun 2, 2022',
    image: 'img/blog.jpg',
    content: "Packaging – one of the crucial aspects of the pharma industry – has been witnessing changes over years. With time, the demand for innovative packaging has risen, including innovative designs, security features, track and trace features, and so on and so forth. Currently, there are a number of sustainable packaging methods like metal tins, paper board packaging, HDPE and PP recyclable bottles that are being used in pharma companies.",
    link: '#'
  },
  {
    id: 2,
    title: 'Innovative Recyclable Blister Pack Reduces Carbon Footprint',
    date: 'June 16, 2025',
    image: 'img/blog.jpg',
    content: "Pharmaceutical plastic packaging is under increasing scrutiny as the industry looks for solutions that balance sustainability with functionality. Businesses are under increasing pressure to use environmentally friendly materials while also making sure that they meet the strict performance standards necessary for pharmaceutical protection.",
    link: 'https://plasticsindustry.org/articles/innovative-recyclable-blister-pack-reduces-carbon-footprint'
  },
  {
    id: 3,
    title: 'Govt exempts imported medical-grade plastic from quality rules to boost syringe, IV production',
    date: 'Jun 13, 2025',
    image: 'img/blog.jpg',
    content: "The government has exempted pharmaceutical-grade high-density polyethylene (HDPE), a critical raw material used in making disposable syringes and IV cannulas, from mandatory quality certification under the Bureau of Indian Standards (BIS).",
    link: 'https://www.livemint.com/news/india/govt-exempts-imported-medical-grade-plastic-from-quality-rules-to-boost-syringe-iv-production-11749797486512.html'
  },
];



const NewsSection = () => {
  const [hasMounted, setHasMounted] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setHasMounted(true);
    setWindowWidth(window.innerWidth);

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!hasMounted) return null;

  const getSlidesToShow = () => {
    if (windowWidth <= 768) return 1;
    if (windowWidth <= 992) return 2;
    return 3;
  };

  const getSlidesToScroll = () => {
    if (windowWidth <= 768) return 1;
    if (windowWidth <= 992) return 2;
    return 3;
  };
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: getSlidesToShow(),
    slidesToScroll: getSlidesToScroll(),
    arrows: false,
  };
  return (
    <section className="news-section bg-shape-section">
      <div className="container">
        <div className="heading-wrapper text-center">
          <h6>News & Article</h6>
          <h2>Read Our <span>Latest News</span></h2>
          <p>Stay informed with the latest industry updates, trends, and innovations.
            Explore expert insights and company news that shape the future of packaging.</p>
        </div>

        <Slider {...sliderSettings} className="news-slider mt-4">
          {newsData.map((item) => (
            <div key={item.id} className="px-2 h-full">
              <div className="news-card h-full">
                <div className="news-card-img mb-4">
                  <img src={item.image} className="w-100" alt="News" />
                </div>
                <div className="news-card-body flex flex-col h-[calc(100%-310px)]">
                  <div className="news-date">{item.date}</div>
                  <h5>{item.title}</h5>
                  <p>{item.content}</p>
                  <a className='mt-auto' href={item.link}>Read more....</a>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default NewsSection;

