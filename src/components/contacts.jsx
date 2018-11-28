import React, { Component } from "react";
import LinkedinSDK from "react-linkedin-sdk";

const responseLinkedin = response => {
  console.log(response);
};

class Contacts extends Component {
  state = {};
  render() {
    return (
      <div className="card">
        <div className="card-header">
          <h5 className="card-title">Contacts</h5>
        </div>
        <div className="card-body">
          <LinkedinSDK
            clientId="77izt63qilv0k7"
            callBack={responseLinkedin}
            fields=":(id,num-connections,picture-url)"
            className={"className"}
            loginButtonText={"Login with Linkedin"}
            logoutButtonText={"Logout from Linkedin"}
            buttonType={"button"}
            icon=""
            getOAuthToken
          />
          ,
        </div>
      </div>
    );
  }
}

export default Contacts;
