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
  basket: [],
  user: {
    displayName: "Viswas",
    email: "viswas@example.com",
    password: "viswas",
    photoURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVI8wwjmbk07RHjMaoxGcLQw5kRfAizckn7g&s",
    gender: "Male",
    addresses: [
      {
        id: "1",
        name: "Viswas",
        street: "123 Main Street",
        city: "Bengaluru",
        state: "Karnataka",
        zip: "560001",
        country: "India",
        isDefault: true,
      },
      {
        id: "2",
        name: "Viswas",
        street: "456 Park Avenue",
        city: "Mumbai",
        state: "Maharashtra",
        zip: "400001",
        country: "India",
        isDefault: false,
      },
    ],
    phone: "+91 9876543210",
    paymentMethods: [
      {
        id: "1",
        type: "Credit Card",
        last4: "1234",
        expiration: "12/25",
      },
      {
        id: "2",
        type: "UPI",
        last4: "9876",
        expiration: "N/A",
      },
    ],
    isAdmin: false,
  },
  orders: [],
  products: [],
  userLoggedIn: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      // console.log("KKKKKK",action.user)
      return {
        ...state,
        user: action.user,
      };
    case "SET_PRODUCTS":
      return {
        ...state,
        products: action.products,
      };
    case "SET_BASKET":
      return {
        ...state,
        basket: action.basket,
      };
    case "SET_FAVOURITE_ITEMS":
      return {
        ...state,
        favouriteItems: action.favouriteItems,
      };
    case "SET_ORDERS":
      return {
        ...state,
        orders: action.orders,
      };
    case "ADD_TO_BASKET":
      const existingItemIndex = state.basket.findIndex(
        (item) => item.id === action.id
      );
      if (existingItemIndex !== -1) {
        // const updatedBasket = state.basket.map((item, index) =>
        //   index === existingItemIndex
        //     ? { ...item, quantity: item.quantity + 1 }
        //     : item
        // );
        // localStorage.setItem("basket", JSON.stringify(updatedBasket));
        // return {
        //   ...state,
        //   basket: updatedBasket,
        // };
      } else {
        if (!state.userLoggedIn) {
          const localUser = JSON.parse(localStorage.getItem("user"))
            ? JSON.parse(localStorage.getItem("user"))
            : {};
          //  console.log(localUser)
          localUser.basket = [
            ...state.basket,
            { id: action.id, quantity: action.quantity, price: action.price },
          ];
          localStorage.setItem("user", JSON.stringify(localUser));
        }
        return {
          ...state,
          basket: [
            ...state.basket,
            { id: action.id, quantity: action.quantity, price: action.price },
          ],
        };
      }

    case "REMOVE_FROM_BASKET":
      const updatedBasket = state.basket.filter(
        (item) => item.id !== action.id
      );
      if (!state.userLoggedIn) {
        const localUser = JSON.parse(localStorage.getItem("user"))
          ? JSON.parse(localStorage.getItem("user"))
          : {};
        localUser.basket = updatedBasket;
        localStorage.setItem("user", JSON.stringify(localUser));
      }
      // localStorage.setItem("basket", JSON.stringify(updatedBasket));
      return {
        ...state,
        basket: updatedBasket,
      };

    case "INCREASE_QUANTITY":
      const increasedBasket = state.basket.map((item) =>
        item.id === action.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      if (!state.userLoggedIn) {
        const localUser = JSON.parse(localStorage.getItem("user"))
          ? JSON.parse(localStorage.getItem("user"))
          : {};
        localUser.basket = updatedBasket;
        localStorage.setItem("user", JSON.stringify(localUser));
      }
      // localStorage.setItem("basket", JSON.stringify(increasedBasket));
      return {
        ...state,
        basket: increasedBasket,
      };

    case "ADD_TO_FAVOURITES": {
      const newFavourites = [...state.favouriteItems, action.id];
      // const newUser = state.user;
      // console.log(state)
      if (!state.userLoggedIn) {
        const localUser = JSON.parse(localStorage.getItem("user"))
          ? JSON.parse(localStorage.getItem("user"))
          : {};
        localUser.favouriteItems = newFavourites;
        // newUser.favouriteItems = newFavourites;
        localStorage.setItem("user", JSON.stringify(localUser));
      }
      return {
        ...state,
        favouriteItems: newFavourites,
      };
    }
    case "REMOVE_FROM_FAVOURITES": {
      // const updatedFavourites = state.favouriteItems.filter(item => item.id !== action.id);
      const updatedFavourites = state.favouriteItems.filter(
        (item) => item !== action.id
      );
      // const newUser = state.user;
      if (!state.userLoggedIn) {
        const localUser = JSON.parse(localStorage.getItem("user"))
          ? JSON.parse(localStorage.getItem("user"))
          : {};
        localUser.favouriteItems = updatedFavourites;
        // newUser.favouriteItems = updatedFavourites;
        localStorage.setItem("user", JSON.stringify(JSON.stringify(localUser)));
      }
      return {
        ...state,
        favouriteItems: updatedFavourites,
      };
    }

    case "DECREASE_QUANTITY": {
      const decreasedBasket = state.basket.map((item) =>
        item.id === action.id
          ? { ...item, quantity: Math.max(item.quantity - 1, 1) }
          : item
      );
      if (!state.userLoggedIn) {
        const localUser = JSON.parse(localStorage.getItem("user"))
          ? JSON.parse(localStorage.getItem("user"))
          : {};
        localUser.basket = decreasedBasket;
        localStorage.setItem("user", JSON.stringify(JSON.stringify(localUser)));
      }
      // localStorage.setItem("basket", JSON.stringify(decreasedBasket));

      return {
        ...state,
        basket: state.basket.map((item) =>
          item.id === action.id
            ? { ...item, quantity: Math.max(item.quantity - 1, 0) }
            : item
        ),
      };
    }
    case "SET_QUANTITY": {
      const newBasket = state.basket.map((item) =>
        item.id === action.id ? { ...item, quantity: action.quantity } : item
      );
      if (!state.userLoggedIn) {
        const localUser = JSON.parse(localStorage.getItem("user"))
          ? JSON.parse(localStorage.getItem("user"))
          : {};
        localUser.basket = newBasket;
        localStorage.setItem("user", JSON.stringify(JSON.stringify(localUser)));
      }
      // localStorage.setItem("basket", JSON.stringify(newBasket));
      return {
        ...state,
        basket: newBasket,
      };
    }
    case "EMPTY_BASKET": {
      // localStorage.removeItem("basket"); // Clear basket from localStorage
      if (!state.userLoggedIn) {
        const localUser = JSON.parse(localStorage.getItem("user"))
          ? JSON.parse(localStorage.getItem("user"))
          : {};
        localUser.basket = [];
        localStorage.setItem("user", JSON.stringify(JSON.stringify(localUser)));
      }
      return {
        ...state,
        basket: [],
      };
    }
    case "ADD_ADDRESS":
      const newAddresses = [...state.user.addresses, action.address];
      // localStorage.setItem('addresses', JSON.stringify(newAddresses));
      // localStorage.setItem(
      //   "user",
      //   JSON.stringify({
      //     ...state.user,
      //     addresses: newAddresses,
      //   })
      // );
      return {
        ...state,
        user: {
          ...state.user,
          addresses: newAddresses,
        },
      };

    case "EDIT_ADDRESS":
      const updatedAddresses = state.user.addresses.map((address) =>
        address.id === action.address.id ? action.address : address
      );
      // localStorage.setItem('addresses', JSON.stringify(updatedAddresses));
      // localStorage.setItem(
      //   "user",
      //   JSON.stringify({
      //     ...state.user,
      //     addresses: updatedAddresses,
      //   })
      // );
      return {
        ...state,
        user: {
          ...state.user,
          addresses: updatedAddresses,
        },
      };

    case "DELETE_ADDRESS":
      const currentAddress =
        state.user.currentAddress !== -1 &&
        state.user.addresses[state.user.currentAddress].id === action.addressId
          ? -1
          : state.user.currentAddress;
      const filteredAddresses = state.user.addresses.filter(
        (address) => address.id !== action.addressId
      );
      // localStorage.setItem(
      //   "user",
      //   JSON.stringify({
      //     ...state.user,
      //     addresses: filteredAddresses,
      //     currentAddress: currentAddress
      //   })
      // );
      return {
        ...state,
        user: {
          ...state.user,
          addresses: filteredAddresses,
          currentAddress: currentAddress,
        },
      };
    case "SET_CURRENT_ADDRESS":
      const index = state.user.addresses.findIndex(
        (add) => add.id === action.id
      );
      // localStorage.setItem(
      //   "user",
      //   JSON.stringify({
      //     ...state.user,
      //     currentAddress: index
      //   })
      // );
      return {
        ...state,
        user: {
          ...state.user,
          currentAddress: index,
        },
      };
    // Order Actions
    case "ADD_ORDER":
      const newOrders = [...state.orders, action.order];
      // localStorage.setItem("orders", JSON.stringify(newOrders));
      return {
        ...state,
        orders: newOrders,
      };

    case "COMPLETE_ORDER":
      // localStorage.setItem("orders", JSON.stringify( [...state.orders, action.order]));

      return {
        ...state,
        orders: [...state.orders, action.order],
      };

    // User Actions
    case "UPDATE_USER_INFO":
      return {
        ...state,
        user: {
          ...state.user,
          [action.field]: action.value,
        },
      };

    // Default case
    case "USER_LOGIN":
      // console.log("login")
      return {
        ...state,
        userLoggedIn: true,
      };
    case "USER_LOGOUT":
      return {
        ...state,
        basket: [],
        orders: [],
        favouriteItems: [],
        user: {},
        userLoggedIn: false,
      };
    default:
      return state;
  }
};

export default reducer;

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price * item.quantity + amount, 0);
