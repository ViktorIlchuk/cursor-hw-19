import { CHANGE_IS_LOGGED, ADD_TOKEN } from "./types";

const initialState = {
    authTokens: [],
    isLoggedIn: false
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_IS_LOGGED:
            return { ...state, isLoggedIn: action.payload }
        case ADD_TOKEN:
            return { ...state, authTokens: [...state.authTokens, action.payload]}
        default: return state;
    }    
}