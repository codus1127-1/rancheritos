import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Customize from "./Customize";

class Category extends Component {
  state = {
    foodItems: []
  };

  componentDidMount = () => {
    this.getCategoryItems();
  };

  getCategoryItems = async () => {
    const res = await axios.get(
      `/category/items/${this.props.match.params.category}`
    );
    // console.log(res.data[0]);
    this.setState({
      foodItems: res.data
    });
  };

  addToCart = el => {
    axios.post("/category/items", el).then(res => {
      // console.log(res)
    });
  };

  goBack = () => {
    window.history.back();
  }

  render() {
    let subCategoryItems = this.state.foodItems.map((el, index) => {
      return (
        <div key={index}>
          <div className="sub-category">
            <div className="order-item">
              <h2>{el.title}</h2>
              <h4> ${el.price}</h4>
            </div>
            <div className="plus">
              <p>{el.description}</p> <i onClick={() => this.addToCart(el)} className="fas fa-plus fa-2x"></i> 
            </div>
          </div>
          <Customize key={el.id} item={el} />
        </div>
      );
    });
    return <div>
       <div className="sub-header">
         <i onClick={this.goBack} className="fas fa-arrow-circle-left fa-2x fa-gradient-two"></i>
        <h2>{this.props.match.params.category}</h2>
       </div>
        <div className="line"></div>

      {subCategoryItems}
      </div>;
  }
}

export default Category;
