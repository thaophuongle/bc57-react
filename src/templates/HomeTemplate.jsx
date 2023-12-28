import React, { Component } from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'

export default class HomeTemplate extends Component {
  render() {
    return (
      <div>
        <Header />
        <Outlet/>
      </div>
    )
  }
}
