import { useState, type SetStateAction } from "react";

const HowItWorks = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const tabs = [
    {
      id: "tab1",
      label: "Product Design",
      step: "01",
      contentId: "content1",
      title: "Our Product",
      span: "Design",
      image: "img/product-design.jpg",
      alt: "Product",
      description: `At Vishal Plastic Industries, our product designs are crafted
by industry-leading experts who specialize in creating
innovative, high-performance, and customized plastic
solutions. With a deep understanding of materials,
engineering, and user needs, our team ensures that every
product is optimized for functionality, durability, and
manufacture ability.`,
      features: [
        "Client-Centric Approach",
        "Material Selection Based on Application",
        "Custom Mold & Tooling Development",
        "Rapid Prototyping & Testing",
        "Scalable Custom Manufacturing"
      ]
    },
    {
      id: "tab2",
      label: "Technical Evaluations",
      step: "02",
      contentId: "content2",
      title: "Technical",
      span: "Evaluations",
      image: "img/product-design.jpg",
      alt: "Evaluation",
      description: `Ensuring product durability, reliability, and compliance is a
top priority at Vishal Plastic Industries. We conduct
comprehensive technical evaluations throughout the design
and production process to maintain the highest standards.`
    },
    {
      id: "tab3",
      label: "Service",
      step: "03",
      contentId: "content3",
      title: "Our",
      span: "Services",
      image: "img/product-design.jpg",
      alt: "Service",
      description: `We offer end-to-end plastic product solutions, from design
and prototyping to large-scale manufacturing.`
    },
    {
      id: "tab4",
      label: "Customized Design",
      step: "04",
      contentId: "content4",
      title: "Customized",
      span: "Design",
      image: "img/product-design.jpg",
      alt: "Customized",
      description: `At Vishal Plastic Industries, we understand that every business
and industry has unique requirements. Our custom plastic
product design services ensure that clients receive tailor-made
solutions to fit their exact needs.`
    }
  ];

  const handleTabChange = (id: SetStateAction<string>) => setActiveTab(id);

  return (
    <section className="how-it-works">
      <div className="container">
        <div className="heading-wrapper">
          <h6>How IT Works</h6>
          <h2>
            Standard and <span>Custom Molding</span>
          </h2>
          <p>
            Vishal Plastic Industries
            has a dedicated and
            Committed R & D
            Department
          </p>
        </div>

        <div className="tabs-wrapper">
          {/* Dropdown for mobile */}
          <div className="md:hidden mb-4">
            <select
              className="form-select"
              value={activeTab}
              onChange={(e) => handleTabChange(e.target.value)}
            >
              {tabs.map((tab) => (
                <option key={tab.id} value={tab.id}>
                  {tab.step} - {tab.label}
                </option>
              ))}
            </select>
          </div>

          {/* Tabs for desktop */}
          <ul className="nav nav-tabs d-none d-md-flex" id="myTab" role="tablist">
            {tabs.map((tab) => (
              <li key={tab.id} className="nav-item" role="presentation">
                <button
                  className={`nav-link ${activeTab === tab.id ? "active" : ""}`}
                  id={tab.id}
                  type="button"
                  role="tab"
                  onClick={() => handleTabChange(tab.id)}
                >
                  <span className="step-number">{tab.step}</span> {tab.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Tab Content */}
          <div className="tab-content" id="myTabContent">
            {tabs.map((tab) => (
              <div
                key={tab.contentId}
                className={`tab-pane fade ${activeTab === tab.id ? "show active" : ""}`}
                id={tab.contentId}
                role="tabpanel"
              >
                <div className="row align-items-center">
                  <div className="col-md-6 mb-3">
                    <img src={tab.image} alt={tab.alt} />
                  </div>
                  <div className="col-md-6">
                    <h3>
                      {tab.title} <span>{tab.span}</span>
                    </h3>
                    <p>{tab.description}</p>
                    {tab.features && (
                      <ul className="feature-list">
                        {tab.features.map((feature, index) => (
                          <li key={index}>{feature}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
