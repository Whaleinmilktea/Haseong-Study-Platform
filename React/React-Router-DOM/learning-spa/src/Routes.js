import { Route, Switch } from "react-router-dom";
import Home from "./components/Home"
import Contact from "./components/Contact"
import About from "./components/About";

const Routes = () => {
  <Switch>
    <Route exact path="/" Component={Home}>Home</Route>
    <Route path="/contact" Component={Contact}>Contact</Route>
    <Route path="/about" Component={About}>About</Route>
  </Switch>
}

export default Routes;