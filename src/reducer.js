export const initialState = {
  favouriteItems: [
    {
      id: 1,
      image: "https://m.media-amazon.com/images/I/714rkFrqqXL._SX450_.jpg",
      mrp: 2599,
      price: 2499,
      rating: 4.5,
      title: "Electric Drill Machine 13mm",
    },
  ],
  user: {
    displayName: 'Viswas',
    basket: [], 
    email: 'viswas@example.com',
    password: 'viswas',
    photoURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVI8wwjmbk07RHjMaoxGcLQw5kRfAizckn7g&s',
    gender: 'Male',
    addresses: [
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
    phone: '+91 9876543210',
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
    orders: [],
  },
  orders: [],
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
    case 'SET_BASKET':
      return {
        ...state,
        basket: action.basket
      }
    case 'SET_FAVOURITE_ITEMS':
      return {
        ...state, 
        favouriteItems: action.favouriteItems
      }
    case 'SET_ORDERS':
      return {
        ...state,
        orders: action.orders
      }
    // Basket Actions
    case 'ADD_TO_BASKET':
      const newBasket = [...state.basket, action.item];
      localStorage.setItem('basket', JSON.stringify(newBasket));
      return {
        ...state,
        user: {
          ...state.user,
          orders: [...state.user.orders, action.order],
        },
      };

    case 'REMOVE_FROM_BASKET':
      const updatedBasket = state.basket.filter(item => item.id !== action.id);
      localStorage.setItem('basket', JSON.stringify(updatedBasket));
      return {
        ...state,
        user: action.user
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
    case 'ADD_TO_BASKET':
      const existingItemIndex = state.basket.findIndex(item => item.id === action.item.id);

      if (existingItemIndex !== -1) {
        // Item already exists in basket, update quantity
        updatedBasket = state.basket.map((item, index) =>
          index === existingItemIndex
            ? { ...item, quantity: item.quantity + action.item.quantity }
            : item
        );
      } else {
        // Item does not exist in basket, add it
        updatedBasket = [...state.basket, action.item];
      }

      return {
        ...state,
        user: {
          ...state.user,
          basket: updatedBasket,
        },
      };
    case 'REMOVE_FROM_BASKET':
      const filteredBasket = state.basket.filter(item => item.id !== action.id);
      return {
        ...state,
        user: {
          ...state.user,
          basket: filteredBasket,
        },
      };

    // Favourites Actions
    case 'ADD_TO_FAVOURITES':
      const newFavourites = [...state.favouriteItems, action.item];
      localStorage.setItem('favouriteItems', JSON.stringify(newFavourites));
      return {
        ...state,
        favouriteItems: [...state.favouriteItems, action.item],
      };

    case 'REMOVE_FROM_FAVOURITES':
      const updatedFavourites = state.favouriteItems.filter(item => item.id !== action.id);
      localStorage.setItem('favouriteItems', JSON.stringify(updatedFavourites));
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
      const updatedAddresses = state.user.addresses.map(address =>
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
      const filteredAddresses = state.user.addresses.filter(address => address.id !== action.addressId);
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


    // Default case
    case 'USER_LOGIN':
      // console.log("login")
      return {
        ...state,
        userLoggedIn: true
      }
    case 'USER_LOGOUT':
      return {
        ...state,
        basket: [],
        orders: [],
        favouriteItems: [],
        user: {},
        userLoggedIn: false
      }
    default:
      return state;
  }
};

export default reducer;

export const getBasketTotal = basket =>
  basket?.reduce((amount, item) => item.price * item.quantity + amount, 0);
