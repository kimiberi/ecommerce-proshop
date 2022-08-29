import { ActionType } from "../action-types";
import { Action } from "../actions";

interface RepositoriesState {
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

// NOTICE under 'productListReducer': we can easily change the 'products' property that we are returning to any kind of value (example -> products: {} or products: 12345 or products: 'asfgkj')
// To avoid this: we MUST apply the 'RETURN TYPE ANNOTATION' to our 'reducer' function by ALWAYS returning the value of interface type 'RepositoriesState'
export const productListReducer = (state: RepositoriesState = initialState, action: Action): RepositoriesState => {
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