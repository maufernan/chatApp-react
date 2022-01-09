import React, { useState } from 'react'
import './index.css'
import { saveMessage } from '../../services'


const Input = ({socket}) => {

    const [inputValue, setInputValue] = useState('')

    const handleInputChange = ({ target }) => {
        setInputValue(target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault()
        const userId = socket.id
        saveMessage(userId, inputValue, socket)
    }

    return (
        <div className='input__container' >   
            <form onSubmit={onSubmit}>
                <input 
                    type='text' 
                    value={inputValue} 
                    onChange={handleInputChange}
                />
                <button>Enviar</button>
            </form>
        </div>
    )
}

export default Input
