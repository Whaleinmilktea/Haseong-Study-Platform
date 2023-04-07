import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import styled from "styled-components";
import Dashboard from "./pages/Dashboard";
import Routine from "./pages/Routine";
import Scheduler from "./pages/Scheduler";
import Todo from "./pages/Todo";
import Addform from "./components/Addform";
import "./App.css";

const StyledApp = styled.div`
  width: 400px;
  height: 100vh;
  margin: 0 auto;
`;

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-around;

  & button {
    all: unset;
    cursor: pointer;
    padding: 10px;
  }

  & a {
    all: unset;
    font-size: 15px;
    color: #60B0DA;
    cursor: pointer;
  }
`;

const StyledAddForm = styled.div`
  display: block;
  margin-bottom: 20px;
`;

const StyledRoutes = styled.div`
  display: block;
  width: 100%;
`;

function App() {
  return (
    <BrowserRouter>
      <StyledApp className="App">
        <StyledNav>
          <ul>
            <button>
              <Link to="/">Dashboard</Link>
            </button>
            <button>
              <Link to="routine">Routine</Link>
            </button>
            <button>
              <Link to="todo">To do</Link>
            </button>
            <button>
              <Link to="scheduler">Scheduler</Link>
            </button>
          </ul>
        </StyledNav>
        <StyledAddForm>
          <Addform />
        </StyledAddForm>
        <StyledRoutes>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="routine" element={<Routine />} />
            <Route path="todo" element={<Todo />} />
            <Route path="scheduler" element={<Scheduler />} />
          </Routes>
        </StyledRoutes>
      </StyledApp>
    </BrowserRouter>
  );
}

export default App;
