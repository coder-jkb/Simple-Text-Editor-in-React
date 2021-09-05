// *****************************************************************************************************
// **                           THIS COMPONENT IS CURRENTLY NOT IN USE                                **
// *****************************************************************************************************


import React, {useState} from 'react'

export default function ToggleMode() {
    // toggle mode variables
    var navDarkClass = "navbar navbar-expand-lg navbar navbar-dark bg-dark";
    var navLightClass = "navbar navbar-expand-lg navbar-light bg-light";

    const [mode, setMode] = useState("dark");
    const [navModeClass, setNavModeClass] = useState(navLightClass);
    const [modeStyle, setModeStyle] = useState(
        {
            color: "black",
            backgroundColor: "white"
        }
    );
    const handleToggleMode = () => {
            if(mode == "dark"){
                setMode("light")
                setNavModeClass(navDarkClass);
                setModeStyle({
                    color: "white",
                    backgroundColor: "black"
                });
            }
            else{
                setMode("dark")
                setNavModeClass(navLightClass);
                setModeStyle({
                    color: "black",
                    backgroundColor: "white"
                });
            }
        };
        // togglr var and func end
    return (
        <>
            {/* Toggle switch  source :
            https://getbootstrap.com/docs/5.0/forms/checks-radios/#switches
            */}
            <div className="form-check form-switch " style={modeStyle}>
                <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={handleToggleMode} />
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable {mode} mode</label>
            </div>
        </>
    )
}
