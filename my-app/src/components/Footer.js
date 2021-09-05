import React from 'react'
import { ReactSVG } from 'react-svg'
export default function Footer(props) {
    const myStyle = {
        display: "flex",
        flexDirection: "row"
    }
    return (
        <> 
        <footer className={"navbar "+ props.navModeClass} style={{borderTop: "1px solid black", marginTop: "1rem"}}>
            <div className="d-flex " style={props.modeStyle} >
            <ul className="my-2 navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <a className="nav-link" href="https://github.com/coder-jkb" target="_blank" rel="noreferrer"><ReactSVG src="github.svg"/></a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="https://www.linkedin.com/in/jay-bhanushali-03b647200/" target="_blank" rel="noreferrer"><ReactSVG src="linkedin.svg"/></a>
                </li>
            </ul>
            </div>  
            &copy; 2021 Copyright: Jay Bhanushali 
            
            {/* <div className="my-3 d-flex " style={props.modeStyle} >
                
                Social links: 
                <a className="mx-3 nav-link" href="https://github.com/coder-jkb" target="_blank" rel="noreferrer"><ReactSVG src="github.svg"/></a>
                <a className="mx-3 nav-link" href="https://www.linkedin.com/in/jay-bhanushali-03b647200/" target="_blank" rel="noreferrer"><ReactSVG src="linkedin.svg"/></a>
            </div>
            <br/>
                &copy; 2021 Copyright: Jay Bhanushali  */}
        </footer>
        </>
    )
}
