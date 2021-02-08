import { CHANGE_IS_LOGGED, ADD_TOKEN } from "./types";

export const changeIsLogged = boolean => ({
    type: CHANGE_IS_LOGGED,
    payload: boolean
})

export const addToken = token => ({
    type: ADD_TOKEN,
    payload: token
})