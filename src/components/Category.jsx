import React, { Component } from "react";
import axios from "axios";
// import { Link } from "react-router-dom";
// import Customize from "./Customize";
import FoodItem from './FoodItem'
import {handleCount} from "../ducks/reducer"
import connect from 'react-redux'

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

  goBack = () => {
    window.history.back();
  }

  



  render() {
    let subCategoryItems = this.state.foodItems.map((el, index) => {
      return (
        <FoodItem 
        el={el}
        index={index}
        key={index}
        />
      );
    });
    return <div>
      <div className='overlay'></div>
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
