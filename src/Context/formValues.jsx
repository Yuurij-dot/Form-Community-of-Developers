import { createContext, useState } from "react";

export const MyContext = createContext()

const MyProvider = ({children}) => {
    const [formValues, setFormValues] = useState({
        nome: 'yuri',
        email: '',
        phone: '',
        skill: '',
        chalenge: '',
    })

    return(
        <MyContext.Provider value={{formValues, setFormValues}}>
            {children}
        </MyContext.Provider>
    )
}

export default MyProvider