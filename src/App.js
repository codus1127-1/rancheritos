import React from 'react';
import './App.scss';
import routes from './routes'
import Header from './components/Header';
import {withRouter} from 'react-router-dom'

function App(props) {
  return (
    <div className="App">
      {props.location.pathname !== '/' && props.location.pathname !== '/register' ? <Header/> : <></>}
     {routes}
    </div>
  );
}

export default withRouter(App);
