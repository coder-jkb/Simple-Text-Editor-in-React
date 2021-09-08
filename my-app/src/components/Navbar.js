import React from 'react'
import PropTypes from 'prop-types'
import { ReactSVG } from "react-svg"
import { Link } from "react-router-dom";
// import ToggleMode from '../../public/github.svg';

export default function Navbar(props) {

  return (
    <>
      {/* <nav className={"d-flex flex-md-row flex-sm-column mx-2 navbar navbar-expand-lg "+ props.navModeClass} >  */}
      <nav className={"navbar navbar-expand-lg " + props.navModeClass}>
        <Link className="navbar-brand" to="/">{props.title}</Link>
        <div className="container-fluid">
          {/* toggle mode */}
          <button style={{ position: "a", top: "1rem", left: "1rem" }} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="my-2 navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">{props.about}</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://github.com/coder-jkb" target="_blank" rel="noreferrer"><ReactSVG src="github.svg" /></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://www.linkedin.com/in/jay-bhanushali-03b647200/" target="_blank" rel="noreferrer"><ReactSVG src="linkedin.svg" /></a>
              </li>


              {/* <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
           <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li> */}
            </ul>
            {/* <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
          </div>
        </div>
        <div className="form-check form-switch" style={{ position: "absolute", top: "1rem", right: "1rem" }}>
          <input className="mx-3 form-check-input" type="checkbox" id="flexSwitchCheckChecked" onClick={props.handleToggleMode} />
          <label className={"form-check-label text-"+props.mode} htmlFor="flexSwitchCheckChecked">Enable {props.mode} mode</label>
        </div>
      </nav>

      {/* MY NAV FROM HERE ------------------------------------------------------------------------------ */}
      {/* <nav className={"navbar navbar-expand-lg "+ props.navModeClass} > 
            <a className="navbar-brand mx-3" style={{color: "#0d6efd"}} href="/">{props.title}</a>
            <a className="navbar-brand nav-link mx-3" href="./About.js" style={{color: "#0d6efd"}}>{props.about}</a>
            <a className="mx-3" href="https://github.com/coder-jkb" target="_blank" rel="noreferrer"><ReactSVG src="github.svg"/></a>
            <a className="mx-3" href="https://www.linkedin.com/in/jay-bhanushali-03b647200/" target="_blank" rel="noreferrer"><ReactSVG src="linkedin.svg"/></a>
             */}
      {/* Toggle switch  source :
        https://getbootstrap.com/docs/5.0/forms/checks-radios/#switches
        */}

      {/* <div className="form-check form-switch" style={{position: "absolute", top: "1rem", right:"1rem"}}>
                <input className="mx-3 form-check-input" type="checkbox" id="flexSwitchCheckChecked" onClick={props.handleToggleMode}/>
                <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Enable {props.mode} mode</label>
            </div>
        </nav> */}
    </>
  )
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string
}

Navbar.defaultProps = {
  title: "Title here",
  about: "About"
};
