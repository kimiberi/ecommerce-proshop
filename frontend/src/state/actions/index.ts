import { ActionType } from "../action-types"

// OPTION 2: Separate each Action Type (action.type) and Payload (action.payload) Interface

// AFTER: const reducer = (state: RepositoriesState, action: ProductRepositoriesAction | ProductRepositoriesSuccessAction | ProductRepositoriesErrorAction): RepositoriesState => { ... }
interface ProductRepositoriesAction {
    type: ActionType.PRODUCT_LIST_REQUEST
}

interface ProductRepositoriesSuccessAction {
    type: ActionType.PRODUCT_LIST_SUCCESS,
    payload: string[] // contains all that repositories/info we just found
}

interface ProductRepositoriesErrorAction {
    type: ActionType.PRODUCT_LIST_ERROR,
    payload: string // error message
}

// OPTION 2.1
// it represents ALL different possible actions that can be process by ALL different Reducers
// List different types of interface 'action'
export type Action = ProductRepositoriesAction | ProductRepositoriesSuccessAction | ProductRepositoriesErrorAction