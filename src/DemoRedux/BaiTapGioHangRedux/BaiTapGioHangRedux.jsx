import React, { Component } from 'react'
import { connect } from 'react-redux'
import GioHangRedux from './GioHangRedux'
import DanhSachSanPhamRedux from './DanhSachSanPhamRedux'

class BaiTapGioHangRedux extends Component {
  render() {
    return (
      <div className='container'>
        <GioHangRedux/>
        <DanhSachSanPhamRedux/>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({})


export default connect(mapStateToProps)(BaiTapGioHangRedux)