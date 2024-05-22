export const initialState = {
  basket: [],
  favouriteItems: [],
  user: null,
  orders: [],
  products: [], // Initialize with an empty array
};



const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_PRODUCTS':
      return {
        ...state,
        products: action.products,
      };
    case 'ADD_TO_BASKET':
      return {
        ...state,
        basket: [...state.basket, action.item]
      };
    case 'REMOVE_FROM_BASKET':
      return {
        ...state,
        basket: state.basket.filter(item => item.id !== action.id)
      };
    case 'ADD_TO_FAVOURITES':
      return {
        ...state,
        favouriteItems: [...state.favouriteItems, action.item]
      };
    case 'REMOVE_FROM_FAVOURITES':
      return {
        ...state,
        favouriteItems: state.favouriteItems.filter(item => item.id !== action.id)
      };
      case 'INCREASE_QUANTITY':
        return {
          ...state,
          basket: state.basket.map(item =>
            item.id === action.id ? { ...item, quantity: item.quantity + 1 } : item
          )
        };
      case 'DECREASE_QUANTITY':
        return {
          ...state,
          basket: state.basket.map(item =>
            item.id === action.id ? { ...item, quantity: Math.max(item.quantity - 1, 0) } : item
          )
        };
        case 'ADD_ORDER':
          return {
            ...state,
            orders: [...state.orders, action.order],
          };
        case 'EMPTY_BASKET':
          return {
            ...state,
            basket: [],
          };
        default:
          return state;
  }
};

export default reducer;
