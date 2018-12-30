import React from "react";

class Cards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      id: this.props.id
    };
  }
  render() {
    let searchUrl = `https://www.google.com/search?q=${
      this.props.name
    }&source=lnms&tbm=isch&sa=X&ved=0ahUKEwiwp8eq9MbfAhXudN8KHXQHBxoQ_AUIDigB&biw=960&bih=978`;
    return (
      <div
        className="card border-primary mb-3"
        style={{ minWidth: "21rem", margin: "auto", minHeight: "20rem" }}
      >
        <div className="card-header alert alert-danger d-flex">
          <h4>
            {" "}
            <span className="badge badge-success mr-3">
              ID: {this.props.id}
            </span>{" "}
            Name: {this.props.name}{" "}
          </h4>
        </div>
        <div className="card-body">
          <h6 className="card-title text-center">
            <a href={searchUrl} target="_blank" rel="noopener noreferrer">
              <button className="btn btn-info btn-raised  btn-sm">
                Google Image Search
              </button>
            </a>
          </h6>
          <p className="card-text">Hair Color: {this.props.hair}</p>
          <p className="card-text">Skin Color: {this.props.skin}</p>
          <p className="card-text">Height: {this.props.height}</p>
          <p className="card-text">Mass: {this.props.mass}</p>
          <p className="card-text">Gender: {this.props.gender}</p>
          <p className="card-text">Birth year: {this.props.birthyear}</p>
          <div className='alert alert-warning'></div>
          {/* <button
            type="button"
            className="btn btn-primary btn-raised btn-lg btn-block"
          >
            More Info
          </button> */}
        </div>
      </div>
    );
  }
}

export default Cards;
