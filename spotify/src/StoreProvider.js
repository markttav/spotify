import React,{
    createContext,
    useContext,
    useReducer
} from 'react'

export const StoreProviderContext = createContext()

export const StoreProvider = (({initialState, reducer, children}) => (
    <StoreProviderContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StoreProviderContext.Provider>
))

export const UseStore = () => useContext(StoreProviderContext);