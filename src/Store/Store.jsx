import {createStore} from 'redux';
import AllReducers from '../Reducer/AllReducers';

export const store = createStore(AllReducers , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


