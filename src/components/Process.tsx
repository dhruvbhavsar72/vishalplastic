const processData = [
    {
        number: '01',
        title: 'Get The Raw Material',
        description: "We collaborate with our clients to understand their product needs and design requirements. Whether it's standard bottles or custom shapes, we ensure every detail is tailored to your specifications."
    },
    {
        number: '02',
        title: 'Design A Plan',
        description: 'Using high-quality raw materials and advanced machinery, we manufacture plastic bottles and related products with precision, consistency, and durability. Quality control is maintained at every stage.'
    },
    {
        number: '03',
        title: 'Manufacture Product',
        description: 'Once production is complete, we handle packaging and logistics to ensure safe, timely delivery to your location — ready for use or further distribution.'
    },
    // Add more process steps here if needed
];

const Process = () => {
    return (
        <section className="process-section">
            <div className="container">
                <div className="heading-wrapper">
                    <h6>OUR PROCESS</h6>
                    <h2>See How <span>We Work</span></h2>
                    <p>
                        From concept to creation, we follow a streamlined, quality-driven process to deliver high-performance plastic bottles and manufacturing solutions tailored to your needs. Discover how we bring your vision to life — efficiently, reliably, and with precision.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-[20px]">
                    {processData.map((step, index) => (
                        <div key={index}>
                            <div className="process-card">
                                <div className="process-number">{step.number}</div>
                                <h4>{step.title}</h4>
                                <p>{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;
