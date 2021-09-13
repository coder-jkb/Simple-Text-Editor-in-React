import React from 'react'
import PropTypes from 'prop-types'
import { ReactSVG } from "react-svg"
import { Link } from "react-router-dom";

export default function Navbar(props) {

  return (
    <>
      <nav className={"navbar navbar-expand-lg " + props.navModeClass}>
        <Link className="navbar-brand" to="/Simple-Text-Editor-in-React/home">{props.title}</Link>
        <div className="container-fluid">
          {/* toggle mode */}
          <button style={{ position: "a", top: "1rem", left: "1rem" }} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="my-2 navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/Simple-Text-Editor-in-React/home">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Simple-Text-Editor-in-React/about">{props.about}</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://github.com/coder-jkb" target="_blank" rel="noreferrer"><ReactSVG src="github.svg" /></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://www.linkedin.com/in/jay-bhanushali-03b647200/" target="_blank" rel="noreferrer"><ReactSVG src="linkedin.svg" /></a>
              </li>
            </ul>
          </div>
        </div>
        <div className="form-check form-switch" style={{ position: "absolute", top: "1rem", right: "1rem" }}>
          <input className="mx-3 form-check-input" type="checkbox" id="flexSwitchCheckChecked" onClick={props.handleToggleMode} />
          <label className={"form-check-label text-"+props.mode} htmlFor="flexSwitchCheckChecked">Enable {props.mode} mode</label>
        </div>
      </nav>
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
