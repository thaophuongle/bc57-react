//rxslice
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    imgState: './img/CarBasic/products/black-car.jpg',
}

const imgReducer = createSlice({
  name: "imgReducer", //Tên của reducer (góp phần tạo thành type action)
  initialState,
  reducers: {
    changeCarColorAction: (state, action) => {
        state.imgState = `./img/CarBasic/products/${action.payload}-car.jpg`
    }
  }
});

export const {changeCarColorAction} = imgReducer.actions

export default imgReducer.reducer