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
    basket: [], // Initial empty basket array
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
    orders: [],
  },
  products: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'COMPLETE_ORDER':
      return {
        ...state,
        user: {
          ...state.user,
          orders: [...state.user.orders, action.order],
        },
      };
    case 'SET_USER':
      return {
        ...state,
        user: action.user,
      };
    case 'SET_PRODUCTS':
      return {
        ...state,
        products: action.products,
      };
    case 'ADD_TO_BASKET':
      const existingItemIndex = state.user.basket.findIndex(item => item.id === action.item.id);
      let updatedBasket = [];

      if (existingItemIndex !== -1) {
        // Item already exists in basket, update quantity
        updatedBasket = state.user.basket.map((item, index) =>
          index === existingItemIndex
            ? { ...item, quantity: item.quantity + action.item.quantity }
            : item
        );
      } else {
        // Item does not exist in basket, add it
        updatedBasket = [...state.user.basket, action.item];
      }

      return {
        ...state,
        user: {
          ...state.user,
          basket: updatedBasket,
        },
      };
    case 'REMOVE_FROM_BASKET':
      const filteredBasket = state.user.basket.filter(item => item.id !== action.id);
      return {
        ...state,
        user: {
          ...state.user,
          basket: filteredBasket,
        },
      };
    case 'ADD_TO_FAVOURITES':
      return {
        ...state,
        favouriteItems: [...state.favouriteItems, action.item],
      };
    case 'REMOVE_FROM_FAVOURITES':
      return {
        ...state,
        favouriteItems: state.favouriteItems.filter(item => item.id !== action.id),
      };
    case 'INCREASE_QUANTITY':
      return {
        ...state,
        user: {
          ...state.user,
          basket: state.user.basket.map(item =>
            item.id === action.id ? { ...item, quantity: item.quantity + 1 } : item
          ),
        },
      };
    case 'DECREASE_QUANTITY':
      return {
        ...state,
        user: {
          ...state.user,
          basket: state.user.basket.map(item =>
            item.id === action.id ? { ...item, quantity: Math.max(item.quantity - 1, 0) } : item
          ),
        },
      };
    case 'ADD_ORDER':
      return {
        ...state,
        user: {
          ...state.user,
          orders: [...state.user.orders, action.order],
        },
      };
    case 'EMPTY_BASKET':
      return {
        ...state,
        user: {
          ...state.user,
          basket: [],
        },
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
      const updatedAddresses = state.user.addresses.map(address =>
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
      const filteredAddresses = state.user.addresses.filter(address => address.id !== action.addressId);
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
    case 'SIGN_OUT':
      return {
        ...state,
        user: null, // Set user state to null upon sign out
      };
    default:
      return state;
  }
};

export default reducer;

export const getBasketTotal = basket =>
  basket?.reduce((amount, item) => item.price * item.quantity + amount, 0);
