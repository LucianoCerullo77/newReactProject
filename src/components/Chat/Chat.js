import React, {useState,useEffect} from 'react'
import {db} from '../../firebase'
import LogOut from '../LogOut/LogOut'
import SendMessage from '../SendMessage/SendMessage'

function Chat() {
  const [messages, setMessages] = useState([])
  useEffect(()=> {
    db.collection('messages')
    .orderBy('createdAt')
    .limit(15)
    .onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => ({id: doc.id, message: doc.data()})))
    }
    )
  }, [])
  return (
    <div>
      <h1>Chat</h1>
      <LogOut/>
      {messages.map(({id, message, photoURl}) => (
      <div key={id}>
        <img src={photoURl} alt="userPhoto"/>
        <p>{message.text}</p>
      </div>
    ))}
    <SendMessage/>
  </div>
  )} 

export default Chat