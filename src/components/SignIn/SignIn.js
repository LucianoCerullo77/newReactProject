import React from 'react'
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import { auth } from '../../firebase'
import { Button } from 'react-bootstrap'

function SignIn() {
  function signInWithGoogle() {
    auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
  }

  return (
    <div>
      <Button onClick={signInWithGoogle}>Sign In With Google</Button>
    </div>
  )
}

export default SignIn