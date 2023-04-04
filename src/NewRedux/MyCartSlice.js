import {createSlice} from '@reduxjs/toolkit';

const MyCartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addProductToMyCart(state, action) {
      let myIndex = -1;
      state.map((item, index) => {
        if (item.id == action.payload.id) {
          myIndex = index;
        }
      });
      if (myIndex == -1) {
        state.push(action.payload);
      } else {
        state[myIndex].qty = action.payload.qty + 1;
      }
    },
  },
});

export const {addProductToMyCart} = MyCartSlice.actions;
export default MyCartSlice.reducer;
