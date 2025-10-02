
// @ts-ignore
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const teamMembers = [
  { img: "img/client-img.png", name: "Jonathan Barnes", role: "Founder and CEO" },
  { img: "img/client-img2.jpg", name: "Sarah Williams", role: "Co-Founder" },
  { img: "img/client-img3.jpg", name: "Michael Smith", role: "Operations Head" },
  { img: "img/client-img.png", name: "Emily Johnson", role: "Marketing Head" },
  { img: "img/client-img2.jpg", name: "David Brown", role: "Finance Manager" },
  { img: "img/client-img3.jpg", name: "Chris Taylor", role: "Technical Lead" },
  { img: "img/client-img.png", name: "Anna White", role: "Product Designer" },
  { img: "img/client-img2.jpg", name: "James Wilson", role: "Quality Manager" },
  { img: "img/client-img3.jpg", name: "Olivia Green", role: "HR Head" },
];

const TeamSection = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    responsive: [
      {
        breakpoint: 992,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 576,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  return (
    <section className="team-section bg-shape-section">
      <div className="container">
        <div className="heading-wrapper">
          <h6>Our Team</h6>
          <h2>
            Our <span>Dedicated Team of Packaging Specialists</span>
          </h2>
          <p>
            At Vishal Plastic Industries, our team is our greatest strength. We are a group of passionate professionals
            committed to excellence in pharmaceutical plastic manufacturing. From research and development to production
            and customer service, each team member plays a crucial role in ensuring the success of our products and the
            satisfaction of our clients. We believe in innovation, teamwork, and continuous improvement to meet the
            evolving demands of the pharmaceutical industry.
          </p>
        </div>

        <Slider {...settings} className="team-slider-wrapper">
          {teamMembers.map((member, index) => (
            <div className="team-card-wrapper" key={index}>
              <div className="team-card text-center">
                <img src={member.img} alt={member.name} />
                <h5>{member.name}</h5>
                <p>{member.role}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default TeamSection;
