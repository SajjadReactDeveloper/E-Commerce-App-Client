import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/E-Commerce/Home/Home';
import Login from "./components/E-Commerce/Login/Login";
import Signup from "./components/E-Commerce/SignUp/Signup";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <Router>
      <div className="App">
      <Switch>
        <Route path = "/" exact component={Home}/>
        <Route path = "/login" exact component={Login}/>
        <Route path = "/signup" exact component={Signup}/>
      </Switch>
      </div>
    </Router>
  );
}

export default App;
