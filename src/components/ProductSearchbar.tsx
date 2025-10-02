import React, { useState } from 'react';
import type { ProductDetail } from '../../type';
import prodDetail from '../../db.json';

const products: ProductDetail[] = Object.values(prodDetail.productDetails).flat();

const ProductSearchbar = () => {
    const [query, setQuery] = useState<string>('');
    const [filterProduct, setFilterProduct] = useState<ProductDetail[]>([]);
    const handleSearchChange = (queryString: string) => {
        if (queryString === '') {
            setFilterProduct([])
        }
        else {

            const results = products.filter((product) => product.productName.toLowerCase().includes(queryString.toLowerCase()));
            setFilterProduct(results);
        }
    }

    const onSearch = (e: any) => {
        setQuery(e.target.value);
        handleSearchChange(e.target.value);
    }
    return (
        <>
            <div className="seach-label product-filter-label"><label>Search</label></div>
            <div className="search-box-wrapper mb-4">
                <div className="search-box">
                    <i className="bi bi-search"></i>
                    <input type="text" className="form-control" value={query} placeholder="Search..." onChange={onSearch} />
                </div>
            </div>
            <ul>
                {
                    filterProduct.map((filterName) => (
                        <li>{filterName.productName}</li>
                    ))
                }
            </ul>
        </>
    )
}

export default ProductSearchbar
