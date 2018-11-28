import React, { Component } from "react";

class RecentProjects extends Component {
  state = {};
  render() {
    return (
      <div>
        <h6> Recent Projects </h6>
        <ul>
          <li>
            <span className="text-info"> 2017/2018 </span> Python, Tensorflow,
            Elasticsearch, Apache NiFi - Personal Data Classification - SensID
            Software
            <span className="text-info">
              {" "}
              (Solution Architect/Python Developer){" "}
            </span>
          </li>
          <li>
            <span className="text-info"> 2017/2018 </span> Architect/Python
            Developer Mobile App for customer care and service management
            Omantel Telecom 2018 Solution Architect/Java Script Developer
          </li>
          <li>
            <span className="text-info"> 2017/2018 </span> Data
            Warehouse/ETL/Data Lake implementation Omantel
          </li>
          <li>
            <span className="text-info"> 2017/2018 </span>
            SolutionArchitect/Software Engineer Global Inventory & Order
            management Application Integration IKEA 2014/2015 Solution Architect
          </li>
        </ul>
      </div>
    );
  }
}

export default RecentProjects;
