import { combineReducers } from "redux"
import { productListReducer } from "./productReducers"

const reducer = combineReducers({
  productList: productListReducer,
})

export default reducer

// new type that describes the type of data inside the redux store
export type RootState = ReturnType<typeof reducer>
