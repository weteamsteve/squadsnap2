import React from "react";
import Routes from "../routes/Index";

class Logout extends React.Component {
constructor(props){
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }
handleLogout(e) {
    e.preventDefault();
    let that = this
    let email = this.props.currentUser
    axios.delete('/users/sign_out', {
    })
    .then(function(response){
      that.props.changePage("login")
    })
    .catch(function(error){
      console.log(error)
    })
  }
render() {
    return (
      <button onClick={this.handleLogout}>Sign Out</button>
    );
  };
}

export default Logout;
