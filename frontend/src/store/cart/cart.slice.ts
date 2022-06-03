import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface Cart {
  id: number;
  name: string;
  price: number;
  img: string;
}

interface CartState {
  cart: Cart[];
  totalItem: number;
  totalSum: number;
}

const initialState: CartState = {
  cart: [],
  totalItem: 0,
  totalSum: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Cart>) => {
      state.cart.push(action.payload);
      state.totalItem = state.totalItem + 1;
      state.totalSum = state.totalSum + action.payload.price;
    },
    removeItem: (
      state,
      action: PayloadAction<{ id: number; price: number }>
    ) => {
      state.cart = state.cart.filter((p) => p.id !== action.payload.id);
      state.totalItem = state.totalItem - 1;
      state.totalSum = state.totalSum - action.payload.price;
    },
    clearCart: (state) => {
      state.cart = [];
      state.totalItem = 0;
      state.totalSum = 0;
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const { addItem, removeItem, clearCart } = cartSlice.actions;
