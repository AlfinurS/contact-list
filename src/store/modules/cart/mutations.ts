import { TMP_STATE } from "@/store/modules/cart/constants";

export default {
  SET_CART_PRODUCTS(state, cartProducts) {
    state.cartProducts = cartProducts;
  },

  RESET(state) {
    const defaultState = Object.entries(TMP_STATE);
    defaultState.forEach((item) => {
      const key = item[0];
      const value = item[1];
      state[key] = value;
    });
  },
};
