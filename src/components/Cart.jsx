import React, { Component } from 'react';
import axios from 'axios'

class Cart extends Component {
    state = {
        cart: [],
        subtotal: 0,
        tax: 0,
        total: 0
    }

    componentDidMount = ()=> {
        this.getCart()
    }

    getCart =() => {
        axios.get('/cart')
        .then(res => {
            const subtotal = res.data.map(el =>{
                return el.price
            }).reduce((price1, price2)=> {
                return +price1 + +price2
            }, 0)
            const tax = subtotal * .07
            this.setState({
                cart: res.data, 
                subtotal: subtotal,
                tax: tax,
                total: subtotal + tax
                
            })
        })
    }


    render() {
        const cart = this.state.cart.map((el, i)=> {
            return <div key={i}>
                <h1>{el.title}</h1>
                <h2>{el.price} </h2>
                <p>{el.description}</p>
            </div>
        })
        return (
            <div>
                {cart}
        <h2>Subtotal: {this.state.subtotal}</h2>
        <h2>Tax: {this.state.tax}</h2>
        <h1>Total: {this.state.total}</h1>
            </div>
        );
    }
}

export default Cart;