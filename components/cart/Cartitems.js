import {
  clearCartAction,
  decrementAction,
  incrementAction,
  removeFromCartAction,
} from "@/Redux/cart/actionCreators";
import { calculateOff } from "@/lib/helper";
import Image from "next/legacy/image";
import { useDispatch } from "react-redux";

const Cartitems = ({ cartItems }) => {
  const dispatch = useDispatch();
  return (
    <div className="row gy-5">
      <div className="col-12">
        <div className="table-responsive">
          <table className="table align-middle">
            <thead>
              <tr>
                <th>محصول</th>
                <th>نام</th>
                <th>قیمت</th>
                <th>تعداد</th>
                <th>قیمت کل</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((cartItem, index) => (
                <tr key={index}>
                  <th>
                    <Image
                      className="img-fluid"
                      src={cartItem.primary_image}
                      alt=""
                      width={100}
                      height={100}
                      placeholder="blur"
                      blurDataURL={cartItem.primary_image_blurDataURL}
                      layout="responsive"
                    />
                  </th>
                  <td className="fw-bold">{cartItem.name}</td>
                  <td>
                    <h5>
                      {cartItem.is_sale ? (
                        <>
                          <del>{cartItem.price}</del>
                          <span>{cartItem.sale_price}</span>
                          <span>تومان</span>
                          <div className="text-danger fs-6">
                            {calculateOff(cartItem.sale_price, cartItem.price)}%
                            تخفیف
                          </div>
                        </>
                      ) : (
                        <>
                          <span>{cartItem.price}</span>
                          <span>تومان</span>
                        </>
                      )}
                    </h5>
                  </td>
                  <td>
                    <div className="input-counter">
                      <span
                        className="plus-btn"
                        onClick={() => dispatch(incrementAction(cartItem.id))}
                      >
                        +
                      </span>
                      <div className="input-number">{cartItem.qty}</div>
                      <span
                        className="minus-btn"
                        onClick={() => dispatch(decrementAction(cartItem.id))}
                      >
                        -
                      </span>
                    </div>
                  </td>
                  <td>
                    <span>
                      {cartItem.is_sale
                        ? cartItem.qty * cartItem.sale_price
                        : cartItem.qty * cartItem.price}
                    </span>
                    <span className="ms-1">تومان</span>
                  </td>
                  <td>
                    <a
                      onClick={() =>
                        dispatch(removeFromCartAction(cartItem.id))
                      }
                    >
                      <i className="bi bi-x text-danger fw-bold fs-4 cursor-pointer"></i>
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <button
          className="btn btn-primary mb-4"
          onClick={() => dispatch(clearCartAction())}
        >
          پاک کردن سبد خرید
        </button>
      </div>
    </div>
  );
};
export default Cartitems;
