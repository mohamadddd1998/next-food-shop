const numberFormat = (number) => {
  return new Intl.NumberFormat().format(number);
};

const handleError = (err) => {
  if (err.response.status == 422) {
    const errors = [];
    Object.keys(err.response.data.message).map((key) => {
      err.response.data.message[key].map((e) => {
        errors.push(e);
      });
    });
    return errors.join();
  }
};
const calculateOff = (sale_price, price) => {
  return 100 - Math.floor((sale_price * 100) / price);
};
const numberOfCart = (cartItems) => {
  let sum = 0;
  if (cartItems.length == 0) {
    return 0;
  }
  for (let i = 0; i < cartItems.length; i++) {
    sum += cartItems[i].qty;
  }
  return sum;
};
const totalPrice = (cartItems) => {
  let sum = 0;
  for (let i = 0; i < cartItems.length; i++) {
    if (cartItems[i].is_sale) {
      sum += cartItems[i].qty * cartItems[i].sale_price;
    } else {
      sum += cartItems[i].qty * cartItems[i].price;
    }
  }
  return sum;
};

export {
  handleError,
  numberFormat,
  calculateOff,
  numberOfCart,
  totalPrice,
};
