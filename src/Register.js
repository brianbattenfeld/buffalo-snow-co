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
      <section py-5 className="container page-section py-5 ">
        <h1 className="">Organizational Information</h1>
        {/* <div className="row py-5"> */}
        {/* <div className="col-md-4 mb-4">
            <div className="text-left">

              
            </div>
          </div> */}

        {/* <div className="col-md-8">
            <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vT5LPtdtYNO2PzhEwJbLFWS56aHZjcf4GzTMlp2EpXw3NtZppcCgilCOvAWQ-I1Kg/embed?start=false&loop=false&delayms=3000" frameborder="0" width="100%" height="400" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>=
          </div> */}
        {/* </div> */}
        <p><strong>Primary Contact</strong><br />
          Kevin Christner<br />
          kjc@richmond-cap.com<br />
          716. 640.2779</p>
        <a href="https://docs.google.com/document/d/1YRyQPfG1Zds6sKD1uZx0MstdFH2Nt9qZ/edit?usp=sharing&ouid=105032006586378691834&rtpof=true&sd=true" target="_blank">Press Release</a>

      </section>
    </>

  )
}

export default Register