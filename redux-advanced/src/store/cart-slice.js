import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: { items: [], totalQuantity: 0, changed: false },
  reducers: {
    replaceCart(state, action) {
      state.items = action.payload.items || [];
      state.totalQuantity = action.payload.totalQuantity || 0;
    },
    addItem(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((i) => i.id === newItem.id);
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          title: newItem.title,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice += newItem.price;
      }

      state.totalQuantity++;
      state.changed = true;
    },
    removeItem(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((i) => i.id === id);
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((i) => i.id !== id);
      } else {
        existingItem.quantity--;
      }

      state.totalQuantity--;
      state.changed = true;
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
