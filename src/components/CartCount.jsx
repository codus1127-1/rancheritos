import React, { Component } from 'react';
import axios from 'axios'
import {connect} from 'react-redux'
import {handleCount} from '../ducks/reducer'

class CartCount extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cartCount: 0
        }
    }

    componentDidMount = ()=> {
        this.cartCount()
    }

    cartCount = () => {
        this.setState({
            cartCount: this.props.cartCount
        })
      };
    
    render() {
        
        return (
            <div className='counter'>
                <h1>{this.props.carCount}</h1>
                
                
            </div>
        );
    }
}

const mapStateToProps = (reduxState) => {
   return reduxState
}

export default connect(mapStateToProps, {handleCount})(CartCount);