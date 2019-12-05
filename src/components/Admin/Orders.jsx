import React, { Component } from 'react';

class Orders extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false
    }
  }

  toggle = () => {
    this.setState({
      toggle: !this.state.toggle
    })
  }
  

    render() {
        const el = this.props.el 
        // console.log(el.order_items[0])
        const i = this.props.i
        return (
          <div className="admin-sub-category">
              <div className="order-top">
              <h4>ORDER #:  {el.id}</h4>
                <button onClick={() => this.props.buttonAction(el)}>
                  {!this.props.isReady ? 'READY!' : 'RECEIVED'}
                </button>
              </div>
            <div className="admin-order-item">
              <h2>{el.name}</h2>
            </div>
            <div className="plus2">
              {el.order_items.map((el, i) => {
                // console.log(el)
                return (
                  
                  <div className='single-order' key={i}>
                    <p className='item-num'>ITEM #: {el.id}</p>
                    <p className='title'>{el.title}</p>
                    <div className='add-on-container'>
                    {el.addOns.map(el => {
                      return(
                          <h1 className='add-on'>- {el.title}</h1>
                          )
                        })}
                        </div>
                    <ul className='sub-menu-parent'>
                      <button className='details' onClick={()=> this.toggle()}>View details</button>
                      {this.state.toggle ? <ul className='sub-menu'>
                        <li className='description'>{el.description}</li>
                      </ul> : null}
                    </ul>
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