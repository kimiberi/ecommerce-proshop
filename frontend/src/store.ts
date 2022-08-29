import { combineReducers, applyMiddleware } from "redux"
import { legacy_createStore as createStore } from 'redux'
import { configureStore } from "@reduxjs/toolkit"
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"
import { productListReducer } from "./state/reducers/productReducers"

// this list will show in Redux tools
const reducer = combineReducers({
  productList: productListReducer,
})

const initialState = {}

const middleware = [thunk]

// const store = createStore(
//   reducer,
//   initialState,
//   composeWithDevTools(applyMiddleware(...middleware))
// )

const store = configureStore({
  reducer
})

export default store
