import { combineReducers } from "redux";
import ShopReducer from './ShopReducer/ShopReducer';
import CartReducer from './CartReducer/CartReducer';

const rootReducer = combineReducers({
    Shop: ShopReducer,
    Cart: CartReducer
})

export default rootReducer;