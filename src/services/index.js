
export const saveMessage = (id, message, socket) => {
    
    socket.emit('client_newMessage', {message, id})
    socket.on('server_recieveMessage', (response) => {
        console.log('response ', response)
    })

}