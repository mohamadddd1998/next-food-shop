import { addToCart,increment,decrement,removeFromCart,clearCart } from "./actionTypes";

export const addToCartAction = (product) => {
    return {
        type: addToCart,
        payload:product
    }
}

export const incrementAction = (productId) => {
    return {
        type: increment,
        payload: productId
    }
}

export const decrementAction = (productId) => {
    return {
        type: decrement,
        payload: productId
    }
}

export const removeFromCartAction = (productId) => {
    return {
        type: removeFromCart,
        payload: productId
    }
}

export const clearCartAction = () => {
    return {
        type: clearCart
    }
}