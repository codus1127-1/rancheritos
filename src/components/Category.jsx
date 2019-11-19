import React, { Component } from "react";
import axios from "axios";

class Category extends Component {
  state = {
    foodItems: []
  };

  componentDidMount = () => {
    this.getCategoryItems();
  };

  getCategoryItems = async () => {
    const res = await axios.get(`/category/items/${this.props.match.params.category}`
    );
    console.log(res.data[0]);
    this.setState({
      foodItems: res.data
    });
  };

  render() {
    let subCategoryItems = this.state.foodItems.map((el, index) => {
      return (
        <div key={index}>
          <div className="sub-category">
            <h2>{el.title}</h2>
            <h4>{el.price}</h4>
            <p>{el.description}</p>
          </div>
        </div>
      );
    });
    return <div>
        {subCategoryItems}
    </div>;
  }
}

export default Category;
