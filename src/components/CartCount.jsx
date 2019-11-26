import React, { Component } from 'react';
import axios from 'axios'
import {connect} from 'react-redux'

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
        axios.get("/cart").then(res => {
          this.setState({
            cartCount: res.data.length
          });
        });
      };
    
    render() {
        
        return (
            <div className='counter'>
                <h1>{this.state.cartCount}</h1>
                
                
            </div>
        );
    }
}

const mapStateToProps = (reduxState) => {
   return reduxState
}

export default connect(mapStateToProps)(CartCount);