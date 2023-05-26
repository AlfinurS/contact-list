import cartState from "./modules/cart/state";
import cartActions from "./modules/cart/actions";
import cartMuations from "./modules/cart/mutations";
import cartGetters from "./modules/cart/getters";

export default {
  cart: {
    namespaced: true,
    state: cartState,
    actions: cartActions,
    mutations: cartMuations,
    getters: cartGetters,
  },
};
