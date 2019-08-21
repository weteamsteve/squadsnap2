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
        <div className="card mb-4">
          <img
            src={squad.image}
            className="card-img-top"
            alt={`${squad.name} image`}
          />
          <div className="card-body">
            <h5 className="card-title">{squad.name}</h5>
            <Link to={`/squad/${squad.id}`} className="btn custom-button">
              View Squad
            </Link>
          </div>
        </div>
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
            <div className="text-right mb-3">
              <Link to="/squad" className="btn custom-button">
                Create New Squad
              </Link>
            </div>
            <div className="row">
              {squads.length > 0 ? allSquads : noSquad}
            </div>
            <Link to="/" className="btn btn-link">
              Home
            </Link>
          </main>
        </div>
      </>
    );
  }
}
export default Squads;
