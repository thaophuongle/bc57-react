import React, { Component } from 'react'
import GioHang from './GioHang'
import DanhSachSanPham from './DanhSachSanPham'
let data = [
    { "maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AMOLED, 6.2, Full HD+", "heDieuHanh": "Android 9.0 (Pie)", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 5700000, "hinhAnh": "./img/vsphone.jpg" },
    { "maSP": 2, "tenSP": "Meizu 16Xs", "manHinh": "AMOLED, FHD+ 2232 x 1080 pixels", "heDieuHanh": "Android 9.0 (Pie); Flyme", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 7600000, "hinhAnh": "./img/meizuphone.jpg" },
    { "maSP": 3, "tenSP": "Iphone XS Max", "manHinh": "OLED, 6.5, 1242 x 2688 Pixels", "heDieuHanh": "iOS 12", "cameraSau": "Chính 12 MP & Phụ 12 MP", "cameraTruoc": "7 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 27000000, "hinhAnh": "./img/applephone.jpg" },

]

export default class BaiTapGioHang extends Component {

    state = {
        arrGioHang: [
            // { "maSP": 3, "tenSP": "Iphone XS Max", "giaBan": 27000000, "hinhAnh": "./img/applephone.jpg" , soLuong:2 },
            // { "maSP": 1, "tenSP": "VinSmart Live" , "giaBan": 5700000, "hinhAnh": "./img/vsphone.jpg" ,soLuong:3},
        ]
    }

    themGioHang = (sanPhamClick) => {
        console.log('click thêm giỏ hàng', sanPhamClick)
        let spGioHangClick = { ...sanPhamClick, soLuong: 1 }
        let gioHangCapNhat = this.state.arrGioHang;
        /* Xử lý khi thêm 1 sản phẩm vào giỏ hàng */
        // Kiểm tra sản phẩm đã có trong giỏ hàng chưa ?
        let spCheck = gioHangCapNhat.find(sp => sp.maSP === sanPhamClick.maSP);
        if (spCheck) { //Nếu có sản phẩm đã có mã trong giỏ hàng rồi thì tăng số lượng
            spCheck.soLuong += 1;
        } else {
            gioHangCapNhat.push(spGioHangClick) //Nếu chưa có thì lấy sản phẩm có thuộc tính số lượng push vào giỏ hàng
        }
        //setState
        this.setState({
            arrGioHang: gioHangCapNhat
        })
    }

    xoaGioHang = (maSPClick) => {
        //Dựa vào mã để cập nhậ lại this.state.arrGioHang
        //Cách 1: Dựa vào mã spClick tìm ra index sp trong giỏ hàng và xoá
        // let gioHangCapNhat = this.state.arrGioHang; 
        // let index = gioHangCapNhat.findIndex(sp => sp.maSP === maSPClick);
        // if(index !== -1 ){
        //     gioHangCapNhat.splice(index,1)
        // }
        // console.log('maSPClick',maSPClick)
        //Cách 2: Xoá dựa vào filter
        let gioHangCapNhat = this.state.arrGioHang.filter(sp => sp.maSP !== maSPClick);
        //setState
        this.setState({
            arrGioHang: gioHangCapNhat
        })
    }

    capNhatGioHang = (maSPClick,soLuong) =>{
        let gioHangCapNhat = this.state.arrGioHang;

        //Tìm ra sản phẩm dựa vào maSPClick trong giỏ hàng
        let spClick = gioHangCapNhat.find(sp=>sp.maSP === maSPClick);
        if(spClick){
            spClick.soLuong += soLuong;
            //Xử lý khi số lượng giảm xuống đến 0
            // if(spClick.soLuong < 1){
            //     alert('Số lượng tối thiểu là 1');
            //     spClick.soLuong += 1;
            // }
            if(spClick.soLuong < 1){
                if(window.confirm('Bạn có muốn xoá sản phẩm này không')) {
                    this.xoaGioHang(maSPClick);
                    //Sau khi xoá xong dừng hàm luôn
                    return;
                }else {
                    spClick.soLuong += 1;
                }
            }
        }
        //setState
        this.setState({
            arrGioHang:gioHangCapNhat
        })
    }

    render() {
        return (
            <div className='container'>
                <DanhSachSanPham dataSP={data} themGioHang={this.themGioHang} />
                <GioHang arrGioHang={this.state.arrGioHang} xoaGioHang={this.xoaGioHang} capNhatGioHang={this.capNhatGioHang} />

            </div>
        )
    }
}
