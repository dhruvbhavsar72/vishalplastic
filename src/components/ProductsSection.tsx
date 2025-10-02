import Button from "./Button";
import db from '../../db.json';

const ProductsSection = () => {
  // Example array of products
  const products = db.products;

  return (
    <section className="products-section">
      <div className="container">
        <div className="heading-wrapper">
          <h6>Our Products</h6>
          <h2>Discover <span>Our Products</span></h2>
          <p className="text-dark">
          Explore our wide range of offerings tailored to meet your needs. With a legacy of quality and innovation, our products stand the test of time.
          </p>
        </div>

        <div className="row">
          {products.map((product) => (
            <div key={product.id} className="col-lg-4 col-md-6 product-item">
              <div className="product-img">
                <img src={product.productImage} alt="Product" />
              </div>
              <div className="product-card">
                <h5>{product.productTitle}</h5>
                {/* <p className="text-muted">{product.description}</p> */}
                <Button productId={product.id} />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4">
          <Button productId={`/`} />
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
