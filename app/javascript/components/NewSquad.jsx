import React from "react";
import { Link } from "react-router-dom";

class NewSquad extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      sport: "",
      owner_id: ""
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.stripHtmlEntities = this.stripHtmlEntities.bind(this);
  }

  stripHtmlEntities(str) {
    return String(str)
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }

  onChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  onSubmit(event) {
    event.preventDefault();
    const url = "/api/v1/squads/create";
    const { name, sport, owner_id } = this.state;

    if (name.length == 0 || sport.length == 0 || owner_id.length == 0)
      return;

    const body = {
      name,
      sport,
      owner_id: owner_id.replace(/\n/g, "<br> <br>")
    };

    const token = document.querySelector('meta[name="csrf-token"]').content;
    fetch(url, {
      method: "POST",
      headers: {
        "X-CSRF-Token": token,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then(response => this.props.history.push(`/squad/${response.id}`))
      .catch(error => console.log(error.message));
  }

  render() {
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-sm-12 col-lg-6 offset-lg-3">
            <h1 className="font-weight-normal mb-5">
              Add a new squad to our awesome squad collection.
            </h1>
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="form-control"
                  required
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="sport">Sport</label>
                <input
                  type="text"
                  name="sport"
                  id="sport"
                  className="form-control"
                  required
                  onChange={this.onChange}
                />
              </div>
              <label htmlFor="owner_id">Owner</label>
              <textarea
                className="form-control"
                id="owner_id"
                name="owner_id"
                rows="1"
                required
                onChange={this.onChange}
              />
              <button type="submit" className="btn custom-button mt-3">
                Create Squad
              </button>
              <Link to="/squads" className="btn btn-link mt-3">
                Back to squads
              </Link>
            </form>
          </div>
        </div>
      </div>
    );
  }

}

export default NewSquad;
