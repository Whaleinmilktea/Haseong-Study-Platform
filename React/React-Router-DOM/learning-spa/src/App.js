import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Routes } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <p>Welcome to my website!</p>
    </div>
  );
};

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <p>This is the about page.</p>
    </div>
  );
};

const Contact = () => {
  return (
    <div>
      <h1>Contact</h1>
      <p>You can contact me at:</p>
      <ul>
        <li>Phone: 555-555-5555</li>
        <li>Email: me@example.com</li>
      </ul>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/about" exact element={About />}>
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;