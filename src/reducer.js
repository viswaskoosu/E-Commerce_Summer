export const initialState = {
  basket: [],
  favouriteItems: [],
  // user: {
  //   displayName: 'Viswas',
  //   email: 'viswas@example.com',
  //   addresses: [
  //     {
  //       id: '1',
  //       name: 'Viswas',
  //       street: '123 Main Street',
  //       city: 'Bengaluru',
  //       state: 'Karnataka',
  //       zip: '560001',
  //       country: 'India',
  //       isDefault: true,
  //     },
  //     {
  //       id: '2',
  //       name: 'Viswas',
  //       street: '456 Park Avenue',
  //       city: 'Mumbai',
  //       state: 'Maharashtra',
  //       zip: '400001',
  //       country: 'India',
  //       isDefault: false,
  //     },
  //   ],
  //   phoneNumber: '+91 9876543210',
  //   paymentMethods: [
  //     {
  //       id: '1',
  //       type: 'Credit Card',
  //       last4: '1234',
  //       expiration: '12/25',
  //     },
  //     {
  //       id: '2',
  //       type: 'UPI',
  //       last4: '9876',
  //       expiration: 'N/A',
  //     },
  //   ],
  //   isAdmin: false,
  // },
  orders: [],
  products: [],
  
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'COMPLETE_ORDER':
      return {
        ...state,
        orders: [...state.orders, action.order],
      };
    case 'SET_USER':
      // console.log("KKKKKK",action.user)
      return {
        ...state,
        user: action.user
      };
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
    case 'ADD_ADDRESS':
      return {
        ...state,
        user: {
          ...state.user,
          addresses: [...state.user.addresses, action.address],
        },
      };
    case 'EDIT_ADDRESS':
      const updatedAddresses = state.user.addresses.map((address) =>
        address.id === action.address.id ? action.address : address
      );
      return {
        ...state,
        user: {
          ...state.user,
          addresses: updatedAddresses,
        },
      };
    case 'DELETE_ADDRESS':
      const filteredAddresses = state.user.addresses.filter(
        (address) => address.id !== action.addressId
      );
      return {
        ...state,
        user: {
          ...state.user,
          addresses: filteredAddresses,
        },
      };
      case 'UPDATE_USER_INFO':
        return {
          ...state,
          user: {
            ...state.user,
            [action.field]: action.value,
          },
        };
    default:
      return state;
  }
};

export default reducer;
export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);