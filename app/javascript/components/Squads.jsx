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
        <div className="card mb-4">
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
            <Link to={`/squad/${squad.id}`} className="btn custom-button">
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
          No squads yet. Why not <Link to="/new_squad">create one</Link>
        </h4>
      </div>
    );

    return (
      <>
        <section className="jumbotron jumbotron-fluid text-center">
          <div className="container py-5">
            <h1 className="display-4">Squads for every occasion</h1>
            <p className="lead text-muted">
              We’ve pulled together our most popular squads, our latest
              additions, and our editor’s picks, so there’s sure to be something
              tempting for you to try.
            </p>
          </div>
        </section>
        <div className="py-5">
          <main className="container">
            <div className="btn-toolbar">
              <Link to="/" className="btn custom-button">
                Home
              </Link>
              <Link to="/squad" className="btn custom-button">
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
