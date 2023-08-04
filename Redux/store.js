const { legacy_createStore } = require("redux");
const { default: cartReducer } = require("./cart/reducer");


const store=legacy_createStore(cartReducer)

export default store