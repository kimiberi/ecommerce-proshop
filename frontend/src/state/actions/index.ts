import { ActionType } from "../action-types"

// OPTION 2: Separate each Action Type (action.type) and Payload (action.payload) Interface

// AFTER: const reducer = (state: RepositoriesState, action: ProductRepositoriesAction | ProductRepositoriesSuccessAction | ProductRepositoriesErrorAction): RepositoriesState => { ... }
interface ProductsRepositoriesAction {
    type: ActionType.PRODUCT_LIST_REQUEST
}

interface ProductsRepositoriesSuccessAction {
    type: ActionType.PRODUCT_LIST_SUCCESS,
    payload: string[] // contains all that repositories/info we just found
}

interface ProductsRepositoriesErrorAction {
    type: ActionType.PRODUCT_LIST_ERROR,
    payload: string // error message
}

// =============================================
interface ProductRepoDetailsAction {
    type: ActionType.PRODUCT_DETAILS_REQUEST
}

interface ProductRepoDetailsSuccessAction {
    type: ActionType.PRODUCT_DETAILS_SUCCESS,
    payload: {} // contains all that repositories/info we just found
}

interface ProductRepoDetailsErrorAction {
    type: ActionType.PRODUCT_DETAILS_ERROR,
    payload: string // error message
}

// =============================================

interface CartRepositoriesAction {
    type: ActionType.CART_ADD_ITEM_REQUEST
}
interface CartRepositoriesSuccessAction {
    type: ActionType.CART_ADD_ITEM_SUCCESS,
    payload: string[] // contains all that repositories/info we just found
}
interface CartRepoDetailsErrorAction {
    type: ActionType.CART_ADD_ITEM_ERROR,
    payload: string // error message
}

// OPTION 2.1
// it represents ALL different possible actions that can be process by ALL different Reducers
// List different types of interface 'action'
export type ActionAllProducts = ProductsRepositoriesAction | ProductsRepositoriesSuccessAction | ProductsRepositoriesErrorAction
export type ActionProduct = ProductRepoDetailsAction | ProductRepoDetailsSuccessAction | ProductRepoDetailsErrorAction
export type ActionCart = CartRepositoriesAction | CartRepositoriesSuccessAction | CartRepoDetailsErrorAction