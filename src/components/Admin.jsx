import React, { Component } from "react";
import axios from "axios";

class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: []
    };
  }

  componentDidMount = () => {
    this.getOrders();
  };

  getOrders = () => {
    axios.get("/orders").then(res => {
      this.setState({
        orders: res.data
      });
    });
  };

  fulfilledOrders = (el) => {
      axios.put(`/order/${el.id}`)
  }

  render() {
    const orders = this.state.orders.map((el, i) => {
      console.log(el.fulfilled);
      return (
        <div key={i}>
          <div className="sub-category">
            <div className="order-item">
              <h2>{el.name}</h2>
              <h4> {el.id}</h4>
              <h2>{el.fulfilled}</h2>
            </div>
            <div className="plus">
              {el.order_items.map((el, i) => {
                return (
                  <div key={i}>
                    <p>{el.id}</p>
                    <p>{el.title}</p>
                    <p>{el.price}</p>
                    <p>{el.description}</p>
                  </div>
                );
            })}
            <button onClick={()=> this.fulfilledOrders(el)}>fulfilled</button>

              <br />
              ); })}
            </div>
          </div>
        </div>
      );
    });
    return (
      <div>
        <div className="overlay"></div>
        <h2 className="order-title">Orders</h2>
        {orders}
        {/* <p className='admin'>{JSON.stringify(this.state.orders)}</p> */}
      </div>
    );
  }
}

export default Admin;
