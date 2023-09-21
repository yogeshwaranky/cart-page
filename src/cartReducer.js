// cartReducer.js

const initialState = {
    cartItems: [],
  };
  
  const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TO_CART':
        const newItem = action.payload;
        const existingItem = state.cartItems.find(
          (item) => item.id === newItem.id
        );
  
        if (existingItem) {
          return {
            ...state,
            cartItems: state.cartItems.map((item) =>
              item.id === newItem.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          };
        } else {
          return {
            ...state,
            cartItems: [...state.cartItems, { ...newItem, quantity: 1 }],
          };
        }
  
      case 'REMOVE_FROM_CART':
        const productId = action.payload;
        return {
          ...state,
          cartItems: state.cartItems.filter((item) => item.id !== productId),
        };
  
      default:
        return state;
    }
  };
  
  export default cartReducer;
  