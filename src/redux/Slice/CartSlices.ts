import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface Products {
  id: number;
  title: string;
  img: string;
  price: number;
  quatity: number;
}

const initialState: Array<Products> = [];

export const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Products>) => {
      if (
        state.findIndex((product) => product.id === action.payload.id) === -1
      ) {
        state.push(action.payload);
      } else {
        return state.map((item) => {
          return item.id === action.payload.id
            ? { ...item, quantity: item.quatity + 1 }
            : item;
        });
      }
    },
    removeProduct: (state, action: PayloadAction<number>) => {
      const id = action.payload;

      return state.filter((item) => item.id !== id);
    },
  },
});

export const {addToCart, removeProduct} = CartSlice.actions
export default CartSlice.reducer
