import React from "react";
import { Link } from "react-router-dom";

class Squad extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squad: {
        name: "",
        sport: "",
        owner_id: "",
        members: ""
      }
    };
    this.addHtmlEntities = this.addHtmlEntities.bind(this);
    this.deleteSquad = this.deleteSquad.bind(this);
  }

  componentDidMount() {
    const {
      match: {
        params: { id }
      }
    } = this.props;

    const url = `/api/v1/show/${id}`;

    fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then(response => this.setState({ squad: response }))
      .catch(() => this.props.history.push("/squads"));

  }

  addHtmlEntities(str) {
    return String(str)
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">");
  }

  deleteSquad() {
    const {
      match: {
        params: { id }
      }
    } = this.props;
    const url = `/api/v1/destroy/${id}`;
    const token = document.querySelector('meta[name="csrf-token"]').content;

    fetch(url, {
      method: "DELETE",
      headers: {
        "X-CSRF-Token": token,
        "Content-Type": "application/json"
      }
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then(() => this.props.history.push("/squads"))
      .catch(error => console.log(error.message));
  }

  render() {
    const { squad } = this.state;
    let memberList = "The squad is empty.";

    console.log ("squad: " + JSON.stringify(squad))
    {/* console.log ("squad members: " + JSON.stringify(squad.members)) */}

    if (squad.members.length > 0) {
      memberList = squad.members
        .map((member, index) => (
          <li key={index} className="list-group-item">
            {member.user.name} {member.membership}
          </li>
        ));
    }

    const sport = this.addHtmlEntities(squad.sport);
    const owner_id = this.addHtmlEntities(squad.owner_id);

    return (
      <div className="">
        <div className="hero position-relative d-flex align-items-center justify-content-center">
          <img
            src={squad.image}
            alt={`${squad.name} image`}
            className="img-fluid position-absolute"
          />
          <div className="overlay bg-dark position-absolute" />
          <h1 className="display-4 position-relative text-white">
            {squad.name}
          </h1>
        </div>
        <div className="container py-5">
          <div className="row">
            <div className="col-sm-12 col-lg-3">
              <ul className="list-group">
                <h5 className="mb-2">Members</h5>
                {memberList}
              </ul>
            </div>
            <div className="col-sm-12 col-lg-7">
              <h5 className="mb-2">Sport</h5>
              <div
                dangerouslySetInnerHTML={{
                  __html: `${sport}`
                }}
              />
            </div>
            <div className="col-sm-12 col-lg-7">
              <h5 className="mb-2">Owner</h5>
              <div
                dangerouslySetInnerHTML={{
                  __html: `${owner_id}`
                }}
              />
            </div>
            <div className="col-sm-12 col-lg-2">
              <button type="button" className="btn btn-danger" onClick={this.deleteSquad}>
                Delete Squad
              </button>
            </div>
          </div>
          <Link to="/squads" className="btn btn-link">
            Back to squads
          </Link>
        </div>
      </div>
    );
  }
}

export default Squad;
