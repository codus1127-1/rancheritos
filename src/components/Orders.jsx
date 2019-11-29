import React, { Component } from 'react';

class Orders extends Component {

    render() {
        const el = this.props.el 
        const i = this.props.i
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
              <button onClick={() => this.props.buttonAction(el)}>
                {!this.props.isReady ? 'Ready' : 'Picked Up'}
              </button>
              <br />
            </div>
          </div>
        </div>
      )
    }
}

export default Orders;