import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const Home = () => {
  return <h1>Home Page</h1>;
};

const Contact = () => {
  return <h1>라우팅처리 된 Contact</h1>;
};

function About() {
  return (
    <div>
      <h1> 중첩 라우팅처리 된 Contact</h1>
      <nav>
        <ul>
          <li>
            <Link to="/about/example1">Example01</Link>
          </li>
          <li>
            <Link to="/about/example2">Example2</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/example1" element={<h2>예시1</h2>} />
        <Route path="/example2" element={<h2>예시2</h2>} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;