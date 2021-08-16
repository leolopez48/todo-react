import { createStore, combineReducers } from "redux";
import taskReducer from './taskReducer';
import themeReducer from './themeReducer';

const rootReducer = combineReducers({
    taskReducer: taskReducer,
    themeReducer: themeReducer,
})

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store;