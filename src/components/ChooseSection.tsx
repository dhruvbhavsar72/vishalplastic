const ChooseSection = () => {
  // Array of reasons to choose
  const chooseReasons = [
    {
      id: 1,
      title: "High-Quality Materials",
      description: "We use premium grade plastic to ensure safety and durability.",
      imgSrc: "img/Group.png"
    },
    {
      id: 2,
      title: "Customization",
      description: "We offer tailor-made solutions  to meet specific industry requirements.",
      imgSrc: "img/Group.png"
    },
    {
      id: 3,
      title: "Innovative Designs",
      description: " Our products are designed  for efficiency and ease of use",
      imgSrc: "img/Group.png"
    },
    {
      id: 4,
      title: "Competitive Pricing",
      description: "Get the best quality at the  most reasonable rates.",
      imgSrc: "img/Group.png"
    },
    {
      id: 5,
      title: "Timely Delivery",
      description: "We ensure quick turnaround  times for all orders.",
      imgSrc: "img/Group.png"
    },
    {
      id: 6,
      title: "Global Reach",
      description: "We supply products to various  international markets",
      imgSrc: "img/Group.png"
    }
  ];

  return (
    <section className="choose-section bg-shape-section">
      <div className="heading-wrapper">
        <h6>Why Choose</h6>
        <h2>Why Choose <span>Vishal Plastic Industries ?</span></h2>
        <p>
          You should choose us to purchase different types of plastic products because we are an experienced name in the plastic industry. All our products are manufactured using the skin-friendly material and are acclaimed for their availability in different colors, designs and patterns.
        </p>
      </div>

      <div className="container">
        <div className="row g-4">
          {chooseReasons.map((reason) => (
            <div key={reason.id} className="col-lg-4 col-sm-6">
              <div className="choose-card">
                <div className="card-icon">
                  <img src={reason.imgSrc} alt={reason.title} />
                </div>
                <h5>{reason.title}</h5>
                <p>{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChooseSection;
