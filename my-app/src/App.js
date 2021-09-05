import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import {useState} from 'react'
import Footer from './components/Footer';
import Alert from './components/Alert';
import About from './components/About';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

// Ojas
// function App() {
//   const [isDark, setMode] = useState(false);
//   return (
//     <>
//     <div className={(isDark?"bg-black":"bg-light")} >
//       <button onClick={() => setMode(!isDark)} className="text-blue-200">
//         Click me
//       </button>
//       <Navbar title="!My 1st react app!" />
//       <TextForm heading="Let's play with text" dark={isDark}/>
//     </div>
//     </>
//   );
// }

// Jay's old code
// function App() {
//   return (
//     <>
//       <Navbar title="!My 1st react app!" />
//       <TextForm heading="Let's play with text"/>
//     </>
//   );
// }

// -------------------------------------------------------------------------------------------------
function App() {
      // toggle mode variables
      var navDarkClass = "navbar-dark bg-dark";
      var navLightClass = "navbar-light bg-light";
      const [mode, setMode] = useState("dark");
      const [navModeClass, setNavModeClass] = useState(navLightClass);
      // const [modeStyle, setModeStyle] = useState(
      //     {
      //         color: "white",
      //         backgroundColor: "#112426"
      //     }
      // );
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
            // setModeStyle({
            //     color: "white",
            //     backgroundColor: "#112426"
            // });
            document.body.style.backgroundColor= "#112426";
            setNewAlert("success","Enabled dark mode");
            // setNewAlert(null);
        }
        else{
            setMode("dark")
            setNavModeClass(navLightClass);
            // setModeStyle({
            //     color: "black",
            //     backgroundColor: "white"
            // });
            document.body.style.backgroundColor= "white"
            setNewAlert("success","Enabled light mode");
            // setNewAlert(null);
        }
    };
    // togglr var and func end
  
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
            {/* <Route path="/users">
              <Users />
            </Route> */}
            <Route exact path="/">
              <TextForm heading="Let's play with text" mode={mode} setNewAlert={setNewAlert} />
            </Route>
          </Switch>
      </Router>
      {/* <Footer navModeClass={navModeClass} modeStyle={modeStyle}/> */}
    </div>
  );
}

export default App;
