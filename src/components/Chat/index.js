import React, { useEffect } from 'react'
import Input from '../Input'
import './index.css'


const Chat = ({socket}) => {


    useEffect(()=> {
        
        console.log('socket', socket)
        
        if (socket) {
            socket.on('server_loadMessages', (messages) => {
                console.log(messages)
            })
        }
    },[socket])

    return (
        <div className='my-3 p-3 bg-body rounded shadow-sm'>
            <Input socket={socket} />
        </div>
    )
}

export default Chat
