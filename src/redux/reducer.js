const savedBasket = JSON.parse(localStorage.getItem("basket")) || [];

const initialState = {
  dark: false,
  product: [],
  basket: savedBasket,
};

export const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "LIGHT":
      return { ...state, dark: false };

    case "MOON":
      return { ...state, dark: true };

    case "CREATE_PRODUCT":
      return {
        ...state,
        product: [...state.product, action.payload],
      };

    case "SET_PRODUCTS":
      return {
        ...state,
        product: action.payload,
      };

    case "ADD_TO_BASKET": {
      const existing = state.basket.find(
        (item) => item._id === action.payload._id
      );

      let updatedBasket;
      if (existing) {
        updatedBasket = state.basket.map((item) =>
          item._id === action.payload._id
            ? { ...item, count: (item.count || 1) + 1 }
            : item
        );
      } else {
        updatedBasket = [...state.basket, { ...action.payload, count: 1 }];
      }

      localStorage.setItem("basket", JSON.stringify(updatedBasket));
      return { ...state, basket: updatedBasket };
    }

    case "REMOVE_FROM_BASKET": {
      const updatedBasket = state.basket.filter(
        (item) => item._id !== action.payload
      );
      localStorage.setItem("basket", JSON.stringify(updatedBasket));
      return { ...state, basket: updatedBasket };
    }

    case "CLEAR_BASKET":
      localStorage.removeItem("basket");
      return { ...state, basket: [] };

    default:
      return state;
  }
};
