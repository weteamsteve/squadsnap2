import React from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

import Header from "../components/Header";

class Home extends React.Component {
constructor(){
    super();
    console.log("home constructor")
    this.state = {
      currentUser: null
    }
    this.updateCurrentUser = this.updateCurrentUser.bind(this);
  }
componentDidMount(){
    console.log("home componentDidMount")

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
      <div className="vw-100 vh-100 d-flex align-items-center justify-content-center">
        <Header updateCurrentUser={this.updateCurrentUser}/>
        <div className="jumbotron jumbotron-fluid bg-transparent">
          <img
              src="https://camo.githubusercontent.com/ef0e74c973c2ef9f5045c359a1a4f3ec1b3b4d71/687474703a2f2f77657465616d73746576652e636f6d2f77702d636f6e74656e742f75706c6f6164732f323031392f30362f7371756164736e61705f736d616c6c65722e706e67"
              alt={`squadsnap logo`}
              className="img-rounded center-block"
            />
          <div className="container">
            <br />
            <p align="center">
              The #2 sports team management app that makes communication and organization a breeze.
            </p>
            <hr className="my-4" />
            <Link
              to="/squads"
              className="btn btn-lg btn-primary center-block"
              role="button"
            >
              View Squads
            </Link>
          </div> {/* container end*/}
        </div>
      </div>
    )
  }
}

export default Home;
