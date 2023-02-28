import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { AuthReducer, ForgotPasswordReducer, updateProfileReducer } from './reducers/AuthReducer';


const reducer = combineReducers({
    // Auth
    auth: AuthReducer,
    forgotPassword: ForgotPasswordReducer,

    // Company
    profile: updateProfileReducer,
});

let initialState = {};

const middleware = [thunk];

const Store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default Store;