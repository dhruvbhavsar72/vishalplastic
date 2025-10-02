import React from 'react'

interface SimpleBannerProps {
    bannerTitle: string;
}

const SimpleBanner: React.FC<SimpleBannerProps> = ({ bannerTitle }) => {
    return (
        <div className="product-banner">
            <div className="container">
                <div className="product-banner-inner">
                    <h1>{bannerTitle}</h1>
                </div>
            </div>
        </div>
    )
}

export default SimpleBanner
