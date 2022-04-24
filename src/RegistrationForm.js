import { useState } from 'react'
import { Link } from 'react-router-dom'
// src/Register.js
import { auth } from './firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import Stats from './Stats'
import './forms.css'

function RegistrationForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')

  const validatePassword = () => {
    let isValid = true
    if (password !== '' && confirmPassword !== '') {
      if (password !== confirmPassword) {
        isValid = false
        setError('Passwords does not match')
      }
    }
    return isValid
  }

  const register = e => {
    e.preventDefault()
    setError('')
    if (validatePassword()) {
      // Create a new user with email and password using firebase
      createUserWithEmailAndPassword(auth, email, password)
        .then((res) => {
          console.log(res.user)
        })
        .catch(err => setError(err.message))
    }
    setEmail('')
    setPassword('')
    setConfirmPassword('')
  }

  return (
    <div className="">
      <div className='auth py-5 mx-5'>
        <h2 className="text-white">Join the collective</h2>
        {error && <div className='auth__error'>{error}</div>}
        <form name='registration_form' onSubmit={register}>
          <div className="row">
            <div className="col-md-4">
              <input
                className=""
                type='email'
                value={email}
                placeholder="Enter your email"
                required
                onChange={e => setEmail(e.target.value)} />
            </div>
            <div className="col-md-4">
              <input
                className=""
                type='password'
                value={password}
                required
                placeholder='Enter your password'
                onChange={e => setPassword(e.target.value)} />
            </div>
            <div className="col-md-4">

              <input
                className=""
                type='password'
                value={confirmPassword}
                required
                placeholder='Confirm password'
                onChange={e => setConfirmPassword(e.target.value)} />
            </div>
          </div>

          <button type='submit' className="btn btn-light">Register</button>
        </form>
        {/* <span>
                Already have an account?
                <Link to='/login'>login</Link>
              </span> */}
      </div>
    </div>
  )
}

export default RegistrationForm