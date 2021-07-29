import { addItemToCart, clearItemFromCart, removeItemFromCart } from "./cart.util";

const INITIAL_STATE = {
    totalItems: 0,
    coupon: {},
    cart: []
}

export const CART_ACTIONS = {
    ADD_TO_CART: "add_to_cart",
    REMOVE_FROM_CART: "remove_from_cart",
    CLEAR_ITEM_FROM_CART: "clear_item_from_cart",
    SET_COUPONS: "set-coupons"
}

const CartReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case CART_ACTIONS.ADD_TO_CART:
            return {
                ...state,
                totalItems: state.totalItems + 1,
                cart: addItemToCart(state.cart, action.payload)
            }
        case CART_ACTIONS.REMOVE_FROM_CART:
            return {
                ...state,
                totalItems: state.totalItems - 1,
                cart: removeItemFromCart(state.cart, action.payload)
            }
        case CART_ACTIONS.CLEAR_ITEM_FROM_CART:
            return clearItemFromCart(state, action.payload);

        case CART_ACTIONS.SET_COUPONS:
            return {
                ...state,
                coupon: action.payload,
            }
        default:
            return state;
    }
}

export default CartReducer;