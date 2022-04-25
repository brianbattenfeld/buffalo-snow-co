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
      <section className='page-section section-sm center flex-column bg-primary '>
        <div className="container">
          <Stats />
        </div>
      </section>
      <section py-5 className="container page-section py-5 ">
        <h1 className="">Press Release</h1>
        <p><strong>Contact</strong><br />
          Kevin Christner<br />
          kjc@richmond-cap.com<br />
          716. 640.2779</p>

        <p>Buffalo Snowplow Collective<br />
          Mobilizing the City of Good Neighbors<br />
          Plowed Sidewalks as a Human Right<br />
          FOR IMMEDIATE RELEASE: 4.24.22</p>

        <p>Last winter became an inflection point anyone living within the city limits of Buffalo has already dealt with for years: unplowed sidewalks make getting around difficult, at best. At worst, they are dangerous and disproportionately affect underserved and elderly residents. The city has struggled to address this issue and from that came a kernel of an idea: rally the community around this pain point. The Buffalo Snowplow Collective wants to democratize sidewalk snow removal to ensure Buffalo’s 1,400 miles of sidewalks are free of snow.  The company will develop an app that identifies the most common sidewalk routes Buffalo residents use, uses weather reports to determine how many snow removal engineers will be needed the following day, who will be financially compensated for clearing the snow.  By creating a distributed app to assign snow removal routes, the company will put control into the hands of snow removal engineers, our neighbors.</p>
        <p>Using crowdsourcing, the company will accomplish its goal in the absolute most cost effective way. Buffalo Snowplow Collective will also issue cryptocurrency coins to early adopters, benefactors, and snow removal engineers after they complete jobs. The coins provide a voice in governance, similar to a co-op model.  If the company becomes successful, it may make future distributions, allowing all snow removal engineers to share in the company’s prosperity.  Most importantly, with navigable sidewalks, injuries will decrease, lowering insurance costs, and significantly reducing the number of annoying TV commercials and billboards directing you to repeatedly press the same number on your phone in a mindless manner!  What used to be a source of dread during our inevitable Buffalo snowfalls, can now be a revenue channel for the average resident.  The Buffalo Snowplow Collective will ensure all of Buffalo's citizens have the basic human right of cleared sidewalks!
        </p>
        {/* <div className="row py-5"> */}

      </section>

      <section className='page-section section-sm center flex-column bg-primary '>
        <div className="container">
          <RegistrationForm />
        </div>
      </section>
    </>

  )
}

export default Register