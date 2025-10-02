import React from 'react'

const Services: React.FC = () => {
  const services = [
    {
      name: "Design & Engineering",
      description: "Our expert engineers help optimize your designs for manufacturability and cost-effectiveness",
      icon: "✏️",
      details: [
        "CAD/CAM design support",
        "Design for manufacturing (DFM)",
        "Material selection guidance",
        "Prototype development"
      ]
    },
    {
      name: "Manufacturing",
      description: "State-of-the-art manufacturing facilities with strict quality control",
      icon: "🏭",
      details: [
        "Injection molding",
        "Blow molding",
        "Extrusion",
        "Thermoforming"
      ]
    },
    {
      name: "Quality Assurance",
      description: "Comprehensive testing and quality control to ensure your products meet specifications",
      icon: "🔍",
      details: [
        "Dimensional inspection",
        "Material testing",
        "Performance validation",
        "Documentation & certification"
      ]
    },
    {
      name: "Logistics & Delivery",
      description: "Reliable delivery and logistics solutions to get your products to market on time",
      icon: "🚚",
      details: [
        "Inventory management",
        "Just-in-time delivery",
        "Global shipping",
        "Custom packaging"
      ]
    }
  ]

  const additionalServices = [
    "Rapid prototyping",
    "Tool design and manufacturing",
    "Material sourcing",
    "Technical consultation",
    "After-sales support",
    "Training and workshops"
  ]

  return (
    <div className="services-page">
      <section className="services-hero">
        <div className="container">
          <h1>Our Services</h1>
          <p>Comprehensive plastic manufacturing services from concept to delivery</p>
        </div>
      </section>

      <section className="core-services">
        <div className="container">
          <h2>Core Services</h2>
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.name}</h3>
                <p>{service.description}</p>
                <ul className="service-details">
                  {service.details.map((detail, detailIndex) => (
                    <li key={detailIndex}>{detail}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="additional-services">
        <div className="container">
          <h2>Additional Services</h2>
          <p>We also offer specialized services to support your plastic manufacturing needs</p>
          <div className="additional-services-grid">
            {additionalServices.map((service, index) => (
              <div key={index} className="additional-service-item">
                <span>{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="service-process">
        <div className="container">
          <h2>Our Service Process</h2>
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">1</div>
              <h3>Consultation</h3>
              <p>Initial meeting to understand your requirements and objectives</p>
            </div>
            <div className="process-step">
              <div className="step-number">2</div>
              <h3>Design & Planning</h3>
              <p>Engineering team develops optimal solutions and project timeline</p>
            </div>
            <div className="process-step">
              <div className="step-number">3</div>
              <h3>Prototyping</h3>
              <p>Create prototypes for testing and validation</p>
            </div>
            <div className="process-step">
              <div className="step-number">4</div>
              <h3>Production</h3>
              <p>Full-scale manufacturing with quality control</p>
            </div>
            <div className="process-step">
              <div className="step-number">5</div>
              <h3>Delivery</h3>
              <p>On-time delivery with ongoing support</p>
            </div>
          </div>
        </div>
      </section>

      <section className="industries-served">
        <div className="container">
          <h2>Industries We Serve</h2>
          <div className="industries-grid">
            <div className="industry-item">
              <h3>Automotive</h3>
              <p>Interior components, engine parts, exterior trim</p>
            </div>
            <div className="industry-item">
              <h3>Healthcare</h3>
              <p>Medical devices, packaging, disposable products</p>
            </div>
            <div className="industry-item">
              <h3>Electronics</h3>
              <p>Housings, connectors, protective components</p>
            </div>
            <div className="industry-item">
              <h3>Packaging</h3>
              <p>Food containers, industrial packaging, retail displays</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Ready to Discuss Your Project?</h2>
          <p>Schedule a consultation with our experts today</p>
          <button className="cta-button">Schedule Consultation</button>
        </div>
      </section>
    </div>
  )
}

export default Services
