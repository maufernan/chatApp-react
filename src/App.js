import { useEffect, useState } from 'react';
import './App.css';
import io from 'socket.io-client'
import Chat from './components/Chat/index'

const LOCAL_HOST = 'http://localhost:5000'

function App() {

  const [socket, setSoket] = useState(null)

  useEffect(()=>{

    const socket = io(LOCAL_HOST)
    setSoket(socket)
    
  },[])

  return (
    <div className="app__container">
      <h1>Chat App</h1>
      <Chat socket={socket}/>
    </div>
  );
}

export default App;
