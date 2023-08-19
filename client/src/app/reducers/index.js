import authReducer from "./authReducer";
import alertReducer from "./alertReducer";
import mainReducer from "./mainReducer";

import { combineReducers } from "redux";

const allReducers = combineReducers({
    user: authReducer,
    alert: alertReducer,
    main: mainReducer
});

export default allReducers;