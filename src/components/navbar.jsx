import React, { Component } from "react";

class NavBar extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top sideNav">
        <ul className="nav">
          <li className="nav-item">
            <div className="navbar-brand" href="http://localhost:3000">
              {" "}
              marcinros.net
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link text-light" href="#">
              json
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              API
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="#">
              Contacts
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default NavBar;
