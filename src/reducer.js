export const initialState = {
  basket: [],
  favouriteItems: [
    {
      id: 1,
      image: "https://m.media-amazon.com/images/I/714rkFrqqXL._SX450_.jpg",
      mrp: 2599,
      price: 2499,
      rating: 4.5,
      title: "Electric Drill Machine 13mm",
    },
    {
      id: 2,
      image: "https://m.media-amazon.com/images/I/81LyOCwztpL._SX425_.jpg",
      mrp: 10995,
      price: 10595,
      rating: 5,
      title: "Bosch Professional GSB 180-LI, 18V Cordless Impact Drill Driver",
    },
    {
      id: 3,
      image: "https://5.imimg.com/data5/SA/CN/MY-1043916/reversible-mobile-concrete-mixer-machine-250x250.png",
      mrp: 319.99,
      price: 299.99,
      rating: 4,
      title: "Concrete Mixer",
    },
    {
      id: 4,
      image: "https://5.imimg.com/data5/SELLER/Default/2023/6/314153940/DT/OY/RZ/2057180/whatsapp-image-2023-06-07-at-10-16-29-am-1--500x500.jpeg",
      mrp: 129.99,
      price: 119.99,
      rating: 4,
      title: "Circular Saw Machine",
    },
    {
      id: 5,
      image: "https://5.imimg.com/data5/SELLER/Default/2020/10/OU/JO/ZX/2483340/pbt-rh-26-scaled-500x500.jpg",
      mrp: 99.99,
      price: 89.99,
      rating: 4,
      title: "Hammer Drill",
    },
    {
      id: 6,
      image: "https://5.imimg.com/data5/ANDROID/Default/2021/3/RU/IL/BW/19592605/product-jpeg-500x500.jpg",
      mrp: 79.99,
      price: 69.99,
      rating: 4,
      title: "Angle Grinder",
    },
    {
      id: 7,
      image: "https://5.imimg.com/data5/YW/LY/DQ/SELLER-3062576/checkmate-power-tools-500x500.jpg",
      mrp: 269.99,
      price: 249.99,
      rating: 5,
      title: "Rotary Hammer Drill",
    },
  ],
  
  user: {
    displayName: 'Viswas',
    email: 'viswas@example.com',
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
  },
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