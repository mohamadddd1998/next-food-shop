import Cart from "@/components/cart/Cart";

export const metadata = {
  title: "سبد خرید",
};
const CartPage = () => {
  return (
    <section className="single_page_section layout_padding">
      <div className="container">
        <div className="row">
          <div className="col-md-10 offset-md-1">
            <Cart />
          </div>
        </div>
      </div>
    </section>
  );
};
export default CartPage;
