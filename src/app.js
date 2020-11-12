import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Heroes from './components/heroes'
import Addhero from './components/addhero'

function App() {
  return (
    <main>
    <Router>
      <Route path="/" exact component={Heroes} />
      <Route path="/add" component={Addhero} />
    </Router>
    </main>
  );
}

export default App;
