import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Profile from './Profile'
import Register from './Register'
import VerifyEmail from './VerifyEmail';
import Login from './Login'
import Logo from "./assets/logo-cleaned.png"

function App() {
  return (
    <div className="">
      <section className="container page-section center flex-column">
        <div className="row align-items-center">
          <div className="col-md-6">
            <img src={Logo} alt="Buffalo Snow Co" height="350" />
          </div>
          <div className="col-md-6 text-left">
            <h1 className="text-primary">Buffalo Snow Co</h1>
            <div className="my-4">
              <h2>Mobilizing the City of Good Neighbors. Plowed public sidewalks are a basic human right.</h2>
              <p>Linking citizens with citizens to address the dangers presented by snow events around the city.</p>
            </div>
          </div>
        </div>
      </section>
      <Router>
        <Switch>
          {/* <Route exact path="/" component={Profile} /> */}
          <Route exact path="/" component={Register} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path='/verify-email' component={VerifyEmail} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
