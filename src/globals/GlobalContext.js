import React, {createContext, useReducer, useEffect} from 'react';
import  globalReducer from "./globalReducer";

//Create an initial state
const initialState = {
    backlog: localStorage.getItem('backlog') ? JSON.parse(localStorage.getItem('backlog')) : [],
    played: localStorage.getItem('played') ? JSON.parse(localStorage.getItem('played')) : []
}

//Create a context
export const ContextGlobal = createContext(initialState);

//Providers
export const ProviderGlobal = properties => {
    const[state, dispatch] = useReducer(globalReducer, initialState);

    useEffect(() => {
        localStorage.setItem('backlog', JSON.stringify(state.backlog));
        localStorage.setItem('played', JSON.stringify(state.played));
    }, [state]);

    const addGameToBacklog = game =>{
        dispatch({ type: "ADD_GAME_TO_BACKLOG", payload: game});
    }

    const removeGameFromBacklog = game =>{
        dispatch({ type: "REMOVE_GAME_FROM_BACKLOG", payload: game});
    }

    const addGameToPlayed = game =>{
        dispatch({ type: "ADD_GAME_TO_PLAYED", payload: game});
    }
    
    const removeGameFromPlayed = game =>{
        dispatch({ type: "REMOVE_GAME_FROM_PLAYED", payload: game});
    }

    return(
        <ContextGlobal.Provider value={{backlog: state.backlog, played: state.played, addGameToBacklog, removeGameFromBacklog, addGameToPlayed, removeGameFromPlayed}}>
            {properties.children}
        </ContextGlobal.Provider>
    )
}