import { combineReducers } from "redux"
import { productListReducer, productReducer } from "./productReducers"

const reducer = combineReducers({
  allProductsList: productListReducer,
  productDetails: productReducer,
})

export default reducer

// new type that describes the type of data inside the redux store
export type RootState = ReturnType<typeof reducer>
