import React, { Component } from "react";
import "./css/Header.css";
import logo from "../logo.svg";
import { NavLink } from "react-router-dom";

export default class Header extends Component {
  constructor() {
    super();
    this.state = {
      show: true,
    };
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand text-info" href="/">
            <NavLink
              to="/"
              className="col-3 text-reset text-uppercase d-flex align-items-center"
            >
              <img src={logo} alt="" className="img-logo mr-2" height={60} />
            </NavLink>
          </a>
          <button
            className="navbar-toggler border border-info text-info"
            onClick={() => {
              this.setState({ show: !this.state.show });
            }}
          >
            <span className="navbar-toggler-icon"></span>
            {this.state.show}
          </button>
          <div
            className={
              this.state.show
                ? "collapse navbar-collapse"
                : "collapse navbar-collapse active"
            }
          >
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink className="nav-link text-dark" to="/">
                  Inicio
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link text-dark" to="/Services">
                  Servicios
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-dark" to="/About">
                  Acerca de
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-dark" to="/Contact">
                  Contacto
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
