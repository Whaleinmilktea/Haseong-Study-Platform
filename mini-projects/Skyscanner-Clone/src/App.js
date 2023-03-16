import './App.css';
import { Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Footer from './component/Footer';
import Header from './component/Header';


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
