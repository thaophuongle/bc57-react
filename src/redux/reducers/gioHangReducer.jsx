import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    gioHang: [
    ]
}

const gioHangReducer = createSlice({
  name: "gioHangReducer",
  initialState,
  reducers: {
    themGioHangAction: (state, action) => {
        let {sanPham} = action.payload

        //Xử lý thay đổi state.gioHang
        let spGioHang = {...sanPham, soLuong: 1}

        //Kiểm tra sản phẩm có trong giỏ hàng hay ko
        let sp = state.gioHang.find(spGH => spGH.maSP == spGioHang.maSP)

        if (sp) {
            sp.soLuong +=1
        }
        else {
            state.gioHang.push(spGioHang)
        }

    },

    xoaGioHangAction : (state, action) => {
        const maSPXoa = action.payload

        state.gioHang = state.gioHang.filter(sp => sp.maSP !== maSPXoa)
    },

    tangGiamSoLuongAction: (state,action) => {
        let {maSP,soLuong} = action.payload;
        let spGH = state.gioHang.find(sp=>sp.maSP === maSP);
        if(spGH) {
            spGH.soLuong += soLuong;
            if(spGH.soLuong <1 ){
                state.gioHang = state.gioHang.filter(sp => sp.maSP!== maSP);
            }
        }

    }
  }
});

export const {themGioHangAction, xoaGioHangAction, tangGiamSoLuongAction} = gioHangReducer.actions

export default gioHangReducer.reducer