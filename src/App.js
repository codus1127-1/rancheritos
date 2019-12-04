import React from 'react';
import './App.scss';
import routes from './routes'
import Header from './components/Header/Header';
import {withRouter} from 'react-router-dom'
import CartCounter from './components/Header/CartCount'

function App(props) {
  return (
    <div className="App">
      {props.location.pathname !== '/' && props.location.pathname !== '/register' && props.location.pathname !== '/admin' ? <div>
      	<Header/> <CartCounter/>
      </div> : <></>}
      
     {routes}

    </div>
  );
}

export default withRouter(App);
