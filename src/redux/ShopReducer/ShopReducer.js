import { SHOP_DATA } from '../../data/data.js'

const INITIAL_STATE = {
    products: SHOP_DATA
}

const ShopReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){

        default:
            return state;
    }
}

export default ShopReducer;