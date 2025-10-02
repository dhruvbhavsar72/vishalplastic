import React from 'react';

// Define the types for the props
interface AboutSectionProps {
    imageUrl: string;
    title: string;
    subtitle: string;
    description: string;
    founderName: string;
    foundedYear: number;
}

const Owner: React.FC<AboutSectionProps> = ({
    imageUrl,
    title,
    subtitle,
    description,
    founderName,
    foundedYear
}) => {
    return (
        <section className="about-section">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-[60px]">
                    {/* Left Image */}
                    <div className="">
                        <div className="about-img-wrapper">
                            <img src={imageUrl} alt="About Image" />
                        </div>
                    </div>

                    {/* Right Content */}
                    <div className="">
                        <div className="about-content-wrapper">
                            <h6><strong>About {title}</strong></h6>
                            <h2>
                                {subtitle}
                                <span className='block'>{title}</span>
                            </h2>
                            {/* <p><strong>{title}</strong> is founded by {founderName} in {foundedYear}.</p> */}
                            <p>{description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Owner;
