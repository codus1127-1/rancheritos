import React, { Component } from 'react';
import {connect} from 'react-redux'
// import {addCount, removeCount} from '../ducks/reducer'

class CartCount extends Component {
    
    render() {
        
        return (
            <div className='counter'>
                <h1>{this.props.cartCount}</h1>
                
                
            </div>
        );
    }
}

function mapStateToProps( state ) {
    const { cartCount } = state;
  
    return {
      cartCount
    };
  }

export default connect(mapStateToProps)(CartCount);