import React, { Component } from "react";
import axios from "axios";

class Customize extends Component {
  state = {
    addOns: [],
    selected: []
  };

  componentDidMount = () => {
    this.getAddOns();
  };

  getAddOns = () => {
    this.setState({
      addOns: [{ id: 1, title: "sour cream" }]
    });
    // axios.get("/add-ons").then(res => {
    //   this.setState({ addOns: res.data });
    // });
  };

  checked = (checked, el) => {
    if (checked) {
        let selected = this.state.selected
        selected.push(el)
      this.setState({
        selected: selected
      });
    } else {
      this.setState({
        selected: this.state.selected.filter((item)=> {
            return item.id != el.id
        })
      });
    }
  };

  render() {
    const addOns = this.state.addOns.map((el, i) => {
      return (
        <div key={i}>
          <input
            id={el.id}
            onChange={e => this.checked(e.target.checked, el)}
            type="checkbox"
          />{" "}
          {el.title}
        </div>
      );
    });
    return <div>{addOns}</div>;
  }
}

export default Customize;
