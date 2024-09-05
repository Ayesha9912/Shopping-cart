import { combineReducers } from "redux";
import { reducerModal } from "./Reducer1";
import { cartReducer } from "./Reducer2";

const AllReducers = combineReducers({
    reducerModal: reducerModal,
    cartReducer: cartReducer
})

export default AllReducers;