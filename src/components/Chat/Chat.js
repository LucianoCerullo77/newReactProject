import React, {useState, useEffect}  from 'react'
import { db } from '../../firebase';
import LogOut from '../LogOut/LogOut'

function Chat() {
  const [messages, setMessages] = useState([])
  useEffect(() => {
    db.collection('messages').orderBy('createdAt').limit(30).onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => doc.data()))
    })
  },[]);
  return (
    <div>
      <LogOut/>
      {messages.map(({id, text, photoURL})=> {
        <div key={id}>
          <img src={photoURL} alt="userPhoto"/>
          <p>{text}</p>
        </div>
      })}

    </div>
  )
}

export default Chat