import React, { Component } from 'react';

class Orders extends Component {

    render() {
        const el = this.props.el 
        const i = this.props.i
        return (
          <div className="admin-sub-category">
              <div className="order-top">
              <h4>ORDER #:  {el.id}</h4>
                <button onClick={() => this.props.buttonAction(el)}>
                  {!this.props.isReady ? 'Ready' : 'Picked Up'}
                </button>
              </div>
            <div className="admin-order-item">
              <h2>{el.fulfilled}</h2>
              <h2>{el.name}</h2>
            </div>
            <div className="plus2">
              {el.order_items.map((el, i) => {
                return (
                  <div className='single-order' key={i}>
                    <p>ITEM #: {el.id}</p>
                    <p className='title'>{el.title}</p>
                    <p>{el.price}</p>
                    <button>View details</button>
                    {/* <div className='description'>{el.description}</div> */}
                  </div>
                );
              })}
              <br />
            </div>
          </div>
      )
    }
}

export default Orders;