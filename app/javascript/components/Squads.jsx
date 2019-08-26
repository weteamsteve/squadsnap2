import React from "react";
import { Link } from "react-router-dom";

class Squads extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squads: []
    };
  }

  componentDidMount() {
    const url = "/api/v1/squads/index";
    fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then(response => this.setState({ squads: response }))
      .catch(() => this.props.history.push("/"));
  }
  render() {
    const { squads } = this.state;
    const allSquads = squads.map((squad, index) => (
      <div key={index} className="col-md-6 col-lg-4">
        <center>
        <div className="card bg-dark text-white mb-4">
            <img
              src="http://weteamsteve.com/wp-content/uploads/2019/08/icons8-basketball-64.png"
              className="card-img-top"
              alt={`${squad.name} image`}
              style={{ height: 64, width: 64 }}
            />
          <div className="card-body">
            <h5 className="card-title"><b>{squad.name}</b></h5>
            <h5><b>Sport:</b> {squad.sport}</h5>
            <h5><b>Owner:</b> {squad.owner_id}</h5>
            <Link to={`/squad/${squad.id}`} className="btn btn-primary">
              View Squad
            </Link>
          </div>
        </div>
        </center>
      </div>
    ));
    const noSquad = (
      <div className="vw-100 vh-50 d-flex align-items-center justify-content-center">
        <h4>
          No squads yet. Why not <Link to="/new_squad">create one</Link>?
        </h4>
      </div>
    );

    return (
      <>
        <div className="jumbotron jumbotron-fluid bg-transparent">
          <div className="container py-5">
            <img
                src="https://camo.githubusercontent.com/ef0e74c973c2ef9f5045c359a1a4f3ec1b3b4d71/687474703a2f2f77657465616d73746576652e636f6d2f77702d636f6e74656e742f75706c6f6164732f323031392f30362f7371756164736e61705f736d616c6c65722e706e67"
                alt={`squadsnap logo`}
                className="img-rounded center-block"
              />
            <br />
            <br />
            <p>
              The leading solution for sports and activity management.
            </p>
            <p>
              Coaches, managers and admins rely on Squadsnap's simple and connected solutions to organize every season
            </p>
          </div> {/* container */}
        </div> {/* jumbotron */}
        <div className="py-5">
          <main className="container">
            <div className="btn-toolbar d-flex justify-content-center">
              <Link to="/" className="btn btn-primary">
                Home
              </Link>
              <Link to="/squad" className="btn btn-primary">
                Create New Squad
              </Link>
            </div>
            <br />
            <div className="row">
              {squads.length > 0 ? allSquads : noSquad}
            </div>

          </main>
        </div>
      </>
    );
  }
}
export default Squads;
