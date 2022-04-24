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
      <div className='auth py-5 mx-5 text-white'>
        <h2 className="">Join the collective</h2>
        <p>Create your account</p>
        {error && <div className='auth__error'>{error}</div>}
        <form name='registration_form' onSubmit={register}>
          <div className="row mb-4 form-group">
            <div className="col-md-4">
              <input
                className="form-control"
                type='email'
                value={email}
                placeholder="Enter your email"
                required
                onChange={e => setEmail(e.target.value)} />
            </div>
            <div className="col-md-4">
              <input
                className="form-control"
                type='password'
                value={password}
                required
                placeholder='Enter your password'
                onChange={e => setPassword(e.target.value)} />
            </div>
            <div className="col-md-4">

              <input
                className="form-control"
                type='password'
                value={confirmPassword}
                required
                placeholder='Confirm password'
                onChange={e => setConfirmPassword(e.target.value)} />
            </div>
          </div>
          <div className="row form-group">
            <div className="col-md-6 offset-md-3">
              <button type='submit' className="btn btn-secondary">Register</button>
            </div>
          </div>
        </form>
        <span className="text-white">
          Already have an account?
          <Link to='/login'> Login</Link>
        </span>
      </div>
    </div>
  )
}

export default RegistrationForm