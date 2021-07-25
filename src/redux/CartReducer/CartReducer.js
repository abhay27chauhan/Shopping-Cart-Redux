import { addItemToCart } from "./cart.util";

const INITIAL_STATE = {
    totalItems: 0,
    cart: []
}

export const CART_ACTIONS = {
    ADD_TO_CART: "add_to_cart",
    REMOVE_FROM_CART: "remove_from_cart",
    CLEAR_ITEM_FROM_CART: "clear_item_from_cart"
}

const CartReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case CART_ACTIONS.ADD_TO_CART:
            return {
                totalItems: state.totalItems + 1,
                cart: addItemToCart(state.cart, action.payload)
            }
        default:
            return state;
    }
}

export default CartReducer;