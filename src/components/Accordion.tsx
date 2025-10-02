import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Accordion: React.FC = () => {
    // Define the data for the accordion items
    const accordionItems = [
        {
            title: 'Glass Packaging Options Suited to You',
            content: 'Origin offer a range of glass  pharmaceutical containers manufactured from a selection of different  types of glass, available in a variety of colours and sizes. All our  glass has been tested to conform to international pharmacopoeias: the British Pharmacopoeia (BP), the United States Pharmacopoeia – USP  (660) and the European Pharmacopoeia – Ph. Eur. Ed Chapter 3.2.1. ',
            additionalContent: ['Amber', 'Green', 'Blue'],
        },
        {
            title: 'Packaging Details for Pharma Industry',
            content: 'Origin offer a range of glass  pharmaceutical containers manufactured from a selection of different  types of glass, available in a variety of colours and sizes. All our  glass has been tested to conform to international pharmacopoeias: the British Pharmacopoeia (BP), the United States Pharmacopoeia – USP  (660) and the European Pharmacopoeia – Ph. Eur. Ed Chapter 3.2.1. ',
            additionalContent: ['Plastic', 'Aluminum', 'Hybrid'],
        },
        {
            title: 'Customization Services',
            content: 'Origin offer a range of glass  pharmaceutical containers manufactured from a selection of different  types of glass, available in a variety of colours and sizes. All our  glass has been tested to conform to international pharmacopoeias: the British Pharmacopoeia (BP), the United States Pharmacopoeia – USP  (660) and the European Pharmacopoeia – Ph. Eur. Ed Chapter 3.2.1. ',
            additionalContent: ['Size Customization', 'Color Customization'],
        },
    ];

    // State to keep track of which accordion item is open
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    // Function to toggle the active accordion item
    const toggleAccordion = (index: number) => {
        setActiveIndex(prevIndex => (prevIndex === index ? null : index));  // Close if same item is clicked
    };

    return (
        <div className="accordion-section">
            <div className="accordion" id="customAccordion">
                <div className='container' >
                    {accordionItems.map((item, index) => (
                        <>
                            <div key={index} className="accordion-item !rounded-2xl overflow-hidden lg:p-8 p-4 border border-[#e6e6e6] my-2.5"
                                onClick={() => toggleAccordion(index)} >
                                <div className='flex items-center justify-between'>
                                    <h3 className={`${activeIndex === index ? 'active' : ''}`}>{item.title}</h3>

                                    {activeIndex === index && <FontAwesomeIcon icon={['fas', 'circle-chevron-down']} size='2x' className='text-[#CC3232]' />}
                                    {activeIndex !== index && <FontAwesomeIcon icon={['fas', 'circle-chevron-up']} size='2x' />}
                                </div>
                                <div className="faq-content"
                                    style={{
                                        maxHeight: activeIndex === index ? '1000px' : '0',
                                        overflow: activeIndex === index ? '' : 'hidden',
                                        transition: 'max-height 0.3s ease-out',
                                        paddingTop:activeIndex === index ? '30px' : '0'
                                    }}
                                >
                                    <p>{item.content}</p>
                                    {item.additionalContent && (
                                        <ul className='list-disc p-0 m-0 list-inside'>
                                            {item.additionalContent.map((content, i) => (
                                                <li key={i}>{content}</li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            </div>

                        </>

                    ))}
                </div>
            </div>
        </div>
    );
};

export default Accordion;
