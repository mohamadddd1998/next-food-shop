import Image from "next/legacy/image";
import Link from "next/link";

const Related = ({ products }) => {
  return (
    <section className="food_section my-5">
      <div className="container">
        <div className="row gx-3">
          {products.map((product, index) => (
            <div className="col-sm-6 col-lg-3" key={index}>
              <div className="box">
                <div>
                  <div className="img-box">
                    <Link href={`/products/${product.slug}`}>
                      <Image
                        className="img-fluid"
                        src={product.primary_image}
                        alt=""
                        width={366}
                        height={244}
                        placeholder="blur"
                        blurDataURL={product.primary_image_blurDataURL}
                        layout="responsive"
                      />
                    </Link>
                  </div>
                  <div className="detail-box">
                    <h5>{product.name}</h5>
                    <p>{product.description}</p>
                    <div className="options">
                      <h6>
                        {product.is_sale ? (
                          <>
                            <del>{product.price}</del>
                            <span>{product.sale_price}</span>
                          </>
                        ) : (
                          <span>{product.price}</span>
                        )}
                        <span>تومان</span>
                      </h6>
                      <a href="">
                        <i className="bi bi-cart-fill text-white fs-5"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Related;
