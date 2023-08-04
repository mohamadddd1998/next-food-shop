"use client";
import Cartitems from "./Cartitems";
import Checkout from "./Checkout";
import Empty from "@/components/Empty";
import Takhfif from "./Takhfif";
import { totalPrice } from "@/lib/helper";
import { useState } from "react";
import { useSelector } from "react-redux";
export const metadata = {
  title: "سبد خرید",
};
const Cart = () => {
  const cartItems = useSelector((store) => store);
  const [percentage, setPercentage] = useState(0);
  return (
    <>
      {cartItems.length > 0 ? (
        <>
          <Cartitems cartItems={cartItems} />
          <Takhfif setPercentage={setPercentage} />
          <Checkout
            totalPrice={totalPrice(cartItems)}
            percentage={percentage}
          />
        </>
      ) : (
        <Empty message={"سبد خرید شما خالی می باشد"} />
      )}
    </>
  );
};
export default Cart;
