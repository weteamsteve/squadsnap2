import React from "react";
import Routes from "../routes/Index";

import axios from 'axios';

class Logout extends React.Component {
constructor(props){
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }
handleLogout(e) {
  console.log("handleLogout")
    e.preventDefault();
    let that = this
    let email = this.props.currentUser

    axios.delete('/users/sign_out', {
    })
    .then(function(response){
      console.log("logout response: " + JSON.stringify(response))
      that.props.changePage("login")
    })
    .catch(function(error){
      console.log("logout error: " + JSON.stringify(error))
      console.error(error)
    })
  }
render() {
    return (
      <button onClick={this.handleLogout}>Sign Out</button>
    );
  };
}

export default Logout;
