import React, { Component } from 'react'

export default class SanPhamDT extends Component {

  render() {
    const {sanPham} = this.props;
    return (
      <div className='card'>
        <img src={sanPham.hinhAnh} alt="..." height={350}/>
        <div className='card-body'>
          <h3>{sanPham.tenSP}</h3>
          <p>{sanPham.giaBan.toLocaleString()}</p>
          <button className='btn btn-dark' onClick={()=>{
            this.props.themGioHang(sanPham)
          }}>
            Thêm vào giỏ <i className='fa fa-cart-plus'> </i>
          </button>
        </div>
      </div>
    )
  }
}
