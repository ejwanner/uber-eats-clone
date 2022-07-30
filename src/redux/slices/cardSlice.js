import { createSlice } from '@reduxjs/toolkit';
// FIXME: This should be a typescript file
// TODO: add the types for the CardInterface interface
// TODO: add the 'remove_from_card as a new reducer

// export interface CardInterface {
//   items: Restaurant[],
//   restaurantName: String,
// }

export const cardSlice = createSlice({
  name: 'cardSlice',
  initialState: {
    selectedItems: {
      items: [],
      restaurantName: '',
    },
  },
  reducers: {
    add_to_cart: (state, action) => {
      let newState = { ...state };
      if (action.payload.checkboxValue) {
        console.log('ADD_TO_CART');
        newState.selectedItems = {
          items: [
            ...newState.selectedItems.items,
            action.payload
          ],
          restaurantName: action.payload.restaurantName,
        };
      } else {
        console.log('REMOVE_FROM_CART');
        newState.selectedItems = {
          items: [
            ...newState.selectedItems.items.filter((item) => item.title !== action.payload.title)
          ],
          restaurantName: action.payload.restaurantName,
        };
      }
      console.log(newState, '🥁');
      return newState;
    }
  }
});

export const { add_to_cart } = cardSlice.actions;
export default cardSlice.reducer;