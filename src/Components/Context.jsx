import React, { createContext, useState, } from "react";
export const DarkModeContext = createContext()


const Context = ({children}) => {
    const [dark, setDark] = useState("off")
    return (
   <DarkModeContext.Provider value={{dark, setDark}}>
   {children}
   </DarkModeContext.Provider>
    );
}

export default Context;
