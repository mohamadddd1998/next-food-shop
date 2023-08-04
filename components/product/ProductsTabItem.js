import { addToCartAction, incrementAction } from "@/Redux/cart/actionCreators"
import Image from "next/legacy/image"
import Link from "next/link"
import { useDispatch, useSelector } from "react-redux"

const ProductsTabItem = ({ product }) => {
  const dispatch = useDispatch()
  const cartItems = useSelector((store) => store)
  const handleAddToCart = (id) => {
    let findItem = cartItems.findIndex((cartItem) => {
      return cartItem.id == id
    })
    if (findItem != -1) {
      dispatch(incrementAction(id))
      return
    }
    dispatch(addToCartAction(product))

    return
  }
  return (
    <div className="col-sm-6 col-lg-4">
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
                <span className="options-price">قیمت : </span>
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
              <button onClick={() => handleAddToCart(product.id)}>
                <i className="bi bi-cart-fill text-white fs-5"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ProductsTabItem
