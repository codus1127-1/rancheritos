import React from 'react'
import { connect } from 'react-redux'
import { updateUserInfo } from '../ducks/reducer'
import axios from 'axios'
import Swal from 'sweetalert2'
import {Link} from 'react-router-dom'

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
  return (
    <header>
      <i className="fas fa-arrow-circle-left"></i>
      <Link to='/'>
          <button onClick={logout}>Logout</button>
      </Link>
    </header>
  )
}

function mapStateToProps(reduxState) {
  return reduxState
}

export default connect(
  mapStateToProps,
  { updateUserInfo }
)(Header)