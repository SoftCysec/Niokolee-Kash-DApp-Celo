import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.js';
import Borrow from './pages/Borrow.js';
import Repay from './pages/Repay.js';
import About from './pages/About.js';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" component={Home} />
          <Route path="/borrow" component={Borrow} />
          <Route path="/repay" component={Repay} />
          <Route path="/about" component={About} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
