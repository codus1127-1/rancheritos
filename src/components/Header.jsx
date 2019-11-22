import React from 'react'
import { connect } from 'react-redux'
import { updateUserInfo } from '../ducks/reducer'
import axios from 'axios'
import Swal from 'sweetalert2'
import {Link} from 'react-router-dom'
import logo from '../assets/rancheritos_logo.png'

const Header = props => {
  const logout = () => {
    axios.delete('/auth/logout').then(res => {
      Swal.fire(res.data.message)
    //   props.history.push('/')
      props.updateUserInfo({
        email: '',
        name: '',
        user_id: ''
      })
    })
  }

  const goBack = () => {
    window.history.back();
  }

  return (
    <div className="header-container">
      <div className='header'>
        <i onClick={goBack} className="fas fa-arrow-circle-left fa-2x fa-gradient-two"></i>
        <img src={logo} alt="logo"/>
        <Link to='/'>
        <button className="logout" onClick={logout}>Logout</button>
        </Link>
        <Link to='/cart'>
          <button className="logout">cart</button>
        </Link>
      </div>
    </div>
  )
}

function mapStateToProps(reduxState) {
  return reduxState
}

export default connect(
  mapStateToProps,
  { updateUserInfo }
)(Header)