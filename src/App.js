import { useEffect, useState } from 'react';
import './App.css';
import io from 'socket.io-client'
import Chat from './components/Chat/index'
import ListMessage from './components/Messages/ListMessage';
import InputOut from './components/Chat/InputOut';
import { userContext } from './auth/userContext';



const LOCAL_HOST = 'http://localhost:5000'

function App() {

  const [socket, setSoket] = useState(null)

  useEffect(() => {

    const socket = io(LOCAL_HOST)
    setSoket(socket)

  }, [])

  return (
    <div className="bg-light appContainer">
      <h1>Chat App</h1>
      <userContext.Provider value={
        socket
      }>
        <ListMessage />

        <Chat socket={socket} />
        <InputOut />
      </userContext.Provider>


    </div>
  );
}

export default App;
