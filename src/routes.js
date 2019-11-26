import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'
import Dash from './components/Dash'
import Category from './components/Category';
import Cart from './components/Cart'
import Admin from './components/Admin';

export default (
    <Switch>
        <Route exact path='/' component={Login} />
        <Route path='/register' component={Register} />
        <Route path='/dashboard' component={Dash} />
        <Route path='/category/:category' component={Category} />
        <Route path='/cart' component={Cart} />
        <Route path='/admin' component={Admin}/>

    </Switch>
)