import React from "react";

interface ProductDetail {
    productName: string;
    productCode: string;
    productSize: string;
    productColor: string;
    productUse: string;
    productMaterial: string;
    productImage: string;
}

interface ProductModalProps {
    show: boolean;
    addClassName: string;
    onClose: () => void;
    product: ProductDetail | null;
}

const ProductModal: React.FC<ProductModalProps> = ({ show, onClose, product, addClassName }) => {
    if (!show || !product) return null;


    return (
        <>
            <div className={`modal fade d-block ${addClassName}`} tabIndex={-1} role="dialog">
                <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">{product.productName}</h5>
                        </div>
                        <div className="modal-body">
                            <div className="flex flex-wrap gap-2.5 justify-between">
                                <div className="w-3/12 text-center">
                                    <img
                                        src={product.productImage}
                                        alt={product.productName}
                                        className="h-[230px] object-contain object-center w-full"
                                    />
                                </div>
                                <div className="w-8/12">
                                    <p className=""><strong>Code:</strong> {product.productCode}</p>
                                    <p><strong>Size:</strong> {product.productSize}</p>
                                    <p><strong>Color:</strong> {product.productColor}</p>
                                    <p><strong>Material:</strong> {product.productMaterial}</p>
                                    <p><strong>Use:</strong> {product.productUse}</p>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="text-sm !rounded-[5px] overflow-hidden text-white bg-[#CC3232] px-4 py-1.5" onClick={onClose}>
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`modal-backdrop fade ${addClassName}`}></div>
        </>
    );
};

export default ProductModal;
