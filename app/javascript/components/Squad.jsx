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
            src="https://purpleeagles.com/images/2019/8/21/mbb.jpg?width=1416&height=797&mode=crop&format=jpg&quality=80"
            alt={`${squad.name} image`}
            className="img-fluid position-absolute"
          />
          <div className="overlay bg-dark position-absolute" />
          <h1 className="display-4 position-relative text-white">
            {squad.name}
          </h1>
        </div>
        {/* Squad Image and Name Ends Here */}
        <div className="container py-5">
          <div className="col">
            <div className="row">
              <b>Sport: </b>
              <div
                dangerouslySetInnerHTML={{
                  __html: `${sport}`
                }}
              />
            </div> {/* end row */}
            <div className="row">
              <b>Owner: </b>
              <div
                dangerouslySetInnerHTML={{
                  __html: `${owner_id}`
                }}
              />
            </div> {/* end row */}
            <div className="row">
              <ul className="list-group">
                <h5><b>Members: </b></h5>
                {memberList}
              </ul>
            </div> {/* end row */}
          </div> {/* end col */}

          {/* Bottom Links Begin Here*/}
          <br />
          <br />
          <div className="btn-toolbar">
            <Link to="/squads" className="btn custom-button">
              Back to Squads
            </Link>
            <button type="button" className="btn btn-danger" onClick={this.deleteSquad}>
              Delete Squad
            </button>
          </div>
        </div> {/* end container py-5 */}
      </div>
    );
  }
}

export default Squad;
