import React, {useState} from 'react'
import {db, auth} from '../../firebase'
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import { Button, Form, InputGroup, } from 'react-bootstrap'

function SendMessage() {
    const [message, setMessage] = useState('')
    

  return (
    <div>
        <Form>
        <InputGroup className="mb-auto">
        <Form.Control type="text" value={message} onChange={(e)=> setMessage(e.target.value)} placeholder="Type a message..." />
        <Button>Send</Button>
        </InputGroup>
        </Form>
    </div>
  )
}

export default SendMessage