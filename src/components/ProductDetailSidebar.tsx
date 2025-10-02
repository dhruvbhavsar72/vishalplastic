import React, { useState } from 'react';
import ProductSearchbar from './ProductSearchbar';
import ProductRange from './ProductRange';

const ProductDetailSidebar = () => {
    return (
        <div className="sidebar">

            <ProductSearchbar />
            <ProductRange />
            <div>
                <div className="product-filter-label">
                    <label className="form-label">Sub Categories</label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="cat1" />
                    <label className="form-check-label" htmlFor="cat1">Lorem Ipsum is simply dummy.</label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="cat2" />
                    <label className="form-check-label" htmlFor="cat2">Lorem Ipsum is simply dummy.</label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="cat3" />
                    <label className="form-check-label" htmlFor="cat3">Lorem Ipsum is simply dummy.</label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="cat4" />
                    <label className="form-check-label" htmlFor="cat4">Lorem Ipsum is simply dummy.</label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="cat5" />
                    <label className="form-check-label" htmlFor="cat5">Lorem Ipsum is simply dummy.</label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="cat6" />
                    <label className="form-check-label" htmlFor="cat6">Lorem Ipsum is simply dummy.</label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="cat7" />
                    <label className="form-check-label" htmlFor="cat7">Lorem Ipsum is simply dummy.</label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="cat8" />
                    <label className="form-check-label" htmlFor="cat8">Lorem Ipsum is simply dummy.</label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="cat9" />
                    <label className="form-check-label" htmlFor="cat9">Lorem Ipsum is simply dummy.</label>
                </div>
            </div>
        </div>
    )
}

export default ProductDetailSidebar
