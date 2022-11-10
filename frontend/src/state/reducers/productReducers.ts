import { ActionType } from "../action-types";
import { ActionAllProducts, ActionProduct, ActionCart } from "../actions";

interface RepositoriesState {
    loading: boolean;
    products: string[];
    error: string | null; // 'null' means default value for the meantime while you're not assigning anything yet
}

interface RepoProductDetailsState {
    loading: boolean;
    product: {};
    error: string | null; // 'null' means default value for the meantime while you're not assigning anything yet
}

interface RepoCartState {
    loading: boolean;
    products: string[];
    error: string | null; // 'null' means default value for the meantime while you're not assigning anything yet
}

// action -> remember in TS, every action is always be an object that MUST have a type property
// it monitors the action property, (example you mispelled action.pyaloads)

// OPTION 1:
// BEFORE: const reducer = (state: RepositoriesState, action: Action): RepositoriesState => { ... }
// interface Action {
//     type: string;
//     payload?: any; // ?. means may or may not have payload property
// }

const initialState = {
    loading: false,
    error: null,
    products: [],
}

const initialProductState = {
    loading: false,
    error: null,
    product: {},
}

const initialCartState = {
    loading: false,
    error: null,
    products: [],
}

// NOTICE under 'productListReducer': we can easily change the 'products' property that we are returning to any kind of value (example -> products: {} or products: 12345 or products: 'asfgkj')
// To avoid this: we MUST apply the 'RETURN TYPE ANNOTATION' to our 'reducer' function by ALWAYS returning the value of interface type 'RepositoriesState'
export const productListReducer = (state: RepositoriesState = initialState, action: ActionAllProducts): RepositoriesState => {
    // Using separate interface action -> 100% certain as it is equivalent to if (action.type === 'PRODUCT_LIST_REQUEST') { ... }

    switch (action.type) {
        case ActionType.PRODUCT_LIST_REQUEST: 
        return {loading: true, products: [], error: null}
        // loading: true -> we ask new request
        // products: [] -> whatever results we had as we tried to fetch some data don't matter anymore cuz we're trying to search products for now
        case ActionType.PRODUCT_LIST_SUCCESS: 
        return {loading: false, products: action.payload, error: null}
        // loading: false -> no longer loading
        // products: action.payload -> contains all that repositories/info we just found, which we received string[]
        case ActionType.PRODUCT_LIST_ERROR: 
        return {loading: false, products: [], error: action.payload}
        // error: action.payload -> it contains error message
        // products: [] -> reset data to empty array
        default:
            return state
    }
}

export const productReducer = (state: RepoProductDetailsState = initialProductState, action: ActionProduct): RepoProductDetailsState => {
    switch (action.type) {
        case ActionType.PRODUCT_DETAILS_REQUEST: 
        return {loading: true, product: {}, error: null}
        case ActionType.PRODUCT_DETAILS_SUCCESS: 
        return {loading: false, product: action.payload, error: null}
        case ActionType.PRODUCT_DETAILS_ERROR: 
        return {loading: false, product: {}, error: action.payload}
        default:
            return state
    }
}

export const cartReducer = (state: RepoCartState = initialCartState, action: ActionCart): RepoCartState => {
    // Using separate interface action -> 100% certain as it is equivalent to if (action.type === 'CART_ADD_ITEM_REQUEST') { ... }

    switch (action.type) {
        case ActionType.CART_ADD_ITEM_REQUEST: 
        return {loading: true, products: [], error: null}
        // loading: true -> we ask new request
        // products: [] -> whatever results we had as we tried to fetch some data don't matter anymore cuz we're trying to search products for now
        case ActionType.CART_ADD_ITEM_SUCCESS: 
        return {loading: false, products: action.payload, error: null}
        // loading: false -> no longer loading
        // products: action.payload -> contains all that repositories/info we just found, which we received string[]
        case ActionType.CART_ADD_ITEM_ERROR: 
        return {loading: false, products: [], error: action.payload}
        // error: action.payload -> it contains error message
        // products: [] -> reset data to empty array
        default:
            return state
    }
}