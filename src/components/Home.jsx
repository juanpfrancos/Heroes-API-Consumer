import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import AddHero from './Addhero'
function Home(){
    return (
        <Router>
            <div className="container">
              <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="collapse navbar-collapse" id="navbarText">
                  <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                      <a className="nav-link" href="#"> <Link to="/">Home</Link><span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#"><Link to="/add">Add Hero</Link></a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
            <Switch>
              <Route path="/add">
                <AddHero />
              </Route>
              <Route path="/">
              </Route>
            </Switch>
        </Router>
    )
}

export default Home