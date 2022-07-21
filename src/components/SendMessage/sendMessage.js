import React, {useState} from 'react'
import {db, auth} from '../../firebase'
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import { Button, Form, InputGroup, } from 'react-bootstrap'

function SendMessage() {
    const [message, setMessage] = useState('')
    
    async function sendMessage(e) {
        e.preventDefault()
        await db.collection('messages').add({
            message: message,
            user: auth.currentUser.displayName,
            photoURL: auth.currentUser.photoURL,
            userId: auth.currentUser.uid,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        })
        setMessage('')
    }

  return (
    <div>
        <Form onSubmit={sendMessage}>
        <InputGroup className="mb-auto">
        <Form.Control type="text" value={message} onChange={(e)=> setMessage(e.target.value)} placeholder="Type a message..." />
        </InputGroup>
        <Button type="submit">Send</Button>
        </Form>
    </div>
  )
}

export default SendMessage