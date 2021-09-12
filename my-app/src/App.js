import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
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
        <Navbar title="!My 1st react app!" navModeClass={navModeClass} handleToggleMode={handleToggleMode} mode={mode} />
        <Alert alert={alert} /> 
        <Switch>
            <Route exact path="/about">
            <About mode={mode}/>
            </Route>
            <Route exact path="/">
              <TextForm heading="Let's play with text" mode={mode} setNewAlert={setNewAlert} />
            </Route>
          </Switch>
      </Router>
    </div>
  );
}
export default App;
