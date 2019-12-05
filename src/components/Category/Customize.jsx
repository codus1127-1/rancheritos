import React, { Component } from "react";
import axios from "axios";

class Customize extends Component {
  state = {
    addOns: [],
    selected: [],
    
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
      this.props.setAddOns(selected)
    } else {
        let selected = this.state.selected.filter(item => {
          return item.id !== el.id;
        })
      this.setState({
          selected: selected
      });
      this.props.setAddOns(selected)
    }
  };

  

  render() {
    const addOns = this.state.addOns.map((el, i) => {
      return (
        <div className="add-ons-container" key={i}>
          {this.props.addOnToggle ? (
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
        <div className="wrapper">
          {addOns}
        </div>
        <div className="customize-button" onClick={() => this.props.toggleAddOns()}>
          {!this.props.addOnToggle ? (
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
