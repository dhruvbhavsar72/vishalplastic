import db from '../../db.json';
import type { DB, ProductDetail } from "../../type";
import { useParams } from 'react-router-dom';
import ProductDetailSidebar from './ProductDetailSidebar';
import Pagination from './Pagination';
import { useState } from 'react';
import ProductModal from './ProductModal';
const data = db as DB;

const Packaging = () => {
    const { id } = useParams<{ id: string }>();
    // const details: ProductDetail[] = data.productDetails[id!] || [];
    const [currentPage, setCurrentPage] = useState(1);
    const [modal, ShowModal] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState<ProductDetail | null>(null);
    const [showbackdrop, setShowbackdrop] = useState('')
    const itemsPerPage = 5;
    const totalItems = data.productDetails[id!].length;
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentItems = data.productDetails[id!].slice(startIndex, startIndex + itemsPerPage);

    const handleMoreInfo = (productId: number) => {
        const otherDetails = data.productDetails[id!][productId];
        setSelectedProduct(otherDetails);
        ShowModal(true);
        setShowbackdrop('show');

    }
    return (
        <div className="product-list">
            <div className="container">
                <div className="product-title-wrapper">
                    <h2>Pharmacy Packaging</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and  typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of  type and scrambled it to make a type specimen book. It has survived not  only five centuries, but also the leap into electronic typesetting,  remaining essentially unchanged. It was popularised in the 1960s with  the release of Letraset sheets containing Lorem</p>
                </div>
                <div className="row">


                    <div className="col-md-3 col-lg-3 mb-4">
                        <ProductDetailSidebar />
                    </div>


                    <div className="col-md-9 col-lg-9 product-items-wrapper bg-shape-section">
                        <div className="d-flex flex-wrap justify-content-between align-items-center mb-3">
                            <div>
                                <select className="form-select">
                                    <option>Sort by: Default sorting</option>
                                    <option>Sort by: Popularity</option>
                                    <option>Sort by: Price</option>
                                </select>
                            </div>


                            <div className="showing-product-wrapper">
                                <div className="showing-product">Showing 1-9 of 19 results</div>
                                <button className=" btn btn-light" id="listView"><i className="bi bi-list"></i></button>
                            </div>
                        </div>

                        <div id="products" className="grid grid-cols-1 xl:grid-cols-3 md:grid-cols-2 gap-6">
                            {currentItems.map((product, index) => (
                                <div key={index} className={`product-list-card position-relative`}>
                                    <div className="product-image">
                                        <img src={product.productImage} className="w-100" alt={product.productName} />
                                    </div>
                                    <div className='flex flex-col h-[calc(100%-246px)]'>
                                        <div className="product-title uppercase">{product.productName}</div>
                                        <div className="product-desc">{product.productUse}</div>
                                        <div className="flex gap-2.5 justify-center mt-auto">
                                            <button onClick={() => handleMoreInfo(index)} className="transition-all ease-in-out duration-100 border !border-[#CC3232] text-sm !rounded-[5px] overflow-hidden text-white bg-[#CC3232] px-4 py-1.5 hover:bg-transparent hover:!text-[#CC3232]">More Info</button>
                                            <button className="transition-all ease-in-out duration-100 border !border-[#CC3232] text-sm !rounded-[5px] overflow-hidden text-white bg-[#CC3232] px-4 py-1.5 hover:bg-transparent hover:!text-[#CC3232]">Get Quote</button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>


                        <Pagination
                            totalItems={totalItems}
                            itemsPerPage={itemsPerPage}
                            currentPage={currentPage}
                            onPageChange={(page) => setCurrentPage(page)}
                        />

                        <ProductModal show={modal} onClose={() => ShowModal(false)} product={selectedProduct} addClassName={showbackdrop} />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Packaging
