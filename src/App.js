import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/navbar";
import CV from "./components/cv";
import Contacts from "./components/contacts";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        {/* <nav className="navbar navbar-dark bg-dark position-fixed-left"> */}
        <NavBar>TEST</NavBar>
        <div className="container-fluid">
          <div className="row justify-content-md-center">
            <div className="col col-md">
              <CV>TES</CV>
            </div>
            <div className="col col-lg-2">
              <Contacts />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
