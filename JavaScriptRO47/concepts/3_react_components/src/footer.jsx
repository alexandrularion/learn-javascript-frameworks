import React from "react";

// Tip: Class component (legacy react: check https://legacy.reactjs.org/docs/react-component.html)
class Footer extends React.Component {
  appVersion = "2.0";
  appProvider = "MyCompany SRL";

  render() {
    return (
      <div>
        <p>Versiunea aplicatiei: {this.appVersion}</p>
        <p>Distribuitorul aplicatiei: {this.appProvider}</p>
      </div>
    );
  }
}

export default Footer;
