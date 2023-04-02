import { createSlice } from "@reduxjs/toolkit";
import { ICartState, IState } from "../interface";

const name = "cart";

const initialState: ICartState = {
  cartItems: [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};
const cartSlice = createSlice({
  initialState,
  name,
  reducers: {
    addToCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex >= 0) {
        state.cartItems[itemIndex].itemQuantity += 1;
      } else {
        const newItem = { ...action.payload, itemQuantity: 1 };
        state.cartItems.push(newItem);
      }
    },

    removeFromCart(state, action) {
      const nextCartItems = state.cartItems.filter(
        (cartItem) => cartItem.id !== action.payload.id
      );
      state.cartItems = nextCartItems;
    },

    decreaseCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (state.cartItems[itemIndex].itemQuantity > 1) {
        state.cartItems[itemIndex].itemQuantity -= 1;
      } else if (state.cartItems[itemIndex].itemQuantity === 1) {
        const nextCartItems = state.cartItems.filter(
          (item) => item.id !== action.payload.id
        );
        state.cartItems = nextCartItems;
      }
    },

    clearCart(state, action) {
      state.cartItems = [];
    },

    getTotals(state, action) {
        let { total, quantity } = state.cartItems.reduce(
          (cartTotal, cartItem) => {
            const { itemQuantity, itemPrice } = cartItem;
            const itemTotal = itemQuantity * itemPrice;
    
            cartTotal.total += itemTotal;
            cartTotal.quantity += itemQuantity;
    
            return cartTotal;
          },
          {
            total: 0,
            quantity: 0,
          }
        );
        total = parseFloat(total.toFixed(2));
        state.cartTotalQuantity = quantity;
        state.cartTotalAmount = total;
      },}
    });

    export const { addToCart, removeFromCart, decreaseCart, clearCart} = cartSlice.actions;

    export const selectCartItems = (state: IState) => state.cart.cartItems;
    export const selectCartTotalQuantity = (state: IState) => state.cart.cartTotalQuantity;
    export const selectCartTotalAmount = (state: IState) => state.cart.cartTotalAmount;

export default cartSlice.reducer;