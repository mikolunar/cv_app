import React, { Component } from "react";
import logo from "./miko.jpg";
import SkillsTechnology from "./skillstechnology";
import RecentProjects from "./recentprojects";
import FormalEducation from "./education";

class CV extends Component {
  state = {};

  myResume = {
    basics: {
      name: "John Doe",
      label: "Programmer",
      picture: "",
      email: "john@gmail.com",
      phone: "(912) 555-4321",
      website: "http://johndoe.com",
      summary: "A summary of John Doe...",
      location: {
        address: "2712 Broadway St",
        postalCode: "CA 94115",
        city: "San Francisco",
        countryCode: "US",
        region: "California"
      },
      profiles: [
        {
          network: "Twitter",
          username: "john",
          url: "http://twitter.com/john"
        }
      ]
    },
    work: [
      {
        company: "Company",
        position: "President",
        website: "http://company.com",
        startDate: "2013-01-01",
        endDate: "2014-01-01",
        summary: "Description...",
        highlights: ["Started the company"]
      }
    ],
    volunteer: [
      {
        organization: "Organization",
        position: "Volunteer",
        website: "http://organization.com/",
        startDate: "2012-01-01",
        endDate: "2013-01-01",
        summary: "Description...",
        highlights: ["Awarded 'Volunteer of the Month'"]
      }
    ],
    education: [
      {
        institution: "University",
        area: "Software Development",
        studyType: "Bachelor",
        startDate: "2011-01-01",
        endDate: "2013-01-01",
        gpa: "4.0",
        courses: ["DB1101 - Basic SQL"]
      }
    ],
    awards: [
      {
        title: "Award",
        date: "2014-11-01",
        awarder: "Company",
        summary: "There is no spoon."
      }
    ],
    publications: [
      {
        name: "Publication",
        publisher: "Company",
        releaseDate: "2014-10-01",
        website: "http://publication.com",
        summary: "Description..."
      }
    ],
    skills: [
      {
        name: "Web Development",
        level: "Master",
        keywords: ["HTML", "CSS", "Javascript"]
      },
      {
        name: "Django",
        level: "Intermediate",
        keywords: ["Django"]
      }
    ],
    languages: [
      {
        language: "English",
        fluency: "Native speaker"
      }
    ],
    interests: [
      {
        name: "Wildlife",
        keywords: ["Ferrets", "Unicorns"]
      }
    ],
    references: [
      {
        name: "Jane Doe",
        reference: "Reference..."
      }
    ]
  };

  render() {
    return (
      <React.Fragment>
        <div className="card">
          <div className="card-header">
            <img
              className="img-thumbnail float-left mr-3"
              src={logo}
              width="110px"
              heigh="110px"
            />
            <h2 className="card-title">Marcin Roszczyk</h2>
            <h5 className="header"> Software Engineer </h5>
            <p className="card-text font-italic">
              Full-stack web development with ReactJS, Django, ML.
            </p>
          </div>
          <div className="card-body">
            <SkillsTechnology> TEST</SkillsTechnology>
            <RecentProjects />
            <FormalEducation />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default CV;
