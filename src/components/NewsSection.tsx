
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const newsData = [
  {
    id: 1,
    title: 'Discover Implications Water Packaging Solutions',
    date: '31 December, 2024',
    image: 'img/blog.jpg',
    content: "Dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.",
    link: '#'
  },
  {
    id: 2,
    title: 'Discover Implications Water Packaging Solutions',
    date: '31 December, 2024',
    image: 'img/blog.jpg',
    content: "Dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.",
    link: '#'
  },
  {
    id: 3,
    title: 'Discover Implications Water Packaging Solutions',
    date: '31 December, 2024',
    image: 'img/blog.jpg',
    content: "Dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.",
    link: '#'
  },
];

const sliderSettings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  arrows: false,
  responsive: [
    {
      breakpoint: 992, // tablet
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 768, // mobile
      settings: {
        slidesToShow: 1,
      }
    }
  ]
};

const NewsSection = () => {
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
            <div key={item.id} className="px-2">
              <div className="news-card">
                <div className="news-card-img">
                  <img src={item.image} className="w-100" alt="News" />
                </div>
                <div className="news-card-body">
                  <div className="news-date">{item.date}</div>
                  <h5>{item.title}</h5>
                  <p>{item.content}</p>
                  <a href={item.link}>Read more....</a>
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
