import React from 'react'
import { BrowserRouter, Routes, Route, Link} from "react-router-dom";

import logo from './logo.svg';
import './App.css';

function App() {
    return (
      <div>
        <nav>
          <ul>
            <li>
              Home
            </li>
            <li>
              MyPage
            </li>
            <li>
              Dashboard
            </li>
          </ul>
        </nav>
      </div>
  )
}


// Home 컴포넌트
function Home () {
  return <h1>Home</h1>
}

// MyPage 컴포넌트
function MyPage () {
  return <h1>MyPage</h1>
}

// Dashboard 컴포넌트
function Dashboard () {
  return <h1>Dashboard</h1>
}

export default App;
