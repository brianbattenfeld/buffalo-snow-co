import { useState } from 'react'
import { Link } from 'react-router-dom'
// src/Register.js
import { auth } from './firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import Stats from './Stats'
import RegistrationForm from './RegistrationForm'
import './forms.css'

function Register() {
  return (
    <>
      <section className='page-section center flex-column bg-primary '>
        <div className="container">
          <Stats />
        </div>
        <div className="container">
          <RegistrationForm />
        </div>
      </section>
      <section className="container page-section center flex-column">
        <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vT5LPtdtYNO2PzhEwJbLFWS56aHZjcf4GzTMlp2EpXw3NtZppcCgilCOvAWQ-I1Kg/embed?start=false&loop=false&delayms=3000" frameborder="0" width="1280" height="749" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
      </section>
    </>

  )
}

export default Register