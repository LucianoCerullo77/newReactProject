import React, {useState} from 'react'
import {db, auth} from '../../firebase'
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import { Button, Form, } from 'react-bootstrap'

function SendMessage() {
    const [message, setMessage] = useState('')
    async function sendMessage(e) {
        e.preventDefault()
        const {uid, photoURL} = auth.currentUser
        
        await db.collection('messages').add({
            text: message,
            photoURL,
            uid,
            createdAt: new firebase.firestore.FieldValue.serverTimestamp()
        })
        setMessage('')
    }

  return (
    <div>
        <Form onSubmit={sendMessage}>
            <Form.Text value={message} onChange={(e)=> setMessage.target.value} type="text" placeholder="Type a message..."/>
            <Button type="submit">Send</Button>
        </Form>
    </div>
  )
}

export default SendMessage