import { createContext } from "react";

export const ApiDataContext = createContext();

export const ApiDataProvider = ({children}) => {
    return (
        <ApiDataContext.Provider
        value={{}}
        >
          {children}
        </ApiDataContext.Provider>
        )
}