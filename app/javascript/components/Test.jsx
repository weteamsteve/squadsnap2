import React from "react";
import Routes from "../routes/Index";

import Header from "../components/Header";

class Test extends React.Component {
constructor(){
    super();
    console.log("app constructor")
    this.state = {
      currentUser: null
    }
    this.updateCurrentUser = this.updateCurrentUser.bind(this);
  }
componentDidMount(){
    console.log("app componentDidMount")

    let that = this
    axios.get('/users/check_for_user',{
    })
    .then(function(response){
      if(response.data.email){
        that.setState({
          currentUser: response.data.email
        })
        console.log("Logged in as" + currentUser)
      } else {
        that.setState({
          currentUser: null
        })
      }
    })
    .catch(function(error){
      console.log(error);
    })
  }
updateCurrentUser(email) {
    this.setState({
      currentUser: email
    })
    console.log("updateCurrentUser: " + email)
  }
render(){
    return (
      <div>
        <Header updateCurrentUser={this.updateCurrentUser}/>
      </div>
    )
  }
}
