import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
// import Matchup from './pages/Matchup';
// import Vote from './pages/Vote';

function App() {
  return (
    <Router>
      <Home />
    </Router>
  );
}

export default App;
