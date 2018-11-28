import React from "react";
import styles from "./sideBarMenu.css";
import {
  Nav,
  NavItem,
  Navbar,
  NavDropdown,
  MenuItem,
  Glyphicon
} from "react-bootstrap";

export default React.createClass({
  render: function() {
    return (
    
        <div className="card m-2">
                <div className="card-body m-2">
                  <h3 className="card-title">Recent Projects</h3>
                  <h5 className="header"> Software Engineer</h5>
                  <p className="card-text">
                    Full-stack web development with ReactJS, Django, ML.
                  </p>

                  <h6> Technology Competencies </h6>
                  <ul>
                    <li>
                      Full-stack Dev, Data Analysis, ML, ETL, Mobile & Web Apps
                    </li>
                    <li>languages Python, Java Script, SQL </li>
                    <li>
                      Data processing Tensorflow, Elasticsearch, NiFi, Hadoop
                    </li>
                    <li> Front-End ReactJS, Bootstrap, Cordova </li>
                    <li>-web framework- Django, Flask </li>
                    <li>-data store- Postgres, Oracle,</li>
                    OrientDB, Redis
                    <li>
                      -infrastructure- Linux Ubuntu, Google Cloud, AWS, Docker
                      -solutions- HW/SW HA/DR{" "}
                    </li>
                    <li>
                      infrastructure design, sizing for large scale solutions
                      enterprise solutions -methods-Agile/scrum, Test Driven
                      Development, waterfall, full software cycle development,
                      Solution Architecture (Open Group Certification), ITIL
                      Certification, requirements analysis, UML – diagraming &
                      documentation
                    </li>
                  </ul>
                </div>
                </div>
    );
  }
});
