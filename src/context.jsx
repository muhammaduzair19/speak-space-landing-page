import { createContext, useContext, useState } from "react";


const Context = createContext()


export const ContextProvider = ({ children }) => {

    const [selected, setSelected] = useState('Home')
    return (
        <Context.Provider value={{ selected, setSelected }} >
            {children}
        </Context.Provider>
    )
}


export const useContextProvider = () => useContext(Context)