import {
  addToCart,
  increment,
  decrement,
  removeFromCart,
  clearCart,
} from "./actionTypes";

/*const initialState =
  typeof window !== "undefined"
    ? localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : []
    : [];*/
const initialState = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];

//const initialState=[]

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case addToCart:
      /* let findItem = state.findIndex((item) => {
        return item.id == action.payload.product.id;
      });
      if (findItem != -1) {
        if (
          state[findItem].qty + action.payload.qty >
          state[findItem].quantity
        ) {
          return state;
        }
        state[findItem].qty += action.payload.qty;
        return state;
      }*/

      state = [...state, { ...action.payload, qty: 1 }];
      break;
    case increment:
      let incrementItem = state.map((item) => {
        if (item.id == action.payload && item.quantity > item.qty) {
          item.qty = item.qty + 1;
          return item;
        }
        return item;
      });
      state = [...incrementItem];
      break;
    case decrement:
      let decrementItem = state.map((item) => {
        if (item.id == action.payload && item.qty > 1) {
          item.qty = item.qty - 1;
          return item;
        }
        return item;
      });
      state = [...decrementItem];
      break;
    case removeFromCart:
      let removeItem = state.filter((item) => item.id != action.payload);
      state = [...removeItem];
      break;
    case clearCart:
      localStorage.clear();
      state = [];
      return state;
      break;
    default:
      return state;
      break;
  }
  localStorage.setItem("cart", JSON.stringify(state));
  return state;
};
export default cartReducer;
