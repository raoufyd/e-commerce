export const initialState = {
  basket: [],
  user: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "ADD_TO__BASKET":
      action.item.key = 1 + Math.random();
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case "REMOVE_FROM_BASKET":
      let newBasket = [...state.basket];

      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      if (index > -1) {
        newBasket.splice(index, 1);
        console.log(newBasket);
      } else {
        console.log("hahahaha");
      }
      return {
        ...state,
        basket: newBasket,
      };

    default:
      return state;
  }
}

export default reducer;
