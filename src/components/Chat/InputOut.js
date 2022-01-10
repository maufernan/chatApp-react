import React, { useContext } from 'react'
import { userContext } from '../../auth/userContext'
import { useForm } from '../../hooks/useForm'
import { saveMessage } from '../../services'

const InputOut = () => {
    const [{ message }, handleInputChange, reset] = useForm({ message: '' })

    
    const socket = useContext(userContext)

    /*************************************/
    const handleSubmit = (e) => {
        e.preventDefault();
        if (message.trim().length <= 1) {
            return;
        }
        saveMessage(socket.id,message,socket);
        //console.log(message);
        reset();
    }
    /*************************************/
    return (
        <div className='my-3 p-3 bg-body rounded shadow'>
            <form onSubmit={handleSubmit}>
                <div className='input-group mb-3'>
                    <input type='text' name='message' className='form-control'
                        placeholder='message...' autoComplete='off'
                        onChange={handleInputChange} value={message} />
                    <button className='btn btn-outline-secondary' type='submit'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-send" viewBox="0 0 16 16">
                            <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z" />
                        </svg>
                    </button>
                </div>
            </form>
        </div>
    )
}

export default InputOut;
