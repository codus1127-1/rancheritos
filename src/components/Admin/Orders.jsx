import React, { Component } from 'react';

class Orders extends Component {
  constructor(props) {
    super(props);
    const orderToggle = this.props.el.order_items.map((el, i) => false)
    // console.log(orderToggle)
    this.state = {
      toggle: orderToggle
    }
  }

  toggle = (i) => {
    console.log(this.state.toggle)
    this.setState({
      toggle: this.state.toggle.map((toggle, index) => {
        if (index === i) { 
          return !toggle
        } else {
          return toggle
        }
      })
    })
  }

  setColor = (el)=> {
    if ('timeToPickUp' in el) {
      if (el.timeToPickUp > 10) {
        return 'blue' 
      } else if(el.timeToPickUp > 5 && el.timeToPickUp <= 10) {
        return 'yellow'
      } else if (el.timeToPickUp <=5){
        return 'red'
      }
    } else {
      return 'green'
    }
  }
  

    render() {
        const el = this.props.el 
        // console.log(el.order_items[0])
        const i = this.props.i
        return (
          <div className={`admin-sub-category ${this.setColor(el)}`} >
            <h1>{new Date(el.time_stamp).toLocaleTimeString([], {hour: 'numeric', minute: '2-digit', hour12: true})}</h1>
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
                      <button className='details' onClick={()=> this.toggle(i)}>View details</button>
                      {this.state.toggle[i] ? <ul className='sub-menu'>
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