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
      // console.log(res.data)
    });
  };

  render() {
      let categories = this.state.category.map((el, index) => {
        // console.log(el)
      return <div className='dash' key={index}>
              <Link to={`/category/${el.title}`}>
          <div className="category">
                  <h2>{el.title}</h2> 
                  <img src={el.img} alt={el.title} />
          </div>
              </Link>
      </div>;
    });
    return (
        <div className="container">
          <div className="hero"></div>
          <h1>MENU</h1>
          <h2 className='h2'>CATEGORIES:
            <div className="line"></div>
          </h2>

            {categories}
        </div>
    )
  }
}

export default Dash;
