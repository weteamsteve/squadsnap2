import React from "react";
import Routes from "../routes/Index";

import Login from "../components/Login";
import Logout from "../components/Logout";
import Signup from "../components/Signup";

class Header extends React.Component {
constructor(props){
    super(props);
    console.log("header constructor")
    if (this.props.currentUser == null){
      this.state = {
        page:"login"
      }
    } else{
      this.state = {
        page: "delete"
      }
    }
    this.changePage = this.changePage.bind(this);
  }
changePage(newPage) {
    this.setState({
      page: newPage
    })
    console.log("header changepage")
  }
render() {
    switch(this.state.page) {
      case "signup":
        return <Signup changePage={this.changePage} updateCurrentUser={this.props.updateCurrentUser}/>
      case "login":
        return <Login changePage={this.changePage} updateCurrentUser={this.props.updateCurrentUser}/>
      case "delete":
        return <Logout changePage={this.changePage} updateCurrentUser={this.props.updateCurrentUser}/>
    }
  }
}
