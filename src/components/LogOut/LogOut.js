import React from 'react'
import {auth} from '../../firebase'
import { Button } from 'react-bootstrap'

function LogOut() {
  return (
    <div>
        <Button onClick={()=> {auth.signOut()}}>LogOut</Button>
    </div>
  )
}

export default LogOut