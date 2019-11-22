import React, { Component } from "react";
import axios from "axios";
import {Link} from 'react-router-dom'

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

  addToCart = (el) => {
    axios.post('/category/items', el )
    .then(res => {
      console.log(res)
    })
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
            <p>{el.description}</p>
            <div className="button-container">
              <Link to={`/item/${el.title}/customize`}>
                <button className="item-buttons">Customize</button>
              </Link>
              <button onClick={()=> this.addToCart(el)} className="item-buttons">Add to Cart</button>
            </div>
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
