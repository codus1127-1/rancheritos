import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import Orders from "./Orders";

class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newOrders: [],
      readyOrders: []
    };
  }

  componentDidMount = () => {
    this._ismounted = true;
    this.getOrders();
  };

  componentWillUnmount = () => {
    this._ismounted = false;
  };

  getOrders = () => {
    axios.get("/orders").then(res => {
      this.setState({
        ...res.data
      });
      setTimeout(() => {
        if (this._ismounted) {
          this.getOrders();
          console.log("hit");
        }
      }, 10000);
    });
  };

  fulfilledOrders = el => {
    axios.put(`/order/${el.id}`, {action: 'ready'})
    .then(()=> {
      axios.get('/orders').then(res => {
        this.setState({
          ...res.data
        })
      })
    })
  };

  pickedUpOrders = el => {
    axios.put(`/order/${el.id}`, {action: 'picked up'})
    .then(()=> {
      axios.get('/orders').then(res => {
        this.setState({
          ...res.data
        })
      })
    })
  };

  render() {
    const newOrders = this.state.newOrders.map((el, i) => {
      return (
      <Orders 
      el={el}
      i={i}
      isReady={false}
      buttonAction={this.fulfilledOrders}
      />)
  })
  const readyOrders = this.state.readyOrders.map((el, i) => {
    return (
      <Orders 
      el={el}
      i={i}
      isReady={true}
      buttonAction={this.pickedUpOrders}
      />
    )
  })
    return (
      <div className='admin'>
        <div className="overlay"></div>
        <div className="title-container">
          <h2 className="order-title">NEW ORDERS</h2> 
          <h2 className="order-title2">READY</h2> 

        </div>
        <div className="orders-container">
            <div className='newOrders-container'>
              <div className="newOrders">
                {newOrders}
              </div>
              </div>
            <div className='readyOrders'>{readyOrders}</div>
        </div>
        {/* <p className='admin'>{JSON.stringify(this.state.orders)}</p> */}
      </div>
    ); 
  }
}

function mapStateToProps(state) {
  const { is_admin } = state;

  return {
    is_admin
  };
}

export default connect(mapStateToProps)(Admin);
