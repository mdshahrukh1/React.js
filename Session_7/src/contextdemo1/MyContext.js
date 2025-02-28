import { createContext, useContext, useState } from "react";

const MyContext = createContext(); //Creating Context

//For providing context as provider
function MyContextProvider({ Children }) {
    const [data, setData] = useState('Msg from Grand Grand Parent');
    return ( 
        <MyContext.Provider value = {{data, setData}}>
            {Children}
        </MyContext.Provider>
     );
}

export default MyContextProvider;

//below one is to use Context to all other Components
export const useMyContext=() =>{
    return useContext(MyContext);
}