import { combineReducers } from "@reduxjs/toolkit";
import profileReducer from "./profile.reducer";

const rootReducer = combineReducers({
    profile: profileReducer,
});

export default rootReducer;