import { useState } from "react";
/**
 * maneja la información del formulario y 
 * la entradad de input de las cajas
 */


export const useForm = (initialState={}) => {
    const [valueForm, setValueForm] = useState(initialState)
    /****************************/
    const reset=()=>{
        setValueForm(initialState);
    }
    /****************************/
    const handleInputChange = ({ target }) => {
        setValueForm({
            ...valueForm,
            [target.name]: target.value
        });
    }

    return [valueForm, handleInputChange,reset];
}
