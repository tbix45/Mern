import React, { createContext, useReducer, useEffect } from 'react'
import { AppReducer } from './AppReducer';
//initial state
const initialState = {
    watchlist: ([]),
    watched: ([])
};

//create context and export
export const GlobalContext = createContext(initialState)

//provider component
export const GlobalProvider = props => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
}