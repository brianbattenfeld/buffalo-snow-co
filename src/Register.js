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
    <section className='page-section center flex-column bg-primary '>
      <div className="container">
        <Stats />
      </div>
      <div className="container">
        <RegistrationForm />
      </div>
    </section>
  )
}

export default Register