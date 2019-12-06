import React from 'react';
import './App.scss';
import routes from './routes'
import Header from './components/Header/Header';
import {withRouter} from 'react-router-dom'
import CartCounter from './components/Header/CartCount'
import Swal from 'sweetalert2/src/sweetalert2.js'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css'; 

function App(props) {
  return (
    <div className="App">
      {props.location.pathname !== '/' && props.location.pathname !== '/register' && props.location.pathname !== '/admin' ? <div>
      	<Header/> <CartCounter/>
      </div> : <></>}
      
     {routes}
     <ToastContainer />

    </div>
  );
}

export default withRouter(App);
