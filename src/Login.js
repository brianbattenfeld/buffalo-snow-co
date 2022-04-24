import { useState } from 'react'
import { Link } from 'react-router-dom'
import './forms.css'

function Login() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  return (
    <div className='center'>
      <div className='auth'>
        <h1>Log in</h1>
        <div className="row">
          <div className="col-md-6 offset-md-3">
            {error && <div className='auth__error'>{error}</div>}
            <form name='login_form'>
              <input
                className="form-control"
                type='email'
                value={email}
                required
                placeholder="Enter your email"
                onChange={e => setEmail(e.target.value)} />

              <input
                className="form-control"
                type='password'
                value={password}
                required
                placeholder='Enter your password'
                onChange={e => setPassword(e.target.value)} />

              <button type='submit'>Login</button>
            </form>
          </div>
        </div>
        <p>
          Don't have and account?
          <Link to='/register'>Create one here</Link>
        </p>
      </div>
    </div >
  )
}

export default Login