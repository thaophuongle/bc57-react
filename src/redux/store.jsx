import { configureStore } from "@reduxjs/toolkit";
import imgReducer from "./reducers/imgReducer";
import fontSizeReducer from "./reducers/fontSizeReducer";
import gioHangReducer from "./reducers/gioHangReducer";

export const store = configureStore({
  reducer: {
    //chứa toàn bộ state của ứng dụng
    number: (state = 1, action) => {
        switch(action.type) {
            case 'CHANGE_NUMBER_ACTION': {
                state = action.payload;
                return state
            };
            default: {
                return state;
            }
        }
      
    },
    img: imgReducer,
    fSizeState: fontSizeReducer,
    gioHangState: gioHangReducer,
  },
});
