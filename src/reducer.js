// export const initialState = {
//   basket: [],
//   favouriteItems: [],
//   user: {
//     displayName: null,
//     email: null,
//     address: null,
//     phoneNumber: null,
//     paymentMethods: [],
//     isAdmin: false,
//   },
//   orders: [],
//   products: [],
// };

export const initialState = {
  basket: [],
  favouriteItems: [],
  user: {
    displayName: 'Viswas',
    email: 'viswas@example.com',
    addresses: [
      {
        id: '1',
        street: '123 Main Street',
        city: 'Bengaluru',
        state: 'Karnataka',
        zip: '560001',
        country: 'India',
        isDefault: true,
      },
      {
        id: '2',
        street: '456 Park Avenue',
        city: 'Mumbai',
        state: 'Maharashtra',
        zip: '400001',
        country: 'India',
        isDefault: false,
      },
    ],
    phoneNumber: '+91 9876543210',
    paymentMethods: [
      {
        id: '1',
        type: 'Credit Card',
        last4: '1234',
        expiration: '12/25',
      },
      {
        id: '2',
        type: 'UPI',
        last4: '9876',
        expiration: 'N/A',
      },
    ],
    isAdmin: false,
  },
  orders: [],
  products: [],
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
