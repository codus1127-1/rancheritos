import React, { Component } from "react";
import axios from "axios";

class Customize extends Component {
  state = {
    addOns: [],
    selected: [],
    addOnToggle: false
  };

  componentDidMount = () => {
    this.getAddOns();
  };

  getAddOns = () => {
    // this.setState({
    //   addOns: [{ id: 1, title: "sour cream" }]
    // });
    axios.get("/add-ons").then(res => {
      this.setState({ addOns: res.data });
    });
  };

  checked = (checked, el) => {
    if (checked) {
      let selected = this.state.selected;
      selected.push(el);
      this.setState({
        selected: selected
      });
    } else {
      this.setState({
        selected: this.state.selected.filter(item => {
          return item.id !== el.id;
        })
      });
    }
  };

  addOns = () => {
    this.setState({
      addOnToggle: !this.state.addOnToggle
    });
  };

  render() {
    const addOns = this.state.addOns.map((el, i) => {
      return (
        <div className="add-ons-container" key={i}>
          {this.state.addOnToggle ? (
            <div className="addOns">
              <label
                className="checkbox-label"
                onChange={e => this.checked(e.target.checked, el)}
                id={el.id}
              >
                <input type="checkbox" />>
                <span className="checkbox-custom circular"></span>
              </label>

              <div className="add-ons">{el.title}</div>
            </div>
          ) : null}
        </div>
      );
    });
    return (
      <div>
        {addOns}
        <div className="customize-button" onClick={() => this.addOns()}>
          {!this.state.addOnToggle ? (
            <i className="fas fa-chevron-down fa-2x"></i>
          ) : (
            <i className="fas fa-chevron-up fa-2x"></i>
          )}
        </div>
      </div>
    );
  }
}

export default Customize;
