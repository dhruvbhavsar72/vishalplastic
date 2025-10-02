import React, { useState } from 'react'

const ProductRange = () => {
    const [minValue, setMinValue] = useState<number>(0); // Initial value for min slider
    const [maxValue, setMaxValue] = useState<number>(2000); // Initial value for max slider


    const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = Math.min(Number(e.target.value), maxValue);
        setMinValue(value);
    };

    const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = Math.max(Number(e.target.value), minValue);
        setMaxValue(value);
    };

    // Calculate the percentage of the slider
    const minPercent = ((minValue - 1) / (2000 - 1)) * 100;
    const maxPercent = ((maxValue - 1) / (2000 - 1)) * 100;
    return (
        <div className="mb-4 range-slide">
            <div className="product-filter-label">
                <label className="form-label">Volume Range</label>
            </div>
            <div className="range-slider">
                <div className="slider-track"></div>
                <div className="slider-range" id="sliderRange"
                    style={{
                        left: `${minPercent}%`,
                        width: `${maxPercent - minPercent}%`,
                    }}
                ></div>
                <input type="range" min="1" max="2000" value={minValue} id="minRange" onChange={handleMinChange} />
                <input type="range" min="1" max="2000" value={maxValue} id="maxRange" onChange={handleMaxChange} />
                <div className="range-slider-count d-flex justify-content-between pt-3.5 small text-muted">
                    <span id="minValue">{minValue} ml</span>
                    <span id="maxValue">{maxValue} ml</span>
                </div>
            </div>
        </div>
    )
}

export default ProductRange
