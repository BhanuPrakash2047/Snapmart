import { createSlice } from "@reduxjs/toolkit";

const initialAccount = {
  orders: [],
  cart: [],
  totalCost: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialAccount,
  reducers: {
    addOrder: (state, action) => {
      state.orders.push(action.payload);
    },
    addCart: (state, action) => { 
      // You have to give the price and the object (with product.id, product.quantity, price, product.description, production.rating)
      const existingCartItem = state.cart.find(item => item.id === action.payload.id);
      if (existingCartItem) {
        // If item already exists, just increase quantity
        existingCartItem.quantity += action.payload.quantity;
        state.totalCost += action.payload.price * action.payload.quantity;
      } else {
        // Otherwise, add new item
        state.cart.push(action.payload);
        state.totalCost += action.payload.price * action.payload.quantity;
      }
    },
    deleteCart: (state, action) => {
      const productId = action.payload; // Assuming action.payload contains the product ID to be removed
      const itemIndex = state.cart.findIndex((item) => item.id === productId); // Find the index of the item to remove

      if (itemIndex !== -1) {
        const removedItem = state.cart[itemIndex];
        state.totalCost -= removedItem.price * removedItem.quantity; // Adjust total cost by the removed item's price
        state.cart.splice(itemIndex, 1); // Remove the item from the cart
      }
    },
    increaseQuantity: (state, action) => {
      const productId = action.payload.id; // Assuming action.payload is the product ID
      const item = state.cart.find((item) => item.id === productId); // Find the item in the cart
      if (item) {
        item.quantity += action.payload.quantity; // Increase quantity
        state.totalCost +=action.payload.quantity * item.price; // Adjust total cost
      }
    },
    decreaseQuantity: (state, action) => {
      const productId = action.payload; // Assuming action.payload is the product ID
      const item = state.cart.find((item) => item.id === productId); // Find the item in the cart
      if (item && item.quantity > 1) {
        item.quantity -= 1; // Decrease quantity
        state.totalCost -= item.price; // Adjust total cost
      } else if (item && item.quantity === 1) {
        // If the quantity is 1, remove the item from the cart
        const itemIndex = state.cart.findIndex((item) => item.id === productId);
        state.totalCost -= item.price; // Adjust total cost
        state.cart.splice(itemIndex, 1); // Remove the item
      }
    },
  },
});

// Selector to get cart items from the Redux store
export const selectCart = (state) => state.cart.cart;


// Utility function to check if a product is in the cart by ID
export const isProductInCart = (cart, productId) => {
  return cart.some((item) => item.id === productId);
};

export const { addOrder, addCart, deleteCart, increaseQuantity, decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;

