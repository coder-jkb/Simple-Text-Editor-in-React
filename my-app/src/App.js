import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import {useState} from 'react'
import Alert from './components/Alert';
import About from './components/About';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
      // toggle mode variables
      var navDarkClass = "navbar-dark bg-dark";
      var navLightClass = "navbar-light bg-light";
      const [mode, setMode] = useState("dark");
      const [navModeClass, setNavModeClass] = useState(navLightClass);
      const [alert, setAlert] = useState(null);

const setNewAlert = (type, message) => {
  setAlert({
    msg: message,
    type: type
  })
  setTimeout(() => {
    setAlert(null);
  }, 4000);
};

const handleToggleMode = () => {
        if(mode === "dark"){
            setMode("light")
            setNavModeClass(navDarkClass);
            document.body.style.backgroundColor= "#112426";
            setNewAlert("success","Enabled dark mode");
        }
        else{
            setMode("dark")
            setNavModeClass(navLightClass);
            document.body.style.backgroundColor= "white"
            setNewAlert("success","Enabled light mode");
        }
    };
  
  return (
    <div>
      {/* Toggle switch  source :
        https://getbootstrap.com/docs/5.0/forms/checks-radios/#switches
        */}
      <Router>
        <Navbar title="Textify - A Text Utils App" navModeClass={navModeClass} handleToggleMode={handleToggleMode} mode={mode} />
        <Alert alert={alert} /> 
        <Switch>
            <Route exact path="/Simple-Text-Editor-in-React">
              <Home heading="Let's play with text" mode={mode} setNewAlert={setNewAlert} />
            </Route>
            <Route exact path="/Simple-Text-Editor-in-React/about">
              <About mode={mode}/>
            </Route>
          </Switch>
      </Router>
    </div>
  );
}
export default App;

// Problem with refreshing page needs to be fixed
