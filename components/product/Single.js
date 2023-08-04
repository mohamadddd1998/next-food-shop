"use client";
import { addToCartAction, incrementAction } from "@/Redux/cart/actionCreators";
import { calculateOff } from "@/lib/helper";
import Image from "next/legacy/image";
import { useDispatch, useSelector } from "react-redux";

const Single = ({ product }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store);
  const handleAddToCart = (id) => {
    let findItem = cartItems.findIndex((cartItem) => {
      return cartItem.id == id;
    });
    if (findItem != -1) {
      dispatch(incrementAction(id));
      return;
    }
    dispatch(addToCartAction(product));
    return;
  };
  //const [numberOfBuy, setNumberOfBuy] = useState(1);
  /*const inputNumber = (operator) => {
    switch (operator) {
      case "+":
        setNumberOfBuy((prev) => {
          if (product.quantity > numberOfBuy) {
            return prev + 1;
          }
          return prev;
        });
        break;
      case "-":
        setNumberOfBuy((prev) => {
          if (numberOfBuy > 1) {
            return prev - 1;
          }
          return prev;
        });
        break;
    }
  };*/
  return (
    <section className="single_page_section layout_padding">
      <div className="container">
        <div className="row">
          <div className="col-md-10 offset-md-1">
            <div className="row gy-5">
              <div className="col-sm-12 col-lg-6">
                <h3 className="fw-bold mb-4">{product.name}</h3>
                <h5>
                  <span style={{color:'red'}}>قیمت : </span>
                  {product.is_sale ? (
                    <>
                      <del>{product.price}</del>
                      <span>{product.sale_price}</span>
                      <span>تومان</span>
                      <div className="text-danger fs-6">
                        {calculateOff(product.sale_price, product.price)}% تخفیف
                      </div>
                    </>
                  ) : (
                    <>
                      <span>{product.price}</span>
                      <span>تومان</span>
                    </>
                  )}
                </h5>
                <p>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است.
                </p>

                <div className="mt-5 d-flex">
                  <button
                    className="btn-add"
                    onClick={() => handleAddToCart(product.id)}
                  >
                    افزودن به سبد خرید
                  </button>
                  {/*<div className="input-counter ms-4">
                    <span className="plus-btn" onClick={() => inputNumber("+")}>
                      +
                    </span>
                    <div className="input-number">{numberOfBuy}</div>
                    <span
                      className="minus-btn"
                      onClick={() => inputNumber("-")}
                    >
                      -
                    </span>
                </div>*/}
                </div>
              </div>
              <div className="col-sm-12 col-lg-6">
                <div
                  id="carouselExampleIndicators"
                  className="carousel slide"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-inner">
                    <div className="carousel-item active">
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
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Single;
