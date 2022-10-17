// Just list and access ALL different action types
// instead of multiple string and avoid error, it is advisable to create list of it
// We can now use it (example: ActionType.PRODUCT_LIST_REQUEST)
export enum ActionType {
    PRODUCT_LIST_REQUEST = 'PRODUCT_LIST_REQUEST',
    PRODUCT_LIST_SUCCESS = 'PRODUCT_LIST_SUCCESS',
    PRODUCT_LIST_ERROR = 'PRODUCT_LIST_ERROR',
    PRODUCT_DETAILS_REQUEST = 'PRODUCT_DETAILS_REQUEST',
    PRODUCT_DETAILS_SUCCESS = 'PRODUCT_DETAILS_SUCCESS',
    PRODUCT_DETAILS_ERROR = 'PRODUCT_DETAILS_ERROR',
}