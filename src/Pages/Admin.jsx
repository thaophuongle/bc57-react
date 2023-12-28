import React, { Component } from 'react'
import { Navigate } from 'react-router-dom'

export default class Admin extends Component {
  render() {
if (!localStorage.getItem('accessToken_admin')){
    alert('You need to sign in to access to admin page')
    return <Navigate to="user"/>
}

    return (
      <div>Admin</div>
    )
  }
}
