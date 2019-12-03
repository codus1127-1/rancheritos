import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Login from './components/Auth/Login'
import Register from './components/Auth/Register'
import Dash from './components/Dash/Dash'
import Category from './components/Category/Category';
import Cart from './components/Cart/Cart'
import Admin from './components/Admin/Admin';

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