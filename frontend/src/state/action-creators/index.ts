import axios from "axios"
import { Dispatch } from "redux"
import { ActionType } from "../action-types"
import { Action } from "../actions"

// make request to NPM API and manually dispatch action directly to the redux store and get those all process by a reducer
// we'll use redux thunk in order to write up ASYNC action creator
export const productRepositories = () => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({ type: ActionType.PRODUCT_LIST_REQUEST })

    try {
        const { data } = await axios.get('/api/products')

        dispatch({
            type: ActionType.PRODUCT_LIST_SUCCESS,
            payload: data
        })
    } catch (err) {
        // NOTE: if you get this error:"Object is of type 'unknown'", update the tsconfig.json
            // tsconfig.json -> "useUnknownInCatchVariables": false
            // works only on Typescript v4.4 or higher
        dispatch({
            type: ActionType.PRODUCT_LIST_ERROR,
            payload: err.message
        })
    }
  }
}
