import React from 'react';

interface ImageTextSectionProps {
    title: string;
    subtitle: string;
    imageSrc: string;
    textContent: string[];
    reverse?: boolean;
}

const ImageTextSection: React.FC<ImageTextSectionProps> = ({
    title,
    subtitle,
    imageSrc,
    textContent,
    reverse = false,
}) => {
    return (
        <div className={`flex gap-10 flex-col md:flex-row ${reverse ? 'md:flex-row-reverse' : ''} mb-[60px]`}>
            {/* Image */}
            <div className="md:w-1/2">
                <div className="business-img-wrapper">
                    <img src={imageSrc} alt={title} className="max-w-full h-auto" />
                </div>
            </div>
            {/* Text Content */}
            <div className="md:w-1/2">
                <h2 className="text-2xl font-bold text-gray-800">
                    {title} <span className="text-blue-500">{subtitle}</span>
                </h2>
                {textContent.map((text, index) => (
                    <p key={index}>
                        {text}
                    </p>
                ))}
            </div>
        </div>
    );
};

const ImageText = () => {
    // Sample data for vision and mission
    const visionData = {
        title: 'Our Vision',
        subtitle: 'Business Solutions',
        imageSrc: 'img/Business-image.jpg',
        textContent: [
            " Vision: To be a globally recognized leader in plastic manufacturing by delivering innovative, sustainable, and high-quality plastic solutions to industries worldwide."
        ]
    };

    const missionData = {
        title: 'Our Mission',
        subtitle: 'Business Solutions',
        imageSrc: 'img/Business-image.jpg',
        textContent: [
            "To provide durable and high-precision plastic products that meet international quality standards.",
            "To embrace technological advancements and invest in research and development for continuous improvement.",
            "To ensure customer satisfaction through personalized solutions and exceptional service.",
            "To promote environmentally responsible manufacturing by utilizing sustainable materials and processes"
        ]
    };

    return (
        <section className="vision-mission">
            <div className="container">
                {/* Vision Section */}
                <ImageTextSection {...visionData} />

                {/* Mission Section */}
                <ImageTextSection {...missionData} reverse />
            </div>
        </section>
    );
};

export default ImageText;
