import React, { Component } from "react";
import Cards from "./Cards";
import fetch from "isomorphic-fetch";

class AllCards extends Component {
  constructor() {
    super();
    this.state = {
      loadStatus: "0%",
      loaded: false,
      data: [],
      next: "https://swapi.co/api/people/"
    };
  }

  gatherData(data) {
    fetch(this.state.next)
      .then(data => {
        this.setState({
          loadStatus: "50%"
        });
        return data.json();
      })
      .then(mydata => {
        let newdata = [...this.state.data];
        mydata.results.forEach(x => {
          newdata.push(x);
        });

        this.setState({
          loadStatus: "90%",
          data: newdata
        });

        if (mydata.next !== this.state.next) {
          this.setState({
            next: mydata.next
          });
          this.gatherData(this.state.next);
        }
        setTimeout(() => {
          this.setState({
            loaded: true
          });
        }, 500);
      });
  }

  componentDidMount() {
    this.gatherData("https://swapi.co/api/people/");

    //   setTimeout(() => {
    //     this.setState({
    //       loaded: true
    //     });
    //   }, 500);
  }

  render() {
    if (this.state.loaded) {
      return this.state.data.map((each, index) => {
        return (
          <Cards
            key={index}
            id={index + 1}
            name={each.name}
            height={each.height}
            hair={each.hair_color}
            mass={each.mass}
            skin={each.skin_color}
            gender={each.gender}
            birthyear={each.birth_year}
          />
        );
      });
    } else {
      return (
        <div className="container">
          <div className="progress">
            <div
              className="progress-bar progress-bar-striped progress-bar-animated"
              role="progressbar"
              aria-valuenow={this.state.loadStatus}
              aria-valuemin="0"
              aria-valuemax="100"
              style={{ width: this.state.loadStatus }}
            />
          </div>
        </div>
      );
    }
  }
}

export default AllCards;
