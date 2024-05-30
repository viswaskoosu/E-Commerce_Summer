export const initialState = {
  // basket: [],
  // favouriteItems: [],
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
  // orders: [],
  basket: localStorage.getItem('basket') ? JSON.parse(localStorage.getItem('basket')) : [],
  favouriteItems: localStorage.getItem('favouriteItems') ? JSON.parse(localStorage.getItem('favouriteItems')) : [],
  user: {
    displayName: 'Viswas',
    email: 'viswas@example.com',
    addresses: localStorage.getItem('addresses') ? JSON.parse(localStorage.getItem('addresses')) : [
      {
        id: '1',
        name: 'Viswas',
        street: '123 Main Street',
        city: 'Bengaluru',
        state: 'Karnataka',
        zip: '560001',
        country: 'India',
        isDefault: true,
      },
      {
        id: '2',
        name: 'Viswas',
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
    // isAdmin: false,
  },
  orders: localStorage.getItem('orders') ? JSON.parse(localStorage.getItem('orders')) : [],
  products: [],
  userLoggedIn: false,
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
    // Basket Actions
    case 'ADD_TO_BASKET':
      const newBasket = [...state.basket, action.item];
      localStorage.setItem('basket', JSON.stringify(newBasket));
      return {
        ...state,
        basket: newBasket
      };

    case 'REMOVE_FROM_BASKET':
      const updatedBasket = state.basket.filter(item => item.id !== action.id);
      localStorage.setItem('basket', JSON.stringify(updatedBasket));
      return {
        ...state,
        basket: updatedBasket
      };

    case 'INCREASE_QUANTITY':
      const increasedBasket = state.basket.map(item =>
        item.id === action.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      localStorage.setItem('basket', JSON.stringify(increasedBasket));
      return {
        ...state,
        basket: increasedBasket
      };

    case 'DECREASE_QUANTITY':
      const decreasedBasket = state.basket.map(item =>
        item.id === action.id ? { ...item, quantity: Math.max(item.quantity - 1, 0) } : item
      );
      localStorage.setItem('basket', JSON.stringify(decreasedBasket));
      return {
        ...state,
        basket: decreasedBasket
      };

    case 'EMPTY_BASKET':
      localStorage.removeItem('basket');
      return {
        ...state,
        basket: []
      };

    // Favourites Actions
    case 'ADD_TO_FAVOURITES':
      const newFavourites = [...state.favouriteItems, action.item];
      localStorage.setItem('favouriteItems', JSON.stringify(newFavourites));
      return {
        ...state,
        favouriteItems: newFavourites
      };

    case 'REMOVE_FROM_FAVOURITES':
      const updatedFavourites = state.favouriteItems.filter(item => item.id !== action.id);
      localStorage.setItem('favouriteItems', JSON.stringify(updatedFavourites));
      return {
        ...state,
        favouriteItems: updatedFavourites
      };

    // Address Actions
    case 'ADD_ADDRESS':
      const newAddresses = [...state.user.addresses, action.address];
      localStorage.setItem('addresses', JSON.stringify(newAddresses));
      return {
        ...state,
        user: {
          ...state.user,
          addresses: newAddresses,
        },
      };

    case 'EDIT_ADDRESS':
      const updatedAddresses = state.user.addresses.map((address) =>
        address.id === action.address.id ? action.address : address
      );
      localStorage.setItem('addresses', JSON.stringify(updatedAddresses));
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
      localStorage.setItem('addresses', JSON.stringify(filteredAddresses));
      return {
        ...state,
        user: {
          ...state.user,
          addresses: filteredAddresses,
        },
      };

    // Order Actions
    case 'ADD_ORDER':
      const newOrders = [...state.orders, action.order];
      localStorage.setItem('orders', JSON.stringify(newOrders));
      return {
        ...state,
        orders: newOrders,
      };

    case 'COMPLETE_ORDER':
      return {
        ...state,
        orders: [...state.orders, action.order],
      };

    // User Actions
    case 'UPDATE_USER_INFO':
      return {
        ...state,
        user: {
          ...state.user,
          [action.field]: action.value,
        },
      };

    // Product Actions
    case 'SET_PRODUCTS':
      return {
        ...state,
        products: action.products,
      };

    // Default case
    default:
      return state;
  }
};

export default reducer;
export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);