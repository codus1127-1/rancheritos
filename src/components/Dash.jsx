import React, { Component } from "react";
import axios from "axios";
import {Link} from 'react-router-dom'

class Dash extends Component {
  state = {
    category: []
  };

  componentDidMount = () => {
    axios.get("/category").then(res => {
      this.setState({ category: res.data });
    });
  };

  render() {
      let categories = this.state.category.map((el, index) => {
        console.log(el)
      return <div key={index}>
          <div className="category">
              <Link to={`/category/${el.category}`}>
                  <h2>{el.category}</h2> 
              </Link>
          </div>
      </div>;
    });
    return (
        <div className="container">
            {categories}
        </div>
    )
  }
}

export default Dash;
